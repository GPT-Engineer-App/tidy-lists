import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const EditTask = () => {
  const { id } = useParams();
  const [title, setTitle] = useState(`Task ${id}`);
  const [description, setDescription] = useState(`Description ${id}`);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Update the task (this is just a placeholder, you should handle state management properly)
    console.log("Updated Task:", { id, title, description });
    navigate("/");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <h1 className="text-3xl">Edit Task</h1>
      <div>
        <label htmlFor="title" className="block text-sm font-medium text-gray-700">Title</label>
        <Input id="title" value={title} onChange={(e) => setTitle(e.target.value)} required />
      </div>
      <div>
        <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description</label>
        <Textarea id="description" value={description} onChange={(e) => setDescription(e.target.value)} required />
      </div>
      <Button type="submit">Save</Button>
    </form>
  );
};

export default EditTask;