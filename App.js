import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View, Button, TextInput, Image } from "react-native";
import { Picker } from "@react-native-picker/picker";
import data from "./sample_data.json";

export default function App() {
  const [amount, setAmount] = useState(0);
  const [conversion, setConversion] = useState(0);
  const [selected, setSelected] = useState("");
  const [valuutat, setValuutat] = useState({
    key: Object.keys(data.rates),
    value: Object.values(data.rates),
  });
  const [rates, setRates] = useState(0);

  const Convert = () => {
    setConversion(amount / rates);
  };

  return (
    <View style={styles.container}>
      <Image
        style={{ width: 200, height: 200 }}
        source={require("./euro.png")}
      />
      <Text>{conversion}</Text>
      <View style={styles.input}>
        <TextInput
          style={{ fontSize: 18, height: 50, width: 50 }}
          placeholder="0"
          keyboardType="numeric"
          onChangeText={(maara) => setAmount(maara)}
        />
        <Picker
          style={{ height: 50, width: 130 }}
          selectedValue={selected}
          onValueChange={(itemValue, itemIndex) => {
            if (itemIndex != 0) {
              setSelected(itemValue);
              setRates(valuutat.value[itemIndex]);
            }
          }}
        >
          {valuutat.key.map((key) => (
            <Picker.Item label={key} value={key} key={key} />
          ))}
        </Picker>
      </View>
      <Text>{"   "}</Text>
      <Button title="Convert" onPress={Convert} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    flexDirection: "row",
  },
});
