import react, { useState } from 'react';
import AddItem from "./AddItem";
import './AddContainer.css';

function AddContainer({ nextItemId, onAddItem }) {
    const [edit, setEdit] = useState(false);

    const startEditHandler = () => {
        setEdit(true);
    }
    const stopEditHandler = (e) => {
        e.stopPropagation();
        setEdit(false);
    }
    const insertItem = (data) => {
        const enteredItem = {
            ...data,
            id: nextItemId
        };
        onAddItem(enteredItem);
        setEdit(false);
    }
    
    return (
        
        <div className="add_container">
            { !edit &&
                <button className="btn_gray" onClick={startEditHandler}>내역 추가하기</button>
            }

            {edit &&
                <AddItem
                    insertItem={insertItem}
                    onCancel={stopEditHandler}
                />
            }
        </div>
            
            
            
    );
};
export default AddContainer;