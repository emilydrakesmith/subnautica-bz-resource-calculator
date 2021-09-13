/******* START: IMPORT REACT AND OTHER DONGLES *******/
import React from 'react';
/******* END: IMPORT REACT AND OTHER DONGLES *******/


/******* START: IMPORT LOCAL FILES *******/
import './BuildSelector.css';
import basicMaterials from '../../data/materials/basicMaterials';
/******* END: IMPORT LOCAL FILES *******/


/** NOTES
 *      1. MAKE A <DIV> WITH CLICKABLE WORDS FOR EACH MATERIAL
 *      2. ADD/REMOVE A CSS CLASS TO HIGHLIGHT ON CLICK
 *      3. ADD OR REMOVE THE DESIRED MATERIALS FROM STATE ON CLICK
 */

function BuildSelector() {
    const basicMaterialsArray = basicMaterials.map(
        (basicMaterial, idx) => (
            <li>
                <input className='basic-material-input' type='number' name={basicMaterial.name} />
                <label key={idx} for={basicMaterial.name} >{basicMaterial.name}</label>
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

export default BuildSelector;