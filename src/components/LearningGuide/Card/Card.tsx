export default function Card() {
  return (
    <>
      <div className="flex h-[400px] w-[600px] items-center  justify-around ">
        <ul className="flex h-[100%] flex-col gap-6 mt-16  text-2xl">
          <li className="text-info">#1 New</li>
          <li>#2 Answer</li>
          <li>#3 Explain</li>
          <li>#4 Take rest</li>
          <li>#5 Repeat</li>
        </ul>
        <div className="skeleton  flex h-[90%]  w-[250px]  rotate-3  flex-col  rounded-2xl p-6">
          <h3 className="mb-5 text-xl font-[700]">New</h3>
          <p className="font-thin">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet, a, voluptatem veritatis nam deleniti illum
            ipsum non odit distinctio, aperiam provident nostrum eaque excepturi et voluptas commodi autem assumenda.
            Corporis.
          </p>
        </div>
      </div>
    </>
  );
}
