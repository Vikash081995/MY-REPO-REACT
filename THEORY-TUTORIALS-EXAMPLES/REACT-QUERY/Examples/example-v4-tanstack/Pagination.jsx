import react, { useState, useEffect } from "react";
import axios from "axios";
import {
  useQuery,
  useQueryClient,
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

async function fetchProjects(page = 0) {
  const { data } = await axios.get("/api/projects?page=" + page);
  return data;
}

function Example() {
  const queryClient = new useQueryClient();
  const [page, setPage] = useState(0);

  const { status, data, error, isFetching, isPreviousData } = useQuery(
    ["projects", page],
    () => fetchProjects(page),
    {
      keepreviousData: true,
      staleTime: 5000
    }
  );
  //preFetch the next Page !
  useEffect(() => {
    if (!isPreviousData && data?.hasMore) {
      queryClient.prefetchQuery(["projects", page + 1], () =>
        fetchProjects(page + 1)
      );
    }
  }, [data, isPreviousData, page, queryClient]);
  return (
    <div>
      <p>
        In this example, each page of data remains visible as the next page is
        fetched. The buttons and capability to proceed to the next page are also
        supressed until the next page cursor is known. Each page is cached as a
        normal query too, so when going to previous pages, you'll see them
        instantaneously while they are also refetched invisibly in the
        background.
      </p>
      {status === "loading" ? (
        <div>Loading....</div>
      ) : status === "error" ? (
        <div>Error:{error.message}</div>
      ) : (
        <div>
          {data.projects.map((project) => (
            <p key={project.id}>{project.name}</p>
          ))}
        </div>
      )}
      <span>Current Page:{page + 1}</span>
      <button
        onClick={() => setPage((old) => (old?.hasMore ? old + 1 : old))}
        disabled={page === 0}
      >
        Previous Page
      </button>
      <button
        onClick={() => {
          setPage((old) => (data?.hasMore ? old + 1 : old));
        }}
        disabled={isPreviousData || !data?.hasMore}
      >
        Next Page
      </button>
      {
        // Since the last page's data potentially sticks around between page requests,
        // we can use `isFetching` to show a background loading
        // indicator since our `status === 'loading'` state won't be triggered
        isFetching ? <span> Loading...</span> : null
      }{" "}
      <ReactQueryDevtools initialIsOpen />
    </div>
  );
}
