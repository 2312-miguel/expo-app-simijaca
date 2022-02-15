import { Modal, Pressable, Text, View } from "react-native";
import styles from "./styles";

const ModalProduct = ({ subject, method, active, setModalVisible, callBack }) => {

    const handleConfirm = () => {
        setModalVisible(!active);
        callBack();
    }

    return (
        <View style={styles.centeredView}>
            <Modal
                animationType="slide"
                transparent={true}
                visible={active}
                onRequestClose={() => {
                    Alert.alert("Modal has been closed.");
                    setModalVisible(!active);
                }}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Text style={styles.modalText}>Esta seguro que desea {method} el {subject}</Text>
                        <Pressable
                            style={[styles.button, styles.buttonConfirm]}
                            onPress={() => handleConfirm()}
                        >
                            <Text style={styles.textStyle}>Confirmar</Text>
                        </Pressable>
                        <Pressable
                            style={[styles.button, styles.buttonClose]}
                            onPress={() => setModalVisible(!active)}
                        >
                            <Text style={styles.textStyle}>Cancelar</Text>
                        </Pressable>
                    </View>
                </View>
            </Modal>
        </View>
    )
}

export default ModalProduct;