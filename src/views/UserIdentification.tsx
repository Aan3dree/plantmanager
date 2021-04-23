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

export function UserIdentification(){

    const [isFocused, setIsFocused] = useState(false)
    const [isFilled, setIsFilled] = useState(false)
    const [name, setName] = useState<string>()

    function handleInputBlur(){
        setIsFocused(false);
        setIsFilled(!!name);
    }

    function handleInputFocus(){
        setIsFocused(true);
    }

    function handleInputChange(value: string){
        setIsFilled(!!value);

    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.content}>
                <View style={styles.form}>
    
                    <Text style={styles.emoji}>
                        { isFilled ? ':D' : ':)'}
                    </Text>

                    <Text style={styles.title}>
                        Como podemos {'\n'}
                        chamar você?
                    </Text>

                    <TextInput
                        style={[
                            styles.input,
                            (isFocused || isFilled) &&
                            {borderColor: colors.green}
                        ]}
                        placeholder='Digite seu nome'
                        onBlur={handleInputBlur}
                        onFocus={handleInputFocus}
                        onChangeText={handleInputChange}
                    />

                    <View style={styles.footer}>
                        <Button />
                    </View>

                </View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    content: {
        flex: 1,
        width: '100%'
    },
    form:{
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 54,
        alignItems: 'center',
    },
    emoji:{
        fontSize: 44
    },
    input:{
        borderBottomWidth: 1,
        borderColor: colors.gray,
        color: colors.heading,
        width: '100%',
        fontSize: 18,
        marginTop: 50,
        padding: 10,
        textAlign: 'center'
    },
    title:{
        fontFamily: fonts.heading,
        textAlign: 'center',
        fontSize: 24,
        color: colors.heading,
        lineHeight: 32,
        marginTop: 30
    },
    footer:{
        marginTop: 40,
        width: '100%',
        paddingHorizontal: 20
    }
})