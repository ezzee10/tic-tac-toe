import React, { useState } from 'react';
import { gameState } from '../functions/gameState';

export const ticContext = React.createContext();

const TicProvider = props => {

    //state del tablero
    const [table, changeBoard] = useState([
        ['', '', ''],
        ['', '', ''],
        ['', '', '']
    ]);

    //state de los players
    const [player, changePlayer] = useState('X');

    //state del estado del juego
    const [stategame, changeState] = useState('');

    //setear el valor 
    const handleSetValue = (row, column) => {

        if (stategame === '') {
            if (table[row][column] === '') {
                let copy = [...table];
                copy[row][column] = player;
                changeBoard(copy);
                gameState(table, changeState);
                changeTurn();
            }
        } else {
            return;
        }
    }

    //cambio de jugador
    const changeTurn = () => {
        if (player === 'X') {
            changePlayer('O');
        } else {
            changePlayer('X');
        }
    }

    //reiniciar el juego
    const restartGame = () => {
        let matrix = [
            ['', '', ''],
            ['', '', ''],
            ['', '', '']
        ]
        changeBoard(matrix);
        changePlayer('X');
        changeState('');
    }

    return (
        <ticContext.Provider
            value={{
                table,
                stategame,
                player,
                handleSetValue,
                changeState,
                changePlayer,
                restartGame
            }}
        >
            {props.children}
        </ticContext.Provider>
    )
};

export default TicProvider;



