import Head from 'next/head'
import React, { useEffect, useState } from 'react'
import init, {
  get_x_size, get_y_size, get_raw_item, get_calculated_item, update_item,
  insert_x, insert_y, remove_x, remove_y
} from '../pkg/csvx_app.js';

let wasm = undefined;

function loadTable(xSize: number, ySize: number): string[][] {
  const table = [] as string[][];
  for (let y = 0; y < ySize; y++) {
    const row = [];
    for (let x = 0; x < xSize; x++) {
      row.push(get_calculated_item(x, y));
    }
    table.push(row);
  }
  return table
}

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);

  const [xSize, setXSize] = useState(0);
  const [ySize, setYSize] = useState(0);
  const [table, setTable] = useState([] as string[][]);

  const [editX, setEditX] = useState(0);
  const [editY, setEditY] = useState(0);
  const [editFormula, setEditFormula] = useState('');
  const [isValidPosition, setIsValidPosition] = useState(false);

  const [rowOrColumn, setRowOrColumn] = useState('');
  const [insertRemovePos, setInsertRemovePos] = useState(0);

  useEffect(() => {
    if (isLoaded) {
      setEditFormula(get_raw_item(editX, editY));
    }
  }, [editX, editY, table])

  useEffect(() => {
    setIsValidPosition(
      isLoaded &&
      0 <= editX &&
      editX < xSize &&
      0 <= editY &&
      editY < ySize);
  }, [table, editX, editY, xSize, ySize]);

  useEffect(() => {
    init('/csvx.wasm').then(v => {
      console.log('Loaded')
      wasm = v;
      setIsLoaded(true);
      setXSize(get_x_size());
      setYSize(get_y_size());
    });
  }, []);


  useEffect(() => {
    setTable(loadTable(xSize, ySize));
  }, [xSize, ySize]);

  useEffect(() => {
    if (table.length != 0 &&
      table[0].length != 0 &&
      0 <= editX &&
      editX < xSize &&
      0 <= editY &&
      editY < ySize) {
      update_item(editX, editY, editFormula);
      setTable(loadTable(xSize, ySize));
    }
  }, [editFormula])

  return (
    <div>
      <Head>
        <title>Home | CSVX</title>
        <meta name='description' content='Comma-Separated Values eXtended' />
        <link rel='icon' href='/favicon.ico' />
        <script defer src='https://static.cloudflareinsights.com/beacon.min.js' data-cf-beacon='{"token": "059777082b524a5f9db8f2d35ef5d3df"}'></script>
      </Head>
      <div className='pure-form pure-g'>
        <fieldset>
          <legend className='pure-u-1'>Edit</legend>
          <input
            value={editX}
            onChange={e => {
              setEditX(Number.parseInt(e.target.value))
            }}
            type='number'
            min='0'
            placeholder='x'
            className='pure-u-1-12'
          />
          <input
            value={editY}
            onChange={e => {
              setEditY(Number.parseInt(e.target.value))
            }}
            type='number'
            min='0'
            placeholder='y'
            className='pure-u-1-12'
          />
          <input
            value={editFormula}
            onChange={e => {
              setEditFormula(e.target.value)
            }}
            type='text'
            placeholder='value or formula'
            className='pure-u-5-6'
            disabled={!isValidPosition}
          />
        </fieldset>
      </div>
      <div className='pure-form'>
        <fieldset>
          <legend>Insert / Remove</legend>
          <select value={rowOrColumn} onChange={e => setRowOrColumn(e.target.value)} className='pure-input-1-4'>
            <option disabled value=''>Please Select</option>
            <option>Row</option>
            <option>Column</option>
          </select>
          <input
            value={insertRemovePos}
            onChange={e => setInsertRemovePos(Number.parseInt(e.target.value))}
            type='number'
            min='0'
            placeholder='position'
            className='pure-input-1-4'
          />
          <button className='pure-button'
            disabled={rowOrColumn === '' ||
              insertRemovePos < 0 ||
              (rowOrColumn === 'Row' ? ySize : xSize) < insertRemovePos}
            onClick={() => {
              if (rowOrColumn == 'Row') {
                insert_y(insertRemovePos);
              }
              else {
                insert_x(insertRemovePos);
              }
              setXSize(get_x_size());
              setYSize(get_y_size());
            }}>Insert</button>
          <button className='pure-button'
            disabled={rowOrColumn === '' ||
              insertRemovePos < 0 ||
              (rowOrColumn === 'Row' ? ySize : xSize) <= insertRemovePos ||
              (rowOrColumn === 'Row' ? ySize : xSize) == 1}
            onClick={() => {
              if (rowOrColumn == 'Row') {
                remove_y(insertRemovePos);
              }
              else {
                remove_x(insertRemovePos);
              }
              setXSize(get_x_size());
              setYSize(get_y_size());
            }}>Remove</button>
          {rowOrColumn !== '' &&
            <p>Insert / Remove a {rowOrColumn} at {insertRemovePos}</p>
          }
        </fieldset>
      </div>
      <table className='pure-table pure-table-bordered'>
        <tbody>
          {table.map(
            (column, y) =>
              <tr key={y}>
                {column.map((item, x) =>
                  <td key={x}
                    title={'(' + x + ',' + y + ')'}
                    onClick={() => {
                      setEditX(x)
                      setEditY(y)
                      if (rowOrColumn === 'Row') {
                        setInsertRemovePos(y)
                      } else if (rowOrColumn === 'Column') {
                        setInsertRemovePos(x)
                      }
                    }}
                  >
                    {item}
                  </td>
                )}
              </tr>
          )}
        </tbody>
      </table>
    </div>
  )
}
