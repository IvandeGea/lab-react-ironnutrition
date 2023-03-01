import { Input } from 'antd';

import { useState } from "react";

function Search({ filter }) {

    const [filtro, setFiltro] = useState("");

    const filtroHandler = (e) => {
        setFiltro(e.target.value);
    }

    const submitHandler = (e) => {
        e.preventDefault();
        filter(filtro);

    }


    return (
        <form className="w-50 mx-auto mt-5 mb-3" onSubmit={submitHandler}>
            <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Filtro</label>
                <Input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={filtro} onChange={filtroHandler} />
            </div>

        </form>
    );
}

export default Search;