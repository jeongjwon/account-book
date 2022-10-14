import React, { useEffect, useState } from 'react';
const PocketStatus = (props) => {
    //총 수입, 총 지출 , 총 자산, 올해연도
    const [totalIncome, setTotalIncome] = useState(0);
    const [totalExpense, setTotalExpense] = useState(0);
    const [totalMoney, setTotalMoney] = useState(0);
    
    const year = new Date().getFullYear();
    
    useEffect(() => {
        let total = { money: 0, income: 0, expense: 0 };
        

        setTotalIncome(total.income);
        setTotalExpense(total.expense);
        setTotalMoney(total.money);
    },)
    return (
        <div className="pocket_status">
            <div className="pocket_status_title">
                {year}년 자산현황
            </div>
            <div className="pocket_status_cost">

            </div>


        </div>
    )
}
export default PocketStatus;