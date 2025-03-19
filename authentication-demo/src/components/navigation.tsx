import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignOutButton,
  SignUpButton,
  //   UserButton,
} from "@clerk/nextjs";
import Link from "next/link";

export function Navigation() {
  return (
    <nav className="sticky top-0 z-50 border-b border-neutral-700 bg-neutral-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0">
            <Link href="/" className="text-xl font-semibold">
              Next.js App
            </Link>
          </div>
          <div className="flex items-center gap-4">
            <SignedOut>
              <SignInButton>
                <button className="cursor-pointer rounded-lg border border-neutral-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-neutral-800 hover:text-white focus:ring-4 focus:ring-neutral-900 focus:outline-none">
                  Sign in
                </button>
              </SignInButton>
              <SignUpButton>
                <button className="cursor-pointer rounded-lg border border-neutral-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-neutral-800 hover:text-white focus:ring-4 focus:ring-neutral-900 focus:outline-none">
                  Sign up
                </button>
              </SignUpButton>
            </SignedOut>
            <SignedIn>
              {/* <UserButton /> */}
              <Link href="/admin">Admin</Link>
              <Link href="/user-profile">Profile</Link>
              <SignOutButton>
                <button className="cursor-pointer rounded-lg border border-neutral-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-neutral-800 hover:text-white focus:ring-4 focus:ring-neutral-900 focus:outline-none">
                  Sign out
                </button>
              </SignOutButton>
            </SignedIn>
          </div>
        </div>
      </div>
    </nav>
  );
}
