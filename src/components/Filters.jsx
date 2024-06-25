import { useJobs } from "../contexts/JobContext";

function Filters() {
  const { categories, removeFilter, clearFilters } = useJobs();

  return (
    <div className="flex justify-between rounded-md bg-white p-4 shadow-shadow-job sm:px-7">
      <div className="flex flex-wrap gap-2">
        {categories.map((category) => (
          <div className="flex flex-wrap gap-4" key={category}>
            <div className="p-l-2 flex h-fit items-center gap-2 overflow-hidden rounded bg-filter-light-grayish-cyan pl-2">
              <p className="flex h-8 items-center font-semibold text-h-grayish-cyan">
                {category}
              </p>
              <div
                className="flex h-8 w-7 cursor-pointer items-center justify-around bg-span-grayish-cyan hover:bg-v-dark-grayish-cyan"
                onClick={() => removeFilter(category)}
              >
                <img
                  src="src/images/icon-remove.svg"
                  alt="remove icon"
                  className="h-[40%] w-[50%]"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
      <div
        className="flex w-1/4 cursor-pointer items-center justify-around text-t-grayish-cyan hover:text-h-grayish-cyan hover:underline"
        onClick={clearFilters}
      >
        <p className="h-4 align-middle font-semibold">Clear</p>
      </div>
    </div>
  );
}

export default Filters;
