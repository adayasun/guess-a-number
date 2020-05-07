/* First Screen of three part screen
    This screen will start where the user will be able to input a 
    number for the program to guess 
*/

import React from 'react';
import {View, Text, StyleSheet, TextInput, Button} from 'react-native';

import Card from '../components/Card';

const StartGameScreen = props => {
    return(
        <View style={styles.screen}>
            <Text style={styles.title}>Start a New Game!</Text>
            <Card style={styles.inputContainer}>
                <Text>Select a Number</Text>
                <TextInput />
                <View style={styles.buttonContainer}>
                    <View style={styles.button}><Button title='Reset' onPress={() => {}} color="#c717fc"/></View>
                    <View style={styles.button}><Button title = 'Confirm'  onPress={() => {}} color="#f7287b"/></View>                    
                </View>
            </Card>
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        alignItems: 'center',
    },
    buttonContainer: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        paddingHorizontal: 15
    },
    title:{
        fontSize: 20,
        marginVertical: 10,

    },
    inputContainer: {
        width: 300,
        maxWidth: '80%',
        alignItems: 'center',
    },
    button: {
        width: 100,
    }
});

export default StartGameScreen;