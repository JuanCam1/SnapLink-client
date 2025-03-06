"use client"
import { Eye, EyeOff, CircleUserRound } from "lucide-react";
import { redirect } from 'next/navigation'

import useCreateLink from "../hooks/use-create-link";

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
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";


const LinkForm = () => {
  const { form, onSubmit } = useCreateLink();
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-6 px-6 py-4">
        <FormField
          control={form.control}
          name="url_link"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Enlace</FormLabel>
              <FormControl>
                <Input className="py-5 border-gray-300 dark:border-gray-600 rounded-e-md rounded-s-none ring-0 text-base" placeholder="https://www.google.com" autoFocus {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="description_url"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Descripción</FormLabel>
              <FormControl>
                <Textarea className="resize-none py-5 border-gray-300 dark:border-gray-600 rounded-e-md rounded-s-none ring-0 text-base resize-none" placeholder="https://www.google.com" autoFocus {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="status_link"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Estado</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Seleccione el estado" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="ACTIVE">Activo</SelectItem>
                  <SelectItem value="INACTIVE">Inactivo</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex justify-center">
          <Button type="submit" className="max-sm:w-full text-secondary">
            {
              form.formState.isSubmitting ? "Cargando..." : "Agregar Enlace"
            }
          </Button>
        </div>
      </form>
    </Form >
  )
}
export default LinkForm;