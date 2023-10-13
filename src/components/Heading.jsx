import {Grid} from "@mui/material";
import React, {useEffect, useState} from "react";
import moment from "moment";
import "moment/dist/locale/ar-dz";
moment.locale("ar");
const Heading = ({selectedCity, prayerDate}) => {
    const [today, setToday] = useState("nu");
    const [timerPryerCountDown, setTimerPryerCountDown] = useState(null);
    const prayersArray = [
        {key: "Fajr", displayName: "الفجر"},
        {key: "Dhuhr", displayName: "الظهر"},
        {key: "Asr", displayName: "العصر"},
        {key: "Sunset", displayName: "المغرب"},
        {key: "Isha", displayName: "العشاء"},
    ];
    const [PrayerIndexState, setPrayerIndexState] = useState(0);
    
    const nextPrayerTime = () => {
        let PrayerIndex = 0
        
        const momentNow = moment();

        if (
            momentNow.isAfter(moment(prayerDate.Fajr, "hh:mm")) &&
            momentNow.isBefore(moment(prayerDate.Dhuhr, "hh:mm"))
        ) {
            PrayerIndex = 1;
        }
        // --------------------------------------------------------------------
        else if (
            momentNow.isAfter(moment(prayerDate.Dhuhr, "hh:mm")) &&
            momentNow.isBefore(moment(prayerDate.Asr, "hh:mm"))
        ) {
            PrayerIndex = 2;
        }
        // --------------------------------------------------------------------
        else if (
            momentNow.isAfter(moment(prayerDate.Asr, "hh:mm")) &&
            momentNow.isBefore(moment(prayerDate.Maghrib, "hh:mm"))
        ) {
            PrayerIndex = 3;
        }
        // --------------------------------------------------------------------
        else if (
            momentNow.isAfter(moment(prayerDate.Maghrib, "hh:mm")) &&
            momentNow.isBefore(moment(prayerDate.Isha, "hh:mm"))
        ) {
            PrayerIndex = 4;
        }
        // --------------------------------------------------------------------
        else {
            PrayerIndex = 0;
        }

        setPrayerIndexState(PrayerIndex);

        // start count down to the next prayer's time

        //1. get the time of next prayer 
        const nextPrayerName = prayersArray[PrayerIndex].key // isha
        const nextPrayerTime = prayerDate[nextPrayerName] // 19:52
        const nextPrayerTimeMoment= moment(nextPrayerTime,"hh:mm")
        // calc diff between now moment and the  time of next prayer 
        let diff = moment(nextPrayerTime, "hh:mm").diff(momentNow) // time in ms
        

        // hanle case that the fajr time is less the the time befor fajr so the output is minus(4-19)
        
        if (diff < 0) {// mean iam in case the next prayer is fajr 
            const midnightDiff = moment("23:59:59", "hh:mm:ss").diff(momentNow)
            const FajrToMidnightDiff = nextPrayerTimeMoment.diff(moment("00:00:00", "hh:mm:ss"))
            const totalDiff = midnightDiff + FajrToMidnightDiff 
            diff=totalDiff
        }
        let remainigTimeDuration = moment.duration(diff)
        setTimerPryerCountDown(`${remainigTimeDuration.seconds()}:
        ${remainigTimeDuration.minutes()}:
        ${remainigTimeDuration.hours()}`)
        // console.log(remainigTimeDuration.hours(),remainigTimeDuration.minutes())
    };
    useEffect(() => {
        const t = moment();
        setToday(t.format("MMM Do YYYY | h:mm"));
        let time = setInterval(() => {
            nextPrayerTime();
        }, 1000);
        return () => {
            clearInterval(time);
        };
    });
    
    return (
        <Grid container spacing={2}>
            <Grid item xs={6}>
                <h2>سبتمبر 12/3/456</h2>
                <h2>{selectedCity}</h2>
            </Grid>
            <Grid item xs={6}>
                <h2>متبقي حتي صلاة {prayersArray[PrayerIndexState].displayName} </h2>
                <h2>{timerPryerCountDown}</h2>
            </Grid>
        </Grid>
    );
};

export default Heading;
