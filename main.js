const { useForm } = window.ReactHookForm;
const { useState } = React;

function App() {
  return (
    <div className="container ">
      <ContactUsForm />
    </div>
  );
}

function ContactUsForm() {
  let { register, handleSubmit, watch } = useForm();

  console.log(register("department"));

  function send(formData) {
    console.log("submitting...")
  }

  return (
    <form onSubmit={handleSubmit(send)} className="form-control card">
      <div>
        <label htmlFor="selectDepartment">Select Department</label>
        <select id="selectDepartment" {...register("department")}>
          <option value="">Select...</option>
          <option value="HR">Human Resources</option>
          <option value="PR">Public Relations</option>
          <option value="Support">Sales Support</option>
        </select>
      </div>
        <br />
      <div>
        <label htmlFor="message"></label>
        <textarea cols={30} rows={5} id="message" placeholder="Enter a message" {...register("message")}></textarea>
      </div>

      <div>
        <label htmlFor="agreedToTerms"></label>
        <input type="checkbox" id="agreeToTerms" {...register("agreedToTerms")} /> Agree to terms.
      </div>

      <button className="btn btn-primary ">Submit</button>
    </form>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);

// //Exercise 9
// const { useState } = React;

// function ContactUsForm() {
//   const [department, setDepartment] = useState("");
//   const [message, setMessage] = useState("");
//   const [agreedToTerms, setAgreedToTerms] = useState(false);
//   const [errors, setErrors] = useState({});

//   function validateForm() {
//     const newErrors = {};
//     if (!department) newErrors.department = "Department is required.";
//     if (!message) newErrors.message = "Message is required.";
//     if (!agreedToTerms)
//       newErrors.agreedToTerms = "You must agree to the terms.";
//     return newErrors;
//   }

//   function handleSubmit(event) {
//     event.preventDefault();
//     const validationErrors = validateForm();
//     if (Object.keys(validationErrors).length > 0) {
//       setErrors(validationErrors);
//     } else {
//       setErrors({});
//       console.log("Form submitted:", { department, message, agreedToTerms });
//     }
//   }

//   return (
//     <form className="mt-4" onSubmit={handleSubmit}>
//       <div className="mb-3">
//         <label htmlFor="department" className="form-label">
//           Department
//         </label>
//         <select
//           id="department"
//           className={`form-select ${errors.department ? "is-invalid" : ""}`}
//           name="department"
//           value={department}
//           onChange={(e) => setDepartment(e.target.value)}
//         >
//           <option value="">Select...</option>
//           <option value="hr">Human Resources</option>
//           <option value="pr">Public Relations</option>
//           <option value="support">Support</option>
//         </select>
//         {errors.department && (
//           <div className="invalid-feedback">{errors.department}</div>
//         )}
//       </div>

//       <div className="mb-3">
//         <label htmlFor="message" className="form-label">
//           Message
//         </label>
//         <textarea
//           id="message"
//           className={`form-control ${errors.message ? "is-invalid" : ""}`}
//           name="message"
//           value={message}
//           onChange={(e) => setMessage(e.target.value)}
//           cols="30"
//           rows="5"
//         />
//         {errors.message && (
//           <div className="invalid-feedback">{errors.message}</div>
//         )}
//       </div>

//       <div className="mb-3 form-check">
//         <input
//           type="checkbox"
//           id="agreedToTerms"
//           className={`form-check-input ${
//             errors.agreedToTerms ? "is-invalid" : ""
//           }`}
//           name="agreedToTerms"
//           checked={agreedToTerms}
//           onChange={(e) => setAgreedToTerms(e.target.checked)}
//         />
//         <label htmlFor="agreedToTerms" className="form-check-label">
//           I agree to the terms and conditions.
//         </label>
//         {errors.agreedToTerms && (
//           <div className="invalid-feedback">{errors.agreedToTerms}</div>
//         )}
//       </div>

//       <button type="submit" className="btn btn-primary">
//         Send
//       </button>
//     </form>
//   );
// }

// function App() {
//   return (
//     <div className="container">
//       <ContactUsForm />
//     </div>
//   );
// }

// ReactDOM.createRoot(document.getElementById("root")).render(<App />);

// //exercise 8. Set up a Contact Us Form -- my example
// const { useState } = React;

// function App(){
//   return <ContactUsForm/>
// }

// function ContactUsForm() {

//   let [department, setDepartment] = useState("");
//   let [message, setMessage] = useState("");
//   let [agreeToTerms, setAgreeToTerms] = useState(false);

//   function handleSubmit(event) {
//     event.preventDefault();
//     console.log(stateToString);
//   }

//   let stateToString = () => {
//     JSON.stringify({department, message, agreeToTerms})
//   }

//   return (
//     <>
//     <div className="container">

//       <form onSubmit={handleSubmit}>
//         <label htmlFor="selectDepartment">Select Department</label>
//         <select
//           name="selectDepartment"
//           id="selectDepartment"
//           value={department}
//           onChange={(event) => setDepartment(event.target.value)}
//           >
//           <option value="">Select...</option>
//           <option value="HR">Human Resources</option>    {/*the values will normally be a PK from the Db*/}
//           <option value="PR">Public Relations</option>
//           <option value="Support">Support</option>
//         </select>

//         <label htmlFor="message">Message</label>
//         <textarea
//           name="message"
//           id="message"
//           value={message}
//           onChange={(event) => setMessage(event.target.value)}
//           placeholder="Enter message here."
//           >
//           Message here
//         </textarea>

//         <label htmlFor="agreeToTerms">I agree to the terms & conditions.</label>
//         <input
//           type="checkbox"
//           name="agreeToTerms"
//           id=""
//           value={agreeToTerms}
//           checked={agreeToTerms}
//           onChange={(event) => setAgreeToTerms(event.target.checked)}
//           />
//         <button type="submit">Send</button>
//       </form>
//           </div>
//     </>
//   );
// }

// ReactDOM.createRoot(document.getElementById("root")).render(<App />);

// //Exercise 7 Displaying Teams with Simulated API Call
// const { useState, useEffect } = React;

// const nbaTeams = [
//   { id: 1, name: "Los Angeles Lakers", division: "Pacific" },
//   { id: 2, name: "Chicago Bulls", division: "Central" },
//   { id: 3, name: "Miami Heat", division: "Southeast" },
//   { id: 4, name: "Dallas Mavericks", division: "Southwest" },
// ];

// const teamAPI = {
//   list() {
//     return new Promise((resolve) => {
//       setTimeout(() => {
//         resolve(nbaTeams);
//       }, 1000);
//     });
//   },
// };

// function App() {
//   let [teams, setTeams] = useState([])
//   let [busy, setBusy] = useState(false)

//   async function loadTeams(){
//     setBusy(true);
//     let data = await teamAPI.list();
//     setBusy(false);
//     setTeams(data);
//   }

//   useEffect(function () {
//     loadTeams();

//   }, []);

//   return (
//     <div>
//       {busy && <p>Loading...</p>}
//       {teams?.map((team) => (
//         <div className="card" key={team.name}>
//           <strong>{team.name}</strong>
//           <div>{team.division}</div>
//         </div>
//       ))}
//     </div>
//   );

// }

// ReactDOM.createRoot(document.getElementById("root")).render(<App />);

//useEffect example
// const {useState, useEffect} = React
// const songs = [
//   {
//     id: 1,
//     title: "Levitating",
//     artist: "Dua Lipa",
//     album: "Future Nostalgia",
//     year: 2020,
//     genre: "Pop",
//     durationInSeconds: 203,
//   },
//   {
//     id: 2,
//     title: "Blinding Lights",
//     artist: "The Weeknd",
//     album: "After Hours",
//     year: 2019,
//     genre: "Synthpop",
//     durationInSeconds: 200,
//   },
//   {
//     id: 3,
//     title: "Good 4 U",
//     artist: "Olivia Rodrigo",
//     album: "SOUR",
//     year: 2021,
//     genre: "Pop Punk",
//     durationInSeconds: 178,
//   },
//   {
//     id: 4,
//     title: "Stay",
//     artist: "The Kid LAROI, Justin Bieber",
//     album: "F*ck Love 3: Over You",
//     year: 2021,
//     genre: "Pop",
//     durationInSeconds: 141,
//   },
//   {
//     id: 5,
//     title: "Montero (Call Me By Your Name)",
//     artist: "Lil Nas X",
//     album: "Montero",
//     year: 2021,
//     genre: "Pop Rap",
//     durationInSeconds: 137,
//   },
// ];

// function App() {
//   return (
//     <div className="container">
//       <SongList/>
//     </div>
//   );
// }

// const songAPI = {
//   list() {
//     return new Promise((resolve) => {
//       setTimeout(() => {
//         resolve(songs);
//       }, 1000);
//     })
//   }
// }

// function SongList(){
//   const [songs, setSongs] = useState([]);
//   const [busy, setBusy] = useState(false);

//   async function loadSongs(){                     //this is a promise
//     setBusy(true);
//     let data = await songAPI.list();
//     setSongs(data);                               //setting the state to return the data back to the API (rendering it in)
//     setBusy(false);
//   }

//   useEffect(function () {
//     loadSongs();
//   }, []);

//   return (
//     <div>
//       <header>
//         <h1>Songs</h1>
//       </header>
//       <div className="list">
//         {busy && <div> Loading... </div>}

//         {songs.map((song) => (
//           <div className="card" key={song.id}>
//             <strong>{song.title}</strong>
//             <div>{song.artist}</div>
//             <small>{song.year}</small>
//           </div>
//         ))}
//       </div>
//     </div>
//   )
// }

// ReactDOM.createRoot(document.getElementById("root")).render(<App />)

//Exercise 7 completed
// const { useState } = React;

// function FruitListItem(props) {
//   return (
//     <li>
//       {props.fruit.name} | <button onClick={props.onRemove}>Delete</button>
//     </li>
//   );
// }

// function FruitList() {
//   const [fruits, setFruits] = useState([
//     { id: 1, name: "apple" },
//     { id: 2, name: "orange" },
//     { id: 3, name: "blueberry" },
//     { id: 4, name: "banana" },
//     { id: 5, name: "kiwi" },
//   ]);

//   function removeFruit(fruit){
//     let updatedFruits = fruits.filter((f) => f.id !== fruit.id )
//     setFruits(updatedFruits)
//   }

//   return (
//     <ul>
//       {fruits.map((fruit) => (
//         <FruitListItem key={fruit.id} fruit={fruit} onRemove = {() => removeFruit(fruit)} />
//       ))}
//     </ul>
//   );
// }

// function App() {
//   return <FruitList />;
// }

// ReactDOM.createRoot(document.getElementById("root")).render(<App />);

// //Exercise 6 (Account Header Exercise) Correct
// function App(){
//   // let [user, setUser] = React.useState(undefined);
//   let [user, setUser] = React.useState({
//     first: "James",
//     last: "Roday"
//   });
//   return (                                //this is a fragment.
//     <>
//     <AccountHeader user={user}/>
//     <img src="" alt="" />
//     </>
//   )

// }

// function AccountHeader(props){
//   return (
//     <>
//       {props.user ? <span>Welcome, {props.user.first} {props.user.last} </span> : <a href="#">Sign In</a>}
//     </>
//   )
// }

// ReactDOM.createRoot(document.getElementById("root")).render(<App />)

// //Exercise 6 (wrong)

// let username = {
//   first: "James",
//   last: "Roday"
// };

// function App(){
//   let [user, setUser] = React.useState(undefined);
//   // let [user, setUser] = React.useState(username);

//   return <AccountHeader user={username}/>
// };

// function AccountHeader({user}){
//   return (
//     <div>
//       <a href="sign-in.html">Sign In </a>
//       {user ? (
//         <span>{user.first} {user.last}</span>
//       ) : (
//         <a href="">Sign In</a>
//       )}
//     </div>

//   )
// };

// ReactDOM.createRoot(document.getElementById('root')).render(<App />);

// Completed exercise 6 for React
// function App(){
//   return (
//     <MoviesPage />
//   )
// }
// function MoviesPage(){
//   let [movieList, setMovieList] = React.useState(movies);
//   return (
//     <div>
//       <h1>Movies Page</h1>
//       <MoviesList movies={movieList}/>
//     </div>
//   )
// };

// function MoviesList({movies}){
//   return (
//     <div>
//       {movies.map(movie => (
//         <div key={movie.id}>
//           {movie.title}
//         </div>
//       ))}
//     </div>
//   )
// }

// ReactDOM.createRoot(document.getElementById('root')).render(<App />);

// //Component Communication

// //Child to Parent Component Communication
// function App() {
//   return <Parent />;
// }

// function Parent() {
//   const handleRequest = (request) => {
//     if (request.includes('car')) {
//       alert('No');
//     }
//   };

//   return (
//     <div>
//       <h1>Parent</h1>
//       <Child onRequest={handleRequest} />
//     </div>
//   );
// }
// function Child(props) {
//   const handleClick = () => {
//     props.onRequest('Can I have the car?');
//   };

//   return (
//     <div>
//       <h2>Child</h2>
//       <button onClick={handleClick}>Ask for the car</button>
//     </div>
//   );
// }

// ReactDOM.createRoot(document.getElementById('root')).render(<App />);

//Parent to Child Component communication example
// function App() {
//   return <Parent/>;
// }

// function Parent() {
//   const [words, setWords] = React.useState('');

//   const handleClick = () => {
//     setWords('Did you do your homework?');
//   };

//   return (
//     <div>
//       <h1>Parent</h1>
//       <button onClick={handleClick}>Ask</button>
//       <Child hears={words} />                     {/*The hears attribute can be named anything. This is created by JSX for you as an object to be called again later by the child.*/}
//     </div>
//   );
// }

// function Child(props) {
//   return (
//     <div>
//       <h2>Child</h2>
//       <p>{props.hears}</p>
//     </div>
//   );
// }

// ReactDOM.createRoot(document.getElementById('root')).render(<App />);

// //Conditional Rendering.

// //This is a conditional rendering of the logical && operator
// function DropdownMenu(){
//   let [isOpen, isSetOpen] = React.useState(false);

//   let handleClick = () => {
//     isSetOpen((currentIsOpen => !currentIsOpen));
//   }

//   return (
//     <div>
//       <button onClick={handleClick}>Click me :D</button>
//       {isOpen && (
//         <ul>
//           <li>Create</li>
//           <li>Update</li>
//           <li>Delete</li>
//         </ul>
//       )}
//     </div>
//   );
// }

// ReactDOM.createRoot(document.getElementById("root")).render(<DropdownMenu />);

//This is a conditional rendering ternary statement.
// function DropdownMenu(){
//   let [isOpen, setIsOpen] = React.useState(false);

//   let handleClick = () => {
//     setIsOpen((currentIsOpen => !currentIsOpen));

//   }

//   return (
//   <div>
//     <button onClick={handleClick}>Click me!</button>
//     {isOpen ? (
//       <ul>
//         <li>Create</li>
//         <li>Update</li>
//         <li>Delete</li>
//       </ul>
//     ) : null}
//   </div>
//   )
// }

// ReactDOM.createRoot(document.getElementById("root")).render(<DropdownMenu />);

// //This is a conditional rendering if statement
// function DropdownMenu(){
//   let [isOpen, setIsOpen] = React.useState(false);

//   let handleClick = () => {
//     setIsOpen((currentIsOpen) => !currentIsOpen);
//   };

//   let menu;
//   if (isOpen){
//     menu = (
//       <ul>
//         <li>Create</li>
//         <li>Update</li>
//         <li>Delete</li>
//       </ul>
//     );
//   }
//   return (
//     <div>
//       <button onClick={handleClick}>click me!</button>
//       {menu}
//     </div>
//   )
// }

// ReactDOM.createRoot(document.getElementById("root")).render(<DropdownMenu />);

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
