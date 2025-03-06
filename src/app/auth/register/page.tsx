import Link from "next/link";
import TypographyH2 from "@/components/shared/typography-h2";
import RegisterForm from "@/feature/auth/register/components/register-form";

const page = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-6 w-full">
      <div className="max-sm:flex max-sm:flex-col max-sm:justify-center opacity-0 px-6 py-14 border dark:border-zinc-800 rounded-md w-full max-w-[500px] max-sm:h-full animate-slide-up">

        <TypographyH2 className="mb-10 font-extrabold text-primary dark:text-primary text-center text-pretty"
          text="Registro SnapLink"
        />
        <RegisterForm />
        <span className="block mt-6 font-normal text-sm text-center">
          Ya tienes cuenta?{" "}
          <Link className="text-blue-500" href="/auth/login">
            Inicia sesión
          </Link>
        </span>
      </div>
    </div>
  )
}
export default page