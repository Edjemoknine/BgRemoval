import BgContainer from "./BgContainer";

export default function Preview() {
  return (
    <>
      {/* Hero */}
      <BgContainer>
        <div className="relative overflow-hidden py-24 lg:py-32">
          <div className="container">
            <div className="max-w-2xl text-center mx-auto">
              <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
                Nano-Frontiers: Reshaping Tech
              </h1>
              <p className="mt-3 text-xl text-muted-foreground">
                Nano-computing breaks barriers, unlocking new tech horizons.
              </p>
            </div>
            <div className="mt-10 relative max-w-5xl mx-auto">
              <img
                src="https://imgs.search.brave.com/ludpps_-alzvq0tnPmcrrcLzuRYfZVmFEHfgp5gmha8/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9zaW1w/bGlmaWVkLmNvbS9z/aXRlaW1hZ2VzL2Jh/Y2tncm91bmQtcmVt/b3Zlci9iZy1yZW1v/dmUucG5n"
                className="rounded-xl w-full h-full bg-cover"
                alt="Image Description"
              />
              <div className="absolute bottom-12 -start-20 -z-[1] w-48 h-48 bg-gradient-to-b from-primary-foreground via-primary-foreground to-background p-px rounded-lg">
                <div className="w-48 h-48 rounded-lg bg-background/10" />
              </div>
              <div className="absolute -top-12 -end-20 -z-[1] w-48 h-48 bg-gradient-to-t from-primary-foreground via-primary-foreground to-background p-px rounded-full">
                <div className="w-48 h-48 rounded-full bg-background/10" />
              </div>
            </div>
          </div>
        </div>
      </BgContainer>
      {/* End Hero */}
    </>
  );
}
