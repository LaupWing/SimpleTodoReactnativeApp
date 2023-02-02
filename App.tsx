import { LinearGradient } from "expo-linear-gradient"
import { SafeAreaView, StatusBar, Text } from "react-native"

const App = () => {
   return (
      <SafeAreaView className="flex items-center justify-center flex-1 w-full">
         {/* <StatusBar/> */}
         <LinearGradient
            className="flex-1 w-full"
            colors={["#6366f1", "#a855f7", "#ec4899"]}
         >
            <Text>Open up App.tsx to start working on your app!</Text>
         </LinearGradient>
      </SafeAreaView>
   )
}

export default App