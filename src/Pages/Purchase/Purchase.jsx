import { Card, Label, TextInput, Textarea } from "keep-react";
import { useLoaderData, useParams } from "react-router-dom";
import moment from "moment";
import { Helmet } from "react-helmet";
import SecondaryBtn from "../../Components/Shared/Buttons/SecondaryBtn/SecondaryBtn";
import UsePost from "../../hooks/usePost";
import axios from "axios";
import useTopFoods from "../../hooks/useTopFoods";

import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import useAuth from "../../hooks/useAuth";

const MySwal = withReactContent(Swal);

const Purchase = () => {
  const food = useLoaderData();

  const { user } = useAuth();
  const { id } = useParams();
  const topFoods = useTopFoods();
  const result = topFoods.find((item) => item._id == id);
  console.log(result, food);

  const handlePurchase = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const category = form.category.value;
    const purchase = parseInt(form.quantity.value);
    const price = form.price.value;
    const addby = form.addby.value;
    const origin = form.origin.value;
    // let remaining = quantity - purchase;
    const remain = parseInt(food?.quantity || result?.quantity) - purchase;
    const email = user?.email;
    const purchaseTime = moment().format("MMMM D YYYY");
    const purchasedFood = {
      name,
      photo,
      category,
      purchase,
      quantity: remain,
      price,
      addby,
      origin,
      description: {
        ingredients:
          food?.description?.ingredients || result?.description?.ingredients,
        procedure:
          food?.description?.procedure || result?.description?.procedure,
      },
      email,
      purchaseTime,
    };
    console.log(purchasedFood);

    if (remain < 0) {
      return MySwal.fire("Sorry!", `Not Enough Food`, "error");
    }

    // send data to server
    const url =
      "https://tomatino-fntbxgyr0-haquesomrat.vercel.app/purchasedFood";
    const newData = purchasedFood;
    const msg = {
      title: "Success",
      text: "You Purchased This Food",
      icon: "success",
    };
    UsePost(url, newData, msg);

    axios
      .patch(
        `https://tomatino-fntbxgyr0-haquesomrat.vercel.app/allfoods/${
          food?._id || result?._id
        }`,
        {
          quantity: remain,
        }
      )
      .then((res) => {
        console.log(res.data);
      });
  };

  return (
    <div className="py-10 lg:py-16  px-4">
      <Helmet>
        <title>Purchase | {food?.name || result?.name}</title>
      </Helmet>
      <Card className="w-full p-4 md:p-6 shadow-md">
        <form onSubmit={handlePurchase} className="space-y-5">
          <h2 className="text-3xl lg:text-4xl font-toga text-center text-[#191825] pt-6">
            Purchase Food Item
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            {/* name  */}
            <div>
              <Label value="Name" />
              <TextInput
                name="name"
                placeholder="Food Name"
                value={food?.name || result?.name}
                color="gray"
                sizing="md"
                type="text"
                disabled={true}
                required
              />
            </div>
            {/* photo  */}
            <div>
              <Label value="Photo" />
              <TextInput
                name="photo"
                placeholder="Food Image Link"
                value={food?.photo || result?.photo}
                color="gray"
                sizing="md"
                type="text"
                disabled={true}
                required
              />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            {/* category  */}
            <div>
              <Label value="Category" />
              <TextInput
                name="category"
                placeholder="Food Category"
                color="gray"
                sizing="md"
                type="text"
                value={food?.category || result?.category}
                disabled={true}
                required
              />
            </div>
            {/* price  */}
            <div>
              <Label value="Price($)" />
              <TextInput
                name="price"
                placeholder="Food Price"
                color="gray"
                sizing="md"
                type="number"
                value={food?.price || result?.price}
                disabled={true}
                required
              />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            {/* quantity  */}
            <div>
              <Label value="Qunatity" />
              <TextInput
                name="quantity"
                placeholder="Food Qunatity"
                color="gray"
                sizing="md"
                type="number"
                value="1"
                required
              />
            </div>
            {/* origin  */}
            <div>
              <Label value="Origin(Country)" />
              <TextInput
                name="origin"
                placeholder="Food Origin"
                color="gray"
                sizing="md"
                type="text"
                value={food?.origin || result?.origin}
                disabled={true}
                required
              />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            {/* addby  */}
            <div>
              <Label value="Add By" />
              <TextInput
                name="addby"
                value={food?.addby?.addby || result?.addby}
                placeholder="Food Add By"
                color="gray"
                sizing="md"
                type="text"
                disabled={true}
                required
              />
            </div>
            {/* ingredients */}
            <div>
              <Label value="Ingredients" />
              <TextInput
                name="ingredients"
                placeholder="Food Ingredients"
                color="gray"
                sizing="md"
                type="text"
                value={
                  food?.description?.ingredients ||
                  result?.description?.ingredients
                }
                disabled={true}
                required
              />
            </div>
          </div>
          {/* procedure */}
          <div>
            <Label value="Procedure" />
            <Textarea
              id="procedure"
              name="procedure"
              value={
                food?.description?.procedure || result?.description?.procedure
              }
              placeholder="Food Making Procedure"
              withBg={true}
              disabled={true}
              color="gray"
              border={true}
              rows={4}
              required
            />
          </div>
          <div className="text-center">
            <SecondaryBtn>Purchase Now</SecondaryBtn>
          </div>
        </form>
      </Card>
    </div>
  );
};

export default Purchase;
