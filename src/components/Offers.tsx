import data from "../data";
import { motion } from "framer-motion";

const Offers: React.FC = () => {

  const offerList = data.offers.map((offer) => {

    const index = data.offers.indexOf(offer);

    return (
      <div className="offers_item" key={index}>
        <picture className="offers_item_image-container">
          <source
            media="(min-width: 1000px)" srcSet={`desktop/image-${offer.image}.jpg`}
          />
          <img
            src={`mobile/image-${offer.image}.jpg`}
            alt="milk bottles and clouds on blue background"
          />
        </picture>

        <motion.div
          className="offers_item_content"
          whileInView={{ y: [100, 0], opacity: [0, 1] }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <h1 className="offers_item_content_header">
            {offer.header}
          </h1>

          <p className="offers_item_content_description">
            {offer.description}
          </p>
        </motion.div>
      </div>
    )
  })
  
  return (
    <div className="offers">
      {offerList}
    </div>
  )
}

export default Offers;