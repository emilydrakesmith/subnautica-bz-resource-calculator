/******* START: IMPORT REACT AND OTHER DONGLES *******/
import React from 'react';
/******* END: IMPORT REACT AND OTHER DONGLES *******/


/******* START: IMPORT LOCAL FILES *******/
import './Home.css';
import BaseMaterialsNeeded from '../../components/BaseMaterialsNeeded/BaseMaterialsNeeded';
import MaterialsNeeded from '../../components/MaterialsNeeded/MaterialsNeeded';
/******* END: IMPORT LOCAL FILES *******/


function Home() {
    return (
        <>
            <MaterialsNeeded />
            <BaseMaterialsNeeded />
        </>
    );
}

export default Home;