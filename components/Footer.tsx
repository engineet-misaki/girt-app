import Link from 'next/link';

export default function Footer() {
  return (
    <footer className='overflow-hidden absolute bottom-0 w-full bg-white'>
      <div className='container my-6 mx-auto'>
        <p className='text-2xl font-bold text-center'>GRIT やり抜く力を調べるアプリ</p>
        <div className='mt-3 text-xs text-center'>
          <Link href='/'>
            <a className='block mt-3 text-gray-500 underline'>TOPへ</a>
          </Link>
          <a
            href='https://twitter.com/FeWA41suVDl435I'
            target='_blank'
            className='block mt-3 text-gray-500 underline'
            rel='noreferrer'
          >
            Twitter : Misaki@未経験新卒エンジニア
          </a>
          <p className='mt-3 text-gray-500'>連絡先 : damymisaki@gmail.com</p>
        </div>
      </div>
    </footer>
  );
}
