import React, {useState} from 'react';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { makeStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';

function App() {
  const [input, setInput] = useState("");
  const [input2, setInput2] = useState("");
  const [input3, setInput3] = useState("");
  const [list, setList] = useState([]);

  const addtoList = () => {
    const todo = {title: input, dueDate: input2, description: input3};
    setList([...list, todo]);
  };
  
  const TodoItem = ({ title, dueDate, description }) => { 
  const [checkedOff, setCheckedOff] = useState(false);
  const [deleted, setDeleted] = useState(false);

    const deleteItem = () => {
      setDeleted(true);
    };
  
    const finishItem = () => {
      setCheckedOff(true);
    };

    const unfinishItem = () => {
      setCheckedOff(false);
    };

    if (checkedOff == false && deleted == false) {
      return (
        <div style={{paddingTop: '30px'}}>
          <Divider />
          <Typography variant="h3" gutterBottom>{title}</Typography>
          <Typography variant="h4" gutterBottom>{dueDate}</Typography>
          <Typography variant="h5" gutterBottom>{description}</Typography>
          <ButtonGroup variant="contained" color="primary" aria-label="contained primary button group">
            <Button
            onClick={deleteItem}>Delete</Button>
            <Button
            onClick={finishItem}>Done</Button>
            <Button
            onClick={unfinishItem}>Not Done</Button>
          </ButtonGroup>
          <Divider />
        </div>
      )
    }

    if (checkedOff == true && deleted == false) {
      return (
        <div style={{paddingTop: '30px'}}>
          <Divider />
          <Typography variant="h3" gutterBottom style={{textDecoration: 'line-through'}}>{title}</Typography>
          <ButtonGroup variant="contained" color="primary" aria-label="contained primary button group">
            <Button style={{backgroundColor: '#1D365F', color: '#FFFFFF'}} 
            onClick={deleteItem}>Delete</Button>
            <Button style={{backgroundColor: '#1D365F', color: '#FFFFFF'}} 
            onClick={finishItem}>Done</Button>
            <Button style={{backgroundColor: '#1D365F', color: '#FFFFFF'}} 
            onClick={unfinishItem}>Not Done</Button>
          </ButtonGroup>
          <Divider />
        </div>
      )
    }

    if (deleted == true) {
      return (
        <div>
        </div>
      )
    }

  };
  
  return (
    <div style={{ textAlign: 'center'}}>
      <Typography variant="h2" gutterBottom>
        Todo List
      </Typography>
      <Input placeholder="What the task?" inputProps={{ 'aria-label': 'description' }} type="text" onChange={(e) => setInput(e.target.value)} />
      <Input placeholder="When is it due?" inputProps={{ 'aria-label': 'description' }} type="text" onChange={(e) => setInput2(e.target.value)} />
      <Input placeholder="Task Notes" inputProps={{ 'aria-label': 'description' }} type="text" onChange={(e) => setInput3(e.target.value)} />
      <Button variant="contained" color="secondary" 
      onClick={() => addtoList()}>Add Task</Button>
      {list.map((todo) => (
        <TodoItem 
        title={todo.title} 
        dueDate={todo.dueDate} 
        description={todo.description} />)
        )}
        
    </div>
  );
};

export default App;
