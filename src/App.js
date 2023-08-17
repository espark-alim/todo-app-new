import logo from './logo.svg';
import './App.css';
import { useState } from "react"
function App() {
  const [text, setText] = useState('')
  const [list, setList] = useState([])
  const handleAdd = () => {
    if (text === "") {
      return null
    }
    else {
      list.push(text)
      setList([...list])
      setText("")
    }
  }
  const handleDelete = () => {
    list.pop()
    setList([...list])
  }
  const handleAllDelete = () => {
    const newArray = list.slice(0, list)
    setList(newArray)
  }

  const handleEdit = (item, i) => {
    setText(list[i])
  }

  const handleSave = (i) => {
    list[i] = text
    console.log(list[i])
    setText("")
  }

  return (

    <div className="container">
      <div className="row p-5 justify-content-center">
        <h3 className='my-4 text-center'>Todo List</h3>
        <div className="col-sm-4 col-md-4 col-lg-3 px-0">
          <div class="input-group mb-3">
            <input
              type="text"
              class="form-control"
              placeholder="Enter Todo"
              aria-label="Username"
              aria-describedby="basic-addon1"
              required="required"
              name={text}
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
          </div>
        </div>
        <div className="col-sm-4 col-md-4 col-lg-3 px-0">
          <button
            type="button"
            class="btn btn-danger"
            onClick={handleAdd}
          >
            Add
          </button>
          <button
            type="button"
            class="btn btn-warning"
            onClick={handleDelete}
          >
            Delete
          </button>
          <button
            type="button"
            class="btn btn-info"
            onClick={handleAllDelete}
          >
            Delete All
          </button>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-sm-4 col-md-4 col-lg-8 px-0">
          <ul class="list-group">
            {list?.map((item, i) => (
              <li class="list-group-item d-flex justify-content-between align-items-center">
                <span>{item}</span>
                <span className='d-flex justify-content-end'>
                  <button type="button" class="btn btn-primary mx-2" onClick={() => handleEdit(item, i)}>Edit</button>
                  <button type="button" class="btn btn-success" onClick={() => handleSave(i)} >Save</button>
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>

  );
}
export default App;
