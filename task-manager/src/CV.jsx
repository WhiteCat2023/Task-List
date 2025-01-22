import { BiChevronLeft } from "react-icons/bi"

export default function CV({isOpen, onClose, task}) {
  return (
    <div className="h-full px-6" style={{display: isOpen ? 'block': 'none'}}>
        <div onClick={onClose} className="flex items-center"><BiChevronLeft /><span>Back</span></div>
        <div className="container mx-auto px-0 lg:px-24">
            <h1 className="py-4 font-bold text-xl">{task.title}</h1>
            <hr />
            <p className="py-3">{task.description}</p>
        </div>
    </div>
  )
}