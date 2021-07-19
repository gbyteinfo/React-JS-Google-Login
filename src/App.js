import React, { useState } from "react";
import { GoogleLogin } from 'react-google-login'
function App() {

	const [name, setName] = useState()
	const [email, setEmail] = useState()
	const [profilePic, setProfilePic] = useState()
	const [isLoggedIn, setIsLoggedIn] = useState(false)
	
	
	const responseGoogle = (response) => {
		//console.log('resposta', response.error );
		const {profileObj} = response;
		if(response.error){
			console.log("erro")
		}else{
			setName(profileObj.name)
			setEmail(profileObj.email)
			setProfilePic(profileObj.imageUrl)
			setIsLoggedIn(true)
		}

		
		
	};
	return (
		<div className="container">
			
			<GoogleLogin
				clientId="SUA HASH DO GOOGLE"
				buttonText="Autenticar com sua conta Google"
				onSuccess={responseGoogle}
				onFailure={responseGoogle}
				cookiePolicy={'single_host_origin'}
  			/>
			  {isLoggedIn ? (<div>
				<img src={ profilePic } alt={`Imagem do ${ name }`} />
				<p>Nome: { name }</p>
				<p>Email: { email }</p>
			</div>) : (<div>Sem usuario autenticado</div>)}
			
		</div>
	);
}
export default App;
