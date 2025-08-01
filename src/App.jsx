import { useRef, useState } from "react";

function Item ({name, price}) {
  return (
    <li>
      {name}, ${price}
    </li>
  );
}

function AddForm(props) {
  const nameRef = useRef();
  const priceRef = useRef();

  return (
    <form onSubmit={e => {
      e.preventDefault();
      props.add(
        nameRef.current.value,
        priceRef.current.value
      );
    }}> 
      <input type="text" ref={nameRef} /><br />
      <input type="text" ref={priceRef} /><br />
      <button type="submit">Add</button>
    </form>
  );
}

export default function App() {
  const [data, setData] = useState([
    {id:1, name: "Apple", price: 0.99},
    {id:2, name: 'Kiwi', price: 0.9}
  ]);

  const add = (name, price) => {
    const id = data.length + 1; 

    setData([
      ...data,
      {id, name, price}
    ]);
  }
  return (
    <div>
       <h1>Hello REact</h1>
       <ul>
         {data.map(i => (
          <Item key={i.id}
                name={i.name}
                price={i.price} />
         ))}
       </ul>
       <AddForm add = {add} />
    </div>
  )
}

/*import { useState } from "react";
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