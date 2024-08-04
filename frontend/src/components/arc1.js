import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
 import './courseoutline.css';
import axios from 'axios';

function Arc1() {
  const nav = useNavigate();
  const [value, setValue] = useState(0);

  const Dashboard = () => {
    alert("you completed python 10% continue to get more");
    nav('/dashboard');
  };
  const Next = () => {
    nav('/arc2');
  };
  const Chat = () => {
    nav('/chat');
  };

  return (
    <div className="body">
      <header>
        <div className="header-left">
          <h1>Gr8Learn</h1>
        </div>
        <div className="header-right">
          <button type="button" className="login-btn" onClick={Dashboard}>
            Dashboard
          </button>
          <button className="contact-btn" onClick={Chat}>Chat</button>
        </div>
      </header>
      <div className="main">
        <p>Architecture is the art and technique of designing and building, as distinguished from the skills associated with construction.<br/> It is both the process and the product of sketching, conceiving, planning, designing, and constructing buildings or other structures. The term comes from Latin architectura; from Ancient Greek ἀρχιτέκτων (arkhitéktōn) 'architect'; from ἀρχι- (arkhi-) 'chief', and τέκτων (téktōn) 'creator'. Architectural works, in the material form of buildings, are often perceived as cultural symbols and as works of art. Historical civilisations are often identified with their surviving architectural achievements.
<br/>
The practice, which began in the prehistoric era, has been used as a way of expressing culture by civilizations on all seven continents. <br/>For this reason, architecture is considered to be a form of art. Texts on architecture have been written since ancient times. The earliest surviving text on architectural theories is the 1st century AD treatise De architectura by the Roman architect Vitruvius, according to whom a good building embodies firmitas, utilitas, and venustas (durability, utility, and beauty). Centuries later, Leon Battista Alberti developed his ideas further, seeing beauty as an objective quality of buildings to be found in their proportions. In the 19th century, Louis Sullivan declared that "form follows function". "Function" began to replace the classical "utility" and was understood to include not only practical but also aesthetic, psychological, and cultural dimensions. The idea of sustainable architecture was introduced in the late 20th century.
<br/>
Architecture began as rural, oral vernacular architecture that developed from trial and error to successful replication. <br/>Ancient urban architecture was preoccupied with building religious structures and buildings symbolizing the political power of rulers until Greek and Roman architecture shifted focus to civic virtues. Indian and Chinese architecture influenced forms all over Asia and Buddhist architecture in particular took diverse local flavors. During the Middle Ages, pan-European styles of Romanesque and Gothic cathedrals and abbeys emerged while the Renaissance favored Classical forms implemented by architects known by name. Later, the roles of architects and engineers became separated.
<br/>
Modern architecture began after World War I as an avant-garde movement that sought to develop a completely new style appropriate for a new post<br/>-war social and economic order focused on meeting the needs of the middle and working classes. Emphasis was put on modern techniques, materials, and simplified geometric forms, paving the way for high-rise superstructures. Many architects became disillusioned with modernism which they perceived as ahistorical and anti-aesthetic, and postmodern and contemporary architecture developed. Over the years, the field of architectural construction has branched out to include everything from ship design to interior decorating.</p>    </div>
      <footer>
        <div >
          <button type="button" className="footer-right" onClick={Next}>
            Next
          </button>
        </div>
      </footer>
    </div>
  );
}

export default Arc1;