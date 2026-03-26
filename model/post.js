import mongoose, {Schema} from "mongoose";

const postSchema = new Schema({
    title: String,
    img: String,
    content: String
},
{
    timestamps: true
}
)

const Post = mongoose.models.posts || mongoose.model("posts", postSchema);
export default Post;