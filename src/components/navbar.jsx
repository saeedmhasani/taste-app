import { useLocation, Link } from "react-router-dom";
import { Button } from "antd";
const Navbar = () => {
    const location = useLocation();

    return (<>
        
            <h1> Web App "TasteApp"</h1>
            
            {location.pathname === "/foods" ? (
                
                    <Button type="primary">

                        <Link type="primary"
                            to={"/addfood"}>
                            add foof +
                        </Link>
                    </Button>
                
            ) : null} 
            
        
    </>);
}
export default Navbar;