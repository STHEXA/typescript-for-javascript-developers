export {};

// 呼び出し元に戻らないような場合の型はnever型を使用する
function error(message: string): never {
  throw new Error(message);
}

try {
  let result = error('test');
  console.log({result});
} catch(error) {
  console.log({error});
}

// void型とnever型の違い
// void型は帰ってくる値の型がない場合
// never型はそもそも値が帰ってくることがない（errorの場合を除く）
let foo: void = undefined;
let bar: never = error('only me');