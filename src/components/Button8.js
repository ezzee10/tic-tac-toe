import React, { useContext } from "react";
import { ticContext } from '../context/TicProvider';

const Button1 = () => {

    const { handleSetValue, table } = useContext(ticContext);

    return (
        <button
            type="button"
            className="btn"
            onClick={() => handleSetValue(2, 1)}
        >
            {table[2][1]}</button>
    );
};

export default Button1;