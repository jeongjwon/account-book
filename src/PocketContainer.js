import PocketStatus from './PocketStatus';
import PocketList from './PocketList';
import React, { useEffect, useState } from 'react';
//props -> items, onDeleteItem, isAddItem

function PocketContainer({ items, isAddItem, onDeleteItem}) {
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
        <div className="pocket_container">
            <PocketStatus
                filteredItems={filteredItems}
                filterBaseYear={filterBaseYear} />
            
            <PocketList
                filteredItems={filteredItems}
                filterBaseYear={filterBaseYear}
                onChangeFilterYear={onChangeFilterYear}
                onDeleteItem={deleteItemHandler} />
        </div>
    )
}
export default PocketContainer;