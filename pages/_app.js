import React from 'react'
import App from 'next/app'
import {StoreProvider} from 'easy-peasy'
import store from '../store/store'
import '../styles/tailwind.css'
import '../styles/index.css'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props
    return <>
      <StoreProvider store={store}>
        <Component {...pageProps} />
      </StoreProvider>
    </>
  }
}

export default MyApp
