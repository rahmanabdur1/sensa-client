import { useState } from 'react';
import style from './ClientReviews.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { useTranslation } from 'react-i18next';

export type ReviewData = {
  name: string;
  location: string;
  content: Array<{ key: string }>;
};

export const reviewsData: ReviewData[] = [
  {
    name: "Sharon D, 36",
    location: "Salt Lake City, US",
    content: [{ key: "content1" }],
  },
  {
    name: "David S, 41",
    location: "Melbourne, AUS",
    content: [{ key: "content2" }],
  },
  {
    name: "Ellie F, 25",
    location: "Brighton, UK",
    content: [{ key: "content3" }],
  },
];

export function ClientReviews() {
  const { t } = useTranslation();
  const [reviewsOrder, setReviewsOrder] = useState<string[]>(['1', '2', '3']);
  const [selectedButton, setSelectedButton] = useState<number>(1);

  const rearrangeReviews = (newOrder: string[], buttonNumber: number) => {
    setReviewsOrder(newOrder);
    setSelectedButton(buttonNumber);
  };

  return (
    <div className={style.container}>
      <div className={style.review_content}>
        <div className={style.review_text}>
          <h2>{t('clientReviews.title')}</h2>
          <p>{t('clientReviews.subtitle')}</p>
        </div>
        <div className={style.reviewItems}>
          {reviewsOrder.map((reviewId) => {
            const review = reviewsData[parseInt(reviewId) - 1];
            return (
              <div key={reviewId} className={style.reviewItem}>
                <div className={style.reviewItem_text}>
                  <span>{review.name}</span>
                  <span>{review.location}</span>
                </div>
                <div className={style.stars}>
                  {[...Array(5)].map((_, index) => (
                    <FontAwesomeIcon key={index} icon={faStar} />
                  ))}
                </div>
                <div className={style.client_review}>
                  {review.content.map((item, i) => (
                    <p key={i}>{t(`reviewsData.${item.key}`)}</p>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className={style.navigate_btn}>
        <button
          onClick={() => rearrangeReviews(['1', '2', '3'], 1)}
          className={selectedButton === 1 ? `${style.selected}` : ''}
        ></button>
        <button
          onClick={() => rearrangeReviews(['2', '3', '1'], 2)}
          className={selectedButton === 2 ? `${style.selected}` : ''}
        ></button>
        <button
          onClick={() => rearrangeReviews(['3', '1', '2'], 3)}
          className={selectedButton === 3 ? `${style.selected}` : ''}
        ></button>
      </div>
    </div>
  );
}


