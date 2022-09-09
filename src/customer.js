import React from 'react';
import Header from './header';
import {
    Button
  } from "@aws-amplify/ui-react";
function Customer(){
    return (
        <div class="cover-container d-flex h-100  mx-auto flex-column bg-light">
           
           <Header />
            <main role="main" class="inner cover">
                <h1 class="cover-heading">Welcome to the Customer's Profile Page</h1>
                <p class="lead">Under Construction!</p>
             
            </main>

            
        </div>

    );
}

export default Customer;