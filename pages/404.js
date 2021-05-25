import { useEffect } from 'react'
import { useRouter } from 'next/router'
import NotFoundsty from '../styles/NotFound.module.css'
import Link from 'next/link'

export default function Custom404() {

    const router = useRouter();

    useEffect(() => {
        setTimeout(() => {
        router.push('/')
        }, 3000)

    })
    return (
    <div className={NotFoundsty.container}>
    <div id={NotFoundsty.card}>
        <h1>404 - Page Not Found</h1>
        <h2>Bummer!</h2>
        <Link href="/"><a id={NotFoundsty.homelink}>Go back Home</a></Link>
        </div>
    </div>)
  }