import React from 'react'
import { Check } from 'lucide-react'
import { Link } from 'react-router-dom'

const Pricing = () => {
  const pricing = [
    {
      imgUrl: "/bg.jpg",
      title: "QUARTERLY",
      price: 4000
    },
    {
      imgUrl: "/img10.jpg",
      title: "HALF_YEARLY",
      price: 7800
    },
    {
      imgUrl: "/pricing.jpg",
      title: "YEARLY",
      price: 15000
    },
  ]
  return (
    <section className="pricing">
      <h1>FITNESS ZONE GYM PLANS</h1>
      <div className="wrapper">
        {
          pricing.map(element => {
            return (
              <div className="card" key={element.title}>
                <img src={element.imgUrl} alt={element.title} />
                <div className="title">
                  <h1>{element.title}</h1>
                  <h3>PACKAGE: Rs. {element.price}</h3>
                  <p>.</p>
                  <Link to="/">Join Now</Link>
                </div>
                


              </div>
            )
          })
        }
      </div>
    </section>
  )
}

export default Pricing