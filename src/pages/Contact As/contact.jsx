import React from 'react';
import { useNavigate } from "react-router-dom"; 
const Contact = () => {
    const navigate = useNavigate();
    const HandelNavigation=()=>{
        // navigate("/about") ;
        navigate(-2) 
        // index forward and back 
        // -1 make it return to the prev page i go to it 
        // 2 return 2 moves  back 
    }
    return (
        <div>
            Contact us 

            <button className='btn btn-success' onClick={()=>{HandelNavigation()}}>Navigate </button>
        </div>
    );
}

export default Contact;
