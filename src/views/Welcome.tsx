import React, {useState} from 'react';
import {SafeAreaView, View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';

import wateringImg from '../assets/watering.png';
import { Botao } from '../components/Botao';
import colors from '../styles/colors';

export function Welcome()
{
    const [visible, setVisible] = useState(false);

    function handleVisibily(){
        setVisible(true);
    }
    return(
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>
            Gerencie {'\n'} 
            suas plantas {'\n'} 
            de forma fácil
            </Text>

            {
                visible &&
                <Image source={wateringImg} style={styles.image} />
            }
            <Text style={styles.subtitle}>
                Não esqueça mais de regar suas plantas.
                Nós cuidamos de lembrar você sempre que precisar
            </Text>

            <Botao title="=" onPress={handleVisibily}/>

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    title:{
        fontSize: 32,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#52665A',
        marginTop: 38
    },
    subtitle: {
        textAlign: 'center',
        fontSize: 18,
        paddingHorizontal: 20,
        color: '#52665A'
    },
    
    image:{
        width: 292,
        height: 284
    },
    
});