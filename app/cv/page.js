"use client"

import styles from "./cv.module.css"
import {
  personalInfo,
  educationInfo,
  skillInfo,
  languagesSpoken,
  workExperience,
} from "@/data/personalInfo"
import { useEffect } from "react"

function page() {
  useEffect(() => {
    console.log("Im Up")
  }, [])
  return (
    <div className={styles.main}>
      <div className={styles.container}>
        <div className={styles.leftSide}>
          <div className={styles.profImg}>
            <div className={styles.imgBox}>
              <img src="./ragnar.PNG"></img>
            </div>
            <h2>
              {personalInfo.fullName}
              <br /> <span>Android/Web Developer</span>
            </h2>
          </div>
          {/*  */}
          {/*  */}
          <div className={styles.contactInfo}>
            <h3 className={styles.title}>Contact Info</h3>
            <ul>
              <li>
                <span className={styles.icon}></span>
                <span className={styles.text}>{personalInfo.phoneNumber}</span>
              </li>
              <li>
                <span className={styles.icon}></span>
                <span className={styles.text}>{personalInfo.email}</span>
              </li>
              <li>
                <span className={styles.icon}></span>
                <span className={styles.text}>
                  {personalInfo.portfolioLink}
                </span>
              </li>
              <li>
                <span className={styles.icon}></span>
                <span className={styles.text}>{personalInfo.linkedIn}</span>
              </li>
              <li>
                <span className={styles.icon}></span>
                <span className={styles.text}>{personalInfo.location}</span>
              </li>
            </ul>
          </div>
          {/*  */}
          {/*  */}
          <div className={styles.education}>
            <h3 className={styles.title}>Education</h3>
            <ul>
              <li>
                <h5>{educationInfo.degree.year}</h5>
                <h4>{educationInfo.degree.course}</h4>
                <h3>{educationInfo.degree.name}</h3>
              </li>
              <li>
                <h5>{educationInfo.certificate.year}</h5>
                <h4>{educationInfo.certificate.course}</h4>
                <h3>{educationInfo.certificate.name}</h3>
              </li>
              <li>
                <h5>{educationInfo.skill1.year}</h5>
                <h4>{educationInfo.skill1.course}</h4>
                <h3>{educationInfo.skill1.name}</h3>
              </li>
              <li>
                <h5>{educationInfo.skill2.year}</h5>
                <h4>{educationInfo.skill2.course}</h4>
                <h3>{educationInfo.skill2.name}</h3>
              </li>
            </ul>
          </div>
          {/*  */}
          {/*  */}
          <div className={styles.languageSpoken}>
            <h3 className={styles.title}>Languages</h3>
            <ul>
              <li>
                <span className={styles.skillText}>
                  {languagesSpoken.english.name}
                </span>
                <span className={styles.skillPercentage}>
                  <div
                    className={styles.percent}
                    style={{
                      width: languagesSpoken.english.level,
                    }}></div>
                </span>
              </li>
              <li>
                <span className={styles.skillText}>
                  {languagesSpoken.swahili.name}
                </span>
                <span className={styles.skillPercentage}>
                  <div
                    className={styles.percent}
                    style={{
                      width: languagesSpoken.swahili.level,
                    }}></div>
                </span>
              </li>
              <li>
                <span className={styles.skillText}>
                  {languagesSpoken.norwegian.name}
                </span>
                <span className={styles.skillPercentage}>
                  <div
                    className={styles.percent}
                    style={{
                      width: languagesSpoken.norwegian.level,
                    }}></div>
                </span>
              </li>
            </ul>
          </div>
          {/*  */}
          {/*  */}
        </div>
        <div className={styles.rightSide}>
          <div className={styles.about}>
            <h2 className={styles.profileTitle}>Profile</h2>
            <p>
              Hello there, my name is James and I'm a passionate blah blah blah
              blah blah blah blah blah blah blah blah blah blah blah blah
              blahlah blah blah blah blah blah blah blah blah blah blah blahlah
              blah blah blah blah blah blah blah blah blah blah blah blah
              blahlah blah blah blah blah blah blah blah blah blah bl blahlah
              <br />
              blah blah blah blah blah blah blah blah blah blah blah blah
              blahlah blah ah blah blah blah blah blah until you're bored of
              reading this crap
            </p>
          </div>
          {/*  */}
          <div className={styles.experience}>
            <h2 className={styles.profileTitle}>Experience</h2>
            <div className={styles.experienceBox}>
              <div className={styles.companyYear}>
                <h5>
                  {workExperience[0].startYear}-{workExperience[0].endYear}
                </h5>
                <h5> {workExperience[0].companyName}</h5>
              </div>
              <div className={styles.aboutWorkExperience}>
                <h4> {workExperience[0].role}</h4>
                <p> {workExperience[0].workInfo}</p>
              </div>
            </div>
            <div className={styles.experienceBox}>
              <div className={styles.companyYear}>
                <h5>
                  {workExperience[1].startYear}-{workExperience[1].endYear}
                </h5>
                <h5> {workExperience[1].companyName}</h5>
              </div>
              <div className={styles.aboutWorkExperience}>
                <h4> {workExperience[1].role}</h4>
                <p> {workExperience[1].workInfo}</p>
              </div>
            </div>
            <div className={styles.experienceBox}>
              <div className={styles.companyYear}>
                <h5>
                  {workExperience[1].startYear}-{workExperience[1].endYear}
                </h5>
                <h5> {workExperience[1].companyName}</h5>
              </div>
              <div className={styles.aboutWorkExperience}>
                <h4> {workExperience[1].role}</h4>
                <p> {workExperience[1].workInfo}</p>
              </div>
            </div>
            <div className={styles.experienceBox}>
              <div className={styles.companyYear}>
                <h5>
                  {workExperience[1].startYear}-{workExperience[1].endYear}
                </h5>
                <h5> {workExperience[1].companyName}</h5>
              </div>
              <div className={styles.aboutWorkExperience}>
                <h4> {workExperience[1].role}</h4>
                <p> {workExperience[1].workInfo}</p>
              </div>
            </div>
          </div>
          {/*  */}
          <div className={styles.professionalSkills}>
            <h2 className={styles.skillsTitle}>Professional Skills</h2>
            <div className={styles.skills}>
              <ul>
                <li>
                  <span className={styles.skillText}>
                    {skillInfo.android.language1.name}
                  </span>
                  <span className={styles.skillPercentage}>
                    <div
                      className={styles.percent}
                      style={{
                        width: skillInfo.android.language1.skillLevel,
                      }}></div>
                  </span>
                </li>
                <li>
                  <span className={styles.skillText}>
                    {skillInfo.android.language2.name}
                  </span>
                  <span className={styles.skillPercentage}>
                    <div
                      className={styles.percent}
                      style={{
                        width: skillInfo.android.language2.skillLevel,
                      }}></div>
                  </span>
                </li>
                <li>
                  <span className={styles.skillText}>
                    {skillInfo.web.language2.name}
                  </span>
                  <span className={styles.skillPercentage}>
                    <div
                      className={styles.percent}
                      style={{
                        width: skillInfo.web.language2.skillLevel,
                      }}></div>
                  </span>
                </li>
                <li>
                  <span className={styles.skillText}>
                    {skillInfo.android.language3.name}
                  </span>
                  <span className={styles.skillPercentage}>
                    <div
                      className={styles.percent}
                      style={{
                        width: skillInfo.android.language3.skillLevel,
                      }}></div>
                  </span>
                </li>
                <li>
                  <span className={styles.skillText}>
                    {skillInfo.web.language1.name}
                  </span>
                  <span className={styles.skillPercentage}>
                    <div
                      className={styles.percent}
                      style={{
                        width: skillInfo.web.language1.skillLevel,
                      }}></div>
                  </span>
                </li>
              </ul>
            </div>
          </div>
          {/*  */}
          <div className={styles.professionalSkills}>
            <h2 className={styles.skillsTitle}>Intrests</h2>
            <div className={styles.intrestsBox}>
              <div className={styles.intrestItem}>
                🏠 <span>Gaming</span>
              </div>
              <div className={styles.intrestItem}>
                🏠 <span>Gaming</span>
              </div>
              <div className={styles.intrestItem}>
                🏠 <span>Gaming</span>
              </div>
              <div className={styles.intrestItem}>
                🏠 <span>Gaming</span>
              </div>
            </div>
          </div>
          {/*  */}
        </div>
      </div>
    </div>
  )
}

export default page
