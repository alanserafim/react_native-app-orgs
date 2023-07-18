import React from 'react';
import { StyleSheet, View } from 'react-native';
import Topo from '../Cesta/components/Topo';
import Detalhes from './components/Detalhes';

export default function Cesta({topo, detalhes}) {
  return (
    <>
      <Topo {...topo}/>
      <View style={estilo.cesta}>
        <Detalhes {...detalhes}/>
      </View>
    </>
  )
}

const estilo = StyleSheet.create({
  cesta: {
    paddingVertical: 8,
    paddingHorizontal: 16
  }
})
