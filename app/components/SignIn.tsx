import { signIn } from "@/auth";

export default function SignIn() {
  return (
    <form
      action={async () => {
        "use server";
        await signIn("github");
      }}
    >
      <button className="py-2 px-6 rounded bg-black text-white" type="submit">
        Se connecter avec GitHub
      </button>
    </form>
  );
}
