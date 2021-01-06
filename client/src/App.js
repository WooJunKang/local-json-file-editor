import { useEffect, useState, useReducer } from 'react'
import { Switch, Route } from 'react-router-dom';
import { SelectFile, EditFile } from './pages';
import reducer from './reducer/fetchData';
const BASE_URL = 'http://localhost:8080'

function App() {

  const [state, dispatch] = useReducer(reducer, {
    fileList: [],
    currentFile: null,
    curFileData: {},
    loading: false
  })

  const fetchData = async (url) => {
    dispatch({ type: 'LOADING' })
    try {
      const res = await fetch(url);
      const output = await res.json();
      const key = Object.keys(output)[0];
      const value = output[key];
      console.log('output is', output)
      dispatch({
        type: 'SUCCESS',
        key: key,
        value: value
      })
    } catch (err) {
      console.log(err)
    }
  }

  const onSubmit = (e) => {
    e.preventDefault();
    console.log('submit click!')
    console.log(e.target)


  }

  const onChange = (e) => {
    const { name, value } = e.target;
    dispatch({
      type: 'HANDLE_INPUT_CHANGE',
      key: name,
      value: value
    })

  }

  const handleCurrentFile = (name) => {
    dispatch({
      type: 'SET_CURRENT_FILE',
      value: name
    })
  }

  useEffect(() => {
    fetchData(BASE_URL.concat('/list'));
  }, [])

  useEffect(() => {
    fetchData(BASE_URL.concat('/file/').concat(state.currentFile));
  }, [state.currentFile])

  return (
    <div className="contents-container flex-col-center">

      <Switch>

        <Route exact path='/'>
          <SelectFile fileList={state.fileList} handleCurrentFile={handleCurrentFile} loading={state.loading} />
        </Route>

        <Route path='/edit'>
          <EditFile currentFile={state.currentFile} fileData={state.curFileData} onSubmit={onSubmit} onChange={onChange} />
        </Route>

      </Switch>

    </div>
  );
}

export default App;
