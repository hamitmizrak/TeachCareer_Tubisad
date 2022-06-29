
import axios from 'axios';

const EMPLOYEE_API_BASE_URL = "/api/v1/employees";

class EmployeeServices {

    //listelemek
    getEmployees() {
        return axios.get(EMPLOYEE_API_BASE_URL);
    }

    //FIND
    getEmployeeById(employeeId) {
        return axios.get(EMPLOYEE_API_BASE_URL + "/" + employeeId);
    }

    //CREATE
    postEmployee(employee) {
        return axios.post(EMPLOYEE_API_BASE_URL, employee);
    }

    //DELETE
    deleteEmployee(employeeId) {
        return axios.delete(EMPLOYEE_API_BASE_URL + "/" + employeeId);
    }

    //UPDATE
    updateEmployee(employee, employeeId) {
        return axios.delete(EMPLOYEE_API_BASE_URL, employee, employeeId);
    }

}
export default new EmployeeServices();