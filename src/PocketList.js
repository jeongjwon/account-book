import React from 'react';
import PocketItems from './PocketItems';

function PocketList({ filteredItems, filterBaseYear,onChangeFilterYear,onDeleteItem }) {
    //날짜 필터
    const filterChange = (selectedYear) => {
        onChangeFilterYear(selectedYear);
    }
    const deleteItemHandler = (selectedItemId) => {
        onDeleteItem(selectedItemId);
    }

    return (
        <div className='pocketList_container'>
            <div className='pocketList_header'>
                <h2>연간내역</h2>
                <select
                    id="filter"
                    name="filter"
                    value={filterBaseYear}
                    onChange={filterChange}
                    title="년도">
                    <option value="2022">2022</option>
                    <option value="2021">2021</option>
                </select>
            </div>
            
            <PocketItems
                filteredItems={filteredItems}
                onDeleteItem={deleteItemHandler} />
        </div>
    )
}
export default PocketList;