import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import { Tabs } from "expo-router";
import "../../global.css";

export default function RootLayout() {
  return (
    <>
      <Tabs screenOptions={{ tabBarActiveTintColor: "coral" }}>
        <Tabs.Screen
          name="index"
          options={{
            title: "Home",
            tabBarIcon: () => (
              <FontAwesome5 name="home" size={24} color="black" />
            ),
          }}
        />
        <Tabs.Screen name="login" options={{ title: "Login" }} />
      </Tabs>
    </>
  );
}
