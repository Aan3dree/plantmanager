import React,{useState} from 'react';
import {
    StyleSheet,
    SafeAreaView,
    View,
    Text,
    TextInput
} from 'react-native';
import colors from '../styles/colors';
import fonts from '../styles/fonts';
import {Button} from '../components/Button'

export function Confirmation(){
    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.content}>

                <Text style={styles.emoji}>
                    :)
                </Text>

                <Text style={styles.title}>
                    Prontinho
                </Text>

                <Text style={styles.text}>
                    Agora vamos começar a cuidar das suas
                    plantinhas com muito cuidado.
                </Text>

                <View style={styles.footer}>
                    <Button />
                </View>

            </View>

            
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    content:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        padding: 30
    },
    emoji:{
        fontSize: 32,
        textAlign: 'center',
        
    },
    title:{
        fontFamily: fonts.heading,
        textAlign: 'center',
        fontSize: 22,
        color: colors.heading,
        lineHeight: 38,
        marginTop: 15
    },
    text:{
        fontFamily: fonts.text,
        textAlign: 'center',
        fontSize: 17,
        color: colors.heading,
        paddingVertical: 20
    },
    footer:{
        width: '100%',
        marginTop: 20,
        paddingHorizontal: 50
    }
})