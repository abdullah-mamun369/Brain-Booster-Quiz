import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Questions from '../Questions/Questions';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const BoostQuestions = () => {
    const boostQuestions = useLoaderData();
    const questions = boostQuestions.data.questions;
    const booster = boostQuestions.data.name;

    const correct = () => toast.success('Congratulations!! Now you are Albert Einstein', { theme: 'colored' });
    const wrong = () => toast.error('Wrong!! Lern More...', { theme: 'colored' });
    const Answer = (answer) => toast.success(answer, { theme: 'colored' });

    const handleResultToaster = (option, correctAnswer) => {
        if (option === correctAnswer) {
            correct();
        }
        else {
            wrong()
        }
    }

    const showAnswer = (answer) => {
        const correctAnswer = answer;
        Answer(correctAnswer);
    }

    return (
        <div className='container text-center pt-5'>
            <h1 className='fs-1 fw-bold text-success py-5'>Booster: {booster}</h1>
            <h2>
                {
                    questions.map(question => <Questions key={question.id} questions={question} resultHandler={handleResultToaster} showAnswer={showAnswer}></Questions>)
                }

            </h2>
            <ToastContainer />
        </div>
    );
};

export default BoostQuestions;