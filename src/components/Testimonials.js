import React from 'react';

const Testimonials = props => {

  return (
    <section className="testimonials">
      <h1>The team behind ApolloDevQL</h1>
      <div className="testimonial-group">

        <div className="testimonial-card-1">
          <div className="testimonial-1-photo"></div>
          <div className="testimonial-1-message">
            <h3 className="testimonial-1-name">Steve Dang</h3>
            <p className="testimonial-1-title">Director, Data Science, FAANG</p>
            <blockquote className="testimonial-1-content">This is the best product I&apos;ve used this year.</blockquote>
          </div>
        </div>

        <div className="testimonial-card-2">
          <div className="testimonial-1-photo"></div>
          <div className="testimonial-2-message">
          <h3 className="testimonial-2-name">Matt Digel</h3>
          <p className="testimonial-2-title">VP, Product Engineering, Hot Big Startup</p>
          <blockquote className="testimonial-2-content">It has saved us so many hours! My team is way more productive and happy thanks to Landing.</blockquote>
        </div>
      </div>

      <div className="testimonial-card-3">
        <div className="testimonial-3-photo"></div>
        <div className="testimonial-3-message">
        <h3 className="testimonial-3-name">Lanre Mark</h3>
        <p className="testimonial-3-title">CTO, Cool Small Startup</p>
        <blockquote className="testimonial-3-content">We have been able to iterate faster and meet our aggressive sprint goals because of Landing.</blockquote>
      </div>
      </div>

      <div className="testimonial-card-3">
        <div className="testimonial-3-photo"></div>
        <div className="testimonial-3-message">
        <h3 className="testimonial-3-name">Rob WIse</h3>
        <p className="testimonial-3-title">CTO, Cool Small Startup</p>
        <blockquote className="testimonial-3-content">We have been able to iterate faster and meet our aggressive sprint goals because of Landing.</blockquote>
      </div>
      </div>


      </div>

    </section>
  )
};

export default Testimonials;
