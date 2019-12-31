// import React from 'react';

// const ImageList = (props) => {
//     console.log(props.images)
//     return <div>ImageList</div>;
// };
// export default ImageList;























// //Rendering Lists of Components
// import React from 'react';

// const ImageList = (props) => {
//     const images = props.images.map((image) => {
//         return <img src={image.urls.regular} />
//     });

//     return <div>{images}</div>;
// };
// export default ImageList;























//Implementing keys in Lists
import React from 'react';

const ImageList = (props) => {
    const images = props.images.map(({ description, id, urls }) => {
        return <img alt={description} key={id} src={urls.regular} />
    });

    return <div>{images}</div>;
};
export default ImageList;