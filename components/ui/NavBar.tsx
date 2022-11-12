

import { Image, Text, theme, useTheme } from '@nextui-org/react'
import React from 'react'

export const NavBar = () => {

    const { theme } = useTheme()

  return (
    <div style={{
        display: 'flex',
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'start',
        padding: '0px 50px',
        backgroundColor: theme?.colors.gray200.value,
    }}>
        <Image
            src="https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png"
            alt='pokeball'
            width={100}
            height={100}
        />

        <Text h2 style={{ color: theme?.colors.gray800.value}} hideIn='xs'>P</Text>
        <Text h3 style={{ color: theme?.colors.gray800.value}} hideIn='xs'>okemon App</Text>
    </div>
  )
}
