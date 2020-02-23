import axios from "axios";
import * as GLOBAL_CONSTANTS from "../globalConstants";
export function GET_ADMIN_DATA() {
    return new Promise((resolve, reject) => {
      axios({
        method: "get",
        url: GLOBAL_CONSTANTS.fetchAdmin,
        headers: {
          "content-type": "application/json",
        },
       
      })
        .then(function(response) {
            resolve(response.data);
        })
        .catch((err)=>{
          reject(err);
        });
    });
  }
  export function GET_DEPARTMENT_DATA(){
    return new Promise((resolve, reject) => {
      axios({
        method: "get",
        url: GLOBAL_CONSTANTS.fetchDepartments,
        headers: {
          "content-type": "application/json",
        },
  
      })
        .then(function(response) {
            resolve(response);
        })
        .catch((err)=>{
          reject(err);
        });
    });
  }
  export function GET_EMPLOYEE_DATA(){
    return new Promise((resolve, reject) => {
      axios({
        method: "get",
        url: GLOBAL_CONSTANTS.fetchEmployees,
        headers: {
          "content-type": "application/json",
        },
       
      })
        .then(function(response) {
            resolve(response);
        })
        .catch((err)=>{
          reject(err);
        });
    });
  }