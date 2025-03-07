import { toast } from "sonner";

export const NotificationError = (message: string) => {
  toast.error(message, {
    duration: 2000,
    style: {
      padding: "16px",
      fontSize: "16px",
    },
  });
};

export const NotificationSucces = (message: string) => {
  toast.success(message, {
    duration: 2000,
    style: {
      padding: "16px",
      fontSize: "16px",
    },
  });
};

export const NotificationWarning = (message: string) => {
  toast.warning(message, {
    duration: 2000,
    style: {
      padding: "16px",
      fontSize: "16px",
    },
  });
};