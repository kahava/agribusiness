import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";
import { Link as LinkS } from "react-scroll";
import { FaTimes } from "react-icons/fa";

export const SidebarContainer = styled.aside`
  aligin-self: right;
  position: fixed;
  width: 100%;
  height: 80%;
  z-index: 999;
  background: #55552b;
  border-radius: 10px;
  display: grid;
  align-items: center;
  left: 0;
  transition: 0.3s easy-in-out;
  opacity: ${({ isOpen }) => (isOpen ? "100%" : "0")};
  top: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
`;

export const CloseIcon = styled(FaTimes)`
  color: #fff;
`;

export const Icon = styled.div`
  position: absolute;
  top: 1.2rem;
  right: 1.5rem;
  background: transparent;
  font-size: 2rem;
  cursor: pointer;
  outline: none;
`;

export const SidebarWraper = styled.div`
  color: #fff;
`;

export const SidebarMenu = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(6, 80px);
  text-align: center;

  @media screen and (max-width: 480px) {
    grid-template-rows: repeat(6, 60px);
  }
`;
export const SidebarLink = styled(LinkS)`
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  font-size: 1.5rem;
  line-style: none;
  tansition: 0.2s ease-in-out;
  color: #fff;
  cursor: pointer;
  &:hover {
    color: #01b071;
  }
`;
export const SidebarBtnWrap = styled.div`
  display: flex;
  justify-content: center;
`;
export const SidebarRoute = styled(LinkR)`
  space-between: 20px;
  border-radius: 50px;
  padding: 16px 64px;
  background: #01bf71;
  color: #010606;
  outline: none;
  white-space: nowrap;
  font-size: 16px;
  border: none;
  transition: all 0.2s ease-in-out;
  cursor: pointer;
  text-decoration: none;
  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #010606;
  }
`;
