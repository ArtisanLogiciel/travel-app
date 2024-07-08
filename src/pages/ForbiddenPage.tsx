import HeaderUnauthentifiedUser from "@/components/HeaderUnauthentifiedUser";
import { Link } from "react-router-dom";

const ForbiddenPage = () => {
  return (
    <div>
      <HeaderUnauthentifiedUser />
      <h1>Vous devez être connecté pour afficher cette page</h1>
      <Link to={"/login"}>Connexion</Link>
    </div>
  );
};

export default ForbiddenPage;
