import React from 'react';
import {
    SafeAreaView, 
    View, 
    Text, 
    Image, 
    TouchableOpacity, 
    StyleSheet,
    Dimensions
} from 'react-native';

import {Entypo} from '@expo/vector-icons';

import wateringImg from '../assets/watering.png';
import colors from '../styles/colors';
import fonts from '../styles/fonts';
import { useNavigation } from '@react-navigation/core';

export function Welcome()
{
    
    const navigation = useNavigation();

    function handleStart(){
        navigation.navigate('UserIdentification')
    }
    
    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.wrapper}>
                <Text style={styles.title}>
                Gerencie {'\n'} 
                suas plantas de{'\n'} 
                forma fácil
                </Text>

                
                <Image 
                    source={wateringImg} 
                    style={styles.image} 
                    resizeMode='contain'
                />
                
                <Text style={styles.subtitle}>
                    Não esqueça mais de regar suas plantas.
                    Nós cuidamos de lembrar você sempre que precisar
                </Text>

                <TouchableOpacity 
                    style={styles.button} 
                    activeOpacity={0.6}
                    onPress={handleStart}
                >
                    <Text >
                        <Entypo 
                            name='chevron-thin-right' 
                            style={styles.buttonicon}
                        />
                    </Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    wrapper:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-around',
        paddingHorizontal: 20
    },
    title:{
        fontFamily: fonts.heading,
        fontSize: 28,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#52665A',
        marginTop: 60,
        lineHeight: 34
    },
    subtitle: {
        fontFamily: fonts.text,
        textAlign: 'center',
        fontSize: 18,
        paddingHorizontal: 20,
        color: '#52665A'
    },
    
    image:{
        
        height: Dimensions.get('window').width*0.7
    },
    button:{
        backgroundColor: '#32B768',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 16,
        marginBottom: 10,
        height: 56,
        width: 56,

    },
    buttonicon:{
        color: colors.white,
        fontSize: 26
    }
});