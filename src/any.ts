import axios from 'axios';
export {};

let url: string = 'https://udemy-utils.herokuapp.com/api/v1/articles?token=token123';

axios.get(url).then(function (response) {
  // interfaceを設定することでobject型の中をより正確に指定している。
  interface Article {
    id: number;
    title: string;
    description: string;
  }
  let data: Article[]; 
  data = response.data;
  console.log(data);
})
