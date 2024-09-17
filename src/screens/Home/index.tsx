import { Text, View, TextInput, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import { Participant } from "../../components/Participant";

export default function Home() {

    function handleParticipantAdd() {
        console.log("Participant added");
    }

    function handleParticipantRemove(name: string) {
        console.log(`Participant ${name} removed`);
    }


    return (
        <View style={styles.container}>
            <Text style={styles.eventName}>
                Nome do evento
            </Text>

            <Text style={styles.eventDate}>
                Sexta, 4 de Novembro de 2022
            </Text>

            <View style={styles.form}>
                <TextInput
                    style={styles.input}
                    placeholder="Nome do participante"
                    placeholderTextColor="#6B6B6B"
                />

                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText} onPress={handleParticipantAdd}>
                        +
                    </Text>
                </TouchableOpacity>
            </View>

        <Participant name="Ana" onRemove={() => handleParticipantRemove("Ana")}/>
        </View>
    )
}
