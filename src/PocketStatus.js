import React, { useEffect, useState } from 'react';
import { addComma } from './utils';

function PocketStatus({ filteredItems, filteredBaseYear }) {
    //filteredItem
    //총 수입, 총 지출 , 총 자산, 올해연도

    const [totalIncome, setTotalIncome] = useState(0);
    const [totalExpense, setTotalExpense] = useState(0);
    const [totalMoney, setTotalMoney] = useState(0);
    const year = filteredBaseYear;
    
    
    useEffect(() => {
        let total = { money: 0, income: 0, expense: 0 };
        
        if (filteredItems.length > 0) {
            filteredItems.forEach(item => {
                if (item.type === "income") {
                    total.income += +item.amount;
                    total.money += +item.amount;
                } else {
                    total.expense += +item.amount;
                    total.money -= +item.amount;
                }
            });
        }
        setTotalIncome(total.income);
        setTotalExpense(total.expense);
        setTotalMoney(total.money);
    }, [filteredItems]);

    return (
        <div className="pocket_status">
            <div className="pocket_status_title">
                {year}년 자산현황
            </div>
            <div className="pocket_status_cost">
                <strong>{addComma(totalMoney.toString())}원</strong>
            </div>
            <div className="pockset_status_detail">
                <sapn>수입</sapn>
                <strong>{addComma(totalIncome.toString())}원</strong>
                <sapn>지출</sapn>
                <strong>{addComma(totalExpense.toString())}원</strong>
            </div>


        </div>
    )
}
export default PocketStatus;