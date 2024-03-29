"use client";
import { Button, Container, Stack, TextField } from "@mui/material";
import Image from "next/image";

import { ChangeEvent, useState } from "react";
const Upload = () => {
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const [imageUrl, setImageUrl] = useState(null);
    const handleImageChange = (event: ChangeEvent<HTMLInputElement>) => {
        if (!event.target.files) return;
        setSelectedFile(event.target.files[0]);
    };

    const handleImageUpload = async () => {
        if (selectedFile) {
            try {
                const formData = new FormData();
                formData.append("file", selectedFile);
                const response = await fetch(
                    "https://api.cloudinary.com/v1_1/dghcnglhm/upload?upload_preset=lwodjlaz",
                    {
                        method: "POST",
                        body: formData,
                    }
                );
                const data = await response.json();
                console.log(data);
                setImageUrl(data.secure_url);
            } catch (error) {
                console.error("Image upload error:", error);
            }
        }
    };
    return (
        <Stack><Container><Stack py={8} alignItems="center"><Stack gap={3} width={400}><TextField
            type="file"
            onChange={handleImageChange}
            variant="outlined"
        /><Button onClick={handleImageUpload} variant="contained">
                Upload
            </Button>
            {imageUrl && (
                <Stack width="100%" pt="100%" position="relative"><img src={imageUrl} alt="Uploaded" width={'400px'} height={"400px"} /></Stack>
            )}
        </Stack></Stack></Container></Stack>
    );
};
export default Upload;