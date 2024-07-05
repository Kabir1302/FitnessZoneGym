import React from 'react'

const Gallery = () => {
  const gallery = [
    "/img16.gif",
    "/img11.jpg",
    "/img1.jpg",
    "/img13.png",
    "/img15.gif",
    "/img8.jpg",
    "/img5.jpg",
    "/image14.jpeg"
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