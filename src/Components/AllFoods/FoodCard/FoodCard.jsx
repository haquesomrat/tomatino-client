"use client";

import { Badge, Card } from "keep-react";
import { Heart } from "phosphor-react";
import PropTypes from "prop-types";
import PrimaryButton from "../../Shared/Buttons/PrimaryButton/PrimaryButton";
import { Link } from "react-router-dom";
import { FcRightUp2 } from "react-icons/fc";

const FoodCard = ({ food }) => {
  const { _id, photo, name, quantity, purchase, price, category, description } =
    food;
  return (
    <Card
      className="overflow-hidden rounded-xl shadow-md hover:scale-105 duration-500"
      imgSrc={photo}
      imgSize="md"
    >
      <Card.Container className="absolute right-3.5 top-3.5 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-metal-50/50">
        <Heart size={20} weight="bold" color="white" />
      </Card.Container>
      <Card.Container className="p-6">
        <Card.Container className="flex items-center justify-between">
          <Badge size="xs" colorType="light" color="error">
            {category}
          </Badge>

          <Card.Title>
            <span className="font-toga font-normal">${price}</span>
          </Card.Title>
        </Card.Container>
        <Card.Container className="my-3">
          <Card.Title>
            <span className="font-toga font-normal">{name}</span>
          </Card.Title>
          <Card.Description>
            <span className="line-clamp-2">{description?.procedure}</span>
          </Card.Description>
        </Card.Container>
        <Card.Container className="flex items-center justify-between gap-5">
          <Link to={`/foodDetails/${_id}`}>
            <PrimaryButton>
              <span className="pr-2">Details </span>
              <FcRightUp2 />
            </PrimaryButton>
          </Link>
          {purchase ? (
            <p className="text-gray-600">
              Total sold: <span className="font-toga">{purchase}</span>{" "}
            </p>
          ) : (
            <p className="text-gray-600">
              Available: <span className="font-toga">{quantity}</span>{" "}
            </p>
          )}
        </Card.Container>
      </Card.Container>
    </Card>
  );
};

export default FoodCard;

FoodCard.propTypes = {
  food: PropTypes.object,
};
