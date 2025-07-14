import React, {useState} from "react";

function AddItem(){

    const [count, setCount] = useState(1);
    const countAdd = () => setCount(count + 1);
    const countMinus = () => setCount(count - 1)

    return(
        <>
            <p className='d-flex' style={{border:'1px solid black', width:'100px', fontWeight:'bold'}}>
                <div><button className='btn' onClick={countAdd}><i class="bi bi-plus"></i></button></div>
                <div className='mt-1'><span>{count}</span></div>
                <div><button className='btn' onClick={countMinus}><i class="bi bi-dash"></i></button></div>
            </p>
        </>
    )
}
export default AddItem;