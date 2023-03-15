import React from "react";
import "../../Styles/about/section2.css";
import signpost from "../../assets/images/about/Group.png";
import shield from "../../assets/images/about/Group (1).png";
import gem from "../../assets/images/about/Group (2).png";
import people from "../../assets/images/about/Group (3).png";
import diagonal from "../../assets/images/about/gallery.png.png";

const Section2 = () => {
  return (
    <div className="container">
      <div className=" section2 d-sm-flex justify-content-around gap-3">
        <div className="container-sm aboutus text-start ps-5 pt-5 pe-4">
          <h3>About Us</h3>
          <p className="">
            Lorem ipsum dolor sit amet consectetur. Id ac non lorem lacus eget
            nisl ut posuere. Lacus at id volutpat nec. Amet volutpat sem blandit
            ipsum cum. Fringilla ac ultricies ac tortor et at. Ac at ac viverra
            viverra nulla justo pharetra non in. Sodales convallis mauris
            ultricies condimentum pretium rhoncus sit ut. Quis nulla pharetra
            ultrices urna feugiat. Viverra enim in duis eget venenatis facilisi.
            Sit tempor in amet ornare. Arcu congue quam et adipiscing et laoreet
            euismod. Facilisis dolor gravida eu massa facilisis dignissim
            consectetur. At integer at purus fermentum aliquam dictum duis
            tempus nunc. Laoreet elit consequat bibendum est id a aliquet
            viverra. Cras nibh et amet risus. Egestas mauris lectus purus lectus
            imperdiet arcu eu egestas sit. Mollis hac et orci turpis aliquam
            praesent in diam. Ac egestas mauris purus ullamcorper nec ac.
            Molestie quis purus quam quam cursus. Amet purus ut semper id non
            sed. Arcu blandit dignissim enim nam sem placerat. Amet eget non
            morbi lacus nisl egestas aliquet vestibulum vel. Tortor aliquam
            volutpat ut purus nulla enim et. Aliquet sed eget faucibus amet
            senectus. Platea elit tempor donec lobortis ipsum quam cursus. Eget
            nam malesuada risus libero augue porta nec feugiat lectus. Nisl
            nascetur et convallis nibh ut sem integer donec. Et sed habitasse
            scelerisque id amet. Nisi aliquam non maecenas interdum nunc
            ultricies. Aliquam vitae mi massa sed fermentum eget orci tincidunt.
            Nibh est neque at feugiat sed diam montes diam. Risus convallis cras
            duis pellentesque ac risus quisque feugiat pellentesque. Quisque et
            ullamcorper massa in pellentesque a in pretium. Elementum pretium
            integer ipsum id id magna cras pulvinar sed. Cras nec aliquet tellus
            eget. Eget convallis vestibulum tellus nunc. Cras hendrerit viverra
            eleifend tellus sagittis enim tellus. In eget posuere nibh vivamus
            diam lacus. Viverra mauris iaculis maecenas nunc libero faucibus
            bibendum lobortis.
          </p>
        </div>
        <div className="values p-5 container-sm">
          <h3 className="pb-4">Our Values</h3>
          <div>
            <div className="d-flex justify-content-start align-items-center">
              <img src={signpost} alt="" />
              <h5>Simplicity</h5>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur. Sagittis mattis vel
              aliquam auctor varius neque suspendisse. Dignissim ligula leo sed
              varius enim eget nibh mattis. Dolor elementum aliquet sit purus
              vitae id justo libero. Nulla varius.
            </p>
          </div>
          <div>
          <div className="d-flex justify-content-start align-items-center">
              <img src={shield} alt="" />
              <h5>Boldness</h5>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur. Sagittis mattis vel
              aliquam auctor varius neque suspendisse. Dignissim ligula leo sed
              varius enim eget nibh mattis. Dolor elementum aliquet sit purus
              vitae id justo libero. Nulla varius.
            </p>
          </div>
          <div>
          <div className="d-flex justify-content-start align-items-center">
              <img src={gem} alt="" />
              <h5>Innovation</h5>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur. Sagittis mattis vel
              aliquam auctor varius neque suspendisse. Dignissim ligula leo sed
              varius enim eget nibh mattis. Dolor elementum aliquet sit purus
              vitae id justo libero. Nulla varius.
            </p>
          </div>
          <div>
          <div className="d-flex justify-content-start align-items-center">
              <img src={people} alt="" />
              <h5>Thoughtfulness</h5>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur. Sagittis mattis vel
              aliquam auctor varius neque suspendisse. Dignissim ligula leo sed
              varius enim eget nibh mattis. Dolor elementum aliquet sit purus
              vitae id justo libero. Nulla varius.
            </p>
          </div>
        </div>
      </div>
      <div>
        <img className="img-fluid" src={diagonal} alt="" />
      </div>
    </div>
  );
};

export default Section2;
