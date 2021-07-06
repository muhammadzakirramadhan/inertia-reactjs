import React, { useEffect } from 'react'
import { InertiaLink } from '@inertiajs/inertia-react'

export default function Layout({ children }) {
  return (
    <main>
        <header>
            <InertiaLink href="/home">Home</InertiaLink>
            <InertiaLink href="/about">About</InertiaLink>
        </header>
        <article>{children}</article>
    </main>
    )
}