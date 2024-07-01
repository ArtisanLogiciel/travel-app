import { Link } from "react-router-dom"


const PageUnreachable = () => {
  return (
    <div>
      <h1>La page demandée n'existe pas</h1>
      <Link to={"/login"}>Connexion</Link>
    </div>
  )
}

export default PageUnreachable
