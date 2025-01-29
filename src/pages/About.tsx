export default function About() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      {/* Title Section */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-primary">About Us</h1>
        <p className="text-lg text-primary-content mt-4">
          Welcome to GoVan, where convenience meets community! We’re on a
          mission to make van rentals easy, affordable, and accessible to
          everyone—whether you're renting for a weekend getaway, moving across
          town, or sharing your van to earn a little extra cash.
        </p>
      </div>

      {/* What We Do Section */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold text-primary mb-4">What We Do</h2>
        <p className="text-lg text-primary-content">
          At GoVan, we connect people who need a van with those who have one to
          share. Our platform allows you to either rent a van from a local owner
          or list your own van to earn extra income. No more long rental lines
          or paying for a van you don’t need. Instead, we bring flexibility,
          trust, and convenience to your doorstep.
        </p>
      </section>

      {/* For Renters Section */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold text-primary mb-4">
          For Renters
        </h2>
        <p className="text-lg text-primary-content">
          Need a van for a move, a road trip, or a weekend project? Find the
          perfect van nearby and book it in just a few clicks. With a range of
          options from compact cargo vans to spacious family vehicles, you’ll
          find a solution that fits your needs—and your budget. Best of all,
          you’ll be renting from someone local, so you’re supporting your
          community while driving in comfort.
        </p>
      </section>

      {/* For Owners Section */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold text-primary mb-4">For Owners</h2>
        <p className="text-lg text-primary-content">
          Got a van that’s sitting idle? Rent it out and start earning money
          with ease. Whether you need extra cash for your next adventure or
          simply want to put your vehicle to good use, our platform makes it
          simple to list your van and set your own terms. Plus, we provide all
          the support you need, from insurance to 24/7 roadside assistance, so
          you can rent with confidence.
        </p>
      </section>

      {/* Why Choose Us? Section */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold text-primary mb-4">
          Why Choose Us?
        </h2>
        <ul className="list-inside list-disc space-y-3 text-lg text-primary-content">
          <li>
            <strong className="text-primary">Affordable & Flexible:</strong>{" "}
            Whether you're renting or listing, we make it easy to find the
            perfect van at a price that works for you.
          </li>
          <li>
            <strong className="text-primary">Safe & Secure:</strong> Enjoy peace
            of mind with comprehensive insurance, secure transactions, and a
            trusted community of renters and owners.
          </li>
          <li>
            <strong className="text-primary">
              Local & Community-Oriented:
            </strong>{" "}
            Support your neighbors and connect with others in your area. Our
            platform is designed to help local communities thrive.
          </li>
        </ul>
      </section>

      {/* Our Values Section */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold text-primary mb-4">Our Values</h2>
        <p className="text-lg text-primary-content">
          At GoVan, we believe in making connections that benefit everyone. We
          aim to reduce waste, support local economies, and provide an
          eco-friendly alternative to traditional car rentals. When you choose
          us, you're choosing convenience, trust, and a chance to make a
          positive impact on the world around you.
        </p>
      </section>

      {/* Join Us Section */}
      <section className="text-center mb-8">
        <h2 className="text-3xl font-semibold text-primary mb-4">Join Us</h2>
        <p className="text-lg text-primary-content">
          Whether you’re looking for a van to rent or you’re ready to rent out
          your own, we’re here to make it happen. GoVan is more than just a
          marketplace—it’s a community of people helping each other out, one van
          at a time.
        </p>
        <a
          href="/signup"
          className="btn btn-primary mt-6 px-6 py-2 text-lg font-semibold"
        >
          Get Started
        </a>
      </section>
    </div>
  )
}
