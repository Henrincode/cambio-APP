import ScrollArea from "@/components/ScrollArea"
import { COINS_LIST, COINS_URL } from "@/constants"
import { useState } from "react"
import { Text, TouchableOpacity, View } from "react-native"
import styles from "./styles"

export default function Index() {

    const [coinA, setCoinA] = useState('USD')
    const [coinB, setCoinB] = useState('BRL')
    const [result, setResult] = useState('')

    // useEffect(() => { compare() }, [])

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

            {/* tittle */}
            <View style={styles.tittleView}>
                <Text style={styles.tittleText}>
                    Conversor de Moedas
                </Text>
                <Text style={styles.tittleSub}>
                    Converta valores de diferentes moedas
                </Text>
            </View>

            {/* calc */}
            <View style={styles.calcView}>
                <Text style={styles.calcText}>
                    de qual moeda
                </Text>

                {/* buttons list */}
                <View style={styles.calcButtons}>
                    {COINS_LIST.map(coin => (

                        // buttons
                        <TouchableOpacity
                            key={coin.sigla} onPress={() => setCoinA(coin.sigla)}
                            style={[styles.calcButton, coinA === coin.sigla && { backgroundColor: '#00a8e8' }]}
                        >
                            <Text style={styles.calcButtonText}>
                                {coin.sigla}
                            </Text>
                        </TouchableOpacity>
                    ))}
                </View>

            </View>
        </ScrollArea >
    )
}