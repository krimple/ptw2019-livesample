import React, { Component } from 'react';
import TaskItem from './TaskItem';
export default class TaskList extends Component {

  state = {
    tasks: [
      { description: 'Wash the floors', complete: false },
      { description: 'Clean your room', complete: false },
      { description: 'Hang out at the mall', complete: true }
    ]
  };

  render() {
    const taskList = this.state.tasks.map(
      (task, idx) => (
        <TaskItem
          task={task}
          index={idx}
          onCompleteTask={
            (completedIndex) => {
              this.completeTask(completedIndex);
            }
          }
        />
      )
    );

    return (
      <div className="taskList">
        <h2>Task List</h2>
        <hr />
        <ul>
          { taskList }
        </ul>
      </div>
    );
  }

  // arrow method: ensures 'this' is 'TaskList'
  // alternative is
  // this.completeTask = this.completeTask.bind(this);
  completeTask = (idx) => {
    this.setState({
      tasks: this.state.tasks.map((task, targetIdx) => {
        return idx === targetIdx ?
          { ...task, complete: !task.complete }
          :
          task;
      })
    });
  }
}
