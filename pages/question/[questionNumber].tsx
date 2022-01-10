import Link from 'next/link';
import { useState, useContext, useEffect, useMemo } from 'react';
import { useRouter } from 'next/router';
import { QuestionsState } from '../_app';
import Stepper from '../../components/Stepper';

const Question = ({ blogs }) => {
  const router = useRouter();
  const { questionNumber } = router.query;
  const { questionsObj, setQuestionsObj, delQuestionObj } = useContext(QuestionsState);
  const [timeId, setTimeId] = useState(0);
  const [transitionState, settransitionState] = useState(false);
  const [question, setQuestion] = useState({ id: null, content: null });

  useEffect(() => {
    // 初期表示時にアニメーションさせる
    window.setTimeout(() => {
      settransitionState(true);
    }, 100);

    const quesitonValue = makeQuestion();
    setQuestion(quesitonValue);
    // 4０秒後に自動遷移する
    let id = window.setTimeout(() => {
      // nextPage(quesitonValue.id);
    }, 5 * 1000);
    setTimeId(id);
  }, [questionNumber]);

  // 遷移した後にランダムで被りなく問題を表示する
  const makeQuestion = () => {
    const notDoneQuestion = [];
    for (const el of questionsObj.questions) {
      if (!el.ansDone) notDoneQuestion.push(el);
    }
    return notDoneQuestion[getRandomInt(notDoneQuestion.length)];
  };

  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  // 選択したときにスコアをプラスして次画面に遷移する
  const onAnswer = (questionId: number, selectedScoreAtApply: number) => {
    const scoreAtApply = questionsObj.questions[questionId - 1].scoreAtApply;
    if (scoreAtApply === 5) {
      const newScore = questionsObj.score + selectedScoreAtApply;
      const newPassion = questionsObj.passion + selectedScoreAtApply;
      setQuestionsObj({
        ...questionsObj,
        score: newScore,
        passion: newPassion,
      });
    } else {
      const newScore = questionsObj.score + 6 - selectedScoreAtApply;
      const newToughness = questionsObj.toughness + 6 - selectedScoreAtApply;
      setQuestionsObj({
        ...questionsObj,
        score: newScore,
        toughness: newToughness,
      });
    }
    nextPage(questionId);
  };

  // 次ページへ遷移
  const nextPage = (questionId: number) => {
    window.clearTimeout(timeId);
    questionsObj.questions[questionId - 1].ansDone = true;
    const nextPageNum = Number(questionNumber) + 1;
    if (nextPageNum === questionsObj.questionNum + 1) {
      router.push('/result');
      return;
    }
    router.push(`/question/${nextPageNum}`);
  };

  return (
    <div className='overflow-hidden relative min-h-screen bg-gray-100'>
      <div className='mt-16 max-w-screen-md mx-auto'>
        <ul className='flex items-center justify-center space-x-1 font-light'>
          <Stepper transitionState={transitionState} questionNumber={questionNumber} />
        </ul>
      </div>
      <div className='container mx-auto m-16'>
        <div className='p-4 sm:p-8 text-gray-800 bg-white shadow-xl border border-gray-100 rounded-2xl font-medium max-w-screen-sm mx-auto '>
          <div className='flex justify-center items-center h-56'>
            <p className='text-xl font-bold font-sans whitespace-pre-wrap text-center'>
              {question && question.content}
            </p>
          </div>
          <div className='flex justify-between mx-auto sm:mx-10'>
            <button
              onClick={() => onAnswer(question.id, 1)}
              className='px-2 py-1 bg-gray-400 text-xs rounded-full text-white font-semibold h-16 w-16 shadow-lg p-2 hover:bg-red-300'
            >
              まったく
              <br />
              当てはま
              <br />
              らない
            </button>
            <button
              onClick={() => onAnswer(question.id, 2)}
              className='px-2 py-1 bg-gray-400 text-xs rounded-full text-white font-semibold h-16 w-16 shadow-lg p-2 hover:bg-red-300'
            >
              あまり
              <br />
              当てはま
              <br />
              らない
            </button>
            <button
              onClick={() => onAnswer(question.id, 3)}
              className='px-2 py-1 bg-gray-400 text-xs rounded-full text-white font-semibold h-16 w-16 shadow-lg p-2 hover:bg-red-300'
            >
              いくらか
              <br />
              当て
              <br />
              はまる
            </button>
            <button
              onClick={() => onAnswer(question.id, 4)}
              className='px-2 py-1 bg-gray-400 text-xs rounded-full text-white font-semibold h-16 w-16 shadow-lg p-2 hover:bg-red-300'
            >
              かなり
              <br />
              当て
              <br />
              はまる
            </button>
            <button
              onClick={() => onAnswer(question.id, 5)}
              className='px-2 py-1 bg-gray-400 text-xs rounded-full text-white font-semibold h-16 w-16 shadow-lg p-2 hover:bg-red-300'
            >
              非常に
              <br />
              当て
              <br />
              はまる
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Question;

export const getStaticPaths = async () => {
  // 事前ビルドしたいパスを指定
  const paths = [
    { params: { questionNumber: '1' } },
    { params: { questionNumber: '2' } },
    { params: { questionNumber: '3' } },
    { params: { questionNumber: '4' } },
    { params: { questionNumber: '5' } },
    { params: { questionNumber: '6' } },
    { params: { questionNumber: '7' } },
    { params: { questionNumber: '8' } },
    { params: { questionNumber: '9' } },
    { params: { questionNumber: '10' } },
  ];
  // fallback：事前ビルドしたパス以外にアクセスしたときのパラメータ true:カスタム404Pageを表示 false:404pageを表示
  return { paths, fallback: false };
};

export async function getStaticProps() {
  return {
    props: {},
  };
}
