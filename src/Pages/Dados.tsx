import { useEffect, useState } from "react";
import {Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import Titulo from '../Components/Titulo'
import Alert from '../Components/Alert'
import Box from '../Components/Box'

type PostaDados = {
    userId: number;
    id: number;
    title: string;
    body: string;
};

export default function PageDados() {
    const { id } = useParams<{ id: string }>();
    const [post, setPost] = useState<PostaDados | null>(null);

    useEffect(() => {
        if (id) {
            fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
                .then((res) => res.json())
                .then((data) => setPost(data));
        }
    }, [id]);



    {/*tem que colocar senão ele da erro que pode ser null*/ }
    if (!post) {
        return (
            <div>

                <Box>
                    <Alert texto={"Carregando detalhes do post..."}></Alert>
                </Box>
            </div>)
    }



    return (
        <div>

            <Box>
                <Titulo texto={post.title}></Titulo>

                <Typography variant="subtitle2">Post ID: {post.id}</Typography>
                <Typography variant="subtitle2">User ID: {post.userId}</Typography>
                <Typography variant="body1" sx={{ whiteSpace: "pre-line" }}>
                    {post.body}
                </Typography>
            </Box>
        </div>
    );
}
