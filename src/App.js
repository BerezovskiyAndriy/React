import {useEffect, useState} from "react";

import './App.css';
import Users from "./components/Users/Users";
import Forms from "./components/Forms/Forms";
import {userService} from "./services/user.service";

function App() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        userService.getAll()
            .then(users => setUsers(users))
    }, [])
    return (
        <div className="App">
            <Forms users={users}
                   setUsers={setUsers}/>
            <Users users={users}/>
        </div>
    );
}

export default App;
