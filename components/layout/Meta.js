import React from 'react'
import Head from 'next/head'


export default function Meta({pageTitle}) {
  const twitterHandle = '@TrcyCss';
  const currentUrl = '';
  const previewImage ='/public/finsweet-site.png';
  const siteName = 'FinSweet restaurant';
  const description='We a growing New York based restaurant and our mission is to provide you with the best quality food and to make sure that you enjoy your meal. The food we serve is made with the best farm produce and the best from our farm and locals.'
  return (
    <>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />
      <meta name='description' content={description}/>
      <meta property='og:title' description={pageTitle} key='ogtitle'/>
      <meta property='og:description' description={description} key='ogdescriptiom'/>
      {/* Twitter */}
      <meta name='twitter:card' content='summary' key='twitterCard'/>
      <meta name='twitter:creator' content={twitterHandle} 
      key='twitterHandle'/>
      <meta property="twitter:site" content={twitterHandle} />
      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property='og:url' content={currentUrl} key='ogurl'/>
      <meta property="og:title" content={pageTitle}/>
      <meta property='og:image' content={previewImage} key='ogimage'/>
      <meta property="og:image:width" content="1280" />
      <meta property="og:image:height" content="640" />
      <meta property='og:site_name' content={siteName} key='ogsitename'/>
      <meta property="og:title" content={pageTitle} key="ogtitle" />
      <meta property="og:description" content={description} key="ogdesc" />

      <title>{pageTitle}}/title>
    </Head>
      
    </>
  )
}
