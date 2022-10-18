import React, {useEffect, useState} from 'react';
import './App.css';
import AccountContainer from './components/Account/AccountContainer';
import AddContainer from './components/Add/AddContainer';

function App() {
    const [isAddItem, setIsAddItem] = useState(false);
    const [items, setItems] = useState([]);
    const [nextItemId, setNextItemId] = useState(0);

  useEffect(() => {
    // localStorage 는 JSON 으로 저장되어있음 따라서 js에서 쓰고자 할 때는 JSON.parse() localStoarge 에서
    // 쓰고자 할 때는 JSON.stringfy()
    const localItems = JSON.parse(localStorage.getItem("items"));
    if (localItems === null) {
      //아직 없다면
      localStorage.setItem("items", JSON.stringify(items));
      localStorage.setItem("nextItemId", nextItemId);
      return;
    }
    const localNextItemId = +localStorage.getItem("nextItemId");

    

  }, []);

  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(items));
    localStorage.setItem("nextItemId", nextItemId);
  }, [items]);

  const addItemHandler = (addItemData) => {
    //추가 된다면 
    setNextItemId(nextItemId + 1);
    setIsAddItem(true);

    setItems(prev => {
      return [...prev, addItemData];
    });
  };
  
  const deleteItemHandler = (deleteItemData) => {
    setIsAddItem(false);

    let copyItems = [...items];
    copyItems = copyItems.filter(item => item.id !== deleteItemData);
    setItems(copyItems);
  }

  return (
    <>
       <AccountContainer
        items={items}
        isAddItem={isAddItem}
        onDeleteItem={deleteItemHandler} />
      
      <AddContainer
        nextItemId={nextItemId}
        onAddItem={addItemHandler} />
    </>
  )
}

export default App;
