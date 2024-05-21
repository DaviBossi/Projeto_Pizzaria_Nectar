import { View, Text, TouchableOpacity } from 'react-native'
import React, { useContext, useState } from 'react'
import { AuthContext } from '../AutenticationContext'
import styles from '../styles'
import { useNavigation } from '@react-navigation/native'

export default function Confirmação() {
  const { data, end, sabor, preço } = useContext(AuthContext)
  const navigation = useNavigation()

  return (
    <View style={styles.fundo_app}>
      <Text style={styles.titulo_confirmacao}>Confirmação do Pedido</Text>
      <View style={styles.container_confirm}>
        <Text style={styles.text_dadospessoais}>Dados Pessoais</Text>
        <Text style={styles.text_name}>Nome : {data.name}</Text>
        <Text style={styles.text_telefone}>Telefone : {data.telefone}</Text>
        <Text style={styles.text_endereco}>Endereço</Text>
        <Text style={styles.text_rua}>Rua : {end.rua}</Text>
        <Text style={styles.text_bairro}>Bairro: {end.bairro}</Text>
        <Text style={styles.text_num}>Número: {end.num}</Text>
        <Text style={styles.text_sabor}>Sabor da pizza: {sabor}</Text>
        <Text style={styles.text_entrega}>Entrega grátis</Text>
        <Text style={styles.text_preço}>Valor total: {preço}</Text>
      </View>
      <View style={styles.buttonConfirm}>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Agradecimento")}>
          <Text style={styles.buttonText}>Confirmar Pedido</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.buttonDados}>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Cadastro")}>
          <Text style={styles.buttonText}>Alterar Dados</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.buttonPizza}>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("SaboresPizza")}>
          <Text style={styles.buttonText}>Alterar Pizza</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}