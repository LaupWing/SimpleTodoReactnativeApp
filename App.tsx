import { LinearGradient } from "expo-linear-gradient"
import { SafeAreaView, Text, TouchableOpacity, View } from "react-native"
import { AntDesign } from "@expo/vector-icons"
import "expo-dev-client"
import { GoogleSignin, GoogleSigninButton } from "@react-native-google-signin/google-signin"
import auth from "@react-native-firebase/auth"
import { useEffect, useState } from "react"
import { FirebaseAuthTypes } from "@react-native-firebase/auth"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { NavigationContainer } from "@react-navigation/native"
import LoginScreen from "./screens/LoginScreen"

GoogleSignin.configure({
   webClientId:
      "1088828136827-j7d12v5bk9mo2uq7pjsab99qhea2r9po.apps.googleusercontent.com",
})

export type RootStackParamsList ={
   // Home: undefined
   Login: undefined
}

const Stack = createNativeStackNavigator<RootStackParamsList>()

const App = () => {
   const [initializing, setInitializing] = useState(true)
   const [user, setUser] = useState<FirebaseAuthTypes.User | null>(null)

   const onAuthStateChanged: FirebaseAuthTypes.AuthListenerCallback = (
      user
   ) => {
      setUser(user)
      console.log(user)
      if (initializing) setInitializing(false)
   }

   useEffect(() => {
      const subscriber = auth().onAuthStateChanged(onAuthStateChanged)
      return subscriber
   }, [])

   if (initializing) return null

   return (
      <NavigationContainer>
         <SafeAreaView className="flex items-center justify-center flex-1 w-full">
            <LinearGradient
               className="flex-1 w-full justify-center"
               colors={["#6366f1", "#a855f7", "#ec4899"]}
            >
               <Stack.Navigator>
                  <Stack.Screen
                     name="Login"
                     component={()=><Text>Login</Text>}
                  />
               </Stack.Navigator>
            </LinearGradient>
         </SafeAreaView>
      </NavigationContainer>
   )
}

export default App
