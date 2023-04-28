import React, { createContext,useState } from "react";

const reserveContext= createContext(null);


const ReserveProvider =({children})=>{
    const[reservation,setReservation]=useState({
        id:'',
        date:'',
        time:'',
        guests:'',
        occasion:'',
        firstName:'',
        lastName:'',
        number:''

    });
    const[list,setList]=useState([])
return(
    <reserveContext.Provider value={{reservation,setReservation,list,setList}}>
        {children}
    </reserveContext.Provider>
)
}

export {reserveContext,ReserveProvider}