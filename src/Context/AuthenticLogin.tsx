import { AuthToken } from "./AuthenticToken";
import { useContext, useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import { ReactNode } from "react";

type TokeObrigatorioProps = {
  children: ReactNode;
};
export const AuthenticLogin = ({ children }: TokeObrigatorioProps) => {
  const { token } = useContext(AuthToken);
  const [loading, setLoading] = useState(true);
  const [authentication, setAuthentication] = useState(false);

  useEffect(() => {
    const auttoken = localStorage.getItem('AUTH_TOKEN');
    if (auttoken) {
      setAuthentication(true);
    }
    setLoading(false);
  }, [token]);

  if (loading) {
    return null;
  }
  if (!authentication) {
    return <Navigate to={"/"} />;
  }
  return children;
};

