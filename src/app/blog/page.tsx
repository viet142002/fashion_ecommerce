const Blog = () => {
  return (
    <>
      <section>
        <div className="px-[60px] py-16">
          <div className="w-full h-3.5 border-2 border-b-cyan-500 bg-black"></div>
          <div className="h-[176px">
            <h1 className="font-semibold text-[160px]">EVERWORLD</h1>
          </div>
          <div className="h-[67px]">
            <p className="text-2xl font-normal">
              We’re on a mission to clean up a dirty industry. <br />
              These are the people, stories, and ideas that will help us get
              there.
            </p>
          </div>
        </div>
      </section>
      <section>
        <div className="py-[120px] px-[60px]">
          <div className="pb-3">
            <h1 className="font-semibold text-[54px]">The Latest</h1>
          </div>
          <div>
            <div className="w-[410px] ">
              <img
                src="/imgBlog/blogss2.png"
                alt="ss2-1"
                className="w-[410px] h-[413px]"
              />
              <div className="pt-5">
                <h3 className="mb-3 text-[32px] border ">
                  How To Style Winter Whites
                </h3>
                <div className=" ">
                  <button className=" border rounded-3xl py-1 px-5 ">
                    Style
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog;
