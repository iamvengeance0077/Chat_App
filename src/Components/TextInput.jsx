

const TextInput = ({type,placeholder,...props}) => {
  return (
    <div>
        <input spellCheck="false" type={type} className="border-b-[1px] h-9 text-[#8F6EB0] rounded-md 
            focus:outline-none w-full px-2" placeholder={placeholder}
            {...props}
            />

    </div>
  )
}

export default TextInput