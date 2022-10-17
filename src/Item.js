import React, { useState } from 'react';
import { addComma } from './utils';
import './item.css';
function Item({   id, date, title, amount, type, onDeleteItem }) {
    const [isItemClick, setIsItemClick] = useState(false);
    const [itemClickCount, setItemClickCount] = useState(0);

    const itemType = "item " + type;
    let fontSylteByType = "green";

    const itemTitle = title;
    let itemAmount = "+" + addComma(amount.toString());

    if(itemType === "expense") {
        fontSylteByType = fontSylteByType.replace("green", "red");
        itemAmount = itemAmount.replace("+", "-");
    } 
    console.log(itemType + " , " + itemAmount);
    
    const itemClick = () => {
        if (itemClickCount % 2 === 0) {
            setIsItemClick(true);
        } else {
            setIsItemClick(false);
        }
        setItemClickCount(prev => prev + 1);
    }

    const deleteButtonClick = (e) => {
        e.stopPropagation();
        onDeleteItem(id);
        
    }
  
    
    

    return (

        <div className={itemType} onClick={itemClick}>
            <div className="item_left">
                <span className="item_date">
                    {date.getFullYear()}-{date.getMonth()}-{date.getDate()}
                </span>

                <div className="item_title">
                    <button
                        className="item_title_button"
                        style={{ display: isItemClick === true ? "flex" : "none" }}
                        onClick={deleteButtonClick}
                    >
                         <span>아이템 삭제</span>
                    </button>
                    <h3>{itemTitle}</h3>
                </div>
            </div>

            <div>
                <strong className={fontSylteByType}>{itemAmount}</strong>
            </div>
        </div>
    )
}
export default Item;