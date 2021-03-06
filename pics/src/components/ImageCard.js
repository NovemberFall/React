// import React from 'react';
// class ImageCard extends React.Component {
//     render() {
//         const { description, urls } = this.props.image;
//         return (
//             <div>
//                 <img
//                     alt={description}
//                     src={urls.regular}
//                 />
//             </div>
//         );
//     }
// }
// export default ImageCard;


































// //Accessing the DOM with Refs
// import React from 'react';
// class ImageCard extends React.Component {
//     constructor(props) {
//         super(props);
//         this.imageRef = React.createRef();
//     }

//     componentDidMount() {//组件被挂载到页面之后，自动被执行
//         console.log(this.imageRef);
//         console.log(this.imageRef.current.clientHeight);
//     }

//     render() {
//         const { description, urls } = this.props.image;
//         return (
//             <div>
//                 <img
//                     ref={this.imageRef}
//                     alt={description}
//                     src={urls.regular}
//                 />
//             </div>
//         );
//     }
// }
// export default ImageCard;































//Callbacks on Image Load
import React from 'react';
class ImageCard extends React.Component {
    constructor(props) {
        super(props);
        this.imageRef = React.createRef();
    }

    componentDidMount() {//组件被挂载到页面之后，自动被执行
        this.imageRef.current.addEventListener('load', this.setSpans);
    }

    setSpans = () => {
        console.log(this.imageRef.current.clientHeight);
    };

    render() {
        const { description, urls } = this.props.image;
        return (
            <div>
                <img
                    ref={this.imageRef}
                    alt={description}
                    src={urls.regular}
                />
            </div>
        );
    }
}
export default ImageCard;






























// //dynamic Spans
// import React from 'react';
// class ImageCard extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = { spans: 0 };
//         this.imageRef = React.createRef();
//     }

//     componentDidMount() {//组件被挂载到页面之后，自动被执行
//         this.imageRef.current.addEventListener('load', this.setSpans);
//     }

//     setSpans = () => {
//         const height = this.imageRef.current.clientHeight;
//         const spans = Math.ceil(height / 10);
//         this.setState({ spans });
//     };

//     render() {
//         const { description, urls } = this.props.image;
//         return (
//             <div style={{ gridRowEnd: `span ${this.state.spans}` }}>
//                 <img
//                     ref={this.imageRef}
//                     alt={description}
//                     src={urls.regular}
//                 />
//             </div>
//         );
//     }
// }
// export default ImageCard;