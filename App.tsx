import { SafeAreaView, Text } from "react-native"
import LinearGradient from "react-native-linear-gradient"

const App = () => {
   return (
      <SafeAreaView className="bg-gradient-to-b from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center flex-1">
         <LinearGradient
            colors={[]}
         >
            {/* <StatusBar/> */}
            <Text>Open up App.tsx to start working on your app!</Text>
         </LinearGradient>
      </SafeAreaView>
   )
}

export default App