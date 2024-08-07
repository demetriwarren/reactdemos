






// //Event handling syntax with useState hook. This is an event that will display a popup message "boo" when the button is clicked. 
// function App(){
//     let [message, setMessage] = React.useState("bruh");  //this is setting the state hook. The first param gets the current value, the second changes it.
//     let displayMessage = () => {
//       setMessage("Message in the bottle.")
//     }
//   return <div>
//     <p>{message}</p>
//     <hr />
//     <button onClick={display}>Display Alert</button>
//     <hr />
//     <button onClick={displayMessage}>Display Message</button>
//     </div>
//   function display(){               //this is the event. Events must always be in camelCase
//     alert("This is a cool button")
//   };
// }

// ReactDOM.createRoot(document.getElementById("root")).render(<App />);



// //deestructuring component
// function Greeter({first, last, age}) {
//   // let {first, last, age} = props
//   return (<h2>Hello, {first} {last}. He is {age} years old.</h2>)
// };

// ReactDOM.createRoot(document.getElementById("root")).render(<Greeter first="Demetri" last="Warren" age="24" />);



// function addMinutes(date, minutes) {
//   //we multiply minutes by 60000 is to convert minutes to milliseconds
//   return new Date(date.getTime() + minutes * 60000);
// }

// function Clock() {
//   const [time, setTime] = React.useState(new Date());

//   const handleClick = () => {
//     setTime(addMinutes(time, 10));
//   };

//   return (
//     <div>
//       <p>{time.toLocaleTimeString()}</p>
//       <button onClick={handleClick}>+ 10 Minutes</button>
//     </div>
//   );
// }

// ReactDOM.createRoot(document.getElementById('root')).render(<Clock />);



// function FruitListItem(props) {
//   function handleClick(id) {
//     console.log(`removed ${id}`);
//   }

//   return <li onClick={() => handleClick(props.fruit.id)}>{props.fruit.name} </li>;
// }

// function FruitList(props) {
//   const fruitListItems = props.fruits.map((fruit) => (
//     <FruitListItem key={fruit.id} fruit={fruit} />
//   ));
//   return <ul>{fruitListItems}</ul>;
// }

// const data = [
//   { id: 1, name: 'apple' },
//   { id: 2, name: 'orange' },
//   { id: 3, name: 'blueberry' },
//   { id: 4, name: 'banana' },
//   { id: 5, name: 'kiwi' },
// ];

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <FruitList fruits={data} />
// );

// //Events

// function handleClick() {
//   console.log("clicked");
// }

// function Button(){
//   return <button onClick={handleClick}>Click me!</button>
// }

// ReactDOM.createRoot(document.getElementById('root')).render(<Button />)



// function FruitListItem(props) {
//   return <li>{props.fruit.name}</li>
// }

// function FruitList(props) {
//   const fruitListItems = props.fruits.map((fruit) => (
//     <FruitListItem key={fruit.id} fruit={fruit}/>         //must have the key referencing the fruit. This identifies each child element of the parent. 
//   ));
//   return <ul>{fruitListItems}</ul>;
// }

// const data = [
//   { id: 1, name: 'apple' },
//   { id: 2, name: 'orange' },
//   { id: 3, name: 'blueberry' },
//   { id: 4, name: 'banana' },
//   { id: 5, name: 'kiwi' },
// ];

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <FruitList fruits={data} />
// );