import { useJobs } from "../contexts/JobContext";
import Filters from "./Filters";
import Job from "./Job";

function JobsContainer() {
  const { jobs, isLoading, categories } = useJobs();
  const hasCategories = categories.length > 0;

  return (
    <div className="relative top-[-2rem]  mx-auto w-[90%] max-w-5xl text-sm">
      {hasCategories && <Filters />}
      <div className="mt-[3.5rem]">
        {jobs.map((job) => (
          <Job key={job.id} job={job} />
        ))}
      </div>
    </div>
  );
}

export default JobsContainer;
