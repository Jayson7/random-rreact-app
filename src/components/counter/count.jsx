import React from 'react'
import { Button } from 'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment, reset } from '../redux/actions/changeCount'
import counterReducer from '../redux/reducers/addCounter'
function Counter() {
  const counter = useSelector((state) => state)

  const dispatch = useDispatch()
  return (
    <div>
      <div className="container ">
        <div className="text-center my-5  ">
          <h1>Count: </h1>
          <h1>{counter}</h1>

          <Button
            className="m-2"
            btn
            btn-info
            onClick={() => dispatch(increment())}
          >
            Increase
          </Button>
          <Button
            variant="danger"
            className="m-2"
            onClick={() => dispatch(reset())}
          >
            Reset
          </Button>
          <Button className="m-2" onClick={() => dispatch(decrement())}>
            Decrease
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Counter
