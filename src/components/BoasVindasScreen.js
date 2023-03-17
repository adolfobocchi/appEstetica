import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import styles from '../../styles';

const BoasVindas = ({ boasVindasClique }) => {
    return (<View style={styles.boasVindasArea}>
              <Image style={styles.img} source={require('../assets/boasvindas_bg.jpg')} />
           
        <Text style={[styles.texto, { marginBottom: 20 }]} >seja bem vindo</Text>
        <TouchableOpacity style={styles.button} onPress={boasVindasClique}>
            <Text style={styles.buttonText}>Vamos começar?</Text>
        </TouchableOpacity>
    </View>);

}

export default BoasVindas;
