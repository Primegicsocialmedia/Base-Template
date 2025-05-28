import { Text, View } from "react-native";
import { Link } from "expo-router";

export default function Index() {
  return (
    <View
     className="flex-1 items-center justify-center"
    >
      <Text className="text-2xl font bold "> Welcome to Prime. </Text>
      <Link href="/login">Login Page</Link>
    </View>
  );
}
