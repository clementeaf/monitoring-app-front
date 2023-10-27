import Container from "../components/Container";
import CommitsInfo from "../components/Main/CommitsInfo";
import RepositoryInfo from "../components/Main/RepositoryInfo";

export default function Main() {
  return (
    <Container>
      <RepositoryInfo />
      <CommitsInfo />
    </Container>
  )
}