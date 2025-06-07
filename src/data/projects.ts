import { Project } from '../types/project';

export const allProjects: Project[] = [
  {
    id: '1',
    title: 'React Portfolio',
    description: 'A basic react portfolio built testing features of Amazon\'s Latest AI: Amazon Q CLI. ',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1150px-React-icon.svg.png',
    technologies: ['React', 'Typescript', 'Tailwind CSS'], 
    category: 'Web',
    featured: true,
    demoUrl: 'https://example.com/demo',
    codeUrl: 'https://github.com/yourusername/ecommerce-project'
  },
  {
    id: '2',
    title: 'WorkMate App',
    description: 'Cross-Platform Cloud-Based Field Service Management System for Small Businesses',
    image: 'https://4.imimg.com/data4/VC/JN/MY-27599365/logo-design-250x250.jpg',
    technologies: ['Xamarin', 'Node.js', 'Azure', 'SQL'],
    category: 'Mobile',
    featured: true,
    codeUrl: 'https://github.com/jordaanwalker/WorkMateCode'
  },
  {
    id: '3',
    title: 'Next.js Tutorial',
    description: 'Next.js tutorial, learning how to use Vercel, Prisma, PostgresSQL',
    image: 'https://www.svgrepo.com/show/354113/nextjs-icon.svg',
    technologies: ['Next.js', 'Vercel', 'Prisma', 'PostgresSQL'],
    category: 'Web',
    featured: true,
    demoUrl: 'https://nextjs-dashboard-two-ecru-46.vercel.app/',
    codeUrl: 'https://github.com/jordaanwalker/nextjs-dashboard'
  },
  {
    id: '4',
    title: 'Fantasy Premier League Team Predictor API',
    description: 'An application using the fantasy premier league API to predict the best team for the upcoming gameweek.',
    image: 'https://play-lh.googleusercontent.com/pJPgV--7ICYdqOyd6_8pgVXx9jIa81_YNLKI532jiGa9xBMZJarKRzgj76oYXUO7zK8',
    technologies: ['C#'],
    category: 'Console',
    featured: false,
    codeUrl: 'https://github.com/jordaanwalker/FPLTeamAPI'
  }
];

export const featuredProjects = allProjects.filter(project => project.featured);
