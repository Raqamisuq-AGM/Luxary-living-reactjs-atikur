import { Container } from '@mui/material'
import React from 'react'
// import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'

function FormCon() {
    const { register, handleSubmit, formState: { errors } } = useForm()
    const onSubmit = (data) => console.log(data)

    return (
        <div className='mb-5'>
            <div className='become_'>
                <Container ><h2 className='protection text-left'>BECOME A DEALER</h2></Container>
            </div>
            <Container className='pt-5 form_con '>
                <div className='input-main'>
                <p className='mt-5 text_small'>Please complete the form below to open an account, subject to checks and approval.</p>
                <p className='text_small'>A member of our team will be in touch with you shortly, but if you have any questions please contact us on 0208 332 0121 or info@metatrak.co.uk.</p>
                <p className='text_small'>Unrivalled hardware. Smaller. Smarter. Easier to install. Quick and easy commissioning, 24/7 online and via app.</p>
                <form onSubmit={handleSubmit(onSubmit)} className=' '>
                    <label className='label_' >Full company name for credit card account application * </label><br/>
                    <input className='input' {...register("firstName")} />
                    <p>{errors.firstName?.message}</p>

                    <label className='label_'>Trading as *  </label><br/>
                    <input className='input' {...register("firstName")} />
                    <p>{errors.firstName?.message}</p>
 
                    <div className='d-flex justify_c'>
                    <div className='w-49'>
                    <label className='label_'>VAT number * </label><br/>
                    <input className='input' {...register("firstName")} />
                    <p>{errors.firstName?.message}</p>
                    </div>

                    <div className='w-49'>
                    <label className='label_'>Reg number *</label><br/>
                    <input className='input' {...register("firstName")} />
                    <p>{errors.firstName?.message}</p>
                    </div>
                    </div>

                    <label className='label_'>Type of business * </label><br/>
                    <select {...register("gender")} className='input'>
                        <option value="female">female</option>
                        <option value="male">male</option>
                        <option value="other">other</option>
                    </select>
                    <p>{errors.firstName?.message}</p>

                    <div className='d-flex justify_c'>
                    <div className='w-49'>
                    <label className='label_'>First name * </label><br/>
                    <input className='input' {...register("firstName")} />
                    <p>{errors.firstName?.message}</p>
                    </div>

                    <div className='w-49'>
                    <label className='label_'>Last name * </label><br/>
                    <input className='input' {...register("firstName")} />
                    <p>{errors.firstName?.message}</p>
                    </div>
                    </div>

                    <label className='label_'>Email *</label><br/>
                    <input className='input' {...register("firstName")} />
                    <p>{errors.firstName?.message}</p>

                    <label className='label_'>Phone number *</label><br/>
                    <input className='input' {...register("firstName")} />
                    <p>{errors.firstName?.message}</p>

                    <label className='label_'>Address *</label><br/>
                    <input className='input' {...register("firstName")} />
                    <p>{errors.firstName?.message}</p>

                    <div className='d-flex justify_c'>
                    <div className='w-49'>
                    <label className='label_'>City *</label><br/>
                    <input className='input' {...register("firstName")} />
                    <p>{errors.firstName?.message}</p>
                    </div>

                    <div className='w-49'>
                    <label className='label_'>Postcode * </label><br/>
                    <input className='input' {...register("firstName")} />
                    <p>{errors.firstName?.message}</p>
                    </div>
                    </div>

                    <label className='label_'>Delivery address (if different) </label><br/>
                    <input className='input' {...register("firstName")} />
                    <p>{errors.firstName?.message}</p>

                    <div className='d-flex justify_c'>
                    <div className='w-49'>
                    <label className='label_'>City</label><br/>
                    <input className='input' {...register("firstName")} />
                    <p>{errors.firstName?.message}</p>
                    </div>

                    <div className='w-49'>
                    <label className='label_'>Postcode </label><br/>
                    <input className='input' {...register("firstName")} />
                    <p>{errors.firstName?.message}</p>
                    </div>
                    </div>

                    <div className='mt-2'>
                        <label className='label_'>Are you selling tracking solutions at the moment? *</label><br />
                        <label>
                            <input type="radio" className="me-2" value="Google Search" {...register("howHeard")} />
                           Yes
                        </label><br />
                        <label>
                            <input type="radio" className="me-2" value="Social Media" {...register("howHeard")} />
                           No
                        </label><br /> 
                    </div>

                    <div className='mt-2'>
                        <label className='label_'>How did you hear about Meta Trak? *</label><br />
                        <label>
                            <input type="radio" className="me-2" value="Google Search" {...register("howHeard")} />
                            Google Search
                        </label><br />
                        <label>
                            <input type="radio" className="me-2" value="Social Media" {...register("howHeard")} />
                            Social Media
                        </label><br />
                        <label>
                            <input type="radio" className="me-2" value="Friend or Colleague" {...register("howHeard")} />
                            Friend or Colleague
                        </label><br />
                        <label>
                            <input type="radio" className="me-2" value="Advertising" {...register("howHeard")} />
                            Advertising
                        </label><br />
                        <label>
                            <input type="radio" className="me-2" value="Other" {...register("howHeard")} />
                            Other
                        </label><br />
                    </div>

                    <div className='mt-2'>
                        <label className='label_'>Are you interested in an account with credit facilities? *</label><br />
                        <label>
                            <input type="radio" className="me-2" value="Google Search" {...register("howHeard")} />
                           Yes
                        </label><br />
                        <label>
                            <input type="radio" className="me-2" value="Social Media" {...register("howHeard")} />
                           No
                        </label><br /> 
                    </div>

                    <label className='mt-3 display_f_c'>
                            <input type="checkbox" className="me-2 checkbox" value="Google Search" {...register("howHeard")} />
                            I would like to hear from Meta Trak with relevant product and service updates
                        </label> 

                        <label className='display_f_c mt-1'>
                            <input type="checkbox" className="me-2 checkbox" value="Google Search" {...register("howHeard")} />
                            I have read and understood your<Link className='ms-1 link_1'> terms and conditions of sale</Link>
                        </label> 

                    
                    <input className='input-submit mt-4' type="submit" />
                </form>
                </div>
            </Container>
        </div>
    )
}

export default FormCon
