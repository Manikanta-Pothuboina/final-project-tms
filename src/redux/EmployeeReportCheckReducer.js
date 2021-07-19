import axios from "axios";

const initState = {
  employeeReportCheck: [],
  progress: false,
};

const EMPLOYEE_REPORT_GET_ALL_ACTION_TYPE = "EMPLOYEE_REPORT_GET_ALL_ACTION_TYPE";

// ACTIONS
export const getEmployeeReportAction = (payload) => {
  return async (dispatch) => {
    // API CALL :: FETCH RECORDS
    const id=localStorage.getItem("empId");
    
    const url = `http://localhost:8080/api/v1/report/${id}`;
    const response = await axios.get(url);

    console.log(response.data);

    // UI UPDATE
    dispatch({
      type: EMPLOYEE_REPORT_GET_ALL_ACTION_TYPE,
      payload: response.data,
    });
  };
};

export function EmployeeReportCheckReducer(state = initState, action) {
  switch (action.type) {
    case EMPLOYEE_REPORT_GET_ALL_ACTION_TYPE:
      return { ...state, employeeReportCheck: action.payload };
    default:
      return state;
  }
}