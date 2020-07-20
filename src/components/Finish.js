import React, { useContext } from 'react';
import { ticContext } from '../context/TicProvider';

const Finish = () => {

    const { stategame, player } = useContext(ticContext);

    const ganador = () => {
        if (player === 'X') {
            return 'O';
        } else {
            return 'X';
        }
    }

    return (
        <div className="finish">

            {(stategame === 'winner') ?

                <h3>El ganador del juego es : <span>{ganador()}</span> </h3> :

                (stategame === 'tie') ?

                    <h3>El juego ha sido empatado </h3> :

                    null

            }

        </div>
    );
}

export default Finish;