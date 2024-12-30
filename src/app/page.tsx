import React from 'react'
import Header from './ui/Header'
import Body from './ui/Body'
import Work from './work/page'
import Gallery from './gallery/page'
import Footer from './core/Footer'
import "./globals.css";

export default function page() {
  return (
    <div>
        <Header />
        <Body />
        <Work />
        <Gallery />
        <Footer />
    </div>
  )
}
