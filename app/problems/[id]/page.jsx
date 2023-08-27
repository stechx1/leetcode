'use client';
import React, { useState } from 'react';
import Editor, { DiffEditor, useMonaco, loader } from '@monaco-editor/react';
import 'allotment/dist/style.css';
import { Tabs } from 'antd';
import { Description } from '@/components/Description';
import { Editorial } from '@/components/Editorial';
import { Solutions } from '@/components/Solutions';
import { Submissions } from '@/components/Submissions';
import { source } from '@/lib/utils/font';

const ProblemPage = ({ params }) => {
  const problem = {
    id: '1',
    heading: '1. Two Sum',
    difficulty: 'Easy',
    statement: (
      <div className='space-y-4'>
        <p>
          Given an array of integers nums and an integer target, return indices
          of the two numbers such that they add up to target.
        </p>
        <p>
          You may assume that each input would have exactly one solution, and
          you may not use the same element twice.
        </p>
        <p>You can return the answer in any order.</p>
      </div>
    ),
    examples: (
      <div className='space-y-2'>
        <div>
          <p className='font-bold'>Example 1</p>
          <div className='flex flex-col '>
            <p>
              Input:{' '}
              <span className={`text-gray-600 ${source.className}`}>
                nums = [2,7,11,15], target = 9
              </span>
            </p>
            <p>
              Output:{' '}
              <span className={`text-gray-600 ${source.className}`}>
                [0, 1]
              </span>
            </p>
            <p>
              Explanation:{' '}
              <span className={`text-gray-600 ${source.className}`}>
                Because nums[0] + nums[1] === 9, we return [0, 1]
              </span>
            </p>
          </div>
        </div>
        <div>
          <p className='font-bold'>Example 2</p>
          <div className='flex flex-col '>
            <p>
              Input:{' '}
              <span className={`text-gray-600 ${source.className}`}>
                nums = [2,7,11,15], target = 9
              </span>
            </p>
            <p>
              Output:{' '}
              <span className={`text-gray-600 ${source.className}`}>
                [0, 1]
              </span>
            </p>
            <p>
              Explanation:{' '}
              <span className={`text-gray-600 ${source.className}`}>
                Because nums[0] + nums[1] === 9, we return [0, 1]
              </span>
            </p>
          </div>
        </div>
      </div>
    ),
  };
  const tabs = [
    {
      key: '1',
      label: 'Description',
      children: <Description problem={problem} />,
    },
    {
      key: '2',
      label: 'Editorial',
      children: <Editorial />,
    },
    {
      key: '3',
      label: 'Solutions',
      children: <Solutions />,
    },
    {
      key: '4',
      label: 'Submissions',
      children: <Submissions />,
    },
  ];

  return (
    <div className='container mx-auto pt-8 h-screen'>
      <div className=' grid grid-cols-2 gap-6'>
        <div className='bg-[#f3f4f6] px-6 pt-2 rounded'>
          <Tabs defaultActiveKey='1' items={tabs} />
        </div>
        <div height={'90vh'} className=''>
          <Editor
            height='90vh'
            defaultLanguage='javascript'
            defaultValue='// some comment'
          />
        </div>
      </div>
    </div>
  );
};

export default ProblemPage;
