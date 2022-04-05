import { useEffect, useState } from 'react'
import Form from './components/Form'
import List from './components/List'
import todos from './apis/index'

const apptitle = 'TO-DO-APP'

function App() {

  const [todoList, setTodoList] = useState([]);

  useEffect(() => {
    async function fetchData() {
        const { data } = await todos.get("/todos");
        setTodoList(data);
    }
    fetchData();
  }, []);

  const addTodo = async (item) => {
    const { data } = await todos.post("/todos/new", item);
    setTodoList((oldlist) => [...oldlist, data]);
  };

  const removeTodo = async (id) => {
    await todos.delete(`/todos/${id}`);
    setTodoList((oldlist)=> oldlist.filter((item)=> item._id !== id))
  };

  const editTodo = async (id, item) => {
    await todos.put(`/todos/${id}`, item);
  };

  return (
    <div className='p-11 w-full'>
      <section className='flex flex-col items-center'>
        <h1>{apptitle}</h1>
        <Form addTodo={addTodo}/>
      </section>
      <section className='w-1/4 m-auto'>
        <List list={todoList} 
        editTodoListProp={editTodo} 
        removeTodoListProp={removeTodo}/>
      </section>
    </div>
  )
}

export default App


