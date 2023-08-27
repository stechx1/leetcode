import Link from 'next/link';
import { FiltersList } from './Filters';
import { Pagination } from 'antd';
export const ProblemTable = () => {
  const problems = [
    {
      id: 1,
      title: 'Two Sum',
      difficulty: 'Easy',
      solutions: 123,
      acceptance: '50%',
    },
    {
      id: 2,
      title: 'Add Two Numbers',
      difficulty: 'Medium',
      solutions: 78,
      acceptance: '75%',
    },
    {
      id: 3,
      title: 'Longest Substring Without Repeating Characters',
      difficulty: 'Medium',
      solutions: 234,
      acceptance: '60%',
    },
    {
      id: 4,
      title: 'Median of Two Sorted Arrays',
      difficulty: 'Hard',
      solutions: 456,
      acceptance: '40%',
    },
    {
      id: 5,
      title: 'Reverse Integer',
      difficulty: 'Easy',
      solutions: 89,
      acceptance: '35%',
    },
    {
      id: 6,
      title: 'Palindrome Number',
      difficulty: 'Easy',
      solutions: 101,
      acceptance: '45%',
    },
    {
      id: 7,
      title: 'ZigZag Conversion',
      difficulty: 'Medium',
      solutions: 56,
      acceptance: '65%',
    },
    {
      id: 8,
      title: 'String to Integer (atoi)',
      difficulty: 'Medium',
      solutions: 78,
      acceptance: '50%',
    },
    {
      id: 9,
      title: 'Container With Most Water',
      difficulty: 'Medium',
      solutions: 134,
      acceptance: '70%',
    },
    {
      id: 10,
      title: 'Integer to Roman',
      difficulty: 'Medium',
      solutions: 45,
      acceptance: '55%',
    },
  ];
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
