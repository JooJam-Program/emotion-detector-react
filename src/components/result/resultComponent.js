import React from 'react';
import { useSelector } from 'react-redux';

function ResultComponent() {
    const emotionData = useSelector((state) => state.emotion.data);
    const loading = useSelector((state) => state.emotion.loading);

    return (
        <div className="result-container">
            {loading ? <p>Loading...</p> : 
                emotionData && emotionData.length > 0 
                    ? emotionData[0].map((emotion, index) => (
                        <div key={index} className="emotion-entry">
                            <p>{emotion.label}: <span className="score">{(emotion.score * 100).toFixed(2)}%</span></p>
                            <div className="progress">
                                <div className="progress-bar" style={{ width: `${emotion.score * 100}%` }}></div>
                            </div>
                        </div>
                      ))
                    : <p>No data</p>
            }
        </div>
    );
}

export default ResultComponent;
