import React, { useState } from 'react'
import { api, apitoken } from '../../common/http';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import Sidebar from '../../common/Sidebar';
import { toast } from 'react-toastify';
import AdminLayout from '../AdminLayout';

const Create = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const token = apitoken();
    const navigate = useNavigate();
    const [disable, setDisable] = useState(false);
    const saveBrand = async(data) =>{
        const formattedData = {
            ...data,
            status: parseInt(data.status)  // ✅ Ensure status is a number
        };
        console.log("Submitting Data:", formattedData);  // ✅ Debugging
        setDisable(true)
        // console.log(data)
        try {
            const response = await fetch(`${api}/admin/brands`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body:JSON.stringify(formattedData)
            }).then(response => response.json())
            .then(data => {
                if(data.status == 1) {
                    setDisable(false);
                    toast.success(data.message)
                    navigate('/admin/brands')
                }
                else{
                    toast.error(data.message);
                }
            });
            
        } catch (error) {
            console.error("Error creating brand:", error);
        }        
    }
  return (
    <AdminLayout>
        <div className='container'>
            <div className='row'>
            <div className='d-flex justify-content-between mt-5 pb-3'>
                <h3 className='pb-0 mb-0'>Add Data</h3>
                <Link to='/admin/brands' className='btn btn-secondary'>Back</Link>
            </div>
            <div className='col-md-3'>
                <Sidebar/>
            </div>
            <div className='col-md-9'>
                <form onSubmit={handleSubmit(saveBrand)}>
                    <div className='card shadow'>
                        <div className='card-body p-4'>
                            <div className='mb-3'>
                                <label htmlFor='' className='form-label'>Name</label>
                                <input {...register('name',{
                                    required:'Name field is requried'
                                })} 
                                type="text" className={`form-control ${errors.name ? 'is-invalid' : ''}`}  />
                                {
                                    errors.name && <div className='invalid-feedback'>{errors.name.message}</div>
                                }                            
                            </div>
                            <div className='mb-3'>
                                <label htmlFor='' className='form-label'>Status</label>
                                <select {...register('status',{
                                    required:'Please Select One Option'
                                })}
                                className={`form-control ${errors.status ? 'is-invalid' : ''}`}>
                                    <option value="">Please Select</option>
                                    <option value="0">Block</option>
                                    <option value="1">Active</option>
                                </select>
                                {
                                    errors.status && <div className='invalid-feedback'>{errors.status.message}</div>
                                }                                
                            </div>
                        </div>
                    </div>
                    <button disabled={disable} className='btn btn-primary mt-3'>Submit</button>
                </form>
            </div>
            </div>
        </div>
    </AdminLayout>
  )
}

export default Create