import { NextResponse } from 'next/server';
import { GitHubRepository } from './projectType';
import dotenv from 'dotenv';

dotenv.config();

export async function getMyProjects() {
  try {
    const response = await fetch('https://api.github.com/user/repos', {
    headers: {
      Authorization: `Bearer ${process.env.GITHUB_API_TOKEN}`,
    },
  });
  if (!response.ok) {
    throw new Error('Failed to fetch projects');
  }
  const data = await response.json();

  let ownPrjs: Array<GitHubRepository> = []

  data.forEach((p: GitHubRepository) => {
    if(p.owner.id === 42974676) ownPrjs.push(p)
  })

  return NextResponse.json({
    okay: true,
    data: ownPrjs
  },{
    status: 200
  })
  } catch (error) {
    return NextResponse.json({
      okay: false
    },{
      status: 400
    })
  }
  
}

export const GET = getMyProjects