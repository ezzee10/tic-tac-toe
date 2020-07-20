import React, { useContext } from 'react';
import { ticContext } from '../context/TicProvider';

const Restart = () => {

    const { restartGame } = useContext(ticContext);

    return (
        <button
            className="btn-rs"
            onClick={restartGame}
        >Reiniciar</button>
    );
}

export default Restart;
