import { ProblemTable } from '@/components/ProblemTable';
import { Badge, Tabs } from 'antd';

const tags = [
  {
    id: '1',
    name: 'Array',
    number: 1438,
  },
  {
    id: '2',
    name: 'String',
    number: 631,
  },
  {
    id: '3',
    name: 'Hash Table',
    number: 493,
  },
  {
    id: '4',
    name: 'Dynamic Programming',
    number: 449,
  },
  {
    id: '5',
    name: 'Math',
    number: 445,
  },
  {
    id: '6',
    name: 'Sorting',
    number: 339,
  },
];

const tabs = [
  {
    key: '1',
    label: 'All Topics',
    children: <ProblemTable />,
  },
  {
    key: '2',
    label: 'Algorithms',
    children: <ProblemTable />,
  },
  {
    key: '3',
    label: 'Database',
    children: <ProblemTable />,
  },
  {
    key: '4',
    label: 'Pandas',
    children: <ProblemTable />,
  },
  {
    key: '5',
    label: 'Shell',
    children: <ProblemTable />,
  },
  {
    key: '6',
    label: 'Concurrency',
    children: <ProblemTable />,
  },
];

const ProblemsPage = () => {
  return (
    <div className='container mx-auto'>
      <hr class='my-8 h-0.5 border-t-0 bg-neutral-100 opacity-100 dark:opacity-50' />
      <div className='flex gap-3 my-4'>
        {tags.map((tag) => (
          <div key={tag.id} className='flex gap-1'>
            <p className='hover:color-blue-500 hover:underline cursor-pointer'>
              {tag.name}
            </p>
            <Badge count={tag.number} color={'green'} overflowCount={9999} />
          </div>
        ))}
      </div>
      <Tabs defaultActiveKey='1' items={tabs} />
    </div>
  );
};

export default ProblemsPage;
