export default function TabButton ({children}){
    function response(){
        console.log(`You clicked on ${children}`);
    }
    return (
        <li onClick={response}>
        <button>
            {children}
        </button>
        </li>
    )   
};