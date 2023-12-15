import Link from "next/link";

const About = () => {
  return (
    <>
      <header>
        <nav className="flex gap-8 items-center justify-center py-4 text-gray-500 font-normal border-2 border-b-gray-200">
          <Link href="/">About</Link>

          <Link href="/">Stores</Link>

          <Link href="/">Factories</Link>

          <Link href="/">Environmental Initiatives</Link>

          <Link href="/">Our Carbon Commitment</Link>

          <Link href="/">Annual Impact Report</Link>

          <Link href="/">Cleaner Fashion</Link>
        </nav>
      </header>
      <main className="w-[1400px] mx-auto">
        <section>
          <div className="h-full w-full">
            <img src="/imgAbout/ss1.png" alt="" />
            <div className="">
              <h1 className=" inset-y-1/2 inset-x-1/3 absolute text-center text-6xl font-normal ">
                We believe we can all make a difference.
              </h1>
              <div>
                <h3 className=" inset-y-3/4 pt-4 inset-x-1/3 absolute text-xl font-bold text-center">
                  Our way: Exceptional quality. Ethical factories. Radical
                  Transparency.
                </h3>
              </div>
            </div>
          </div>
        </section>
        <section className="w-[1400px] ">
          <div className="py-[76px] px-[258px] flex flex-col justify-center text-center mx-auto">
            <p className=" text-4xl">
              At Everlane, we want the right choice to be as easy as putting on
              a great T-shirt. That’s why we partner with the best, ethical
              factories around the world. Source only the finest materials. And
              share those stories with you—down to the true cost of every
              product we make. It’s a new way of doing things. We call it
              Radical Transparency.
            </p>
          </div>
        </section>
        <section>
          <div className=" grid grid-cols-2 ">
            <div className="w-[700px] ">
              <img src="/imgAbout/ss3.png" alt="" className="h-full w-full" />
            </div>
            <div className="px-[70px] py-[50%] bg-fuchsia-300">
              <div>
                <h4 className="font-normal text-xs">OUR FACTORIES</h4>
                <h3 className="font-semibold text-5xl">
                  Our ethical approach.
                </h3>
              </div>
              <div className="pt-5">
                <p className="text-sm">
                  We spend months finding the best factories around the
                  world—the same ones that produce your favorite designer
                  labels. We visit them often and build strong personal
                  relationships with the owners. Each factory is given a
                  compliance audit to evaluate factors like fair wages,
                  reasonable hours, and environment. Our goal? A score of 90 or
                  above for every factory.
                </p>
              </div>
            </div>
          </div>
        </section>
        <img src="/imgAbout/img.png" alt="" className="h-[637px] w-full" />
        <section>
          <div className=" grid grid-cols-2 ">
            <div className="px-[70px] py-[50%] bg-fuchsia-100">
              <div>
                <h4 className="font-normal text-xs">OUR QUALITY</h4>
                <h3 className="font-semibold text-5xl">
                  Designed <br />
                  to last.
                </h3>
              </div>
              <div className="pt-5">
                <p className="text-sm">
                  At Everlane, we’re not big on trends. We want you to wear our
                  pieces for years, even decades, to come. That’s why we source
                  the finest materials and factories for our timeless products—
                  like our Grade-A cashmere sweaters, Italian shoes, and
                  Peruvian Pima tees.
                </p>
              </div>
            </div>
            <div className="w-[700px] ">
              <img src="/imgAbout/ss4.png" alt="" className="h-full w-full" />
            </div>
          </div>
        </section>
        <img src="/imgAbout/img2.png" alt="" className="h-[560px] w-full" />
        <section>
          <div className=" grid grid-cols-2 ">
            <div className="w-[700px]  ">
              <img src="/imgAbout/ss5.png" alt="" className="h-full w-full" />
            </div>
            <div className="px-[70px] py-[50%] bg-white">
              <div>
                <h4 className="font-normal text-xs">OUR PRICES</h4>
                <h3 className="font-semibold text-5xl">
                  Radically Transparent.
                </h3>
              </div>
              <div className="pt-5">
                <p className="text-sm">
                  We believe our customers have a right to know how much their
                  clothes cost to make. We reveal the true costs behind all of
                  our products—from materials to labor to transportation—then
                  offer them to you, minus the traditional retail markup.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full">
          <div className="py-[82px] px-[200px] mx-auto">
            <div className="pb-5 w-[1000px]">
              <h1 className="text-center text-3xl font-normal ">
                More to Explore
              </h1>
            </div>
            <div className="flex ">
              <div className="">
                <img
                  src="/imgAbout/ss6-1.png"
                  alt="ss6"
                  className="w-[320px] h-[195px]"
                />
                <h4 className="text-center pt-2.5 font-semibold text-base">
                  Our Products
                </h4>
              </div>
              <div className="px-5">
                <img
                  src="/imgAbout/ss6-2.png"
                  alt="ss6"
                  className="w-[320px] h-[195px]"
                />
                <h4 className="text-center pt-2.5 font-semibold text-base">
                  Our Stores
                </h4>
              </div>
              <div>
                <img
                  src="/imgAbout/ss6-3.png"
                  alt="ss6"
                  className="w-[320px] h-[195px]"
                />
                <h4 className="text-center pt-2.5 font-semibold text-base">
                  Careers
                </h4>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default About;
