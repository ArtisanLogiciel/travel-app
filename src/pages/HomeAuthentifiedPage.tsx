import HeaderAuthentifiedUser from "../components/HeaderAuthentifiedUser";
import Travels from "../components/Travels";

const HomeAuthentifiedPage = () => {
  return (
    <div className="w-screen">
      <HeaderAuthentifiedUser />
      <Travels />
    </div>
  );
};

export default HomeAuthentifiedPage;
