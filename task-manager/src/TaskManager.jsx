import TaskItem from "./TaskItem";

export default function TaskManager({tasks}) {
  return (
    <>
        <div className="w-full">
            <ul className="flex flex-wrap gap-2 lg:gap-4 justify-center">
                {tasks.map(task => (
                    <TaskItem key={task.id} task={task}/>
                ))}
            </ul>
        </div>
    </>
  )
}
