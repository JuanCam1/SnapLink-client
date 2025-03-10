"use client"

import { type FC, useState } from "react";
import { Switch } from "@/components/ui/switch";
import { changeStatusLinkService } from "../services/link-service";

interface Props {
  state: boolean;
  id: string;
}
const SwitchState: FC<Props> = ({ state, id }) => {
  const [value, setValue] = useState(state);

  const onChange = async () => {
    try {
      const response = await changeStatusLinkService(id);

      if (!response.ok) {
        throw Error("Error al cambiar el estado");
      }

      setValue(!value);
    } catch (error) {
      console.log(error);
      setValue(value);
    }
  }

  return (
    <Switch checked={value} onCheckedChange={onChange} />
  )
}
export default SwitchState