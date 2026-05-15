import ScrollArea from "@/components/ScrollArea"
import { COINS_LIST, COINS_URL } from "@/constants"
import { useEffect, useState } from "react"
import { Text, TouchableOpacity, View } from "react-native"
import styles from "./styles"

const COIN = "https://v6.exchangerate-api.com/v6/fe25cc0e3ca35d8731d1e14f/latest/"

export default function Index() {

    const [coinA, setCoinA] = useState('USD')
    const [coinB, setCoinB] = useState('BRL')
    const [result, setResult] = useState('')

    useEffect(() => { compare() }, [])

    async function compare() {
        try {
            const data = await fetch(COINS_URL + coinA)
            const response = await data.json()

            setResult(response.conversion_rates[coinB].toFixed(2))
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <ScrollArea style={styles.container}>
            <Text style={styles.h2}>Olá mundo!</Text>
            <Text onPress={compare} style={styles.h1}>Câmbio APP</Text>
            {/* botões */}
            <View style={{ flexDirection: 'row', backgroundColor: 'red', width: '100%' }}>
                {COINS_LIST.map(coin => (
                    <TouchableOpacity style={styles.btnA}>
                        <Text style={styles.btnAText}>{coin.sigla}</Text>
                    </TouchableOpacity>
                ))}
            </View>

            <View style={styles.containerCoins}>
                <Text style={styles.coinA}>
                    1 {coinA} equivale:
                </Text>
                <Text style={styles.coinB} >
                    {result} {coinB}.
                </Text>
            </View>
        </ScrollArea >
    )
}