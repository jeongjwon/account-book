import Item from  '../Item/Item';
import React from 'react';
import './AccountItem.css';

function AccountItems({ filteredItems, onDeleteItem }) {
    if (filteredItems.length === 0) {
        return (
            <div className='pocketItems'>
                <span>입력된 데이터가 없어요</span>
            </div>
        )
    };


    const copyFiilteredItems = [...filteredItems];

    const sortedFilteredItems = copyFiilteredItems.sort((a, b) => {
        //가장 최근의 아이템이 상단에 위치
        
        if (new Date(a.date).getTime() === new Date(b.date).getTime()) {
            //날짜가 같다면 id가 작은 순으로 정렬
            return b.id - a.id;
        }
        return new Date(b.date) - new Date(a.date);
    });

    console.log(sortedFilteredItems);

    const deleteItemHandler = (selectedItemId) => {
        onDeleteItem(selectedItemId);
    }

    return (
        <div className="accountItems">
            {sortedFilteredItems.map(item => (
                    <Item
                        key={item.id}
                        id={item.id}
                        date={item.date}
                        title={item.title}
                        amount={item.amount}
                        type={item.type}
                        onDeleteItem={deleteItemHandler} />
            ))
            }
        </div>
    );
}
export default AccountItems;