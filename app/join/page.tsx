"use client";

import { Button, TextField } from "@mui/material";
import { useState } from "react";

interface JoinFormProps {
  onSubmit: (formData: JoinFormData) => void;
}

interface JoinFormData {
  email: string;
  password: string;
  name: string;
}

const LoginForm: React.FC<JoinFormProps> = ({ onSubmit }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData: JoinFormData = {
      email,
      name,
      password,
    };

    onSubmit(formData);
  };

  return (
    <div className="min-h-screen bg-saramin-gray flex items-center justify-center">
      <div className="bg-white p-10 rounded-lg shadow-md w-96">
        <h2 className="text-2xl font-bold mb-4">회원가입</h2>

        <form onSubmit={handleSubmit} className="gap-5 flex-col items-center">
          <TextField
            label="아이디"
            variant="outlined"
            fullWidth
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            error={!email.length}
            helperText={!email.length && "이메일 주소를 입력하세요"}
          />
          <TextField
            label="비밀번호"
            type="password"
            variant="outlined"
            fullWidth
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            error={!password.length}
            helperText={!password.length && "비밀번호를 입력하세요"}
          />
          <TextField
            label="이름"
            type="name"
            variant="outlined"
            fullWidth
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <Button type="submit" variant="contained" color="primary" fullWidth>
            회원가입
          </Button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
