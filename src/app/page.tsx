import React from 'react'
import Header from './ui/Header'
import Body from './ui/Body'
import Work from './core/Work'
import Gallery from './core/Gallery'
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
