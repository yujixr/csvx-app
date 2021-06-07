import 'purecss/build/pure-min.css'
import 'purecss/build/grids-responsive-min.css'
import '../styles/globals.css'
import Link from 'next/link'
import type { AppProps } from 'next/app'
import React from 'react'

function MyApp({ Component, pageProps }: AppProps) {
  return <div className='pure-g'>
    <div className='pure-u-1-24'></div>
    <div className='pure-u-22-24'>
      <div className='pure-menu pure-menu-horizontal'>
        <h1 className='pure-menu-heading'>CSVX</h1>
        <ul className='pure-menu-list'>
          <li className='pure-menu-item'>
            <Link href='/'><a className='pure-menu-link'>Home</a></Link>
          </li>
          <li className='pure-menu-item'>
            <Link href='/about'><a className='pure-menu-link'>About</a></Link>
          </li>
          <li className='pure-menu-item'>
            <Link href='/developer'><a className='pure-menu-link'>Developer</a></Link>
          </li>
          <li className='pure-menu-item'>
            <Link href='/contact'><a className='pure-menu-link'>Contact</a></Link>
          </li>
        </ul>
      </div>
      <div>
        <Component {...pageProps} />
      </div>
    </div>
    <div className='pure-u-1-24'></div>
  </div>
}
export default MyApp