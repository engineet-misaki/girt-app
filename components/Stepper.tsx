import { useContext } from 'react';
import { QuestionsState } from '../pages/_app';

export default function Stepper(props) {
  const { questionsObj, setQuestionsObj, delQuestionObj } = useContext(QuestionsState);

  return (
    <>
      {(() => {
        const items = [];
        for (let i = 1; i <= questionsObj.questionNum; i++) {
          if (String(i) === props.questionNumber) {
            items.push(
              <li key={i} className='flex overflow-hidden bg-indigo-500 rounded-full border'>
                <span
                  className={`w-8 h-8 flex z-10 items-center justify-center transition-duration-40 bg-gray-300 border-gray-300 transition-transform ease-linear ${
                    props.transitionState ? 'translate-x-full' : ''
                  }`}
                ></span>
              </li>,
            );
            continue;
          }
          items.push(
            <li key={i} className='bg-white rounded-full border border-gray-300'>
              <span className='flex justify-center items-center w-8 h-8'></span>
            </li>,
          );
        }
        return <>{items}</>;
      })()}
    </>
  );
}
