"use client";
import React , { useState } from 'react'

const DeleteBtn = ({ id }) => {

  const handleDelete = async () => {
    const confrimed = confirm("Are you Delete?");
    if (confrimed) {
      const res = await fetch(`http://localhost:3000/api/posts/${id}`, {
        method: 'DELETE',
      });
      if (res.ok) {
        window.location.reload();
      }
    }
    
  }
  return (
    <a onClick={handleDelete} className="bg-red-500 text-white border py-2 px-3 rounded-md text-lg my-2" >Delete</a>
  )
}

export default DeleteBtn