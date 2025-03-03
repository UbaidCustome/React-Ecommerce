import React, { useState } from 'react'
import { api, apitoken } from '../../common/http';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import Sidebar from '../../common/Sidebar';
import { toast } from 'react-toastify';
import AdminLayout from '../AdminLayout';

const Edit = () => {
    const token = apitoken();
    const navigate = useNavigate();
    const [disable, setDisable] = useState(false);
    const [brand, setBrand] = useState([]);
    const params = useParams();
    const { register, handleSubmit, watch,reset, formState: { errors } } = useForm({
        defaultValues: async ()=>{
            try {
                const response = await fetch(`${api}/admin/brands/${params.id}`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json',
                        'Authorization': `Bearer ${token}`
                    },
                })
                .then(response => response.json())
                .then(data => {
                    if(data.status == 1) {
                        setBrand(data.data)
                        reset({
                            name:data.data.name,
                            status:data.data.status
                        })
                    }
                    else{
                        toast.error(data.message);
                    }
                });
                
            } catch (error) {
                console.error("Error fetching brand:", error);
            }            
        }
    });
    const updateBrand = async(data) =>{
        const formattedData = {
            ...data,
            status: parseInt(data.status)  // ✅ Ensure status is a number
        };
        console.log("Submitting Data:", formattedData);  // ✅ Debugging
        setDisable(true)
        // console.log(data)
        try {
            const response = await fetch(`${api}/admin/brands/${params.id}`, {
                method: 'PUT',
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
            console.error("Error updating brand:", error);
        }        
    }
    return (
        <AdminLayout>
            <div className='container'>
                <div className='row'>
                    <div className='d-flex justify-content-between mt-5 pb-3'>
                        <h3 className='pb-0 mb-0'>Edit Data</h3>
                        <Link to='/admin/brands' className='btn btn-primary'>Back</Link>
                    </div>
                    <div className='col-md-3'>
                        <Sidebar/>
                    </div>
                    <div className='col-md-9'>
                        <form onSubmit={handleSubmit(updateBrand)}>
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

export default Edit