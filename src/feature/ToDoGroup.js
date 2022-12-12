import React,{useState,useEffect} from 'react'
import ToDoItem from './ToDoItem';

export default function ToDoGroup(props) {
    
    const [contentList, setcontentList] = useState([]);
    useEffect(() => {
        setcontentList(props.contentList)
    }, [props.contentList]);
    return contentList.map((item,index)=>{
        return <ToDoItem key={index} content={item}/>
    }) 
     
}
