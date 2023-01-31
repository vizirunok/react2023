import {useForm} from "react-hook-form";
import {useState} from "react";
import {useNavigate, useSearchParams} from "react-router-dom";

import {authServices} from "../../services";


const LoginPage = () => {

    const {handleSubmit, register} = useForm();

    const [error, setError] = useState(null);

    const navigate = useNavigate();

    const [query,] = useSearchParams();

    const submit = async (user) => {
        try {
            const {data} = await authServices.auth(user);
            authServices.setTokens(data);
            navigate('/cars');
        } catch (e) {
            setError(e.response.data);
        }
    };

    return (
        <div>
            {query.has('expSession') && <h1>session end</h1>}
            <form onSubmit={handleSubmit(submit)}>
                {error && <span>{JSON.stringify(error)}</span>}
                <hr/>
                <input type="text" placeholder={'username'} {...register('username')}/>
                <input type="text" placeholder={'password'} {...register('password')}/>
                <button>Login</button>
            </form>
        </div>
    );
};


export {LoginPage};