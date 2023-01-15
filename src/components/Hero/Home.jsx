import React, { useState } from "react";
import styles from "./Home.module.css";
import { BiLockAlt } from "react-icons/bi";
import { BiRegistered } from "react-icons/bi";
import SignIn from "../../Modal/SignIn/SignIn";
import clsx from "clsx";

function Home() {
  // functions
  const handleSignIn = (event) => {
    event.preventDefault();
  };
  const handleSignup = (event) => {
    event.preventDefault();
  };

  // ===========> states
  const [email, Set_Email] = useState("");
  const [password, Set_Password] = useState("");
  const [firstName, Set_First_Name] = useState("");
  const [lastName, Set_Last_Name] = useState("");
  const [conformPassword, Set_Conform_Password] = useState("");

  // ===========> login + register object
  const Login = [
    {
      type: "text",
      id: "email",
      label: "Email Address",
      state: email,
      handle: Set_Email,
    },
    {
      type: "password",
      id: "password",
      label: "Password",
      state: password,
      handle: Set_Password,
    },
  ];

  const Resgister = [
    {
      type: "text",
      id: "firstName",
      label: "First Name",
      state: firstName,
      handle: Set_First_Name,
    },
    {
      type: "text",
      id: "lastName",
      label: "Last Name",
      state: lastName,
      handle: Set_Last_Name,
    },
    {
      type: "text",
      id: "email",
      label: "Email Address",
      label: "Last Name",
      state: email,
      handle: Set_Email,
    },
    {
      type: "password",
      id: "password",
      label: "Password",
      state: password,
      handle: Set_Password,
    },
    {
      type: "password",
      id: "conformPassword",
      label: "Conform Password",
      state: conformPassword,
      handle: Set_Conform_Password,
    },
  ];

  return (
    <>
      <div className={styles.home}>
        <div className={styles.main}>
          {/* =======> left postion */}
          <div className={styles.leftPortion}>
            <h1>WELCOME TO OUR AI LEGAL BOT</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur. Ut nunc viverra viverra
              sed ornare amet integer. Id urna massa egestas ac vel sed id.
              Ipsum pulvinar hac et pellentesque pellentesque facilisis.
              Adipiscing ut eget pharetra nulla vitae enim. Sodales auctor
              libero velit a pretium laoreet.
            </p>
            {/* =======>buttons */}
            <div className={styles.buttons}>
              <button
                data-bs-toggle="modal"
                data-bs-target="#register"
                className={styles.btn}
              >
                <BiRegistered />
                Register
              </button>
              <button
                data-bs-toggle="modal"
                data-bs-target="#signIn"
                className={clsx(styles.btn, styles.btn2)}
              >
                <BiLockAlt />
                Sign In
              </button>
            </div>
          </div>
          {/* =======> right portion */}
          <div className={styles.rightPortion}>
            <img src="/Assets/bot.png" alt="seo text here" />
          </div>
        </div>
      </div>

      {/* =======> Sign in modal */}

      <div
        class="modal fade "
        id="signIn"
        tabindex="-1"
        aria-labelledby="signIn"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="signIn">
                Sign In
              </h5>
            </div>
            <form onSubmit={(e) => handleSignIn(e)} type="submit" action="">
              <div class="modal-body">
                {Login.map((inpt, index) => {
                  return (
                    <div key={index} className={styles.Input}>
                      <label htmlFor="">{inpt.label}</label>
                      <input
                        onChange={(e) => {
                          inpt.handle(e.target.value);
                        }}
                        required
                        type={inpt.type}
                        value={inpt.state}
                        name={inpt.id}
                        id={inpt.label}
                        placeholder={inpt.label}
                      />
                    </div>
                  );
                })}

                {/* =======>button */}
                <button
                  type="submit"
                  className={clsx(styles.btn, styles.signIn)}
                >
                  Sign In
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* ========> Sign up modal */}

      <div
        class="modal fade "
        id="register"
        tabindex="-1"
        aria-labelledby="register"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="register">
                Register New User
              </h5>
            </div>
            <form onSubmit={(e) => handleSignup(e)} action="">
              <div class="modal-body secModal">
                {Resgister.map((inpt, index) => {
                  return (
                    <div key={index} className={styles.Input}>
                      <label htmlFor="">{inpt.label}</label>
                      <input
                        onChange={(e) => {
                          inpt.handle(e.target.value);
                        }}
                        required
                        value={inpt.state}
                        type={inpt.type}
                        name={inpt.id}
                        id={inpt.id}
                        placeholder={inpt.label}
                      />
                    </div>
                  );
                })}

                {/* =======>button */}
                <button
                  type="submit"
                  className={clsx(styles.btn, styles.signIn)}
                >
                  Register
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      
    </>
  );
}

export default Home;
