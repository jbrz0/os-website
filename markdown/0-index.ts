// All posts

type Post = {
  number: string,
  slug: string,
  filename: string,
  date: string,
  coolness: string,
  tags: Array<string>,
  description: string,
}

const posts: Array<Post> = [
  {
    "number": '000',
    "slug": "test",
    "filename": "000-test.mdx",
    "date": "Jul 23, 2020",
    "coolness": "3",
    "tags": ["animation", "fun", "experimental"],
    "description": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil libero placeat fuga rem illum molestias quae.",
  },
]

export default posts
