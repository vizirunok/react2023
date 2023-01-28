import {useForm} from "react-hook-form";
import {useState} from "react";
import {useNavigate} from "react-router-dom";

import {authServices} from "../../services";


const RegisterPage = () => {

    const {handleSubmit, register} = useForm();

    const [error, setError] = useState(null);

    const navigate = useNavigate();

    const submit = async (user) => {
        try {
            await authServices.register(user)
            navigate('/login');
        }
        catch (e) {
            setError(e.response.data);
        }
    };

    return (
        <form onSubmit={handleSubmit(submit)}>
            {error && <span>{JSON.stringify(error)}</span>}
            <hr/>
            <input type="text" placeholder={'username'} {...register('username')}/>
            <input type="text" placeholder={'password'} {...register('password')}/>
            <button>Save</button>
        </form>
    );
};

export {RegisterPage};