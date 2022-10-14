import React from 'react';
import AddItemForm from "./AddItemForm";

function AddItem( {insertItem, onCancel}) {
    const insertItemHandler = (data) => {
        console.log(data);
        insertItem(data);
    };
    const stopEditHandler = (e) => {
        onCancel(e);
    }
    return (
        <div className='addItemContainer'>
            <h1>내역 추가</h1>
            <AddItemForm
                onInsert={insertItemHandler}
                onCancel={stopEditHandler}
            />
        </div>
            
        
    )
}
export default AddItem;