import { useState } from "react";
import { useEffect } from 'react';
import Grid from "./Grid";

const Game = () => {
    
    const gamePattern = [0, 4, 7, 4, 3, 2]
    const [patternSize, setPatternSize] = useState(1);
    
    return(
        <div>
            <Grid pattern={gamePattern}></Grid>
        </div>
    );
}

export default Game;