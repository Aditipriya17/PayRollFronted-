import React, {useState} from "react";
import logo from "./logo.svg";
import "./App.css";
import style from './css/AppStyle.module.css'
import InputField from "./component/InputField";
import Gender from './component/Gender'
import Button from './component/Button'
import signUpImageSource from './res/img/signup.png'

function App() {
  const [fullName, setFullName] = useState('');
  const [gender, setGender] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onFormSubmit = (event) => {
    event.preventDefault()
    console.log({
      fullname: fullName,
      gender: gender,
      email: email,
      password: password
    })
  }

  return (
    <div className="App">
      <div className={style.flexDiv}>
        <img src={signUpImageSource} className={style.image} />
        <form onSubmit={onFormSubmit} className={style.form}>
          <InputField placeholder="Full Name" inputText={fullName} setInputText={setFullName} />
          <Gender selectedOption={gender} setSelectedOption={setGender} />
          <InputField placeholder="Email" inputText={email} setInputText={setEmail}/>
          <InputField placeholder="Password" inputText={password} setInputText={setPassword}/>
          <Button type='submit' value="Submit"/>
        </form>
      </div>
    </div>
  );
}

export default App;
