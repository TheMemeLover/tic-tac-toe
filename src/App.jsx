import './App.css'
import React from "react"

export default function App() {
  let currentPlayerMark = ''
  let [win, setWin] = React.useState('')
  let [draw, setDraw] = React.useState(0)
  let [turn, setTurn] = React.useState(0)
  let [X, setX] = React.useState(0)
  let [O, setO] = React.useState(0)
  let [endScreen, setEndScreen] = React.useState(false)
  let [board, setBoard] = React.useState([
    {
      clickable: true,
      mark: ' ',
      id: 0
    },
    {
      clickable: true,
      mark: ' ',
      id: 1
    },
    {
      clickable: true,
      mark: ' ',
      id: 2
    },
    {
      clickable: true,
      mark: ' ',
      id: 3
    },
    {
      clickable: true,
      mark: ' ',
      id: 4
    },
    {
      clickable: true,
      mark: ' ',
      id: 5
    },
    {
      clickable: true,
      mark: ' ',
      id: 6
    },
    {
      clickable: true,
      mark: ' ',
      id: 7
    },
    {
      clickable: true,
      mark: ' ',
      id: 8
    }
  ])
  React.useEffect(() => {
    checkWin()
  }, [board])
  function restart() {
    setBoard([
    {
      clickable: true,
      mark: ' ',
      id: 0
    },
    {
      clickable: true,
      mark: ' ',
      id: 1
    },
    {
      clickable: true,
      mark: ' ',
      id: 2
    },
    {
      clickable: true,
      mark: ' ',
      id: 3
    },
    {
      clickable: true,
      mark: ' ',
      id: 4
    },
    {
      clickable: true,
      mark: ' ',
      id: 5
    },
    {
      clickable: true,
      mark: ' ',
      id: 6
    },
    {
      clickable: true,
      mark: ' ',
      id: 7
    },
    {
      clickable: true,
      mark: ' ',
      id: 8
    }
  ])
    setWin('')
    setTurn(0)
    setEndScreen(false)
  }
  function checkWin() {
    if (board[0].mark == 'X' && board[1].mark == 'X' && board[2].mark == 'X') {
      setWin(true)
      setX(prevCount => prevCount + 1)
      setEndScreen(<div><h1>X Wins!</h1><button className="restart" onClick={restart}>Restart</button></div>)
    } else if (board[3].mark == 'X' && board[4].mark == 'X' && board[5].mark == 'X') {
      setWin(true)
      setX(prevCount => prevCount + 1)
      setEndScreen(<div><h1>X Wins!</h1><button className="restart" onClick={restart}>Restart</button></div>)
    } else if (board[6].mark == 'X' && board[7].mark == 'X' && board[8].mark == 'X') {
      setWin(true)
      setX(prevCount => prevCount + 1)
      setEndScreen(<div><h1>X Wins!</h1><button className="restart" onClick={restart}>Restart</button></div>)
    } else if (board[0].mark == 'X' && board[4].mark == 'X' && board[8].mark == 'X') {
      setWin(true)
      setX(prevCount => prevCount + 1)
      setEndScreen(<div><h1>X Wins!</h1><button className="restart" onClick={restart}>Restart</button></div>)
    } else if (board[2].mark == 'X' && board[4].mark == 'X' && board[6].mark == 'X') {
      setWin(true)
      setX(prevCount => prevCount + 1)
      setEndScreen(<div><h1>X Wins!</h1><button className="restart" onClick={restart}>Restart</button></div>)
    } else if (board[0].mark == 'X' && board[3].mark == 'X' && board[6].mark == 'X') {
      setWin(true)
      setX(prevCount => prevCount + 1)
      setEndScreen(<div><h1>X Wins!</h1><button className="restart" onClick={restart}>Restart</button></div>)
    } else if (board[2].mark == 'X' && board[5].mark == 'X' && board[8].mark == 'X') {
      setWin(true)
      setX(prevCount => prevCount + 1)
      setEndScreen(<div><h1>X Wins!</h1><button className="restart" onClick={restart}>Restart</button></div>)
    } else if (board[1].mark == 'X' && board[4].mark == 'X' && board[7].mark == 'X') {
      setWin(true)
      setX(prevCount => prevCount + 1)
      setEndScreen(<div><h1>X Wins!</h1><button className="restart" onClick={restart}>Restart</button></div>)
    } else if (board[0].mark == 'O' && board[1].mark == 'O' && board[2].mark == 'O') {
      setWin(true)
      setO(prevCount => prevCount + 1)
      setEndScreen(<div><h1>O Wins!</h1><button className="restart" onClick={restart}>Restart</button></div>)
    } else if (board[3].mark == 'O' && board[4].mark == 'O' && board[5].mark == 'O') {
      setWin(true)
      setO(prevCount => prevCount + 1)
      setEndScreen(<div><h1>O Wins!</h1><button className="restart" onClick={restart}>Restart</button></div>)
    } else if (board[6].mark == 'O' && board[7].mark == 'O' && board[8].mark == 'O') {
      setWin(true)
      setO(prevCount => prevCount + 1)
      setEndScreen(<div><h1>O Wins!</h1><button className="restart" onClick={restart}>Restart</button></div>)
    } else if (board[0].mark == 'O' && board[4].mark == 'O' && board[8].mark == 'O') {
      setWin(true)
      setO(prevCount => prevCount + 1)
      setEndScreen(<div><h1>O Wins!</h1><button className="restart" onClick={restart}>Restart</button></div>)
    } else if (board[2].mark == 'O' && board[4].mark == 'O' && board[6].mark == 'O') {
      setWin(true)
      setO(prevCount => prevCount + 1)
      setEndScreen(<div><h1>O Wins!</h1><button className="restart" onClick={restart}>Restart</button></div>)
    } else if (board[0].mark == 'O' && board[3].mark == 'O' && board[6].mark == 'O') {
      setWin(true)
      setO(prevCount => prevCount + 1)
      setEndScreen(<div><h1>O Wins!</h1><button className="restart" onClick={restart}>Restart</button></div>)
    } else if (board[2].mark == 'O' && board[5].mark == 'O' && board[8].mark == 'O') {
      setWin(true)
      setO(prevCount => prevCount + 1)
      setEndScreen(<div><h1>O Wins!</h1><button className="restart" onClick={restart}>Restart</button></div>)
    } else if (board[1].mark == 'O' && board[4].mark == 'O' && board[7].mark == 'O') {
      setWin(true)
      setO(prevCount => prevCount + 1)
      setEndScreen(<div><h1>O Wins!</h1><button className="restart" onClick={restart}>Restart</button></div>)
    }else {
      let list = []
      for (let item of board) {
        if (item.mark != ' ') {
          list.push(item.mark)
        }
      }
      if (list.length == 9) {
        setWin(true)
      setEndScreen(<div><h1>Draw</h1><button className="restart" onClick={restart}>Restart</button></div>)
        
      }
    }
  }
  
  function putMark(num) {
    
    currentPlayerMark = turn % 2 == 0 ? 'X' : 'O'
    if (num == 4 && win) {
      return
    }
    setBoard(prevBoard => {
      let list = []
      for (let i = 0; i < prevBoard.length; i++) {
        
        if (prevBoard[i].id == num && prevBoard[i].clickable) {
          setTurn(prevTurn => prevTurn + 1)
          list.push({
            ...prevBoard[i],
            mark: currentPlayerMark,
            clickable: false
          })
        } else {
          list.push(prevBoard[i])
        }
      }
      return list
      })
  }
  
  function Board() {
    
    let spaces = board.map(spot => <div key={spot.id} onClick={() => putMark(spot.id)}>{spot.mark}{spot.id == 4 && <div className={`win ${win && 'appear'}`}>{endScreen}</div>}</div>)
    return (
      <div>
        <div className="container">
          {spaces}
        </div>
        
      </div>
    )
  }

  
  return (
    <main>
      <h1 className="title">Tic Tac Toe</h1>
      <div className="scoreBoard"><h1>X - {X}</h1><h1>O - {O}</h1></div>
      <div id="board">{Board()}</div>
    </main>
  )
}
