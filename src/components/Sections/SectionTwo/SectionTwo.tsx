import React from 'react';

import './SectionTwo.scss'
import {Separator} from "../../common/Separator/Separator";
import {Project} from "../../common/Project/Project";

export const SectionTwo = () => {

  return (
    <>
      <section className="section-projects">
        <div className="projects-title"><h2>Moje projekty</h2></div>
        <div className="project">
          <h3>Kalkulator kalorii</h3>
          <div className="project__details">
            <p className="project__details__describe">
              Idea stworzenia takiej aplikacji zrodziła się z chęci napisania czegoś praktycznego, z czego sam chętnie i
              często mógłbym korzystać. {"\n"}
              Swego czasu mocno interesowałem się szeroko pojętym fitnessem. Siłownia, zdrowe odżywianie, odchudzanie
              itp. Można więc powiedzieć, że aplikacja ta jest ukłonem w kierunku dawnych pasji. {"\n"}
              Funkcjonalności jakie zostały zawarte to podliczanie makroskładników na podstawie dodanych produktów z
              bazy danych lub wpisanych ręcznie, po zalogowaniu opcja dodania posiłku do ulubionych z możliwością
              późniejszej jego modyfikacji.
            </p>
            <p className="project__details__tech">
              Frontend: React, React-Redux, TypeScript, CSS {"\n"}
              Backend: ExpressJS, TypeScript, mySQL
            </p>
          </div>
          <div className="project__urls">
            <a className="project__urls__github-front" href="/"> {'>'} Github Frontend </a>
            <a className="project__urls__github-back" href="/"> {'>'} Github Backend </a>
            <a className="project__urls__demo" href="/"> {'>'} Demo </a>
          </div>
        </div>
        <Separator/>
        <div className="project">
          <h3>HeadHunters - MegaK</h3>
          <div className="project__details">
            <p className="project__details__describe">
              Jest to projekt grupowy, który był zwieńczeniem MegaKursu - 14 miesięcznego kursu programowania Backend/Fullstack prowadzonego przez Jakuba Króla oraz Bartłomieja Borowczyka. {"\n"}
              Pracowaliśmy przez 4.5 tygodnia w 5/6 osobowej drużynie, dzięki czemu bardzo oswoiłem się z pracą z githubem, dowiedziałem się jak to jest rozwiązywać konflikty przed mergem oraz dowiedziałem się dużo na temat pracy w SCRUM. {"\n"}
              Początkowo byłem w podzespole backendowym, jednak pod koniec przeskakiwałem również na front by wszystko ze sobą połączyć. Poza tym pełniłem funkcję lidera oraz Scrum Mastera. {"\n"}
              Aplikacja ta służy do wyłapywania kursantów przez rekruterów.
            </p>
            <p className="project__details__tech">
              Frontend: React, React-Redux, TypeScript, SCSS {"\n"}
              Backend: NestJS, TypeScript, TypeORM, mySQL
            </p>
          </div>
          <div className="project__urls">
            <a className="project__urls__github-front" href="/"> {'>'} Github Frontend </a>
            <a className="project__urls__github-back" href="/"> {'>'} Github Backend </a>
            <a className="project__urls__demo" href="/"> {'>'} Demo </a>
          </div>
        </div>
        <Separator/>
        <div className="project" >
          <h3>CV</h3>
          <div className="project__details">
            <p className="project__details__describe">
              Strona ta ma na celu przedstawić moją kandydaturę do pracy w troszkę innym wydaniu niż kartka A4 z polami typu HTML 4 na 5 gwiazdek :).
            </p>
            <p className="project__details__tech">
              Frontend: React, React-Redux, TypeScript, SCSS {"\n"}
              Backend: NestJS, TypeScript, TypeORM, mySQL
            </p>
          </div>
          <div className="project__urls">
            <a className="project__urls__github-front" href="/"> {'>'} Github Frontend </a>
            <a className="project__urls__github-back" href="/"> {'>'} Github Backend </a>
            <a className="project__urls__demo" href="/"> {'>'} Demo </a>
          </div>
        </div>
        {/*<Project />*/}

      </section>
    </>
  )
}