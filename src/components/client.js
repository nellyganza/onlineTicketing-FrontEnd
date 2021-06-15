import React from 'react';
import { ImStarFull, ImStarHalf } from 'react-icons/im';

const ClientRecomended = () => (
  <section>
    <div className="wrapper bg-gray-50">
      <div
        className="section-title text-center"
        style={{
          marginTop: "10px"
        }}
      >
      <p className="font-Sansation" id="somePeople">TESTIMONIALS</p>
      </div>

      <div className="team flex justify-center space-x-4 p-10">
        <div className="team_member max-w-lg rounded overflow-hidden shadow-lg bg-gray-100">
          <div className="team_img">
            <img src="https://i.imgur.com/2pGPLrl.png" alt="Team_image" className="rounded-full" />
          </div>
          <div className="px-6 py-4">
            <h3>Paul Doe</h3>
            <p className="role">CEO of inyarwanda ltd</p>
            <p>
              This system is very atractive and secure as prominig
              they have great customer care and also they have team
              of managers that make sure that you are being satisfyied by their services.
            </p>

            <p className="flex justify-center pt-3 text-blue-700">
              <ImStarFull />
              <ImStarFull />
              <ImStarFull />
              <ImStarFull />
              <ImStarHalf />
            </p>
          </div>
        </div>
        <div className="team_member max-w-lg rounded overflow-hidden shadow-lg bg-gray-100">
          <div className="team_img">
            <img src="https://i.imgur.com/jQj1I8E.png" alt="Team_image" className="rounded-full" />
          </div>
          <div className="px-6 py-4">
            <h3>Rosie Meg</h3>
            <p className="role">Banker</p>
            <p>
              You can not imagine how this system is atractive
              I am grateful for their services, but I wish if there was operating branch in Togo.
          </p>
            <p className="flex justify-center pt-12 text-blue-700">
              <ImStarFull />
              <ImStarFull />
              <ImStarFull />
            </p>
          </div>
        </div>
        <div className="team_member max-w-lg rounded overflow-hidden shadow-lg bg-gray-100">
          <div className="team_img">
            <img src="../images/IMG_20210313_095733_2.png" className="rounded-full" alt="Team_image" />
          </div>
          <div className="px-6 py-4">
            <h3>Nishimwe Elysee</h3>
            <p className="role">web developer</p>
            <p>Flankly I have never seen before the organized system like this, I am traveller expert because I love travelling I recomend you barefoot in your jurnney.</p>
            <p className="flex justify-center pt-5 text-blue-700">
              <ImStarFull />
              <ImStarFull />
              <ImStarFull />
              <ImStarHalf />
            </p>
          </div>
        </div>
      </div>
    </div>

  </section>
);
export default ClientRecomended;
