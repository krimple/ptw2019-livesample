import React from 'react';

const TaskItem = ({task, index, onCompleteTask}) => {
  const checkText = <span>&#10003;</span>;
  return (
    <div onClick={
      () => {
        onCompleteTask(index);
      }
    }>
      {task.complete ? checkText : 'Get it done: '}
      {task.description}
    </div>
  );
}
export default TaskItem;