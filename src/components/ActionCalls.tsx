import data from "../data";
import { motion } from "framer-motion";

const ActionCalls: React.FC = () => {
  
  const actionCallList = data.actions.map((actionCall) => {

    const index = data.actions.indexOf(actionCall);

    return (
      <div className="action-calls_item" key={index}>
        <picture className="action-calls_item_image-container">
          <source
            media="(min-width: 481px)" srcSet={`desktop/image-${actionCall.image}.jpg`}
          />
          <img
            src={`mobile/image-${actionCall.image}.jpg`}
            alt="milk bottles and clouds on blue background"
          />
        </picture>

        <div className="action-calls_item_content">
          <motion.div
            className="action-calls_item_content_container"
            viewport={{ once: true }}
            whileInView={{ y: [100, 0], opacity: [0, 1] }}
            transition={{ duration: 1 }}
          >
            <h1 className="action-calls_item_content_container_header">
              {actionCall.header}
            </h1>

            <p className="action-calls_item_content_container_description">
              {actionCall.description}
            </p>

            <a href="" className="action-calls_item_content_container_learn">LEARN MORE</a>
          </motion.div>
        </div>
      </div>
    )
  })

  return (
    <div className="action-calls" id="action-calls">
      {actionCallList}
    </div>
  )
}

export default ActionCalls;