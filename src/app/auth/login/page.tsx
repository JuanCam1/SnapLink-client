import Link from "next/link"
import LoginForm from "./login-form"
import TypographyH2 from "@/components/shared/typography-h2"

const page = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-6 w-full">
      <div className="max-sm:flex max-sm:flex-col max-sm:justify-center opacity-0 px-6 py-16 border dark:border-zinc-800 rounded-md w-full max-w-[500px] max-sm:h-full animate-slide-up">

        <TypographyH2 className="mb-8 font-extrabold text-primary dark:text-primary text-center text-pretty"
          text="Inicio SnapLink"
        />
        <LoginForm />
        <span className="block mt-8 font-normal text-sm text-center">
          No tienes cuenta?{" "}
          <Link className="text-blue-500" href="/auth/register">
            Registrate
          </Link>
        </span>
      </div>
    </div>
  )
}
export default page