import { useParams } from "react-router-dom";


export function Log ()  {
    const { cat} = useParams();

  
  console.log(cat, 'd')

    return (
        <div>
            kkkgggggg
        </div>
    );
};

