import React from 'react';
import {TouchableOpacity, Text, StyleSheet, TouchableOpacityProps} from 'react-native';

interface BotaoProps extends TouchableOpacityProps{
    title: string
}

export function Botao( {title, ...rest} : BotaoProps){
    return(
        <TouchableOpacity 
        style={styles.button} 
        activeOpacity={0.6}
        {...rest}
        >
            <Text style={styles.buttonText}>
                {title}
            </Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    
    button:{
        backgroundColor: '#32B768',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 16,
        marginBottom: 10,
        height: 56,
        width: 56
    },
    buttonText:{
        color: '#FFFFFF',
        fontSize: 24
    }
});