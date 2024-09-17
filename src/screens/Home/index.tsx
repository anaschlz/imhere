import { Text, View, TextInput, TouchableOpacity, FlatList, Alert} from "react-native";
import { styles } from "./styles";
import { Participant } from "../../components/Participant";

export default function Home() {
    const participants = ['Ana', 'Luisa', 'Yasmin', 'Victor', 'Fernando', 'Noah', 'Kauan', 'Arthur', 'João', 'Lucas']

    function handleParticipantAdd() {
        if(participants.includes("Ana")){
            return Alert.alert("Participante já existe", "Já existe um participante na lista com esse nome.");
        }

    }

    function handleParticipantRemove(name: string) {
        Alert.alert("Remover participante", "Deseja remover participante da lista?", [
            {
                text: 'Sim',
                onPress: () => Alert.alert('Deletado!')
            },
            {
                text: 'Não',
                style: 'cancel'
            }
        ]);
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

            <FlatList
                data={participants}
                keyExtractor={item => item}
                renderItem={({ item }) => (
                    <Participant
                        key={item}
                        name={item}
                        onRemove={() => handleParticipantRemove(item)}
                        />
                )}
                showsVerticalScrollIndicator={false}
                ListEmptyComponent={() => (
                    <Text style={styles.listEmptyText}>
                        Nenhum participante encontrado! Adicione participantes a sua lista de convidados!
                    </Text>
                )}
                

            />



        </View>
    )
}
