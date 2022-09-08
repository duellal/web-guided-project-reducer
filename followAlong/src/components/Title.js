import React, { useState, useReducer } from 'react';
import { toggleEdit, setTitleText, setTitle } from '../actions/actions';
import { reducer, initialState } from '../reducers/index'

const Title = () => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const handleChanges = e => {
    dispatch(setTitleText(e.target.value))
  };

  const handleEditing = () => {
    dispatch(toggleEdit())
  }

  const handleFormSubmit = () => {
    dispatch(setTitle())
  }

  return (
    <div>
      {!state.editing ? (
        <h1>
          {state.title}{' '}
          <i onClick={handleEditing} className="far fa-edit" />
        </h1>
      ) : (
        <div>
          <input
            className="title-input"
            type="text"
            name="newTitleText"
            value={state.newTitleText}
            onChange={handleChanges}
          />
          <button
            onClick={handleFormSubmit}
          >
            Update title
          </button>
        </div>
      )}
    </div>
  );
};

export default Title;