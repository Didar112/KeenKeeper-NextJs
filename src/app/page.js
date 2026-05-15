import Navbar from "@/Components/Navbar";
import Image from "next/image";
import data from '../../public/data.json'

export default function Home() {
  return (
    <div>
        <main>
        <div className="hero flex gap-5 flex-col mt-[80px]">
            <h1 className="font-bold text-[#1F2937] text-[48px]">Friends to keep close in your life</h1>
            <p className="text-center font-normal text-[16px] text-[#64748B]">Your personal shelf of meaningful connections. Browse, tend, and nurture the <br />
relationships that matter most.</p>
            <button className="btn bg-[#244D3F] border-none shadow">
              + Add a Friend
            </button>


            {/* All friends */}


    <section className="container  mx-auto mt-[40px]">

      <div className="grid grid-cols-4 gap-4 text-center">

        <div className="p-[32px] shadow rounded"><h1 className="font-semibold text-[32px]">12</h1><p className="font-normal text-[18px] text-[#64748B]">total friends</p></div>
        <div className="p-[32px] shadow rounded"><h1 className="font-semibold text-[32px]">3</h1><p className="font-normal text-[18px] text-[#64748B]">On track</p></div>
        <div className="rounded p-[32px] shadow"><h1 className="font-semibold text-[32px]">6</h1><p className="font-normal text-[18px] text-[#64748B]">Need Attention</p></div>
        <div className="p-[32px] rounded shadow"><h1 className="font-semibold text-[32px]">12</h1><p className="font-normal text-[18px] text-[#64748B]">Interaction This Months</p></div>

      </div>

          <div className="divider  mt-4"></div>

        <h3 className="font-semibold text-2xl mt-10">Your Friends</h3>

<div className="grid mt-10 grid-cols-4 gap-6">
        {
          data.map((item, index)=> 
          
          <div key={index} className="card bg-white w-96 shadow-sm ">
  <figure className="px-10 pt-10">
    <Image
      src={item.picture}
      alt={item.name}
      className="size-[100px] rounded-full object-cover"
      width={100}
      height={100}
/>
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">Card Title</h2>
    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
    <div className="card-actions">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>)
        }
</div>
    </section>


        </div>
      </main>
    </div>
  );
}
