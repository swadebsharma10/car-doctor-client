import person from '../../../assets/images/about_us/person.jpg'
import parts from '../../../assets/images/about_us/parts.jpg'

const About = () => {
  return (
    <>
      <div className="hero  min-h-[600px] mb-12">
        <div className="hero-content flex-col lg:flex-row">
          <div className='lg:w-1/2 relative'>
          <img
            src={person}
            className="w-3/4 rounded-lg shadow-2xl"
          />
          <img src={parts} className='w-1/2 absolute right-5 top-1/2 rounded-lg  border-8' alt="" />
          </div>
          <div className='lg:w-1/2'>
            <h1 className="text-2xl text-orange-500 font-bold mb-8">About Us</h1>
            <h1 className="text-5xl  font-bold">We are qualified & of experience in this field</h1>
            <p className="py-6">
            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. 
            </p>
            <p className="pb-6">
            the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.  
            </p>
            <button className="btn btn-secondary btn-outline">Get More Info</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
