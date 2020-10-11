import React, {useState} from 'react';

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
        <div style={{border: 'solid'}}>
          <h1>{title}</h1>
          <h2>{dueDate}</h2>
          <h4>{description}</h4>
          <button style={{backgroundColor: '#1D365F', color: '#FFFFFF'}} 
          onClick={deleteItem}>Delete</button>
          <button style={{backgroundColor: '#1D365F', color: '#FFFFFF'}} 
          onClick={finishItem}>Done</button>
          <button style={{backgroundColor: '#1D365F', color: '#FFFFFF'}} 
          onClick={unfinishItem}>Not Done</button>
        </div>
      )
    }

    if (checkedOff == true && deleted == false) {
      return (
        <div style={{border: 'solid'}}>
          <h1 style={{textDecoration: 'line-through'}} >{title}</h1>
          <button style={{backgroundColor: '#1D365F', color: '#FFFFFF'}} 
          onClick={deleteItem}>Delete</button>
          <button style={{backgroundColor: '#1D365F', color: '#FFFFFF'}} 
          onClick={finishItem}>Done</button>
          <button style={{backgroundColor: '#1D365F', color: '#FFFFFF'}} 
          onClick={unfinishItem}>Not Done</button>
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
    <div style={{ textAlign: 'center' }}>
      <h3>What do you need to do?</h3>
      <input type="text" onChange={(e) => setInput(e.target.value)} />
      <h3>When is it due?</h3>
      <input type="text" onChange={(e) => setInput2(e.target.value)} />
      <h3>Task Notes</h3>
      <input type="text" onChange={(e) => setInput3(e.target.value)} />
      <button style={{backgroundColor: '#1D365F', color: '#FFFFFF'}} 
      onClick={() => addtoList()}>Add Task</button>
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
