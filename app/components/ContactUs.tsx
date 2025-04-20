'use client';

import React from 'react'
import { useForm } from 'react-hook-form';
import { sendEmail } from './SendEmail';

export type FormData = {
  name: string;
  email: string;
  message: string;
  Cnumber: number;
  Branch: string;
};

const ContactUs  = () => {
  const { register, handleSubmit } = useForm<FormData>();

  function onSubmit(data: FormData) {
    sendEmail(data);
  }

  return (
    <form className='w-fit m-auto flex flex-col gap-7' onSubmit={handleSubmit(onSubmit)}>
      <div className=''>
        <label
          htmlFor='name'
          className='mb-3 block text-base font-medium text-black'
        >
          Full Name
        </label>
        <input
          type='text'
          placeholder='Full Name'
          className='w-full rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-purple-500 focus:shadow-md'
          {...register('name', { required: true })}
        />
      </div>
      <div className=''>
        <label
          htmlFor='email'
          className='mb-3 block text-base font-medium text-black'
        >
          Email Address
        </label>
        <input
          type='email'
          placeholder='example@domain.com'
          className='w-full rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-purple-500 focus:shadow-md'
          {...register('email', { required: true })}
        />
      </div>
      <div className=''>
        <label
          htmlFor='contact number'
          className='mb-3 block text-base font-medium text-black'
        >
          Contact Number
        </label>
        <input
          type='number'
          className='w-full rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-purple-500 focus:shadow-md'
          {...register('Cnumber', { required: true })}
        />
      </div>
     
        <div className=''>
        <label
          htmlFor='branch'
          className='mb-3 block text-base font-medium text-black'
        >
          Branch / Field
        </label>
        <input
          type='text'
          placeholder='IT/CE/Mechanical/Civil'
          className='w-full rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-purple-500 focus:shadow-md'
          {...register('Branch', { required: true })}
        />
      </div>
      <div>
      <label
          htmlFor='message'
          className='mb-3 block text-base font-medium text-black'
        >
          Message
        </label>
        <textarea
          rows={4}
          placeholder='Type your message'
          className='w-full resize-none rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-purple-500 focus:shadow-md'
          {...register('message', { required: true })}
        ></textarea>
        </div>

      <div>
        <button className='hover:shadow-form w-full rounded-md bg-purple-500 py-3 px-8 text-base font-semibold text-white outline-none'>
          Submit
        </button>
      </div>
    </form>
  );
};

export default ContactUs;