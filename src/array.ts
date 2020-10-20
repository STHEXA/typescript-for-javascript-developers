export {};

let numbers: number[] = [1,2,3];

let numbers2: Array<number> = [1,2,3];
let strings2: Array<string> = ['Tokyo','Osaka','Kyoto'];

let strings: string[] = ['Typescript','Javascript','Caffeescript'];

let nijigenhairetu: number[][] = [
  [50,100],
  [150,300]
];

// ユニオン型配列
let hairetu: (string | number | boolean)[] = [1,false,'Japan'];