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
        gap: 10,
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
        paddingRight: 48,
        borderRadius: 8,
        color: "#f2f2f2",
        fontSize: 18,
        paddingHorizontal: 10,
        textAlign: "right"
    },
    calcInputSigla: {
        position: 'absolute',
        right: 16, top: '50%',
        color: '#f2f2f2',
        fontSize: 12,
        transform: [{
            translateY: '-50%'
        }]
    },

    btnSubmit: {
        backgroundColor: "#0d3b66",
        alignSelf: "stretch",
        flexDirection: "row",
        justifyContent: "center",
        padding: 10,
        borderRadius: 8
    },
    btnSubmitText: {
        color: "white",
        fontSize: 24,
        fontWeight: 'bold'
    },

    resView: {
        alignSelf: 'stretch',
        alignItems: 'center',
        padding: 20,
        gap: 10,
        borderRadius: 20,
        backgroundColor: "#1b263b"
    },
    resText: {
        color: '#aaa',
        fontSize: 24,
    },
    resNumber: {
        color: "#f2f2f2",
        fontSize: 40,
    },
    resTextSymbol: {
        color: '#f2f2f2',
        fontSize: 40,
    }
})

export default styles