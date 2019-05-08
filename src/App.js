import React from 'react';
import SayHello from './SayHello';
import TaskList from './TaskList';
import DisplayRandomNumber from './DisplayRandomNumber';

function App() {
  return <TaskList />;
  /*
  const names = ['Ken', 'Mark'];
  const namesList =
    names.map((name, idx) =>
        <SayHello key={idx} name={name} />);
  return (
    <div>
      <DisplayRandomNumber class="bigNumber" number={2342.34} />
      <h1 className="bigNumber">Greetings!</h1>
      {namesList}
    </div>
  );
  */
}

export default App;
