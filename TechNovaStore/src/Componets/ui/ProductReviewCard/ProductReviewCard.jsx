import React from "react";
import { MdStar, MdThumbUp, MdChatBubble } from "react-icons/md";
import {
  ReviewCard,
  ReviewHeader,
  UserInfo,
  UserAvatar,
  UserDetails,
  UserName,
  VerificationText,
  StarRating,
  ReviewText,
  ReviewActions,
  ActionButton,
} from "./Styled.ProductReviewCard";

const ProductReviewCard = ({
  userName = "User",
  userInitials = "U",
  avatarColor = "#2b6cee",
  verificationText = "Verified Buyer",
  timeAgo = "1 day ago",
  rating = 5,
  reviewText = "",
  helpfulCount = 0,
  onHelpful,
  onComment,
}) => {
  const renderStars = (count) => {
    return Array.from({ length: count }, (_, i) => <MdStar key={i} />);
  };

  return (
    <ReviewCard>
      <ReviewHeader>
        <UserInfo>
          <UserAvatar $color={avatarColor}>{userInitials}</UserAvatar>
          <UserDetails>
            <UserName>{userName}</UserName>
            <VerificationText>
              {verificationText} • {timeAgo}
            </VerificationText>
          </UserDetails>
        </UserInfo>
        <StarRating>{renderStars(rating)}</StarRating>
      </ReviewHeader>

      <ReviewText>{reviewText}</ReviewText>

      <ReviewActions>
        <ActionButton onClick={onHelpful}>
          <MdThumbUp />
          Helpful ({helpfulCount})
        </ActionButton>
        <ActionButton onClick={onComment}>
          <MdChatBubble />
          Comment
        </ActionButton>
      </ReviewActions>
    </ReviewCard>
  );
};

export default ProductReviewCard;
