import { useState, useEffect } from "react";
import * as api from "../../../pages/api/strains/index";
import SignIn from "./auth/SignIn";
import Dashboard from "./dashboard/Dashboard";
import decode from "jwt-decode";
import { LocalDiningOutlined } from "@material-ui/icons";

const Admin = ({ strains }) => {
  const [admin, setAdmin] = useState(null);
  const [Dash, setDash] = useState(null);

  const updateAdmin = (data) => {
    setAdmin(data);
  };

  const clear = () => {
    localStorage.removeItem("admin");
    setAdmin(null);
  };

  useEffect(() => {
    if (localStorage.getItem("admin")) {
      const adminInfo = JSON.parse(localStorage.getItem("admin"));
      setAdmin(adminInfo);
    }
  }, []);

  useEffect(() => {
    const checkAdmin = () => {
      if (admin) {
        const decodedToken = decode(admin.token);
        const remaining = decodedToken.exp * 1000 - new Date().getTime();
        if (remaining < 0) {
          clear();
        } else if (admin.info._id === decode(admin.token).id) {
          setTimeout(clear, remaining);
          return <Dashboard admin={admin} strains={strains} />;
        }
      }
    };
    setDash(checkAdmin());
  }, [admin]);

  return <>{Dash ? Dash : <SignIn manageAdmin={setAdmin} />}</>;
};

export default Admin;
