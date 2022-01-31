import {Navigate, Route, Routes} from 'react-router-dom';

import {CarsPage, CommentsPage, HomePage, PostsPage, UsersPage} from "./pages";

import './App.css';

function App() {
  return (
      <div className="App">
        <Routes>
          <Route path={'/'} element={<HomePage/>}>
            <Route index element={<Navigate to={'/cars'}/>}/>

            <Route path={'/cars'} element={<CarsPage/>}/>
            <Route path={'/users'} element={<UsersPage/>}/>
            <Route path={'/posts'} element={<PostsPage/>}/>
            <Route path={'/comments'} element={<CommentsPage/>}/>
          </Route>
        </Routes>
      </div>
  );
}

export default App;

