
import Button from '../../components/Button';
import { useState,useEffect } from 'react';
import Loading from './loading';

// interface CardsProps{
//  cards: EyeDefects[];
// }
export interface  EyeDefects {
    title: string;
    description: string;
    image: string;
}

const EyeDefects=[
  {
    title:'Amblyopia(Lazy Eye)',
    description:'Amblyopia, commonly known as lazy eye, is a condition where one eye doesnt develop normal vision, even with proper glasses or contact lenses often due to abnormal visual development in childhood.',
    image:'ambiypia.jpeg',
  },
  {
    title:'Astigmatism',
    description:'Astigmatism results from an irregularly shaped cornea or lens, causing blurred or distorted vision at all distances.',
    image:'astigmatism.jpeg',
  },
  {
    title:'Myopia(Shortsightedness)',
    description:'Myopia is a common refractive error where distant objects appear blurry while close objects remain clear.',
    image:'myopia.jpeg',
  },
  {
    title:'Presbyopia',
    description:'Presbyopia is a natural, age-related vision condition where the eyes gradually lose the ability to focus on nearby objects.',
    image:'presbyopia.jpeg',
  },
  {
    title:'cataract',
    description:'A cataract is a clouding of the natural lens of the eye, which is normally clear. This clouding can cause blurry or dimmed vision and may make it difficult to see colors clearly or to see at night.',
    image:'Cataracts:.jpeg',
  },
  {
    title:'Glaucoma',
    description:'Glaucoma is a group of eye conditions that damage the optic nerve, which connects the eye to the brain. This damage can lead to vision loss and, if left untreated, blindness.',
    image:'Glaucoma.jpeg',
  },
]



const HomePage: React.FC= () =>{

  const [isloadind, setIsloading] =useState(true);
  const [showCard, setShowCard] = useState(true)

  useEffect(() => { 
    const timer = setTimeout(() => setIsloading(false),4000);
    return () => clearTimeout(timer);

  }, []);
  

  useEffect(()=> {
    setTimeout(()=>{
      setShowCard(false)
    },7000)
  },[])
  return (
    <>
   {isloadind
   ?
   <Loading/>
   :
    <>
     <div className='bg-[url(./public/images/eyeDefect.png)] flex flex-col  bg-cover bg-center  p-80'>
      
     </div>

     <div className='text-center font-bold text-4xl p-10 bg-green-800 text-white '>
      <h1>The most common eye defects</h1>
     </div>
     <div className='bg-green-800  text-center p-10 text-white text-m '>
      <p >Eye defects can arise from many factors, including age-related changes that can lead to a decline in vision. As individuals age, their vision may deteriorate due to eye focal length alterations. One common issue is cataracts, which can result in partial or complete vision loss if left untreated. Cataracts develop when the eye’s crystalline lens becomes milky and cloudy, significantly impairing vision. Fortunately, cataract surgery offers an effective solution for restoring vision in affected individuals.Another prevalent eye problem occurs when the eye loses its ability to adjust its focal length properly. This can manifest as difficulty perceiving images accurately, often resulting in blurred vision or an inability to focus on objects at varying distances. Refractive index abnormalities further compound these issues, making it challenging for individuals to see objects clearly and comfortably. With timely intervention, these conditions can progress to the point where the eyes retain their ability to accommodate changes in focus altogether.
      </p>
     </div>
     
      <div className=' grid grid-cols-3 gap-14 max-lg:grid-cols-none  sm:grid-cols-3 '>
        {EyeDefects.map((items)=>
        showCard?(
            <Loading/>
          ):
        (
          <div className='flex flex-col items-center justify-center bg-white p-10 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 p-top-300'>
          <img className='w-90 h-70 rounded-tl-4xl max-lg:w-180 max-lg:h-100'src={`/images/${items.image}`}
          alt="EyeDefect"/>

          <div>
            <h1 className='mt-3 font-bold mb3'>{items.title}</h1>
            <p className='text-gray'>{items.description}</p>
              <Button className='py-2 px-4 text-white bg-green-600 rounded-xl ' title='Read more'/>
              </div>
        </div>
        
        )
      )}
      
      </div>
      <div className='flex justify-between items-center p-10 bg-green-600 text-white'>
        <div className='font-bold text-3xl '>
          <h1>Brenda<span className='text-green-900'>line's</span></h1>
          <h1>international eye services</h1>
           <img className='align-left' src="./public/images/logo.png" alt="logo" />
           <div>
              <p className='text-xs'>Top eye hospital in Cameroon</p>
           </div>
           <div className='flex gap-6 p-6'>
             <a href="https://web.facebook.com/?locale=fr_FR&_rdc=1&_rdr#"> <img className='align-left' src="./public/images/facebook.png" alt="" /></a>
             <a href="https://www.instagram.com/"> <img className='align-left' src="./public/images/instagram.png" alt="" /></a>
             <a href="https://telegram.org/"><img src="./public/images/telegram.png" alt="" /></a>
           </div>
        </div>
        <div>
          <h1 className='font-bold text-2xl p-3'>TREATMENTS</h1>
          <p>Amblyopia(Lazy Eye)</p>
          <p>Astigmatism</p>
          <p>Myopia(Shortsightedness)</p>
          <p>Presbyopia</p>
          <p>cataract</p>
          <p>Glaucoma</p>
        </div>
        <div >
          <h1 className='font-bold text-2xl p-3'>Quick links</h1>
          <p>Home</p>
          <p>About</p>
          <p>Contact Us</p>
          <p>Products</p>
          <p>Book An Appointment</p>
        </div>
      </div>
      </>
      }
    </>
  )
}

export default HomePage
