
const MostPopularVcancy = () => {
  return (
    <section className="bg-[white] py-10 pt-5">
      <h1 className="lg:text-5xl md:text-4xl sm:text-3xl xs:text-2xl font-bold tracking-wide pb-5 px-2">
        Most Popular Vacancies
      </h1>
      <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 xs:grid-cols-1 mx-auto place-items-center">
        <div className="shadow-md p-2 rounded-md">
          <h3 className="text-xl font-medium">Ansteh</h3>
          <p className="text-muted-foreground">78389 open positions</p>
        </div>
      </div>
    </section>
  )
}

export default MostPopularVcancy