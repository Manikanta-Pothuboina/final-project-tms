import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllEmployeeBenchAction } from "../redux/EmployeeBenchReducer";
import { AppNav } from "./AppNav";
import { Nav, Navbar } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import { updateRenderAction } from "../redux/EmployeeReducer";
import logo from "../logo15.png";
import { signOutAction } from "../redux/UserReducer";

export const EmployeeBenchList = () => {
  const signOut = () => {
    // Logical Operation.
    // cookies / sessino are getting removed from the browser
    dispatch(signOutAction());

    // redirect the user to login page.
    history.push("/");
  };
  const clearEmployeeURef = () => {
    dispatch(updateRenderAction({}));
    history.push("/employee-add");
  };

  const clearEmployeeTaskURef = () => {
    dispatch(updateRenderAction({}));
    history.push("/employee-task-add");
  };
  const dispatch = useDispatch();
  const history = useHistory();
  const state = useSelector((state) => state);

  useEffect(() => {
    dispatch(getAllEmployeeBenchAction());
  }, []);

  return (
    <div>
      <div>
        <Navbar
          style={{ "background-color": "black" }}
          bg=""
          variant="dark"
          expand=""
        >
          <img align="left" src={logo} height="5%" width="5%" />

          <div className="form-group d-flex justify-content-end p-1 mb-1 mr-2">
            <div className="dropdown">
              <button className="dropbtn">Task</button>
              <div className="dropdown-content">
                <center>
                  <a>
                    <Nav.Link onClick={clearEmployeeTaskURef}>
                      Employee Task Add
                    </Nav.Link>
                    <Nav.Link as={Link} to="/employee-task-list">
                      Employee Task List
                    </Nav.Link>
                    <Nav.Link as={Link} to="/employee-report-list">
                      Employee Report List
                    </Nav.Link>
                  </a>
                </center>
              </div>
            </div>
          </div>
          <div className="form-group d-flex justify-content-end p-1 mb-1 mr-2">
            <div className="dropdown">
              <button className="dropbtn">REQUESTS</button>
              <div className="dropdown-content">
                <center>
                  <a>
                    <Nav.Link as={Link} to="/employee-request-list">
                      Employee Time Extension Request List
                    </Nav.Link>
                    <Nav.Link as={Link} to="/employee-leave-request-list">
                      Employee Leave Request List
                    </Nav.Link>
                  </a>
                </center>
              </div>
            </div>
          </div>
          <div className="form-group d-flex justify-content-end p-1 mb-1 mr-2">
            <div className="dropdown">
              <button className="dropbtn">EMPLOYEE DETAILS</button>
              <div className="dropdown-content">
                <center>
                  <a>
                    <Nav.Link onClick={clearEmployeeURef}>
                      Employee Add
                    </Nav.Link>
                    <Nav.Link as={Link} to="/employee-list">
                      Employee List
                    </Nav.Link>
                  </a>
                </center>
              </div>
            </div>
          </div>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />

          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link as={Link} to="/admin-list">
                Admin List
              </Nav.Link>

              <Nav.Link as={Link} to="/about-us">
                About Us
              </Nav.Link>

              <Nav.Link onClick={signOut}>Sign Out</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
      <div className="alert alert-secondary mb-0">
        <h3>Bench List</h3>
      </div>

      <table className="table">
        <thead className="thead-dark">
          <tr>
            <th scope="col">Bench Id</th>
            <th scope="col">Employee Id</th>
            <th scope="col">Employee Name</th>
            <th scope="col">Employee Status</th>
          </tr>
        </thead>
        <tbody className="text-light">
          {state.employeeBench.benchList.map((item, index) => (
            <tr key={index}>
              <th scope="row">{item.bid}</th>
              <td>{item.emp.empid}</td>
              <td>{item.emp.firstname}</td>
              <td>{item.empStatus}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};