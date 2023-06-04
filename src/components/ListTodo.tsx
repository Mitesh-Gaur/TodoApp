import React, { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';

interface Task {
  taskId?: number | string
  taskName?: string
}

interface Props {
  info?: Task[]
  handleOnChange?: any
  getLabel?: any
}


function ListTodo({ info, handleOnChange, getLabel }: Props) {

  useEffect(() => {
    getData();
  }, [info])

  function getData() {
    localStorage.setItem("todos", JSON.stringify(info));
  }

  return (
    <div className="w-50 mx-auto py-3">
      <Table striped bordered hover className='mt-4'>
        <thead>
          <tr>
            <th>#</th>
            <th>Task Name</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {/* <tr>
            <td>1</td>
            <td>Mark</td>
            <td>Otto</td>
          </tr> */}
          {
            info?.map((item) => {
              return <tr key={item.taskId}>
                <td>{item.taskId}</td>
                <td>{item.taskName}</td>
                <td>
                  <Form.Check
                    type={'checkbox'}
                    onChange={(e)=>handleOnChange(e, item.taskId)}
                    id={`checkbox-${item.taskId}`}
                    label={getLabel(item.taskId)}
                  />
                </td>
              </tr>
            })
          }
        </tbody>
      </Table>
    </div>
  );
}

export default ListTodo;