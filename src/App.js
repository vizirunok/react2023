import {Navigate, Route, Routes} from "react-router-dom";

import {MainLayout} from "./layouts";
import {LoginPage, RegisterPage, CarsPage} from "./pages";


function App() {


    return (
        <Routes>
            <Route path={'/'} element={<MainLayout/>}>
                <Route index element={<Navigate to={'/register'}/>}/>
                <Route path={'/register'} element={<RegisterPage/>}/>
                <Route path={'/login'} element={<LoginPage/>}/>
                <Route path={'/cars'} element={<CarsPage/>}/>
            </Route>
        </Routes>

    );
}


export default App;
