const Box = props =>{

    return(
        <div>
            {/* <button className="box" onClick={() => console.log("hi")}></button> */}
            <button id={props.id} className={"w-40 h-40 bg-gray-900 rounded box" + (props.blinking ? "box-blink" : "")} onClick={props.boxClicked}></button>
        </div>
    );
}
export default Box;
