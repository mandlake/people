"use client";

import { Button, TextField } from "@mui/material";
import { useState } from "react";

interface LoginFormProps {
  onSubmit: (formData: LoginFormData) => void;
}

interface LoginFormData {
  email: string;
  password: string;
}

const LoginForm: React.FC<LoginFormProps> = ({ onSubmit }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData: LoginFormData = {
      email,
      password,
    };

    onSubmit(formData);
  };

  return (
    <div className="min-h-screen bg-saramin-gray flex items-center justify-center">
      <div className="bg-white p-10 rounded-lg shadow-md w-96">
        <h2 className="text-2xl font-bold mb-4">로그인</h2>

        <form onSubmit={handleSubmit}>
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
          <Button type="submit" variant="contained" color="primary" fullWidth>
            로그인
          </Button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
