import { cookies } from "next/headers";

export default async function AboutPage() {
  const cookieStore = await cookies();

  const theme = cookieStore.get("theme");

  console.log(theme);

  console.log("About server component");

  return (
    <div className="flex min-h-screen items-center justify-center">
      <h1>About page {new Date().toLocaleTimeString()}</h1>
    </div>
  );
}
