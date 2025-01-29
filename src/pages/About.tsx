import { Link } from "react-router"

interface SectionProps {
  title: string
  children: React.ReactNode
}

const Section = ({ title, children }: SectionProps) => (
  <section className="mb-12">
    <h2 className="text-3xl font-semibold text-primary mb-4">{title}</h2>
    <div className="text-lg text-primary-content">{children}</div>
  </section>
)

export default function About() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-8">
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
      <Section title="What We Do">
        <p>
          At GoVan, we connect people who need a van with those who have one to
          share. Our platform allows you to either rent a van from a local owner
          or list your own van to earn extra income. No more long rental lines
          or paying for a van you don’t need. Instead, we bring flexibility,
          trust, and convenience to your doorstep.
        </p>
      </Section>

      {/* For Renters Section */}
      <Section title="For Renters">
        <p>
          Need a van for a move, a road trip, or a weekend project? Find the
          perfect van nearby and book it in just a few clicks. With a range of
          options from compact cargo vans to spacious family vehicles, you’ll
          find a solution that fits your needs—and your budget. Best of all,
          you’ll be renting from someone local, so you’re supporting your
          community while driving in comfort.
        </p>
      </Section>

      {/* For Owners Section */}
      <Section title="For Owners">
        <p>
          Got a van that’s sitting idle? Rent it out and start earning money
          with ease. Whether you need extra cash for your next adventure or
          simply want to put your vehicle to good use, our platform makes it
          simple to list your van and set your own terms. Plus, we provide all
          the support you need, from insurance to 24/7 roadside assistance, so
          you can rent with confidence.
        </p>
      </Section>

      {/* Why Choose Us? Section */}
      <Section title="Why Choose Us?">
        <ul
          className="list-inside list-disc space-y-3 text-lg text-primary-content"
          aria-labelledby="why-choose-us"
        >
          <li>
            <strong className="text-secondary">Affordable & Flexible:</strong>{" "}
            Whether you're renting or listing, we make it easy to find the
            perfect van at a price that works for you.
          </li>
          <li>
            <strong className="text-secondary">Safe & Secure:</strong> Enjoy
            peace of mind with comprehensive insurance, secure transactions, and
            a trusted community of renters and owners.
          </li>
          <li>
            <strong className="text-secondary">
              Local & Community-Oriented:
            </strong>{" "}
            Support your neighbors and connect with others in your area. Our
            platform is designed to help local communities thrive.
          </li>
        </ul>
      </Section>

      {/* Our Values Section */}
      <Section title="Our Values">
        <p>
          At GoVan, we believe in making connections that benefit everyone. We
          aim to reduce waste, support local economies, and provide an
          eco-friendly alternative to traditional car rentals. When you choose
          us, you're choosing convenience, trust, and a chance to make a
          positive impact on the world around you.
        </p>
      </Section>

      {/* Join Us Section */}
      <Section title="Join Us">
        <p>
          Whether you’re looking for a van to rent or you’re ready to rent out
          your own, we’re here to make it happen. GoVan is more than just a
          marketplace—it’s a community of people helping each other out, one van
          at a time.
        </p>
        <Link
          to="/login"
          className="btn btn-success mt-6 px-6 py-2 text-lg font-semibold"
          aria-label="Get started by logging in to GoVan"
        >
          Get Started
        </Link>
      </Section>
    </main>
  )
}
