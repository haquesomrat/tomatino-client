import { Card, Label, TextInput, Textarea } from "keep-react";
import PrimaryButton from "../../Components/Shared/Buttons/PrimaryButton/PrimaryButton";
import { Helmet } from "react-helmet";
import moment from "moment";
import UsePost from "../../hooks/usePost";
import useAuth from "../../hooks/useAuth";

const AddAFood = () => {
  const { user } = useAuth();

  const handleAddFood = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const category = form.category.value;
    const quantity = form.quantity.value;
    const price = form.price.value;
    const addby = form.addby.value;
    const origin = form.origin.value;
    const ingredients = form.ingredients.value;
    const procedure = form.procedure.value;
    const email = user?.email;
    const addTime = moment().format("MMMM D YYYY");
    const newFood = {
      name,
      photo,
      category,
      quantity,
      price,
      addby: { addby, mail: email },
      origin,
      description: { ingredients, procedure },
      addTime,
      email,
    };
    console.log(newFood);

    // send data to server
    const url = "https://tomatino-fntbxgyr0-haquesomrat.vercel.app/allfoods";
    const newData = newFood;
    const msg = {
      title: "Success",
      text: "New Food Item Added",
      icon: "success",
    };
    UsePost(url, newData, msg);
  };
  return (
    <div className="w-full flex items-center justify-center py-10 lg:py-16 px-4">
      <Helmet>
        <title>Tomatino | Add A Food</title>
      </Helmet>
      <Card className="w-full p-4 md:p-6 shadow-md">
        <form onSubmit={handleAddFood} className="space-y-5">
          <h2 className="text-3xl lg:text-4xl font-toga text-center text-[#191825] pt-6">
            Add A New Food Item
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            {/* name  */}
            <div>
              <Label value="Name" />
              <TextInput
                name="name"
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
                value={user?.displayName}
                placeholder="Food Add By"
                color="gray"
                sizing="md"
                type="text"
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
              placeholder="Food Making Procedure"
              withBg={true}
              color="gray"
              border={true}
              rows={4}
              required
            />
          </div>
          <PrimaryButton>Add Food</PrimaryButton>
        </form>
      </Card>
      <form></form>
    </div>
  );
};

export default AddAFood;
