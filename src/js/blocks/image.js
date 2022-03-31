import '../../stylesheets/blocks/image.scss'

export const Image = ({ image }) => {
  return (
      <div className="imageWrapper">
          <img src={image || 'https://via.placeholder.com/200x200'} alt="" className="imageWrapper__img" />
      </div>
  )
}