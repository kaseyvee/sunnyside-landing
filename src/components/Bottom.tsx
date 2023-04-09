const Bottom: React.FC = () => {
  return (
    <div className="bottom">
      <picture className="bottom_image-container">
        <source
          media="(min-width: 481px)" srcSet="_desktop/image-gallery-milkbottles.jpg"
        />
        <img
          src="_mobile/image-gallery-milkbottles.jpg"
          alt="milk bottles and clouds on blue background"
        />
      </picture>
      <picture className="bottom_image-container">
        <source
          media="(min-width: 481px)" srcSet="_desktop/image-gallery-orange.jpg"
        />
        <img
          src="_mobile/image-gallery-orange.jpg"
          alt="orange slice on plates on orange background"
        />
      </picture>
      <picture className="bottom_image-container">
        <source
          media="(min-width: 481px)" srcSet="_desktop/image-gallery-cone.jpg"
        />
        <img
          src="_mobile/image-gallery-cone.jpg"
          alt="empty ice cream cone on blue background"
        />
      </picture>
      <picture className="bottom_image-container">
        <source
          media="(min-width: 481px)" srcSet="_desktop/image-gallery-sugar-cubes.jpg"
        />
        <img
          src="_mobile/image-gallery-sugar-cubes.jpg"
          alt="stacks of sugar cubes on pink background"
        />
      </picture>
    </div>
  )
}

export default Bottom;