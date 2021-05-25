import React from 'react'
import NotFoundsty from '../styles/NotFound.module.css'
import Link from 'next/link'

export default function Custom404() {
    return (
    <div className={NotFoundsty.container}>
    <div id={NotFoundsty.card}>
        <h1>404 - Page Not Found</h1>
        <h2>Bummer!</h2>
        <Link href="/"><a id={NotFoundsty.homelink}>Home</a></Link>
        </div>
    </div>)
  }