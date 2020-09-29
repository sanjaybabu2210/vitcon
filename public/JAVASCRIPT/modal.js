const openModalButtons = document.querySelectorAll('[data-modal-target]')

const closeModalButtons = document.querySelectorAll('[data-close-button]')
const overlay = document.getElementById('overlay')

const faculty = document.getElementById('facultyOpen')
const question = document.getElementById('qbOpen')
const resell = document.getElementById('resellOpen')
const lab = document.getElementById('labOpen')
const qb2 = document.getElementById('qb2Open')
const cab = document.getElementById('cabOpen')
const bod = document.getElementById('modBody')
const modTitle = document.getElementById('modTitle')

const modBtn = document.getElementById('modLink')
const socModBtn = document.getElementById('modLinkSoc')

const socTitle = document.getElementById('socTitle')
const inst = document.getElementById('socI')
const face = document.getElementById('socF')
const lIN = document.getElementById('socL')
const tele = document.getElementById('socT')
const you = document.getElementById('socY')
const what = document.getElementById('socW')
const spoty = document.getElementById('socSpot')
const Discord = document.getElementById('socDiscord')
const socBody = document.getElementById('socBody')

const conTitle = document.getElementById('conTitle')
const conBody = document.getElementById('conBody')
const sponsor = document.getElementById('Sponsorship')
const onlyCont =document.getElementById('onlyContact')
const socBtnInner = document.getElementById('modButtonSoc')





document.getElementById('mainFaculty').href = "/faculty"

document.getElementById('mainQuestion').href= "/adPost/resources"

// document.getElementById('mainResell').href= "/adPost"

// document.getElementById('mainLab').href= "/lab"

// document.getElementById('mainCab').href= "/share"

document.getElementById('mainHostel').href= "/hostels"

faculty.onclick = ()=>
    {
        bod.innerHTML="VIT is home to tens of thousands of students and thousands of faculty members who teach a whole wide range of courses, and it’s an absolute mayhem when it’s time for the finger-crossing and luck-dependent FFCS which lets you choose your courses and their respective faculty members. The hardest fear of students is ending in an important course with a dreaded unprofessional faculty member. How do you know who the best teacher could really be? VITrendz has your answer. We bring you the various reviews and ratings of various faculty members of the university written and posted by older students of those faculties, to get you the right teacher for your course. Make use of this facility to make your semester go better."
    
        modTitle.innerHTML = "Faculty Rating"
    modBtn.href = "/faculty"
    
    }

question.onclick = ()=>{
        bod.innerHTML="Every student of VIT has fears. The most common fear among all the students of every branch in VIT is exam phobia. As the name suggests, fear of exams. CATs and FAT form the integral scoring weight of almost all courses availed by any student.Prepare some strategies to score well in your tests.Check out the difficulty level of the questions asked previously. VITRENDZ heard your prayers. To boost up your preparations we bring you the exquisite and much needed previous question papers of CATS and FAT for more than 200 different courses. Just enter you course details on the VITRENDZ web page and there you go your key to crack your exams. Let your fears drive away with a boost of confidence from the previous year question papers. GOOD LUCK!"
        modTitle.innerHTML = "Question Bank"
    modBtn.href = "/adPost/resources"
    }

resell.onclick = ()=>
    {
        bod.innerHTML="Thinking of what to do with old books, lab coats, etc.? U have landed at correct place. <br> We cover all your wishes of buying or selling your items among your college mates only .Yes u have read it right you don't even have to step out of the campus. <br>VITRENDZ brings you an exclusive section &#39;BUY AND SELL&#39; for you. So ,what are you waiting for post your ad today or look up for the first item which u wanna buy !!"
        modTitle.innerHTML = "Buy and Resell"
    modBtn.href = "/adPost"
    }
lab.onclick = ()=>
    {
        bod.innerHTML="Annoyed with loads of assignments one week before CATs? <br><br> Vitrendz is at your rescue.<br><br>Enter your subject, slot and faculty names to get reference lab assignments. Yes, it's that easy, just click, click and click. Lab assignments are just 3 clicks away. Don't hesitate to inform us if you have any queries or don't find the attachment you need. So, what are you waiting for??!!! Avail yourselves of this spectacular opportunity, verify and clarify all and any doubts you have. Avoid mistakes, increase accuracy and get higher grades within less time !"
        modTitle.innerHTML = "Lab Records"
    modBtn.href = "/lab"
    }
