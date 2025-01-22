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
    { id: 9, title: 'Highlighter', description: 'Apply highlighter to the high points of the face for a radiant glow.', completed: false },
    { id: 10, title: 'Brow Gel', description: 'Use brow gel to set and define your eyebrows.', completed: false },
    { id: 11, title: 'Contour', description: 'Use contour to define the cheekbones and jawline.', completed: false },
    { id: 12, title: 'Lip Liner', description: 'Outline the lips with lip liner for a more defined look.', completed: false },
    { id: 13, title: 'Makeup Remover', description: 'Use makeup remover to cleanse the skin at the end of the day.', completed: true },
    { id: 14, title: 'Face Mask', description: 'Apply a face mask for deep cleansing and hydration.', completed: false },
    { id: 15, title: 'Moisturizer', description: 'Use moisturizer to keep the skin hydrated.', completed: true },
    { id: 16, title: 'Sunscreen', description: 'Apply sunscreen to protect the skin from UV rays.', completed: false },
    { id: 17, title: 'Nail Polish', description: 'Finish your look with a coat of nail polish.', completed: false },
    { id: 18, title: 'Setting Powder', description: 'Use setting powder to mattify the skin and set makeup.', completed: false },
    { id: 19, title: 'False Lashes', description: 'Apply false lashes for added drama and volume.', completed: false },
    { id: 20, title: 'Makeup Brush Cleaning', description: 'Clean your makeup brushes to maintain hygiene.', completed: true },
  ];

  return (
    <>
    <div>
      <nav className="p-4">
        <h1 className="text-xl font-bold">Task Manager</h1>
      </nav>
      <div className="lg:p-4 container mx-auto mt-4 h-full">
        <TaskManager tasks={tasks}/>
      </div>
      <footer className="text-center text-white bg-black p-4 mb-0 mt-4">Made by Berndt Dennis F. Canaya &copy; 2025</footer>
    </div>
    </>
  )
}

