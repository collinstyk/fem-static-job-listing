import { useJobs } from "../contexts/JobContext";

/* eslint-disable react/prop-types */
function Job({ job }) {
  const { filterCategories, filterJobs } = useJobs();

  const {
    company,
    contract,
    featured,
    languages,
    level,
    location,
    logo,
    new: isNew,
    position,
    postedAt,
    role,
    tools,
  } = job;

  return (
    <div
      className={`${featured ? "border-l-h-grayish-cyan" : "border-l-white"} relative mb-8 w-full items-center rounded-md border-0 border-l-[6px] px-4 py-8 shadow-shadow-job sm:flex sm:justify-between sm:gap-7 sm:px-6 sm:py-4`}
    >
      <div className="flex items-center justify-between sm:gap-4">
        <span className="absolute left-3 top-[-1.5rem] inline-block h-[3rem] w-[3rem] sm:static sm:h-[4.5rem] sm:w-[4.5rem]">
          <img src={`src${logo}`} alt="" className="h-full w-full" />
        </span>
        <div className="flex flex-col gap-2 pb-4 sm:pb-0">
          <div className="flex items-center gap-3 font-semibold sm:gap-2">
            <h1 className="pr-2 text-h-grayish-cyan">{company}</h1>
            {isNew && (
              <span className="rounded-2xl bg-span-grayish-cyan px-[8px] py-[2px] text-white">
                <p>NEW!</p>
              </span>
            )}
            {featured && (
              <span className="rounded-2xl bg-v-dark-grayish-cyan px-[8px] py-[2px] text-white">
                FEATURED
              </span>
            )}
          </div>
          <h1
            className="cursor-pointer font-bold text-v-dark-grayish-cyan hover:text-h-grayish-cyan sm:text-lg sm:font-bold"
            onClick={() => filterJobs(job)}
          >
            {position}
          </h1>
          <ul className="flex gap-6 text-t-grayish-cyan sm:gap-8">
            <li>{postedAt}</li>
            <li className="list-disc">{contract}</li>
            <li className="list-disc">{location}</li>
          </ul>
        </div>
      </div>

      <hr className="border-t-2 border-t-grayish-cyan sm:hidden" />

      <div className="flex flex-wrap justify-start gap-2 pt-4 sm:items-center sm:pt-0">
        {[role, level, ...languages, ...tools].map((item) => (
          <span
            key={item}
            className="cursor-pointer rounded bg-filter-light-grayish-cyan px-2 py-1 font-semibold text-h-grayish-cyan hover:bg-span-grayish-cyan hover:text-white"
            onClick={() => filterCategories(item)}
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

export default Job;
