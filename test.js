// const names = ['husien', 'adel'];
//
// console.log(names);
//
// names.push('arnnos');
// console.log(names);
// names.unshift('ahmed');
// console.log(names);
//
// names.pop();
// console.log(names);
// names.shift();
// console.log(names);
//
// const newNames = names.slice();
// console.log(newNames);
//
// const spredNames = [...names, ...names];
// console.log(spredNames);
//
// console.log(Array.isArray(names));
//
// // let desctructing
//
// let [name = 'husien', age, job] = [, 38, 'UI developer'];
// console.log(name, age, job);
//
// let [data, , systems] = ['windows', 'jobs', 'max'];
// console.log(data, systems);

// let mydata = ['husien', 'adel', ['amira', 'moh', 'maher']];
//
// console.log(mydata[2][0]);

// let mydata = [, , , , [, , 'husien']];

// console.log(mydata[4][2]);
//
// let [name, age, ...data] = ['husien', 38, 'Ui developer', 'ksa'];
// console.log(data);
//
// // ! there is two kinds spread and rest
// // rest on left and spread in right all is ...
//
// let [name, age, sex, ...rest] = [
// 	'husien',
// 	38,
// 	'malee',
// 	'Ui deve',
// 	'likes cokkes',
// ];
//
// let data = ['husien', 'adel'];
// let mynewData = [...data, 'arnoos'];
// console.log(mynewData);
//
// //swaping data in desc
//
// let [first, second] = ['husien', 'adel'];
// [second, first] = ['husien', 'adel'];
// console.log(first, second);
//
// let arr1 = ['husien'];
// let arr2 = ['adel'];
//
// let arrM = [...arr1, ...arr2];
// console.log(arrM);
//
// const myArry = [
// 	1,
// 	2,
// 	'husien',
// 	false,
// 	{ name: 'husien adel', job: 'UI developer' },
// ];
//
// console.log(myArry[4].name);
// console.log(myArry.length);
//
// const data = new Array('data1', 'data2', 'data3', 'data4');
// console.log(data);
//
// const arr = new Array(5, 10, 88);
// console.log(arr.length);

// const mydata = new Array(2).fill(2);
// console.log(mydata.length);
// const salad = ['🍅', '🍄', '🥦', '🥒', '🌽', '🥕', '🥑'];
//
// salad.forEach((item, index) => console.log(index, item));
//
// let mydata = ['husien', 'adel'];
// let mydata2 = [...mydata, ...mydata];
// console.log(mydata2);
//
// const newData = mydata2.slice();
// console.log(newData);
//
// Array.isArray([1, 4, 5]);

// console.log(mydata);
// mydata.push('arnnos');
// console.log(mydata);
//
// mydata.unshift('ahmed');
// console.log(mydata);
// mydata.pop();
// console.log(mydata);
// mydata.shift();
// console.log(mydata);

// let [name, age] = ['husien', 38];
//
// let data = ([name = 'husien', age, job] = ['ahmed', 35, 'UI']);
// console.log(name, age, job);

// let [name, age, , location] = ['husien', 35, 'test', 'ksa'];
// console.log(age);
//
// let myarra = [
// 	'husien',
// 	'adel',
// 	{ job: 'ui', loc: 'ksa', interestes: ['reading', 'vlog', 'blog'] },
// ];
//
// console.log(myarra[2].interestes[0]);
//
// let [, , , , , [, , name]] = [1, 2, 3, 4, 5, [1, 2, 'husien']];
// console.log(name);

// rest and spread
//
// let [name, age, loc, ...rest] = [
// 	'husie',
// 	35,
// 	'ksa',
// 	'ui developer',
// 	'reading',
// 	'writing',
// ];
//
// let newData = ['husien', 'web', 'ui'];
// let newData2 = [...newData, ...newData, ...newData];
// console.log(newData2);
//
// const emotion = ['🙂', '😔'];
// const veggies = ['🥦', '🥒', '🌽', '🥕'];
//
// const newveg = [...emotion, ...veggies];
//
// console.log(newveg);
//
// const first = [1, 2, 3];
// const second = [4, 5, 6];
//
// const merge = first.concat(second);
// console.log(merge.length);
//
// const emotions = ['🙂', '😍', '🙄', '😟'];
// const joined = emotion.join('<|>');
// console.log(joined);
//
// const colors = ['red', 'blue', 'green'];
// // console.log(colors);
//
// colors.fill('pink', 0, 3);
// console.log(colors);
//
// const names = ['tom', 'alex', 'bob', 'john'];
// console.log(names.includes('bob'));
//
// console.log(names.indexOf('johnz'));
// //indexof & lastIndexof
//
// console.log(names.reverse());
//
// const myInfo = ['husien', 'adel', 'arnoos', 'ibrahim'];
//
// console.log(myInfo.sort());
//
// const myNo = [1, 44, 55, 9, 6, 4];
//
// console.log(
// 	myNo.sort((a, b) => {
// 		return b - a;
// 	})
// );

// const names = ['tom', 'alex', 'bob'];
// names.splice(2, 1, 'arnnos');
// console.log(names);
//
// console.table(Array.of(2, false, 'husien'));
//
// let students = [
// 	{
// 		id: 001,
// 		f_name: 'Alex',
// 		l_name: 'B',
// 		gender: 'M',
// 		married: false,
// 		age: 22,
// 		paid: 1250,
// 		courses: ['JavaScript', 'React'],
// 	},
// 	{
// 		id: 002,
// 		f_name: 'Ibrahim',
// 		l_name: 'M',
// 		gender: 'M',
// 		married: true,
// 		age: 32,
// 		paid: 150,
// 		courses: ['JavaScript', 'PWA'],
// 	},
// 	{
// 		id: 003,
// 		f_name: 'Rubi',
// 		l_name: 'S',
// 		gender: 'F',
// 		married: false,
// 		age: 27,
// 		paid: 2350,
// 		courses: ['Blogging', 'React', 'UX'],
// 	},
// 	{
// 		id: 004,
// 		f_name: 'Zack',
// 		l_name: 'F',
// 		gender: 'M',
// 		married: true,
// 		age: 36,
// 		paid: 250,
// 		courses: ['Git', 'React', 'Branding', 'gfxc'],
// 	},
// ];

// let fstduents = students.filter((ele, index) => {
// 	return ele.gender === 'F';
// });
// console.dir(fstduents);
//
// let fStduenets = students.map((ele, index) => {
// 	return { fullname_is: ele.f_name + ' ' + ele.l_name };
// });
//
// console.table(fStduenets);
//
// letTotalPaid = students.reduce((acc, curr) => {
// 	acc += curr.paid;
// 	return acc;
// }, 0);
// console.table(letTotalPaid);
//
// let isThereunder = students.some((stduent) => {
// 	return stduent.age <= 30;
// });
//
// console.log(isThereunder);
//
// const stduentUnder = students.find((stduent) => {
// 	return stduent.age > 30;
// });
//
// console.log(stduentUnder);
//
// let atLeqastCourses = students.every((stduent) => {
// 	return stduent.courses.length >= 3;
// });
//
// console.log(atLeqastCourses);

const profile = {
	name: 'Jane Doe',
	favoriteGame: 'Stardew Valley',
	subscriber: false,
};

console.log(profile.favoriteGame);

let myJson = [
	{
		name: 'Jane Doe',
		'favorite-game': 'Stardew Valley',
		subscriber: false,
	},
	{
		name: 'John Doe',
		'favorite-game': 'Dragon Quest XI',
		subscriber: true,
	},
];

const mjson = JSON.stringify(myJson);
console.log(mjson);
