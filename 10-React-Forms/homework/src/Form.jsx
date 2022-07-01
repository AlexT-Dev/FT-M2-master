import React from 'react';

export function validate(input) {
  let errors = {};  //Para controlar los mensajes de error
  if (!input.username) { //Para username
      errors.username = 'Username is required'; //Si no trae dato el input, crea el objeto de error 
  } else if (!/\S+@\S+\.\S+/.test(input.username)) {
    errors.username = 'Username is invalid';
  }
   
  if (!input.password) { //Para password 
    errors.password = 'Password is required'; //Si no trae dato el input, crea el objeto de error 
} else if ((!/(?=.*[0-9])/.test(input.password))) {
  errors.password = 'Password is invalid';
}
  
  return errors;
};

export default function  Form() {
  // const [username, setUsername] = React.useState('')
  // const [password, setPassword] = React.useState('')  Para cuando son pocos datos de captura
  
  
  // Para cuando son muchos, se encapsulan
  const [input, setInput] = React.useState({
    username: '',
    password: '',
  });

  //crear un nuevo estado, donde mantenemos un objeto con los errores
  const [errors, setErrors] = React.useState({});

  function handleInputChange(e){
    setInput({
      ...input,    //Con spreadoperator se elimina el error de que sólo tome un valor de un input 
      [e.target.name]: e.target.value
    })

    setErrors(validate({
      ...input,
      [e.target.name]: e.target.value
    }));
  }
  
  return (
    <form>
      <div>
        <label>Username:</label>
        <input className={errors.username && 'danger'}
          type="text" name="username" onChange={handleInputChange} value={input.username} />
        {errors.username && (
          <p className="danger">{errors.username}</p>
        )}
      </div>
      <div>
        <label>Password:</label>
        <input className={errors.password && 'danger'}
          type="password" name="password" onChange={handleInputChange} value={input.password} />
        {errors.password && (
          <p className="danger">{errors.password}</p>
        )}
        {/* <input type="password" name="password" onChange={handleInputChange} value={input.password}/> */}
      </div>
      <input type="submit" value="Submit" />
    </form>
  )
}
