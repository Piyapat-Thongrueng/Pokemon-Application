import SearchForm from "@/components/SearchForm";

const HomePage = () => {


  return (
    <div className="w-[90%] m-[auto] max-w-[1100px]">
      <div className="flex justify-center">
        <img
          src="/images/logo.webp"
          alt="logo"
          className="max-h-[80px] mt-[20px]"
        />
      </div>
      <SearchForm />
    </div>
  );
};

export default HomePage;
