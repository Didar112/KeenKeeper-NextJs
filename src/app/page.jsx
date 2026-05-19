
import Image from "next/image";

import Link from "next/link";

export const metadata = {
  title: "KeenKeeper - Home",
  description: "Welcome to the homepage of Keenkeeper",
};

const fetchData = async () => {
        const promise = await fetch("http://localhost:3000/data.json")
        const res = promise.json()
        return res; 
}



export default async function  Home() {



  const data = await fetchData()


  return (
    <div>
        <main className="p-5">
        <div className="hero flex gap-5 flex-col mt-[80px]">
            <h1 className="font-bold text-center text-[#1F2937] text-[48px]">Friends to keep close in your life</h1>
            <p className="text-center font-normal text-[16px] text-[#64748B]">Your personal shelf of meaningful connections. Browse, tend, and nurture the <br />
relationships that matter most.</p>
            <button className="btn bg-[#244D3F] border-none shadow">
              + Add a Friend
            </button>


     


    <section className="container lg:p-0  mx-auto mt-[40px]">

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 text-center">

        <div className="p-[32px] shadow rounded"><h1 className="font-semibold text-[32px]">12</h1><p className="font-normal text-[18px] text-[#64748B]">total friends</p></div>
        <div className="p-[32px] shadow rounded"><h1 className="font-semibold text-[32px]">3</h1><p className="font-normal text-[18px] text-[#64748B]">On track</p></div>
        <div className="rounded p-[32px] shadow"><h1 className="font-semibold text-[32px]">6</h1><p className="font-normal text-[18px] text-[#64748B]">Need Attention</p></div>
        <div className="p-[32px] rounded shadow"><h1 className="font-semibold text-[32px]">12</h1><p className="font-normal text-[18px] text-[#64748B]">Interaction This Months</p></div>

      </div>

          <div className="divider  mt-4"></div>

        <h3 className="font-semibold text-2xl mt-10">Your Friends</h3>

<div className="grid mt-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
        {
          data.map((item, index)=> 
          
            
          <Link key={index} href={`/${item.id}`}>

          <div  className="card bg-white shadow-sm ">
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
    <h2 className="card-title font-semibold text-[20px]">{item.name}</h2>
    <p><small className="font-normal text-[12px] text-[#64748B]">{item.days_since_contact} days ago</small></p>
    <div className="card-actions">
     {
      item.tags.map((item, index) => <div key={index} className="badge badge-soft text-[#244D3F] bg-[#CBFADB] badge-success border-none">{item}</div>)
     }
     
    </div>
    <span className={`badge border-none ${item.status==="overdue"?"bg-red-500":
      item.status === "almost due"? "bg-yellow-400" : "bg-green-900"
    } `}>{item.status}</span>
  </div>
          </div>


         </Link>
        
        
        )
        }
</div>
    </section>


        </div>
      </main>
    </div>
  );
}
