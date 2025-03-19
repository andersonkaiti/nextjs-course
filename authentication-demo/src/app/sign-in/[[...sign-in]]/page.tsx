import { SignIn } from "@clerk/nextjs";
import { dark } from "@clerk/themes";

export default function SignInPage() {
  return (
    <div className="flex justify-center items-center py-8">
      <SignIn
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
