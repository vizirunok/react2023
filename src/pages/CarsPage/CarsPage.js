import {CarsForm} from "../../components";
import {Cars} from "../../components/Cars/Cars";
import {useEffect, useState} from "react";
import {CarService} from "../../services";
import {useSearchParams} from "react-router-dom";


const CarsPage = () => {

    const [cars, setCars] = useState([]);

    const [prev, setPrev] = useState(null);
    const [next, setNext] = useState(null);
    const [query,setQuery] = useSearchParams({page: '1'})

    useEffect(() => {
        CarService.getAll(query.get('page')).then(({data: res}) => {
            setCars(res.items);
            setPrev(res.prev);
            setNext(res.next)
        })
    }, [query]);


    const prevPage = () => {
        setQuery(value=>({page: value.get('page') - 1}))
    };

    const nextPage = () => {
        setQuery(value=>({page: +value.get('page') + 1}))
    };

    return (
        <div>
            <CarsForm/>
            <hr/>
            <button disabled={!prev} onClick={prevPage}>prev</button>
            <button disabled={!next} onClick={nextPage}>next</button>
            <Cars cars={cars}/>
        </div>
    );
};

export {CarsPage};