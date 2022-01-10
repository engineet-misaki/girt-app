import Image from 'next/image';
import Link from 'next/link';
import Footer from '../components/Footer';
import { useState, useContext } from 'react';
import { QuestionsState } from './_app';

const Home = ({ blogs }) => {
  const { questionsObj } = useContext(QuestionsState);

  return (
    <div className='overflow-hidden relative min-h-screen  pb-40 bg-gray-100'>
      <div className='container mx-auto mb-8 sm:my-16'>
        <div className='p-8 text-gray-800 bg-white shadow-xl border border-gray-100 rounded-2xl font-medium max-w-screen-md mx-auto'>
          <div className='text-center mb-8'>
            <p className='text-3xl'>あなたのやり抜く力のスコア</p>
            <p className='font-bold  text-8xl'>{Math.round(questionsObj.score * 10) / 100}</p>
            <p className='mt-10'>このスコアは５点満点です。</p>
            <p className='mb-4'>５点に近いほど、やり抜く力が高いということです。</p>
            <p className=''>参考値としてアメリカ人の成人のスコアが下の表です。</p>
            <p className=''>
              もしスコアが4.1ならば、
              <br />
              標本であるアメリカ人の成人の70%よりも
              <br />
              やり抜く力が高いということになります。
            </p>
            <div className='flex justify-center mt-8'>
              <img src='/img/score-example.jpg' alt='アメリカ人のグリットスコア' />
            </div>
          </div>
          <div className='flex justify-center'>
            <a
              href='https://www.amazon.co.jp/dp/4478064806'
              target={'_blank'}
              className='px-2 py-1 bg-red-400 text-lg text-white font-semibold rounded hover:bg-red-500'
            >
              やり抜く力についてもっと詳しく知る
            </a>
          </div>
          <div className='mt-8 text-center'>
            <p>また、やり抜く力は「情熱」と「粘り強さ」の２つの要素でできている。</p>
            <p>先ほどの回答から算出されたあなたの情熱と粘り強さのスコアは下記である。</p>
            <p className='text-xl mt-4'>
              <b>情熱</b> : {Math.round(questionsObj.passion * 10) / 50}
            </p>
            <p className='text-xl'>
              <b>粘り強さ</b> : {Math.round(questionsObj.toughness * 10) / 50}
            </p>
          </div>
          <div className='mt-10'>
            <p>最後に。</p>
            <p>やり抜く力は努力すれば、必ず伸びます。</p>
            <p>「自分にはどんな逆境にもめげずに、目標に向かって進み続ける根性がある」</p>
            <p>そんな明るい自身が持てるように日々努力しましょう。</p>
            <p>
              また、何か月か経ってから、このアプリでやり抜く力を計測したときに、
              <br />
              スコアが上がっているといいですね。
            </p>
          </div>
          <div className='mt-10  text-xs'>
            <p className='inline-block'>
              このアプリは、
              <a
                href='https://www.amazon.co.jp/dp/4478064806'
                target={'_blank'}
                className='text-indigo-500 hover:text-indigo-300 underline '
              >
                やり抜く力 GRIT(グリット)――人生のあらゆる成功を決める「究極の能力」を身につける』
              </a>
              という本を参考に作られています。
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
