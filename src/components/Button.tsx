

interface Props{
  title:string;
  className?:string;
}

const Button = ({title, className}:Props) => {
  return (
    <>
      <button className={className}>
        {title}
        </button> 
    </>
  )
}

export default Button