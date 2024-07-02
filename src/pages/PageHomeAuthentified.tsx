import HeaderAuthentifiedUser from "../components/HeaderAuthentifiedUser";
import Travels from "../components/Travels";

const PageHomeAuthentified = () => {
  return (
    <div
      className="w-screen"
    >
      <HeaderAuthentifiedUser />
      <Travels />
    </div>
  );
};

export default PageHomeAuthentified;
