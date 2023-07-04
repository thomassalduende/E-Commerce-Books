import { GoogleLogin } from "@react-oauth/google";
import jwt_decode from "jwt-decode";
import { useContext } from "react";
import { useMutation } from "@apollo/client";
import { userContext } from "../../../Context/user";
import { POST_GOOGLE } from "../../../hoc/Mutation/postLogin";


export function LoginGoogle () {
  const { activateAuth } = useContext(userContext)
  const [insertLogin, {data}] = useMutation(POST_GOOGLE) 
  const handleGoogleSuccess = (credentialResponse) => {
    const decoded = jwt_decode(credentialResponse.credential);
    const name = decoded.name
    const email = decoded.email
    const password = decoded.sub
    insertLogin({
      variables: { nombre: name, email: email , password: password }
    })
    .then(null)
    .catch(null)
  }

  const onFailure = (res) => {
    console.log(res)
  }
  return (
    <div style={{display: 'grid', justifyContent: 'center'}}>
      {data && window.sessionStorage.setItem('token', data.LoginGoogle.accessToken)}
      {data && data.LoginGoogle.accessToken && activateAuth()}
      {data && data.LoginGoogle.accessToken && (window.location.href = '/')}
      <GoogleLogin
        onSuccess={handleGoogleSuccess}
        onFailure={onFailure}
        useOneTap
        auto_select = {true}
    
      />   
    </div>
  )
}