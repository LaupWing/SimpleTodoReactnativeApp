import { LinearGradient } from "expo-linear-gradient"
import { SafeAreaView, Text, TouchableOpacity, View } from "react-native"
import { AntDesign } from "@expo/vector-icons"
import "expo-dev-client"
import { GoogleSignin, GoogleSigninButton } from "@react-native-google-signin/google-signin"
import auth from "@react-native-firebase/auth"
import { useEffect, useState } from "react"
import { FirebaseAuthTypes } from "@react-native-firebase/auth"

GoogleSignin.configure({
   webClientId:
      "1088828136827-j7d12v5bk9mo2uq7pjsab99qhea2r9po.apps.googleusercontent.com",
})

const App = () => {
   const [initializing, setInitializing] = useState(true)
   const [user, setUser] = useState<FirebaseAuthTypes.User | null>(null)

   async function onGoogleButtonPress() {
      await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true })
      const { idToken } = await GoogleSignin.signIn()
    
      const googleCredential = auth.GoogleAuthProvider.credential(idToken)
    
      return auth().signInWithCredential(googleCredential)
    }

   const onAuthStateChanged: FirebaseAuthTypes.AuthListenerCallback = (
      user
   ) => {
      setUser(user)
      if (initializing) setInitializing(false)
   }

   useEffect(() => {
      const subscriber = auth().onAuthStateChanged(onAuthStateChanged)
      return subscriber // unsubscribe on unmount
   }, [])

   if (initializing) return null

   return (
      <SafeAreaView className="flex items-center justify-center flex-1 w-full">
         <LinearGradient
            className="flex-1 w-full justify-center"
            colors={["#6366f1", "#a855f7", "#ec4899"]}
         >
            <View className="p-4 bg-white rounded mx-6 shadow">
               <Text className="font-bold text-neutral-700 text-center text-2xl">
                  Login
               </Text>

               <View className="p-1 mt-4">
                  <GoogleSigninButton onPress={onGoogleButtonPress} className="flex-1 bg-red-400"/>
               </View>
            </View>
         </LinearGradient>
      </SafeAreaView>
   )
}

export default App
