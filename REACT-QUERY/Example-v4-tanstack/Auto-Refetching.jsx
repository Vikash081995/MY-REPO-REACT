import React, { useState } from "react";
import axios from "axios";
import {
  useQuery,
  useQueryClient,
  useMutation,
  QueryClient,
  QueryClientProvider
} from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Example />
    </QueryClientProvider>
  );
}

function Example() {
  const queryClient = useQueryClient();
  const [intervalMs, setIntervalMs] = useState(1000);
  const [value, setValue] = useState("");

  const { status, data, error, isFetching } = useQuery(
    ["todos"],
    async () => {
      const res = await axios.get("./api/data");
      return res.data;
    },
    {
      refetchInterval: intervalMs
    }
  );
  const addMutation = useMutation((value) => fetch(`/api/data?add=${value}`), {
    onSuccess: () => queryClient.invalidateQueries(["todos"])
  });
  const clearMutation = useMutation(() => fetch(`/api/data?clear=1`), {
    onSuccess: () => queryClient.invalidateQueries(["todos"])
  });
  if (status === "loading") return <h1>Loading....</h1>;
  if (status === "error") return <span>Error:{error.message}</span>;

  const handleOnSubmit = (event) => {
    event.preventDefault();
    addMutation.mutate(value, {
      onSuccess: () => {
        setValue("");
      }
    });
  };

  return (
    <div>
      <h1>Auto Refetch with stale-time set to 1s</h1>
      <p>
        This example is best experienced on your own machine, where you can open
        multiple tabs to the same localhost server and see your changes
        propagate between the two.
      </p>
      <label>
        Query Interval speed (ms):{" "}
        <input
          value={intervalMs}
          onChange={(ev) => setIntervalMs(Number(ev.target.value))}
          type="number"
          step="100"
        />
      </label>
      <h2>Todo List</h2>
      <form onSubmit={handleOnSubmit}>
        <input
          placeholder="enter something"
          value={value}
          onChange={(ev) => setValue(ev.target.value)}
        />
      </form>
      <ul>
        {data.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <div>
        <button
          onClick={() => {
            clearMutation.mutate();
          }}
        >
          Clear All
        </button>
      </div>
      <ReactQueryDevtools initialIsOpen />
    </div>
  );
}
