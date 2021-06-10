import { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import React from 'react'

const About: NextPage = () => {
    return <div>
        <Head>
            <title>About | CSVX</title>
        </Head>
        <h1>About CSVX</h1>
        <p>CSVX is an extension of CSV format. This extension allows you to use CSV as a spreadsheet.</p>
        <p>Current CSVX library is implemented by Rust 🦀.</p>
        <p><a href='https://github.com/yujixr/csvx' target="_blank" rel="noreferrer" className='pure-button pure-button-primary'>Visit GitHub repo</a></p>
        <Image className='pure-img' src='/images/example.png' width='1464' height='1228' />
        <h2>About this spreadsheet application</h2>
        <p>This application is built with Next.js, WebAssembly. Internally, this uses CSVX.</p>
        <p><a href='https://github.com/yujixr/csvx-app' target="_blank" rel="noreferrer" className='pure-button pure-button-primary'>Visit GitHub repo</a></p>
    </div>
};

export default About;
