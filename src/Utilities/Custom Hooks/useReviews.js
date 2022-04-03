import { useEffect, useState } from "react"

const useReviews = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    // const url = 'https://app.reviewapi.io/api/v1/reviews?apikey=71f39c00-b387-11ec-a34b-9bf65056bca7&url=https%3A%2F%2Fwww.capterra.com%2Fp%2F140650%2FRecruitee&amount=15';
    fetch('comments.json')
      .then(res => res.json())
      .then(data => setReviews(data));
  }, []);
  return [reviews, setReviews];
}

export default useReviews;