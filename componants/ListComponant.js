import { FlatList, Image, ScrollView, StyleSheet, Text, View, } from 'react-native';
import users from './DataModal';

export default ListComponant = () => {
    return (
        <View style={styles.container}>
            <FlatList
                data={users}
                renderItem={({ item }) => (
                    <View style={styles.item}>
                        <ScrollView style={{ marginBottom: 0 }}>
                        <Image style={styles.image} source={{ uri: item.avatar }} />
                            <Text style={styles.text}>{item.name}</Text>
                            <Text style={styles.text}>{item.email}</Text>
                            <Text style={styles.text}>{item.phone}</Text>
                            <Text style={styles.text}>{item.address}</Text>
                        </ScrollView>
                    </View>
                )}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 10,
        marginBottom: 50,
    },
    item: {
        marginBottom: 10,
        marginStart: 10,
        marginEnd: 10,
        borderColor: 'red',
        borderWidth: 1,
    },
    text: {
        fontSize: 16,
        fontWeight: 'bold',
        padding: 10,
    },
    image: {
        width: 100,
        height: 100,
        margin: 10,
    }
})