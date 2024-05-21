import { View, Text, TouchableOpacity, Image} from 'react-native'
import React, { useContext } from 'react'
import styles from '../styles'
import { AuthContext } from '../AutenticationContext'
import { useNavigation } from '@react-navigation/native'

export default function SaboresPizza() {

  const {setSabor, setPreço} = useContext(AuthContext)
  const navigation = useNavigation()

  const margherita = () => {
    setSabor("Marguerita")
    setPreço(38.99)
    navigation.navigate("Confirmação")
  }
  const calabresa = () => {
    setSabor("Calabresa")
    setPreço(40.00)
    navigation.navigate("Confirmação")
  }
  const rucula = () => {
    setSabor("Rúcula com Tomate Seco")
    setPreço(47.99)
    navigation.navigate("Confirmação")
  }
  const frango = () => {
    setSabor("Frango com Catupiry")
    setPreço(47.99)
    navigation.navigate("Confirmação")
  }
  const napolitana = () => {
    setSabor("Napolitana")
    setPreço(39.99)
    navigation.navigate("Confirmação")
  }

  return (
      <View style={styles.fundo_app}>
        <Text style={styles.titulo_sabores}>Sabores Disponiveis</Text>
        <TouchableOpacity onPress={margherita} >
          <View style={styles.margherita_border}>
            <Image source={{ uri: 'https://forneriaoriginal.com/wp-content/uploads/2020/04/marguerita-especial1.png' }}
              style={styles.imagem_margherita}
            />
            <Text style={styles.text_margherita}>Margherita</Text>
            <Text style={styles.desc_margherita1}>Molho de tomate, Queijo Mussarela</Text>
            <Text style={styles.desc_margherita2}>Tomate picado, Manjericão</Text>
            <Text style={styles.preco_margherita}>R$ 38,99</Text>
          </View>
        </TouchableOpacity >
        <TouchableOpacity onPress={calabresa}>
          <View style={styles.calabresa_border}>
            <Image source={{ uri: 'https://forneriaoriginal.com/wp-content/uploads/2020/10/apimentada.png' }}
              style={styles.imagem_calabresa}
            />
            <Text style={styles.text_calabresa}>Calabresa</Text>
            <Text style={styles.desc_calabresa1}>Molho de Tomate, Queijo Mussarela</Text>
            <Text style={styles.desc_calabresa2}>Calabresa, Cebola e Orégano</Text>
            <Text style={styles.preco_calabresa}>R$ 40,00</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={rucula}>
          <View style={styles.rucula_border}>
            <Image source={{ uri: 'https://forneriaoriginal.com/wp-content/uploads/2016/10/da-barra1.png' }}
              style={styles.imagem_rucula}
            />
            <Text style={styles.text_rucula}>Rúcula c/ Tomate Seco</Text>
            <Text style={styles.desc_rucula1}>Molho de Tomate, Queijo Mussarela</Text>
            <Text style={styles.desc_rucula2}>Rúcula, Tomate Seco e Alho</Text>
            <Text style={styles.preco_rucula}>R$ 47,99</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={frango}>
          <View style={styles.frango_border}>
            <Image source={{ uri: 'https://forneriaoriginal.com/wp-content/uploads/2016/10/frango.png' }}
              style={styles.imagem_frango}
            />
            <Text style={styles.text_frango}>Frango c/ Catupiry</Text>
            <Text style={styles.desc_frango1}>Molho de Tomate, Queijo Mussarela</Text>
            <Text style={styles.desc_frango2}>Frango Desfiado e Catupiry</Text>
            <Text style={styles.preco_frango}>R$ 47,99</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={napolitana}>
          <View style={styles.napolitana_border}>
            <Image source={{ uri: 'https://forneriaoriginal.com/wp-content/uploads/2020/04/napolitana.png' }}
              style={styles.imagem_napolitana}
            />
            <Text style={styles.text_napolitana}>Napolitana</Text>
            <Text style={styles.desc_napolitana1}>Molho de Tomate, Queijo Mussarela</Text>
            <Text style={styles.desc_napolitana2}>Tomate Picado e Queijo Parmesão</Text>
            <Text style={styles.preco_napolitana}>R$ 39,99</Text>
          </View>
        </TouchableOpacity>
      </View>
  )
}