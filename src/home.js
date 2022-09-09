import React from 'react';
import {Link} from 'react-router-dom'
import Header from './header';
import {
    Button
  } from "@aws-amplify/ui-react";
function Home(){
    return (
        <div class="cover-container d-flex h-100  mx-auto flex-column bg-light">
           
           <Header />
            <main role="main" class="inner cover">
                <h1 class="cover-heading">Welcome to N&#252;ber</h1>
                <p class="lead">Like &#252;ber, only newer...</p>
                <p class="lead">
                </p>
                <p class="lead">
                <Link class="btn btn-lg btn-secondary" to="/login"> Profile </Link>
                </p>
            </main>

            
        </div>

    );
}

export default Home;