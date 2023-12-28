import React, { useState } from 'react'
import Navbar from './components/Navbar'
import MainSection from './components/MainSection'
import BalanceSection from './components/BalanceSection'
import ListGroup from './components/ListGroup'

const App = () => {

  const [transactions, setTransactions] = useState([])


  const deleteTransaction = (id) => {
    if (window.confirm("Are you Sure?")) {
      setTransactions(transactions.filter((transaction) => transaction.id !== id))
    }
  }

  const saveTransaction = (text, amount) => {
    const newTransection = {
      id: crypto.randomUUID(),
      text: text,
      amount: +amount,
    }

    setTransactions([newTransection, ...transactions])
  }



  return (
    <>

      <Navbar />
      <MainSection transactions={transactions} saveTransaction={saveTransaction} />
      <BalanceSection transactions={transactions} />

      <div className="container p-5">
        <ListGroup transactions={transactions} deleteTransaction={deleteTransaction} />
      </div>

    </>
  )
}

export default App