import React, {useEffect, useState} from 'react';
import './App.css';
import PocketContainer from './PocketContainer';
import AddContainer from './AddContainer';

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

    console.log(localStorage + " , " + localNextItemId);

  }, []);

  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(items));
    localStorage.setItem("nextItemId", nextItemId);
  }, [items]);

  const addItemHandler = (addItemData) => {
    setNextItemId(nextItemId + 1);
    setIsAddItem(true);

    setItems(prev => {
      return [...prev, addItemData];
    });
  };

  return (
    <>
      < PocketContainer
        items={items}
        isAddItem={isAddItem} />
      
      <AddContainer
        nextItemId={nextItemId}
        onAddItem={addItemHandler} />
    </>
  )
}

export default App;
