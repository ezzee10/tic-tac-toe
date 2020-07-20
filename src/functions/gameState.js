export const gameState = (table, funct) => {
    for (let i = 0; i < table.length; i++) {
        if (table[i][0] === table[i][1] && table[i][0] !== '' && table[i][0] === table[i][2]) {
            funct('winner');
            break;
        } else if ((table[0][i] === table[1][i] && table[0][i] !== '' && table[0][i] === table[2][i])) {
            funct('winner');
            break;
        } else if (table[0][0] === table[1][1] && table[0][0] !== '' && table[0][0] === table[2][2]) {
            funct('winner');
            break;
        } else if (table[0][2] === table[1][1] && table[1][1] !== '' && table[0][2] === table[2][0]) {
            funct('winner');
            break;
        } else if (!gameNotOver(table)) {
            funct('tie');
            break;
        } else {
            funct('');
        }
    }
}

const gameNotOver = (table) => {
    for (let i = 0; i < table.length; i++) {
        for (let j = 0; j < table[0].length; j++) {
            if (table[i][j] === '') {
                return true;
            }
        }
    }
}