import React, { useState } from 'react';

function App() {
    const [isContactExpanded, setIsContactExpanded] = useState(false);

    const toggleContact = () => {
        setIsContactExpanded(!isContactExpanded);
    };

  return (
    <div className="container">
      <h1>Welcome to Double Chamber Private Label Tea</h1>
      <p>
        At Double Chamber Private Label Tea, we specialize in crafting high-quality double chamber tea bags for private label brands. We are passionate about delivering an exceptional tea experience, sourcing only the finest leaves from the world’s best tea gardens. Every step of our process, from blending to packaging, is done with precision and care to ensure your brand stands out with premium quality products.
      </p>

      <h2>Our Services</h2>
      <ul>
        <li><b>Premium Tea Sourcing</b><br/>
          We partner with trusted tea estates to source only the best leaves, ensuring a superior taste with every cup.</li>
        <li><b>Custom Blending</b><br/>
          Our experts work with you to create unique blends that match your brand’s profile, whether you’re seeking traditional flavors or innovative new offerings.</li>
        <li><b>Double Chamber Tea Bag Production</b><br/>
          We specialize in the production of double chamber tea bags, designed for optimal brewing and flavor release.</li>
        <li><b>Private Label Packaging</b><br/>
          Our flexible private label packaging options allow you to create a distinctive product that aligns perfectly with your brand identity.</li>
         <li><b>Flexible Order Quantities</b><br/>
          Whether you need a small batch or large-scale production, we offer flexible order sizes to suit your needs.</li>
      </ul>

      <h2>Why Choose Us?</h2>
      <ul>
        <li><b>Uncompromising Quality</b><br/>
          Our commitment to excellence ensures that every tea bag is crafted to the highest standard. From leaf to final product, quality is at the heart of everything we do.</li>
        <li><b>Experienced Team</b><br/>
          With years of experience in the tea industry, our team is dedicated to helping you bring your vision to life—offering guidance, expertise, and personalized service.</li>
        <li><b>State-of-the-Art Facilities</b><br/>
          We use cutting-edge technology and industry-leading practices to produce tea bags that retain the fresh, full flavor of the leaves.</li>
        <li><b>Collaborative Partnership</b><br/>
          We work closely with our clients to ensure that every tea product represents their brand’s values and meets their customers’ expectations.</li>
      </ul>

        <div className={`contact-info ${isContactExpanded ? 'expanded' : ''}`} onClick={toggleContact}>
            <h2>Contact Us</h2>
            {isContactExpanded && (
                <>
                    <p>
                        <b>Factory Location:</b> 123 Tea Lane, Teaville
                    </p>
                    <p>
                        <b>Email:</b> <a href="mailto:info@exampletea.com">info@exampletea.com</a>
                    </p>
                    <p>
                        <b>Phone:</b> +1-800-TEA-TIME
                    </p>
                </>
            )}
            {!isContactExpanded && (
                <p>Click to expand contact info</p>
            )}
        </div>
    </div>
  );
}

export default App;
