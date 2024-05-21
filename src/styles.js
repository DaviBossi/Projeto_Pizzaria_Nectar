import { StyleSheet } from "react-native";

const styles = StyleSheet.create({

  //PRIMEIRA TELA

  fundo_app: {
    flex: 1,
    backgroundColor: '#FF6347',
  },
  buttonContainer: {
    position: 'absolute',
    top: 470,
    alignSelf: 'center',
  },
  button: {
    backgroundColor: '#228B22',
    borderRadius: 50,
    paddingVertical: 20,
    paddingHorizontal: 40,
  },
  buttonText: {
    fontSize: 18,
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#1C1C1C'
  },
  imagem_entrada: {
    width: 300,
    height: 200,
    resizeMode: 'cover',
    position: 'absolute',
    top: 100,
    alignSelf: 'center'
  },
  text_inicio: {
    alignSelf: 'center',
    fontSize: 28,
    position: 'absolute',
    top: 310,
    fontWeight: 'bold',
    color: '#32CD32',
    textShadowColor: 'black',
    textShadowOffset: { width: 1.5, height: 1.5 },
    textShadowRadius: 5
  },
  subtext_inicio: {
    alignSelf: 'center',
    fontSize: 15,
    position: 'absolute',
    top: 350,
    fontWeight: 'bold',
    color: '#32CD32',
    textShadowColor: 'black',
    textShadowOffset: { width: 1.5, height: 1.5 },
    textShadowRadius: 5
  },

  //SEGUNDA TELA

  text_input: {
    borderWidth: 1,
    borderColor: 'black',
    padding: 10,
    width: '90%',
    alignSelf: 'center',
    backgroundColor: '#FF7F50'
  },
  text_cadastro: {
    marginLeft: 20,
    fontWeight: 'bold',
    fontSize: 15,
    color: '#1C1C1C'
  },
  text_info: {
    textAlign: 'center',
    position: 'relative',
    padding: 10,
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 10,
    color: '#1C1C1C'
  },
  container_cadastro: {
    position: 'relative',
    alignSelf: 'center',
    marginTop: 50
  },

  //TERCEIRA TELA

  titulo_sabores: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 25,
    color: '#1C1C1C'
  },
  imagem_margherita: {
    width: 100,
    height: 100,
    borderRadius: 100,
    position: 'absolute',
    top: 10,
    left: 10,
  },
  text_margherita: {
    position: 'absolute',
    top: 10,
    left: 200,
    fontWeight: 'bold',
    fontSize: 18,
    color: '#1C1C1C'
  },
  desc_margherita1: {
    position: 'absolute',
    top: 40,
    left: 140,
    color: '#1C1C1C'
  },
  desc_margherita2: {
    position: 'absolute',
    top: 60,
    left: 160,
    color: '#1C1C1C'
  },
  preco_margherita:{
    position: 'absolute',
    top: 90,
    left: 210,
    color: '#1C1C1C'
  },
  margherita_border: {
    backgroundColor: '#FF7F50',
    borderRadius: 20,
    paddingVertical: 60,
    paddingHorizontal: 200,
    position: 'absolute',
    top: 10,
  },
  imagem_calabresa: {
    width: 100,
    height: 100,
    borderRadius: 100,
    position: 'absolute',
    top: 10,
    left: 10
  },
  calabresa_border: {
    backgroundColor: '#FF7F50',
    borderRadius: 20,
    position: 'absolute',
    paddingHorizontal: 200,
    paddingVertical: 60,
    top: 140,
  },
  text_calabresa: {
    position: 'absolute',
    top: 10,
    left: 200,
    fontWeight: 'bold',
    fontSize: 18,
    color: '#1C1C1C'
  },
  desc_calabresa1: {
    position: 'absolute',
    top: 40,
    left: 140,
    color: '#1C1C1C'
  },
  desc_calabresa2: {
    position: 'absolute',
    top: 60,
    left: 160,
    color: '#1C1C1C'
  },
  preco_calabresa:{
    position: 'absolute',
    top: 90,
    left: 210,
    color: '#1C1C1C'
  },
  imagem_rucula: {
    width: 100,
    height: 100,
    borderRadius: 100,
    position: 'absolute',
    top: 10,
    left: 10
  },
  rucula_border: {
    backgroundColor: '#FF7F50',
    borderRadius: 20,
    position: 'absolute',
    paddingHorizontal: 200,
    paddingVertical: 60,
    top: 270,
  },
  text_rucula: {
    position: 'absolute',
    top: 10,
    left: 155,
    fontWeight: 'bold',
    fontSize: 18,
    color: '#1C1C1C'
  },
  desc_rucula1: {
    position: 'absolute',
    top: 40,
    left: 140,
    color: '#1C1C1C'
  },
  desc_rucula2: {
    position: 'absolute',
    top: 60,
    left: 160,
    color: '#1C1C1C'
  },
  preco_rucula:{
    position: 'absolute',
    top: 90,
    left: 210,
    color: '#1C1C1C'
  },
  imagem_frango: {
    width: 100,
    height: 100,
    borderRadius: 100,
    position: 'absolute',
    top: 10,
    left: 10
  },
  frango_border: {
    backgroundColor: '#FF7F50',
    borderRadius: 20,
    position: 'absolute',
    paddingHorizontal: 200,
    paddingVertical: 60,
    top: 400,
  },
  text_frango: {
    position: 'absolute',
    top: 10,
    left: 170,
    fontWeight: 'bold',
    fontSize: 18,
    color: '#1C1C1C'
  },
  desc_frango1: {
    position: 'absolute',
    top: 40,
    left: 140,
    color: '#1C1C1C'
  },
  desc_frango2: {
    position: 'absolute',
    top: 60,
    left: 160,
    color: '#1C1C1C'
  },
  preco_frango:{
    position: 'absolute',
    top: 90,
    left: 210,
    color: '#1C1C1C'
  },
  imagem_napolitana: {
    width: 100,
    height: 100,
    borderRadius: 100,
    position: 'absolute',
    top: 10,
    left: 10
  },
  napolitana_border: {
    backgroundColor: '#FF7F50',
    borderRadius: 20,
    position: 'absolute',
    paddingHorizontal: 200,
    paddingVertical: 60,
    top: 530,
  },
  text_napolitana: {
    position: 'absolute',
    top: 10,
    left: 190,
    fontWeight: 'bold',
    fontSize: 18,
    color: '#1C1C1C'
  },
  desc_napolitana1: {
    position: 'absolute',
    top: 40,
    left: 140,
    color: '#1C1C1C'
  },
  desc_napolitana2: {
    position: 'absolute',
    top: 60,
    left: 143,
    color: '#1C1C1C'
  },
  preco_napolitana:{
    position: 'absolute',
    top: 90,
    left: 210,
    color: '#1C1C1C'
  },

  //QUARTA TELA

  container_confirm: {
    backgroundColor: '#FF7F50',
    borderRadius: 30,
    position: 'absolute',
    paddingHorizontal: 180,
    paddingVertical: 180,
    top: 150,
    alignSelf: 'center'
  },
  titulo_confirmacao: {
    textAlign: 'center',
    position: 'relative',
    paddingTop: 60,
    fontWeight: 'bold',
    fontSize: 22,
    color: '#1C1C1C'
  },
  text_dadospessoais: {
    position: 'absolute',
    left: 20,
    top: 20,
    fontWeight: 'bold',
    fontSize: 20,
    color: '#1C1C1C'
  },
  text_name: {
    position: 'absolute',
    left: 20,
    top: 55,
    fontWeight: 'bold',
    fontSize: 18,
    color: '#1C1C1C'
  },
  text_telefone: {
    position: 'absolute',
    left: 20,
    top: 80,
    fontWeight: 'bold',
    fontSize: 18,
    color: '#1C1C1C'
  },
  text_endereco: {
    position: 'absolute',
    left: 20,
    top: 130,
    fontWeight: 'bold',
    fontSize: 20,
    color: '#1C1C1C'
  },
  text_rua: {
    position: 'absolute',
    left: 20,
    top: 165,
    fontWeight: 'bold',
    fontSize: 18,
    color: '#1C1C1C'
    },
  text_bairro: {
    position: 'absolute',
    left: 20,
    top: 190,
    fontWeight: 'bold',
    fontSize: 18,
    color: '#1C1C1C'
  },
  text_num: {
    position: 'absolute',
    left: 20,
    top: 215,
    fontWeight: 'bold',
    fontSize: 18,
    color: '#1C1C1C'
  },
  text_sabor: {
    position: 'absolute',
    left: 20,
    top: 260,
    fontWeight: 'bold',
    fontSize: 18,
    color: '#1C1C1C'
  },
  buttonConfirm: {
    position: 'absolute',
    top: 530,
    alignSelf: 'center',
  },
  text_preço:{
    position: 'absolute',
    left: 20,
    top: 320,
    fontWeight: 'bold',
    fontSize: 18,
    color: '#1C1C1C'
  },
  text_entrega:{
    position: 'absolute',
    left: 20,
    top: 290,
    fontWeight: 'bold',
    fontSize: 18,
    color: '#1C1C1C'
  },
  buttonPizza:{
    position: 'absolute',
    top: 620,
    left: 5
  },
  buttonDados:{
    position: 'absolute',
    top: 620,
    right: 5
  },

  //QUINTA TELA

  agradecimento_container:{
    backgroundColor: '#FF7F50',
    borderRadius: 30,
    position: 'absolute',
    paddingHorizontal: 180,
    paddingVertical: 80,
    top: 150,
    alignSelf: 'center'
  },
  text_agradecimento:{
    position: 'absolute',
    left: 50,
    top: 50,
    fontWeight: 'bold',
    fontSize: 20,
    color: '#1C1C1C'
  },
  text_agradecimento2:{
    position: 'absolute',
    left: 50,
    top: 80,
    fontWeight: 'bold',
    fontSize: 20,
    color: '#1C1C1C'
  },
  buttonAgradecimento: {
    position: 'absolute',
    top: 400,
    alignSelf: 'center',
  },
});

export default styles;