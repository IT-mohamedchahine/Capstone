import React,{useState,useEffect,useContext} from 'react';
import { useNavigate } from 'react-router-dom';
import { reducer,innitialState } from '../reducer/reducer';
import { reserveContext } from '../context/context';
import {object,string} from 'yup';
const formSchema = object().shape({
    firstName: string().required(),
    lastName: string().required(),
    email: string().email().required(),
    password: string().min(8).required(),
    website: string().url().required(),
  }) 

const Reservations = () => {
    const[form,setForm]= useState({
        date:'',
        time:'',
        guests:'',
        occasion:'',
    })
    const [error,setError]=useState({
        date:'',
        time:'',
        guests:'',
        occasion:''
    });
    const navigate = useNavigate();
    // const [bookingTime,dispatch]= useReducer(reducer,innitialState)
    const [bookingTime,setBookingTime]=useState([])
    const {reservation,setReservation}=useContext(reserveContext)
    const fetchAPI = function(date) {
        let result = [];
        const seededRandom = function (seed) {
            var m = 2**35 - 31;
            var a = 185852;
            var s = seed % m;
            return function () {
                return (s = s * a % m) / m;
            };
        }
        let random = seededRandom(date);
    
        for(let i = 17; i <= 23; i++) {
            if(random() < 0.5) {
                result.push(i + ':00');
            }
            if(random() < 0.5) {
                result.push(i + ':30');
            }
        }
        return result;
    };

    const onChange =(vals)=>{
        if(vals.target.id === "res-date"){
            // dispatch({type:vals.target.value,})
           const times=  fetchAPI(vals.target.value.split('-')[2])
            setBookingTime(times)
            console.log(vals.target.value.split('-')[2])

        }
       
        // if(vals?.target.value ==="2023-01-23"){
        //     setBookingTime(["17:00","18:00","19:00","20:00","21:00","22:00"])
        // }
        // if(vals?.target.value ==="2023-01-24"){
        //     setBookingTime(["15:00","16:00","17:00","20:00","21:00","22:00"])
        // }
        // if(vals?.target.value ==="2023-01-25"){
        //     setBookingTime(["17:00","18:00","19:00","20:00","21:00","22:00"])
        // }
        // if(vals?.target.value ==="2023-01-26"){
        //     setBookingTime(["13:00","14:00","15:00","20:00","21:00","22:00"])
        // }
        // if(vals?.target.value ==="2023-01-27"){
        //     setBookingTime(["09:00","10:00","11:00","12:00","13:00","14:00"])
        // }
        // if(vals?.target.value ==="2023-01-28"){
        //     setBookingTime(["13:00","15:00","17:00","20:00","21:00","22:00"])
        // }
        // if(vals?.target.value ==="2023-01-29"){
        //     setBookingTime(["17:00","18:00","19:00","20:00","21:00","22:00"])
        // }
    }
    const validateFunc = ()=>{
        if(!form.date){
            setError({...error,date:'Select a date'})
        }
        if(!form.time){
            setError({...error,time:'Select a time'})
        }
        if(!form.guests){
            setError({...error,guests:'How many Guests'})
        }
        if(!form.occasion){
            setError({...error,occasion:'Select a date'})
        }
        if(form.guests === '1'){
            setError({...error,guests:'Guest must be more than one(1)'})
        }
    }
    const onSubmit = (e)=>{
        e.preventDefault();
        console.log(error)
       validateFunc()
       if(!error.date || !error.time || error.guests || error.occasion){
        setReservation({...reservation,...form})
        setForm({
            date:'',
        time:'',
        guests:'',
        occasion:'',
        })
       
        navigate('/booking-confirmation')
       }
      
    }
  return (
    <main className='reservationForm'>
        <h3>Table Reservation Form</h3>
        <form onSubmit={onSubmit} onChange={onChange}>
   <label htmlFor="res-date">Choose date</label>
   <input type="date" 
   id="res-date"
   data-test-id="res-date"
   required
    value={form.date} 
    onChange={(e)=>setForm({...form,date:e.target.value})}/>
    {error.date && <p>{error.date}</p>}
   <label htmlFor="res-time">Choose time</label>
   <select 
   id="res-time" 
   data-test-id="res-time"
   value={form.time} 
   required
   onChange={(e)=>setForm({...form,time:e.target.value})}>
    {bookingTime.map((time,index)=>(
        <option value={time} key={index}>{time}</option>
    ))}
   </select>
   <label htmlFor="guests">Number of guests</label>
   <input type="number" 
   placeholder="1" 
   required
   min="1" max="10" 
   id="guests" 
   data-test-id="guests"
   onChange={e=>setForm({...form,guests:e.target.value})} defaultValue={form.time}/>
   {error.guests && <p>{error.guests}</p>}
   <label htmlFor="occasion">Occasion</label>
   <select 
   id="occasion" 
   data-test-id="occasion"
   value={form.occasion}
   required
   onChange={e=>setForm({...form,occasion:e.target.value})}>
      <option value={"birthday"}>Birthday</option>
      <option value={"anniversary"}>Anniversary</option>
   </select>
   <button type="submit" data-test-id='submit' >Make Your reservation</button>
</form>
    </main>
   
  )
}

export default Reservations