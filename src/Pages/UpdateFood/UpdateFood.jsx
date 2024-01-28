import { Card, Label, TextInput, Textarea } from "keep-react";
import { Helmet } from "react-helmet";
import PrimaryButton from "../../Components/Shared/Buttons/PrimaryButton/PrimaryButton";
import moment from "moment";
import { useLoaderData } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import useAuth from "../../hooks/useAuth";

const MySwal = withReactContent(Swal);

const UpdateFood = () => {
  const { user } = useAuth();
  const food = useLoaderData();

  const {
    _id,
    photo,
    name,
    quantity,
    price,
    addby,
    origin,
    category,
    description,
  } = food;
  console.log(food, name);

  const handleUpdate = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const category = form.category.value;
    const quantity = form.quantity.value;
    const price = form.price.value;
    const origin = form.origin.value;
    const ingredients = form.ingredients.value;
    const procedure = form.procedure.value;
    const email = user?.email;
    const purchaseTime = moment().format("MMMM D YYYY");
    const updatedFood = {
      name,
      photo,
      category,
      quantity,
      price,
      origin,
      description: { ingredients, procedure },
      email,
      purchaseTime,
    };
    console.log(updatedFood);

    MySwal.fire({
      title: "Are you sure?",
      text: "You want to update this item?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Update",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .put(
            `https://tomatino-fntbxgyr0-haquesomrat.vercel.app/food/${_id}`,
            updatedFood
          )
          .then((res) => {
            console.log(res.data);
          });
        Swal.fire("Updated!", "Your file has been updated.", "success");
      }
    });
  };

  return (
    <div className="w-full flex items-center justify-center py-20 px-4">
      <Helmet>
        <title>Tomatino | Update Food</title>
      </Helmet>
      <Card className="w-full p-4 md:p-6 shadow-md">
        <form onSubmit={handleUpdate} className="space-y-5">
          <h2 className="text-3xl lg:text-4xl font-toga text-center text-[#191825] pt-6">
            Update Food Item
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            {/* name  */}
            <div>
              <Label value="Name" />
              <TextInput
                name="name"
                value={name}
                placeholder="Food Name"
                color="gray"
                sizing="md"
                type="text"
                required
              />
            </div>
            {/* photo  */}
            <div>
              <Label value="Photo" />
              <TextInput
                name="photo"
                value={photo}
                placeholder="Food Image Link"
                color="gray"
                sizing="md"
                type="text"
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
                value={category}
                placeholder="Food Category"
                color="gray"
                sizing="md"
                type="text"
                required
              />
            </div>
            {/* price  */}
            <div>
              <Label value="Price($)" />
              <TextInput
                name="price"
                value={price}
                placeholder="Food Price"
                color="gray"
                sizing="md"
                type="number"
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
                value={quantity}
                placeholder="Food Qunatity"
                color="gray"
                sizing="md"
                type="number"
                required
              />
            </div>
            {/* origin  */}
            <div>
              <Label value="Origin(Country)" />
              <TextInput
                name="origin"
                value={origin}
                placeholder="Food Origin"
                color="gray"
                sizing="md"
                type="text"
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
                value={addby?.addby}
                placeholder="Food Add By"
                color="gray"
                sizing="md"
                type="text"
                // readOnly
                required
              />
            </div>
            {/* ingredients */}
            <div>
              <Label value="Ingredients" />
              <TextInput
                name="ingredients"
                value={description.ingredients}
                placeholder="Food Ingredients"
                color="gray"
                sizing="md"
                type="text"
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
              defaultValue={description.procedure}
              placeholder="Food Making Procedure"
              withBg={true}
              color="gray"
              border={true}
              rows={4}
              required
            />
          </div>
          <PrimaryButton>Update Food</PrimaryButton>
        </form>
      </Card>
      <form></form>
    </div>
  );
};

export default UpdateFood;
