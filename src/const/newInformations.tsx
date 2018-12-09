export type InformationProps = {
  type: "info" | "press";
  date: string;
  texts: string[];
  href: string;
};

export const newInformations: InformationProps[] = [
  {
    type: "press",
    date: "2018年12月16日",
    texts: [
      "このページはhiraike32がdwango.co.jpを個人的にリメイクしたものです。",
      "Qiita「dwango.co.jpをReact/TypeScript/Storybookでリメイクしてみた。」"
    ],
    href: "https://qiita.com/hiraike32/items/c6317aef2805342fc838"
  },
  {
    type: "info",
    date: "2018年12月10日",
    texts: ["各コンポーネントをまとめたstorybookはこちらから"],
    href: "https://hiraike32.github.io/dwango-remake-storybook/"
  },
  {
    type: "info",
    date: "2018年12月09日",
    texts: ["このページのソースコードはこちらから"],
    href: "https://github.com/hiraike32/dwango-remake"
  }
];
