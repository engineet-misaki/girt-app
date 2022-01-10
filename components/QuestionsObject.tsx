export default function QuesitonsObject() {
  const questions = {
    score: 0,
    passion: 0,
    toughness: 0,
    questionNum: 10,
    questions: [
      {
        id: 1,
        scoreAtApply: 1,
        notscoreAtApply: 5,
        ansDone: false,
        content: `新しいアイデアやプロジェクトが出てくると、\nついそちらに気をとられてしまう。`,
      },
      {
        id: 2,
        scoreAtApply: 5,
        notscoreAtApply: 1,
        ansDone: false,
        content: `私は挫折をしてもめげない。\n簡単にはあきらめない。`,
      },
      {
        id: 3,
        scoreAtApply: 1,
        notscoreAtApply: 5,
        ansDone: false,
        content: `目標を設定しても、すぐ別の目標に乗り換えることが多い。`,
      },
      {
        id: 4,
        scoreAtApply: 5,
        notscoreAtApply: 1,
        ansDone: false,
        content: `私は努力家だ。`,
      },
      {
        id: 5,
        scoreAtApply: 1,
        notscoreAtApply: 5,
        ansDone: false,
        content: `達成まで何か月もかかることに、\nずっと集中して取り組むことがなかなかできない。`,
      },
      {
        id: 6,
        scoreAtApply: 5,
        notscoreAtApply: 1,
        ansDone: false,
        content: `いちど始めたことは、必ずやり遂げる。`,
      },
      {
        id: 7,
        scoreAtApply: 1,
        notscoreAtApply: 5,
        ansDone: false,
        content: `興味の対象が毎年のように変わる。`,
      },
      {
        id: 8,
        scoreAtApply: 5,
        notscoreAtApply: 1,
        ansDone: false,
        content: `私は勤勉だ。\n絶対にあきらめない`,
      },
      {
        id: 9,
        scoreAtApply: 1,
        notscoreAtApply: 5,
        ansDone: false,
        content: `アイデアやプロジェクトに夢中になっても、\nすぐに興味を失ってしまったことがある。`,
      },
      {
        id: 10,
        scoreAtApply: 5,
        notscoreAtApply: 1,
        ansDone: false,
        content: `重要な課題を克服するために、挫折を乗り越えた経験がある。`,
      },
    ],
  };
  return questions;
}
