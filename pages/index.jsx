
import Layout from "../components/common/layout";
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

import ProTip from '../src/ProTip';
import Link from '../src/Link';
import Copyright from '../src/Copyright';

export default function Home() {
  return (
    <Layout>
      <Container maxWidth="sm" mt={10}>
        <Box sx={{ my: 4 }}>
          <Typography variant="h4" component="h1" gutterBottom>
            Next.js example
          </Typography>
          <Button variant="contained" component={Link} noLinkStyle href="/">
            Go to the main page
          </Button>
          <ProTip />
          <Copyright />
        </Box>
      </Container>
    </Layout>
  )
}
