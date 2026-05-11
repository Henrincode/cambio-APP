import ScrollArea from "@/components/ScrollArea"
import { Text } from "react-native"
import styles from "./styles"

export default function Index() {
    return (
        <ScrollArea style={styles.container}>
            <Text style={styles.h2}>Olá mundo!</Text>
            <Text style={styles.h1}>Câmbio APP</Text>
        </ScrollArea>
    )
}