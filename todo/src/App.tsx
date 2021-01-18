import React, { useState, useEffect } from 'react';
import './App.css';
import { List, ListItemText, ListItem, ListItemSecondaryAction, TextField, Button, CircularProgress, ListItemIcon } from '@material-ui/core'
import RemoveIcon from '@material-ui/icons/RemoveCircle'
import { Star } from '@material-ui/icons'
import axios from 'axios'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    backgroundColor: '#eceff1'
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});
function App() {
  const [timestamp, setTimestamp] = useState(0)
  const [todoName, setTodoName] = useState('')
  const [searchName, setSearchName] = useState('')
  const [loading, setLoading] = useState(false)

  const classes = useStyles();

  interface todo {
    id: number,
    name: string,
    start: boolean,
    complete: boolean
  }

  let init: todo[] = []
  const [data, setData] = useState(init)
  useEffect(() => {
    setLoading(true)
    axios.get('http://localhost:3333/todolist').then(res => {
      console.log(res)
      setData(res.data.data)
      setLoading(false)
    })
  }, [])

  const deleteTodo = async (id: number) => {
    setLoading(true)
    axios.post("http://localhost:3333/dellist", { id }).then(res => {
      console.log(res)
      setData(res.data.data)
      setLoading(false)
      setTimestamp(Date.now())
    })
    console.log(id)
  }

  const addTodo = async () => {
    setLoading(true)

    axios.post('http://localhost:3333/addlist', { name: todoName }).then(res => {
      console.log(res)
      setData(res.data.data)
      setLoading(false)
      setTimestamp(Date.now())
      setTodoName('')
    })

  }

  const star = (id: number) => {
    setLoading(true)
    console.log(id)
    axios.post("http://localhost:3333/starlist", { id }).then(res => {
      console.log(res)
      setData(res.data.data)
      setLoading(false)
    })
  }

  let [time, setTime] = useState<number>(0)
  const searchtodo = (value: any) => {
    setLoading(true)
    console.log(value)
    setSearchName(value)
    let nowtime: any = new Date().getTime()
    console.log(time)
    if (value == "") {
      setTimeout(() => {
        axios.post('http://localhost:3333/searchlist', { key: value }).then(res => {
          console.log(res)
          setLoading(false)
          setData(res.data.data)
        })
      }, 1000);
    }
    console.log(nowtime)
    if (nowtime - time < 1000) {
      return
    }
    setTime(new Date().getTime())
    setTimeout(() => {
      axios.post('http://localhost:3333/searchlist', { key: value }).then(res => {
        console.log(res)
        setData(res.data.data)
        setLoading(false)
      })
    }, 1000);

  }
  return (
    <div style={{ width: 300, margin: "0 auto", backgroundColor: '#EEEEEE', borderRadius: '5px', marginTop: '16px' }}>
      <Card className={classes.root}>
        {(loading) ? <CircularProgress style={{ margin: 16 }} /> :
          <List>
            {data && data.map(x => (
              <ListItem key={x.id}>
                <ListItemIcon onClick={() => star(x.id)}>
                  {x.complete ? "" : (x.start ? <Star color="error" /> : <Star />)}

                </ListItemIcon>
                {x.complete ? <ListItemText primary={x.name} style={{ textDecoration: 'line-through', }} /> : <ListItemText primary={x.name} />}

                {x.complete ? "" : <ListItemSecondaryAction onClick={() => deleteTodo(x.id)}>
                  <RemoveIcon />
                </ListItemSecondaryAction>}

              </ListItem>
            ))}
          </List>}
        <div style={{ padding: 16 }}>
          <TextField value={todoName} onChange={e => setTodoName(e.target.value)} placeholder="输入TODO名称" />

          <Button
            color="inherit"
            variant="contained"
            style={{ marginLeft: 25 }}
            onClick={addTodo}
            disabled={todoName.trim() === ''}>添加</Button>
          <br />
          <br />
          <TextField value={searchName} onChange={e => searchtodo(e.target.value)} placeholder="输入搜索关键词" />
        </div>
      </Card>
    </div>
  );
}

export default App;
