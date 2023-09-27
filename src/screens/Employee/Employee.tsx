import { Table, Button } from '@mantine/core'
import React from 'react'
import axios from 'axios'
import { useEffect, useState } from 'react'
import './Employee.css'
function Employee() {
  interface employeedata {
    empid: string
    firstname: string
    lastname: string
    Joiningdate: string
    Releavingdate: string
    gender: string
    maritalstatus: string
    empstatus: string
    empmode: string
    createdon: string
    modifiedon: string
    isactive: boolean
    photo: string
    personalemail: string
    dob: string
    displayname: string
    workmobile: string
    workemail: string
    financialAppraisalCycle: string
    priorExperience: string
    companyname?: any
  }
  interface companyid {
    id: number
  }
  interface company {
    id: number
    name: string
  }

  const [GetData, SetData] = useState<employeedata[]>([])
  const [GetId, SetId] = useState<companyid[]>([])

  useEffect(() => {
    const getdataresponse = async () => {
      try {
        const employeedata = await axios.get(
          'https://localhost:7190/api/Employee/GetAllEmployees'
        )

        const finaldata = []

        for (var i = 0; i < employeedata.data.length; i++) {
          //  console.log(employeedata.data[i])

          var obj = {
            userid: employeedata.data[i].userId,

            empid: employeedata.data[i].empID,

            firstname: employeedata.data[i].firstName,

            lastname: employeedata.data[i].lastName,

            Joiningdate: employeedata.data[i].joiningDate,

            Releavingdate: employeedata.data[i].releavingDate,

            gender: employeedata.data[i].gender,

            maritalstatus: employeedata.data[i].maritalStatus,

            empstatus: employeedata.data[i].empStatus,

            empmode: employeedata.data[i].empMode,

            createdon: employeedata.data[i].createdOn,

            modifiedon: employeedata.data[i].modifiedOn,

            isactive: employeedata.data[i].isActive,

            photo: employeedata.data[i].photo,

            personalemail: employeedata.data[i].personalEmail,

            dob: employeedata.data[i].dateofBirth,

            displayname: employeedata.data[i].displayName,

            workmobile: employeedata.data[i].workMobile,

            workemail: employeedata.data[i].workEmail,

            financialAppraisalCycle: employeedata.data[i].financialAppraisalCycle,
            priorExperience: employeedata.data[i].priorExperience,
            companyid: employeedata.data[i].companyId
          }

          finaldata.push(obj)
        }
        let finalid: companyid[] = []
        for (var j = 0; j < finaldata.length; j++) {
          var final = {
            id: finaldata[j].companyid
          }
          finalid.push(final)
        }
        const uniqueItems: companyid[] = Array.from(
          new Set(finalid.map((item) => item.id))
        ).map((id) => finalid.find((item) => item.id === id) as companyid)

        let finalarray = []
        for (var k = 0; k < uniqueItems.length; k++) {
          var ids = {
            id: uniqueItems[k].id
          }
          const companyid = await axios.post(
            'https://localhost:7190/api/Company/GetCompanyById',
            ids
          )
          finalarray.push(companyid.data)
        }
        let filteredarray: companyid[] = []
        for (var p = 0; p < finalarray.length; p++) {
          var idss = {
            id: finalarray[p][0].id,
            name: finalarray[p][0].name
          }
          filteredarray.push(idss)
        }
        let finalcompany = []
        for (var q = 0; q < filteredarray.length; q++) {
          const final = finaldata.filter(
            (e) => e.companyid === filteredarray[q].id
          )
          if (final.length > 0) {
            final.forEach((item) => {
              item.companyname = filteredarray[q].name
            })
          }
          finalcompany.push(final)
        }
        const flattenedFinalCompany: employeedata[] = finalcompany.flat()

        SetData(flattenedFinalCompany)
      } catch (err) {
        console.error('Error fetching Data:', err)
      }
    }

    getdataresponse()
  })
  const editdata = function (data: any) {
    window.location.href = `/EditEmployee?data=${encodeURIComponent(
      JSON.stringify(data.userid)
    )}`
  }
  const deletedata=function(data:any){
    console.log(data);

    const deleteresponse = async()=>{
      try{
        const deleted = await axios.delete('https://localhost:7190/api/Employee/DeleteEmployee'+data.userid)
        console.log(deleted);
      }catch(err){
        console.error("Error deleting",err);
      }
    }
    deleteresponse();
  }

  return (
    <Table striped withBorder withColumnBorders>
      <thead>
        <tr>
          <th>#</th>
          <th>Login</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Mobile</th>
          <th>Organization</th>
          <th>Roles</th>
          <th colSpan={3} style={{ textAlign: 'center' }}>
            Action
          </th>
        </tr>
      </thead>
      <tbody>
        {GetData.map((x, index) => (
          <tr key={index}>
            <td>{index + 1}</td>
            <td>{x.workemail}</td>
            <td>{x.firstname}</td>
            <td>{x.lastname}</td>
            <td>{x.workmobile}</td>
            <td>{x.companyname}</td>
            <td></td>
            <td style={{ textAlign: 'center' }}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-edit"
                onClick={() => editdata(x)}
                width="24"
                height="24"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M7 7h-1a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-1"></path>
                <path d="M20.385 6.585a2.1 2.1 0 0 0 -2.97 -2.97l-8.415 8.385v3h3l8.385 -8.415z"></path>
                <path d="M16 5l3 3"></path>
              </svg>
            </td>
            <td style={{ textAlign: 'center' }}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-eye"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M10 12a2 2 0 1 0 4 0a2 2 0 0 0 -4 0"></path>
                <path d="M21 12c-2.4 4 -5.4 6 -9 6c-3.6 0 -6.6 -2 -9 -6c2.4 -4 5.4 -6 9 -6c3.6 0 6.6 2 9 6"></path>
              </svg>
            </td>
            <td style={{ textAlign: 'center' }}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-trash"
                onClick={() => deletedata(x)}
                width="24"
                height="24"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M4 7l16 0"></path>
                <path d="M10 11l0 6"></path>
                <path d="M14 11l0 6"></path>
                <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12"></path>
                <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3"></path>
              </svg>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  )
}
export default Employee
