import React from "react";
interface Task {
  id: number;
  title: string;
}
interface ListProps {
  tasks: Task[];
}

export default function List({ tasks }: ListProps) {
  return (
    <>
      {tasks.map((task: Task) => {
        return <div key={task.id}>{task.title}</div>;
      })}
    </>
  );
}
