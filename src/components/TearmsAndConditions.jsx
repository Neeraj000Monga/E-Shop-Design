import  { useEffect, useState } from 'react';
import { Typography } from '@mui/material';
import {  Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material';
import { MainButton } from '../pages/Dashborad/MyStore';

export const TermsAndConditions = () => {
    const [dialogOpen, setDialogOpen] = useState(false);

    useEffect(() => {
        const acceptedTerms = localStorage.getItem('acceptedTerms');
        if (!acceptedTerms) {
          setDialogOpen(true);
        }
      }, []);

      const handleAcceptTerms = () => {
        localStorage.setItem('acceptedTerms', 'true');
        setDialogOpen(false); 
      };
      const handleCancelTerms = () => {
        setDialogOpen(false);
      };
    
      const handleDialogClose = () => {
        handleCancelTerms();
      };

    
    
  return (
    <Dialog open={dialogOpen} onClose={handleDialogClose} sx={{height:"600px"}}>
<DialogTitle>Terms & Conditions</DialogTitle>
<DialogContent>
<Typography variant="body1" sx={{ marginBottom: '20px' ,textAlign: 'justify', }}>
       Lorem ipsum dolor sit amet, consectetur adipisicing elit. illum accusamus? Voluptatibus, labore beatae. Animi ratione non, officiis eveniet incidunt, laborum nisi officia accusantium doloremque ullam optio amet velit, vitae aspernatur dolores sapiente. Doloremque, obcaecati tempora maiores temporibus ut hic beatae ducimus veritatis quibusdam dolore nobis, fugiat dolor totam! Consequatur placeat dolores esse vero eveniet dolorem, laborum ut fuga illo corrupti nulla at, non ullam minima debitis! Ipsum, inventore dicta necessitatibus facere delectus soluta reiciendis. Et magnam ipsam vel numquam, perferendis eos minima rerum temporibus aut sint possimus doloribus ratione voluptate dolorem delectus at sequi distinctio consequatur quos tempora. Dignissimos reiciendis odio rem quis in obcaecati voluptas corporis, commodi, dolore eligendi repellendus at soluta assumenda cumque beatae fugiat error exercitationem. Iusto consequuntur maxime quis aperiam autem. Quia laborum provident illum corrupti! Accusantium, veniam!
      </Typography>
</DialogContent>
<DialogActions sx={{ display: 'flex', justifyContent: 'space-evenly', marginBottom:"20px" }}>

        <MainButton variant="contained" sx={{ mr: 2,width:"160px"}} onClick={handleCancelTerms}>Cancel</MainButton>
        <MainButton onClick={handleAcceptTerms} variant="contained" sx={{width:"160px"}}>
          Accept
        </MainButton>
        
      </DialogActions>
</Dialog>



  );
};

