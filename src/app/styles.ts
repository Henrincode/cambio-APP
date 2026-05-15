import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        gap: 30,
        backgroundColor: '#0d1b2a'
    },
    tittleView: {
        alignSelf: 'stretch',
    },
    tittleText: {
        alignSelf: 'flex-start',
        color: '#f2f2f2',
        fontSize: 36,
        fontWeight: 'bold'
    },
    tittleSub: {
        alignSelf: 'flex-start',
        color: '#415a77',
        fontSize: 18,
    },

    calcView: {
        alignSelf: 'stretch',
        gap: 10,
        padding: 20,
        borderRadius: 20,
        backgroundColor: '#1b263b'
    },
    calcText: {
        color: '#415a77',
        fontSize: 18,
        fontWeight: 'bold',
        // textAlign: 'center'
    },
    calcButtons: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: 15,
    },
    calcButton: {
        paddingVertical: 4,
        paddingHorizontal: 8,
        borderRadius: 8,
        backgroundColor: '#30455c',
    },
    calcButtonText: {
        color: '#f2f2f2',
        fontWeight: 'bold',
        fontSize: 20
    },
    calcInput: {
        backgroundColor: '#415a77',
        borderRadius: 8,
        color: "#f2f2f2",
        fontSize: 18,
        paddingHorizontal: 10,
        textAlign: "right"
    }
})

export default styles