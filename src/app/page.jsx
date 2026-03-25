"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
export default function Home() {
  const [postData, setPostdata] = useState({});
  return (
    <div>
      <main className="container mx-auto my-3">
        <h1>NextJSCRUD + MongoDB</h1>
        <hr className="my-3"/>
        <button className="bg-green-500 p-3 text-white rounded"><Link href="/create">CreateData</Link></button>
        <div className="grid grid-cols-4 mt-3 gap-5">
          <div className="shadow-xl my-10 p-10 rounded-xl">
            <h4>Post Title</h4>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUBVM2h_DctyYpiaCsvIuVI2euFB0k6dm61A&s" alt="" />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste totam dicta perspiciatis error? Mollitia molestiae impedit soluta laudantium perferendis sequi. Maxime saepe qui accusamus odit quam veniam sunt fugit ullam!</p>
            <div className="mt-5">
              <Link className="bg-gray-500 text-white border py-2 px-3 rounded-md text-lg my-2" href="/edit">Edit</Link>
              <Link className="bg-red-500 text-white border py-2 px-3 rounded-md text-lg my-2" href="/delete">Delete</Link>

            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
