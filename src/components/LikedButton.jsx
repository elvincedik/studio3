import { useState } from "react";
import { AiOutlineLike, AiFillLike } from "react-icons/ai";

function LikedButton() {
    const [isLiked, setIsliked] = useState(false)


    return (
        <button onClick={() => { setIsliked(!isLiked) }}>
            {isLiked ? <AiFillLike /> : <AiOutlineLike />}
        </button>
    )

} export default LikedButton;