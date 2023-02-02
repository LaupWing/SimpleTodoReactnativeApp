import { LinearGradient } from "expo-linear-gradient"
import { SafeAreaView, Text, TouchableOpacity, View } from "react-native"
import { AntDesign } from "@expo/vector-icons"

const App = () => {
   return (
      <SafeAreaView className="flex items-center justify-center flex-1 w-full">
         <LinearGradient
            className="flex-1 w-full justify-center"
            colors={["#6366f1", "#a855f7", "#ec4899"]}
         >
            <View className="p-4 bg-white rounded mx-6 shadow">
               <Text className="font-bold text-neutral-700 text-center text-2xl">Login</Text>

               <View className="p-1 mt-4">
                  <TouchableOpacity className="bg-neutral-50 py-2.5 flex border flex-row border-neutral-200 px-2 rounded">
                     <AntDesign
                        name="google"
                        size={20}
                        color="red"
                     />
                     <Text className="ml-1">Login with Google</Text>
                  </TouchableOpacity>
               </View>
            </View>
         </LinearGradient>
      </SafeAreaView>
   )
}

export default App