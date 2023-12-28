import { FaTrash } from 'react-icons/fa'

const ListItem = ({ transaction, deleteTransaction }) => {
    return (
        <li className="list-group-item d-flex align-items-center justify-content-between">
            <span className="w-50 d-flex align-items-center justify-content-between">

                <h5 className={transaction.amount > 0 ? "bg-success text-light p-3" : "bg-danger text-light p-3"}>₹{transaction.amount}</h5>
                <h5>{transaction.text}</h5>

            </span>
            <button className="btn btn-danger p-2" onClick={() => deleteTransaction(transaction.id)}>
                <FaTrash />
            </button>
        </li>
    )
}

export default ListItem