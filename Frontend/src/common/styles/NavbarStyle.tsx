import styled from 'styled-components'

export const Wrapper = styled.div`
  margin: 0;
  position: sticky;
  top: 0;
  left: 0;
  z-index: 1000;
  width: 100%;
  height: 13vh;
  overflow: hidden;

  @media screen and (max-width: 992px) {
    .nav {
      .button-section {
        flex-direction: column;
        button {
          width: 100px;
          height: 4vh;
        }
        .login-btn {
          margin-bottom: 3%;
        }
      }
    }
    .nav-selector {
      p {
        font-size: 1.4rem;
      }
    }
    .navbar-container {
      width: 40%;
    }
  }
  @media screen and (max-width: 768px) {
    .nav-selector {
      p {
        font-size: 1.3rem;
      }
    }
    .navbar-container {
      width: 45%;
    }
  }
  @media screen and (max-width: 576px) {
    .nav {
      .button-section {
        button {
          width: 80px;
          height: 4vh;
          font-size: 100%;
        }
        .login-btn {
          margin-bottom: 3%;
        }
      }
    }
    .navbar-container {
      width: 50%;
    }
  }
`

export const Nav = styled.div`
  font-family: 'Giants-Inline';
  height: 13vh;
  transition-duration: 300ms;
  display: flex;
  align-items: center;
  justify-content: center;
  position: sticky;
  z-index: 1000;
  background-color: #ffffff;
`
export const NavTitle = styled.span`
  cursor: pointer;
  font-weight: 700;
  font-size: 2.4rem;
  letter-spacing: 0.2rem;
`
export const NavButton = styled.div`
  position: absolute;
  z-index: 999;
  right: 5%;
  display: flex;
  justify-content: space-between;
  button {
    font-family: 'SEBANG_Gothic_Bold';
    cursor: pointer;
    font-size: 120%;
    text-align: center;
    align-items: center;
    color: white;
    border: none;
    border-radius: 10px;
    width: 100px;
    height: 5vh;
  }
`
export const LoginBtn = styled.button`
  background-color: var(--color-orange);
  margin-right: 5%;
`

export const MenuBtn = styled.button`
  background-color: var(--color-navy);
`

export const MenuBox = styled.div`
  width: 40%;
  height: 100vh;
  background-color: #ecececdb;
  position: fixed;
  z-index: 800;
  right: 0;
  transition: transform 0.5s ease;
  &.nav-open {
    transform: translateY(0);
  }
  &.nav-close {
    transform: translateY(-100%);
  }
`
export const MenuList = styled.div`
  color: navy;
`
export const MenuSelect = styled.p`
  cursor: pointer;
  margin: 10% 5%;
  padding-left: 3%;
  font-size: 1.5rem;
  font-weight: 200;
  font-family: 'Noto Sans KR', sans-serif;
  &:hover {
    color: white;
    background-color: #ff7530;
  }
`

export const LoginBox = styled.div`
  width: 20%;
  height: auto;
  background-color: #ecececdb;
  position: fixed;
  z-index: 800;
  right: 0;
  transition: transform 0.5s ease;
  &.login-open {
    transform: translateY(0);
  }
  &.login-close {
    transform: translateY(-100%);
  }
`

export const Logincontent = styled.div`
  width: 70%;
  margin-top: 5%;
`

export const LoginSelect = styled.p`
  width: 90%;
  height: 30px;
  background-color: white;
  color: var(--color-dark);
  display: flex;
  align-items: center;
  margin: 2%;
  padding: 2%;
  border-radius: 10px;
  cursor: pointer;
  &:hover{
    background-color: var(--color-lightblue);
  }
`

export const LoginIcon = styled.img`
  height: 100%;
  margin-right: 3%;
`
