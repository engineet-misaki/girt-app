import '../styles/globals.css';
import 'tailwindcss/tailwind.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import React, { useState } from 'react';
import QuesitonsObject from '../components/QuestionsObject';

export const QuestionsState = React.createContext<any>({});

function MyApp({ Component, pageProps }: AppProps) {
  const questions = QuesitonsObject();
  const [questionsObj, setQuestionsObj] = useState({ ...questions });
  const delQuestionObj = () => {
    setQuestionsObj({ ...questions });
  };
  const value = { questionsObj, setQuestionsObj, delQuestionObj };
  return (
    <>
      <Head>
        <meta name='viewport' content='width=device-width,initial-scale=1' />
        <title>GRIT SCORE</title>
      </Head>
      <QuestionsState.Provider value={value}>
        <Component {...pageProps} />
      </QuestionsState.Provider>
    </>
  );
}

export default MyApp;
