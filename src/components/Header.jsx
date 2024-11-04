
const Header = ({titulo, descripcion}) => {
  return (
    <div className="header-background">
        <h1>{titulo}</h1>
        <h3>{descripcion}</h3>
    </div>
  )
}

export default Header