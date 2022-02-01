import React, {VFC,  useState } from "react";
import OutlinedInput from "@mui/material/OutlinedInput";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';

export const InputLogin: VFC<Props> = ({ onEnter }) => {
  const [login, setLogin] = useState("");
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setLogin(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement> | React.MouseEvent<SVGSVGElement, MouseEvent>): void => {
    event.preventDefault();
    onEnter(login.trim());
  };

  return (
    <Box component="form" onSubmit={handleSubmit}
      sx={{
        marginTop: 8,
        display: "flex",
        alignItems: "center",
      }}
    >
      <Typography component="h1" variant="h5" color='black'>
        Enter your login:
      </Typography>
      <OutlinedInput
        value={login}
        name="login"
        required
        onChange={handleChange}
        id="login"
        autoFocus
        size='medium'
        sx={{ width: '350px',  marginLeft: "10px", fontSize: "24px" }}
        endAdornment={
              <InputAdornment position="end" >
                <SearchIcon
                  onClick={handleSubmit}
                  sx={{cursor:"pointer"}}
                />
              </InputAdornment>
            }
      />
    </Box>
  );
}

type Props = {onEnter: (login: string) => void};