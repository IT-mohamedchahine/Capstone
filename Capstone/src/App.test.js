import { fireEvent,render,screen } from "@testing-library/react";
import Reservations from "./pages/Reservations";
import '@testing-library/jest-dom'

// test("form text",()=>{
// render(<Reservations/>);
//  const date = screen.getByTestId("res-date");
//  fireEvent.change(date,{target:{value:"2023-01-23"}})
//  const time = screen.getByTestId("res-time");
//  fireEvent.change(time,{target:{value:"17:00"}})
//  const guests = screen.getByTestId("res-guests")
//  const occasion = screen.getByTestId("occasion");
//  const subButton = screen.getByTestId("submit")

//  fireEvent.click(subButton)

// }
// )

test("is heading present",()=>{
    render(<Reservations/>);
    const headingElement= screen.getByText('Table Reservation Form')
    expect(headingElement).toBeInTheDocument();
})

test("does reducer work as expected",()=>{
    const onSubmit = jest.fn()
    render(<Reservations/>);
    const date = screen.getByLabelText("Choose date");
    fireEvent.change(date,{target:{value:"2023-01-23"}})
    const time = screen.getByLabelText("Choose time");
    const submit = screen.getByText("Make Your reservation")
    fireEvent.click(submit)
    expect(time).toHaveTextContent("18:00")
    expect(time).not.toHaveTextContent("13:00")
    // expect(onSubmit).toHaveBeenCalled()
})