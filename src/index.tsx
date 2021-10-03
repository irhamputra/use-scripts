// fork from useScript, enhance for multiple Script with Hooks
import { useState, useEffect } from "react";

type Status = "error" | "load" | "ready" | 'idle'

const useScripts = (args: Array<string>) => {
  const [status, setStatus] = useState<Status>(() =>
      !Array.isArray(args) || args.length === 0 ? "error" : "load"
  );

  useEffect(() => {
    if (!args || args.length === 0) {
      setStatus("idle");
      return;
    }

    const scripts = document.querySelectorAll('script[data-id="useScripts"]');

    if (!scripts) {
      args.forEach((src) => {
        const script = document.createElement("script");
        script.src = src;
        script.async = true;
        script.setAttribute("data-status", "loading");
        script.setAttribute("data-id", "useScripts");

        document.body.appendChild(script);

        const setAttributeFromEvent = (event: HTMLElementEventMap['load' | 'error']) => {
          script.setAttribute(
              "data-status",
              event.type === "load" ? "ready" : "error"
          );
        };

        script.addEventListener("load", setAttributeFromEvent);
        script.addEventListener("error", setAttributeFromEvent);
      });
    } else {
      let status = "";

      scripts.forEach((script) => {
        status = script.getAttribute('data-status') ?? 'loading';
      })

      setStatus(status as Status)
    }

    const setStateEvent = (event: HTMLElementEventMap['load' | 'error']) => {
      setStatus(event.type === "load" ? "ready" : "error");
    };

    return () => {
      if (scripts) {
        scripts.forEach((script) => {
          script.removeEventListener("load", setStateEvent);
          script.removeEventListener("error", setStateEvent);
        });
      }
    };
  }, [args]);

  return status;
};

export default useScripts;
