import { StyleSheet, Text, View } from "react-native"

export default function Index() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Olá mundo!</Text>
            <Text style={styles.text}>Câmbio APP</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#4c4c4c'
    },
    text: {
        color: '#f2f2f2',
        fontSize: 40
    }
})