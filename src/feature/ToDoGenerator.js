import React,{useState} from 'react'

export default function ToDoGenerator(props) {
    const [content, setContent] = useState("");
    const {addContent} = props;
    const onContentChange = (event) =>{
        const inputValue = event.target.value;
        setContent(inputValue);
    }

    const onSubmit = ()=>{
        addContent(content);
        setContent("");
    }
  return (
    <div>
    <input name="content" min={0} value={content} onChange={onContentChange}/>
    <button onClick={onSubmit}>add</button>
    </div>
  )
}
