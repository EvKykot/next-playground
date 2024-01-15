'use client'
import React from 'react';

type Repo = {
  name: string
  stargazers_count: number
}

// https://nextjs.org/docs/pages/building-your-application/data-fetching/incremental-static-regeneration
const DashboardPage = async () => {
  const res = await fetch(
    'https://api.github.com/repos/vercel/next.js',
    { next: { revalidate: 20 } }
  )
  const repo: Repo = await res.json()

  console.log('repo', repo);

  return (
    <div>
      <h1>Dashboard title</h1>
      <p>Page content</p>
    </div>
  );
};

export default DashboardPage;
