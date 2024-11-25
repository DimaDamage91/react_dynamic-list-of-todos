import React from 'react';

import { Todo } from '../../types/Todo';
import { User } from '../../types/User';


type Props = {
  todo: Todo;
  user: User;
  onClose: () => void;
};

export const TodoModal: React.FC<Props> = ({ todo, user, onClose }) => {
  return (
    <div className="modal is-active" data-cy="modal">
      <div className="modal-background" />

        <div className="modal-card">
          <header className="modal-card-head">
            <div
              className="modal-card-title has-text-weight-medium"
              data-cy="modal-header"
            >
              {todo.id}
            </div>

            {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
            <button type="button" className="delete" data-cy="modal-close" onClick={onClose}/>
          </header>

          <div className="modal-card-body">
            <p className="block" data-cy="modal-title">
              {todo.title}
            </p>

            <p className="block" data-cy="modal-user">
              {/* <strong className="has-text-success">Done</strong> */}
              <strong className="has-text-danger">{todo.completed ? 'Completed' : 'Active'}</strong>

              {' by '}

              <a href={`mailto:${user?.email}`}>{user?.name}</a>
            </p>
          </div>
          <button onClick={onClose}>Close</button>
        </div>
    </div>
  );
};
