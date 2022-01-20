import {Route, Routes} from "react-router-dom";

import {NotFoundPage, UsersPage, PostsPage} from "./pages";
import {Albums, Layout, Photos, PostComments, PostDetails, UserDetails, UsersPosts} from "./components";

import './App.css';

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path={'/'} element={<Layout/>}>

                    <Route path={'users'} element={<UsersPage/>}>
                        <Route path={':id/albums'} element={<Albums/>}>
                            <Route path={':photoId/photos'} element={<Photos/>}/>
                        </Route>

                        <Route path={':id'} element={<UserDetails/>}>
                            <Route path={'posts'} element={<UsersPosts/>}/>
                        </Route>
                    </Route>

                    <Route path={'posts'} element={<PostsPage/>}>
                        <Route path={':id'} element={<PostDetails/>}>
                            <Route path={'comments'} element={<PostComments/>}/>
                        </Route>
                    </Route>

                    <Route path={'*'} element={<NotFoundPage/>}/>
                </Route>
            </Routes>
        </div>
    );
}

export default App;

