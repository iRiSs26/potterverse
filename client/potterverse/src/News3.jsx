import { useState } from 'react';
import logo from './assets/th1.jpg'
import logo1 from './assets/patronus.jpg'
import { NavLink } from 'react-router-dom';
import './News3.css'
import logo2 from './assets/snapepat.jpg'
function News3() {
    const [count, setCount] = useState(0)
   
return (
       <>


<div className="header">
      <div className="left-side">Potter</div>
      <div className="center-logo">
        
         <img src={logo} alt="Logo" style={{ width: '90px', height: 'auto',borderRadius:'15px' }} />
      </div>
      <div className="right-side">Verse</div>
     </div> 
        <div className="navigation-bar">

        <NavLink to="/quiz">Quiz</NavLink>
                <NavLink to="/about">Character Quotient</NavLink>
                <NavLink to="/news">News</NavLink>
                <NavLink to="/fic">FicFathom</NavLink>
                <NavLink to="#">Chamber of Chat</NavLink>
                <NavLink to="/latest">Patronus</NavLink>

</div>

<div className="image-wrapper">
<div className="patronus-text">
   <h1>What is a Patronus?</h1>
   <p>We bring you our handy guide to</p><p>everybody’s favourite defensive charm.</p>
<NavLink to='#' className="btn">Read More...</NavLink></div>

                <img src={logo1} className="patronus-image" />
                
            </div>


            <div className="image-with-text">
               <h1>Who can cast the Patronus charm?</h1><p>
The Patronus is a form of advanced magic which even the most qualified wizards can struggle with. Harry Potter was one of the youngest wizards to cast a corporeal Patronus, having been taught by Professor Lupin at the tender age of 13.</p>
<h1>And, erm, what exactly is a Patronus?</h1><p>
As Professor Lupin told Harry in Prisoner of Azkaban, the Patronus is ‘a kind of Anti-Dementor – a guardian which acts as a shield between you and the Dementor.’ It’s also ‘a kind of positive force, a projection of the very things that the Dementor feeds upon – hope, happiness, the desire to survive – but it cannot feel despair, as real humans can, so the Dementors can’t hurt it.’

The Patronus has two forms, non-corporeal and corporeal. A non-corporeal Patronus can appear as ‘a thin wisp of silver’ that hovers ‘like mist’. Whereas a corporeal Patronus has a form that is clearly defined and is more than vapour or smoke.

The ability to cast a corporeal or non-corporeal Patronus is down to the skill of the witch or wizard. Each Patronus is unique to the witch or wizard who conjures it, and it’s possible, in some cases, for a Patronus to change.</p>


                <img src={logo2} alt="Description of the image" />
                <div className="text-around-image">
                <h1>The witches and wizards who can cast this spell.</h1>
<p>Here are the witches and wizards who accomplished it, with some significant Patronus moments from across the stories.</p>

<p>Harry Potter – Stag</p>

<p>Harry flung himself out from behind the bush and pulled out his wand.</p><p>
‘EXPECTO PATRONUM!’ he yelled.
And out of the end of his wand burst, not a shapeless cloud of mist, but a blinding, dazzling, silver animal. He screwed up his eyes, trying to see what it was. It looked like a horse.</p><p>
Harry Potter and the Prisoner of Azkaban</p>

<p>Harry’s Patronus took the same shape as his father’s. He saw it for the first time during a Dementor attack with Hermione and Sirius at the Great Lake, and at first glance it looked like a horse. Coincidentally, the Patronus of Harry’s future wife, Ginny, was a horse.</p>



<p>James Potter – Stag</p>
<p>
James Potter’s Patronus was the same form as his Animagus.</p>

<p>Lily Potter – Doe</p><p>
The female form of her husband’s Patronus. We later learn that Severus Snape, in love with Lily for nearly his whole life, also had a doe for his Patronus.</p>

<p>Albus Dumbledore – Phoenix</p>

<p>‘Should I go and get someone?’ said Harry. ‘Madam Pomfrey?’
‘No,’ said Dumbledore swiftly. ‘Stay here.’
He raised his wand into the air and pointed it in the direction of Hagrid’s cabin. Harry saw something silvery dart out of it and streak away through the trees like a ghostly bird.</p><p>
Harry Potter and the Goblet of Fire</p>

<p>Dumbledore’s Patronus was a phoenix, which was revealed to us when he wanted to summon Hagrid after Viktor Krum was Stunned. It can be no surprise that Dumbledore had an affinity with this particular creature, given that his own animal companion was an enigmatic and loyal phoenix, Fawkes.</p>

<p>Remus Lupin – Wolf</p>
<p>Remus Lupin often disguised his Patronus so as not to reveal the fact that he was a werewolf.</p>

<p>Nymphadora Tonks – Wolf</p>

<p>‘Tonks’s Patronus has changed its form,’ he told him. ‘Snape said so, anyway. I didn’t know that could happen. Why would your Patronus change?’
Lupin took his time chewing his turkey and swallowing before saying slowly, ‘Sometimes … a great shock … an emotional upheaval …’
‘It looked big, and it had four legs,’ said Harry, struck by a sudden thought and lowering his voice. ‘Hey … it couldn’t be –?’</p><p>
Harry Potter and the Half-Blood </p><p>

Yes, Harry, it could. Tonks’s Patronus changed into a wolf after she fell in love with Lupin, a sure sign of true love if ever there was one.</p>

<p>Minerva McGonagall – Cat</p>

<p>‘Come. We must alert the other Heads of House. You’d better put that Cloak back on.’
She marched towards the door, and as she did so she raised her wand. From the tip burst three silver cats with spectacle markings around their eyes. The Patronuses ran sleekly ahead, filling the spiral staircase with silvery lights, as Professor McGonagall, Harry and Luna hurried back down.</p><p>
Harry Potter and the Deathly Hallows</p>

<p>Well of course Professor McGonagall could cast a Patronus. It being a spell of advanced magic, and she being Professor Minerva McGonagall, she could also cast three at once. Here, McGonagall used her Patronuses for communication – to alert the Heads of House that Hogwarts would soon be under attack from Voldemort, before the Battle of Hogwarts began.</p>

<p>Severus Snape – Doe</p>

<p>‘For him?’ shouted Snape. ‘Expecto patronum!’
From the tip of his wand burst the silver doe: she landed on the office floor, bounded once across the office and soared out of the window. Dumbledore watched her fly away, and as her silvery glow faded he turned back to Snape, and his eyes were full of tears.
‘After all this time?’
‘Always,’ said Snape.</p><p>
Harry Potter and the Deathly Hallows.</p>

<p>It still gets us after all this time. We also see Snape’s Patronus when it guides Harry to Godric Gryffindor’s sword in Harry Potter and the Deathly Hallows.</p>


<p>Dolores Umbridge – Cat</p>
<p>From one of our very favourite professors to our very least: Dolores Umbridge’s Patronus was also a cat, just like the ones on those tasteless decorative plates she hung from her walls.</p>

<p>Aberforth Dumbledore – Goat</p>
<p>Meanwhile, Aberforth’s Patronus was a goat, which he summoned outside the Hog’s Head in an attempt to trick the Death Eaters that they’d seen a goat, rather than Harry’s stag.</p>

<p>Kingsley Shacklebolt – Lynx</p>

<p>Graceful and gleaming, the lynx landed lightly in the middle of the astonished dancers. Heads turned, as those nearest it froze, absurdly, in mid-dance. Then the Patronus’s mouth opened wide and it spoke in the loud, deep, slow voice of Kingsley Shacklebolt.</p><p>
‘The Ministry has fallen. Scrimgeour is dead. They are coming.’</p><p>
Harry Potter and the Deathly Hallows</p>

<p>An example of a member of the Order of the Phoenix using their Patronus as a communication device, Shacklebolt’s lynx landed on the dancefloor at Bill and Fleur's wedding.</p>
<h2>Lastly, how is a Patronus conjured?</h2>
<p>With the incantation ‘EXPECTO PATRONUM.’ We don’t mean to shout, but really you have to say it like you mean it. Off you go now, it’s time for you to discover yours.</p>

                </div>
            </div>



<footer className='footer'>
            <div className='containerf'>
                <div className='row'>
                    <div className='footer-col'>
                        <h4>About us</h4>
                        <ul>
                            <li><NavLink to='#'>Our Services</NavLink></li>
                            <li><NavLink to='#'>Privacy Policy</NavLink></li>
                        </ul>
                    </div>
                    <div className='footer-col'>
                        <h4>Get Help</h4>
                        <ul>
                            <li><NavLink to='#'>FAQ</NavLink></li>
                            <li><NavLink to='#'>Know More</NavLink></li>
                        </ul>
                    </div>
                    <div className='footer-col'>
                        <h4>Contact Us</h4>
                        <ul>
                            <li><NavLink to='#'>Instagram</NavLink></li>
                            <li><NavLink to='#'>Telegram</NavLink></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
</>

)
}
export default News3;