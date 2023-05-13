import React from 'react';
import Options from '../Options/Options';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye } from '@fortawesome/free-solid-svg-icons'
import './Questions.css'


const Questions = ({ questions, resultHandler, showAnswer }) => {

    const { question, correctAnswer, options } = questions;

    return (
        <div className='container py-3'>
            <div className='w-100 border rounded-4 shadow p-4'>
                <div className='d-flex justify-content-between align-items-center px-3 mt-3 mb-4'>
                    <div>
                        <p className='fs-5 fw-bold text-success'>{question.slice(3, -4)}</p>
                    </div>
                    <div>
                        <button className='eye-icon text-success' onClick={() => { showAnswer(correctAnswer) }}><FontAwesomeIcon icon={faEye} /></button>
                    </div>
                </div>

                <div className='container row g-4'>
                    {
                        options.map(option => <Options key={option} options={option} resultHandler={resultHandler} correctAnswer={correctAnswer}></Options>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Questions;