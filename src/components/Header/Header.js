import {useNavigate} from "react-router-dom";

import css from './Header.module.css';


const Header = () => {

    const navigate = useNavigate();

    return (
        <div className={css.Header}>
            <button className={css.btns} onClick={() => navigate('/register')}>Register</button>
            <button className={css.btns} onClick={() => navigate('/login')}>Login</button>
        </div>
    );
};

export {Header};