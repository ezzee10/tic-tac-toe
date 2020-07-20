import React, { useContext } from "react";
import { ticContext } from '../context/TicProvider';

const Button1 = () => {

    const { handleSetValue, table } = useContext(ticContext);

    return (
        <button
            type="button"
            className="btn"
            onClick={() => handleSetValue(0, 2)}
        >{table[0][2]}</button>
    );
};

export default Button1;