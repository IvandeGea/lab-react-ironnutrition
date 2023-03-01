import { Divider, Input } from 'antd';
import { useState } from "react";


function AddFoodForm({ createFood }) {

    const [name, setName] = useState("");
    const [image, setImage] = useState("");
    const [calories, setCalories] = useState(0);
    const [servings, setServings] = useState(0);

    const nameHandler = (e) => setName(e.target.value);
    const imageHandler = (e) => setImage(e.target.value);
    const caloriesHandler = (e) => setCalories(e.target.value);
    const servingsHandler = (e) => setServings(e.target.value);
    const [errorForm, setErrorForm] = useState(false);


    const submitHandler = (e) => {
        e.preventDefault();

        createFood({ name, calories, image, servings });
        setName("");
        setCalories("");
        setImage("");
        setServings("");
    }



    return (
        <form onSubmit={submitHandler} className="w-50 mx-auto mt-5">
            <Divider>Add Food Entry</Divider>
            <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Name</label>
                <Input value={name} type="text" className="form-control" onChange={nameHandler} />
            </div>
            <div className="mb-3">
                <label>Image</label>
                <Input value={image} type="text" className="form-control" onChange={imageHandler} />
            </div>
            <div className="mb-3">
                <label>Calories</label>
                <Input value={calories} type="number" className="form-control" onChange={caloriesHandler} />
            </div>
            <div className="mb-3">
                <label>Servings</label>
                <Input value={servings} type="number" className="form-control" onChange={servingsHandler} />
            </div>
            <button type="submit" className="btn btn-primary">Create</button>
        </form>
    );
}


// {/* <div>
//       <h4>Add Foods</h4>
//       <form onSubmit={handleSubmit}>
//         <label htmlFor="name">Name</label>
//         <input type="text" value={name} onChange={handleName} />

//         <label htmlFor="image">Image</label>
//         <input type="text" value={image} onChange={handleImage} />

//         <label htmlFor="calories">Calories</label>
//         <input type="number" checked={calories} onChange={handleCalories} />

//         <label htmlFor="servings">Servings</label>
//         <input type="number" value={servings} onChange={handleServings} />

//         <button type='submit'>Create Food</button>
//       </form>
//     </div> */}
export default AddFoodForm;