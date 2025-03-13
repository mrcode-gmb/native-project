import { Platform } from "react-native";
import { WebView } from "react-native-webview";

export default function HomeScreen() {
  // if (Platform.OS === "web") {
  //   return (
  //     <iframe
  //       src="https://miyamiyadatasub.com.ng"
  //       style={{
  //         width: "100%",
  //         height: "100vh",
  //         border: "none",
  //         overflow: "hidden", // Hides scrollbar
  //         scrollbarWidth: "none", // Firefox
  //         msOverflowStyle: "none", // IE/Edge
  //       }}
  //     />
  //   );
  // }

  return (
    <>
      <WebView
        source={{ uri: "https://miyamiyadatasub.com.ng }}
        javaScriptEnabled={true}
        domStorageEnabled={true}
      />
    </>
  );
}
