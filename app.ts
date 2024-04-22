// function func() {
//   console.log('hello world');
// }

// class firstClass {
//   name: string;

//   constructor(name: string) {
//     this.name = name.toLowerCase();
//   }

//   secondClass(a: number) {
//     let num5 = a - 1;
//     let num = this.name.charAt(num5).toUpperCase();
//     let num2 = this.name.replace(this.name.charAt(num5), num);

//     if (a <= this.name.length) {
//       return num2;
//     } else if (a >= this.name.length) {
//       return this.name.toUpperCase();
//     }
//   }
// }
// // let hello = new firstClass('odinaka');
// // console.log(hello.secondClass(3));

// // export { func, firstClass };

// function timeVal() {
//   let dateVal = new Date().toLocaleTimeString();
//   console.log(dateVal);
// }
// let timeId = setInterval(timeVal, 000);
// // setTimeout(() => {
// //   clearInterval(timeId);
// //   console.log('complete');
// // }, 10000);

// console.log(timeId);

const revStr = (str: string): string => {
  let result: string = '';

  // Array Method
  let starValue = str.split('').reverse();
  return starValue.join('');
};

const revStr2 = (str: string): any => {
  // Array Method
  let result: string = '';

  for (let i of str) {
    result = i + result;
  }
  return result;
};

const revNumb = (numb: number): number => {
  // Array Method
  let result: string = '';
  let main: string = numb.toString();

  for (let i of main) {
    result = i + result;
  }
  return Math.sign(numb) * parseInt(result);
};

const capitalise = (str: string): string => {
  let result: string = '';

  result = str.charAt(0).toUpperCase().concat(str.slice(1));

  return result;
};

const capitaliseWord = (str: string): any => {
  let result: string[] = [];

  let wrd: string[] = str.split('');

  for (let i of wrd) {
    result.push(i.charAt(0).toUpperCase().concat(i.slice(1)));
  }

  return result.join('');
};

const checkForVowel = (str: string): number => {
  let vlw: string[] = ['a', 'e', 'i', 'o', 'u'];
  let counter: number = 0;
  let main: string = str.replace(' ', '').toLowerCase();
  let splitWord: string[] = main.split('');

  for (let i of splitWord) {
    if (vlw.includes(i)) {
      counter++;
    }
  }

  return counter;
};

const checkForVowel2 = (str: string): number => {
  let counter: number = 0;

  console.log(str.match(/[aeiou]/g));

  return counter;
};

const checkForVowel3 = (str: string): boolean => {
  let value: number = str.match(/[aeiou]/gi)!?.length;

  if (value === undefined) return false;

  return true;
};

console.log(checkForVowel3('CODELAB'));

const chunkData = (arr: number[], numb: number): Array<Array<number>> => {
  let result: Array<Array<number>> = [];
  let index: number = 0;
  while (index < arr.length) {
    result.push(arr.slice(index, numb + index));
    index += numb;
  }

  return result;
};

console.log(chunkData([4, 6, 7, 8, 2, 0, 3, 1], 10));

const fn2 = (numb: number): void => {
  let path: number = 2 * numb - 1;
  let mid: number = Math.floor(path / 2);
  console.log(path);
  console.log(mid);

  for (let i = 0; i < numb; i++) {
    let value: string = '';
    for (let x = 0; x < path; x++) {
      if (x > mid - i && x < mid + i) {
        value += '*';
      } else {
        value += ' ';
      }
    }
    console.log(value);
  }
};

fn2(7);
