import { BsStarFill } from "react-icons/bs"

export default function Reviews() {
  const reviewsData = [
    {
      rating: 5,
      name: "Elliot",
      date: "January 3, 2023",
      text: "The beach bum is such an awesome van! Such a comfortable trip. We had it for 2 weeks and there was not a single issue. Super clean when we picked it up and the host is very comfortable and understanding. Highly recommend!",
      id: "1",
    },
    {
      rating: 5,
      name: "Sandy",
      date: "December 12, 2022",
      text: "This is our third time using the Modest Explorer for our travels and we love it! No complaints, absolutely perfect!",
      id: "2",
    },
    {
      rating: 4,
      name: "Mark",
      date: "March 29, 2021",
      text: "The Van was great! The only thiing I wish was that there were more dates available for rental. I am looking forward to renting it again and the next adventure!",
      id: "3",
    },
  ]

  // Calculate the total number of reviews
  const totalReviews = reviewsData.length
  const ratingDistribution = [0, 0, 0, 0, 0]
  reviewsData.forEach((review) => {
    ratingDistribution[review.rating - 1]++
  })

  const ratingPercentages = ratingDistribution.map(
    (count) => (count / totalReviews) * 100
  )

  return (
    <section className="px-8 max-w-screen-xl mx-auto">
      {/* Header */}
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-accent">Your Reviews</h2>
        <p className="text-lg text-primary-content">
          Last{" "}
          <span className="font-semibold text-primary-content">30 days</span>
        </p>
      </div>

      {/* Review Chart */}
      <div className="flex flex-col items-center gap-2 mb-8 max-w-2xl mx-auto">
        {ratingDistribution.reverse().map((_, index) => (
          <div
            key={index}
            className="flex justify-between items-center gap-2 grow w-full"
          >
            <p className="shrink-0">{5 - index} stars</p>{" "}
            <progress
              className="progress"
              value={ratingPercentages[4 - index]}
              max={100}
              aria-label={`${5 - index}-star reviews`}
              aria-valuenow={ratingPercentages[4 - index]}
              aria-valuemin={0}
              aria-valuemax={100}
            ></progress>
          </div>
        ))}
      </div>

      <h3 className="text-2xl font-semibold mb-6">Reviews ({totalReviews})</h3>

      {/* Review Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {reviewsData.length > 0 ? (
          reviewsData.map((review) => (
            <article key={review.id} className="card bg-base-100 shadow-lg p-6">
              <div
                className="flex items-center mb-4"
                aria-label={`${review.rating} stars`}
              >
                {/* Star Ratings */}
                <div
                  className="flex text-yellow-400"
                  role="img"
                  aria-label={`Rating of ${review.rating} stars`}
                >
                  {[...Array(review.rating)].map((_, i) => (
                    <BsStarFill
                      key={i}
                      className="w-5 h-5"
                      aria-hidden="true"
                    />
                  ))}
                </div>
              </div>

              <div className="mb-4">
                {/* Reviewer's Name and Date */}
                <p className="text-xl font-semibold text-primary-content">
                  {review.name}
                </p>
                <p className="text-sm text-primary-content">{review.date}</p>
              </div>

              <p className="text-primary-content">{review.text}</p>
            </article>
          ))
        ) : (
          <p>No reviews available at this time.</p>
        )}
      </div>
    </section>
  )
}
