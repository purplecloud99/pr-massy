export default function Category() {
  return (
    <div className="overlay py-10">
      <div className="container flex flex-col gap-2 text-center">
        <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
          {[...Array(5)].map((_, i) => (
          <div className="small-category-card bg-[var(--light)] rounded-xl p-4" key={i}>
            <div className="mb-2 flex justify-center">
              <img
                loading="lazy"
                src="/images/icon-category-anim.gif"
                alt="category animation"
                width={60}
              />
            </div>
            <h3 className="">Interactive Games</h3>
          </div>
          ))}
        </div>
      </div>
    </div>

  )
}