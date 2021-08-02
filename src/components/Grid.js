import { useState } from 'react';
import { useEffect } from 'react';
import Box from "./Box";

const Grid = props => {
    
    const [currentBlink, setCurrentBlink] = useState(0);
    const [blinkingBoxes, setBlinkingBoxes] = useState(
        Array.from({length: 9}, _ => false)
        );

    const handleClick = event => {
        console.log(event.target.id);
    }

    const handleNext = () => {
        console.log('here')
        if (currentBlink < props.size) {
            setCurrentBlink(currentBlink + 1);
            const updatedBlinks = blinkingBoxes;
            updatedBlinks[currentBlink] = true;
            setBlinkingBoxes(updatedBlinks);
        }
    }
    useEffect(() => {
        
    }, []);
    
    return(
        <div>
            <div className="justify-items-center grid grid-flow-col grid-cols-3 grid-rows-3 gap-4">
                <Box blinking={blinkingBoxes[0]} id={0} boxClicked={handleClick}></Box>
                <Box blinking={blinkingBoxes[1]} id={1} boxClicked={handleClick}></Box>
                <Box blinking={blinkingBoxes[2]} id={2} boxClicked={handleClick}></Box>
                
                <Box blinking={blinkingBoxes[3]} id={3} boxClicked={handleClick}></Box>
                <Box blinking={blinkingBoxes[4]} id={4} boxClicked={handleClick}></Box>
                <Box blinking={blinkingBoxes[5]} id={5} boxClicked={handleClick}></Box>

                <Box blinking={blinkingBoxes[6]} id={6} boxClicked={handleClick}></Box>
                <Box blinking={blinkingBoxes[7]} id={7} boxClicked={handleClick}></Box>
                <Box blinking={blinkingBoxes[8]} id={8} boxClicked={handleClick}></Box>
            </div>
            <button className="bg-gray-900 rounded text-white px-4 py-3" onClick={handleNext}>Next</button>
        </div>

    );
}

export default Grid;