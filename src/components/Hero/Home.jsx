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

  return (
    <>
      <div className={styles.home}>
        <div className={styles.main}>
          {/* overly on image */}
          <div className={styles.overly}></div>
          {/* <div className={styles.balance}>
            <img src="/Assets/balance2.png" alt="" />
          </div> */}
          {/* Ai bot image */}
          <div className={styles.bot}>
            <img src="/Assets/bot.png" alt="" />
          </div>
          {/* ======>text */}
          <div className={styles.textPortion}>
            <h1>Welcome to our AI legal bot!</h1>
            <p>
              {" "}
              Our bot is designed to assist with any legal questions you may
              have. It is trained on a variety <br /> of legal topics and is
              able to provide concise and accurate information.
            </p>
            {/* ========> login + register button */}
            <div className={styles.buttons}>
              {/* =====>Login button */}
              <button
                data-bs-toggle="modal"
                data-bs-target="#signIn"
                className={styles.btn}
              >
                <BiLockAlt />
                Login
              </button>
              <button
                data-bs-toggle="modal"
                data-bs-target="#register"
                className={styles.btn}
              >
                <BiRegistered />
                Register
              </button>
            </div>
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
                        required
                        type={inpt.type}
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
                        required
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
                  Sign In
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}


const Login = [
  {
    type: "text",
    id: "email",
    label: "Email Address",
  },
  {
    type: "password",
    id: "password",
    label: "Password",
  },
];

const Resgister = [
  {
    type: "text",
    id: "firstName",
    label: "First Name",
  },
  {
    type: "text",
    id: "lastName",
    label: "Last Name",
  },
  {
    type: "text",
    id: "email",
    label: "Email Address",
  },
  {
    type: "password",
    id: "password",
    label: "Password",
  },
  {
    type: "password",
    id: "conformPassword",
    label: "Conform Password",
  },
];

export default Home;
