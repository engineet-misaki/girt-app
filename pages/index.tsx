import Link from 'next/link';

const Home = ({ blogs }) => {
  return (
    <div className='overflow-hidden relative min-h-screen bg-gray-100'>
      <div className='container mx-auto sm:my-32 text-center max-w-screen-lg'>
        <h1 className='mb-16 font-bold py-8 bg-red-800 leading-none tracking-widest text-white text-8xl'>
          GRIT
        </h1>
        <p className='text-lg'>
          <b className='text-3xl'>あなたには、やり抜く力がどれくらいあるだろうか？</b>
          <br />
          <br />
          <br />
          昨今では、やり抜く力が高い人ほど、
          <b>成果を出すことができる</b>
          という研究結果がたくさん報告されている。
          <br />
          自分がどれくらいやり抜く力があるのか、簡単な質問に答えて調べてみよう！
          <br />
          <br />
          <span className='text-xs'>
            ※
            この内容は、米国陸軍士官学校の生徒が、「やり抜く力をどれくらい持っているのか」を研究するために作られたテスト問題を参考にして作成しています。
          </span>
        </p>
        <Link href='/explanation'>
          <div className='my-8'>
            <button className='shadow-xl border-b-4 hover:border-b border-red-700 hover:border-red-900 px-5 py-2 text-2xl bg-red-600 text-white font-semibold rounded  hover:bg-red-800 hover:translate-y-1 transform transition-all '>
              自分のやり抜く力を調べる
            </button>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Home;
