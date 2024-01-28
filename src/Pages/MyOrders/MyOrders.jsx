import { useEffect, useState } from "react";
import { Avatar, Table } from "keep-react";
import { BsFillTrash3Fill } from "react-icons/bs";
import { Helmet } from "react-helmet";
import axios from "axios";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const MySwal = withReactContent(Swal);

const MyOrders = () => {
  const { user } = useAuth();
  const [orderedFoods, setOrderedFoods] = useState([]);
  const axiosSecure = useAxiosSecure();
  const url = `/purchasedFood?email=${user?.email}`;

  useEffect(() => {
    // fetch(url, { credentials: "include" })
    //   .then((res) => res.json())
    //   .then((data) => setOrderedFoods(data));
    axiosSecure(url).then((res) => setOrderedFoods(res.data));
  }, [url, axiosSecure]);

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
            `https://tomatino-fntbxgyr0-haquesomrat.vercel.app/purchasedFood/${id}`
          )
          .then((res) => {
            console.log(res.data);
          });
        Swal.fire("Deleted!", "Your file has been deleted.", "success");
      }
      const remaining = orderedFoods.filter((food) => food._id !== id);
      setOrderedFoods(remaining);
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
                My Orders: {orderedFoods.length}
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
          {orderedFoods.map((food) => (
            <Table.Row key={food?._id} className="bg-white">
              <Table.Cell>
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2">
                      <Avatar shape="circle" img={food?.photo} size="md" />
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
                <p>${food?.price}</p>
              </Table.Cell>
              <Table.Cell>
                <p>{food?.addby}</p>
              </Table.Cell>
              <Table.Cell>
                <p>{food?.purchase}</p>
              </Table.Cell>
              <Table.Cell>
                <div className="flex items-center gap-3">
                  {food?.purchaseTime}
                </div>
              </Table.Cell>
              <Table.Cell>
                <div
                  onClick={() => handleDelete(food?._id)}
                  className="bg-primary/70 hover:bg-primary h-10 w-10 text-white flex items-center justify-center rounded-full"
                >
                  <BsFillTrash3Fill className="text-xl" />
                </div>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
  );
};

export default MyOrders;
