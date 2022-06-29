import React, { useState } from "react";

export default function SearchBar({onSearch}) {
  //hooks: funciones/métodos que les permiten a los componentes funcionales tener estados.
  const [city, setCity] = useState(''); //ROMA

  function handleInputChange(e) {
    setCity(e.target.value)
  }

  return (
    <form onSubmit={(e) => {
      e.preventDefault(); 
      onSearch(city);
      setCity('')
    }}>
      <input
        type="text"
        placeholder="Ciudad..."
        value={city} //Vinculamos el input con el estado
        onChange={handleInputChange}
      />
      <input type="submit" value="Agregar" />
    </form>
  );
}