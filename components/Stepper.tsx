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
              <li key={i} className='border flex bg-indigo-500  rounded-full overflow-hidden'>
                <span
                  className={`w-8 h-8 flex items-center justify-center transition-duration-40 bg-gray-300 border-gray-300 ${
                    props.transitionState ? 'translate-x-full' : ''
                  } transition-transform ease-linear`}
                ></span>
              </li>,
            );
            continue;
          }
          items.push(
            <li key={i} className='border border-gray-300 rounded-full  bg-white'>
              <span className='w-8 h-8 flex items-center justify-center'></span>
            </li>,
          );
        }
        return <>{items}</>;
      })()}
    </>
  );
}
