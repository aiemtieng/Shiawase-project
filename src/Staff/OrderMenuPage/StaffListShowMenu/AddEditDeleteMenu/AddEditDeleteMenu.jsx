import React,{useState,useEffect} from 'react'
import './AddEditDeleteMenu.css'
import { database } from "../../../../Firebase";
import { collection,addDoc } from 'firebase/firestore';
import { imagedatabase } from '../../../../Firebase';
import { ref, uploadBytes } from 'firebase/storage';
import { v4 as uuid } from 'uuid';


function AddEditDeleteMenu() {
  const [image,setImage] = useState('')

  const handleClick =()=>{
    const imgRef = ref(imagedatabase,`files/${uuid()}`)
    uploadBytes(imgRef,image)
  }
  return (
    <div className='AddEditDeleteMenu'>
        <h2>นม</h2>
        <div className='FrameStaffAddMenu'>
            <input type="file" onChange={(e)=>setImage(e.target.files[0])} /> 
            <button onClick={handleClick}>+</button>
        </div>
    </div>
  )
}

export default AddEditDeleteMenu