import { View, Text, StyleSheet } from "react-native";
import { Stack } from "expo-router";

export default function Home() {
  return (
    <View style={styles.container}>
      <Stack.Screen
        options={{
          title: "Inicio",
        }}
      />
      <Text style={styles.title}>¡Bienvenido! hola juan_</Text>
      <Text style={styles.subtitle}>Tu aplicación está lista para empezar</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: "#666",
    textAlign: "center",
  },
});
