import React, { useState } from "react";
import { Card } from "react-bootstrap";
import styled from "styled-components";
import axios from "axios";
import { nanoid } from "@reduxjs/toolkit";
import { Link } from "react-router-dom";
import { getCookie } from "../../cookie";

const Sign = () => {
    const [nickname, setNickName] = useState(""); // 사용자 아이디
    const [writer, setWriter] = useState(""); // 사용자 닉네임
    const [password, setPassWord] = useState(""); //비밀번호
    const [passwordConfirm, setpassWordConfirm] = useState(""); //비밀번호 확인
    const [mbti, setMbti] = useState("");
    const [passwordError, setPasswordError] = useState("");

    function onChangePassWord(event) {
        setPassWord(event.target.value);
        if (event.target.value === passwordConfirm) {
            setPasswordError("");
        }
    }
    // const checkPassword = (e) => {
    //   //  8 ~ 10자 영문, 숫자 조합
    //   var regExp = /^(?=.*\d)(?=.*[a-zA-Z])[0-9a-zA-Z]{8,10}$/
    //   // 형식에 맞는 경우 true 리턴
    //   console.log('비밀번호 유효성 검사 :: ', regExp.test(e.target.value))
    // }

    function onChangepassWordConfirm(event) {
        setpassWordConfirm(event.target.value);
        if (event.target.value === password) {
            setPasswordError("");
        }
    }

    const account = () => {
        // Request API.
        // Add your own code here to customize or restrict how the public can register new users.
        axios
            .post("http://43.201.36.176/api/member/signup", {
                nickname: nickname,
                writer: writer,
                mbti: mbti,
                password: password,
                passwordConfirm: passwordConfirm,
                // id:nanoid ()
                // passWordConfirm: passWordConfirm,
            })
            .then((response) => {
                //동시에 일어나는 걸 막기위해 then 이라는 함수가 사용된다
                // Handle success.
                console.log("Well done!");
                console.log("User profile", response.data.user);
                console.log("User token", response.data.jwt); //토큰을 받아오면

                localStorage.setItem("token", response.data.jwt); //앞에서 받아오는 부분
                // replace("/") 홈으로 보내줘야한다
            })
            .catch((error) => {
                // Handle error.
                console.log("An error occurred:", error.response);
            });
        if (password.length < 4) {
            setPasswordError("4글자 이상으로 입력해주세요!");
        }
        if (password !== passwordConfirm) {
            setPasswordError("비밀번호가 다릅니다");
        }
    };

    return (
        <>
            <div className="card" style={{ height: "80vh" }}>
                <Left
                    className="left"
                    style={{ height: "82vh", width: "50%", float: "left" }}
                ></Left>
                <Right
                    className="right"
                    style={{ height: "82vh", width: "50%", float: "right" }}
                >
                    <Input1 className="input1" style={{ marginTop: "250px" }}>
                        <label className="label"></label>
                        <input
                            className="input"
                            type="email"
                            placeholder="🙂ID"
                            value={nickname}
                            onChange={(e) => {
                                setNickName(e.target.value);
                                console.log(e.target.value);
                            }}
                        />
                        <br />
                        <br />
                        <input
                            className="input"
                            type="email"
                            placeholder="😙NICKNAME"
                            value={writer}
                            onChange={(e) => {
                                setWriter(e.target.value);
                                console.log(e.target.value);
                            }}
                        />
                        <br />
                        <br />
                        <input
                            className="input"
                            type="email"
                            placeholder="😎MBTI"
                            value={mbti}
                            onChange={(e) => {
                                setMbti(e.target.value);
                                console.log(e.target.value);
                            }}
                        />
                        <br />
                        <br />
                        <input
                            className="input"
                            type="password"
                            placeholder="🔒Password"
                            value={password}
                            onChange={onChangePassWord}
                        ></input>
                        <br />
                        <br />
                        <input
                            className="input"
                            type="password"
                            placeholder="🔒Password check"
                            value={passwordConfirm}
                            onChange={onChangepassWordConfirm}
                        ></input>{" "}
                        <Error>{passwordError}</Error>
                        <br />
                        <br />
                        <Link to={`/login`}>
                            <button
                                className="button is-medium is-fullwidth"
                                onClick={() => account()}
                            >
                                ᴀᴄᴄᴏᴜɴᴛ
                            </button>
                        </Link>
                    </Input1>
                </Right>{" "}
            </div>
        </>
    );
};

const Input1 = styled.div`
    margin: 0px 100px 0px 100px;

    box-sizing: border-box;
`;

const Left = styled.div`
    float: left;
    box-sizing: border-box;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-image: url(https://velog.velcdn.com/images/soonger3306/post/881041ea-65fa-437a-b987-6f38f7b83b0f/image.jpg);
`;
const Right = styled.div`
    float: right;
    box-sizing: border-box;

    background: #8799c1;
    overflow: hidden;
`;

const Error = styled.div`
    color: red;
`;

export default Sign;
