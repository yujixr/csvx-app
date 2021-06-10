import React from 'react'
import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
    url = 'https://csvx.app';
    title = 'CSVX';
    description = 'Comma-Separated Values eXtended';
    colour = '#565d64'


    render(): JSX.Element {
        return (
            <Html lang='en-US'>
                <Head>
                    <link rel='icon' href='/favicon.ico' />

                    <meta name='application-name' content={this.title} />
                    <meta name='apple-mobile-web-app-capable' content='yes' />
                    <meta name='apple-mobile-web-app-status-bar-style' content='default' />
                    <meta name='apple-mobile-web-app-title' content={this.title} />
                    <meta name='description' content={this.description} />
                    <meta name='format-detection' content='telephone=no' />
                    <meta name='mobile-web-app-capable' content='yes' />
                    <meta name='msapplication-config' content='/images/icons/browserconfig.xml' />
                    <meta name='msapplication-TileColor' content={this.colour} />
                    <meta name='msapplication-tap-highlight' content='no' />
                    <meta name='theme-color' content={this.colour} />

                    <link rel='apple-touch-icon' href='/images/icons/apple-touch-icon.png' />
                    <link rel='apple-touch-icon' sizes='152x152' href='/images/icons/apple-touch-icon-152x152.png' />
                    <link rel='apple-touch-icon' sizes='180x180' href='/images/icons/apple-touch-icon-180x180.png' />
                    {/* <link rel='apple-touch-icon' sizes='167x167' href='/images/icons/apple-touch-icon-167x167.png' /> */}


                    <link rel='icon' type='image/png' sizes='32x32' href='/images/icons/favicon-32x32.png' />
                    <link rel='icon' type='image/png' sizes='16x16' href='/images/icons/favicon-16x16.png' />
                    <link rel='manifest' href='/manifest.json' />
                    <link rel='mask-icon' href='/images/icons/safari-pinned-tab.svg' color={this.colour} />
                    <link rel='shortcut icon' href='/favicon.ico' />

                    <meta name='twitter:card' content='summary_large_image' />
                    <meta name='twitter:url' content={this.url} />
                    <meta name='twitter:title' content={this.title} />
                    <meta name='twitter:description' content={this.description} />
                    <meta name='twitter:image' content={`${this.url}/images/ogp.png`} />
                    <meta name='twitter:creator' content='@yujixr' />
                    <meta property='og:type' content='website' />
                    <meta property='og:title' content={this.title} />
                    <meta property='og:description' content={this.description} />
                    <meta property='og:site_name' content={this.title} />
                    <meta property='og:url' content={this.url} />
                    <meta property='og:image' content={`${this.url}/images/ogp.png`} />

                    {/* <link rel='apple-touch-startup-image' href='/static/images/apple_splash_2048.png' sizes='2048x2732' />
                    <link rel='apple-touch-startup-image' href='/static/images/apple_splash_1668.png' sizes='1668x2224' />
                    <link rel='apple-touch-startup-image' href='/static/images/apple_splash_1536.png' sizes='1536x2048' />
                    <link rel='apple-touch-startup-image' href='/static/images/apple_splash_1125.png' sizes='1125x2436' />
                    <link rel='apple-touch-startup-image' href='/static/images/apple_splash_1242.png' sizes='1242x2208' />
                    <link rel='apple-touch-startup-image' href='/static/images/apple_splash_750.png' sizes='750x1334' />
                    <link rel='apple-touch-startup-image' href='/static/images/apple_splash_640.png' sizes='640x1136' /> */}

                    <script defer src='https://static.cloudflareinsights.com/beacon.min.js' data-cf-beacon='{"token": "059777082b524a5f9db8f2d35ef5d3df"}' />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html >
        );
    }
}

export default MyDocument;
