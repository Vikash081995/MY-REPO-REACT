// <------------------------------When using UseInfiniteQuery =---->
// data =object containing infinite  query data
// data.pages = array containing fetched pages
// data.pageParams = array contining the page params used to fetch the pages

// fetchNextPage and fetchPreviousPage functions are avaialable
// getNextPageParams and getPreviousPageParams are available for both determining if there is more data to load and the information

// hasNextPage = true
//hasPreviousPage = true
// isFetchingNextPage and isFetchingPreviousPage -available to distinguish between background refresh and loading more state

import React from "react";
import { useInfiniteQuery } from "react-query";

function Projects() {
  const fetchProjects = ({ pageParam = 0 }) =>
    fetch("api/projects?cursor=" + pageParam);

  const {
    data,
    error,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
    status
  } = useInfiniteQuery("projects", fetchProjects, {
    getNextPageParam: (lastPage, pages) => lastPage.nextCursor
  });

  return status === "loading" ? (
    <p>loading...</p>
  ) : status === "error" ? (
    <p>Error:{error.message}</p>
  ) : (
    <>
      {data.pages.map((group, i) => (
        <React.Fragment key={i}>
          {group.projects.map((project) => (
            <p key={project.id}>{project.name}</p>
          ))}
        </React.Fragment>
      ))}
      <div>
        <button
          onClick={() => fetchNextPage()}
          disabled={!hasNextPage || isFetchingNextPage}
        >
          {isFetchingNextPage
            ? "Loading more..."
            : hasNextPage
            ? "load more"
            : "Nothing more to load "}
        </button>
      </div>
      <div>{isFetching && !isFetchingNextPage ? "Fetching..." : null}</div>
    </>
  );
}
