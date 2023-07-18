import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import Texto from '../../../components/Texto';

export default function Detalhes({
    nome,
    logoFazenda,
    nomeFazenda,
    descricao,
    preco
}) {
    return (
        <>
            <Texto style={estilo.nome}>{ nome }</Texto>
            <View style={estilo.secaoFazenda}>
                <Image source={ logoFazenda } style={estilo.imagemFazenda} />
                <Texto style={estilo.nomefazenda}>{ nomeFazenda }</Texto>
            </View>
            <Texto style={estilo.descricao}> { descricao }</Texto>
            <Texto style={estilo.preco}>{ preco }</Texto>
        </>
    )
}

const estilo = StyleSheet.create({
    nome: {
        color: "#464646",
        fontSize: 26,
        fontWeight: 'bold',
        lineHeight: 42,
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
