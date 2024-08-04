function App() {
  return (
    <>
      <main className="">
        <div className="flex items-center flex-col lg:flex-row p-3 lg:p-0 justify-center lg:h-screen h-full ">
          <div className="lg:w-3/12 w-full border h-[600px] bg-[#e38826]">
            <img src="/images/icon-sedans.svg" className="mt-12 ml-16" alt="" />
            <h1 className="font-bold text-one ml-16 mt-12 text-white text-4xl">
              SEDANS
            </h1>
            <p className="px-16 mt-10 text-white text-tow">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
              aspernatur cumque repellat, saepe atque voluptates adipisci
              consequuntur aut ratione, nesciunt consectetur? Facere,
              laboriosam.
            </p>
            <button className="text-tow mt-16 hover:text-[#e38826] border-2 hover:bg-white duration-300 transition-all rounded-full px-4 py-2 text-white ml-16">
              Learn More
            </button>
          </div>
          <div className="w-full lg:w-3/12 border h-[600px] bg-[#006970]">
            <img src="/images/icon-suvs.svg" className="mt-12 ml-16" alt="" />
            <h1 className="font-bold text-one ml-16 mt-12 text-white text-4xl">
              SUVS
            </h1>
            <p className="px-16 mt-10 text-white text-tow">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
              aspernatur cumque repellat, saepe atque voluptates adipisci
              consequuntur aut ratione, nesciunt consectetur? Facere,
              laboriosam.
            </p>
            <button className="text-tow mt-16 hover:text-[#006970] border-2 hover:bg-white duration-300 transition-all rounded-full px-4 py-2 text-white ml-16">
              Learn More
            </button>
          </div>
          <div className="w-full lg:w-3/12 border h-[600px] bg-[#004241]">
            <img src="/images/icon-luxury.svg" className="mt-12 ml-16" alt="" />
            <h1 className="font-bold text-one ml-16 mt-12 text-white text-4xl">
              LUXURY
            </h1>
            <p className="px-16 mt-10 text-white text-tow">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
              aspernatur cumque repellat, saepe atque voluptates adipisci
              consequuntur aut ratione, nesciunt consectetur? Facere,
              laboriosam.
            </p>
            <button className="text-tow mt-16 hover:text-[#004241] border-2 hover:bg-white duration-300 transition-all rounded-full px-4 py-2 text-white ml-16">
              Learn More
            </button>
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
