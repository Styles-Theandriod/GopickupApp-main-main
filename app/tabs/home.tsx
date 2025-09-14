import React, { useState } from "react";
import {
  Image,
  ScrollView,
  StatusBar,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  StyleSheet
} from "react-native";

export default function Home() {
  const [selected, setSelected] = useState("Buy Material");

  const tabs = ["Buy Material", "Natural Resources", "Post a Request", "Trade"];
  return (
    <View style={{ flex: 1, backgroundColor: "#F8F9F8" }}>
      <StatusBar hidden={true} />
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-around",
          alignItems: "center",
          paddingTop: 20,
        }}
      >
        <Text style={{ fontSize: 30.91, fontWeight: "bold" }}>Home</Text>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image
            source={require("../../assets/images/myImage.jpg")}
            style={{
              width: 24.98576545715332,
              height: 24.98576545715332,
              borderRadius: 100,
              marginRight: 20,
            }}
          />
          <View>
            <Text>Azih Monica</Text>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  backgroundColor: "#439D25",
                  fontSize: 10,
                  marginRight: 10,
                  textAlign: "center",
                  paddingLeft: 8,
                  paddingRight: 8,
                }}
              >
                User ID
              </Text>
              <Text>D422Q7827</Text>
            </View>
          </View>
          <Image
            source={require("../../assets/images/Settings.png")}
            style={{
              width: 20.2533016204834,
              height: 20.2533016204834,
              marginLeft: 20,
            }}
          />
        </View>
      </View>
      <View
        style={{ width: 366, height: 996, marginHorizontal: 15, marginTop: 20 }}
      >
        <TextInput
          style={{
            width: 365,
            height: 37,
            borderRadius: 27,
            borderWidth: 2,
            paddingTop: 2,
            paddingRight: 7,
            paddingLeft: 30,
            paddingBottom: 2,
            marginTop: 10,
            borderColor: "#439D25",
          }}
          placeholder="Search"
          cursorColor={"#439D25"}
          placeholderTextColor={"#439D25"}
        />
        <View
          style={{
            backgroundColor: "#439D250D",
            width: 365,
            height: 126,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-around",
            marginTop: 10,
          }}
        >
          <View>
            <Text style={{ fontWeight: "900", marginBottom: 10 }}>Coal</Text>
            <Text>Available</Text>
            <TouchableOpacity
              style={{
                backgroundColor: "black",
                borderRadius: 30,
                alignItems: "center",
                justifyContent: "center",
                width: 84,
                height: 36,
                paddingTop: 5,
                paddingBottom: 5,
                paddingLeft: 26,
                paddingRight: 26,
                marginTop: 10,
              }}
            >
              <Text style={{ color: "white" }}>Buy</Text>
            </TouchableOpacity>
          </View>

          <View>
            <Image
              source={require("../../assets/images/Rock.png")}
              style={{
                width: 184,
                height: 111,
                marginLeft: 20,
              }}
            />
          </View>
        </View>
        <View style={{ marginTop: 20 }}>
          <Image
            source={require("../../assets/images/GoMarket.png")}
            style={{
              width: 364,
              height: 101,
            }}
          />
        </View>
        <View style={{marginTop:20}}>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.scrollContainer}
          >
            {tabs.map((tab) => (
              <TouchableOpacity
                key={tab}
                onPress={() => setSelected(tab)}
                style={[
                  styles.button,
                  selected === tab && styles.selectedButton,
                ]}
              >
                <Text
                  style={[styles.text, selected === tab && styles.selectedText]}
                >
                  {tab}
                </Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
  },
  scrollContainer: {
    paddingHorizontal: 10,
    alignItems: "center",
  },
  button: {
    backgroundColor: "#439D2521",
    borderRadius: 20,
    paddingVertical: 8,
    paddingHorizontal: 15,
    marginRight: 10,
  },
  selectedButton: {
    borderWidth: 2,
    borderColor: "#439D25", // highlight border
  },
  text: {
    fontSize: 14,
    color: "#000",
    fontWeight: "500",
  },
  selectedText: {
    fontWeight: "bold",
  },
});