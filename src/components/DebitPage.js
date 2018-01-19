import React from 'react'

import DebitList from './DebitList'
import NewDebitForm from './NewDebitForm'
import AccountBalance from './AccountBalance'
import {Link} from 'react-router-dom';

const DebitPage = (props) => {
    return (
        <div>
            <h1>Debits</h1>
            <Link to="/">Back to Home</Link>

            <AccountBalance accountBalance={props.accountBalance}/>

            <NewDebitForm addNewDebit={props.addNewDebit}/>
            <br/>

            <DebitList debits={props.debits}/>
        </div>
    );
};

export default DebitPage;