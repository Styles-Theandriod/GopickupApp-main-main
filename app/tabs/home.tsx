import { View, Text, StatusBar } from 'react-native';

export default function Home() {
    return (
        <View style={{ flex: 1,  alignItems: 'center', backgroundColor: '#F8F9F8' }}>
                  <StatusBar hidden={true} />
            <Text style={{ fontSize: 24, fontWeight: 'bold' }}>Welcome to the Home Screen!</Text>
        </View>
    );
}
