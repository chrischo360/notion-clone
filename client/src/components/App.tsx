import { Box } from "@chakra-ui/core";
type AppProps = {
  children: React.ReactNode;
};

const App: React.FC<AppProps> = ({ children }) => {
  return <Box>{children}</Box>;
};

export default App;
