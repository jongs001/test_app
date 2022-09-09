import React from 'react';
import {Link} from 'react-router-dom'
import Header from './header'

import {
    withAuthenticator,
    Button
  } from "@aws-amplify/ui-react";

function driver() {
    
}
function customer() {
    return ( <div>user</div> )
}

function Login({ signOut }){
    return (
        <div class="cover-container d-flex h-100  mx-auto flex-column bg-light" >
            <Header />
            <main role="main" class="inner cover">
            <h3 class="cover-heading">Please Select Account Type:</h3>
            <div class="cover-container d-flex h-100 p-3 flex-column  btn-group justify-content-center mx-auto btn-block m-2 span2" >
                <Link  class="btn-lg btn-secondary btn-block m-1"   to="/customer">Customer</Link>
                <Link  class="btn-lg btn-secondary  btn-block m-1"   to="/drivers">Driver</Link>
            </div>
            <div class="btn-toolbar justify-content-center mx-auto m-4" ><Button class="btn btn-primary mr-1" onClick={signOut}>Sign Out</Button></div>
            </main>
        </div>
    );

}

export default withAuthenticator(Login);