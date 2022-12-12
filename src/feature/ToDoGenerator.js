import React,{useState} from 'react'

export default function ToDoGenerator() {
    const [content, setContent] = useState("");
    
    const onContentChange = (event) =>{
        const inputValue = event.target.value;
        setContent(inputValue);
    }

    const onSubmit = ()=>{
        console.log(content);
        setContent("");
    }
  return (
    <div>
    <input name="content" min={0} value={content} onChange={onContentChange}/>
    <button onClick={onSubmit}>add</button>
    </div>
  )
}
