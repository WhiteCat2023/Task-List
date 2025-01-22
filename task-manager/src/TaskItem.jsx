export default function TaskItem({task}) {
  return (
    <div className="px-4 w-52 md:w-96 h-56 cursor-pointer border flex-grow-1">
        <h1 className="font-bold py-4">{task.title} {task.completed ? <span className="text-green-600">Completed</span>: <span className="text-gray-400">Pending</span>}</h1>
        <hr />
        <p className="mt-2">{task.description}</p>
    </div>
  )
}
