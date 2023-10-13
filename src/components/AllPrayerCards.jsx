import {Stack} from "@mui/material";
import PrayerCard from "./PrayerCard";
import axios from "axios";
import {useEffect, useState} from "react";
import { prayerNames, prayerImage } from "../../public/constants/Constants";


// render the component
const AllPrayerCards = ({prayerDate}) => {
    return (
        <Stack direction={"row"} marginTop={"10px"} justifyContent={"space-around"}>
            <PrayerCard time={prayerDate.Fajr}    src={prayerImage.fajrScr} name={prayerNames.fajr} />
            <PrayerCard time={prayerDate.Dhuhr}   src={prayerImage.dhuhrScr} name={prayerNames.dhuhr} />
            <PrayerCard time={prayerDate.Asr}     src={prayerImage.asrScr} name={prayerNames.asr} />
            <PrayerCard time={prayerDate.Maghrib} src={prayerImage.maghribScr} name={prayerNames.maghrib} />
            <PrayerCard time={prayerDate.Isha}    src={prayerImage.ishaScr} name={prayerNames.isha} />
        </Stack>
    );
};

export default AllPrayerCards;
