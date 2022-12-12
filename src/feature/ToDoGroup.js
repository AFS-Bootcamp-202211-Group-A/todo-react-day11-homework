import React,{useState} from 'react'
import ToDoItem from './ToDoItem';

export default function ToDoGroup(props) {
     
    const [contentList, setContentList] = useState([
        "First","Second","Third"
    ]);

    
    return contentList.map((item,index)=>{
        return <ToDoItem key={index} content={item}/>
    }) 
     
}
