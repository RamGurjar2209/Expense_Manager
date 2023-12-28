import React from 'react'

const BalanceSection = ({ transactions }) => {

    const income = transactions
        .filter((transaction) => transaction.amount > 0)
        .reduce((p, c) => p + c.amount, 0)

    const expense = transactions
        .filter((transaction) => transaction.amount < 0)
        .reduce((p, c) => p + c.amount, 0)


    return (
        <div className="container px-5 py-1 d-flex">
            <div className=" card w-50  p-4 d-flex align-items-center bg-success me-1">
                <span>
                    <p className="fw-bolder text-light">CURRENT INCOME</p>
                    <h1 className="display-4 fw-semibold text-light">₹{income}</h1>
                </span>
            </div>

            <div className=" card w-50  p-4 d-flex align-items-center bg-danger ms-1">
                <span>
                    <p className="fw-bolder text-light">CURRENT EXPENSE</p>
                    <h1 className="display-4 fw-semibold text-light text-success">₹{expense}</h1>
                </span>
            </div>
        </div>
    )
}

export default BalanceSection