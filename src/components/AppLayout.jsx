import JobsContainer from "./JobsContainer";

function AppLayout() {
  return (
    <div>
      <header className="md:bg-header-desktop bg-header-mobile bg-grayish-cyan h-36 w-screen bg-cover bg-center"></header>
      <JobsContainer />
    </div>
  );
}

export default AppLayout;
