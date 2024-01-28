import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { Avatar, Table } from "keep-react";
import { MdModeEdit } from "react-icons/md";
import { Link } from "react-router-dom";
import { BsFillTrash3Fill } from "react-icons/bs";
import axios from "axios";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import useAuth from "../../hooks/useAuth";

const MySwal = withReactContent(Swal);

const MyAddedItems = () => {
  const { user } = useAuth();
  const [addedFoods, setaddedFoods] = useState([]);

  const url = `https://tomatino-fntbxgyr0-haquesomrat.vercel.app/allfoods?email=${user?.email}`;
  // console.log(addedFoods);

  useEffect(() => {
    axios(url, { withCredentials: true }).then((res) => {
      setaddedFoods(res.data);
    });
  }, [url]);

  // handle delete
  const handleDelete = (id) => {
    MySwal.fire({
      title: "Are you sure?",
      text: "You want to delete this item?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Delete",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(
            `https://tomatino-fntbxgyr0-haquesomrat.vercel.app/food/${id}`
          )
          .then((res) => {
            console.log(res.data);
          });
        Swal.fire("Deleted!", "Your file has been deleted.", "success");
      }
      const remaining = addedFoods.filter((food) => food._id !== id);
      setaddedFoods(remaining);
    });
  };
  return (
    <div className="py-10 xl:py-16">
      <Helmet>
        <title>Tomatino | My Added Items</title>
      </Helmet>
      <Table showCheckbox={false} hoverable={true}>
        <Table.Caption>
          <div className="my-5 flex items-center justify-between px-6">
            <div className="flex items-center gap-5">
              <p className="text-body-1 font-semibold text-metal-600">
                My Added Food Items: {addedFoods?.length}
              </p>
            </div>
          </div>
        </Table.Caption>
        <Table.Head>
          <Table.HeadCell className="min-w-[290px]">
            <p className="text-body-6 font-medium text-metal-400">Food</p>
          </Table.HeadCell>
          <Table.HeadCell className="min-w-[152px]">Price</Table.HeadCell>
          <Table.HeadCell className="min-w-[240px]">Food Owner</Table.HeadCell>
          <Table.HeadCell className="min-w-[215px]">Quantity</Table.HeadCell>
          <Table.HeadCell className="min-w-[200px]">Added Time</Table.HeadCell>
          <Table.HeadCell>Status</Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-gray-25 divide-y">
          {addedFoods.map((food) => (
            <Table.Row key={food._id} className="bg-white">
              <Table.Cell>
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2">
                      <Avatar shape="circle" img={food.photo} size="md" />
                      <div>
                        <p className="-mb-0.5 text-body-4 font-medium text-metal-600">
                          {food?.name}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </Table.Cell>
              <Table.Cell>
                <p>${food.price}</p>
              </Table.Cell>
              <Table.Cell>
                <p>{food?.addby?.addby}</p>
              </Table.Cell>
              <Table.Cell>
                <p>{food.quantity}</p>
              </Table.Cell>
              <Table.Cell>
                <div className="flex items-center gap-3">{food?.addTime}</div>
              </Table.Cell>
              <Table.Cell>
                <div className="flex gap-4">
                  <Link to={`/updateFood/${food?._id}`}>
                    <div className="bg-purple-500/50 hover:bg-purple-500/70 h-10 w-10  text-white flex items-center justify-center rounded-full">
                      <MdModeEdit className="text-xl" />
                    </div>
                  </Link>
                  <div
                    onClick={() => handleDelete(food?._id)}
                    className="bg-primary/70 hover:bg-primary h-10 w-10 text-white flex items-center justify-center rounded-full"
                  >
                    <BsFillTrash3Fill className="text-xl" />
                  </div>
                </div>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
  );
};

export default MyAddedItems;
