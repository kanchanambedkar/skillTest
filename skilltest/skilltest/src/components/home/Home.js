import React, { useEffect, useState } from "react";
import Accordion from "react-bootstrap/Accordion";
import Form from "react-bootstrap/Form";
import axios from "axios";
import "./Home.css";

const Home = () => {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    const getdata = async () => {
      const data = await axios.get("http://localhost:3000/get-json");
      setUserData(data?.data?.data);
    };
    getdata();
  }, []);

  console.log(userData, "--userData");

  return (
    <div className="main-container">
      <Accordion>
        <Accordion.Item eventKey="0" className="border-0">
          <Accordion.Header>SPACE DATA</Accordion.Header>
          <Accordion.Body>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1" className="border-0">
          <Accordion.Header>
            <svg
              width="17"
              height="19"
              viewBox="0 0 17 19"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.93344 2.197C7.03055 1.65778 6.80055 0.804224 7.48544 0.592113C8.201 0.492447 8.96 0.43878 9.66278 0.650891C10.1841 0.975447 9.96689 1.68589 10.0666 2.197C11.9423 2.611 13.7108 3.58467 14.9426 5.07711C16.9998 7.45378 17.5109 11.0188 16.2152 13.881C14.7458 17.3744 10.7361 19.5364 7.01011 18.7953C3.01067 18.1488 -0.137779 14.2924 0.0768881 10.2368C0.115221 6.37278 3.16144 2.90745 6.93344 2.197ZM7.07144 3.75078C3.86422 4.36156 1.40578 7.50745 1.61022 10.7709C1.65878 14.2669 4.75355 17.354 8.24956 17.3872C11.5616 17.584 14.7407 15.0387 15.2773 11.765C15.7297 9.45478 14.8889 6.94522 13.1281 5.38122C11.5232 3.90667 9.20022 3.29589 7.07144 3.75078Z"
                fill="#3D4149"
              />
              <path
                d="M14.2296 2.17402C14.7279 1.83158 15.2262 2.32991 15.5738 2.65447C15.975 3.01991 16.4631 3.66391 15.952 4.15458C15.2441 4.78069 14.5056 3.85558 14.0813 3.33936C13.7338 3.0148 13.8156 2.40658 14.2296 2.17402Z"
                fill="#3D4149"
              />
              <path
                d="M7.78699 5.64188C7.95565 4.9621 9.06988 4.97232 9.21554 5.66232C9.35099 6.80465 9.21554 7.95465 9.28454 9.1021C9.6091 9.51865 10.0717 9.90965 10.0282 10.4949C10.0717 11.075 9.61421 11.466 9.30499 11.8928C9.25388 12.5035 9.39443 13.5667 8.49999 13.5718C7.60554 13.5667 7.74354 12.5035 7.69499 11.8928C7.38832 11.4711 6.92577 11.0852 6.97177 10.5077C6.92066 9.91732 7.39088 9.52121 7.71799 9.1021C7.78443 7.94954 7.64899 6.79188 7.78699 5.64188Z"
                fill="#3D4149"
              />
            </svg>
            Time
          </Accordion.Header>
          <Accordion.Body className="pe-0">
            <Accordion.Item eventKey="1" className="border-0">
              <Accordion.Header>
                <svg
                  width="19"
                  height="20"
                  viewBox="0 0 19 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.202 0H9.746C11.832 0.14 13.992 0.488 15.794 1.616C16.682 2.168 17.464 3.09 17.398 4.196C17.392 8.126 17.42 12.058 17.384 15.99C17.112 15.996 16.842 16 16.57 16.004C16.588 15.256 16.62 14.508 16.602 13.76C15.076 15.12 13.014 15.636 11.034 15.882C8.57 16.144 6.016 15.98 3.678 15.114C2.838 14.814 2.074 14.338 1.396 13.762C1.418 14.488 1.338 15.22 1.458 15.942C1.712 16.75 2.48 17.248 3.19 17.63C5.142 18.596 7.362 18.814 9.512 18.802C9.73001 19.05 9.936 19.308 10.13 19.576C7.568 19.67 4.886 19.438 2.59 18.208C1.564 17.65 0.532004 16.694 0.602004 15.426C0.600004 11.678 0.598004 7.928 0.602004 4.18C0.536004 2.97 1.468 2.016 2.452 1.466C4.196 0.466 6.226 0.142 8.202 0ZM7.088 0.908C5.258 1.156 3.278 1.564 1.906 2.892C1.206 3.504 1.288 4.626 1.994 5.198C3.476 6.524 5.536 6.912 7.45 7.128C10.028 7.322 12.756 7.112 15.074 5.882C15.864 5.446 16.804 4.668 16.548 3.652C16.176 2.6 15.076 2.072 14.118 1.66C11.888 0.822 9.444 0.664 7.088 0.908ZM1.396 5.752C1.434 6.618 1.332 7.49 1.452 8.35C1.758 9.246 2.64 9.762 3.448 10.15C5.662 11.118 8.146 11.32 10.534 11.128C12.24 10.954 13.992 10.6 15.45 9.65C16.002 9.276 16.572 8.738 16.588 8.026C16.626 7.268 16.584 6.508 16.604 5.75C15.78 6.506 14.76 7.006 13.696 7.33C11.144 8.106 8.402 8.176 5.786 7.704C4.206 7.392 2.604 6.858 1.396 5.752ZM1.396 9.752C1.456 10.662 1.282 11.602 1.502 12.494C2.124 13.734 3.55 14.248 4.792 14.64C7.186 15.31 9.74001 15.358 12.174 14.892C13.416 14.638 14.668 14.244 15.694 13.474C16.148 13.12 16.586 12.624 16.59 12.014C16.626 11.26 16.584 10.506 16.604 9.75C15.782 10.504 14.764 11.004 13.702 11.328C11.206 12.088 8.526 12.172 5.964 11.736C4.322 11.432 2.652 10.896 1.396 9.752Z"
                    fill="#4C51B9"
                  />
                  <path
                    d="M11.056 16.848C11.868 16.572 12.764 17.344 12.584 18.19C12.502 19.082 11.328 19.5 10.654 18.954C9.90201 18.414 10.132 17.054 11.056 16.848ZM11.234 17.616C10.76 17.832 11.074 18.592 11.572 18.382C12.03 18.164 11.728 17.404 11.234 17.616Z"
                    fill="#4C51B9"
                  />
                  <path
                    d="M14.256 16.848C15.068 16.572 15.966 17.346 15.784 18.192C15.7 19.074 14.546 19.494 13.87 18.966C13.102 18.434 13.324 17.056 14.256 16.848ZM14.422 17.616C14.18 17.742 14.114 18.116 14.32 18.3C14.542 18.526 15.056 18.36 14.99 18.004C15.04 17.686 14.688 17.53 14.422 17.616Z"
                    fill="#4C51B9"
                  />
                  <path
                    d="M17.174 16.966C17.862 16.546 18.784 16.958 19 17.716V18.216C18.852 18.962 18.012 19.416 17.316 19.102C16.436 18.782 16.356 17.404 17.174 16.966ZM17.638 17.614C17.164 17.82 17.46 18.582 17.956 18.382C18.44 18.2 18.134 17.396 17.638 17.614Z"
                    fill="#4C51B9"
                  />
                </svg>
                202215
              </Accordion.Header>
              <Accordion.Body className="pt-0 selectFormInner">
              <Form.Check
                        inline
                        label="Select all"
                        name="group1"
                        type="checkbox"
                        id="selectAll"
                      />
                {userData.map((value, i) => {
                  return (
                    <div className="select-form" key={i}>
                      <Form.Check
                        inline
                        label={value.size}
                        name="group1"
                        type="checkbox"
                        id={i}
                      />
                    </div>
                  );
                })}
              </Accordion.Body>
            </Accordion.Item>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
};

export default Home;
