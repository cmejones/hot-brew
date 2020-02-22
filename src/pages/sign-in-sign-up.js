import React from 'react';

import SignIn from '../Components/sign-in/sign-in.component';
import SignUp from '../Components/sign-up/sign-up.component';


import './sign-in-sign-up.css';

const SignInAndSignUpPage = () => (
    <div className='flex-container wrap'>
        <SignIn />
        <SignUp />
    </div>
);

export default SignInAndSignUpPage;
