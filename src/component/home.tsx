import { useNavigate } from "react-router-dom";

export const Home = () => {
  const nevigate = useNavigate();

  const handleSignIn = () => {
    nevigate("/signIn");
  };

  const handleLogin = () => {
    nevigate("/login");
  };

  return (
    <div className="homepage">
      <div className="container"></div>
      <div className="innercontainer">
        <div className="welcomeContainer">
          <div>
            <p> WELCOME</p>
            <p style={{ fontSize: "20px",paddingTop: "20px", marginBottom: "15px"}}>
              The Ultimate App for <br /> Long-Distance Relationships
            </p>
          </div>
        </div>
        <div className="startBtn" style={{ textAlign : "center"}}>
          <button className="getStartedBtn" onClick={handleSignIn}> Get Started </button>
        </div>
        <div className="btmlogin" onClick={handleLogin}>
          <p>Already have a account ? <span style={{ color : '#E8305E'}}>Log In</span></p>
        </div>
      </div>
    </div>
  );
};
