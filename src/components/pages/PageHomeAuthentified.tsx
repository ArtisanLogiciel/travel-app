import HeaderAuthentifiedUser from "../HeaderAuthentifiedUser";
import Travels from "../Travels";



const PageHomeAuthentified = () => {
  return (
    <div className="w-screen">
      <HeaderAuthentifiedUser />
      <Travels />
    </div>
  );
};

export default PageHomeAuthentified;
