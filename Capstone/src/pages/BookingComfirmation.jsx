import React,{useState,useContext} from 'react';
import { useNavigate } from 'react-router-dom';
import { reserveContext } from '../context/context';

const BookingConfirmation = () => {
const [form,setForm]=useState({
    firstName:'',
    lastName:'',
    number:''
});
const navigate = useNavigate();
const[confirm,setConfirm]=useState(false);
const {reservation,setReservation,list,setList} = useContext(reserveContext)
const closeModal=()=>{
    setConfirm(false)
    setTimeout(()=>{navigate('/')},500)
    
}
const onSubmit=(e)=>{
    e.preventDefault()
   const id = Math.random()
    setReservation({...reservation,...form,id}) 
    let reserved = localStorage.getItem('reservations')
    let prevList= localStorage.getItem('reservationList');
    prevList= JSON.parse(prevList)
    reserved= JSON.parse(reserved)
    let reservationList =[];
    if(prevList || reserved){
        reservationList = [...prevList,reserved]
    }
   
    localStorage.setItem('reservationList',JSON.stringify(reservationList))
    console.log(reservationList)
    console.log("Reservations",reserved)
    localStorage.setItem('List',JSON.stringify(list))
    localStorage.setItem('reservations',JSON.stringify(reservation))
    localStorage.setItem('user',JSON.stringify(form.firstName))
    setConfirm(true)
    setTimeout(()=>{closeModal()},5000)
    // const confirmModal = setTimeout(()=>{
    //     // navigate('/')
    // },10000);

   
}
  return (
    <div className='confirmPage'>
        <main className='reservationForm'>
    <h3>Booking Confirmation</h3>
    <form onSubmit={onSubmit}>
<label htmlFor="first-name">First Name</label>
<input type="text" 
id="first-name"
placeholder='Insert Your First Name'
required
value={form.firstName} 
onChange={(e)=>setForm({...form,firstName:e.target.value})}/>

<label htmlFor="last-name">Last Name</label>
<input type="text" 
placeholder="Insert Your Last Name" 
required
id="last-name" 
onChange={e=>setForm({...form,lastName:e.target.value})} defaultValue={form.time}/>
<label htmlFor="phone-number">Phone Number</label>
<input
required
placeholder='Insert Your Phone Number'
id='phone-number'
value={form.number}
onChange={e=>setForm({...form,number:e.target.value})} 
/>

<button type="submit" data-test-id='submit' >Confirm Reservation</button>
</form>


</main>
{
    confirm && 
    <div className='confirm'>
<div className='confirmForm'>
    <p onClick={closeModal}>X</p>
<h3>You are all done !!</h3>
<p>Your table is ready for you</p>
</div>
</div>
}

    </div>

  )
}

export default BookingConfirmation