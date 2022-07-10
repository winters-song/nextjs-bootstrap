
import Layout from "../components/common/layout";
import {Grid, Stack, Typography, Link, Card, Box} from '@mui/material';
import AuthLogin from "../components/auth/AuthLogin";


export default function Home() {

  return (
    <Layout>
      <Grid
        xs={12}
        container
        justifyContent="center"
      >
        <Card
          sx={{
            maxWidth: { xs: 400, lg: 475 },
            margin: { xs: 2.5, md: 3 },
          }}
          content={false}
          border={false}
        >
          <Box sx={{ p: { xs: 2, sm: 3, md: 4, xl: 5 } }}>
            <Grid container spacing={3}>

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
          </Box>
        </Card>
      </Grid>
    </Layout>
  )
}
