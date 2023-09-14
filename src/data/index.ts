export const data: Data[] = [
  {
    id: 1,
    imgUrl:
      'https://raw.githubusercontent.com/joaquinns/backend-node-api-ts-mongo/master/rest-api-ts-mongo.PNG',
    github: 'https://github.com/joaquinns/backend-node-api-ts-mongo',
    title: 'Rest api with nodeJS',
    url: 'https://backend-node-api-ts-mongo-vw64-dev.fl0.io/docs/',
    body: 'I created a REST API using Node.js following best practices, and employed TypeScript to enhance code typing. I implemented unit testing to ensure software quality. Additionally, I integrated JWT (JSON Web Tokens) for authentication and implemented a role-based system to manage user permissions. The entire application was containerized using Docker, and MongoDB was used as the database.',
    technologies: ['TypeScript', 'JavaScript', 'Docker', 'NodeJs', 'MongoDB']
  },
  {
    id: 2,
    imgUrl:
      'https://raw.githubusercontent.com/joaquinns/video-tok/master/videotok.PNG',
    github: 'https://github.com/joaquinns/video-tok',
    title: 'Social media app',
    url: 'https://video-tok.vercel.app/',
    body: 'I developed an application similar to TikTok, a social network for sharing short videos, using the JavaScript technology stack, with React in the frontend as the primary development framework, and Supabase for the backend. This application was inspired by TikTok and focuses on providing a similar experience for creating and sharing short videos.',
    technologies: [
      'JavaScript',
      'HTML5',
      'ReactJs',
      'CSS3',
      'NodeJs',
      'Postgresql'
    ]
  },
  {
    id: 3,
    imgUrl:
      'https://raw.githubusercontent.com/joaquinns/hackaton-cloudinary/master/preview.PNG',
    github: 'https://github.com/joaquinns/hackaton-cloudinary',
    title: 'Online image editor',
    url: 'https://hackaton-cloudinary.vercel.app/',
    body: 'I participated in a Cloudinary hackathon where the challenge was to create a service or app using their API. I developed a small online image editor using technologies like React and TypeScript, leveraging Cloudinary API for its functionality.',
    technologies: ['JavaScript', 'NodeJs', 'TypeScript', 'HTML5', 'CSS3']
  },
  {
    id: 4,
    imgUrl:
      'https://raw.githubusercontent.com/joaquinns/minecraft-js-init/master/minecraftjs.PNG',
    github: 'https://github.com/joaquinns/minecraft-js-init',
    title: 'Minecraft JS',
    url: 'https://minecraft-js-init.vercel.app/',
    body: 'I created a small game inspired by Minecraft using JavaScript, Three.js for 3D graphics, and React for the user interface. Additionally, I implemented Zustand as a global state manager for the project.',
    technologies: ['JavaScript', 'NodeJs', 'ReactJs', 'HTML5', 'CSS3']
  },
  {
    id: 5,
    imgUrl:
      'https://raw.githubusercontent.com/joaquinns/cohere-node-ia-fixMyEnglish/master/desktop.PNG',
    github:
      'https://github.com/joaquinns/cohere-node-ia-fixMyEnglish/tree/master',
    title: 'Fix my english IA',
    url: 'https://cohere-node-ia-fix-my-english.vercel.app/',
    body: 'I participated in a hackathon and developed an online application for learning English and correcting spelling. This application uses Cohere artificial intelligence and provides definitions for words that might be challenging for Spanish speakers.',
    technologies: [
      'TypeScript',
      'JavaScript',
      'NodeJs',
      'ReactJs',
      'HTML5',
      'CSS3'
    ]
  },
  {
    id: 6,
    imgUrl:
      'https://raw.githubusercontent.com/joaquinns/password-generator-js/master/password%20generator.PNG',
    github: 'https://github.com/joaquinns/password-generator-js',
    title: 'JS Password Generator',
    url: 'https://password-generator-js-flax.vercel.app/',
    body: 'I created a password generator in JavaScript with a React-based user interface. This project allows users to generate customized secure passwords, providing a solution where they can directly copy and paste the passwords.',
    technologies: ['JavaScript', 'NodeJs', 'ReactJs', 'HTML5', 'CSS3']
  },
  {
    id: 7,
    imgUrl:
      'https://raw.githubusercontent.com/joaquinns/react-giff-app/main/ghiffapp.JPG',
    github: 'https://github.com/joaquinns/react-giff-app',
    title: 'Ghiffy App',
    url: 'https://react-giff-app.vercel.app/',
    body: 'I created an application for searching GIFs by various types and categories using the API provided by Giphy. I followed best development practices and leveraged React most interesting hooks in the project.',
    technologies: ['JavaScript', 'NodeJs', 'ReactJs', 'HTML5', 'CSS3']
  },
  {
    id: 8,
    imgUrl:
      'https://raw.githubusercontent.com/joaquinns/react-movie-app/master/cinefrontend.JPG',
    github: 'https://github.com/joaquinns/react-movie-app',
    title: 'Search Movie App',
    url: 'https://pedantic-leakey-03ab60.netlify.app/',
    body: 'I developed a highly versatile application that provides users with the ability to search for and access comprehensive information about any movie. This application offers a comprehensive experience by providing data about the cast, the director, and more.',
    technologies: ['JavaScript', 'NodeJs', 'ReactJs', 'HTML5', 'CSS3']
  }
]

export type TechnologiesType =
  | 'JavaScript'
  | 'TypeScript'
  | 'NodeJs'
  | 'ExpressJs'
  | 'ReactJs'
  | 'HTML5'
  | 'CSS3'
  | 'Docker'
  | 'MongoDB'
  | 'Postgresql'

export type SocialMediaTypes = 'Linkedin' | 'Github'

export interface Data {
  id: number
  imgUrl: string
  url: string
  github: string
  title: string
  body: string
  technologies: TechnologiesType[]
}

export const technologies: TechnologiesType[] = [
  'JavaScript',
  'TypeScript',
  'NodeJs',
  'ExpressJs',
  'ReactJs',
  'HTML5',
  'CSS3',
  'Docker'
]
