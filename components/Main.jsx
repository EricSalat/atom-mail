import Image from 'next/image'
import styles from "../styles/Body.module.css";
import SubscribeForm from '../components/SubscribeForm';
import Card from "../components/Card";
import CardDescription from './CardDescription';
import Layout from './Dashboard/Layout';
import { BsBuilding, BsChatDots, BsBriefcase, BsHouseDoor } from "react-icons/bs";
import { useState } from "react";


export default function Main() {

  const [enterprise, setEnterprise] = useState(true);
  const [sms, setSms] = useState(false);
  const [agencies, setAgencies] = useState(false);
  const [institution, setInstitution] = useState(false);

  const [enterpriseCard, setEnterpriseCard] = useState(true);
  const [institutionCard, setInstitutionCard] = useState(false);
  const [smsCard, setSmsCard] = useState(false);
  const [agenciesCard, setAgenciesCard] = useState(false);

  return (
    <main>
      <div className="container">
        <section id="hero" className="pt-4">
          <div className="row justify-content-center text-center">
            <h1 className="col-12 col-lg-9">SMS Marketing and <b>Email Marketing</b> Made Easy</h1>
            <p className={`${styles["highlight-text"]} ${"my-3"}`}>
            You can get started with your marketing automation in a few minutes
            </p>
            <SubscribeForm
              id="email"
              content="Let's Talk" />
          </div>
        </section>
        
        <Layout />
          
          
        

        <section id="solutions">
          <div className="container">
            <div className="d-flex justify-content-center text-center my-4">
              <h2 className="col-lg-8 col-10">Inbound marketing solutions for what yo need to do</h2>
            </div>

            <div className="d-flex justify-content-center">
              <Card 
              id="card1" 
              content={<BsBuilding size="3rem" />} 
              text="Enterprise"
              classname="card-selected"
              onclick={() => {setEnterprise(true); setSms(false); setAgencies(false); setInstitution(false)}} />

              <Card id="card2" content={<BsChatDots size="3rem" />} text="SMS and self-employed"
              onclick={() => {setEnterprise(false); setSms(true); setAgencies(false); setInstitution(false)}} />

              <Card id="card3" content={<BsBriefcase size="3rem" classname="mb-4" />} text="Agencies"
              onclick={() => {setEnterprise(false); setSms(false); setAgencies(true); setInstitution(false)}} />

              <Card id="card4" content={<BsHouseDoor size="3rem" classname="mb-4" />} text="Institution"
              onclick={() => {setEnterprise(false); setSms(false); setAgencies(false); setInstitution(true)}} />
            </div>


            <CardDescription
              title="Enterprise"
              description="Enterprise Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus quas libero esse, eos obcaecati dolores aspernatur quibusdam quaerat unde voluptatum ut dignissimos iste, tempore incidunt animi, non ea fugit consectetur."
              id=""
              classname={enterprise ? null : "inactive"}
            />
            <CardDescription
              title="SMS and self-employed"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus quas libero esse, eos obcaecati dolores aspernatur quibusdam quaerat unde voluptatum ut dignissimos iste, tempore incidunt animi, non ea fugit consectetur."
              id=""
              classname={sms ? null : "inactive"} 
            />
            <CardDescription
              title="Agencies"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus quas libero esse, eos obcaecati dolores aspernatur quibusdam quaerat unde voluptatum ut dignissimos iste, tempore incidunt animi, non ea fugit consectetur."
              id=""
              classname={agencies ? null : "inactive"}
            />
            <CardDescription
              title="Institution"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus quas libero esse, eos obcaecati dolores aspernatur quibusdam quaerat unde voluptatum ut dignissimos iste, tempore incidunt animi, non ea fugit consectetur."
              id=""
              classname={institution ? null : "inactive"}
            />
          </div>
        </section>




      </div>
    </main>

  );
}