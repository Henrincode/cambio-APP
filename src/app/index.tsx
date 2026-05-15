import ScrollArea from "@/components/ScrollArea"
import { COINS_LIST, COINS_URL } from "@/constants"
import { useState } from "react"
import { Text, TextInput, TouchableOpacity, View } from "react-native"
import styles from "./styles"


interface Coin {
    nome: string
    sigla: string
    simbolo: string
}

export default function Index() {

    const defaultCoinA = COINS_LIST.find(c => c.sigla === 'USD') as Coin
    const defaultCoinB = COINS_LIST.find(c => c.sigla === 'BRL') as Coin

    const [coinA, setCoinA] = useState<Coin>(defaultCoinA)
    const [coinB, setCoinB] = useState<Coin>(defaultCoinB)
    const [result, setResult] = useState('')

    // useEffect(() => { compare() }, [])

    async function compare() {
        try {
            const data = await fetch(COINS_URL + coinA.sigla)
            const response = await data.json()

            setResult(response.conversion_rates[coinB.sigla].toFixed(2))
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

                {/* de */}
                <Text style={styles.calcText}>
                    De: {COINS_LIST.find(coin => coin.sigla === coinA.sigla)?.nome}
                </Text>

                {/* buttons list */}
                <View style={styles.calcButtons}>
                    {COINS_LIST.map(coin => (

                        // buttons
                        <TouchableOpacity
                            key={coin.sigla} onPress={() => setCoinA(coin)}
                            style={[styles.calcButton, coinA.sigla === coin.sigla && { backgroundColor: '#00a8e8' }]}
                        >
                            <Text style={styles.calcButtonText}>
                                {coin.sigla}
                            </Text>
                        </TouchableOpacity>
                    ))}
                </View>

                {/* valor */}
                <Text style={styles.calcText}>
                    Valor
                </Text>

                <TextInput keyboardType="number-pad" style={styles.calcInput} />

                {/* para */}
                <Text style={styles.calcText}>
                    Para: {COINS_LIST.find(coin => coin.sigla === coinB.sigla)?.nome}
                </Text>

                {/* buttons list */}
                <View style={styles.calcButtons}>
                    {COINS_LIST.map(coin => (

                        // buttons
                        <TouchableOpacity
                            key={coin.sigla} onPress={() => setCoinB(coin)}
                            style={[styles.calcButton, coinB.sigla === coin.sigla && { backgroundColor: '#00e832' }]}
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