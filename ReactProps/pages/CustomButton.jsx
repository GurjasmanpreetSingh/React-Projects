

const CustomButton = (props) => {
  return (
    <div>
      <button style={{backgroundColor : props.color}}>
        {props.name}
        
      </button>
    </div>
  )
}

export default CustomButton
