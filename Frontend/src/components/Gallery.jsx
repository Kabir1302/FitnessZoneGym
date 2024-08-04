import React from 'react'
import img1 from "/img16.gif";
import img2 from "/img11.jpg";
import img3 from "/img1.jpg";
import img4 from "/img13.png";
import img5 from "/img15.gif";
import img6 from "/img8.jpg";
import img7 from "/img5.jpg";
import img8 from "/image14.jpeg"

const Gallery = () => {
  const gallery = [
    img1,
    img2,
    img3,
    img4,
    img5,
    img6,
    img7,
    img8
  ]
  return (
    <section className='gallery'>
      <h1>No shortcuts, just hard work & determination.</h1>
      <div className="images">
        <div>
          {gallery.slice(0, 3).map((element, index) => (
            <img key={index} src={element} alt="GYMimage" />
          ))}
        </div>
        <div>
          {gallery.slice(3,6).map((element, index) => (
            <img key={index} src={element} alt="GYMimage" />
          ))}
        </div>
        <div>
          {gallery.slice(6,9).map((element, index) => (
            <img key={index} src={element} alt="GYMimage" />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Gallery