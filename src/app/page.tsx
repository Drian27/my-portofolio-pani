import React from 'react'
import Body from './ui/Body'
import Work from './work/page'
import Gallery from './garage/page'
import Footer from './core/Footer'
import "./globals.css";

export default function page() {
  return (
    <div>
        <Body />
        <Work />
        <Gallery />
        <Footer />
    </div>
  )
}
