import React from 'react'

import CreditList from './CreditList'
import NewCreditForm from './NewCreditForm'
import AccountBalance from './AccountBalance'
import {Link} from 'react-router-dom';

const CreditPage = (props) => {
    return (
        <div>
            <h1>Credits</h1>
            <Link to="/">Back to Home</Link>

            <AccountBalance accountBalance={props.accountBalance}/>

            <NewCreditForm addNewCredit={props.addNewCredit}/>
            <br/>

            <CreditList credits={props.credits}/>
        </div>
    );
};

export default CreditPage;