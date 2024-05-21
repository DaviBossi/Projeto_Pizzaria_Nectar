import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native'
import React, { useContext } from 'react'
import styles from '../styles'
import { AuthContext } from '../AutenticationContext'
import { useNavigation } from '@react-navigation/native'

export default function Cadastro() {

    const navigation = useNavigation();

    const { data, setData, end, setEnd } = useContext(AuthContext);

    const handle_press = () => {
        if (data.name.trim() == "" || data.telefone.trim() == "" || end.bairro.trim() == "" || end.rua.trim() == "" || end.num.trim() == "") {
            Alert.alert('Erro', 'Por favor, preencha todos os campos.');
            return;
        }
        navigation.navigate("SaboresPizza");
    };

    return (
        <View style={styles.fundo_app}>
            <Text style={styles.text_info}>Informações pessoais</Text>
            <View style={{ marginBottom: 10 }}>
                <Text style={styles.text_cadastro}>Nome:</Text>
                <TextInput
                    style={styles.text_input}
                    onChangeText={(name) => setData({ ...data, name })}
                    placeholder="Digite seu nome"
                />
            </View>
            <View style={{ marginBottom: 10 }}>
                <Text style={styles.text_cadastro}>Telefone:</Text>
                <TextInput
                    style={styles.text_input}
                    onChangeText={(telefone) => setData({ ...data, telefone })}
                    placeholder="Digite seu telefone"
                    keyboardType='number-pad'
                />
            </View>
            <Text style={styles.text_info}>Endereço</Text>
            <View style={{ marginBottom: 10 }}>
                <Text style={styles.text_cadastro}>Bairro:</Text>
                <TextInput
                    style={styles.text_input}
                    onChangeText={(bairro) => setEnd({ ...end, bairro })}
                    placeholder="Digite seu bairro"
                />
            </View>
            <View style={{ marginBottom: 10 }}>
                <Text style={styles.text_cadastro}>Rua:</Text>
                <TextInput
                    style={styles.text_input}
                    onChangeText={(rua) => setEnd({ ...end, rua })}
                    placeholder="Digite sua rua"
                />
            </View>
            <View style={{ marginBottom: 10 }}>
                <Text style={styles.text_cadastro}>Número:</Text>
                <TextInput
                    style={styles.text_input}
                    onChangeText={(num) => setEnd({ ...end, num })}
                    placeholder="Digite o numero da sua casa"
                    keyboardType='numeric'
                />
            </View>
            <View style={styles.container_cadastro}>
                <TouchableOpacity style={styles.button} onPress={handle_press}>
                    <Text style={styles.buttonText}>Confirmar</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}