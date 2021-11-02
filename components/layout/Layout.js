import React from 'react'

import Header from '../Header/Header'
import Meta from './Meta'
import GlobalStyle from '../../GlobalStyles/GlobalStyles'
export default function Layout({ pageTitle, children }) {
  return (
    <>
      <GlobalStyle />
      <Meta pageTitle={pageTitle} />
      <Header />
      <main>{children}</main>
    </>
  )
}
