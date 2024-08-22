import { Outlet } from "react-router-dom";
import { Sidenav } from "../Pages/Sidenav/Sidenav";


export function Dashboard (){
    return (
        <div>
            <div className='dashboard'>
                <Sidenav/>
               <div className="outlet">
                <Outlet></Outlet>
               </div>
            </div>
        </div>
    );
};
