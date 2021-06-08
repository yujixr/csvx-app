import Head from 'next/head'
import React from 'react'

export default function About() {
    return <div>
        <Head>
            <title>About | CSVX</title>
            <meta name='description' content='Comma-Separated Values eXtended' />
            <link rel='icon' href='/favicon.ico' />
            <script defer src='https://static.cloudflareinsights.com/beacon.min.js' data-cf-beacon='{"token": "059777082b524a5f9db8f2d35ef5d3df"}'></script>
        </Head>
        <h1>About CSVX</h1>
        <p>CSVX is an extension of CSV format. This extension allows you to use CSV as a spreadsheet.</p>
        <p>Current CSVX library is implemented by Rust 🦀.</p>
        <p><a href='https://github.com/yujixr/csvx' target="_blank" rel="noreferrer" className='pure-button pure-button-primary'>Visit GitHub repo</a></p>
        <img className='pure-img' src='example.png'></img>
        <h2>About this spreadsheet application</h2>
        <p>This application is built with Next.js, WebAssembly. Internally, this uses CSVX.</p>
        <p><a href='https://github.com/yujixr/csvx-app' target="_blank" rel="noreferrer" className='pure-button pure-button-primary'>Visit GitHub repo</a></p>
    </div>
}
