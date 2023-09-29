import Image from "next/image";
import styles from "./page.module.css";
import { Container, Box, Card, Typography } from "@mui/joy";

export default function Home() {
  return (
    <main className={styles.main}>
      <Container>
        <Box>
          <Card>
            <Typography>Hello World ~</Typography>
          </Card>
        </Box>
      </Container>
    </main>
  );
}
