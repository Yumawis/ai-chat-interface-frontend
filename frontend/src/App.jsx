import { Box, Typography } from "@mui/material";
import { DeepChat } from "deep-chat-react";

const apiKey = import.meta.env.VITE_OPENROUTER_API_KEY;

function App() {
  return (
    <Box
      sx={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <DeepChat
        connect={{ stream: true }}
        directConnection={{
          openRouter: {
            key: apiKey,
            chat: {
              model: "openai/gpt-oss-20b",
              max_tokens: 50,
            },
          },
        }}
        style={{
          borderRadius: "10px",
          background: "#7a7a7aff",
          width: "450px",
          height: "500px"
        }}
        textInput={{
          placeholder: {
            text: "Escribe tu mensaje aquí",
          },
        }}
      />
    </Box>
  );
}

export default App;
