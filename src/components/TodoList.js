import React, { useState } from 'react'
import styles from './TodoList.module.css'
import mybook from './images/book.jpg'
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
const TodoList = () => {
  const [written, setWritten] = useState("")
  const [listItems,setListItems]=useState([])
  const addListItems=()=>{
    if(!written){
      alert("Please write something to add in you list")
    }
    else{
      setListItems([...listItems,written])
      setWritten("")
    }
  }
  const deleteElement=(id)=>{
     const newArray=listItems.filter((ele,index)=>{
       return index!==id
     })
     setListItems(newArray)
  }
  const removeAll=()=>{
      setListItems([])
  }
  return (
    <>
    <div className={styles.body}> 
    <h1>My Todo List</h1>
        <div className={styles.main}>
            <div className={styles.bookItem}>
                <img src={mybook} alt="Book image" className={styles.bookImage}/>
                <p>Add Your List Here </p>
            </div>
            <div className={styles.addItems}>
                <input type='text' 
                placeholder='✍️Add Items...' className={styles.write}
                value={written}
                onChange={(e)=>setWritten(e.target.value)}
                ></input>
                <AddIcon className={styles.plus} onClick={addListItems}/>
            </div>
            <div >
              {
                listItems.map((ele,index)=>{
                  return ( 
                  <div className={styles.addedItems}>
                    <h3 key={index}>{ele}</h3>
                    <DeleteIcon className={styles.delete} onClick={()=>deleteElement(index)}/>
                  </div>
                  )
                })
              }
            </div>
            <div>
              <button className={styles.remove} onClick={removeAll}>Remove</button>
            </div>
        </div>
    </div>
     
    </>
  )
}

export default TodoList