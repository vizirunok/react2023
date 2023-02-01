import {CarService} from "../../services";


const Car = ({car, setCars}) => {

    const {id, brand, price, year, photo} = car;

    const sendPhoto = async (e) => {
        const formData = new FormData();
        const [file] = e.target.files;
        formData.append('photo', file);
        const {data}=await CarService.addPhoto(id, formData);
        setCars(cars => {
            const find = cars.find(car => car.id === id);
            Object.assign(find, {...data, photo: URL.createObjectURL(file)})
            return [...cars]
        })
    }

    return (
        <div>
            <div>id: {id}</div>
            <div>brand: {brand}</div>
            <div>price: {price}</div>
            <div>year: {year}</div>
            <div>{
                photo ?
                    <img src={photo} alt={brand}/>
                    :
                    <input type="file" onChange={sendPhoto}/>
            }</div>
        </div>
    );
};

export {Car};