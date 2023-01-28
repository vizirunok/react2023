import {CarsForm} from "../../components";
import {Cars} from "../../components/Cars/Cars";
import {useEffect, useState} from "react";
import {CarService} from "../../services";


const CarsPage = () => {

    const [cars, setCars] = useState([]);

    useEffect(() => {
        CarService.getAll().then(({data:res})=> setCars(res.items))
    }, [])

    return (
        <div>
            <CarsForm/>
            <hr/>
            <Cars cars={cars}/>
        </div>
    );
};

export {CarsPage};