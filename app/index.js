import { Link } from "expo-router";
import { Text } from "react-native";

export default function Home() {
  return (<>
    <Text>Home page</Text>
    <Link href="/sample">to sample</Link>
  </>);
}
