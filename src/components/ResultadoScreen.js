import React from 'react';
import { Image, Share, Text, TouchableOpacity, View } from 'react-native';
import styles from '../../styles';

const Resultado = ({ resultado, refazerClique }) => {
    const onShare = async () => {
        try {
          const result = await Share.share({
            message:
              'Estetica - resultado',
            title: 'Estetica APP'
          });
          if (result.action === Share.sharedAction) {
            if (result.activityType) {
              // shared with activity type of result.activityType
            } else {
              // shared
            }
          } else if (result.action === Share.dismissedAction) {
            // dismissed
          }
        } catch (error) {
          Alert.alert(error.message);
        }
      };

    return (
        <View style={styles.resultadoArea}>
            <Image style={[styles.img, {marginBottom: 10}]} source={require('../assets/resultado_bg.jpg')} />
            <Text style={styles.texto}>Seu resultado é:</Text>
            <Text style={styles.texto}>{resultado}</Text>
            <TouchableOpacity style={styles.button} onPress={onShare}>
                <Text style={styles.buttonText}>Enviar</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={refazerClique}>
                <Text style={styles.buttonText}>Refazer</Text>
            </TouchableOpacity>
        </View>
    );
}

export default Resultado;