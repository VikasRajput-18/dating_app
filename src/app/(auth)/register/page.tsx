import Image from "next/image";

const Register = () => {
  return (
    <div>
      <div className="relative">
        <Image
          src="/assets/bg1.jpg"
          width={1000}
          height={800}
          className="h-screen w-full object-cover absolute top-0"
          alt="couple background"
        />
      </div>
      <div
          className="relative h-[100vh] flex items-center justify-center flex-col backdrop-blur-sm
            bg-black/40"
        >
          <h1 className="text-center text-white text-3xl md:text-5xl font-extrabold px-2">
            Discover Your
            <i
              className="bg-gradient-to-tr from-rose-500 via-purple-500 to-orange-500 bg-clip-text
                text-transparent drop-shadow-md"
            >
              {" "}
              Perfect{" "}
            </i>{" "}
            Match
          </h1>
          <p className="text-slate-300 text-sm text-center font-semibold">
            Join our community and start building meaningful connections today.
          </p>
        </div>
    </div>
  );
};

export default Register;
