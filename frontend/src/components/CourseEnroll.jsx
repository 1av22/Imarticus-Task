import React from 'react';
import NavBar from "./sub_components/NavBar";
import MyCaptain from "./sub_components/MyCaptain";
import HighlightAndApply from "./sub_components/HighlightAndApply";
import Partners from "./sub_components/Partners";
import ProgramCurriculum from "./sub_components/ProgramCurriculum";
import Tools from "./sub_components/Tools";
import UpcomingBatches from './sub_components/UpcomingBatches';

const CourseEnroll = () => {
    return (
        <div
            style={{
                backgroundColor: "rgba(60,72,82,.05)",
                display: "flex",
                flexDirection: "column",
                alignItems: "center"
            }}>
            <NavBar />
            <MyCaptain />
            <HighlightAndApply />
            <Partners />
            <ProgramCurriculum />
            <Tools />
            <UpcomingBatches />
        </div>
    );
};

export default CourseEnroll;

