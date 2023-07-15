import { Link } from "react-router-dom";
import "../styles/Menu.css"
import { AppBar, Toolbar, Button } from "@mui/material";

export const Menu = () => {
  return (
    <AppBar position="static">
      <Toolbar  className="toolBar">
        
        <Button component={Link} to="/reactPages/sessions" color="inherit">
          Schedule
        </Button>
        <Button component={Link} to="/reactPages/climateFresk" color="inherit">
          Workshops
        </Button>
        <Button component={Link} to="/reactPages/facilitating" color="inherit">
          Facilitating
        </Button>
      </Toolbar>
    </AppBar>
  );
}