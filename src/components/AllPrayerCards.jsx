import {Stack} from "@mui/material";
import PrayerCard from "./PrayerCard";
import axios from "axios";
import {useEffect, useState} from "react";
import { prayerNames} from "../../public/constants/Constants";


// render the component
const AllPrayerCards = ({prayerDate}) => {
    return (
        <Stack direction={"row"} marginTop={"10px"} justifyContent={"space-around"}>
            <PrayerCard time={prayerDate.Fajr}    src="https://i0.wp.com/mvslim.com/wp-content/uploads/2015/04/mosque-1-1203-dcgjpg-41238cef132b4f93.jpg?fit=2048%2C1365&ssl=1"   name={prayerNames.fajr} />
            <PrayerCard time={prayerDate.Dhuhr}   src="https://www.thelocal.es/wp-content/uploads/2018/03/03c8ac178c51a0bbc23d439cf8a6980a5f3c5e1e0d7e242c3ff57349c2511a9d.jpg"   name={prayerNames.dhuhr} />
            <PrayerCard time={prayerDate.Asr}     src="https://thephotobrigade.com/wp-content/uploads/2010/08/DougStrickland.jpg"  {prayerNames.asr} />
            <PrayerCard time={prayerDate.Maghrib} src="https://www.the-faith.com/wp-content/uploads/2019/09/Prophet-Muhammad-between-Reverence-and-Sarcasm-2.jpg"   name={prayerNames.maghrib} />
            <PrayerCard time={prayerDate.Isha}    src="https://cdn.images.express.co.uk/img/dynamic/1/590x/secondary/Muslims-praying-844564.jpg"   name={prayerNames.isha} />
        </Stack>
    );
};

export default AllPrayerCards;
