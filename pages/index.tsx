import Link from 'next/link';

const Home = ({ blogs }) => {
  return (
    <div className='overflow-hidden relative min-h-screen bg-gray-100'>
      <div className='container sm:my-32 mx-auto max-w-screen-lg text-center'>
        <h1 className='py-8 mb-16 text-8xl font-bold tracking-widest leading-none text-white bg-red-800'>
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
          <span className='inline-block text-xs'>
            ※
            この内容は、米国陸軍士官学校の生徒が、「やり抜く力をどれくらい持っているのか」を研究するために作られたテスト問題を参考にして作成しています。
          </span>
        </p>
        <Link href='/explanation'>
          <div className='my-8'>
            <button className='py-2 px-5 text-2xl font-semibold text-white bg-red-600 hover:bg-red-800 rounded border-b-4 hover:border-b border-red-700 hover:border-red-900 shadow-xl transition-all transform hover:translate-y-1'>
              自分のやり抜く力を調べる
            </button>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Home;
