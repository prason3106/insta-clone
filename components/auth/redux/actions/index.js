import { firebase } from "@react-native-firebase/app"

export function fetchUser()  {

    return((dispatch)=>{
        firebase.firestore()
        .collection("user")
        .doc(firebase.auth().currentUser.uid)
        .get()
        .then((snapshot)=>{

            if(snapshot.exist){
                dispatch({type : USER_STATE_CHANGE,currentUser :snapshot.data()})
            }
        })


    }
    )}           
               
        
            
                    
            
            
        
        