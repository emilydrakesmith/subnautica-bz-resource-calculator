/******* START: IMPORT REACT AND OTHER DONGLES *******/
import React, { useState } from 'react';
/******* END: IMPORT REACT AND OTHER DONGLES *******/


/******* START: IMPORT LOCAL FILES *******/
import './BasicMaterialsSelector.css';
import basicMaterials from '../../data/materials/basicMaterials';
/******* END: IMPORT LOCAL FILES *******/


function BasicMaterialsSelector() {
    const [enameledGlassCount, setEnameledGlassCount] = useState(0);
    const [fiberMeshCount, setFiberMeshCount] = useState(0);
    const [glassCount, setGlassCount] = useState(0);
    const [lubricantCount, setLubricantCount] = useState(0);
    const [plasteelIngotCount, setPlasteelIngotCount] = useState(0);
    const [siliconeRubberCount, setSiliconeRubberCount] = useState(0);
    const [titaniumIngotCount, setTitaniumIngotCount] = useState(0);

    function changeStateRouter(event, material) {
        const valueString = event.target.value;                 // get the current value in the box updated by the user
        const value = parseInt(valueString);                    // convert the value from the previous line from string to number
        let stateFunction;                                      // declare a variable to hold the appropriate function to update state
        switch (material) {
            case 'Enameled Glass':
                stateFunction = setEnameledGlassCount;
                break;
            case 'Fiber Mesh':
                stateFunction = setFiberMeshCount;
                break;
            case 'Glass':
                stateFunction = setGlassCount;
                break;
            case 'Lubricant':
                stateFunction = setLubricantCount;
                break;
            case 'Plasteel Ingot':
                stateFunction = setPlasteelIngotCount;
                break;
            case 'Silicone Rubber':
                stateFunction = setSiliconeRubberCount;
                break;
            case 'Titanium Ingot':
                stateFunction = setTitaniumIngotCount;
                break;
            default:
                console.log('heyoooo');                         // for troubleshooting
        }
        stateFunction(value);                                   // execute the appropriate function to update state
    }

    const basicMaterialsArray = basicMaterials.map(
        (basicMaterial, idx) => (
            <li key={idx}>
                <input  className='basic-material-input'
                        type='number'
                        name={basicMaterial.name}
                        onChange={event => changeStateRouter(event, basicMaterial.name)}
                />
                <label htmlFor={basicMaterial.name}>{basicMaterial.name}</label>
            </li>
        )
    );

    return (
        <section id='basic-materials-selector'>
            <h2>Basic Materials</h2>
            <ul>
                {basicMaterialsArray}
            </ul>
        </section>
    );
}

export default BasicMaterialsSelector;