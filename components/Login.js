// import { useState } from "react";
// import LoginForm from "./LoginForm";
// import Security from "./Security";

// function Login() {
//   const [showModal, setShowModal] = useState(false);

//   return (
//     <>
//       {!showModal && <LoginForm setShowModal={setShowModal} />}
//       {showModal && <Security setShowModal={setShowModal} />}
//     </>
//   );
// }

// export default Login;

import LoginForm from "./LoginForm";

function Login() {
  return (
    <>
      <LoginForm />
    </>
  );
}

export default Login;
