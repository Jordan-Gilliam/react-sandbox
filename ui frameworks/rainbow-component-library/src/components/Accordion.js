const { FontAwesomeIcon } = require("@fortawesome/react-fontawesome");
const { faUser, faUsers, faCog } = require("@fortawesome/free-solid-svg-icons");

<div className="rainbow-m-around_xx-large">
  <Card>
    <Accordion>
      <AccordionSection
        icon={<FontAwesomeIcon icon={faCog} className="rainbow-color_brand" />}
        label="General Settings"
      >
        A rainbow is a meteorological phenomenon that is caused by reflection,
        refraction and dispersion of light in water droplets resulting in a
        spectrum of light appearing in the sky.
      </AccordionSection>
      <AccordionSection
        icon={
          <FontAwesomeIcon icon={faUsers} className="rainbow-color_brand" />
        }
        label="Users"
      >
        A rainbow is a meteorological phenomenon that is caused by reflection,
        refraction and dispersion of light in water droplets resulting in a
        spectrum of light appearing in the sky.
      </AccordionSection>
      <AccordionSection
        icon={<FontAwesomeIcon icon={faUser} className="rainbow-color_brand" />}
        label="Personal data"
      >
        A rainbow is a meteorological phenomenon that is caused by reflection,
        refraction and dispersion of light in water droplets resulting in a
        spectrum of light appearing in the sky.
      </AccordionSection>
    </Accordion>
  </Card>
</div>;
