import React from 'react'
import { StyleSheet, Text } from 'react-native'

export default function Texto({ style, children }) {
  let estilo = estilos.texto

  if (style?.fontWeigth === 'bold') {
    estilo = estilos.textoNegrito
  }

  return (
    <Text style={[style, estilo]}>
        {children}
    </Text>
  )
}


const estilos = StyleSheet.create ({
    texto: {
        fontFamily: "MontserratRegular",
    }, 
    textoNegrito: {
        fontFamily: "MontserratBold",
    }
})
