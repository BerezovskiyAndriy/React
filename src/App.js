import './App.css';
import {useState} from "react";
import Users from "./components/Users/Users";

function App() {
    const [form,setForm] = useState({name:'',username:'',email:''});

  const send = (e) => {
    e.preventDefault();
    console.log(form);
  }
  
  const formHandler = (e) => {
    setForm({...form,[e.target.name]:e.target.value})
  }
  return (
    <div className="App">
        <div>
          <form onSubmit={send}>
              <label>Name: <input type="text" name={'name'} value={form.name} onChange={formHandler}/></label>
              <label>Username: <input type="text" name={'username'} value={form.username} onChange={formHandler}/></label>
              <label>Email: <input type="text" name={'email'} value={form.email} onChange={formHandler}/></label>
              <button>Find</button>
          </form>
        </div>
        <Users/>
    </div>
  );
}

export default App;
