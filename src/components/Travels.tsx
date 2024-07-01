import fakeVoyage1 from "@/assets/fakeTravel/fake1.jpg";
import fakeVoyage2 from "@/assets/fakeTravel/fake2.jpg";
import fakeVoyage3 from "@/assets/fakeTravel/fake3.jpg";
import fakeVoyage4 from "@/assets/fakeTravel/fake4.jpg";

const Travels = () => {
  const imageSize = "size-32 cover ";
  return (
    <div className="flex flex-col w-11/12 rounded-sm px-2 py-3 mx-auto mt-4 shadow-md shadow-blue-500/50 bg-[#1E293B]">
      <div className="grid justify-center grid-cols-2 mt-2 sm:grid-cols-3 md:grid-cols-4 gap-x-2 gap-y-4">
        <img src={fakeVoyage1} className={`${imageSize}`} />
        <img src={fakeVoyage2} className={`${imageSize}`} />
        <img src={fakeVoyage3} className={`${imageSize}`} />
        <img src={fakeVoyage4} className={`${imageSize}`} />
      </div>
      <div className="mt-3 space-y-2">
        <h1 className="text-3xl">Iles Canaries</h1>
        <p className="w-2/3 truncate ">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui ipsam
          vero nesciunt suscipit cum, excepturi veniam ad non recusandae quos,
          aspernatur consequatur et nemo modi a explicabo facilis animi laborum!
        </p>
      </div>
    </div>
  );
};

export default Travels;
