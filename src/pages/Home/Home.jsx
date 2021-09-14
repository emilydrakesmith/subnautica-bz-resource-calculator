/******* START: IMPORT REACT AND OTHER DONGLES *******/
import React, { useState } from 'react';
/******* END: IMPORT REACT AND OTHER DONGLES *******/


/******* START: IMPORT LOCAL FILES *******/
import './Home.css';
import BaseMaterialsNeeded from '../../components/BaseMaterialsNeeded/BaseMaterialsNeeded';
import BasicMaterialsSelector from '../../components/BasicMaterialsSelector/BasicMaterialsSelector';
import MaterialsNeeded from '../../components/MaterialsNeeded/MaterialsNeeded';
/******* END: IMPORT LOCAL FILES *******/


function Home() {
    const [basicMaterialsCount, setBasicMaterialsCount] = useState({});                 // initialize state as an empty object

    function updateBasicMaterialsCount(event, material) {
        const {value} = event.target;                                                   // deconstruct input value from field changed
        const valueNumber = parseInt(value);                                            // convert value from string to number data type
        setBasicMaterialsCount(oldCount => (
            {...oldCount, [material]: valueNumber}                                      // update state with the new key-value pair
        ));
    }
    
    return (
        <>
            <BasicMaterialsSelector changeCounts={updateBasicMaterialsCount} />
            <MaterialsNeeded />
            <BaseMaterialsNeeded />
        </>
    );
}

export default Home;