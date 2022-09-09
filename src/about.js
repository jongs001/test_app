import React from 'react';
import {Link} from 'react-router-dom'
import Header from './header';
import {
    Button
  } from "@aws-amplify/ui-react";
function About(){
    return (
        <div class="cover-container d-flex h-100 p-3 mx-auto flex-column bg-light">
           
           <Header />
            <main role="main" class="inner cover">
                <h1 class="cover-heading">Welcome to N&#252;ber</h1>
                <p class="lead">Like &#252;ber, only newer...</p>
                <p class="lead">Nüber is a crowd-sourced taxi service. We offer a personel transport service and aim to service a global user base.</p>
            </main>

            
        </div>

    );
}
export default About;