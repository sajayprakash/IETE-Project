import Footer from "./Footer";
import Navbar from "./Navbar";

export default function Membership() {
  return (
    <>
      <Navbar />
      <div className="text-center font-bold mt-10">
        <h1 className="md:text-5xl md:pb-8">WHY JOIN US?</h1>
        <p className="m-10">
          IETE STUDENT FORUM ARRANGES FREQUENT MEETINGS OF STUDENT MEMBERS
          TOGETHER WITH EXPERTS / ACADEMIC / R & D / INDUSTRY LEADERS AS WELL AS
          IETE CENTRE'S EXECUTIVE COMMITTEE MEMBERS. PROGRAMMERS OF COMMON
          INTEREST MAY ALSO BE ARRANGED INVOLVING STUDENTS FORUM AT MANY
          INSTITUTIONS IN A CITY, REGION ETC. STUDENTS AFTER COMPLETEING THEIR
          DEGREES WILL BECOME PROUD CORPORATE MEMBERS OF IETE AND CAN WRITE
          AFTER THEIR NAME BE. AMIETE, WITH LESS FEES (DEDUCTING THE FEE PAID
          FOR THE FORUM).
        </p>
      </div>

      <div className="text-center text-white font-bold md:m-20 m-4 bg-purple-gradient rounded-lg">
        <h2 className="md:text-4xl text-3xl pb-4 pt-4">MEMBERSHIP</h2>
        <p className="p-6">
          THE IETE MEMBERSHIP IS AVAILABLE AT DIFFERENT LEVELS BASED ON THE
          APPLICANTS' ACADEMIC QUALIFICATIONS AND PRACTICAL EXPERIENCE IN
          ELECTRONICS, TELECOMMUNICATIONS, COMPUTERS, INFORMATION TECHNOLOGY AND
          RELATED AREAS. APPLICANTS ARE INVITED TO SEEK THE HIGHEST MEMBERSHIP
          GRADE THEY ARE QUALIFIED FOR. THE MEMBERSHIP CATEGORIES ARE:
        </p>
      </div>

      <div className="md:flex md:justify-between md:m-20 md:mx-96 m-4">
        <div className="text-center font-bold bg-gray-300 max-w-sm rounded-lg mb-4 hover:shadow-lg">
          <h1 className="md:text-2xl pt-4">Corporate Members</h1>
          <ol className="p-4 md:py-28 text-left md:text-xl list-decimal list-inside">
            <li>Honorary Fellow (HF) (Elected)</li>
            <li>Distinguished Fellow (DF) (Elected)</li>
            <li>Fellow (F)</li>
            <li>Member (M)</li>
            <li>Associate Member(AM)</li>
          </ol>
        </div>
        <div className="text-center font-bold bg-gray-300 max-w-sm rounded-lg mb-4 hover:shadow-lg">
          <h1 className="md:text-2xl pt-4">Non Corporate Members</h1>
          <ol className="p-4 md:py-28 text-left md:text-xl list-decimal list-inside">
            <li>Honorary Fellow (HF) (Elected)</li>
            <li>Distinguished Fellow (DF) (Elected)</li>
            <li>Fellow (F)</li>
            <li>Member (M)</li>
            <li>Associate Member(AM)</li>
          </ol>
        </div>
      </div>

      <div className="text-white font-bold md:m-20 m-4 bg-purple-gradient rounded-lg">
        <h2 className="md:text-4xl text-2xl p-4">
          Click on the link to access the forms:
        </h2>
        <ol className="p-4 md:text-2xl list-decimal list-inside text-gray-300">
          <li>
            <a href="">Corporate Member</a>
          </li>
          <li>
            <a href="">Charted Engineer</a>
          </li>
          <li>
            <a href="">Organisational Member</a>
          </li>
          <li>
            <a href="">AMIETE</a>
          </li>
          <li>
            <a href="">DIPIETE</a>
          </li>
        </ol>
      </div>
      <Footer />
    </>
  );
}
