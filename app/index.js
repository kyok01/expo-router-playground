import { Link } from "expo-router";
import { Text } from "react-native";
import {  GLView } from 'expo-gl';
import { Renderer } from 'expo-three';

export default function Home() {
  return (<>
    <Text>Home page</Text>
    <Link href="/sample">to sample</Link>
    <GLView
      style={{ flex: 1 }}
      onContextCreate={(gl) => {
        // Create a WebGLRenderer without a DOM element
        const renderer = new Renderer({ gl });
        renderer.setSize(gl.drawingBufferWidth, gl.drawingBufferHeight);
      }}
    />
  </>);
}
