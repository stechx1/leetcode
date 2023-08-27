"use client"
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

const ProblemPage = ({params}) => {
  const router = useRouter();
  const { id } = params;

  const problem = {
    id: 1,
    title: 'Two Sum',
    description: 'Given an array of integers...',
    examples: [
      { input: '[2,7,11,15], target = 9', output: '[0,1]' },
      // Add more examples as needed
    ],
    similarQuestions: ['3Sum', '4Sum'],
  };

  const [code, setCode] = useState('');

  const handleRunTests = () => {
    // Logic to run tests on the provided code
  };

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-2xl font-semibold mb-4">{problem.title}</h1>
      <div className="mb-4">
        <h2 className="text-lg font-semibold">Description:</h2>
        <p>{problem.description}</p>
      </div>
      <div className="mb-4">
        <h2 className="text-lg font-semibold">Examples:</h2>
        <ul>
          {problem.examples.map((example, index) => (
            <li key={index}>
              <p>
                <strong>Input:</strong> {example.input}
              </p>
              <p>
                <strong>Output:</strong> {example.output}
              </p>
            </li>
          ))}
        </ul>
      </div>
      <div className="mb-4">
        <h2 className="text-lg font-semibold">Similar Questions:</h2>
        <ul>
          {problem.similarQuestions.map((question, index) => (
            <li key={index}>{question}</li>
          ))}
        </ul>
      </div>
      <div className="mb-4">
        <h2 className="text-lg font-semibold">Code:</h2>
        <textarea
          className="border p-2 w-full h-32"
          value={code}
          onChange={(e) => setCode(e.target.value)}
        />
        <button
          className="bg-blue-500 text-white py-1 px-4 mt-2 rounded"
          onClick={handleRunTests}
        >
          Run Tests
        </button>
      </div>
      {/* Test case section */}
      {/* You can add your test case interface here */}
    </div>
  );
};

export default ProblemPage;
