import React, { useEffect } from "react";
import { Container } from "./styles";

import { BsHouseDoor, BsPerson, BsListOl, BsSearch } from "react-icons/bs";
import { RiAddFill } from "react-icons/ri";
import { NavLink, useNavigate } from "react-router-dom";
import { personalInfo } from "../../utils/auth";

export const BottomMenu = () => {
  const navigate = useNavigate();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(async () => {
    if ((await personalInfo()) === false) {
      navigate("/personal");
    }
  }, [navigate]);

  return (
    <>
      <Container>
        <div className="border"></div>
        <NavLink to="/feed">
          <BsHouseDoor />
        </NavLink>

        <NavLink to="/me">
          <BsPerson />
        </NavLink>

        <div className="addIcon--container">
          <NavLink to="/newGoal" className="addIcon">
            <RiAddFill />
          </NavLink>
        </div>

        <NavLink to="#">
          <BsListOl />
        </NavLink>

        <NavLink to="/explore/friends">
          <BsSearch />
        </NavLink>
      </Container>
    </>
  );
};
