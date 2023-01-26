import {useForm} from "react-hook-form";
import {useState} from "react";
import {useNavigate} from "react-router-dom";

import {AuthServices} from "../../services";


const LoginPage = () => {

    const {handleSubmit, register} = useForm();

    const [error, setError] = useState(null);

    const navigate = useNavigate();

    const submit = async (user) => {
        try {
            const {data} = await AuthServices.auth(user);
            AuthServices.setTokens(data);
            navigate('/cars');
        } catch (e) {
            setError(e.response.data);
        }
    };

    return (
        <form onSubmit={handleSubmit(submit)}>
            {error && <span>{JSON.stringify(error)}</span>}
            <hr/>
            <input type="text" placeholder={'username'} {...register('username')}/>
            <input type="text" placeholder={'password'} {...register('password')}/>
            <button>Login</button>
        </form>
    );
};


export {LoginPage};