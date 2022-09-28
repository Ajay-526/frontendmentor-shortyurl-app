import { Box, Button, Paper, TextField } from "@mui/material";
import { Container } from "@mui/system";
import React, {
  useState
} from "react";
import background from "../images/bg-shorten-desktop.svg";
function SearchComponent(): JSX.Element {
  let [url, setUrl] = useState<string>('');
  console.log(url.toString())
  function buttonHandler(event: any) {
    const fetchURL = `https://api.shrtco.de/v2/shorten?url=${url.toString()}`;
    console.log(fetchURL);
    fetch(fetchURL)
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  }
  return (
    <Box>
      <Container maxWidth="md">
        <Paper
          elevation={1}
          sx={{
            p: 3,
            backgroundImage:
              "url(https://github.com/Ajay-526/my-assets/blob/main/bg-shorten-desktop.png?raw=true)",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundColor: "hsl(257, 27%, 26%)",
            display: "flex",
            justifyContent: { xs: "center", sm: "space-between" },
            textAlign: "center",
            flexWrap: { xs: "wrap", sm: "nowrap" },
            gap: 2,
            zIndex: 1,
          }}
        >
          <TextField
            type={"text"}
            placeholder={"Type the url here.."}
            sx={{ bgcolor: "white", width: { sm: 600 } }}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setUrl(e.currentTarget.value)
            }
          ></TextField>
          <Button
            onClick={buttonHandler}
            variant="contained"
            sx={{ ml: 2, bgcolor: "hsl(180, 66%, 49%)" }}
          >
            Shorten It!
          </Button>
        </Paper>
      </Container>
    </Box>
  );
}

export default SearchComponent;
// width:{xs:150, sm:650}

// fetch('api/shorten',{
//   method: "POST",
//   body:JSON.stringify({url}),
//   headers:{
//     "Content-Type":'application/json',
//   }
// }).then((res)=>{
//   if(res.ok){
//     console.log(res);
//   }else{
//     console.log('something went wrong');
//   }
// })
// .catch((err)=> console.log(err));
