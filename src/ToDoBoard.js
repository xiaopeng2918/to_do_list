import React from 'react'
import Board from 'react-trello'
import {useRef} from 'react'
import './ToDoBoard.css'
// board数据
const data = {
  lanes: [
    {
      id: 'lane1',
      title: 'Planned Tasks',
      label: '2/2',
      cards: [
        { id: 'Card1', title: 'Write Blog', description: 'Can AI make memes', label: '30 mins', draggable: false },
        { id: 'Card2', title: 'Pay Rent', description: 'Transfer via NEFT', label: '5 mins', metadata: { sha: 'be312a1' } },
        { id: 'Card3', title: 'Pay Rent', description: 'Transfer via NEFT', label: '5 mins', metadata: { sha: 'be312a1' } },
        { id: 'Card4', title: 'Pay Rent', description: 'Transfer via NEFT', label: '5 mins', metadata: { sha: 'be312a1' } },
        { id: 'Card5', title: 'Pay Rent', description: 'Transfer via NEFT', label: '5 mins', metadata: { sha: 'be312a1' } },
        { id: 'Card6', title: 'Pay Rent', description: 'Transfer via NEFT', label: '5 mins', metadata: { sha: 'be312a1' } },
        { id: 'Card7', title: 'Pay Rent', description: 'Transfer via NEFT', label: '5 mins', metadata: { sha: 'be312a1' } },
        { id: 'Card8', title: 'Pay Rent', description: 'Transfer via NEFT', label: '5 mins', metadata: { sha: 'be312a1' } },
        { id: 'Card9', title: 'Pay Rent', description: 'Transfer via NEFT', label: '5 mins', metadata: { sha: 'be312a1' } },
        { id: 'Card10', title: 'Pay Rent', description: 'Transfer via NEFT', label: '5 mins', metadata: { sha: 'be312a1' } },
        { id: 'Card11', title: 'Pay Rent', description: 'Transfer via NEFT', label: '5 mins', metadata: { sha: 'be312a1' } },
        { id: 'Card12', title: 'Pay Rent', description: 'Transfer via NEFT', label: '5 mins', metadata: { sha: 'be312a1' } },
        { id: 'Card13', title: 'Pay Rent', description: 'Transfer via NEFT', label: '5 mins', metadata: { sha: 'be312a1' } },
      ]
    },
    {
      id: 'lane2',
      title: 'Completed',
      label: '0/0',
      cards: []
    },
    {
      id: 'lane3',
      title: 'Completed',
      label: '0/0',
      cards: []
    },
    {
      id: 'lane4',
      title: 'Completed',
      label: '0/0',
      cards: []
    },
    {
      id: 'lane5',
      title: 'Completed',
      label: '0/0',
      cards: []
    },
    {
      id: 'lane6',
      title: 'Completed',
      label: '0/0',
      cards: []
    },
    {
      id: 'lane7',
      title: 'Completed',
      label: '0/0',
      cards: []
    },
    {
      id: 'lane8',
      title: 'Completed',
      label: '0/0',
      cards: []
    },
    {
      id: 'lane9',
      title: 'Completed',
      label: '0/0',
      cards: []
    },
    {
      id: 'lane10',
      title: 'Completed',
      label: '0/0',
      cards: []
    },
    {
      id: 'lane11',
      title: 'Completed',
      label: '0/0',
      cards: []
    },
    {
      id: 'lane12',
      title: 'Completed',
      label: '0/0',
      cards: []
    },
    {
      id: 'lane13',
      title: 'Completed',
      label: '0/0',
      cards: []
    },
    {
      id: 'lane14',
      title: 'Completed',
      label: '0/0',
      cards: []
    },
  ]
}

const ToDoBoard = () => {
  const board = useRef();
  const refHandler = () => {
    console.log(board);
  }
  return <>
    <Board className="board" ref={board} data={data} />
    <button ref={board} onClick={refHandler}>按钮</button>
  </>
}

export default ToDoBoard;



