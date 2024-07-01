import { Link } from "react-router-dom";

const PageForbidden = () => {
  return (
    <div>
      <h1>Vous devez être connecté pour afficher cette page</h1>
      <Link to={"/login"}>Connexion</Link>
    </div>
  );
};

export default PageForbidden;
