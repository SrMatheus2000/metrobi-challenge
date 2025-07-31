import { styled } from "@mui/system";

const gap = 15;

const Container = styled("div")({
  fontFamily: "sans-serif",
  color: "#fff",
  fontSize: "3rem",
  display: "flex",
  flexDirection: "column",
  textAlign: "center",
  maxWidth: "1000px",
  margin: "auto",
  gap,
});

const Row = styled("div")({
  display: "flex",
  gap,
});

type ColProps = {
  flex?: number;
};

const Col = styled("div")<ColProps>(({ flex }) => ({
  display: "flex",
  flexDirection: "column",
  gap,
  flex,
}));

type BoxProps = {
  background: string;
  minHeight?: number;
};

const Box = styled("div", {
  shouldForwardProp: (prop) => prop !== "background" && prop !== "minHeight",
})<BoxProps>(({ background, minHeight }) => ({
  padding: "25px",
  background,
  minHeight,
}));

function App() {
  return (
    <Container>
      <Box background="#55d4eb">Header</Box>

      <Row>
        <Col flex={2}>
          <Box background="#d5c9e2" minHeight={300}>
            Hero
          </Box>
          <Box background="#a0c263" minHeight={400}>
            Sidebar
          </Box>
        </Col>

        <Col flex={3}>
          <Box background="#f5c531" minHeight={500}>
            Main Content
          </Box>
          <Box background="#898989" minHeight={200}>
            Extra Content
          </Box>
        </Col>
      </Row>

      <Row>
        <Col flex={2}>
          <Box background="#2BB673" minHeight={150}>
            Related Images
          </Box>
        </Col>
        <Col flex={1}>
          <Box background="#f3cddd" minHeight={150}>
            Related Posts
          </Box>
        </Col>
      </Row>

      <Box background="#FFA500">Footer</Box>
    </Container>
  );
}

export default App;
