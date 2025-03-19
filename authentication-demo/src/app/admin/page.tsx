import { clerkClient } from "@clerk/nextjs/server";
import { removeRole, setRole } from "./actions";

export default async function Admin() {
  const client = await clerkClient();

  const { data: users } = await client.users.getUserList();

  return (
    <>
      <div className="relative h-screen overflow-x-auto shadow-md sm:rounded-lg p-8">
        <table className="w-full text-left text-sm text-gray-500 rtl:text-right dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                E-mail
              </th>
              <th scope="col" className="px-6 py-3">
                Função
              </th>
              <th scope="col" className="px-6 py-3">
                Ações
              </th>
              <th scope="col" className="px-6 py-3">
                Make Moderator
              </th>
              <th scope="col" className="px-6 py-3">
                Remove Role
              </th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr
                key={user.id}
                className="border-b border-gray-200 dark:border-gray-700"
              >
                <th
                  scope="row"
                  className="px-6 py-4 font-medium whitespace-nowrap"
                >
                  {
                    user.emailAddresses.find(
                      (email) => email.id === user.primaryEmailAddressId
                    )?.emailAddress
                  }
                </th>
                <td className="px-6 py-4">
                  {user.publicMetadata.role as string}
                </td>
                <td className="px-6 py-3">
                  <form action={setRole.bind(null, user.id, "admin")}>
                    <button
                      type="submit"
                      className="cursor-pointer rounded-lg border border-neutral-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-neutral-800 hover:text-white focus:ring-4 focus:ring-neutral-900 focus:outline-none"
                    >
                      Make Admin
                    </button>
                  </form>
                </td>
                <td className="px-6 py-4">
                  <form action={setRole.bind(null, user.id, "moderator")}>
                    <button
                      type="submit"
                      className="cursor-pointer rounded-lg border border-neutral-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-neutral-800 hover:text-white focus:ring-4 focus:ring-neutral-900 focus:outline-none"
                    >
                      Make Moderator
                    </button>
                  </form>
                </td>
                <td className="px-6 py-3">
                  <form action={removeRole.bind(null, user.id)}>
                    <button
                      type="submit"
                      className="cursor-pointer rounded-lg border border-neutral-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-neutral-800 hover:text-white focus:ring-4 focus:ring-neutral-900 focus:outline-none"
                    >
                      Remove Role
                    </button>
                  </form>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
