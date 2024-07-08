import HeaderAuthentifiedUser from "../components/HeaderAuthentifiedUser";

const AccountPage = () => {
  return (
    <div className="w-screen">
      <HeaderAuthentifiedUser />
      <br />
      <div className="ml-4">
        <h1 className="font-bold">Mon compte</h1>
        <p>Mon email : </p>
      </div>
    </div>
  );
};

export default AccountPage;
