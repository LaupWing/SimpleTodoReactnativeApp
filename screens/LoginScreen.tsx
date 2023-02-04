import { View, Text } from "react-native"
import { GoogleSigninButton, GoogleSignin } from "@react-native-google-signin/google-signin"
import auth from "@react-native-firebase/auth"

const LoginScreen = () => {
   async function onGoogleButtonPress() {
      await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true })
      const { idToken } = await GoogleSignin.signIn()
    
      const googleCredential = auth.GoogleAuthProvider.credential(idToken)
      try{
         await auth().signInWithCredential(googleCredential)
      }catch(e){
         console.log(e)
      }
    }
   return (
      <View className="p-4 bg-white rounded mx-6 shadow">
         <Text className="font-bold text-neutral-700 text-center text-2xl">
            Login
         </Text>

         <View className="p-1 mt-4">
            <GoogleSigninButton onPress={onGoogleButtonPress} className="flex-1 bg-red-400"/>
         </View>
      </View>
   )
}

export default LoginScreen