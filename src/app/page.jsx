"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
export default function Home() {
  const [postData, setPostdata] = useState({});
  const getPosts = async () => {
    try {
      const res = await fetch("http://localhost:3000/api/posts", {
        method: "GET",
        cache: "no-store"
      });
      if (!res.ok) {
        throw new Error("Error!!!!!");
      }
      const data = await res.json();
      setPostdata(data.posts);
    } catch (error) {
      console.log(error);
    }
    
  }
  useEffect(() => {
    getPosts();
  }, []);

  return (
    <div>
      <main className="container mx-auto my-3">
        <h1>NextJSCRUD + MongoDB</h1>
        <hr className="my-3"/>
        <button className="bg-green-500 p-3 text-white rounded"><Link href="/create">CreateData</Link></button>
        <div className="grid grid-cols-4 mt-3 gap-5">
          {postData && postData.length > 0 ? (
            postData.map(val => (
              <div key={val._id} className="shadow-xl my-10 p-10 rounded-xl">
                <h4>{val.title}</h4>
                <Image src={val.img} width={300} height={0} alt={val.title}/>
                <p>{val.content}</p>
                <div className="mt-5">
                  <Link className="bg-gray-500 text-white border py-2 px-3 rounded-md text-lg my-2" href={`/edit/${val._id}`}>Edit</Link>
                  <Link className="bg-red-500 text-white border py-2 px-3 rounded-md text-lg my-2" href={`/delete/${val._id}`}>Delete</Link>
                </div>
              </div>
            ))
          ) : (
            <p className="bg-gray-300 p-3 my-3">
              You do not any posts yet.
            </p>
          )}
          
        </div>
      </main>
    </div>
  );
}
