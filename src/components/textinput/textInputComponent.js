import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchEmotion } from '../../redux/slices/emotionSlice'; 

function TextInputComponent() {
    const [text, setText] = useState('');
    const dispatch = useDispatch();

    const handleSubmit = () => {
        dispatch(fetchEmotion(text));
    };

    return (
        <div className="input-container">
            <textarea
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Enter text to analyze"
            />
            <button onClick={handleSubmit}>Submit</button>
        </div>
    );
}

export default TextInputComponent;
