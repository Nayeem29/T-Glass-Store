import { useEffect, useState } from "react"

const useReviews = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    const url = 'https://app.reviewapi.io/api/v1/reviews?apikey=e2fb32a0-b361-11ec-9e10-7b5b31375352&url=https%3A%2F%2Fwww.capterra.com%2Fp%2F140650%2FRecruitee&amount=15';
    fetch(url)
      .then(res => res.json())
      .then(data => setReviews(data.reviews));
  }, []);
  return [reviews, setReviews];
}

export default useReviews;