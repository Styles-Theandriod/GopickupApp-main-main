import { View, Text } from 'react-native';

export default function Home() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#F8F9F8' }}>
            <Text style={{ fontSize: 24, fontWeight: 'bold' }}>Welcome to the Home Screen!</Text>
        </View>
    );
}
