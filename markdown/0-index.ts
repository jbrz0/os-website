// All posts

type Post = {
  id: number,
  number: string,
  slug: string,
  isLab: boolean,
  filename: string,
  date: string,
  coolness: number,
  tags: Array<string>,
  title: string,
  cover: string,
  description: string,
}

const posts: Array<Post> = [
  {
    "id": 0,
    "number": '000',
    "slug": "test",
    "isLab": true,
    "filename": "000-test.mdx",
    "date": "Jul 23, 2020",
    "coolness": 5,
    "tags": ["animation", "fun", "experimental"],
    "title": "The navigation system provides a set of screen elements.",
    "cover": "https://picsum.photos/1440/900",
    "description": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil libero placeat fuga rem illum molestias quae.",
  },
  {
    "id": 1,
    "number": '002',
    "slug": "test2",
    "isLab": false,
    "filename": "000-test.mdx",
    "date": "Jul 23, 2020",
    "coolness": 2,
    "tags": ["animation", "fun"],
    "title": "The navigation system provides a set of screen elements.",
    "cover": "https://picsum.photos/1440/900",
    "description": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil libero placeat fuga rem illum molestias quae.",
  },
]

export default posts
