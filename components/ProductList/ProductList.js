import { useState } from "react";
import { Button, FlatList, StatusBar, Text, View } from "react-native";
import ModalProduct from "../Modal/ModalProduct";
import AddProducts from "./AddProducts";
import styles from "./styles"

const ProductList = () => {
    const [textInput, setTextInput] = useState('')
    const [itemList, setItemList] = useState([])
    const [itemSelected, setItemSelected] = useState({})
    const [modalVisible, setModalVisible] = useState(false)

    const handleChangeText = (text) => {
        setTextInput(text)
    }

    const handleOnPress = () => {
        if (textInput != "") {
            setTextInput('')
            setItemList([
                ...itemList,
                {
                    value: textInput,
                    id: Math.random().toString(),
                },
            ])
        }
    }

    const handleOnDelete = (item) => () => {
        setModalVisible(true)
        setItemSelected(item)
    }

    const handleConfirmDelete = () => {
        const { id } = itemSelected
        setItemList(itemList.filter(item => item.id !== id))
        setModalVisible(false)
        setItemSelected({})
    }

    return (
        <View style={styles.container}>
            <AddProducts
                textInput={textInput}
                handleOnPress={handleOnPress}
                handleChangeText={handleChangeText}
            />

            <FlatList
                data={itemList}
                renderItem={({ item }) => (
                    <View style={styles.item}>
                        <Text>{item.value}</Text>
                        <Button color="red" onPress={handleOnDelete(item)} title="Eliminar" />
                    </View>
                )
                }
                keyExtractor={item => item.id}
            />

            <ModalProduct subject={`Producto ${itemSelected.value}`} method="eliminar" active={modalVisible} setModalVisible={setModalVisible} callBack={() => handleConfirmDelete()} />

            <StatusBar style="auto" />
        </View>

    )
}

export default ProductList;