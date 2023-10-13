// https://api.aladhan.com/v1/timingsByCity?country=EG&city=Fayoum
import {Container, Divider} from "@mui/material";
import Heading from "./Heading";
import AllPrayerCards from "./AllPrayerCards";

import SelectMenu from "./SelectMenu";
import {useEffect, useState} from "react";
import axios from "axios";

// api function
const fetchApi = async (setPrayerDate, selectedCity) => {
    const response = await axios.get(`https://api.aladhan.com/v1/timingsByCity?country=EG&city=${selectedCity}`);
    setPrayerDate(response.data.data.timings);
};

const MainContent = () => {
    const [selectedCity, setSelectedCity] = useState("الفيوم");
    const [prayerDate, setPrayerDate] = useState({});
    useEffect(() => {
        fetchApi(setPrayerDate, selectedCity);
    }, [selectedCity]);
    return (
        <Container maxWidth="lg" style={{width: "100%", padding: "10px"}}>
            <Heading selectedCity={selectedCity} prayerDate={prayerDate} />

            <Divider style={{borderColor: "white"}} />

            {/*start  PrayerCard  */}
            <AllPrayerCards prayerDate={prayerDate} />
            {/*end  PrayerCard  */}

            {/* start select menu  */}
            <SelectMenu selectedCity={selectedCity} setSelectedCity={setSelectedCity} />
            {/* end select menu  */}
        </Container>
    );
};

export default MainContent;
