import Link from "next/link";

export default function CategoryGallery() {
  return (
    <section className="bg-[var(--light)] bg-pat py-5">
      <div className="py-3" />
      <div className="container text-center">
        <h3 className="text-[var(--primary)]">CATEGORIES</h3>
        <h1 className="font-bold text-4xl mb-3">Choose Your Category</h1>
      </div>
      <div className="category-grid">
        <div
          className="category-card"
          style={{ backgroundImage: 'url("/images/games.png")', gridArea: "bounce" }}
          aria-label="Bounce Houses"
        >
          <div className="category-overlay">
            <div className="label-tag">
              <h3>Bounce Houses</h3>
              <Link href="#">Book Now →</Link>
            </div>
          </div>
        </div>
        <div
          className="category-card"
          style={{ backgroundImage: 'url("/images/games.png")', gridArea: "combo" }}
          aria-label="Combo Jumpers"
        >
          <div className="category-overlay">
            <div className="label-tag">
              <h3>Combo Jumpers</h3>
              <Link href="#">Book Now →</Link>
            </div>
          </div>
        </div>
        <div
          className="category-card"
          style={{
            backgroundImage: 'url("/images/games.png")',
            gridArea: "watercombos",
            /* gridColumn: 2 */
          }}
          aria-label="Water Combos"
        >
          <div className="category-overlay">
            <div className="label-tag">
              <h3>Water Combos</h3>
              <Link href="#">Book Now →</Link>
            </div>
          </div>
        </div>
        <div
          className="category-card"
          style={{
            backgroundImage: 'url("/images/games.png")',
            gridArea: "waterslides",
            /* gridColumn: 3 */
          }}
          aria-label="Water Slides"
        >
          <div className="category-overlay">
            <div className="label-tag">
              <h3>Water Slides</h3>
              <Link href="#">Book Now →</Link>
            </div>
          </div>
        </div>
        <div
          className="category-card"
          style={{
            backgroundImage: 'url("/images/games.png")',
            gridArea: "interactive"
          }}
          aria-label="Interactive Games"
        >
          <div className="category-overlay">
            <div className="label-tag">
              <h3>Interactive Games</h3>
              <Link href="#">Book Now →</Link>
            </div>
          </div>
        </div>
        <div
          className="category-card"
          style={{
            backgroundImage: 'url("/images/games.png")',
            gridArea: "canopies"
          }}
          aria-label="Canopies, Tables and Chairs"
        >
          <div className="category-overlay">
            <div className="label-tag">
              <h3>Canopies, Tables &amp; Chairs</h3>
              <Link href="#">Book Now →</Link>
            </div>
          </div>
        </div>
        <div
          className="category-card"
          style={{
            backgroundImage: 'url("/images/games.png")',
            gridArea: "obstacle"
          }}
          aria-label="Obstacle Courses"
        >
          <div className="category-overlay">
            <div className="label-tag">
              <h3>Obstacle Courses</h3>
              <Link href="#">Book Now →</Link>
            </div>
          </div>
        </div>
        <div
          className="category-card"
          style={{
            backgroundImage: 'url("/images/games.png")',
            gridArea: "concessions"
          }}
          aria-label="Concessions"
        >
          <div className="category-overlay">
            <div className="label-tag">
              <h3>Concessions</h3>
              <Link href="#">Book Now →</Link>
            </div>
          </div>
        </div>
        <div
          className="category-card"
          style={{ backgroundImage: 'url("/images/games.png")', gridArea: "extras" }}
          aria-label="Extras"
        >
          <div className="category-overlay">
            <div className="label-tag">
              <h3>Extras</h3>
              <Link href="#">Book Now →</Link>
            </div>
          </div>
        </div>
        <div
          className="category-card"
          style={{ backgroundImage: 'url("/images/games.png")', gridArea: "extra1" }}
          aria-label="Extras"
        >
          <div className="category-overlay">
            <div className="label-tag">
              <h3>Extras</h3>
              <Link href="#">Book Now →</Link>
            </div>
          </div>
        </div>
        <div
          className="category-card"
          style={{ backgroundImage: 'url("/images/games.png")', gridArea: "extra2" }}
          aria-label="Extras"
        >
          <div className="category-overlay">
            <div className="label-tag">
              <h3>Extras</h3>
              <Link href="#">Book Now →</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}