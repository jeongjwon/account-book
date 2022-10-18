import AccountStatus from './AccountStatus';
import AccountList from './AccountList';
import React, { useEffect, useState } from 'react';
import './AccountContainer.css';
//props -> items, onDeleteItem, isAddItem

function AccountContainer({ items, isAddItem, onDeleteItem}) {
    const initialFilterBaseYear = new Date().getFullYear().toString();
    const [filterBaseYear, setFilterBaseYear] = useState(initialFilterBaseYear);

    let filteredItems = [];
    let filteredExpenses = [];

    useEffect(() => {
        if (isAddItem) {
            //추가된 아이템이 있다면 최근의 아이템의 데이터를 가져옴
            let lastedItemId = Math.max(...items.map(item => item.id));
            let lastedItem = items.filter(item => item.id === lastedItemId);
            let lastedFilterBaseYear = lastedItem[0].date.getFullYear().toString();
            setFilterBaseYear(lastedFilterBaseYear);
        }
    }, [items]);

    
    if (items.length > 0) {
        filteredItems = items.filter(
            item => item.date.getFullYear().toString() === filterBaseYear);
        filteredExpenses = items.filter(
            item => item.type === "expense");
    }

    const onChangeFilterYear = (selectedYear) => {
        setFilterBaseYear(selectedYear);
    }
    const deleteItemHandler = (selectedItemId) => {
        onDeleteItem(selectedItemId);
    }

    return (
        <div className="account_container">
            <AccountStatus
                filteredItems={filteredItems}
                filterBaseYear={filterBaseYear} />
            
            <AccountList
                filteredItems={filteredItems}
                filterBaseYear={filterBaseYear}
                onChangeFilterYear={onChangeFilterYear}
                onDeleteItem={deleteItemHandler} />
        </div>
    )
}
export default AccountContainer;