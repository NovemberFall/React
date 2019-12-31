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























// //Implementing keys in Lists
// import React from 'react';

// const ImageList = (props) => {
//     const images = props.images.map(({ description, id, urls }) => {
//         return <img alt={description} key={id} src={urls.regular} />
//     });

//     return <div>{images}</div>;
// };
// export default ImageList;


























// //Grid CSS
// import React from 'react';
// import './ImageList.css';

// const ImageList = (props) => {
//     const images = props.images.map(({ description, id, urls }) => {
//         return <img alt={description} key={id} src={urls.regular} />
//     });

//     return <div className='image-list'>{images}</div>;
// };
// export default ImageList;






























//Creating an Image Card Component
import React from 'react';
import './ImageList.css';
import ImageCard from './ImageCard';

const ImageList = (props) => {
    const images = props.images.map((image) => {
        return <ImageCard key={image.id} image={image} />
    });

    return <div className='image-list'>{images}</div>;
};
export default ImageList;