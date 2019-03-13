import React, { useState } from 'react';
import styled from 'styled-components';
import { Grommet, Layer, Box, Button, Text, Heading, ResponsiveContext} from 'grommet';
import { Close, Menu } from 'grommet-icons';

const FixedButton = styled(Button)`
  position: fixed;
  top: 5vh;
  left: 10px;
`;

export default () => {

  const [menu, setMenu] = useState(false)

  return (
    <Grommet full>
      <ResponsiveContext.Consumer>
      { size => (
        <Box animation="fadeIn">
          { menu ? (
            <Layer full="vertical" position="left" margin="10px"
              onClickOutside={() => setMenu(false)} onEsc={() => setMenu(false)}
            > 
              <Box direction="row">
                <Heading level={3}>Layer here: size = {size}</Heading>
                <Button icon={<Close />} onClick={() => setMenu(false)} />
              </Box>
              
            </Layer>
          ) : (
            <Box animation="slideRight" >
              <FixedButton icon={<Menu />} primary color="accent-4" onClick={() => setMenu(true)} />
            </Box>
          )}
          <Box align="center" flex pad="medium" overflow={{ horizontal: "hidden" }} background="light-2" >
            <Heading>Some Title</Heading>
            <Text>Lorem ipsum dolor amet crucifix tbh vexillologist lumbersexual cray 90's. Biodiesel occupy bicycle rights raw denim. Typewriter you probably haven't heard of them gentrify fam. Cold-pressed kitsch ugh, mumblecore biodiesel locavore gluten-free tattooed sustainable cornhole bitters PBR&B stumptown drinking vinegar.
    
      Man braid schlitz drinking vinegar umami, farm-to-table synth readymade locavore craft beer messenger bag tumblr copper mug. Chicharrones jean shorts franzen shabby chic kinfolk twee. Roof party hot chicken literally, selfies retro fixie fam tumeric ennui. Forage snackwave green juice woke schlitz hella keffiyeh ramps brooklyn unicorn venmo cloud bread food truck. Ramps quinoa sartorial taxidermy, meh stumptown kinfolk tilde yuccie XOXO glossier banh mi.
    
      Woke flannel jianbing live-edge mixtape. Marfa small batch put a bird on it, try-hard bushwick echo park vinyl cloud bread 90's. Gochujang fanny pack schlitz hammock ennui locavore sartorial activated charcoal brunch. Vaporware neutra pour-over pickled, fashion axe palo santo tousled bitters meh portland helvetica. Forage organic heirloom PBR&B fanny pack pabst glossier listicle vape. Banh mi butcher truffaut, listicle lumbersexual four loko vinyl swag locavore photo booth narwhal food truck cliche.
    
      Raclette fanny pack chillwave, kickstarter put a bird on it occupy schlitz helvetica. Normcore williamsburg kickstarter brunch pickled YOLO next level meggings cronut synth tumblr flexitarian. Viral cliche paleo swag locavore shaman scenester affogato bespoke stumptown yr prism hammock organic semiotics. Lomo farm-to-table disrupt pabst bicycle rights quinoa bespoke lumbersexual asymmetrical pok pok hexagon viral iceland chia dreamcatcher. YOLO austin franzen wolf jianbing pickled man bun. Kickstarter gentrify sustainable typewriter. Selvage disrupt irony, pinterest seitan deep v crucifix intelligentsia wolf banjo woke banh mi pour-over VHS iceland.
    
      Street art cold-pressed keffiyeh, chia cardigan lo-fi live-edge craft beer bespoke la croix drinking vinegar. Shabby chic snackwave small batch quinoa lyft air plant trust fund cloud bread yuccie. Keffiyeh gluten-free adaptogen, swag meh poke pork belly lo-fi before they sold out skateboard bushwick distillery. Raw denim tilde deep v, jianbing chambray trust fund schlitz post-ironic butcher air plant. Viral butcher echo park sartorial green juice.
    
      Art party godard hashtag, crucifix swag cray narwhal semiotics +1 before they sold out blog XOXO edison bulb fixie tilde. Portland seitan brunch authentic YOLO knausgaard. Hoodie art party readymade photo booth bespoke, normcore typewriter venmo four dollar toast kitsch sriracha locavore selvage beard cold-pressed. Skateboard photo booth flexitarian distillery chambray keytar blue bottle kombucha ramps fam tofu hell of hella seitan craft beer. Four dollar toast celiac microdosing, prism palo santo mustache poke occupy PBR&B jean shorts. Letterpress butcher vaporware flannel organic craft beer intelligentsia paleo.
    
      You probably haven't heard of them waistcoat fashion axe meh gastropub ennui. Photo booth enamel pin fingerstache roof party edison bulb kombucha typewriter. Occupy gentrify craft beer, tacos fingerstache chambray meh la croix readymade deep v typewriter sriracha. Snackwave keytar taiyaki venmo chia raclette humblebrag ennui chambray art party cardigan.
    
      Selvage enamel pin semiotics, deep v knausgaard narwhal brooklyn heirloom lumbersexual cold-pressed. Kinfolk dreamcatcher health goth, keytar knausgaard tilde artisan bicycle rights hashtag iceland pok pok asymmetrical franzen yuccie microdosing. Single-origin coffee lyft godard, edison bulb direct trade twee beard. Jianbing cloud bread VHS pork belly. Selfies polaroid vinyl hella, coloring book offal YOLO single-origin coffee salvia blue bottle. Cliche small batch messenger bag brooklyn kickstarter literally.
    
      Direct trade cray seitan hammock crucifix flexitarian. Humblebrag raw denim gluten-free, flexitarian cliche pinterest whatever paleo lyft kinfolk stumptown master cleanse umami. Meggings seitan direct trade enamel pin normcore small batch paleo authentic gastropub. Chillwave tacos photo booth paleo seitan subway tile enamel pin next level.
    
      Taxidermy biodiesel freegan, stumptown snackwave gentrify mumblecore shabby chic bitters hella enamel pin fixie shoreditch. Pop-up gluten-free hoodie sartorial, single-origin coffee biodiesel XOXO activated charcoal thundercats mustache vexillologist VHS wayfarers affogato ethical. Freegan fingerstache flexitarian kinfolk. Meggings man bun yr, man braid unicorn tousled austin waistcoat dreamcatcher bicycle rights tofu authentic iceland food truck. Kitsch shaman bicycle rights, church-key green juice deep v distillery PBR&B. Marfa paleo DIY kinfolk banh mi brunch, la croix biodiesel brooklyn PBR&B vape slow-carb. Chambray sriracha blog kombucha stumptown normcore distillery health goth gentrify air plant mlkshk chartreuse master cleanse.</Text>
          </Box>
        </Box>
      )}
      </ResponsiveContext.Consumer>
    </Grommet>
  )
}