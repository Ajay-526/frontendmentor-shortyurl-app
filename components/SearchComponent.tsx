import { Box, Button, Paper, TextField, Typography } from "@mui/material";
import { Result } from "../model/shorten";
import { Container } from "@mui/system";
import React, { useState, useEffect } from "react";
function SearchComponent(): JSX.Element {
  let [url, setUrl] = useState<string>("");
  let [fetchingurl, setFecthingUrl] = useState<string>("");
  let [fullShortUrl, setShortUrl] = useState<string>("");
  let [temp, setTemp] = useState(false);
  let [ok, setOk] = useState(false);
  console.log("temp ",temp);
  console.log("ok", ok);

  useEffect(()=>{
    fetch(fetchingurl)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        const { ok, result } = data;
        console.log(result.code);
        setShortUrl(result.full_short_link);
        if (ok) setOk(true);
      })
      .catch((err) => console.log(err));
  },[fetchingurl])

  function buttonHandler(event: any) {
    setTemp(true);
    var fetchURL = `https://api.shrtco.de/v2/shorten?url=${url.toString()}`;
    setFecthingUrl(fetchURL)
    console.log(fetchURL);
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
        <Box>
          {temp || ok ? (
            <>
              {!ok ? (
                <>
                  <Typography>Error</Typography>
                </>
              ) : (
                <>
                  <Box
                    sx={{
                      bgcolor: "white",
                      mt: 1,
                      p: 2,
                      minWidth: {sm:600},
                      display: "flex",
                      justifyContent: { xs: "center", sm: "space-between" },
                      alignItems: "center",
                      flexWrap:'wrap'
                    }}
                  >
                    <Typography variant="h6">{url}</Typography>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent:'center',
                        flexWrap:'wrap',
                        gap: 2,
                      }}
                    >
                      <Typography
                        variant="h6"
                        sx={{ color: "hsl(180, 66%, 49%)" }}
                      >
                        {fullShortUrl}
                      </Typography>
                      <Button
                        variant="contained"
                        sx={{ bgcolor: "hsl(180, 66%, 49%)" }}
                      >
                        Copy
                      </Button>
                    </Box>
                  </Box>
                </>
              )}
            </>
          ) : (
            <></>
          )}
        </Box>
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
