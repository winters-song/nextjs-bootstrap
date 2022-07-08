
import Layout from "../components/common/layout";
import { Grid, Stack, Typography, Container, Link } from '@mui/material';
import AuthLogin from "../components/auth/AuthLogin";


export default function Home() {
  return (
    <Layout>
      <Grid item xs={12}>
        <Grid
          item
          xs={12}
          container
          justifyContent="center"
          alignItems="center"
        >
          <Grid item xs={12}>
            <Stack direction="row" justifyContent="space-between" alignItems="baseline" sx={{ mb: { xs: -0.5, sm: 0.5 } }}>
              <Typography variant="h3">Login</Typography>
              <Typography component={Link} to="/register" variant="body1" sx={{ textDecoration: 'none' }} color="primary">
                Don't have an account?
              </Typography>
            </Stack>
          </Grid>
          <Grid item xs={12}>
            <AuthLogin />
          </Grid>
        </Grid>
      </Grid>
    </Layout>
  )
}
