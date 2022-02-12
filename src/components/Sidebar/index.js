import React from "react";
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarBtnWrap,
  SidebarLink,
  SidebarRoute,
  SidebarWraper,
  SidebarMenu,
} from "./SidebarElements";

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWraper>
        <SidebarMenu>
          <SidebarLink to="utangulizi" onClick={toggle}>
            Utangulizi
          </SidebarLink>
          <SidebarLink to="aina" onClick={toggle}>
            Aina
          </SidebarLink>
          <SidebarLink to="maandalizi" onClick={toggle}>
            Maandalizi
          </SidebarLink>
          <SidebarLink to="matunzo" onClick={toggle}>
            Matunzo
          </SidebarLink>
          <SidebarLink to="kuhusu sisi" onClick={toggle}>
            Kuhusu sisi
          </SidebarLink>
        </SidebarMenu>
        {/* <SidebarBtnWrap>
          <SidebarRoute to="/signin" onClick={toggle}>
            Sign In
          </SidebarRoute>
        </SidebarBtnWrap> */}
      </SidebarWraper>
    </SidebarContainer>
  );
};

export default Sidebar;
