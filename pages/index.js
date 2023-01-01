import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import { ApolloProvider } from '@apollo/client'
import client from '../apollo-client';
import { PokemonContainer } from '../containers/PokemonContainer'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <ApolloProvider client={client}>
      <main>
        <PokemonContainer />
      </main>
    </ApolloProvider>
  )
}
