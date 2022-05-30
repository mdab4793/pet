
import { useState } from "react";


const Main =()=>{
    const [amount, setAmount] = useState(0);
    const [inverted, setInverted] = useState(false);
    const onChange = (event) => {
        setAmount(event.target.value);
    };
    const reset = ()=> setAmount(0);
    const onInvert = () => {
        reset();
        setInverted((current) => !current);
    };
    
    return (
        <div>
            <h1 className="hi">컨버터</h1>
           <div>
           <input
            value={inverted ? amount * 60 :amount} 
            id="minutes"  
            placeholder="분" 
            type="number"
            onChange={onChange}
            disabled={inverted}
            />
            <label htmlFor="minutes">minutes</label>
           </div>
        
            <div>
            <input  
            value={inverted ? amount: Math.round(amount/60)}
            id="hours" 
            placeholder="시간" 
            type="nuber"
            disabled={!inverted}
            onChange={onChange}
            />
            <label htmlFor="hours">hours</label>
            </div>
            <button onClick={reset}>Reset</button>
            <button onClick={onInvert}>{inverted ? "Turn back" : "Invert"}</button>
        </div>

    );
}


export default Main;