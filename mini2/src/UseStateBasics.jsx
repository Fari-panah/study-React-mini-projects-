import { useState } from "react";
import {people}  from './people'
const UseStateBasics = () => {
    const[person, setPerson] = useState(people)

    const handleRemoveAll = () => {
        setPerson([])

    }
    const handleRemoveButton = (id) => {
        setPerson(person.filter(p => p.id !== id))


    }

   
    return (
        <div>
           {person.map((p) =>{
            return(
                <div key={p.id}>
                     <h4> {p.name}</h4>
                     <button onClick={()=>handleRemoveButton(p.id)}>remove</button>

                </div>
            )

           } 
           )}
           <button onClick={handleRemoveAll}>clear all</button>

        </div>
    )

}

export default UseStateBasics
