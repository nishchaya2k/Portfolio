import React from 'react'
import { send } from "emailjs-com"            //to emails
import { useForm } from "react-hook-form"   //use for form validation
import { ToastContainer, toast } from "react-toastify"     //for pop up of submission
import "react-toastify/dist/ReactToastify.css"

const MessageForm = () => {

    const { register, handleSubmit, formState: { errors }, } = useForm();

    const onSubmit = (data) => {
        send("service_6dyrpgh", "template_8pk2zfn", data, "ENlBoz9fOEIZ13Cwb")
            .then((response) => {
                console.log("SUCCESS!", response.status, response.text);
                formSuccess();
            })
            .catch((err) => {
                console.log("FAILED...", err);
            });
    };

    const formSuccess = () => {
        toast("Thanks for submitting your Query!");
        document.getElementById("queryForm").reset();
    };
    //mr-auto
    return (
        <div className="xl:ml-28 box-border border-t-2 w-full p-8 md:px-12 lg:w-8/12 lg:pl-20 xl:pr-40 rounded-2xl shadow-2xl">


            <div className=' w-[90%] h-full'>
                <div className="tracking-wide uppercase text-2xl font-black mb-6 inline-block">SEND ME A {" "}
                    <br className='max-sm:hidden' />MESSAGE </div>
                <ToastContainer />


                <form id="queryForm" onSubmit={handleSubmit(onSubmit)} className='flex flex-wrap gap-5 w-full'>

                    <div className='flex flex-col w-[calc(50%-10px)] '>
                        <input
                            className=" bg-gray-100 p-2 py-3 rounded-lg"
                            type="text"
                            name="from_name"   //field name
                            placeholder="First Name*"
                            {...register("from_name", {  //way to add validation
                                required: "*Name is required",
                            })}

                        />
                        {errors.from_name?.message && (
                            <p className="text-gray-800 text-[13px]">{errors.from_name?.message}</p> //from_name is name we have given
                        )}
                    </div>

                    <div className='flex flex-col w-[calc(50%-10px)]'>
                        <input
                            className=" bg-gray-100 p-2 py-3 rounded-lg"
                            type="text"
                            name="reply_to"     //field name
                            placeholder="Email*"
                            {...register("reply_to", {
                                required: "*Email is required",
                                pattern: {
                                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                    message: "*Invalid email address",
                                },
                            })}
                        />
                        {errors.reply_to?.message && (
                            <p className="text-gray-800 text-[13px]">{errors.reply_to?.message}</p>
                        )}
                    </div>

                    <div className='flex flex-col w-full'>
                        <textarea

                            className="h-32 bg-gray-100 text-[#333] mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                            name="message"
                            placeholder="Message*"
                            {...register("message", {
                                required: "*Message is required",
                                minLength: {
                                    value: 20,
                                    message: "*Minimum 20 characters required",
                                },
                                maxLength: {
                                    value: 500,
                                    message: "*Maximum 500 characters allowed",
                                },
                            })}
                        />
                        {errors.message?.message && (
                            <p className="text-gray-800 text-[13px]">{errors.message?.message}</p>
                        )}
                    </div>

                    <button className='bg-[#54CA95] hover:bg-green-400 p-2 px-8 font-semibold rounded-md mt-2' type="submit">Send</button>
                </form>
            </div>
        </div>
    )
}

export default MessageForm























// import React from 'react'
// import { send } from "emailjs-com"            //to emails
// import { useForm } from "react-hook-form"   //use for form validation
// import { ToastContainer, toast } from "react-toastify"     //for pop up of submission
// import "react-toastify/dist/ReactToastify.css"

// const MessageForm = () => {

//     const { register, handleSubmit, formState: { errors }, } = useForm();

//     const onSubmit = (data) => {
//         send("service_6dyrpgh", "template_8pk2zfn", data, "ENlBoz9fOEIZ13Cwb")
//             .then((response) => {
//                 console.log("SUCCESS!", response.status, response.text);
//                 formSuccess();
//             })
//             .catch((err) => {
//                 console.log("FAILED...", err);
//             });
//     };

//     const formSuccess = () => {
//         toast("Thanks for submitting your Query!");
//         document.getElementById("queryForm").reset();
//     };

//     return (
//         <div className="border-2 w-full p-8 my-4 md:px-12 lg:w-8/12 lg:pl-20 lg:pr-40 mr-auto rounded-2xl shadow-2xl" style={{ fontfamily: 'Poppins,sans-serif' }}>


//             <div className='border-2 w-[90%]'>
//                 <h1 className="font-bold uppercase text-4xl inline-block">SEND ME
//                     <br className='max-sm:hidden' />MESSAGE </h1>
//                 <ToastContainer />


//                 <form id="queryForm" onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-3 border-2 w-full'>
//                     <div className='flex gap-6'>
//                         <div className='flex flex-col w-[50%]'>
//                             <input
//                                 className=" bg-gray-100 p-2 py-3 rounded-lg"
//                                 type="text"
//                                 name="from_name"   //field name
//                                 placeholder="First Name*"
//                                 {...register("from_name", {  //way to add validation
//                                     required: "Name is required",
//                                 })}

//                             />
//                             {errors.from_name?.message && (
//                                 <p className="errors">{errors.from_name?.message}</p> //from_name is name we have given
//                             )}
//                         </div>

//                         <div className='flex flex-col  w-[50%]'>
//                             <input
//                                 className=" bg-gray-100 p-2 py-3 rounded-lg "
//                                 type="text"
//                                 name="reply_to"     //field name
//                                 placeholder="Email*"
//                                 {...register("reply_to", {
//                                     required: "Email is required",
//                                     pattern: {
//                                         value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
//                                         message: "Invalid email address",
//                                     },
//                                 })}
//                             />
//                             {errors.reply_to?.message && (
//                                 <p className="errors">{errors.reply_to?.message}</p>
//                             )}
//                         </div>
//                     </div>
//                     <div className='w-full'>
//                         <textarea

//                             className="w-full h-32 bg-gray-100 text-[#333] mt-2 p-3  rounded-lg focus:outline-none focus:shadow-outline"
//                             name="message"
//                             placeholder="Message*"
//                             {...register("message", {
//                                 required: "Message is required",
//                                 minLength: {
//                                     value: 20,
//                                     message: "Minimum 20 characters required",
//                                 },
//                                 maxLength: {
//                                     value: 500,
//                                     message: "Maximum 500 characters allowed",
//                                 },
//                             })}
//                         />
//                         {errors.message?.message && (
//                             <p className="text-[18px] font-normal leading-6">{errors.message?.message}</p>
//                         )}
//                     </div>
//                     <button type="submit">Submit</button>
//                 </form>
//             </div>
//         </div>
//     )
// }

// export default MessageForm


//for form submission we used emailjs to accept query
//react-hook-form
//react-toastify
//ToastContainer is a component that renders toast notifications in React apps. 