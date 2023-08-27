import { source } from '@/lib/utils/font';

export const Description = ({ problem }) => {
  return (
    <div className='flex flex-col'>
      <h2>{problem.heading}</h2>
      <div className='my-4'>
        <p className='text-green-500'>{problem.difficulty}</p>
      </div>
      <div className='space-y-2 flex flex-col'>
        <div>{problem.statement}</div>
        <div>{problem.examples}</div>
      </div>
    </div>
  );
};
