
export default function Button(props) {
  return (
    <button className={`font-medium rounded-xl bg-primary center text-white ${props.className}`}>
        {props.children}

</button>
  )
}
