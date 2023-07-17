import React from 'react'
import { Dimensions, Image, StyleSheet, Text, View } from 'react-native'
import topo from '../../assets/topo.png'
import logo from "../../assets/logo.png"
import Texto from '../components/Texto';

const width = Dimensions.get('screen').width;

export default function Cesta() {
  return (
    <>
      <Image
        source={topo}
        style={estilo.topo}
      />
      <Texto style={estilo.titulo}>Detalhe da Cesta</Texto>
      <View style={estilo.cesta}>
        <Text style={estilo.nome}>Cesta de Verduras</Text>

        <View style={estilo.secaoFazenda}>
          <Image source={logo} style={estilo.imagemFazenda}/>
          <Text style={estilo.nomefazenda}>Jenny Jack Farm</Text>
        </View>

        <Texto style={estilo.descricao}>
          Uma cesta com produtos selecionados
          cuidadosamente da fazenda direto
          para sua cozinha
        </Texto>
        <Text style={estilo.preco}>R$ 40,00</Text>
      </View>
    </>
  )
}

const estilo = StyleSheet.create({
  topo: {
    width: "100%",
    height: (578 / 768) * width,
  },
  titulo: {
    width: "100%",
    position: "absolute",
    textAlign: "center",
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
    lineHeight: 26,
    padding: 16
  },
  cesta: {
    paddingVertical: 8,
    paddingHorizontal: 16
  },
  nome: {
    color: "#464646",
    fontSize: 26,
    lineHeight: 42,
    fontFamily: "MontserratBold"
  },
  secaoFazenda: {
    flexDirection: 'row',
    paddingVertical: 12
  },
  imagemFazenda: {
    width: 32,
    height: 32
  },
  nomefazenda: {
    fontSize: 16,
    lineHeight: 26,
    marginLeft: 12,
    fontFamily: "MontserratRegular"
  },
  descricao: {
    color: "#A3A3A3",
    fontSize: 16,
    lineHeight: 26
  },
  preco: {
    color: "#2A9F85",
    fontWeight: "bold",
    fontSize: 26,
    lineHeight: 42,
    marginTop: 8
  }
})
