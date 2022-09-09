import React from "react";


const Square = (props) => {
    const handleClick = () => {
        if(!props.squareValue) {
            if (props.player) {
                props.gameSquares.splice(props.index, 1, "x");
                props.setGameSquares(props.gameSquares);
                props.setPlayer(!props.player);
            } else {
                props.gameSquares.splice(props.index, 1, "o");
                props.setGameSquares(props.gameSquares);
                props.setPlayer(!props.player);
            }
        }
    }
    // console.log(props.gameSquares, props.player)

    return (
        <div className="square" onClick={handleClick}>
         {props.squareValue === "o" ? <img src="https://cdn.discordapp.com/attachments/830137099042816080/984895322184634448/devcircle_1.png" /> : props.squareValue}
        </div>
    );
};

export default Square;