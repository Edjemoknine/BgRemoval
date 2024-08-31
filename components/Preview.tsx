import BgContainer from "./BgContainer";

export default function Preview() {
  return (
    <>
      {/* Hero */}
      <BgContainer>
        <div className="relative overflow-hidden py-24 lg:py-32">
          <div className="mx-auto  max-w-7xl p-6 lg:px-8">
            <div className="max-w-2xl text-center mx-auto">
              <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
                Just Picture It!
              </h1>
              <p className="mt-3 text-lg text-muted-foreground">
                Remove image backgrounds automatically in 5 seconds with just
                one click
              </p>
            </div>
            <div className="mt-10 relative max-w-5xl mx-auto  ">
              <video
                src="https://www.slazzer.com/static/images/home-page/home-page-banner.mp4"
                className="w-full object-cover h-[550px]"
                autoPlay
                muted
                loop
              ></video>

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
