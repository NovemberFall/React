// import React, { Component, Fragment } from 'react';
// import './style.css';
// class App extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             show: true
//         }
//     }
//     render() {
//         return (
//             <Fragment>
//                 <div className={this.state.show ? 'show' : 'hide'}>Hello</div>
//                 <button onClick={this.handleToggle}>toggle</button>
//             </Fragment>
//         )

//     }

//     handleToggle = () => {
//         this.setState({
//             show: this.state.show ? false : true
//         })
//     }
// }
// export default App;
















// //react-transition-group 的使用 （1）

// import React, { Component, Fragment } from 'react';
// import { CSSTransition } from 'react-transition-group';
// import './style.css';
// class App extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             show: true
//         }
//     }
//     render() {
//         return (
//             <Fragment>
//                 <CSSTransition
//                     in={this.state.show}
//                     timeout={1000}
//                     classNames='fade'
//                     unmountOnExit
//                     onEntered={(el) => { el.style.color = 'blue' }}
//                     appear={true}
//                 >
//                     <div>Hello</div>
//                 </CSSTransition>
//                 <button onClick={this.handleToggle}>toggle</button>
//             </Fragment>
//         )

//     }

//     handleToggle = () => {
//         this.setState({
//             show: this.state.show ? false : true
//         })
//     }
// }
// export default App;




















//react-transition-group 的使用（2）

import React, { Component, Fragment } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import './style.css';
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: []
        }
    }
    render() {
        return (

            <Fragment>
                <TransitionGroup>
                    {
                        this.state.list.map((item, index) => {
                            return (
                                <CSSTransition
                                    timeout={1000}
                                    classNames='fade'
                                    unmountOnExit
                                    onEntered={(el) => { el.style.color = 'blue' }}
                                    appear={true}
                                    key={index}
                                >
                                    <div>{item}</div>
                                </CSSTransition>

                            )
                        })
                    }
                    <button onClick={this.handleAddItem}>toggle</button>
                </TransitionGroup>
            </Fragment>
        )

    }

    handleAddItem = () => {
        this.setState((prevState) => {
            return { list: [...prevState.list, 'item'] }
        })
    }
}
export default App;




