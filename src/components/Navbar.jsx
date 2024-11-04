import Boton from "./Boton"

const Navbar = () => {
  return (
    <div className="navbar">
        <h4>Pizzería MammaMía!</h4>
        <Boton text='Home'/>
        <Boton text='Profile'/>
        <Boton text='Logout'/>
        <Boton text='Login'/>
        <Boton text='Register'/>
        <Boton text='Total: $'/>
    </div>
  )
}

export default Navbar