import React, { useState } from 'react';

function AddItemForm({ onInsert, onCancel }) {
    
    const TITLE_SIZE = 20;
    const [enteredDate, setEnteredDate] = useState("");
    const [enteredTitle, setEnteredTitle] = useState("");
    const [enteredAmount, setEnteredAmount] = useState("");
    const [enteredType, setEnteredType] = useState("income");

    const onChangeDate = (e) => {
        setEnteredDate(e.target.value);
    }
    const onChangeTitle = (e) => {
        //제목 길이 제한
        setEnteredTitle(e.target.value);
    }
    const onChangeAmount = (e) => {
        //숫자가 아닌 것 제한
        setEnteredAmount(e.target.value);
    }
    const onChangeType = (e) => {
        setEnteredType(e.target.value);
    }
    const onSubmitHandler= (e) => {
        e.preventDefault();
        const enteredData = {
            date: new Date(enteredDate),
            title: enteredTitle,
            amount: enteredAmount,
        };
        onInsert(enteredData);//부모인 AddItem에게 전달

        setEnteredDate("");
        setEnteredTitle("");
        setEnteredAmount("");

    }
    return (
        <form className="addItemForm_cotainer" onSubmit={onSubmitHandler}>
            <div className="addItemForm_title">
                <h2>날짜</h2>
                <input
                    type="date"
                    value={enteredDate}
                    onChange={onChangeDate}
                    min="2022-01-01"
                    max={new Date().toISOString().substring(0,10)} //2022-10-22
                    required
                />
            </div>

            <div className="addItemForm_title">
                <h2>제목</h2>
                <input
                    type="text"
                    value={enteredTitle}
                    placeholder="사용 내역을 입력하세요."
                    onChange={onChangeTitle}
                    maxLength={TITLE_SIZE}
                    required
                />
            </div>
            <div className="addItemForm_title">
                <h2>금액</h2>
                <input
                    type="text"
                    value={enteredAmount}
                    onChange={onChangeAmount}
                    placeholder="금액을 입력하세요"
                    maxLength="11"
                    required
                    />
            </div>
            <div className='amount_type'>
                <div className='amount_income'>
                    <input
                        type="radio"
                        id="income"
                        value="income"
                        name="amount-type"
                        onChange={onChangeType}
                        checked={enteredType === "income" || ""} 
                        required
                    />
                    <label htmlFor='income'>수입</label>
                </div>

                <div className='amount_expense'>
                    <input
                        type="radio"
                        id="expense"
                        value="expense"
                        name="amount-type"
                        onChange={onChangeType}
                        checked={enteredType === "expense" || ""}
                        required
                    />
                    <label htmlFor='expense'>지출</label>
                </div>
            </div>

            <div className="addItemForm_container_footer">
                <button type="submit">등록</button>
                <button onClick={onCancel}>취소</button>

            </div>
        </form>
    )
}
export default AddItemForm;