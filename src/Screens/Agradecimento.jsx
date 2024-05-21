import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from '../styles'
import { useNavigation } from '@react-navigation/native'

export default function Agradecimento() {

    const navigation = useNavigation()

    return (
        <View style={styles.fundo_app}>
            <View style={styles.agradecimento_container}>
                <Text style={styles.text_agradecimento}>Muito Obrigado pelo pedido !!</Text>
                <Text style={styles.text_agradecimento2}>Sua pizza chegara em breve.</Text>
            </View>
            <View style={styles.buttonAgradecimento}>
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Tela Inicial")}>
                    <Text style={styles.buttonText}>Fazer outro pedido</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}