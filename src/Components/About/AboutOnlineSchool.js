import React, { useState } from "react";
import "../../CSS/AboutOS/AboutOS.css";
function Aboutonlineschool() {
  const [sarahMore, setSarahMore] = useState(false);
  const [throyaMore, setThroyaMore] = useState(false);
  const [kajolMore, setKajolMore] = useState(false);
  const [abbieMore, setAbbieMore] = useState(false);
  const [claudiaMore, setClaudiaMore] = useState(false);
  const [guyMore, setGuyMore] = useState(false);
  const [annMore, setAnnMore] = useState(false);
  const [katieMore, setKatieMore] = useState(false);
  const [mikeMore, setMikeMore] = useState(false);
  const [carlaMore, setCarlaMore] = useState(false);
  const [paulaMore, setPaulaMore] = useState(false);
  const [jacquesMore, setJacquesMore] = useState(false);
  const [julieMore, setJulieMore] = useState(false);
  return (
    <>
      <div className="aos-main">
        <div className="aos-1">
          <div className="aos-1-1">
            <div className="aos-1-1-title">
              <h2>Who are we?</h2>
            </div>
            <div className="aos-1-1-texts">
              <div>
                <h6>
                  Eureka Learning is an online language and tutoring school
                  offering online private and group classes for adults and
                  children alike.
                </h6>
              </div>
              <div style={{ marginTop: "30px" }}>
                <h6>
                  The school was opened in January 2019 by Sarah Boland, who,
                  aside of managing the online school also teaches mathematics,
                  business studies , economics and German. So far, all our
                  virtual teachers have received great feedback from students
                  and the company has grown quickly. Our main aim is to provide
                  high quality online lessons, helping each individual student
                  to reach their goals.{" "}
                </h6>
              </div>
            </div>
          </div>
          <div className="aos-1-2"></div>
        </div>
        <div className="aos-2">
          <div className="aos-2-1">
            <div>
              <h2>Our Departments</h2>
            </div>
            <div className="aos-2-1-line"></div>
          </div>
          <div className="aos-2-2">
            <div className="aos-2-2-1">
              <div className="aos-2-2-1-image">
                <img src="\Images\tutors.png" />
              </div>
              <div className="aos-2-2-1-title">
                <h2>Online Language Department </h2>
              </div>
              <div className="aos-2-2-1-text">
                <h6>
                  The language department focuses on teaching foreign languages
                  as well as English as a foreign language. Have a look here for
                  more information
                </h6>
              </div>
            </div>
            <div className="aos-2-2-1">
              <div className="aos-2-2-1-image">
                <img src="/Images/alphabet.png" />
              </div>
              <div className="aos-2-2-1-title">
                <h2>Online Tutoring Department </h2>
              </div>
              <div className="aos-2-2-1-text">
                <h6>
                  The tutoring department has a selection of online tutors
                  providing students help in small groups or 1-2-1 in a range of
                  subjects commonly taught in schools and colleges.
                </h6>
              </div>
            </div>
            <div className="aos-2-2-1" style={{ marginTop: "35px" }}>
              <div className="aos-2-2-1-image">
                <img src="/Images/children-class.png" />
              </div>
              <div className="aos-2-2-1-title">
                <h2>Online Homeschool</h2>
              </div>
              <div className="aos-2-2-1-text">
                <h6>
                  Our online homeschool provides weekly live classes to
                  homeschooled children from primary to college and access to a
                  customised online platform for the sharing of course material
                  and extra support.
                </h6>
              </div>
            </div>
          </div>
          <div className="aos-2-3">
            <h6>
              Our prestigious online school provides a creative and broad
              British curriculum to all of our students. Our expert and highly
              qualified online teachers supply our students with an outstanding,
              world class online education that gives them the ability to excel
              and succeed in their exams and goals. Our flexible and
              personalised virtual learning approach allows our online pupils to
              learn when it is most convenient for them, giving them more time
              for the activities they love. Whether our online students are
              looking for virtual morning classes or virtual evening classes, we
              have a selection of schedules for every student to match their
              circumstances.
            </h6>
          </div>
        </div>
        <div className="aos-3">
          <div className="aos-1-1-title">
            <h2>Featured Teachers</h2>
          </div>
          <div className="aos-3-teachers-divs">
            <div className="aos-3-teachers-div">
              <div className="aos-3-teacher">
                <div className="aos-3-teacher-IaS">
                  <div className="aos-3-teacher-NaI">
                    <div className="aos-3-teacher-N">
                      <span>Sarah Boland</span>
                    </div>
                    <div className="aos-3-teacher-I">
                      <img src="/Images/SarahBoland.png" />
                    </div>
                  </div>
                  <div className="aos-3-teacher-S">
                    <div className="aos-3-teacher-S-1">
                      <span style={{ textDecoration: "underline" }}>
                        Subjects:
                      </span>
                      <br />
                      <ul style={{ paddingLeft: "20px" }}>
                        <li>
                          <span>Maths</span>
                        </li>
                        <li>
                          <span>Business </span>
                        </li>

                        <li>
                          <span>Economics</span>
                        </li>
                      </ul>
                    </div>
                    <div className="aos-3-teacher-S-2">
                      <span>
                        Sarah teaches from year 7 through to university.
                      </span>
                    </div>
                  </div>
                </div>
                <div className="aos-3-teacher-bios">
                  <div className="aos-3-teacher-bios-1">
                    {sarahMore === false && (
                      <p>
                        Sarah was born in a small town in Germany. After
                        graduating from college, she moved to Scotland, where
                        she ...
                      </p>
                    )}
                    {sarahMore === true && (
                      <div>
                        <div className="bios-more">
                          <p>
                            Sarah was born in a small town in Germany. After
                            graduating from college, she moved to Scotland,
                            where she completed her master's degree. As part of
                            her degree, she spent a year living and studying in
                            Spain.
                          </p>
                        </div>
                        <div className="bios-more">
                          <p>
                            Due to her love of studying and a long interest in
                            Mathematics, she completed an honour's degree in
                            Mathematics at the Open University, while also
                            studying towards a distance learning degree in
                            psychology.
                          </p>
                        </div>

                        <div className="bios-more">
                          <p>
                            Using her academic knowledge and success, Sarah
                            started teaching as a private tutor. As she was very
                            successful and received well by her students, she
                            decided to grow her business and set up her own
                            language and tutoring school. Eureka now has a team
                            of tutors, a tutoring centre in Portsmouth as well
                            as an online school teaching many homeschooled
                            students.
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                  <div className="aos-3-teacher-bios-2">
                    <p
                      style={{ textDecoration: "underline" }}
                      onClick={() => setSarahMore(!sarahMore)}
                    >
                      {" "}
                      {sarahMore ? "Read less" : "Read more"}
                    </p>
                  </div>
                </div>
              </div>
              <div className="aos-3-teacher">
                <div className="aos-3-teacher-IaS">
                  <div className="aos-3-teacher-NaI">
                    <div className="aos-3-teacher-N">
                      <span>Thorya Cherrared</span>
                    </div>
                    <div className="aos-3-teacher-I">
                      <img src="/Images/throyaCherrared.png" />
                    </div>
                  </div>
                  <div className="aos-3-teacher-S">
                    <div className="aos-3-teacher-S-1">
                      <span style={{ textDecoration: "underline" }}>
                        Subjects:
                      </span>
                      <br />
                      <ul style={{ paddingLeft: "20px" }}>
                        <li>
                          <span>French</span>
                        </li>
                        <li>
                          <span>Arabic </span>
                        </li>

                        <li>
                          <span>Maths</span>
                        </li>
                      </ul>
                    </div>
                    <div className="aos-3-teacher-S-2">
                      <span>
                        Thorya teaches primary school and French for all ages.
                      </span>
                    </div>
                  </div>
                </div>
                <div className="aos-3-teacher-bios">
                  <div className="aos-3-teacher-bios-1">
                    {throyaMore === false && (
                      <p>
                        Born in Algeria, Thorya graduated with a masters in
                        applied statistics in 2012 before moving to the UK. She
                        has a number of ...
                      </p>
                    )}
                    {throyaMore === true && (
                      <div>
                        <div className="bios-more">
                          <p>
                            Born in Algeria, Thorya graduated with a masters in
                            applied statistics in 2012 before moving to the UK.
                            She has a number of years’ experience working as a
                            statistician/engineer within the finance and banking
                            industry where she was responsible for a number of
                            projects in different sectors.
                          </p>
                        </div>
                        <div className="bios-more">
                          <p>
                            Native in French and Arabic, Thorya has been
                            enjoying tutoring French, Arabic and mathematics
                            privately, while raising her kids. She enjoys
                            meeting new people and working in the community.
                            What she enjoys the most is seeing people taking up
                            a new language whether for work or as a hobby and
                            slowly getting to master it.
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                  <div className="aos-3-teacher-bios-2">
                    <p
                      style={{ textDecoration: "underline" }}
                      onClick={() => setThroyaMore(!throyaMore)}
                    >
                      {" "}
                      {throyaMore ? "Read less" : "Read more"}
                    </p>
                  </div>
                </div>
              </div>
              <div className="aos-3-teacher">
                <div className="aos-3-teacher-IaS">
                  <div className="aos-3-teacher-NaI">
                    <div className="aos-3-teacher-N">
                      <span>Abbie Thomson</span>
                    </div>
                    <div className="aos-3-teacher-I">
                      <img src="/Images/abbieThomson.png" />
                    </div>
                  </div>
                  <div className="aos-3-teacher-S">
                    <div className="aos-3-teacher-S-1">
                      <span style={{ textDecoration: "underline" }}>
                        Subjects:
                      </span>
                      <br />
                    </div>
                    <div className="aos-3-teacher-S-2">
                      <span>
                        Abbie teaches primary school students in a range of
                        subjects
                      </span>
                    </div>
                  </div>
                </div>
                <div className="aos-3-teacher-bios">
                  <div className="aos-3-teacher-bios-1">
                    {abbieMore === false && (
                      <p>
                        Abbie is a primary teacher from Edinburgh. She holds a
                        degree in Primary Education from the University of
                        Stirling, and has ...
                      </p>
                    )}
                    {abbieMore === true && (
                      <div>
                        <div className="bios-more">
                          <p>
                            Abbie is a primary teacher from Edinburgh. She holds
                            a degree in Primary Education from the University of
                            Stirling, and has experience in teaching a variety
                            of subjects to children of all ages. This has
                            enabled Abbie to develop techniques to teach
                            challenging concepts and create engaging materials.
                            She has also completed her CELTA (Certificate in
                            Teaching English to Speakers of Other Languages)
                            with the British Council. During this course, Abbie
                            held online English classes for adults of various
                            levels, and helped develop their skills to meet
                            their aims.
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                  <div className="aos-3-teacher-bios-2">
                    <p
                      style={{ textDecoration: "underline" }}
                      onClick={() => setAbbieMore(!abbieMore)}
                    >
                      {" "}
                      {abbieMore ? "Read less" : "Read more"}
                    </p>
                  </div>
                </div>
              </div>
              <div className="aos-3-teacher">
                <div className="aos-3-teacher-IaS">
                  <div className="aos-3-teacher-NaI">
                    <div className="aos-3-teacher-N">
                      <span>Kajol Punjabi</span>
                    </div>
                    <div className="aos-3-teacher-I">
                      <img src="/Images/kajolPunjabi.png" />
                    </div>
                  </div>
                  <div className="aos-3-teacher-S">
                    <div className="aos-3-teacher-S-1">
                      <span style={{ textDecoration: "underline" }}>
                        Subjects:
                      </span>
                      <br />
                      <ul style={{ paddingLeft: "20px" }}>
                        <li>
                          <span>Psychology</span>
                        </li>
                        <li>
                          <span>Biology </span>
                        </li>

                        <li>
                          <span>Chemistry</span>
                        </li>
                      </ul>
                    </div>
                    <div className="aos-3-teacher-S-2">
                      <span>
                        Kajol teaches from secondary school to sixth form.
                      </span>
                    </div>
                  </div>
                </div>
                <div className="aos-3-teacher-bios">
                  <div className="aos-3-teacher-bios-1">
                    {kajolMore === false && (
                      <p>
                        Kajol Punjabi was born in Mumbai, India. She completed
                        the first half of her education until pre-university
                        level in ...
                      </p>
                    )}
                    {kajolMore === true && (
                      <div>
                        <div className="bios-more">
                          <p>
                            Kajol Punjabi was born in Mumbai, India. She
                            completed the first half of her education until
                            pre-university level in Mumbai, before moving to
                            China in 2015 for medical school. During her stay in
                            China, she learnt Mandarin and successfully
                            completed the HSK level 5 examination. Besides
                            medicine, teaching has always been her passion,
                            which is why Kajol always had in my mind the wish to
                            take up teaching as a full-time career.
                          </p>
                        </div>
                        <div className="bios-more">
                          <p>
                            Kajol teaches Psychology, Biology and Chemistry for
                            GCSEs as well as A-Levels. She also teaches Mandarin
                            as per the HSK examination qualification
                            requirements.
                          </p>
                        </div>
                        <div className="bios-more">
                          <p>
                            While she loves teaching, a major part of her
                            lifestyle also includes a lot of love for animals,
                            reading and music. Kajol hopes and wishes to help as
                            many stray and abandoned animals as possible, and
                            has been slowly yet steadily working her way towards
                            this goal. Kajol's passion to educate and help young
                            people to achieve their dreams is equally as strong,
                            and she hopes to be able to teach for as long as
                            possible.
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                  <div className="aos-3-teacher-bios-2">
                    <p
                      style={{ textDecoration: "underline" }}
                      onClick={() => setKajolMore(!kajolMore)}
                    >
                      {" "}
                      {throyaMore ? "Read less" : "Read more"}
                    </p>
                  </div>
                </div>
              </div>
              <div className="aos-3-teacher">
                <div className="aos-3-teacher-IaS">
                  <div className="aos-3-teacher-NaI">
                    <div className="aos-3-teacher-N">
                      <span>Claudia Karnitz</span>
                    </div>
                    <div className="aos-3-teacher-I">
                      <img src="/Images/claudiaKarnitz.png" />
                    </div>
                  </div>
                  <div className="aos-3-teacher-S">
                    <div className="aos-3-teacher-S-1">
                      <span style={{ textDecoration: "underline" }}>
                        Subjects:
                      </span>
                      <br />
                      <ul style={{ paddingLeft: "20px" }}>
                        <li>
                          <span>German</span>
                        </li>
                      </ul>
                    </div>
                    <div className="aos-3-teacher-S-2">
                      <span>Claudia teaches students in secondary school.</span>
                    </div>
                  </div>
                </div>
                <div className="aos-3-teacher-bios">
                  <div className="aos-3-teacher-bios-1">
                    {claudiaMore === false && (
                      <p>
                        Claudia was born in Cologne, Germany and obtained a
                        Masters in English and German Language and Literature
                        and...
                      </p>
                    )}
                    {claudiaMore === true && (
                      <div>
                        <div className="bios-more">
                          <p>
                            Claudia was born in Cologne, Germany and obtained a
                            Masters in English and German Language and
                            Literature and Educational Sciences.
                          </p>
                        </div>
                        <div className="bios-more">
                          <p>
                            As a student and after her degree she worked for
                            several years in various administrative roles, such
                            as working in the office of an in-company language
                            school – where she learned a lot from the teachers
                            she dealt with – as well as organising degree
                            programmes in Germany and the UK for employees.
                          </p>
                        </div>
                        <div className="bios-more">
                          <p>
                            She then moved to Bordeaux where she raised her
                            daughter, and started teaching private lessons in
                            ESOL and German to teenagers and adults.
                          </p>
                        </div>
                        <div className="bios-more">
                          <p>
                            After 13 years in France, she moved with her family
                            to the Moray area in Scotland where she co-managed a
                            pub while teaching private lessons online.
                          </p>
                        </div>
                        <div className="bios-more">
                          <p>
                            Now she lives in Aberdeen and teaches German, ESOL,
                            and sometimes French to teenagers, students, and
                            adults of all levels. She has extensive experience
                            in GSCE preparation, A - Levels/Highers, as well as
                            several IB German programmes.
                          </p>
                        </div>
                        <div className="bios-more">
                          <p>
                            In her spare time she enjoys reading historical
                            crime novels and short stories, hiking, Pilates and
                            visiting castles.
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                  <div className="aos-3-teacher-bios-2">
                    <p
                      style={{ textDecoration: "underline" }}
                      onClick={() => setClaudiaMore(!claudiaMore)}
                    >
                      {" "}
                      {claudiaMore ? "Read less" : "Read more"}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="aos-3-teachers-div">
              <div className="aos-3-teacher">
                <div className="aos-3-teacher-IaS">
                  <div className="aos-3-teacher-NaI">
                    <div className="aos-3-teacher-N">
                      <span>Guy Rogers</span>
                    </div>
                    <div className="aos-3-teacher-I">
                      <img src="/Images/guyRodgers.png" />
                    </div>
                  </div>
                  <div className="aos-3-teacher-S">
                    <div className="aos-3-teacher-S-1">
                      <span style={{ textDecoration: "underline" }}>
                        Subjects:
                      </span>
                      <br />
                      <ul style={{ paddingLeft: "20px" }}>
                        <li>
                          <span>Physics </span>
                        </li>
                        <li>
                          <span>Biology </span>
                        </li>
                        <li>
                          <span>Chemistry </span>
                        </li>
                        <li>
                          <span>Maths </span>
                        </li>
                      </ul>
                    </div>
                    <div className="aos-3-teacher-S-2">
                      <span>Guy teaches from year 7 to college.</span>
                    </div>
                  </div>
                </div>
                <div className="aos-3-teacher-bios">
                  <div className="aos-3-teacher-bios-1">
                    {guyMore === false && (
                      <p>
                        Guy was born in Portsmouth and has lived in the
                        surrounding area all his life. His love for science
                        started in school and continue ...
                      </p>
                    )}
                    {guyMore === true && (
                      <div>
                        <div className="bios-more">
                          <p>
                            Guy was born in Portsmouth and has lived in the
                            surrounding area all his life. His love for science
                            started in school and continued through to
                            university where he studied astrophysics at the
                            Russell Group's University of Southampton. While at
                            university, he began to tutor privately and soon
                            realised he had a passion for helping others to
                            learn.
                          </p>
                        </div>
                        <div className="bios-more">
                          <p>
                            Once graduated, he was able to use this passion to
                            teach science at key stage 3 and 4 both in school
                            and through continued private tutoring. Now, he
                            still enjoys spending time helping students succeed
                            through private tutoring and teaching online classes
                            at the school.
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                  <div className="aos-3-teacher-bios-2">
                    <p
                      style={{ textDecoration: "underline" }}
                      onClick={() => setGuyMore(!guyMore)}
                    >
                      {" "}
                      {guyMore ? "Read less" : "Read more"}
                    </p>
                  </div>
                </div>
              </div>
              <div className="aos-3-teacher">
                <div className="aos-3-teacher-IaS">
                  <div className="aos-3-teacher-NaI">
                    <div className="aos-3-teacher-N">
                      <span>Ann Boland</span>
                    </div>
                    <div className="aos-3-teacher-I">
                      <img src="/Images/annBoland.png" />
                    </div>
                  </div>
                  <div className="aos-3-teacher-S">
                    <div className="aos-3-teacher-S-1">
                      <span style={{ textDecoration: "underline" }}>
                        Subjects:
                      </span>
                      <br />
                      <ul style={{ paddingLeft: "20px" }}>
                        <li>
                          <span>English </span>
                        </li>
                        <li>
                          <span>History </span>
                        </li>
                      </ul>
                    </div>
                    <div className="aos-3-teacher-S-2">
                      <span>
                        Ann teaches all ages, from primary to college.
                      </span>
                    </div>
                  </div>
                </div>
                <div className="aos-3-teacher-bios">
                  <div className="aos-3-teacher-bios-1">
                    {annMore === false && (
                      <p>
                        Ann was born and grew up in South Africa. In 1985 she
                        moved to the UK with her husband and raised her three
                        children, ...
                      </p>
                    )}
                    {annMore === true && (
                      <div>
                        <div className="bios-more">
                          <p>
                            Ann was born and grew up in South Africa. In 1985
                            she moved to the UK with her husband and raised her
                            three children, while completing a degree in
                            Histroy. She subsequently taught English to young
                            children in Germany where she lived for 13 years
                            until returning to the UK and teaching English to
                            foreign students in Wales, preparing for GCSE exams.
                            She now lives in England teaching a variety of
                            online classes teaching English and history with
                            Eureka.
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                  <div className="aos-3-teacher-bios-2">
                    <p
                      style={{ textDecoration: "underline" }}
                      onClick={() => setAnnMore(!annMore)}
                    >
                      {" "}
                      {annMore ? "Read less" : "Read more"}
                    </p>
                  </div>
                </div>
              </div>
              <div className="aos-3-teacher">
                <div className="aos-3-teacher-IaS">
                  <div className="aos-3-teacher-NaI">
                    <div className="aos-3-teacher-N">
                      <span>Katie Unnithan</span>
                    </div>
                    <div className="aos-3-teacher-I">
                      <img src="/Images/katieUnnithan.png" />
                    </div>
                  </div>
                  <div className="aos-3-teacher-S">
                    <div className="aos-3-teacher-S-1">
                      <span style={{ textDecoration: "underline" }}>
                        Subjects:
                      </span>
                      <br />
                      <ul style={{ paddingLeft: "20px" }}>
                        <li>
                          <span>RE </span>
                        </li>
                        <li>
                          <span>Philosophy </span>
                        </li>
                      </ul>
                    </div>
                    <div className="aos-3-teacher-S-2">
                      <span>
                        Katie teaches students in secondary school through to
                        sixth form.
                      </span>
                    </div>
                  </div>
                </div>
                <div className="aos-3-teacher-bios">
                  <div className="aos-3-teacher-bios-1">
                    {katieMore === false && (
                      <p>
                        Katie was born in California but grew up in the UK. She
                        has a BA Philosophy Religion and Ethics and an MA
                        International Law; ...
                      </p>
                    )}
                    {katieMore === true && (
                      <div>
                        <div className="bios-more">
                          <p>
                            Katie was born in California but grew up in the UK.
                            She has a BA Philosophy Religion and Ethics and an
                            MA International Law; Ethics and Politics both from
                            University of Birmingham. Katie worked as a private
                            tutor alongside studying and helped provide feedback
                            to university students through the
                            university-approved website, Studiosity. She has
                            been living in Birmingham since she graduated in
                            December.
                          </p>
                        </div>
                        <div className="bios-more">
                          <p>
                            Katie really enjoys teaching Religious Studies and
                            Philosophy because these subjects can help students
                            articulate and interact with difficult questions
                            they may not directly talk about elsewhere. Also,
                            students always bring really interesting
                            perspectives to discussions and they "make her job
                            so much easier (and more fun)!" In her spare time
                            she also enjoys running and boxing. Katie has
                            completed several half marathons and one full
                            marathon as well as a trail.
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                  <div className="aos-3-teacher-bios-2">
                    <p
                      style={{ textDecoration: "underline" }}
                      onClick={() => setKatieMore(!katieMore)}
                    >
                      {" "}
                      {katieMore ? "Read less" : "Read more"}
                    </p>
                  </div>
                </div>
              </div>
              <div className="aos-3-teacher">
                <div className="aos-3-teacher-IaS">
                  <div className="aos-3-teacher-NaI">
                    <div className="aos-3-teacher-N">
                      <span>Mike Griffiths</span>
                    </div>
                    <div className="aos-3-teacher-I">
                      <img src="/Images/mikeGriffiths.png" />
                    </div>
                  </div>
                  <div className="aos-3-teacher-S">
                    <div className="aos-3-teacher-S-1">
                      <span style={{ textDecoration: "underline" }}>
                        Subjects:
                      </span>
                      <br />
                      <ul style={{ paddingLeft: "20px" }}>
                        <li>
                          <span>Chemistry</span>
                        </li>
                        <li>
                          <span>Science </span>
                        </li>
                        <li>
                          <span>
                            Marine
                            <br /> Science{" "}
                          </span>
                        </li>
                        <li>
                          <span>Physics </span>
                        </li>
                      </ul>
                    </div>
                    <div className="aos-3-teacher-S-2">
                      <span>
                        Mike teaches from secondary school to sixth form.
                      </span>
                    </div>
                  </div>
                </div>
                <div className="aos-3-teacher-bios">
                  <div className="aos-3-teacher-bios-1">
                    {mikeMore === false && (
                      <p>
                        Mike has 5 years experience working at Trinity Academy
                        in Carlisle in the SEN department. He has a masters
                        degree in ...
                      </p>
                    )}
                    {mikeMore === true && (
                      <div>
                        <div className="bios-more">
                          <p>
                            Mike has 5 years experience working at Trinity
                            Academy in Carlisle in the SEN department. He has a
                            masters degree in physics, so he has high skills in
                            physics and maths. Mike is passionate about his
                            subjects and he believes that enjoyment and
                            motivation are key to learning, hence he tries to
                            add variety and fun into his lessons wherever
                            possible.
                          </p>
                        </div>
                        <div className="bios-more">
                          <p>
                            Mike is very familiar with the Edexcel and AQA
                            G.C.S.E. courses, as well as the AQA A-level physics
                            and the AQA and Edexcel A-level maths courses.
                          </p>
                        </div>
                        <div className="bios-more">
                          <p>
                            Mike has taught at 4 different high schools around
                            the country, supporting students in lessons and
                            one-to-one sessions.
                          </p>
                        </div>
                        <div className="bios-more">
                          <p>
                            "My experience has informed me that enjoyment and
                            motivation are key to learning, both adults and
                            children alike need to enjoy what they are doing and
                            feel as if they are achieving".
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                  <div className="aos-3-teacher-bios-2">
                    <p
                      style={{ textDecoration: "underline" }}
                      onClick={() => setMikeMore(!mikeMore)}
                    >
                      {" "}
                      {mikeMore ? "Read less" : "Read more"}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="aos-3-teachers-div">
              <div className="aos-3-teacher">
                <div className="aos-3-teacher-IaS">
                  <div className="aos-3-teacher-NaI">
                    <div className="aos-3-teacher-N">
                      <span>Carla Tenner</span>
                    </div>
                    <div className="aos-3-teacher-I">
                      <img src="/Images/carlaTener.png" />
                    </div>
                  </div>
                  <div className="aos-3-teacher-S">
                    <div className="aos-3-teacher-S-1">
                      <span style={{ textDecoration: "underline" }}>
                        Subjects:
                      </span>
                      <br />
                      <ul style={{ paddingLeft: "20px" }}>
                        <li>
                          <span>English</span>
                        </li>
                        <li>
                          <span>History </span>
                        </li>
                        <li>
                          <span>Geography </span>
                        </li>
                      </ul>
                    </div>
                    <div className="aos-3-teacher-S-2">
                      <span>Carla is available to teach all ages.</span>
                    </div>
                  </div>
                </div>
                <div className="aos-3-teacher-bios">
                  <div className="aos-3-teacher-bios-1">
                    {carlaMore === false && (
                      <p>
                        Carla was born in South Africa and has lived there all
                        her life. She has been involved in teaching since
                        graduating fro...
                      </p>
                    )}
                    {carlaMore === true && (
                      <div>
                        <div className="bios-more">
                          <p>
                            Carla was born in South Africa and has lived there
                            all her life. She has been involved in teaching
                            since graduating from the Nelson Mandela University
                            in 2007 where she obtained a Bachelor majoring in
                            English Language and Literature, Geography, and
                            Psychology. She then went on to receive a Post
                            Graduate Certificate in Education majoring in
                            English as well as the Social Sciences.
                          </p>
                        </div>
                        <div className="bios-more">
                          <p>
                            Carla has taught a variety of subjects. She feels
                            that her greatest strength is her ability to connect
                            with her learners and to create a positive
                            environment where her learners feel supported to
                            learn and grow in their knowledge of the subjects.
                          </p>
                        </div>
                        <div className="bios-more">
                          <p>
                            Carla is an outgoing person who enjoys meeting new
                            people and working with children and young adults.
                            Her teaching philosophy is to not just focus on
                            conveying the necessary subject matter, but to also
                            facilitate and promote her learners developing their
                            critical thinking capabilities.
                          </p>
                        </div>
                        <div className="bios-more">
                          <p>
                            Carla’s love for learning and teaching has brought
                            her to Eureka where she is able to reach people from
                            all over the world through online tutoring and the
                            online school.
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                  <div className="aos-3-teacher-bios-2">
                    <p
                      style={{ textDecoration: "underline" }}
                      onClick={() => setCarlaMore(!carlaMore)}
                    >
                      {" "}
                      {carlaMore ? "Read less" : "Read more"}
                    </p>
                  </div>
                </div>
              </div>
              <div className="aos-3-teacher">
                <div className="aos-3-teacher-IaS">
                  <div className="aos-3-teacher-NaI">
                    <div className="aos-3-teacher-N">
                      <span>Paula Zapata</span>
                    </div>
                    <div className="aos-3-teacher-I">
                      <img src="/Images/PaulaZapata.png" />
                    </div>
                  </div>
                  <div className="aos-3-teacher-S">
                    <div className="aos-3-teacher-S-1">
                      <span style={{ textDecoration: "underline" }}>
                        Subjects:
                      </span>
                      <br />
                      <ul style={{ paddingLeft: "20px" }}>
                        <li>
                          <span>Spanish</span>
                        </li>
                        <li>
                          <span>English </span>
                        </li>
                      </ul>
                    </div>
                    <div className="aos-3-teacher-S-2">
                      <span>
                        Paula teaches from primary through to College.
                      </span>
                    </div>
                  </div>
                </div>
                <div className="aos-3-teacher-bios">
                  <div className="aos-3-teacher-bios-1">
                    {paulaMore === false && (
                      <p>
                        Paula was born in Colombia and emigrated to the United
                        States at a very young age. She graduated from the
                        University of...
                      </p>
                    )}
                    {paulaMore === true && (
                      <div>
                        <div className="bios-more">
                          <p>
                            Paula was born in Colombia and emigrated to the
                            United States at a very young age. She graduated
                            from the University of Houston, receiving a Bachelor
                            of Arts in communications. At university, she also
                            obtained minor degrees in interdisciplinary art and
                            English Language arts.
                          </p>
                        </div>
                        <div className="bios-more">
                          <p>
                            Paula worked as a video editor, content writer, and
                            multimedia artist for a decade. During that time,
                            she began giving private lessons to help others
                            learn video editing. For the past five years, her
                            focus has been in education. In 2019, she earned a
                            120 hour Advanced TESOL (Teaching English to
                            Speakers of Other Languages) certification and began
                            teaching English and Spanish to students both
                            locally and overseas. Having taught students of all
                            ages and fro a variety of backgrounds, her passion
                            has led her to encourage learners of all abilities
                            to discover their full potential.
                          </p>
                        </div>
                        <div className="bios-more">
                          <p>
                            Paula is most passionate about art, languages,
                            literature, and activism. She also enjoys swimming,
                            gardening, watching films, and making art in her
                            spare time.
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                  <div className="aos-3-teacher-bios-2">
                    <p
                      style={{ textDecoration: "underline" }}
                      onClick={() => setPaulaMore(!paulaMore)}
                    >
                      {" "}
                      {paulaMore ? "Read less" : "Read more"}
                    </p>
                  </div>
                </div>
              </div>
              <div className="aos-3-teacher">
                <div className="aos-3-teacher-IaS">
                  <div className="aos-3-teacher-NaI">
                    <div className="aos-3-teacher-N">
                      <span>Jacques Hackart</span>
                    </div>
                    <div className="aos-3-teacher-I">
                      <img src="/Images/jacuqesHart.png" />
                    </div>
                  </div>
                  <div className="aos-3-teacher-S">
                    <div className="aos-3-teacher-S-1">
                      <span style={{ textDecoration: "underline" }}>
                        Subjects:
                      </span>
                      <br />
                      <ul style={{ paddingLeft: "20px" }}>
                        <li>
                          <span>English </span>
                        </li>
                        <li>
                          <span>Maths </span>
                        </li>
                        <li>
                          <span>Science </span>
                        </li>
                      </ul>
                    </div>
                    <div className="aos-3-teacher-S-2">
                      <span>
                        Jacques teaches all ages from primary up to Year 7
                      </span>
                    </div>
                  </div>
                </div>
                <div className="aos-3-teacher-bios">
                  <div className="aos-3-teacher-bios-1">
                    {jacquesMore === false && (
                      <p>
                        Jacques was born in South Africa and has lived there all
                        of his life. He has been involved in teaching since the
                        start of...
                      </p>
                    )}
                    {jacquesMore === true && (
                      <div>
                        <div className="bios-more">
                          <p>
                            Jacques was born in South Africa and has lived there
                            all of his life. He has been involved in teaching
                            since the start of 2007.
                          </p>
                        </div>
                        <div className="bios-more">
                          <p>
                            Jacques graduated from Nelson Mandela University
                            where he obtained a Bachelor majoring in all the
                            subjects including English, Mathematics and the
                            Sciences for primary school (B.Ed (IP)). Since then,
                            Jacques has been involved with many forms of
                            education from the local curriculum of his country,
                            ACE (Accelerated Christian education), to
                            international systems such as IEB.
                          </p>
                        </div>
                        <div className="bios-more">
                          <p>
                            Throughout his years of teaching, Jacques has taught
                            a variety of subjects in-person and also online over
                            many platforms (such as Moodle, Google class and
                            Microsoft Teams). He believes that one of his
                            strengths is to assist his student where they are
                            and will make sure they understand before carrying
                            on as he believes that when it comes to academics,
                            there is a foundation that needs to be established.
                          </p>
                        </div>
                        <div className="bios-more">
                          <p>
                            When he is not teaching, Jacques enjoys time being a
                            musician and enjoys meeting new people and working
                            with adults and children to better themselves.
                          </p>
                        </div>
                        <div className="bios-more">
                          <p>
                            Jacques’ passion is to see his students reach the
                            goals that they have set themselves aspire to be the
                            best that they can be. This passion has brought
                            Jacques to Eureka where he is able to reach people
                            from every corner of the world through remote
                            teaching and tutoring.
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                  <div className="aos-3-teacher-bios-2">
                    <p
                      style={{ textDecoration: "underline" }}
                      onClick={() => setJacquesMore(!jacquesMore)}
                    >
                      {" "}
                      {jacquesMore ? "Read less" : "Read more"}
                    </p>
                  </div>
                </div>
              </div>
              <div className="aos-3-teacher">
                <div className="aos-3-teacher-IaS">
                  <div className="aos-3-teacher-NaI">
                    <div className="aos-3-teacher-N">
                      <span>Julie-Ann R</span>
                    </div>
                    <div className="aos-3-teacher-I">
                      <img src="/Images/julieAnnR.png" />
                    </div>
                  </div>
                  <div className="aos-3-teacher-S">
                    <div className="aos-3-teacher-S-1">
                      <span style={{ textDecoration: "underline" }}>
                        Subjects:
                      </span>
                      <br />
                      <ul style={{ paddingLeft: "20px" }}>
                        <li>
                          <span>Geography </span>
                        </li>
                        <li>
                          <span>History </span>
                        </li>
                        <li>
                          <span>Art </span>
                        </li>
                        <li>
                          <span>Spanish </span>
                        </li>
                      </ul>
                    </div>
                    <div className="aos-3-teacher-S-2">
                      <span>
                        Julie-Ann teaches primary school students in a range of
                        subjects.
                      </span>
                    </div>
                  </div>
                </div>
                <div className="aos-3-teacher-bios">
                  <div className="aos-3-teacher-bios-1">
                    {julieMore === false && (
                      <p>
                        Julie-Ann is a primary teacher who qualified from Durham
                        University with a BA (hons) in Primary education. S...
                      </p>
                    )}
                    {julieMore === true && (
                      <div>
                        <div className="bios-more">
                          <p>
                            Julie-Ann is a primary teacher who qualified from
                            Durham University with a BA (hons) in Primary
                            education. She then went on to study for her PGCE in
                            Education.
                          </p>
                        </div>
                        <div className="bios-more">
                          <p>
                            Upon leaving school, Julie-Ann trained to become a
                            teaching assistant and this is when her love of
                            teaching began.
                          </p>
                        </div>
                        <div className="bios-more">
                          <p>
                            After this, however, she chose a different path and
                            studied general nursing becoming a registered
                            general nurse. From here, Julie-Ann moved into
                            medical sales as a territory manager before deciding
                            to go back to University and follow her passion for
                            teaching.
                          </p>
                        </div>
                        <div className="bios-more">
                          <p>
                            Julie-Ann has gathered wide experience in teaching,
                            both in classrooms and online, and has taught all
                            subjects to all ages of primary children. She has
                            experience of teaching children with additional
                            needs and children with English as their second
                            language and believes that teaching children the joy
                            of learning is a privilege.
                          </p>
                        </div>
                        <div className="bios-more">
                          <p>
                            After living in Spain some years ago, Julie-Ann
                            decided that she wanted to spend half of her time
                            living back in Andalucía, so online teaching was the
                            perfect opportunity to make a move from the
                            classroom.
                          </p>
                        </div>
                        <div className="bios-more">
                          <p>
                            Outside of teaching, Julie-Ann enjoys spending time
                            with her husband and two children and likes to walk
                            her dog, Bella. She also enjoys art, reading, yoga
                            and swimming.
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                  <div className="aos-3-teacher-bios-2">
                    <p
                      style={{ textDecoration: "underline" }}
                      onClick={() => setJulieMore(!julieMore)}
                    >
                      {" "}
                      {julieMore ? "Read less" : "Read more"}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Aboutonlineschool;
