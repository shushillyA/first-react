import React from 'react';
import logo from './logo.svg';
import './App.css';
function Button(props) {
  return <button onClick={props.onClick}>{props.str}</button>;
}
class App extends React.Component {
  // example 1
  // render() {
  //   let handleClick = ()=>{
  //     alert('Hello!');
  //   }
  //   let str = new Date().getTime()
  //   return <Button onClick={handleClick} str={str}/>;
  // }

  // example2
  constructor() {
    super();
    // this => app实例
    this.state = {value: '', value2: ''};
    
    // 将继承属性拉进来
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    // console.log('构造器 constructor', this)
    // console.log('原型proto', this.__proto__)
    // console.log('原型方法proto func', this.handleChange)
    // console.log('是否自有', this.hasOwnProperty('handleChange'))
  }
  // 当函数被用作事件处理函数时，它的this指向触发事件的元素
  // 所以不能调用this 为了以防万一使用严格模式
  // 使用了严格模式 this就是undefined
  // 调用f.bind(someObject)会创建一个与f具有相同函数体和作用域的函数，但是在这个新函数中，this将永久地被绑定到了bind的第一个参数，无论这个函数是如何被调用的。
  handleChange(event) {
    console.log(this) // 实例
    console.log(this.__proto__ === App.prototype)
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    console.log('submit', this.state.value)
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
      {/* <form onSubmit={this.handleSubmit.bind(this)}> */}
        <label>
          Name:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
          {/* <input type="text" value={this.state.value} onChange={this.handleChange.bind(this)} /> */}
        </label>
        <input type="submit" value="提交"/>
      </form>
    );
  }
}







//o instanceof C; // true，因为 Object.getPrototypeOf(o) === C.prototype
//o instanceof D; // false，因为 D.prototype不在o的原型链上

// 是否属于自己不是继承
// o = new Object();
// o.prop = 'exists';
// o.hasOwnProperty('prop');             // 返回 true

// Object.keys(Point.prototype)  // 得到所有可枚举的
// Object.getOwnPropertyNames(Point.prototype)  // 得到所有可枚举 不可枚举







// 学习class
let flag = 0
class Father {
  constructor(a, b) {
    this.g = ++flag
    this.d = 3123
    this.change = () => {
      // console.log('father change')
    }
  }
}
class Es6 extends Father{
  constructor (a, b) {
    super()
    // console.log('this in constructor', this)
    // this是super出来的构造函数Es6出来的实例 实例继承了Father
    let copy = this
    this.a = a
    this.b = b
    this.c = () => {
      // console.log('this in c', this)
      // console.log('this is same', copy === this)
    }
    // 加了这条就会false
    // this.printf = this.printf.bind(this)
    // console.log('方法', this.printf)
  }

  printf () {
    // this指调用者
    // console.log('是构造函数吗', this === Es6)
    // console.log('是调用者吗', this === es6)
    // console.log('是调用者吗', this === es7)
  }
}
let es6 = new Es6(1, 2)
let es7 = new Es6(1, 3)
// console.log('es6', es6)
// console.log('es7', es7)
es6.c()
es7.c()
es6.printf()
es7.printf()
// console.log('function is same?', es6.c === es7.c)
// console.log('function is same?', es6.printf === es7.printf)
// console.log('d is same?', es6.d === es7.d)
// console.log('prototype is same?', es6.prototype === es7.prototype)
// console.log('prototype is same?', es6.__proto__ === es7.__proto__)
// 实例的__proto__  === 构造函数的prototype
// console.log(Es6.prototype, es6.__proto__)










// 不通过new构造函数
function Func(p) {
  if (typeof p === 'object') {
    p.a = 1
    p.b = 2
  }
  return p
}
let a1 = {}
a1 = Func(a1)
// console.log(a1)

// return复习
// return对象 就是对象 覆盖new出来的this
function Funct() {
  this.a = 1
  this.b = 2
  return {c: 2}
}
let a = new Funct()
// console.log('a', a)
export default App;
