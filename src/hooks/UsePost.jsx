import axios from "axios";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

const UsePost = (url, newData, alertMsg) => {
  axios.post(url, newData).then((res) => {
    console.log(res.data);
    if (res.data.insertedId) {
      MySwal.fire(alertMsg);
    }
  });
  return;
};

export default UsePost;
