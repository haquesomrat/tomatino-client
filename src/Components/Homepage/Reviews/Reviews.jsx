const Reviews = () => {
  return (
    <div className="px-4 py-8 md:py-12 space-y-4">
      <h2 className="font-toga pb-2 text-2xl md:text-4xl lg:text-5xl text-center">
        Tomatino in the Press
      </h2>
      <p className="text-xl md:text-2xl text-black/60 text-center font-normal ">
        “Best Juicy Lucy Outside of Dhaka” Tomatino delivers on the Bangladeshi
        Dream with indulgent burgers and rich sides” “We fantasize about the
        satisfaction of chomping into a Juicy Lucy”
      </p>
      <div className="flex flex-wrap justify-center gap-6 md:gap-8 lg:gap-12 pt-5">
        <img
          className="max-w-[250px]  hover:skew-y-3 duration-500"
          src="https://www.shohoz.com/v2/assets/img/8.png"
          alt="the daily star"
        />
        <img
          className="max-w-[250px] hover:skew-y-3 duration-500"
          src="https://s3.qima.com/cms/qima/shared/Dhaka_Tribune_Logo.png"
          alt="dhaka tribune"
        />
        <img
          className="max-w-[250px]  hover:skew-y-3 duration-500"
          src="https://th.bing.com/th/id/OIP.ihKsY9m3XmFslVrsjhthEwHaBV?rs=1&pid=ImgDetMain"
          alt="business post"
        />
        <img
          className="max-w-[250px] hover:skew-y-3 duration-500"
          src="https://cdn.criptext.com/Email/images/emailhome/cn-logo-business.png"
          alt="business insider"
        />
        <img
          className="max-w-[250px]  hover:skew-y-3 duration-500"
          src="https://allbdpapers.com/wp-content/uploads/2018/01/logobangladesh.png"
          alt="bangladesh insider"
        />
        <img
          className="max-w-[250px] hover:skew-y-3 duration-500"
          src="https://th.bing.com/th/id/R.95f205310fc7c71f5790ecb5f2eb5219?rik=1F8fWVFD9D35ig&riu=http%3a%2f%2flib.ewubd.edu%2fsites%2fdefault%2ffiles%2fdownload_1.png&ehk=dvLXGdgZ%2bTCG03Fj7pyfM6NwKaDc1JzLzZ3FX%2f8i05E%3d&risl=&pid=ImgRaw&r=0"
          alt="bangladesh today"
        />
      </div>
    </div>
  );
};

export default Reviews;
