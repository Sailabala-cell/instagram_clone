import { Profiler } from 'react';
import {USERS} from './users';

export const POSTS=[
  {
    imageUrl:'https://cdn.pixabay.com/photo/2019/07/12/18/48/code-4333398_1280.jpg',
    user:USERS[0].user,
    likes:670,
    caption:'se problem-solving and critical thinking abilities to solve any complex technical challenges, which may make the job feel rewarding and fulfilling.',
    profile_picture:USERS[0].image,
    comments:[
      {
        user:'clever programmer',
        comment:'Wow! This build looks fire'
      }
      ,{
         user:'dance-ballet',
         comment:'Once I wake up, I will code this up'
      }
    ]
  },
  {
    imageUrl:'https://cdn.pixabay.com/photo/2016/10/09/05/52/ballet-pose-1725207_1280.jpg',
    user:USERS[1].user,
    likes:34550,
    caption:'Ballet is a type of performance dance that originated during the Italian Renaissance in the fifteenth century and later developed into a concert dance form in France and Russia.',
    profile_picture:USERS[1].image,
    comments:[
      {
        user:'discovery',
        comment:'nice'
      },
      {
        user:'youtube',
        comment:'beautiful art'
      }
    ]
  }
]
