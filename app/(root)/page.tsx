import Image from "next/image";
import Header from "../components/Header";

export default function Home() {
  return (
    <>
      <Header heading={
        <>
          Pitch your startup, <br />connect with entrepreneurs
        </>
      } subHeading="Submit Ideas, Vote on Pitches, and Get Noticed in Virtual Competitions" />

    </>
  );
}

