export const data: Data[] = [
  {
    id: 1,
    imgUrl:
      'https://raw.githubusercontent.com/joaquinns/video-tok/master/videotok.PNG',
    title: 'Social media app',
    body: 'este es el body compadre',
    technologies: [
      'JavaScript',
      'TypeScript',
      'HTML5',
      'CSS3',
      'ReactJs',
      'NodeJs',
      'Docker',
      'ExpressJs'
    ]
  },
  {
    id: 2,
    imgUrl:
      'https://raw.githubusercontent.com/joaquinns/video-tok/master/videotok.PNG',
    title: 'Social media app',
    body: 'este es el body compadre',
    technologies: ['JavaScript']
  },
  {
    id: 3,
    imgUrl:
      'https://raw.githubusercontent.com/joaquinns/video-tok/master/videotok.PNG',
    title: 'Social media app',
    body: 'este es el body compadre',
    technologies: ['JavaScript']
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

export type SocialMediaTypes = 'Linkedin' | 'Github'

export interface Data {
  id: number
  imgUrl: string
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
