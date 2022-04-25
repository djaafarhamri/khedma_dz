import { useState } from "react";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [userName, setUserName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [role, setRole] = useState("client");

  const [error, setError] = useState("");

  return (
    <div className="h-screen flex justify-center">
      <h1>Join as a client or a worker</h1>
    </div>
  )
}

export default Register;