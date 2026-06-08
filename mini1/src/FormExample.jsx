
const FormExample = ()=>{
    return(
        <section>
            <form onSubmit={handleFormSubmit}>
                <h2 style={{margin: '1rem ', color: 'black'}}>Typical Form</h2>
                <input type="text" onChange={(e) => console.log(e.target.value)} style={{margin: '1rem'}}/>
                <button >Submit</button>
                <button onClick={handleButtonClick} type="button" style={{margin: '1rem '}}>click me </button>
            </form>
            
        </section>
    )

}



const handleButtonClick = () => {
    console.log('button clicked')

}
const handleFormSubmit = (e) => {
   e.preventDefault()
}





export default FormExample