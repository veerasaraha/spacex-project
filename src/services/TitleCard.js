const TitleCard = ({ title, className }) => {
  return (
    <div className={`${className}-title`}>
      <h1>{title}</h1>
    </div>
  )
}

export default TitleCard
