import React, { useState } from 'react'

const MainSection = ({ transactions, saveTransaction }) => {

    const balance = transactions.reduce((p, c) => {
        return p + c.amount
       
    }, 0)


    const [text, setText] = useState("")
    const [amount, setAmount] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault();
        saveTransaction(text, amount)
        setText('')
        setAmount('')

    }


    return (
        <div className="container mt-2 p-3 d-flex">
            <div className="card w-50  p-4 mx-1 d-flex align-items-center">
                <span>
                    <p className="fw-bolder">CURRENT BALANCE</p>
                    <h1 className="display-1 fw-semibold text-success">₹{balance}</h1>
                </span>
            </div>
            <div className="card w-50 p-4">
                <form onSubmit={handleSubmit}>
                    <input type="text"
                        placeholder="Enter Your Transaction"
                        className="form-control fs-4 mb-2 rounded-0 border-top-0 border-start-0 border-end-0"
                        onChange={(e) => setText(e.target.value)}
                        value={text}
                    />

                    <input type="number"
                        placeholder="Enter Amount"
                        className="form-control fs-4 rounded-0 border-top-0 border-start-0 border-end-0"
                        onChange={(e) => setAmount(e.target.value)}
                        value={amount}
                    />

                    <button className="btn btn-success mt-3 rounded-1 w-100">SAVE TRANSACTION</button>
                </form>
            </div>
        </div>
    )
}

export default MainSection