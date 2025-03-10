"use client"
import { Eye, EyeOff } from "lucide-react";
import { redirect } from 'next/navigation'

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import useLogin from "../hooks/use-login";


const LoginForm = () => {
  const { form, handleVisible, onSubmit, isVisible } = useLogin();
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-6 px-6 py-4">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Correo Electronico</FormLabel>
              <FormControl>
                <Input className="py-5 border-gray-300 dark:border-gray-600 rounded-md ring-0 text-base" placeholder="correo@correo.com" autoFocus {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Contraseña</FormLabel>
              <FormControl>
                <div className="flex gap-2">
                  <Input className="py-5 border-gray-300 dark:border-gray-600 rounded-md ring-0 text-base" placeholder="******" type={isVisible ? "text" : "password"} {...field} />
                  <button
                    type="button"
                    onClick={handleVisible}
                    className="inline-flex items-center bg-zinc-200 dark:hover:bg-zinc-900 dark:bg-zinc-700 px-2 border border-e-0 border-gray-300 dark:border-gray-600 rounded-md text-gray-900 dark:text-gray-400 text-sm">
                    {
                      isVisible ? (
                        <EyeOff className="size-5 text-gray-500 dark:text-gray-400" />
                      ) : (
                        <Eye className="size-5 text-gray-500 dark:text-gray-400" />
                      )
                    }
                  </button>
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex justify-center">
          <Button type="submit" className="max-sm:w-full text-secondary">
            {
              form.formState.isSubmitting ? "Cargando..." : "Iniciar Sesión"
            }
          </Button>
        </div>
      </form>
      <button type="button"
        className="bg-red-400"
        onClick={() => redirect("/dash/form")}
      >ir
      </button>
    </Form >
  )
}
export default LoginForm