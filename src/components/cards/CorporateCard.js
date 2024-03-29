import { Grid, Stack, Typography } from '@mui/material';
import { Icon } from '@iconify/react';
import { styled } from '@mui/material/styles';
import PropTypes from 'prop-types';
import { fNumber } from '../../utils/formatNumber';
import { cyanPreset } from '../../utils/getColorPresets';


CoporateCard.propTypes = {
    name: PropTypes.string, // [{id, label},{id,label}]
    verified: PropTypes.bool, // "red", "#f9af2e"
    created: PropTypes.string,  // 'typograph's variant'
    floorPrice: PropTypes.number,
    totalPrice: PropTypes.number,
    percent: PropTypes.number,
    images: PropTypes.array,
}

const CardStyle = styled(`div`)(({ theme }) => ({
    boxShadow: 'rgba(16, 30, 115, 0.06) 0px 12px 26px',
    background: theme.palette.background.default,
    border: `1px solid ${theme.palette.background.paper}`,
    borderImage: 'initial',
    borderRadius: '10px',
    '&:hover': { boxShadow: 'rgba(16, 30, 115, 0.26) 0px 12px 26px' },
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    padding: 8,
}))
export default function CoporateCard({
    name, verified, created, floorPrice, totalPrice, percent, images
}) {
    return (
        <CardStyle >
            <Stack display='flex' justifyContent={'space-between'} gap={1}>
                <Stack direction='row' gap={1} justifyContent={'space-between'} alignItems={'center'}>
                    <img src={images[0]} alt="" width={95} height={100} />
                    <Stack  gap={1}>
                        <Typography variant="h6">{name}</Typography>
                        <Typography color={`gray`}>Created By:{created}</Typography>
                        <Typography variant="caption"><strong>Floor Price {floorPrice}</strong></Typography>
                    </Stack>
                    <Icon icon="bxs:check-shield" color={cyanPreset.dark}  width = {30}/>
                </Stack>
                <Stack direction="row" justifyContent={'space-between'} padding={1} >
                    <Typography variant='caption'><strong>{fNumber(totalPrice)} FLM</strong></Typography>
                    <Typography variant='caption' color='#00D18C'><strong>+{fNumber(percent)}%</strong></Typography>
                </Stack>
                <Grid container >
                    <Grid item xs={6} paddingRight={1}>
                        <img src={`${images[1]}`} alt="" width='100%' height={'100%'} />
                    </Grid>
                    <Grid item xs={6}>
                        <img src={`${images[2]}`} alt="" width={'100%'} />
                        <Grid container >
                            <Grid item xs={6} paddingRight={1}>
                                <img src={`${images[3]}`} alt="" width={'100%'} />
                            </Grid>
                            <Grid item xs={6} paddingLeft={1}>
                                <img src={`${images[4]}`} alt="" width={'100%'} />
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>


            </Stack>
        </CardStyle >
    )
}