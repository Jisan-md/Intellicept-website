import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  modalData: any = null;
  isModalOpen = false;
  teamData = {
    modalOne: {
      name: 'Anurag Varshney',
      title: 'PRESIDENT / CHIEF ARCHITECT',
      image: '/assets/Anurag-8e15fb04.jpg',
      linkedin: 'https://www.linkedin.com/in/varshneyanurag/',
      description: `Anurag is an accomplished IT & SAP Executive and expert in SAP S/4 HANA Retail & CAR with 
                    proven experience in Retail, Fashion, CPG and Life Sciences with 23+ years of achievement 
                    in leveraging technology to drive retailer’s growth, performance, profitability, transforming, 
                    harmonizing and optimizing key processes across banners (brands) of organization driving to 
                    achieve operational efficiencies and scalability. He is a change agent, capable of orchestrating 
                    transformative & over-arching business strategy through information technology and SAP centric 
                    programs. Highly adaptive to organizational culture to bring inside out change in the desired areas 
                    of organization through IT. Anurag lives in New Jersey with his wife and two kids, Avani & Aryaman. 
                    He enjoys doing daily yoga and during free time enjoys reading business articles, playing badminton, 
                    table tennis, biking and watching TV.`
    },
    modalTwo: {
      name: 'Mayank Gupta',
      title: 'Lead Designer',
      image: '/assets/Mayank-fcee8f90.jpg',
      linkedin: 'https://www.linkedin.com/in/mayank-gupta-500171128/',
      description: `Mayank is an experienced and certified SAP professional with a demonstrated history of working 
                    in the apparel, fashion and retail industry. He is strong professional with a Master of Science (BS) 
                    degree focused in Computer Science and engineering from Widener University Chester PA. He has over 
                    14+ years of experience in the IT industry including multiple SAP FMS and Retail implementations. 
                    He is pretty experienced in aligning IT strategy to business vision and designing end to end solution 
                    based on Architecture Standards. He played several global roles as a Supply Chain IT Solutions Architect/Team 
                    lead/Business Systems Analyst. He demonstrated ability to lead cross-functional/geographical teams; managed 
                    multiple projects simultaneously and delivered creative solutions.`
    },
    modalThree: {
      name: 'Gaurav Mishra',
      title: 'Managing Director',
      image: '/assets/gaurav.jpg',
      linkedin: 'https://www.linkedin.com/in/gaurav-mishra-924a6a9/',
      description: `High-energy, results driven client services and strategic business development professional with 
                    18 years of successful global information technology solutions and services senior sales leadership. 
                    Accomplished hunter with strong entrepreneurial business acumen with the ability to design and execute 
                    a wide range of sales and marketing strategies to establish market presence and increase revenue and 
                    profitability. Proven track record of high-dollar value contract closure across multiple market sectors. 
                    Successfully lead business pursuit and solution delivery teams in the U.S., India and Asia driving entire 
                    sales cycles, solution delivery strategies and project governance for big data, analytics, enterprise 
                    software solutions, software systems engineering, integration, interoperability, global application 
                    lifecycle management and business process outsourcing contract engagements.`
    }
  };

  openModal(modalId: 'modalOne' | 'modalTwo' | 'modalThree') {
    console.log(modalId);
    this.modalData = this.teamData[modalId];
    this.isModalOpen = true;
  }

  closeModal() {
    this.modalData = null;
    this.isModalOpen = false;
  }
}