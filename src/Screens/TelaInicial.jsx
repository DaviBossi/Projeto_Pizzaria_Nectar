import { View, Text,Image, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from '../styles'
import { useNavigation } from '@react-navigation/native'

export default function TelaInicial() {
  const navigation = useNavigation();
  return (
    <View style={styles.fundo_app}>
      <Image source={{uri: 'https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExZHpuM2tpeHk3c3Z6MHhjZDR5MTlpNGwycjR2aW1tajZ2emMzYWJ1YiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/GDqGKQ5ddRHzn4LHV7/giphy.gif'}}
      style={styles.imagem_entrada}/>
      <Text style={styles.text_inicio}>PIZZARIA NÉCTAR</Text>
      <Text style={styles.subtext_inicio}>Servindo o melhor para você</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Cadastro')}>
          <Text style={styles.buttonText}>Iniciar Pedido</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}