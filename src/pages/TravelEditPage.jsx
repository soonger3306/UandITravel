import React from 'react';
import EditForm from '../components/travelform/EditForm'
import styled from "styled-components";
import Header from "../components/header/Header"

const TravelEditPage = () => {
    return (
        <div>
            <Background> 
       <Header/>
          <Div>
          <EditForm/>  
          </Div>
          </Background>   
        </div>
    );
};

const Background = styled.div`
overflow: auto;
height: 110vh;
background-size: cover;
  background-image:url(https://velog.velcdn.com/images/soonger3306/post/41dbb138-607a-4793-8a17-f064330754c6/image.gif) ;;

`;


const Div = styled.div`
overflow: auto;
height: 100vh;
margin: 10px 100px;

background-color: #ffffffd0;
border-radius: 10px 

`

export default TravelEditPage;