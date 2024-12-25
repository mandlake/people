"use client";

import { TextField } from "@mui/material";
import { useState } from "react";

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (event: any) => {
    setSearchQuery(event.target.value);
    fetch(`/api/search?query=${searchQuery}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      });
  };
  return (
    <>
      <TextField
        label="구인/구직 검색"
        variant="outlined"
        fullWidth
        value={searchQuery}
        onChange={handleSearch}
      />
    </>
  );
}
