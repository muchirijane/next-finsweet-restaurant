import React from 'react'
import Head from 'next/head'
import Header from '../Header/Header'
import Meta from './Meta'
export default function Layout({pageTitle}) {
 
  return (
    <>
    <Meta pageTitle={pageTitle}/>
    <Header/>
    <main>
       
      children}
    </main>
      
    </>
  )
}
