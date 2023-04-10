import data from "../data";

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
          <div className="action-calls_item_content_container">
            <h1 className="action-calls_item_content_container_header">
              {actionCall.header}
            </h1>

            <p className="action-calls_item_content_container_description">
              {actionCall.description}
            </p>

            <a href="" className="action-calls_item_content_container_learn">LEARN MORE</a>
          </div>
        </div>
      </div>
    )
  })

  return (
    <div className="action-calls">
      {actionCallList}
    </div>
  )
}

export default ActionCalls;