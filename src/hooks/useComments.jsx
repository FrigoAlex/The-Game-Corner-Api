import { getComments } from "../utils/dbSocket";
import { useState, useEffect } from "react";

const useComment = (id) => {
  const [comments, setComments] = useState([]);
  useEffect(() => {
    setComments(getComments(id));
  }, []);
  const addComent = (comment) => {
    if (comment.author.trim() !== "" && comment.text.trim() !== "") {
      setComments([
        { ...comment, id: Math.max(...comments.map((x) => x.id)) + 1 },
        ...comments
      ]);
    }
  };
  return { comments, addComent };
};

export default useComment;
