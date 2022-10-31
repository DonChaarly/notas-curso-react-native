import { StyleSheet } from "react-native";

const smFont = 10;
const mdFont = 15;
const lgFont = 20;
const xlFont = 25;

const smBorder = 2;
const mdBorder = 4;
const lgBorder = 7;
const xlBorder = 10;

const globalStyles = StyleSheet.create({
    containerCenter:{
        padding: 10,
        flex: 1,
        justifyContent: 'center'
    },
    label: {
        fontSize: lgFont,
        color: '#fff'
    },
    input: {
        backgroundColor: '#fff',
        borderRadius: mdBorder,
        padding: 10,
        marginTop: 5

    },
    button: {
        paddingVertical: 9,
        paddingHorizontal: 4,
        alignItems: 'center',
        backgroundColor: '#3E6D9C',
        borderRadius: smBorder,
        marginTop: 20,
    },
    textButton: {
        color: '#fff',
        fontSize: mdFont,
    }
});

export default globalStyles;