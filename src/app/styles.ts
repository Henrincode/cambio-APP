import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#4c4c4c'
    },
    h1: {
        color: '#f2f2f2',
        fontSize: 40
    },
    h2: {
        color: '#f2f2f2',
        fontSize: 30
    },
    containerCoins: {
        padding: 30,
        marginTop: 10,
        borderRadius: 10,
        backgroundColor: '#333'
    },
    coinA: {
        color: '#999',
        fontSize: 20
    },
    coinB: {
        color: '#f2f2f2',
        fontSize: 60
    },
    btnA: {
        padding: 4,
        paddingHorizontal: 8,
        borderRadius: 10,
        backgroundColor: "#3B7597",
    }, btnAText: {
        color: 'white'
    }
})

export default styles