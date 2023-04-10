import data from "../data";
import { motion } from "framer-motion";

const Testimonials: React.FC = () => {

  const testimonialsList = data.testimonials.map((testimonial, i) => {

    const index = data.testimonials.indexOf(testimonial);

    return (
      <motion.div
        className="testimonials_container_item"
        key={index}
        viewport={{ once: true }}
        whileInView={{ y: [100, 0], opacity: [0, 1] }}
        transition={{ duration: 1, delay: i * 0.3}}
      >
        <img
          className="testimonials_container_item_image"
          src={testimonial.image}
          alt={`headshot of ${testimonial.name}`}
        />

        <p className="testimonials_container_item_testimony">
          {testimonial.testimony}
        </p>

        <div className="testimonials_container_item_person">
          <h2 className="testimonials_container_item_person_name">
            {testimonial.name}
          </h2>

          <h3 className="testimonials_container_item_person_title">
            {testimonial.title}
          </h3>
        </div>
      </motion.div>
    )
  })

  return (
    <div className="testimonials">
      <h1 className="testimonials_header">
        CLIENT TESTIMONIALS
      </h1>
      <div
        className="testimonials_container"
      >
        {testimonialsList}
      </div>
    </div>
  )
}

export default Testimonials;