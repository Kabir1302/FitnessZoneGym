import React from 'react'

const WorkoutSessions = () => {
  return (
    <section className='workout_session'>
      <div className="wrapper">
        <h1>JOIN POWERZONE GYM TODAY</h1>
        <p>Take Care of your body. It's only place you have to live.</p>
        <img src="/img12.png" alt="" />
      </div>
      <div className="wrapper">
        {/* <h1>Join Power Zone</h1>
        <p>Your Body & Your Fitness Requirements Are Unique. Your Personal Training Should Reflect That. Join Power Zone Today and Get Extreme Benefits.</p> */}
        <div className="bootcamps">
          <div>
            <h4>SUPPORT</h4>
            <p>
              Every member gets a free, personalized started plan when they join. Our friendly staff is trained to help you along your fitness journey.
            </p>
          </div>
          <div>
            <h4>Top Equipments</h4>
            <p>
              Enjoy cardio, strength and weight training with our top equipments. We have modern and advance equipment facilities.
            </p>
          </div>
          <div>
            <h4>Training</h4>
            <p>
              Get fit fast with Power Zone personal trainers. Join now and make 'Impossible' -- '"I" m possible !'.
            </p>
          </div>
          <div>
            <h4>Convenience</h4>
            <p>
              With 24/7 access you're joing most convenient gym. You can workout anytime you want.
            </p>
          </div>
          <div>
            <h4>Community</h4>
            <p>
            You're not just joining a gym. You're joining a supportive community of like-minded people who are here to give you the encouragement you need.
            </p>
          </div>
          
        </div>
      </div>
    </section>
  )
}

export default WorkoutSessions