import React from "react";
import { MdStar, MdStarHalf, MdKeyboardArrowRight } from "react-icons/md";
import ProductReviewCard from "../../../ui/ProductReviewCard/ProductReviewCard";
import {
  ReviewsContainer,
  ReviewsHeader,
  HeaderContent,
  ReviewsTitle,
  RatingOverview,
  OverallRating,
  StarsWrapper,
  RatingDetails,
  RatingText,
  WriteReviewButton,
  ReviewsGrid,
  LoadMoreContainer,
  LoadMoreButton,
} from "./Styled.ReviewsSection";

const ReviewsSection = ({
  overallRating = 4.8,
  totalReviews = 1240,
  reviews = [],
  onWriteReview,
  onLoadMore,
}) => {
  const defaultReviews = [
    {
      userName: "Jordan D.",
      userInitials: "JD",
      avatarColor: "#2b6cee",
      verificationText: "Verified Buyer",
      timeAgo: "2 days ago",
      rating: 5,
      reviewText:
        "The battery life on this thing is absolutely insane. I haven't been able to kill it in a single day even with heavy gaming. The screen is buttery smooth.",
      helpfulCount: 24,
    },
    {
      userName: "Mia K.",
      userInitials: "MK",
      avatarColor: "#8b5cf6",
      verificationText: "Verified Buyer",
      timeAgo: "1 week ago",
      rating: 5,
      reviewText:
        "Incredible camera array. The low-light performance beats everything else I've tried. Plus the platinum finish looks even better in person.",
      helpfulCount: 12,
    },
  ];

  const displayReviews = reviews.length > 0 ? reviews : defaultReviews;

  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(<MdStar key={`full-${i}`} />);
    }
    if (hasHalfStar) {
      stars.push(<MdStarHalf key="half" />);
    }
    return stars;
  };

  return (
    <ReviewsContainer>
      <ReviewsHeader>
        <HeaderContent>
          <div>
            <ReviewsTitle>Customer Reviews</ReviewsTitle>
            <RatingOverview>
              <OverallRating>{overallRating}</OverallRating>
              <RatingDetails>
                <StarsWrapper>{renderStars(overallRating)}</StarsWrapper>
                <RatingText>
                  Based on {totalReviews.toLocaleString()} ratings
                </RatingText>
              </RatingDetails>
            </RatingOverview>
          </div>
          <WriteReviewButton onClick={onWriteReview}>
            Write a Review
          </WriteReviewButton>
        </HeaderContent>
      </ReviewsHeader>

      <ReviewsGrid>
        {displayReviews.map((review, index) => (
          <ProductReviewCard
            key={index}
            {...review}
            onHelpful={() => console.log("Helpful clicked")}
            onComment={() => console.log("Comment clicked")}
          />
        ))}
      </ReviewsGrid>

      <LoadMoreContainer>
        <LoadMoreButton onClick={onLoadMore}>
          Read all {totalReviews.toLocaleString()} reviews
          <MdKeyboardArrowRight />
        </LoadMoreButton>
      </LoadMoreContainer>
    </ReviewsContainer>
  );
};

export default ReviewsSection;
