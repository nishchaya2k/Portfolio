import React, { useState } from 'react'
import { send } from "emailjs-com"
import { useForm } from "react-hook-form"
import { ToastContainer, toast } from "react-toastify"
import { motion } from 'framer-motion'
import { FaPaperPlane, FaSpinner } from 'react-icons/fa'
import "react-toastify/dist/ReactToastify.css"

const MessageForm = () => {
    const [isSubmitting, setIsSubmitting] = useState(false)
    const { register, handleSubmit, formState: { errors }, reset } = useForm()

    const onSubmit = async (data) => {
        setIsSubmitting(true)
        try {
            await send("service_6dyrpgh", "template_8pk2zfn", data, "ENlBoz9fOEIZ13Cwb")
            formSuccess()
            reset()
        } catch (err) {
            console.error("FAILED...", err)
            toast.error("Failed to send message. Please try again.")
        } finally {
            setIsSubmitting(false)
        }
    }

    const formSuccess = () => {
        toast.success("Thanks for your message! I'll get back to you soon.")
    }

    return (
        <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg border border-neutral-100">
            <h3 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-2">
                Send me a message
            </h3>
            <p className="text-neutral-600 mb-8">
                Have a question or want to work together? I'd love to hear from you.
            </p>

            <ToastContainer
                position="top-right"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />

            <form id="queryForm" onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                    <div className="sm:col-span-1">
                        <label htmlFor="from_name" className="block text-sm font-medium text-neutral-700 mb-2">
                            Name <span className="text-red-500">*</span>
                        </label>
                        <input
                            id="from_name"
                            className={`w-full px-4 py-3 rounded-xl border-2 bg-neutral-50 focus:bg-white transition-colors ${
                                errors.from_name
                                    ? 'border-red-300 focus:border-red-500'
                                    : 'border-neutral-200 focus:border-primary-500'
                            } focus:outline-none focus:ring-2 focus:ring-primary-200`}
                            type="text"
                            name="from_name"
                            placeholder="Your name"
                            {...register("from_name", {
                                required: "Name is required",
                                minLength: {
                                    value: 2,
                                    message: "Name must be at least 2 characters",
                                },
                            })}
                            aria-invalid={errors.from_name ? "true" : "false"}
                            aria-describedby={errors.from_name ? "name-error" : undefined}
                        />
                        {errors.from_name && (
                            <p id="name-error" className="mt-1 text-sm text-red-600" role="alert">
                                {errors.from_name.message}
                            </p>
                        )}
                    </div>

                    <div className="sm:col-span-1">
                        <label htmlFor="reply_to" className="block text-sm font-medium text-neutral-700 mb-2">
                            Email <span className="text-red-500">*</span>
                        </label>
                        <input
                            id="reply_to"
                            className={`w-full px-4 py-3 rounded-xl border-2 bg-neutral-50 focus:bg-white transition-colors ${
                                errors.reply_to
                                    ? 'border-red-300 focus:border-red-500'
                                    : 'border-neutral-200 focus:border-primary-500'
                            } focus:outline-none focus:ring-2 focus:ring-primary-200`}
                            type="email"
                            name="reply_to"
                            placeholder="your.email@example.com"
                            {...register("reply_to", {
                                required: "Email is required",
                                pattern: {
                                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                    message: "Invalid email address",
                                },
                            })}
                            aria-invalid={errors.reply_to ? "true" : "false"}
                            aria-describedby={errors.reply_to ? "email-error" : undefined}
                        />
                        {errors.reply_to && (
                            <p id="email-error" className="mt-1 text-sm text-red-600" role="alert">
                                {errors.reply_to.message}
                            </p>
                        )}
                    </div>
                </div>

                <div>
                    <label htmlFor="message" className="block text-sm font-medium text-neutral-700 mb-2">
                        Message <span className="text-red-500">*</span>
                    </label>
                    <textarea
                        id="message"
                        className={`w-full px-4 py-3 rounded-xl border-2 bg-neutral-50 focus:bg-white transition-colors resize-none ${
                            errors.message
                                ? 'border-red-300 focus:border-red-500'
                                : 'border-neutral-200 focus:border-primary-500'
                        } focus:outline-none focus:ring-2 focus:ring-primary-200`}
                        rows="5"
                        name="message"
                        placeholder="Tell me about your project or just say hello..."
                        {...register("message", {
                            required: "Message is required",
                            minLength: {
                                value: 20,
                                message: "Message must be at least 20 characters",
                            },
                            maxLength: {
                                value: 500,
                                message: "Message must not exceed 500 characters",
                            },
                        })}
                        aria-invalid={errors.message ? "true" : "false"}
                        aria-describedby={errors.message ? "message-error" : undefined}
                    />
                    {errors.message && (
                        <p id="message-error" className="mt-1 text-sm text-red-600" role="alert">
                            {errors.message.message}
                        </p>
                    )}
                </div>

                <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full px-6 py-3.5 bg-gradient-to-r from-primary-500 to-accent-500 text-white font-semibold rounded-xl hover:shadow-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                    whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                    whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                    aria-label="Send message"
                >
                    {isSubmitting ? (
                        <>
                            <FaSpinner className="w-4 h-4 animate-spin" />
                            Sending...
                        </>
                    ) : (
                        <>
                            <FaPaperPlane className="w-4 h-4" />
                            Send Message
                        </>
                    )}
                </motion.button>
            </form>
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