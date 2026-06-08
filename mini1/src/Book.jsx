
const Book = (props) => {
  const {img, title,author, number} = props
  
  return (
    <article>
        <img src ={img}/>
        <h2>{title}</h2>
        <h4 style= {{fontSize: '0.75rem', color: 'gray'}}>{author} </h4>
        <span className="number">{`#${number + 1}`}</span>
        
    </article>
  )
}

export default Book
