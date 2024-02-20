import ActivePatientsCard from "@/components/ActivePatientsCard";
import ConsultationCard from "@/components/ConsultationCard";
import Header from "@/components/Header";
import PatientsvisitedCard from "@/components/PatientsvisitedCard";
import Profile from "@/components/Profile";
import Sidebar from "@/components/Sidebar";
import StatisticsCard from "@/components/StatisticsCard";
import TeamMeetingCard from "@/components/TeamMeetingCard";
import UpcomingEventsCard from "@/components/UpcomingEventsCard";

export default function Home() {
  return (
    <>
      <div className="p-2 flex ">
        <div className=" h-full">
          <Sidebar />
        </div>
        <div className=" w-full bg-[#151C39] p-2 overflow-auto overflow-x-hidden h-screen sm:justify-evenly  no-scrollbar rounded-lg flex sm:flex-row flex-col">
          <div className=" lg:w-2/3 w-full ">
            <Header />
            <div className=" p-1 w-full  lg:hidden">
              <Profile />
            </div>
            <div className=" flex sm:flex-row  flex-col gap-5 justify-evenly   ">
              <div className=" flex flex-col  gap-5">
                <PatientsvisitedCard />
                <UpcomingEventsCard />
              </div>
              {/* <div className="  flex justify-end w-1/2"> */}
              <StatisticsCard />
              {/* </div> */}
            </div>
            <div className=" mt-2">
              <div className="justify-evenly sm:flex-row flex-col flex">
                <div className=" flex-col flex">
                  <p className=" font-bold text-lg">Active Patients</p>
                  <ActivePatientsCard />
                </div>
                <div className=" flex flex-col gap-2  sm:w-1/2">
                  <p className=" font-bold text-lg">Upcoming Events</p>
                  <div className=" flex  gap-5 flex-col justify-evenly h-full">
                    <TeamMeetingCard />
                    <ConsultationCard />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className=" p-2 rounded-full hidden lg:block ">
            <Profile />
          </div>
        </div>
      </div>
    </>
  );
}
