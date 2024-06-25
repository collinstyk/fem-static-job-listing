import { useContext, useEffect, useReducer } from "react";
import { createContext } from "react";

const JobContext = createContext();

const initialState = {
  jobs: [],
  jobsCache: [],
  isLoading: false,
  categories: [],
};

function reducer(state, action) {
  switch (action.type) {
    case "loading":
      return { ...state, isLoading: true };

    case "jobs/loaded":
      return {
        ...state,
        isLoading: false,
        jobs: action.payload,
        jobsCache: action.payload,
      };

    case "filter":
      return {
        ...state,
        jobs: action.payload.jobs,
        categories: [...state.categories, action.payload.filterWord],
      };
    case "filterJobs":
      return {
        ...state,
        jobs: action.payload.newJobs,
        categories: action.payload.newCategories,
      };
    case "remove-filter":
      return {
        ...state,
        jobs: action.payload.jobs,
        categories: action.payload.newCategories,
      };
    case "clear-filters":
      return {
        ...state,
        jobs: [...state.jobsCache],
        categories: action.payload,
      };
  }
}

// eslint-disable-next-line react/prop-types
function JobProvider({ children }) {
  const [{ jobs, isLoading, categories, jobsCache }, dispatch] = useReducer(
    reducer,
    initialState,
  );

  const isSubsetOf = (arr1, arr2) =>
    [...arr2].every((item) => arr1.includes(item));

  useEffect(
    function () {
      async function getJobs() {
        dispatch({ type: "loading" });
        try {
          const res = await fetch("/data.json");
          if (res) {
            const data = await res.json();

            dispatch({ type: "jobs/loaded", payload: data });
            return data;
          }
        } catch (err) {
          console.error(err);
        }
      }
      getJobs();
    },
    [dispatch],
  );

  function filterCategories(filterWord) {
    if (categories.includes(filterWord)) return;

    const filteredJobs = [...jobs].filter(
      (job) =>
        job.role === filterWord ||
        job.level === filterWord ||
        job.languages.includes(filterWord) ||
        job.tools.includes(filterWord),
    );

    dispatch({
      type: "filter",
      payload: {
        jobs: filteredJobs,
        filterWord,
      },
    });
  }

  function removeFilter(filterWord) {
    const newCategories = [...categories].filter(
      (category) => category !== filterWord,
    );

    const retrievedJobsData = [...jobsCache].filter((job) =>
      isSubsetOf(
        [job.role, job.level, ...job.languages, ...job.tools],
        newCategories,
      ),
    );

    dispatch({
      type: "remove-filter",
      payload: {
        newCategories,
        jobs: retrievedJobsData,
      },
    });
  }

  function filterJobs(job) {
    const newCategories = [job.role, job.level, ...job.languages, ...job.tools];

    const newJobs = jobsCache.filter((j) =>
      isSubsetOf([j.role, j.level, ...j.languages, ...j.tools], newCategories),
    );

    dispatch({
      type: "filterJobs",
      payload: {
        newCategories,
        newJobs,
      },
    });
  }

  function clearFilters() {
    dispatch({ type: "clear-filters", payload: [] });
  }

  return (
    <JobContext.Provider
      value={{
        jobs,
        isLoading,
        categories,
        filterCategories,
        removeFilter,
        filterJobs,
        clearFilters,
      }}
    >
      {children}
    </JobContext.Provider>
  );
}

function useJobs() {
  const context = useContext(JobContext);

  if (context === undefined)
    throw new Error("JobContext was used outside of the JobProvider");

  return context;
}

// eslint-disable-next-line react-refresh/only-export-components
export { JobProvider, useJobs };
