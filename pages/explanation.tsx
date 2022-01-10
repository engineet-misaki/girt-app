import Link from 'next/link';
import { useState, useContext } from 'react';
import { QuestionsState } from './_app';

const Home = ({ blogs }) => {
  const { questionsObj, delQuestionObj } = useContext(QuestionsState);

  return (
    <div className='overflow-hidden relative min-h-screen bg-gray-100'>
      <div className='container mx-auto text-center m-32'>
        <div className='p-4 sm:p-8 text-gray-800 bg-white shadow-xl border border-gray-100 rounded-2xl font-medium max-w-screen-md mx-auto'>
          <h2 className='text-lg font-bold mb-4'>注意事項</h2>
          <p className='text-left md:mx-16 leading-relaxed'>
            {`質問は全部で${questionsObj.questionNum}問です。`}
            <br />
            あまり深く考え込まず、同僚や友人や家族、 または、たいていの人と比べてどうか。
            と考えて回答してください。
            <br />
            40秒経過すると自動で次の問題に変わりますので、お気を付けください。
          </p>
          <Link href='/question/1'>
            <div className='my-8'>
              <button
                onClick={() => delQuestionObj()}
                className='px-2 py-1 bg-red-400 text-lg text-white font-semibold rounded hover:bg-red-500'
              >
                始める
              </button>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