qb2.onclick = ()=>
    {
        bod.innerHTML="Planning to take room this semester with your CGPA?<br><br>VIT MH ROOM PREDICTOR 2020, helps u predict the probability of your desired block based on your CGPA. Just put your branch, year, block, and  CGPA your probability for the desired room will be displayed within a click"
        modTitle.innerHTML = "Hostel Predictor"
    modBtn.href = "/hostels"
    }
cab.onclick = ()=>
    {
        bod.innerHTML="Tired of paying 250 rupees to the auto annas? You have come to the right place!<br><br>Enter your source, destination, date of travel and language of preference to find a list of people you can potentially share a cab with. Yes, it's that simple!!! Don't forget to leave your contact details in, so that people can find you as well. So, what are you waiting for?! Avail yourselves of this amazing facility presented to you by VITRENDZ!"
        modTitle.innerHTML = "Share A Cab"
    modBtn.href = "/share"
    }

inst.onclick = () =>
{
    socBody.innerHTML="<div class='socModTexts'><br>We all know how stressful and tensed a VITian’s life can be. From the strenuous Digital Assignments to the finish of the Final exams on steroids, time flies in the blink of an eye while students remain under the pump. And so, to work up your stomach and face muscles and release your endorphins, we here at VITrendz bring you entertainment through memes, JVTs, verses, puns, and a lot more which you may not have seen ever before.<br>Catch some amazing content, our tedious work towards the betterment of our students, and our coming up projects only on our Instagram page to make your life at VIT much easier and memorable.</div>"
    socTitle.innerHTML = "VITrendz Instagram"
    socModBtn.href = "https://www.instagram.com/vitrendz/?hl=en"
    socBtnInner.innerHTML = "Open Instagram"

}

face.onclick = () =>
{
    socBody.innerHTML="<div class='socModTexts'><br>Updates about the various projects and programs by VITrendz in one place .Make sure to drop like to get notified and join our Facebook groups to follow up on things happening on this platform in VIT.</div>"
    socTitle.innerHTML = "VITrendz Facebook"
    socModBtn.href = "https://www.facebook.com/pages/category/Social-Club/VITrendz-110405110659537/"
    socBtnInner.innerHTML = "Open Facebook"
}


lIN.onclick = () =>
{
    socBody.innerHTML="<div class='socModTexts'><br>A LinkedIn company page helps you network and prospect for quality sales leads, but it also establishes your public image on a global scale as a reputable and trustworthy organization.<br>To encourage and motivate students we keep sharing placement stories so that they can build connections and get inspired by their beloved seniors.</div>"
    socTitle.innerHTML = "VITrendz LinkedIn"
    socModBtn.href = "https://www.linkedin.com/company/vitrendz/"
    socBtnInner.innerHTML = "Open LinkedIn"
}

tele.onclick = () =>
{
    socBody.innerHTML="<div class='socModTexts'><br>Spam free discussion is hard to get in college like VIT. Join our telegram groups to get a total spam controlled discussion o the mention groups. Do check out, the information with the link. These groups are easier ways to meet and make new friends, not miss out on important information, and not be alone in achieving success.</div>"
    socTitle.innerHTML = "VITrendz Telegram"
    socModBtn.href = "https://docs.google.com/spreadsheets/d/e/2PACX-1vRXzLtndANurS0p9MC-9NCARPip0KGSBQOUiFsFgxmfTVNkAPZmI0iTs5LMPIBk0LMRXO_qI_IgwqKG/pubhtml"
    socBtnInner.innerHTML = "Join Now"

}


you.onclick = () =>
{
    socBody.innerHTML="<div class='socModTexts'><br>Video can a thousand words in one second, ranging from general information to technical video we at VITrendz channel promote the importance and use of multimedia through our youtube channel.<br>Make sure to subscribe to our channel to get tuned with all trending technical knowledge and see all the rising talents in our college.</div><br><br><div class='modBtnYou'><a href='underConstruction.html' style='text-decoration:none!important' target='_self'><button type='button' class='btn btn-success modButSocYou'>Open here</button></a></div> "
    socTitle.innerHTML = "VITrendz Youtube"
    socModBtn.href = "https://www.youtube.com/channel/UCmAwtdi2YTCA_ifMlx0yIDA/"
    socBtnInner.innerHTML = "Open Youtube"

}


