import Image from "next/image";

type Size = "sm" | "md" | "lg";

interface Props {
  size: Size;
}

const Spinner = ({ size }: Props) => {
  const spinnerSize = (size: Size) => {
    if (size === "sm") {
      return 50;
    } else if (size === "md") {
      return 80;
    } else {
      return 100;
    }
  };

  return (
    <Image
      src="/loading.gif"
      alt="spinner"
      width={spinnerSize(size)}
      height={spinnerSize(size)}
      className="my-6 mx-auto"
    />
  );
};

export default Spinner;
