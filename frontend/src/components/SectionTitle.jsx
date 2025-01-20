
export default function Sectiontitle(props) {
  return (
    <div className="gap-4 flex items-center">
     <div className="h-10 w-5 bg-primary rounded"></div>   
     <h2 className="font-semibold text-xl text-primary">{props.text}</h2>
    </div>
  )
}
