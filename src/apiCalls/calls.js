import axios from "axios";
import * as GLOBAL_CONSTANTS from "../globalConstants";
export const GET_ADMIN_DATA = function getUserDemographicInfo(info) {
    return new Promise((resolve, reject) => {
      axios({
        method: SYSTEM_CONST.METHOD.GET,
        url: GLOBAL_CONSTANTS.fetchAdmin,
        headers: {
          "content-type": "application/json",
        },
        params: params
      })
        .then(function(response) {
            resolve(response);
        })
        .catch((err)=>{
          reject(err);
        });
    });
  };
  export const GET_DEPARTMENT_DATA = function getUserDemographicInfo(info) {
    return new Promise((resolve, reject) => {
      axios({
        method: SYSTEM_CONST.METHOD.GET,
        url: GLOBAL_CONSTANTS.fetchDepartments,
        headers: {
          "content-type": "application/json",
        },
        params: params
      })
        .then(function(response) {
            resolve(response);
        })
        .catch((err)=>{
          reject(err);
        });
    });
  };
  export const GET_EMPLOYEE_DATA = function getUserDemographicInfo(info) {
    return new Promise((resolve, reject) => {
      axios({
        method: SYSTEM_CONST.METHOD.GET,
        url: GLOBAL_CONSTANTS.fetchEmployees,
        headers: {
          "content-type": "application/json",
        },
        params: params
      })
        .then(function(response) {
            resolve(response);
        })
        .catch((err)=>{
          reject(err);
        });
    });
  };