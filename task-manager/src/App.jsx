import TaskManager from "./TaskManager";

export default function App() {

  const tasks = [
    { id: 1, title: 'Foundation', description: 'Apply foundation for an even skin tone.', completed: false },
    { id: 2, title: 'Concealer', description: 'Use concealer to cover blemishes and dark circles.', completed: false },
    { id: 3, title: 'Blush', description: 'Add blush to the cheeks for a healthy glow.', completed: true },
    { id: 4, title: 'Eyeshadow', description: 'Apply eyeshadow to enhance the eyes.', completed: false },
    { id: 5, title: 'Eyeliner', description: 'Use eyeliner to define the eyes.', completed: true },
    { id: 6, title: 'Mascara', description: 'Apply mascara to make lashes look longer and fuller.', completed: false },
    { id: 7, title: 'Lipstick', description: 'Finish with lipstick for a pop of color on the lips.', completed: false },
    { id: 8, title: 'Setting Spray', description: 'Use setting spray to keep makeup in place all day.', completed: true },
  ];

  return (
    <>
      <nav className="p-4">
        <h1 className="text-xl font-bold">Task Manager</h1>
      </nav>
      <div className="lg:p-4 container mx-auto mt-4">
        <TaskManager tasks={tasks}/>
      </div>
      <footer className="text-center text-white bg-black p-4 mt-10">Made by Berndt Dennis F. Canaya &copy; 2025</footer>
    </>
  )
}

