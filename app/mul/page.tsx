'use client';
import { multiply } from '@/actions/calc.actions';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

interface IFormInput {
  num1: number;
  num2: number;
}

const Page = () => {
  const [product, setProduct] = useState<number | undefined>(undefined);
  const form = useForm<IFormInput>();

  const handleSubmit = async (data: IFormInput) => {
    console.log('multiplying');
    const result = await multiply({ num1: data.num1, num2: data.num2 });
    console.log({ result });
    if (!result.status) return null;
    setProduct(result.data);
  };

  return (
    <div className='mt-navigation-height'>
      <form onSubmit={form.handleSubmit(handleSubmit)} className='space-x-4 '>
        <input
          type='number'
          {...form.register('num1', { required: true, valueAsNumber: true })}
          className='text-background py-1 text-sm'
        />
        <input
          type='number'
          {...form.register('num2', { required: true, valueAsNumber: true })}
          className='text-background py-1 text-sm'
        />
        <button type='submit'>Multiply</button>
      </form>
      <p className='text-sm text-white'>{product}</p>
    </div>
  );
};

export default Page;
