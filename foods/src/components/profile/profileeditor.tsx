"use client";

import { useAuth } from "@/provider/authprovider";
import { Button, Container, Stack, TextField, Modal } from "@mui/material";
import { ChangeEvent, Dispatch, SetStateAction, useState } from "react";
import { string } from "yup";

type ProfileProps = {
  handleClose: () => void;
  open: boolean;
  imageUrl: string;
  setImageUrl: Dispatch<SetStateAction<string>>;
};

export const EditProfileImg = ({
  handleClose,
  open,
  imageUrl,
  setImageUrl,
}: ProfileProps) => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

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
    <Modal
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      open={open}
      onClose={() => {
        handleClose();
      }}
    >
      <Stack bgcolor={"#fff"} borderRadius={4}>
        <Container>
          <Stack py={8} alignItems="center">
            <Stack gap={3} width={400}>
              <TextField
                type="file"
                onChange={handleImageChange}
                variant="outlined"
              />
              <Button onClick={handleImageUpload} variant="contained">
                Upload
              </Button>
              {imageUrl && (
                <Stack width="100%" position="relative">
                  <img
                    src={imageUrl}
                    alt="Uploaded"
                    width={"100%"}
                    height={"100%"}
                  />
                </Stack>
              )}
            </Stack>
          </Stack>
        </Container>
      </Stack>
    </Modal>
  );
};
