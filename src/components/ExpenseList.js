import React from 'react'
import './ExpenseList.css';
import ExpenseItem from './ExpenseItem';
import { MdDelete } from 'react-icons/md';

//export default class ExpenseList extends Component {
// 구조분해할당을 이용해 props를 받아오는 대신 {initialExpenses, handleDelete}를 사용하면 props를 생략하고 바로 쓸 수 있음
const ExpenseList = ({ expenses, initialExpenses, handleDelete, handleEdit, clearItems }) => {
    return (
        // 요소들을 감싸줘야 하는데 필요없는 div를 생성하는 대신 React.Fragment를 사용할 수 있음
        // 더 간단하게 하려면 생략할 수 있음. 그러면 React.Fragement로 감싼것이 됨
        <>
            <ul className='list'>
                {initialExpenses.map(expense => {
                    return (
                        <ExpenseItem key={expense.id} expense={expense}
                            handleDelete={handleDelete} handleEdit={handleEdit} />
                    )
                })}
            </ul>
            {expenses.length > 0 ?
                <button className='btn' onClick={clearItems}>
                    목록 지우기
                    <MdDelete className='btn-icon' />
                </button> : null
            }
        </>
    )
}

export default ExpenseList;