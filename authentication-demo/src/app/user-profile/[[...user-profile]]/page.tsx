import { UserProfile } from "@clerk/nextjs";
import { dark } from "@clerk/themes";

export default function UserProfilePage() {
  return (
    <div className="flex justify-center items-center py-8">
      <UserProfile
        path="/user-profile"
        appearance={{
          baseTheme: dark,
          variables: {
            colorBackground: "#0a0a0a",
          },
        }}
      />
    </div>
  );
}
