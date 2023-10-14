import { useState } from 'react';
export function Header(){
    const [text, setText] = useState('');
    const wordCount = text.split(" ").filter(Boolean).length;

    const handleTextChange = (e) => {
    setText(e.target.value);
    };
    const mystyle={
            position: "absolute",
            top:"50%",
            left:"50%",
            transform:"translate(-50%, -50%)",
            padding:"10px"
    };
    return(
        <div>
            <center>
                <div style={mystyle}>
                    <h1>Responsive Paragraph Word </h1>
                    <h1>Counter</h1>
                    <textarea value={text} onChange={handleTextChange} style={{width:'100%', height:'100px'}}>
                    </textarea>
                    <p style={{float:"left"}}>Word Count: {wordCount}</p>            
                </div>
            </center>
        </div>
    )
}

