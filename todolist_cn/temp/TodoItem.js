// import React, { Component } from 'react';
// import PropTypes from 'prop-types';

// class TodoItem extends Component {
//     constructor(props) {
//         super(props);
//         this.handleClick = this.handleClick.bind(this);
//     }
//     handleClick = () => {
//         // alert('delete');
//         // alert(this.props.index);
//         const { itemDelete, index } = this.props;
//         itemDelete(index);
//         // this.props.itemDelete(this.props.index);
//     }

//     //当一个组件要从parent接收参数，
//     //只要父组件的render() 被重新执行了，子组件的这个生命周期函数就会被执行
//     //如果这个组件第一次存在于父组件中，不会被执行
//     //如果这个组件之前已经存在于父组件中，才会被执行
//     componentWillReceiveProps = () => {
//         console.log('child componentWillReceiveProps')
//     }

//     //当这个组件即将被从页面中剔除的时候，会被执行
//     componentWillUnmount = () => {
//         console.log('child componentWillUnmount');
//     }
//     render() {
//         console.log('child render');
//         const { content, test } = this.props;
//         return (
//             <div onClick={this.handleClick}>
//                 {test}-{content}
//             </div>
//         )
//     }
// }
// TodoItem.propTypes = {
//     test: PropTypes.string.isRequired,
//     content: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
//     itemDelete: PropTypes.func,
//     index: PropTypes.number
// }
// TodoItem.defaultProps = {
//     test: 'hello world'
// }
// export default TodoItem;










//生命周期函数使用场景

import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TodoItem extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick = () => {
        const { itemDelete, index } = this.props;
        itemDelete(index);
    }

    shouldComponentUpdate = (nextProps, nextState) => {
        if (nextProps.content !== this.props.content) {
            return true;
        } else {
            return false;
        }
    }
    render() {
        console.log('child render')
        const { content } = this.props;
        return (
            <div onClick={this.handleClick}>
                {content}
            </div>
        )
    }
}
TodoItem.propTypes = {

    content: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    itemDelete: PropTypes.func,
    index: PropTypes.number
}

export default TodoItem;