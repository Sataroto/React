const Error = ({children}) => {
    return (
    <div className=' bg-red-800 p-3 mb-3 rounded-lg uppercase font-bold  text-white text-center'>
        <p> {children} </p>
        </div>);
}

export default Error;