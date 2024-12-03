import { useState } from "react"

const ImageGallery = () => {
    const imgUrls = [
        "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/47/0597563/1.jpg?5767",
        "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/47/0597563/2.jpg?5756",
        "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/47/0597563/3.jpg?5767",
        "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/47/0597563/6.jpg?5756",
        "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/47/0597563/5.jpg?5756",

    ];

    //state
    const [imgUrl, setImgUrl] = useState(imgUrls[0]);

    //event handler
    const handleImageChanger = (urlIndex) => {
        setImgUrl(imgUrls[urlIndex]);
    }

    const style= {
       style: {
        display: 'flex',
        width: '100px',
        height: '100px'
       },
       
       big: {
         width: '300px',
        height: '300px'
       }
       


    }
  return (
    <div>
        <img src={imgUrl} alt=""  style={style.big}/>

        <div style={style.style}> 
           {imgUrls.map((url, index) => (
            <img key={index} src={url} alt="" onClick={() => handleImageChanger(index)} />
           )
           )}
        </div>
    </div>
  )
}

export default ImageGallery