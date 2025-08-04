import {createContext,useContext, useState, useRef } from "react";
import Toolbar from "./Toolbar";

const MyContext = createContext();
const ThemeContext = createContext();

function HandleList(props) {
  const list = useRef();
  const handleClick = () => {
    props.nlist(list.current.value);
    list.current.value = "";
  }
  return (
    <div>
      <input type="text" ref={list}></input>
      <button onClick={handleClick}>Add</button>
    </div>
  )
}

function Item(props) {
  return (
    <li>
      {props.num}
    </li>
  )
}

export default function App() {
  const [number, setNumber] = useState([1,2,3,4,5]);
  const [theme, setTheme] = useState('light');

  const newList = n => setNumber([...number,n])
  
  return (
    <div>
      <ThemeContext.Provider value={{theme,setTheme}}>
         <MyContext.Provider value="Hello Context">
        <div style={{
          minHeight:400,
          color:"green",
          padding:20,
          background:
            theme === "light" ? "lightblue" : "darkblue",
        }}>
          <Header />
        </div>
         
      </MyContext.Provider>
      </ThemeContext.Provider>
      <Toolbar>
        <h1>Hello REact</h1>
        <h2>Component Composition</h2>
      </Toolbar>

     
     
      
      <HandleList nlist = {newList} />

      <ul>
        {
          number.map((i, index)=>
             <Item key={index} num={i} />
          )
        }
        

      </ul>
    </div>
  )
}

function Header () {
  return <Title />;
}

function Title() {
  const value = useContext(MyContext);
  const {theme, setTheme } = useContext(ThemeContext);
  return (
    <div>
      <h1> {value }</h1>
      <button onClick={()=> {
        setTheme(
          theme === "light" ? "dark" : "light"
        )
      }}>Toggle Theme</button>
    </div>
  )
}




















/*import {
 useState } from "react";
import "./App.css";

export default function App() {
  const [fruits] = useState(["Apple", "Banana", "Mango"]);

  // 🔸 Just for demo: Let's log them using forEach
  fruits.forEach(fruit => {
    console.log("I am logging:", fruit); // 👉 side effect
  });

  return (
    <div>
      <h1>Fruit List</h1>

      { 🔹 Display on screen using map }
      <ul>
        {fruits.map((fruit) => (
          <li>{fruit}</li> // 👉 transformed to JSX
        ))}
      </ul>
    </div>
  );
}

function Item({name, price}) {
  return <li>{name}, ${price}</li>
}
export default function App() {
  return (

    <div>

      <h1>Hello React</h1>
      <ul>
        <Item name="Apple" price = "0.99" /> 
        <Item name = 'Kiwi' price = '0.9' />
      </ul>
    </div>
  );
} */