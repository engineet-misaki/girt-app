import Link from 'next/link';
import { useState, useContext } from 'react';
import { QuestionsState } from './_app';

const Home = ({ blogs }) => {
  const { questionsObj, delQuestionObj } = useContext(QuestionsState);

  return (
    <div className='overflow-hidden relative min-h-screen bg-gray-100'>
      <div className='container m-32 mx-auto text-center'>
        <div className='p-4 sm:p-8 mx-auto max-w-screen-md font-medium text-gray-800 bg-white rounded-2xl border border-gray-100 shadow-xl'>
          <h2 className='mb-4 text-lg font-bold'>注意事項</h2>
          <p className='md:mx-16 leading-relaxed text-left'>
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
                className='py-1 px-2 text-lg font-semibold text-white bg-red-400 hover:bg-red-500 rounded'
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
