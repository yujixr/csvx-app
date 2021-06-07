import Head from 'next/head'
import React, { useEffect, useState } from 'react'

export default function Home() {
  const [xSize, setXSize] = useState(5);
  const [ySize, setYSize] = useState(5);
  const [table, setTable] = useState([
    ['0', '1', '2', '3', '4'],
    ['5', '6', '7', '8', '9'],
    ['10', '11', '12', '13', '14'],
    ['15', '16', '17', '18', '19'],
    ['20', '21', '22', '23', '24'],
  ]);

  const [editX, setEditX] = useState(0);
  const [editY, setEditY] = useState(0);
  const [editFormula, setEditFormula] = useState('');

  const [rowOrColumn, setRowOrColumn] = useState('');
  const [insertRemovePos, setInsertRemovePos] = useState(0);

  useEffect(() => {
    if (isValidPosition) {
      setEditFormula(table[editY][editX])
    } else {
      setEditFormula('')
    }
  })

  useEffect(() => {
    setXSize(table[0].length)
    setYSize(table.length)
  })

  const isValidPosition = (0 <= editX &&
    editX < xSize &&
    0 <= editY &&
    editY < ySize);
  const isInsertable = (
    rowOrColumn !== '' &&
    insertRemovePos >= 0 &&
    insertRemovePos <=
    (rowOrColumn === 'row' ? ySize : xSize)
  );
  const isRemovable = (
    rowOrColumn !== '' &&
    insertRemovePos >= 0 &&
    insertRemovePos <
    (rowOrColumn === 'row' ? ySize : xSize)
  );

  return (
    <div>
      <Head>
        <title>Home | CSVX</title>
        <meta name='description' content='Comma-Separated Values eXtended' />
        <link rel='icon' href='/favicon.ico' />
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
              table[editY][editX] = e.target.value
              setTable(table)
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
          <button className='pure-button' disabled={!isInsertable}>Insert</button>
          <button className='pure-button' disabled={!isRemovable}>Remove</button>
          {isInsertable ? <p>Insert / Remove a {rowOrColumn} at {insertRemovePos}</p>
            : <div></div>}
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
