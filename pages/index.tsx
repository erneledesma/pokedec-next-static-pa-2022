import { FC } from 'react';
import { GetStaticProps } from 'next'
import { Button } from "@nextui-org/react";
import { Layout } from '../components/layouts/Layout';
import { pokeApi } from '../api-restr';
import { PokemonListResponse, SmallPokemon } from '../interfaces';


interface Props {
  pokemons: SmallPokemon[];
 
}


const HomePage: FC<Props> = ({ pokemons}) => { 

console.log(pokemons)

  return (
    <Layout >
      <ul>
        {
          pokemons.map(( { id, name , img}) => (
            <li key={id}>
              #{id} - {name}
              <img src={img} alt="imagen pokemon" />
            </li>
          ))
        }
      </ul>
    </Layout>
  )

}
// You should use getStaticProps when:
//- The data required to render the page is available at build time ahead of a user’s request.
//- The data comes from a headless CMS.
//- The data can be publicly cached (not user-specific).
//- The page must be pre-rendered (for SEO) and be very fast — getStaticProps generates HTML and JSON files, both of which can be cached by a CDN for performance.

export const getStaticProps: GetStaticProps = async (ctx) => {
  const { data } = await pokeApi.get<PokemonListResponse>('/pokemon?limit=151')

  const pokemons: SmallPokemon[] = data.results.map((poke, index) => ({
    ...poke,
    id: index,
    img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`

  }))
  console.log(data)

  return {
    props: {
      pokemons
    }
  }
}

export default HomePage;


