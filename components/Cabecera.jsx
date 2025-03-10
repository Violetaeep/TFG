import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { alto } from '../helpers/dimensiones'
import { tema } from '../constants/tema'
import Atras from './Atras'
import { useRouter } from 'expo-router'

const Cabecera = ({titulo, atras=false, mb=10}) => {

    const router = useRouter()
    return (
    <View style={[styles.container, {marginBottom: mb}]}>
        {
            atras && (
                <View style={styles.atras}>
                    <Atras router={router}/>
                </View>
            )
        }
        <Text style={styles.titulo}>{titulo || ""}</Text>
    </View>
  )
}

export default Cabecera

const styles = StyleSheet.create({
    container:{
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 5,
        gap: 10,
    },
    titulo:{
        fontSize: alto(2.7),
        fontWeight: tema.fonts.semibold,
        color: tema.colors.primary
    },
    atras:{
        position: "absolute",
        left:0
    }
})