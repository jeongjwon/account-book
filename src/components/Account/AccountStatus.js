import React, { useEffect, useState } from 'react';
import { addComma } from '../utils';
import './AccountStatus.css';

function AccountStatus({ filteredItems, filterBaseYear }) {
    //filteredItem
    //총 수입, 총 지출 , 총 자산, 올해연도

    const [totalIncome, setTotalIncome] = useState(0);
    const [totalExpense, setTotalExpense] = useState(0);
    const [totalMoney, setTotalMoney] = useState(0);
    const year = filterBaseYear;
    
    
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
        <div className="account_status">
            <div className="account_status_title">
                {year}년 자산현황
            </div>

            <div className="account_status_cost">
                <strong>{addComma(totalMoney.toString())}원</strong>
            </div>
            <div className="account_status_detail">
                <div className="account_status_detail_income">
                    <span>수입</span>
                    <strong>{addComma(totalIncome.toString())}원</strong>
                </div>
                <div className="account_status_detail_expense">
                    <span>지출</span>
                    <strong>{addComma(totalExpense.toString())}원</strong>
                </div>
                
            </div>


        </div>
    )
}
export default AccountStatus;