import { useLocation, Link} from "react-router-dom";
import { Button } from "antd";
const Navbar=()=>{
    const location = useLocation();

    return(<>
    <div>
        <h1> Web App "TasteApp"</h1>
        {location.pathname === "/foods" ? (
                        <div >
                            <Button type="primary">

                            <Link type="primary"
                            to={"/addfood"}>
                                add foof +
                            
                            </Link>
                                </Button>
                        </div>
                    ) : null}
        <hr/>
    </div>
    </>);
}
export default Navbar;