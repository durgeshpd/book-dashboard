import React from 'react';
import { useForm } from 'react-hook-form';

const BookForm = ({ defaultValues, onSubmit }) => {
  const { register, handleSubmit, reset } = useForm({ defaultValues });

  React.useEffect(() => {
    reset(defaultValues);
  }, [defaultValues]);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <input {...register('title')} placeholder="Title" className="input input-bordered w-full" />
      <input {...register('author')} placeholder="Author" className="input input-bordered w-full" />
      <input {...register('genre')} placeholder="Genre" className="input input-bordered w-full" />
      <input type="number" {...register('publishedYear')} placeholder="Year" className="input input-bordered w-full" />
      <input {...register('coverImage')} placeholder="Cover Image URL" className="input input-bordered w-full" />
      <button type="submit" className="btn btn-primary w-full">Submit</button>
    </form>
  );
};

export default BookForm;
