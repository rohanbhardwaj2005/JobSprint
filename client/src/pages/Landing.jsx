import main from "../assets/images/main.svg";
import { Link } from "react-router-dom";
import { Logo } from "../components";
import styled from "styled-components";
const Landing = () => {
  return (
    <StyledWrapper>
      <nav>
        <Logo />
      </nav>
      <div className="container page">
        {/* info */}
        <div className="info">
          <h1>
            job <span>tracking</span> app
          </h1>
          <p>
            Looking for a job can be a hassle, but{" "}
            <span style={{ color: "#2cb1bc", fontWeight: "5rem" }}>
              JobSprint
            </span>{" "}
            makes it a breeze! Our easy-to-use app helps you keep track of all
            your job applications, interviews, and deadlines without breaking a
            sweat. Whether you’re just starting out or a pro in the field,{" "}
            <span style={{ color: "#2cb1bc", fontWeight: "5rem" }}>
              JobSprint
            </span>{" "}
            keeps you on top of your game. Say goodbye to job search stress and
            hello to your dream job with{" "}
            <span style={{ color: "#2cb1bc", fontWeight: "5rem" }}>
              JobSprint
            </span>{" "}
            – your go-to job hunt buddy!
          </p>
          <Link to="/register" className="btn register-link">
            Register
          </Link>
          <Link to="/login" className="btn">
            Login / Demo User
          </Link>
        </div>
        <img src={main} alt="job hunt" className="img main-img" />
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.section`
  nav {
    width: var(--fluid-width);
    max-width: var(--max-width);
    margin: 0 auto;
    height: var(--nav-height);
    display: flex;
    align-items: center;
  }
  .page {
    min-height: calc(100vh - var(--nav-height));
    display: grid;
    align-items: center;
    margin-top: -3rem;
  }
  h1 {
    font-weight: 700;
    span {
      color: var(--primary-500);
    }
    margin-bottom: 1.5rem;
  }
  p {
    line-height: 2;
    color: var(--text-secondary-color);
    margin-bottom: 1.5rem;
    max-width: 35em;
  }
  .register-link {
    margin-right: 1rem;
  }
  .main-img {
    display: none;
  }
  .btn {
    padding: 0.75rem 1rem;
  }
  @media (min-width: 992px) {
    .page {
      grid-template-columns: 1fr 400px;
      column-gap: 3rem;
    }
    .main-img {
      display: block;
    }
  }
`;

export default Landing;
