import React from 'react'
import Head from 'next/head'
import Header from '../Header/Header'
import Meta from './Meta'
import GlobalStyle from '../../GlobalStyles/GlobalStyles'
export default function Layout({ pageTitle, children, ...props }) {
  return (
    <>
      <GlobalStyle />
      <Meta pageTitle={pageTitle} />
      <Header />
      <main>{children}</main>
    </>
  )
}
