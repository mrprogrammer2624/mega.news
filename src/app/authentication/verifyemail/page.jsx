"use client";
import { Button } from "@/components";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const VerifyEmail = () => {
  const [token, setToken] = useState("");
  const [verify, setVerify] = useState(false);
  const [error, setError] = useState(false);

  const route = useRouter();

  const verifyUserEmail = async () => {
    try {
      let test = await axios.post("/api/users/verifyemail", { token });

      setVerify(true);
    } catch (error) {
      setError(true, error.message);
    }
  };

  useEffect(() => {
    const urlToken = window.location.href.split("=")[1];
    setToken(urlToken || "");
  }, []);

  useEffect(() => {
    if (token.length > 0) {
      verifyUserEmail();
    }
  }, [token]);

  return (
    <div>
      {token ? `${token}` : "no Token"}
      {verify && (
        <div>
          <h2>Your Email Is Verify</h2>
          <Button variant={"primary"} handleChange={() => route.push("login")}>
            Login
          </Button>
        </div>
      )}
      {error && (
        <div>
          <h2>Error</h2>
          <Button variant={"primary"} handleChange={() => route.push("login")}>
            Login
          </Button>
        </div>
      )}
    </div>
  );
};

export default VerifyEmail;
