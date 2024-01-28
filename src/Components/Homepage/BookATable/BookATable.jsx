import { Card, Label, TextInput } from "keep-react";
import PrimaryButton from "../../Shared/Buttons/PrimaryButton/PrimaryButton";

const BookATable = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-12 px-4 pb-8 md:pb-12 gap-4 items-center">
      <div className="text-center sm:text-left sm:col-span-6 space-y-3 sm:space-y-4 lg:space-y-6">
        <h2 className="text-3xl md:text-4xl pb-2 lg:text-5xl font-toga text-[#191825] pt-6">
          Book A Table
        </h2>
        <p className=" text-lg sm:text-xl lg:text-2xl md:max-w-[400px] mx-auto sm:mx-0">
          Book a table or just come along - we save space in our restaurant for
          walk-ins.
        </p>
        <div className="grid grid-cols-2 text-md lg:text-lg  font-toga justify-between">
          <ul className="space-y-1 lg:space-y-2">
            <li>Saturday: </li>
            <li>Sunday: </li>
            <li>Monday: </li>
            <li>Tuesday: </li>
            <li>Wednesday: </li>
            <li>Thursday: </li>
            <li>Friday: </li>
          </ul>
          <ul className="space-y-1 lg:space-y-2">
            <li>9.00 am - 11.00 pm</li>
            <li>9.00 am - 11.00 pm</li>
            <li>9.00 am - 11.00 pm</li>
            <li>9.00 am - 11.00 pm</li>
            <li>9.00 am - 11.00 pm</li>
            <li>9.00 am - 11.00 pm</li>
            <li className="text-red-600">Closed</li>
          </ul>
        </div>
      </div>
      <div className="sm:col-span-6">
        <Card className=" w-full  p-4 md:p-6 shrink-0 shadow-md">
          <form className="space-y-5">
            <div>
              <Label value="Name" />
              <TextInput
                name="name"
                placeholder="Enter your name"
                color="gray"
                sizing="md"
              />
            </div>
            <div>
              <Label value="People" />
              <TextInput
                name="people"
                placeholder="Number of people"
                color="gray"
                sizing="md"
                type="number"
              />
            </div>
            <div>
              <Label value="Date" />
              <TextInput
                name="date"
                placeholder="Booking date"
                color="gray"
                sizing="md"
                type="date"
              />
            </div>
            <div>
              <Label value="Time" />
              <TextInput
                name="time"
                placeholder="Booking time"
                color="gray"
                sizing="md"
                type="time"
              />
            </div>
            <PrimaryButton>Book Now</PrimaryButton>
          </form>
        </Card>
      </div>
    </div>
  );
};

export default BookATable;
