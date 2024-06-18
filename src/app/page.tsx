import { Button } from "@nextui-org/react";
import * as actions from "@/actions";
import { auth } from "@/auth";
import Profile from "@/components/profile";

export default async function Home() {
  const session = await auth();

  return (
    <div className="flex w-full items-center justify-center flex-col">
      <div className="flex items-center gap-2">
        <form action={actions.signIn}>
          <Button size="md" type="submit">
            Sign-in
          </Button>
        </form>
        <form action={actions.signOut}>
          <Button size="md" type="submit">
            Sign-out
          </Button>
        </form>
      </div>
      {session?.user ? (
        <div>{JSON.stringify(session.user)}</div>
      ) : (
        <div>Signed out</div>
      )}
      <Profile />
    </div>
  );
}
