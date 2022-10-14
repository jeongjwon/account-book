import PocketStatus from './PocketStatus';
import PocketList from './PocketList';
import React, { useState } from 'react';
//props -> items, onDeleteItem, isAddItem
function PocketContainer({items, onDeleteItem, isAddItem}){
    let filteredItems = [];
    
    return (
        <div>
            <PocketStatus filteredItems={filteredItems} />
            <PocketList />
        </div>
    )
}
export default PocketContainer;