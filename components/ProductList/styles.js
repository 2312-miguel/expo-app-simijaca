import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        padding: 30,
    },
    item: {
        padding: 20,
        marginVertical: 20,
        borderColor: 'black',
        borderWidth: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    inputContainer: {
        flexDirection: 'row',
    },
    input: {
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        flex: 1,
        marginRight: 20,
    }
});


export default styles;