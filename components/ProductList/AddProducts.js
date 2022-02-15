import React from 'react'
import { View, TextInput, Button } from 'react-native'
import styles from './styles'

const AddProducts = ({ textInput, handleChangeText, handleOnPress }) => {
    return (
        <View style={styles.inputContainer}>
            <TextInput
                style={styles.input}
                value={textInput}
                onChangeText={handleChangeText}
            />
            <Button
                onPress={handleOnPress}
                title="Agregar"
                color="green"
            />
        </View>
    )
}

export default AddProducts;