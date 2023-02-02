import { LinearGradient } from "expo-linear-gradient"
import { SafeAreaView, Text } from "react-native"

const App = () => {
   return (
      <SafeAreaView className="bg-gradient-to-b from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center flex-1">
         <LinearGradient
            colors={["#6366f1", "#a855f7", "#ec4899"]}
         >
            {/* <StatusBar/> */}
            <Text>Open up App.tsx to start working on your app!</Text>
         </LinearGradient>
      </SafeAreaView>
   )
}

export default App