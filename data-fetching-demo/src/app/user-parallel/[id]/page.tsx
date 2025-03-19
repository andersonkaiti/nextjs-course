import { setTimeout } from "timers/promises";

interface IPost {
  userId: number;
  id: number;
  title: string;
  body: string;
}

interface IAlbum {
  userId: number;
  id: number;
  title: string;
}

const searchParams = (userId: string) =>
  new URLSearchParams({
    userId,
  });

async function getUserPosts(userId: string) {
  setTimeout(1_000);

  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts?${searchParams(userId)}`,
  );

  return res.json();
}

async function getUserAlbums(userId: string) {
  setTimeout(1_000);

  const res = await fetch(
    `https://jsonplaceholder.typicode.com/albums?${searchParams(userId)}`,
  );

  return res.json();
}

export default async function UserProfile({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const postsData = getUserPosts(id);
  const albumsData = getUserAlbums(id);

  const [posts, albums] = await Promise.all([postsData, albumsData]);

  return (
    <div className="mx-auto max-w-7xl p-4">
      <h1 className="mb-8 text-3xl font-extrabold">User Profile</h1>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        <div>
          <h2 className="mb-4 text-2xl font-bold">Posts</h2>
          <div className="space-y-4">
            {posts.map((post: IPost) => (
              <div key={post.id} className="rounded-lg bg-white p-6 shadow-md">
                <h3 className="mb-3 text-lg leading-tight font-bold text-gray-800">
                  {post.title}
                </h3>
                <p className="mb-4 leading-relaxed text-gray-600">
                  {post.body}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="mb-4 text-2xl font-bold">Albums</h2>
          <div className="space-y-4">
            {albums.map((album: IAlbum) => (
              <div key={album.id} className="rounded-lg bg-white p-6 shadow-md">
                <p className="text-gray-700">{album.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
