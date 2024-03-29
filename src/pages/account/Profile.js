import { Box } from "@mui/material";
import { useParams } from "react-router";
import { useEffect } from "react";

import ProfileCover from "../../sections/profile/ProfileCover";
import Page from "../../components/Page";
import ProfileNFTs from "../../sections/profile/ProflieNFTs";
import PopularCreator from "../../sections/profile/PopularCreator";
import StayInLoop from "../../sections/StayInLoop";



export default function Profile() {
    const { id } = useParams();
    console.log(id, id ===`151`);
    useEffect(()=>{

    },[id]);
    return (
        <Page title="">
            <Box sx={{ display: 'flex', gap: { xs: 10, sm: 12, md: 14 }, flexDirection: 'column' }} >
                <ProfileCover isYou = {(id)===`151`} />
                <ProfileNFTs />
                <PopularCreator />
                {/* Stay in loop start */}
                <StayInLoop />
            </Box>
        </Page>
    )
}