import { useState } from "react";

const UseStateObjects = () => {
   /* const[name, setName] = useState('Peter')
    const [age, setAge] = useState(24)
    const [hobby, setHobby] = useState('reads books')

    const displayPerson = () => {
        setName('John')
        setAge(18)
        setHobby('Scream at the computer')
    }*/

        const [person, setPerson] = useState({
            name: 'Peter',
            age: 24,
            hobby: 'read books'

        })
         const displayPerson = () => {
            //setPerson({name: 'John', age: 18, hobby: 'Scream at the computer'})
            setPerson({...person, name: 'John'})
         }


    return(
        <div>
            <h3>{person.name}</h3>
            <h3>{person.age}</h3>
            <h4>{person.hobby}</h4>
            <button  className="button1" onClick={displayPerson}>Show John</button>
        </div>

    )

}
export default UseStateObjects