import Link from 'next/link';
import { FiltersList } from './Filters';
import { Pagination } from 'antd';
import { problems } from '@/data/problems';

export const ProblemTable = () => {
  return (
    <>
      <FiltersList />
      <table className='min-w-full'>
        <thead>
          <tr className='bg-gray-100'>
            <th className='py-2 px-4 text-left'>ID</th>
            <th className='py-2 px-4 text-left'>Title</th>
            <th className='py-2 px-4 text-left'>Difficulty</th>
            <th className='py-2 px-4 text-left'>Solutions</th>
            <th className='py-2 px-4 text-left'>Acceptance</th>
          </tr>
        </thead>
        <tbody>
          {problems.map((problem) => (
            <tr key={problem.id} className='border-t border-gray-200'>
              <td className='py-2 px-4'>{problem.id}</td>
              <td className='py-2 px-4'>
                <Link href={`/problems/${problem.id}`}>
                  <p className='text-blue-600 hover:underline'>
                    {problem.title}
                  </p>
                </Link>
              </td>
              <td className='py-2 px-4'>{problem.difficulty}</td>
              <td className='py-2 px-4'>{problem.solutions}</td>
              <td className='py-2 px-4'>{problem.acceptance}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className='text-center my-4'>
        <Pagination defaultCurrent={1} total={50} />
      </div>
    </>
  );
};
