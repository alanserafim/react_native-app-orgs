import React from 'react'
import { StyleSheet, TouchableOpacity } from 'react-native'
import Texto from './Texto'

export default function Botao({ children }) {
    return (
        <TouchableOpacity style={estilo.botao} onPress={() => { }}>
            <Texto style={estilo.textoBotao}> {children} </Texto>
        </TouchableOpacity>
    )
}

const estilo = StyleSheet.create({
    botao: {
        marginTop: 16,
        backgroundColor: "#2a9f85",
        paddingVertical: 16,
        borderRadius: 6
    },
    textoBotao: {
        color: "#FFFFFF",
        fontSize: 16,
        lineHeight: 26,
        textAlign: "center",
        fontWeight: "bold"
    }
})