import { useState } from "react";
import "./App.css";
import { useToggle } from "./Hooks/useToggle";
import { useDirection } from "./Hooks/useDirection";
import { useLocalStorage } from "./Hooks/useLocalStorage";
import { useHandleChange } from "./Hooks/useHandleChange";

function App() {
  const { isChecked, handleToggle } = useToggle();
  const { divRef, HTMLDirValue } = useDirection();
  const LOCAL = useLocalStorage();
  const { value: inputValue, handleChange } = useHandleChange();
  const [errorFields, setErrorFields] = useState({});

  const setError = (errorName, errorMsg) => {
    setErrorFields((prev) => ({
      ...prev,
      [errorName]: errorMsg,
    }));
  };

  const handleSubmitSetItem = (event) => {
    event.preventDefault();

    LOCAL.handleSetItem(inputValue.itemName, inputValue.itemValue);
  };

  const handleSubmitGetItem = (event) => {
    event.preventDefault();
    setError("item", "");

    if (inputValue.item === "") {
      setError("item", "Item Name Cannot be empty");
      return;
    }
    LOCAL.handleGetItem(inputValue.item);
  };
  console.log(errorFields);
  return (
    <>
      <h1>CUSTOM HOOKS</h1>
      <hr />
      <div className="container">
        <h2>UseToggleHook</h2>
        <p className="text">{isChecked ? "OFF" : "ON"}</p>

        <label className="switch">
          <input type="checkbox" name="toggle-switch" onChange={handleToggle} />
          <span className="slider round"></span>
        </label>
      </div>
      <hr />

      <div className="container" ref={divRef} dir="rtl">
        <h2>UseDirectionHook</h2>
        <p className="text">HTML Dir = {HTMLDirValue}</p>
      </div>
      <hr />

      <div className="container">
        <h2>UseLocalStorage</h2>
        <form
          className="form set-item"
          noValidate
          onSubmit={handleSubmitSetItem}
        >
          <input
            type="text"
            name="itemName"
            value={inputValue.itemName}
            placeholder="Enter LocalStorage Item Name"
            onChange={handleChange}
          />
          <input
            type="text"
            name="itemValue"
            value={inputValue.itemValue}
            placeholder="Enter LocalStorage Item Value"
            onChange={handleChange}
          />
          <button>Store data to Local Storage</button>
        </form>

        <form
          className="form get-item"
          noValidate
          onSubmit={handleSubmitGetItem}
        >
          <input
            type="text"
            name="item"
            value={inputValue.item}
            onChange={handleChange}
            placeholder="Enter LocalStorage Item Name"
          />
          <button>Fetch data from Local Storage</button>
        </form>
        {<p className="text">{LOCAL.storedValue}</p>}
        {<p className="text">{errorFields.item}</p>}
      </div>
    </>
  );
}

export default App;
