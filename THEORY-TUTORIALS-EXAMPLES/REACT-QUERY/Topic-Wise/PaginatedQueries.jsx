import { useQuery } from "react-query";

function Todos() {
  const [page, setPage] = useState(0);

  const fetchProjects = (page = 0) => {
    fetch("/api/projects?page=" + page).then((resp) => resp.json());
  };

  const { isLoading, isError, error, data, isFetching, isPreviousData } =
    useQuery(["projects", page], () => fetchProjects(page), {
      keepPreviousData: true
    });

  return (
    <div>
      {isLoading ? (
        <div>Loading...</div>
      ) : isError ? (
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
        onClick={() => setPage((old) => Math.max(old - 1, 0))}
        disabed={page === 0}
      >
        Previous Page
      </button>
      <button
        onClick={() => {
          if (!isPreviousData && data.hasMore) {
            setPage((old) => old + 1);
          }
        }}
        disabed={isPreviousData || !data?.hasMore}
      >
        Next Page
      </button>
      {isFetching ? <span>Loading....</span> : null}
    </div>
  );
}
