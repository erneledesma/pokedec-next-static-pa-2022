
import { FC } from 'react'
import Head from 'next/head'
import { NavBar } from '../ui/NavBar';

interface Props {
    title?: string;
    children: any
}

export const Layout: FC<Props> = ({ children, title }) => {
  return (
    <>
        <Head>
            <title> { title || "Pokemmon APP" }</title>
            <meta name="author" content="Ernesto Ledesma" />
            <meta name="description" content="Información sobre los pokemon xxxxxx" />
            <meta name="keywords" content="pokemon, pokedex, pokemmon, pokemmon app" />
        </Head>

        <NavBar />

        <main
            style={{
                padding: '0px 20px',
            }}
        >{children}</main>
    </>
  )
}
