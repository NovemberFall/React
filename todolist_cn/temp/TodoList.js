// //import React from 'react';
// import React, { Component, Fragment } from 'react';
// import './style.css';
// import TodoItem from './TodoItem';

// class TodoList extends Component {

//     constructor(props) {
//         super(props);
//         //when the component's state or props are changing, render() function will reset
//         this.state = {
//             inputValue: '',
//             list: []
//             // list: ['Html', 'Css', 'javascript', 'bootstrap', 'jQuery']
//         }
//     }
//     handleInputChange = () => {
//         // console.log(e.target);
//         this.setState({
//             inputValue: this.input.value
//         })

//     }
//     handleBtnClick = () => {
//         this.setState({
//             list: [...this.state.list, this.state.inputValue],
//             inputValue: ''
//         })
//     }
//     handleItemDelete = (index) => {
//         const templist = [...this.state.list];
//         templist.splice(index, 1);
//         this.setState({
//             list: templist
//         })
//         console.log(index);
//     }
//     getTodoItem = () => {
//         return (
//             this.state.list.map((item, index) => {
//                 return (
//                     <TodoItem
//                         key={index}
//                         content={item}
//                         index={index}
//                         // itemDelete={this.handleItemDelete.bind(this)}
//                         itemDelete={this.handleItemDelete}
//                     />
//                 )
//             })
//         )
//     }

//     // //在组件即将被挂载到页面的时刻自动执行（还没挂载）
//     componentWillMount = () => {
//         console.log('componentWillMount');
//     }

//     //组件被挂载到页面之后，自动被执行
//     componentDidMount = () => {
//         console.log('componentDidMount')
//     }

//     //组件被更新之前，会自动被执行
//     shouldComponentUpdate = () => {
//         console.log('shouldComponentUpdate')
//         return true;
//     }

//     //组件被更新之前，它会自动执行，但是他在shouldComponentUpdate之后被执行，
//     //如果shouldComponentUpdate 返回true， 它才被执行
//     //如果return false， 这个函数就不会被执行
//     componentWillUpdate = () => {
//         console.log('componentWillUpdate')
//     }

//     //组件更新完成之后，它会被执行
//     componentDidUpdate = () => {
//         console.log('componentDidUpdate');
//     }


//     render() {
//         console.log('render');
//         return (
//             <Fragment>
//                 <div>
//                     <label htmlFor="insertArea">输入内容: </label>
//                     <input
//                         id="insertArea"
//                         className='input'
//                         value={this.state.inputValue}
//                         // onChange={this.handleInputChange.bind(this)}
//                         onChange={this.handleInputChange}
//                         ref={(tempInput) => { this.input = tempInput }}
//                     />
//                     <button onClick={this.handleBtnClick}>submit</button>
//                 </div>
//                 <ul>
//                     {this.getTodoItem()}
//                 </ul>
//             </Fragment>
//         )
//     }
// }
// export default TodoList;









//生命周期使用场景

//import React from 'react';
import React, { Component, Fragment } from 'react';
import './style.css';
import TodoItem from './TodoItem';
import axios from 'axios';

class TodoList extends Component {

    constructor(props) {
        super(props);
        //when the component's state or props are changing, render() function will reset
        this.state = {
            inputValue: '',
            list: []
        }
    }
    handleInputChange = () => {
        // console.log(e.target);
        this.setState({
            inputValue: this.input.value
        })

    }
    handleBtnClick = () => {
        this.setState({
            list: [...this.state.list, this.state.inputValue],
            inputValue: ''
        })
    }
    handleItemDelete = (index) => {
        const templist = [...this.state.list];
        templist.splice(index, 1);
        this.setState({
            list: templist
        })
        console.log(index);
    }
    getTodoItem = () => {
        return (
            this.state.list.map((item, index) => {
                return (
                    <TodoItem
                        key={index}
                        content={item}
                        index={index}
                        // itemDelete={this.handleItemDelete.bind(this)}
                        itemDelete={this.handleItemDelete}
                    />
                )
            })
        )
    }

    componentDidMount = () => {
        axios.get('/api/todolist')
            .then(() => { alert('success') })
            .catch(() => { alert('error') })
    }

    render() {
        return (
            <Fragment>
                <div>
                    <label htmlFor="insertArea">输入内容: </label>
                    <input
                        id="insertArea"
                        className='input'
                        value={this.state.inputValue}
                        // onChange={this.handleInputChange.bind(this)}
                        onChange={this.handleInputChange}
                        ref={(tempInput) => { this.input = tempInput }}
                    />
                    <button onClick={this.handleBtnClick}>submit</button>
                </div>
                <ul>
                    {this.getTodoItem()}
                </ul>
            </Fragment>
        )
    }
}
export default TodoList;