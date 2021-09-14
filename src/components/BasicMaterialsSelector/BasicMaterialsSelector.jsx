/******* START: IMPORT REACT AND OTHER DONGLES *******/
import React, { useState } from 'react';
/******* END: IMPORT REACT AND OTHER DONGLES *******/


/******* START: IMPORT LOCAL FILES *******/
import './BasicMaterialsSelector.css';
import basicMaterials from '../../data/materials/basicMaterials';
/******* END: IMPORT LOCAL FILES *******/


function BasicMaterialsSelector() {
    const [basicMaterialsCount, setBasicMaterialsCount] = useState({});                 // initialize state as an empty object

    function updateCount(event, material) {
        const {value} = event.target;                                                   // deconstruct input value from field changed
        const valueNumber = parseInt(value);                                            // convert value from string to number data type
        valueNumber ? updateState(material, valueNumber) : deleteFromState(material)
    }

    function updateState(key, value) {
        setBasicMaterialsCount(oldCount => (
            {...oldCount, [key]: value}                                      // update state with the new key-value pair
        ));
    }

    function deleteFromState(key) {
        const state = basicMaterialsCount;
        delete state[key];
        setBasicMaterialsCount(state);
    }

    const basicMaterialsArray = basicMaterials.map(
        (basicMaterial, idx) => (
            <li key={`basic-material-${idx+1}`}>
                <input  className='basic-material-input'
                        type='number'
                        min={0}
                        name={basicMaterial.name}
                        onChange={event => updateCount(event, basicMaterial.appId)}
                />
                <label htmlFor={basicMaterial.name}>{basicMaterial.name}</label>
            </li>
        )
    );

    return (
        <section id='basic-materials-selector'>
            <h2>Basic Materials</h2>
            <ul>{basicMaterialsArray}</ul>
        </section>
    );
}

export default BasicMaterialsSelector;