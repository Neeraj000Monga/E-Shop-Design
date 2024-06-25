import { Carousel } from "react-responsive-carousel";
import 'react-responsive-carousel/lib/styles/carousel.min.css';

export const CarouselComponent = () => {

    let slideImageData = [
        {
          image:
            "https://images.unsplash.com/photo-1612852098516-55d01c75769a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=900&q=60'"
        },
        {
          image:
            "https://about.canva.com/wp-content/uploads/sites/8/2019/03/teal.png"
        },
        {
          image:
            "https://images.unsplash.com/photo-1571432248690-7fd6980a1ae2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDl8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=900&q=60"
        },
        {
          image:
            "https://images.unsplash.com/photo-1516796181074-bf453fbfa3e6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDV8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=900&q=60"
        }
      ];


  return (
    <div>
         <Carousel
              showThumbs={false}
              showStatus={false}
              infiniteLoop={true}
              autoPlay={true}
              interval={2000}
              transitionTime={500}
              emulateTouch={true}
              dynamicHeight={true}
              stopOnHover={true}
              swipeable={true}
            >
             {slideImageData.map((slide, index) => (
          <div key={index}>
            <img
              src={slide.image}
              alt={`image ${index}`}
              style={{ borderRadius: "10px", width: "100%", height: "400px" }}
            />
          </div>
        ))}
            </Carousel>
          

    </div>
  )
}
