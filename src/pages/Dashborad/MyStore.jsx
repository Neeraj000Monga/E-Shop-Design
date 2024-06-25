import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
} from "@mui/material";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import {
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
  styled,
} from "@mui/material";
import { useState } from "react";

export const MainButton = styled(Button)({
  background: "#00aeae",
  borderRadius: 0,
  "&:hover": {
    backgroundColor: "#089090",
  },
});
const Products = styled(Button)({
  width: "100%",
  backgroundColor: "gray",
  borderRadius: 0,
  "&:hover": {
    backgroundColor: "#5f5e5e",
  },
});

const tableCellStyle = {
  border: "1px solid black",
  padding: "8px",
  textAlign: "center",
};

export const MyStore = () => {
  const [open, setOpen] = useState(false);
  const [openDialog, setOpenDialog] = useState(false);

  const [profileData, setProfileData] = useState({
    Name: 'User 1',
    Sluge: 'user1@example.com',
  });

  const handleUpdateProfile1 = () => {
    setOpen(true);
  };

  const handleCloseDialog1 = () => {
    setOpen(false);
  };


  const handleProfileFieldChange = (fieldName, value) => {
    setProfileData((prevProfileData) => ({
      ...prevProfileData,
      [fieldName]: value
    }));
  };  

  const handleSubmit = () => {
    console.log('Saving profile data:', profileData);
    handleCloseDialog();
  };

  // =================
  const handleUpdateProfile = () => {
    setOpenDialog(true);
  };
  const handleCloseDialog = () => {
    setOpenDialog(false);
  };
  return (
    <Container sx={{ display: "flex", justifyContent: "center" }}>
      <Box sx={{ width: "80%" }}>
        <Stack spacing={2} direction="row" sx={{ mt: 5 }}>
          <MainButton
            onClick={handleUpdateProfile1}
            sx={{ width: "100%" }}
            variant="contained"
          >
            Categories
          </MainButton>
          <Products onClick={handleUpdateProfile} variant="contained">
            Products
          </Products>
        </Stack>
        <Stack spacing={2} direction="row" sx={{ mt: 5 }}>
          <MainButton variant="contained">Refresh</MainButton>
          <MainButton variant="contained">Filter</MainButton>
          <MainButton variant="contained">Add</MainButton>
        </Stack>
        <Box sx={{ mt: 2 }}>
          <Paper>
            <Table style={{ minWidth: 400, color: "white" }}>
              <TableHead>
                <TableRow style={{ background: "#1c96c5", color: "white" }}>
                  <TableCell style={tableCellStyle}>Image</TableCell>
                  <TableCell style={tableCellStyle}>Name</TableCell>
                  <TableCell style={tableCellStyle}>Slug</TableCell>
                  <TableCell style={tableCellStyle}>Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell style={tableCellStyle}>Image1</TableCell>
                  <TableCell style={tableCellStyle}>Name1</TableCell>
                  <TableCell style={tableCellStyle}>Slug1</TableCell>
                  <TableCell style={tableCellStyle}>
                    <Button sx={{ color: "black" }}>Edit</Button> |{" "}
                    <Button sx={{ color: "black" }}> Delete</Button>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell style={tableCellStyle}>Image2</TableCell>
                  <TableCell style={tableCellStyle}>Name2</TableCell>
                  <TableCell style={tableCellStyle}>Slug2</TableCell>
                  <TableCell style={tableCellStyle}>
                    <Button sx={{ color: "black" }}>Edit</Button> |{" "}
                    <Button sx={{ color: "black" }}> Delete</Button>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell style={tableCellStyle}>Image3</TableCell>
                  <TableCell style={tableCellStyle}>Name3</TableCell>
                  <TableCell style={tableCellStyle}>Slug3</TableCell>
                  <TableCell style={tableCellStyle}>
                    <Button sx={{ color: "black" }}>Edit</Button> |{" "}
                    <Button sx={{ color: "black" }}> Delete</Button>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </Paper>
        </Box>
        <Dialog open={open}  onClose={handleCloseDialog1}>
          <DialogTitle>Update Profile</DialogTitle>
          <DialogContent>
            <TextField
              label="Name"
              value={profileData.fullName}
              onChange={(e) => handleProfileFieldChange('Name', e.target.value)}

              fullWidth
              variant="outlined"
              margin="normal"
            />
            <TextField
              label="Sluge"
              value={profileData.Sluge}
              onChange={(e) => handleProfileFieldChange('Sluge', e.target.value)}
              fullWidth
              variant="outlined"
              margin="normal"
            />
            {/* <TextField
              label="Image"
              value={profileData.userName}
              fullWidth
              variant="outlined"
              margin="normal"
              InputProps={{ readOnly: true }}
            /> */}
          </DialogContent>
          <DialogActions>
            <MainButton onClick={handleCloseDialog1} variant="contained">
              Cancel
            </MainButton>
            <MainButton variant="contained" onClick={handleSubmit}>
              Save
            </MainButton>
          </DialogActions>
        </Dialog>

        <Dialog open={openDialog} onClose={handleCloseDialog}>
          <DialogTitle>Update Profile</DialogTitle>
          <DialogContent>
            <TextField
              label="Title"
              // value={profileData.fullName}
              // onChange={(e) => handleProfileFieldChange('fullName', e.target.value)}

              fullWidth
              variant="outlined"
              margin="normal"
            />
            <TextField
              label="Description"
              // value={profileData.email}
              // onChange={(e) => handleProfileFieldChange('email', e.target.value)}
              fullWidth
              variant="outlined"
              margin="normal"
            />
            <TextField
              label="Price"
              // value={profileData.userName}
              fullWidth
              variant="outlined"
              margin="normal"
              InputProps={{ readOnly: true }}
            />
            <TextField
              label="Category"
              // value={profileData.password}
              fullWidth
              variant="outlined"
              margin="normal"
              type="password"
              InputProps={{ readOnly: true }}
            />

            <TextField
              label="Avatar"
              // value={profileData.avatar}
              fullWidth
              variant="outlined"
              margin="normal"
              InputProps={{ readOnly: true }}
            />
          </DialogContent>
          <DialogActions>
            <MainButton onClick={handleCloseDialog} variant="contained">
              Cancel
            </MainButton>
            <MainButton variant="contained" onClick={handleCloseDialog}>
              Save
            </MainButton>
          </DialogActions>
        </Dialog>
      </Box>
    </Container>
  );
};
