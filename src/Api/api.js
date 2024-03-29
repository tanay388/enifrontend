import axios from "axios"
import { adminUrl } from "../Assets/Constants/Constants";

export const verifyAdminUserLogin = async (userData) => {
  let response = 201;
  const url = adminUrl + "/verifyUserToken";
  // await axios.post(url, userData).then((res) => {
  //     // response = res.data._id;
  //     console.log(res)
  // })
  // .catch((e) =>{
  //     console.log(e)
  // })

  return response;
};

export const callEmployeesList = async () => {
  let response = [];
  const url = adminUrl + "/allEmploy";
  await axios
    .get(url, {
      method: "HEAD",
      mode: "no-cors",
    })
    .then((res) => {
      // console.log(res.data);
      response = [...res.data];
    })
    .catch((err) => {
      console.log(err);
    });

  return response;
};

export const callAdminList = async () => {
    
    let response = [];
    const url= adminUrl + "/allAdmin";
    await axios.get(url).then((res) => {
        // console.log(res.data);
        response = [...res.data]
    }).catch((err) => {
        console.log(err)
    })

    return response
}

export const updateEmployee = async (empId, userData) => {
    let response = 201;
    const url= adminUrl + "/editEmploy/" + empId;
    await axios.put(url, userData).then((res) => {
        response = res.status;
        console.log(res)
    })
    .catch((e) =>{
        console.log(e)
    })

    return response
}

export const updateSchedulefromID = async (scheduleId, userData) => {
    let response = 201;
    const url= adminUrl + "/editSchedule/" + scheduleId;
    await axios.put(url, userData).then((res) => {
        response = res.status;
        console.log(res)
    })
    .catch((e) =>{
        console.log(e)
    })

    return response
}

export const addNewEmployee = async (userData) => {
    let response = 201;
    const url= adminUrl + "/newEmploy";
    await axios.post(url, userData).then((res) => {
        response = res.data._id;
        console.log(response)
    })
    .catch((e) =>{
        console.log(e)
    })

    return response
}


export const addNewAdmin = async (userData) => {
    let response = 201;
    const url= adminUrl + "/register";
    await axios.post(url, userData).then((res) => {
        response = res.status;
        console.log(response)
    })
    .catch((e) =>{
        console.log(e)
    })

    return response
}

export const loginAdmin = async (userData) => {
    let response = 201;
    const url= adminUrl + "/newEmploy";
    await axios.post(url, userData).then((res) => {
        response = res.data._id;
        console.log(response)
    })
    .catch((e) =>{
        console.log(e)
    })

    return response
}

export const changePasswordAdmin = async (userData) => {
    let response = 201;
    const url= adminUrl + "/changePassword";
    await axios.put(url, userData).then((res) => {
        response = res.status;
        // console.log(res)
    })
    .catch((e) =>{
        console.log(e)
    })

    return response
}

export const deleteEmployeeID = async (EmpID) => {
    let response = 201;
    const url= adminUrl + "/delete/" + EmpID;
    await axios.delete(url).then((res) => {
        response = res.status;
    })
    .catch((e) =>{
        console.log(e)
    })

    return response
}


export const getByEmployeeID = async (EmpID) => {
    let response = {};
    const url= adminUrl + "/Employ/" + EmpID;
    await axios.get(url).then((res) => {
        response = res;
        // console.log(response)
    })
    .catch((e) =>{
        console.log(e)
    })

    return response
}

export const getScheduleByDate = async (date) => {
    let response = [];
    const url= adminUrl + "/dateSchedule/" + date;
    await axios.get(url).then((res) => {
        response = res.data;
        // console.log(res.data)
    })
    .catch((e) =>{
        console.log(e)
    })

    return response
}


export const getPresentScheduleByID = async (id) => {
    let response = [];
    const url= adminUrl + "/idPresentSchedule/" + id;
    await axios.get(url).then((res) => {
        response = res.data;
        // console.log(res.data)
    })
    .catch((e) =>{
        console.log(e)
    })

    return response
}

export const getAllPresentSchedule = async () => {
    let response = [];
    const url= adminUrl + "/allPresentSchedule";
    await axios.get(url).then((res) => {
        response = res.data;
        // console.log(res.data)
    })
    .catch((e) =>{
        console.log(e)
    })

    return response
}

export const addNewSchedule = async (userData) => {
    let response = 201;
    const url= adminUrl + "/addSchedule";
    await axios.post(url, userData).then((res) => {
        response = res;
        // console.log(response)
    })
    .catch((e) =>{
        console.log(e)
    })

    return response
}

export const deleteScheuleById = async (id) => {
    let response = 201;
    const url= adminUrl + "/deleteSchedule/" + id;
    await axios.delete(url).then((res) => {
        response = res;
        console.log(response)
    })
    .catch((e) =>{
        console.log(e)
    })

    return response
}


export const getAllAttendenceOfMonth = async (date) => {
    let response = [];
    const url= adminUrl + "/excelattendence/" + date;
    await axios.get(url).then((res) => {
        response = res.data;
        // console.log(res.data)
    })
    .catch((e) =>{
        console.log(e)
    })

    return response
}

export const getDashboardData = async (date) => {
    let response = [];
    const url= adminUrl + "/getDashboardData";
    await axios.get(url).then((res) => {
        response = res.data;
        // console.log(res.data)
    })
    .catch((e) =>{
        console.log(e)
    })

    return response
}


export const verifyUserToken = async (userData) => {
    let response = 402;
    const url= adminUrl + "/verifyUserToken";
    const data = {
        "token": userData
    }
    await axios.post(url, data).then((res) => {
        response = res.status;
        // console.log(response)
    })
    .catch((e) =>{
        console.log(e)
        response = e.response.status;

    })

    return response
}