what.onclick = () =>
{
    socBody.innerHTML="<div class='socModTexts'><br>The Beginnings of new semesters are tough. New peers, new faculty, new subject, and a whole new journey to begin diving deeper into the unexpected unknown. It is hard to go alone into the unknown without confirmation and support. Want to have better confidence by learning from others? Want to make things easier for you and others? We here at VITrendz, hear you. Check out this excel sheet where we create WhatsApp groups for different courses in different slots taken by different faculty members and students from VIT.<br><br>Do also check out Whatsapp groups made by VITrendz instep to encourage interaction among students. Do follow us on instagram for access to whatsapp community</div>"
    socTitle.innerHTML = "VITrendz WhatsApp"
    socModBtn.href = "https://t.ly/tQgn"

}


Discord.onclick = () =>
{
    socBody.innerHTML="<div class='socModTexts'><br>Wanna make new friends? Get to know your batch mates and people in college? Missing out the opportunity to meet know people as a fresher? <br><br>Join our discord server now and make new friends! Play games together like among US, know each other well. So you don't miss out your 1 year of friendship mark next year.<br><br>Join our discord servers now</div>"
    socTitle.innerHTML = "VITrendz Discord"
    socModBtn.href = "https://discord.gg/jAVrYvn"

}

spoty.onclick = () =>
{
    socBody.innerHTML="<div class='socModTexts'><br>Wondered about the thinkings and story involved behind successful placements?<br><br>Come across the stories of the placement of your beloved seniors. Learn the most you can and appreciate each one's journey. Do not forget to follow us to get notifications about  further episodes</div>"
    socTitle.innerHTML = "VITrendz Spotify"
    socModBtn.href = "https://open.spotify.com/show/3TbsDplb4EUczRLAg07ByL"

}

onlyCont.onclick = ()=>{
        conBody.innerHTML="<br><div class='blueModal'>Have Technical Issues? <br>Finding it difficult to traverse through the website, or <br>Did you find a bug?</div><br><div class='pinkModal'>Email : <br><a href='mailto:help@vitrendz.tech'>help@vitrendz.tech</a><br></div><br><br><div class='blueModal'> Wanna Collaborate? </div><br> <div class='pinkModal'>Email : <br><a href = 'mailto:collaboration@vitrendz.tech'>collaboration@vitrendz.tech</a><br><br><a href='mailto:rakshnahari@gmail.com'>rishiVandhanaa@vitrendz.tech</a> <br>&#40; Chief Marketing Officer - Rishi Vandhanaa &#41;<br><p style='font-size:10px;color:white'>Please click to mail</p></div>"
        conTitle.innerHTML = "<i class='far fa-handshake'></i> Contact Us"
    }

sponsor.onclick = ()=>{
        conBody.innerHTML="<br><div class='blueModal'>Sponsor Us to promote your product / brand among the huge population of VITians '('students in VIT')' and also to help us accomplish our vision and goals.</div><br><br><div class='pinkModal'>Email : <br><a href='mailto:sponsorsjip@vitrendz.tech'>sponsorship@vitrendz.tech</a><br><br>Contact: </div><div class='lightblue'><br><a href='mailto:shwetanshu2000@gmail.com'>shwetanshuShekhar@vitrendz.tech</a> <br>&#40; Chief Finance Officer - Shwetanshu Shekhar &#41;<br><p style='font-size:10px;color:white'>Please click to mail</p></div><br>"
        conTitle.innerHTML = "<i class='fas fa-hand-holding-usd'></i> Sponsor Us"
    }




openModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = document.querySelector(button.dataset.modalTarget)
    openModal(modal)
  })
})

overlay.addEventListener('click', () => {
  const modals = document.querySelectorAll('.modal.active')
  modals.forEach(modal => {
    closeModal(modal)
  })
})

closeModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = button.closest('.modal')
    closeModal(modal)
  })
})

function openModal(modal) {
  if (modal == null) return
  modal.classList.add('active')
  overlay.classList.add('active')
}

function closeModal(modal) {
  if (modal == null) return
  modal.classList.remove('active')
  overlay.classList.remove('active')
}





