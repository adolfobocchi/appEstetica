import React from 'react';
import { Image, Text, TextInput, TouchableOpacity, View } from 'react-native';
import styles from '../../styles';

const StartScreen = ({ startClique, dados, changeDados }) => {
  return (<View style={styles.startArea}>
    <Image style={[styles.img, {marginBottom: 10}]} source={require('../assets/start_bg.jpg')} />
    <TextInput
      
      id='nome'
      style={[styles.input, styles.textoInput]}
      placeholder="informe o seu nome"
      value={dados.nome}
      onChangeText={(text) => changeDados(text,'nome')}
    />
    <TextInput
      id='email'
      style={[styles.input, styles.textoInput]}
      placeholder="informe sue e-mail"
      value={dados.email}
      onChangeText={(text) => changeDados(text,'email')}
    />
    <TextInput
    keyboardType='number-pad'
      id='idade'
      style={[styles.input, styles.textoInput]}
      placeholder="informe sua idade"
      value={dados.idade}
      onChangeText={(text) => changeDados(text, 'idade')}
    />
    <Text>{JSON.stringify(dados)}</Text>
    <TouchableOpacity style={styles.button} onPress={startClique}>
      <Text style={styles.buttonText}>Responder</Text>
    </TouchableOpacity>
  </View>);
}

export default StartScreen;