import { Container, Progress } from "./ProgressBar.styles";

interface LoadingProps {
  loading: boolean;
}

const ProgressBar = () => {
  return (
    <Container>
      <Progress></Progress>
    </Container>
  );
};

export default ProgressBar;
