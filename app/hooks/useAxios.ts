import axios from "axios";
import { useEffect, useState, useRef } from "react";
import { extractErrorMessage } from "../utils";

type Method = keyof typeof methods;

interface UseAxiosProps {
    type: Method;
    url: string;
    config?: any;
    body?: any;
}

interface UseAxiosReturn<T> {
    call: (data?: any) => void;
    cancel: () => void;
    data: T | null;
    err: null | string;
    loading: boolean;
}

const methods = {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete
};

function useAxios<T>({ type = "get", url = "", config = {}, body } : UseAxiosProps ): UseAxiosReturn<T> {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState<null | string>(null);
  const method = methods[type];
  const controller = useRef<null | AbortController>(null)

  useEffect(() => cancel, []);

  async function call(data: any) {
    let dataPassed = data || body;
    if (controller.current) controller.current.abort();

    controller.current = new AbortController();
    let configWithSignal = { ...config, signal: controller.current.signal };

    setLoading(true);

    try {
      let resp;
      if (type === "get" || type === "delete") {
        resp = await method(url, configWithSignal);
      } else {
        resp = await method(url, dataPassed, configWithSignal);
      }
      setData(resp.data);
      setErr(null);
    } catch (err) {
      setErr(extractErrorMessage(err));
    }
    setLoading(false);
  }

  function cancel() {
    controller.current && controller.current.abort();
  }

  return { call, cancel, data, err, loading };
}

export default useAxios;
