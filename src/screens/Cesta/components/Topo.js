import React from 'react';
import topo from '../../../../assets/topo.png';
import Texto from '../../../components/Texto';
import { Dimensions, Image, StyleSheet } from 'react-native';

const width = Dimensions.get('screen').width;

export default function Topo({ titulo }) {


  return (
   <>
     <Image source={topo} style={estilo.topo} />
    <Texto style={estilo.titulo}>{ titulo }</Texto>
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
      }
})



