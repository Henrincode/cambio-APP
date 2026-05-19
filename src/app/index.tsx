import ScrollArea from "@/components/ScrollArea"
import { Coin, COINS_LIST, COINS_URL } from "@/constants"
import { useEffect, useState } from "react"
import { Text, TextInput, TouchableOpacity, View } from "react-native"
import styles from "./styles"

export default function Index() {

    const defaultCoinA = COINS_LIST.find(c => c?.sigla === 'USD') as Coin
    const defaultCoinB = COINS_LIST.find(c => c.sigla === 'BRL') as Coin

    const [coinA, setCoinA] = useState(defaultCoinA)
    const [coinB, setCoinB] = useState(defaultCoinB)
    const [valueCalc, setValueCalc] = useState('1')
    const [result, setResult] = useState({
        siglaA: '---',
        siglaB: '---',
        valueCalc: '---',
        calc: '---',
    })

    useEffect(() => { compare() }, [])

    function checkNumber(param: string) {
        if (isNaN(Number(param))) return
        setValueCalc(param)
    }

    async function compare() {
        try {
            const data = await fetch(COINS_URL + coinA.sigla)
            const response = await data.json()

            const newResult = {
                siglaA: coinA.sigla,
                siglaB: coinB.sigla,
                valueCalc: (+valueCalc || 0).toFixed(2),
                calc: (response.conversion_rates[coinB.sigla] * (+valueCalc || 0)).toFixed(2)
            }

            setResult(newResult)
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

                {/* input valor */}
                <Text style={styles.calcText}>
                    Valor
                </Text>

                <View>
                    <TextInput
                        selectTextOnFocus
                        onChangeText={checkNumber}
                        keyboardType="number-pad"
                        style={styles.calcInput}
                        value={valueCalc}
                    />
                    <Text style={styles.calcInputSigla}>{coinA.sigla}</Text>
                </View>

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

            {/* btn calc */}
            <TouchableOpacity onPress={compare} style={styles.btnSubmit}>
                <Text style={styles.btnSubmitText}>Calcular</Text>
            </TouchableOpacity>

            {/* Response */}
            <View style={styles.resView}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignSelf: 'stretch', gap: 10 }}>
                    <Text style={styles.resTextSymbol}>{result.siglaA}</Text>
                    <Text style={styles.resNumber}>{result.valueCalc}</Text>
                </View>
                <Text style={styles.resText}>Equivale</Text>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignSelf: 'stretch', gap: 10 }}>
                    <Text style={styles.resTextSymbol}>{result.siglaB}</Text>
                    <Text style={styles.resNumber}>{result.calc}</Text>
                </View>
            </View>
        </ScrollArea >
    )
}