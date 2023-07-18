import React from 'react'
import Texto from '../../../components/Texto'
import { Image, StyleSheet, View } from 'react-native'

export default function Item({ item: { nome, imagem } }) {
        return(
        <View style={estilo.itens}>
                <Image source={imagem} style={estilo.imagem} />
                <Texto style={estilo.nome}>{nome}</Texto>
        </View>
        )
}

const estilo = StyleSheet.create({
    itens: {
        flexDirection: "row",
        borderBottomWidth: 1,
        borderBottomColor: "#ECECEC",
        paddingVertical: 16,
        marginHorizontal: 16,
        alignItems: "center"
    },
    imagem: {
        width: 46,
        height: 46
    },
    nome: {
        fontSize: 16,
        lineHeight: 26,
        marginLeft: 11,
        color: "#464646"
    }
})
