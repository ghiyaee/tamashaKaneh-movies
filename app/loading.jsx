import Image from "next/image";
const Loading = () => {
    return (
      <div className="flex justify-center items-center p-8">
        <Image
          width={150}
          height={150}
          alt="is run loading....."
          src={'../public/loading.svg'}
        />
        ......loading
      </div>
    );
}

export default Loading;