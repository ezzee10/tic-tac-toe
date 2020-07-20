import React, { useContext } from "react";
import { ticContext } from '../context/TicProvider';

const Button1 = () => {

    const { handleSetValue, table } = useContext(ticContext);

    return (
        <button
            type="button"
            className="btn"
            onClick={() => handleSetValue(1, 2)}
        >{table[1][2]}</button>
    );
};

export default Button1;