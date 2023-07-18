import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import Topo from '../Cesta/components/Topo';
import Detalhes from './components/Detalhes';
import Item from './components/Item';
import Texto from '../../components/Texto';


export default function Cesta({ topo, detalhes, itens }) {
  return (
    <>
      <FlatList
        data={itens.lista}
        renderItem={Item}
        keyExtractor={({ nome }) => nome}
        ListHeaderComponent={() => {
          return <>
            <Topo {...topo} />
            <View style={estilo.cesta}>
              <Detalhes {...detalhes} />
              <Texto style={estilo.titulo}>{itens.titulo}</Texto>
            </View>
          </>
        }}
      />
    </>
  )
}

const estilo = StyleSheet.create({
  cesta: {
    paddingVertical: 8,
    paddingHorizontal: 16
  },
  
  titulo: {
    color: "#464646",
    fontWeight: "bold",
    marginTop: 32,
    marginBottom: 8,
    fontSize: 20,
    lineHeight: 32
}
})
