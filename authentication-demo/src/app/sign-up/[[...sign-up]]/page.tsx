import { SignUp } from "@clerk/nextjs";
import { dark } from "@clerk/themes";

export default function SignUpPage() {
  return (
    <div className="flex justify-center items-center py-8">
      <SignUp
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
