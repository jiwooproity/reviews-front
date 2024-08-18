interface Counter {
  views: number;
  reads: number;
  users: number;
}

interface BlogPost extends Omit<Counter, "users" | "reads"> {
  user: string;
  content: string;
}

const Json: BlogPost[] = [
  { user: "hong", content: "Hi, Hello", views: 1999 },
  { user: "john", content: "Contents", views: 1300 },
  { user: "james", content: "This is my first post", views: 3232 },
];

const getPosts = (): Promise<BlogPost[]> => {
  return new Promise((resolve) => resolve(Json));
};

(async () => {
  const posts = await getPosts();

  posts.forEach((post) => {
    console.log(post);
  });

  // console
  // { user: 'hong', content: 'Hi, Hello', views: 1999 }
  // { user: 'john', content: 'Contents', views: 1300 }
  // { user: 'james', content: 'This is my first post', views: 3232 }
})();
