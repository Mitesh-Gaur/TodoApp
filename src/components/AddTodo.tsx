import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Stack from 'react-bootstrap/Stack';

function AddTodo({value, onChangeText, onAddClick}: any) {

  return (
    <div className="w-50 mx-auto py-3">
      <Stack direction="horizontal" gap={3}>
        <Form.Control
          className="me-auto"
          placeholder="Add your item here..."
          value={value}
          onChange={onChangeText}
        />
        <Button variant="secondary" onClick={onAddClick}>Add</Button>
      </Stack>
    </div>
  );
}

export default AddTodo;