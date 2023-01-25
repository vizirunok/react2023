import {useForm} from "react-hook-form";

import {AuthServices} from "../../services";


const RegisterPage = () => {

    const {handleSubmit, register} = useForm();

    const submit = async (user) => {
        try {
            await AuthServices.register(user)
        }
        catch (e) {
            console.log(e);
        }
    };

    return (
        <form onSubmit={handleSubmit(submit)}>
            <input type="text" placeholder={'username'} {...register('username')}/>
            <input type="text" placeholder={'password'} {...register('password')}/>
            <button>Save</button>
        </form>
    );
};

export {RegisterPage};