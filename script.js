// ===== DATA =====
const trainingGuides = [
  {
    title: "Puppy Basics",
    desc: "House training, crate training, and socialization essentials for a confident start.",
    content: `
      <h2>Puppy Basics Guide</h2>
      <div style="height:20px;"></div>

      <h3>House Training</h3>
      <p>Set a consistent routine for potty breaks. Reward immediately after success. Avoid punishment.</p>

      <h3>Crate Training</h3>
      <p>Introduce gradually. The crate should be a safe, comfortable space.</p>

      <h3>Socialization</h3>
      <p>Expose your puppy safely to other dogs, people, sounds, and environments.</p>

      <h3>Bite Inhibition</h3>
      <p>Teach gentle play using toys, not hands. Stop play if puppy bites too hard.</p>

      <h3>Leash Familiarity</h3>
      <p>Practice short, positive leash sessions to get your puppy comfortable.</p>
    `
  },
  {
    title: "Leash Manners",
    desc: "Step-by-step guide for walking calmly without pulling or lunging.",
    content: `
      <h2>Leash Manners Guide</h2>

      <h3>Loose-Leash Walking</h3>
      <p>Encourage your dog to walk beside you with a relaxed leash. <strong>Example:</strong> Stop walking when the leash tightens, resume only when it’s slack. Reward calm walking with a treat.</p>
      
      <h3>Changing Direction</h3>
      <p>If your dog pulls ahead, gently change direction. <strong>Example:</strong> Turn around and walk the opposite way to redirect attention to you.</p>
      
      <h3>Impulse Control at Distractions</h3>
      <p>Practice “watch me” or “leave it” commands when distractions appear. <strong>Example:</strong> When a squirrel runs by, get your dog to look at you and reward for focus.</p>
      
      <h3>Short, Frequent Practice</h3>
      <p>Train in short sessions multiple times a day. <strong>Example:</strong> 5–10 minute walks several times daily reinforce calm leash behavior more effectively than one long walk.</p>
      
      <h3>Positive Reinforcement</h3>
      <p>Use treats, praise, and toys to reward correct leash behavior. <strong>Example:</strong> Treat your dog every time they walk beside you without pulling.</p>

      <h3>Choosing the Right Equipment</h3>
      <p>Harnesses or head halters give better control without harming your dog. <strong>Example:</strong> Use a front-clip harness to reduce pulling safely.</p>

      <p>Consistency, patience, and short, positive sessions make leash manners stick. Each walk is an opportunity to practice and reinforce good behavior.</p>
    `
  },
  {
    title: "Behavior Fixes",
    desc: "Practical solutions for barking, chewing, and jumping.",
    content: `
      <h2>Behavior Fixes Guide</h2>

      <h3>Over-Excitement & Jumping</h3>
      <p>Some dogs jump out of excitement or to greet people. Teach a calm greeting: have them sit when someone approaches and reward with praise or treats.</p>

      <h3>Resource Guarding or Possessiveness</h3>
      <p>If your dog growls or snaps around toys or food, trade items for higher-value rewards. Gradually increase access while rewarding relaxed behavior.</p>

      <h3>Unwanted Barking</h3>
      <p>Barking is often communication. Observe triggers and redirect with tasks like fetch or puzzle toys. Reward quiet behavior instead of punishing noise.</p>

      <h3>Pulling on Leash</h3>
      <p>Use “stop and wait” or “change direction” techniques. Reward attention to your pace for enjoyable walks.</p>

      <h3>Chewing or Destructive Habits</h3>
      <p>Offer appropriate chew toys and rotate them. Reward choosing toys over furniture or shoes.</p>

      <h3>Fear or Shyness</h3>
      <p>Gradually expose dogs to new situations paired with treats and praise. Small successes build confidence and reduce stress-related reactions.</p>

      <p>Consistency, observation, and positive reinforcement create lasting behavior changes.</p>
    `
  },
  {
    title: "Reassurance & Confidence",
    desc: "Learn techniques to calm and reassure your dog during training, helping them feel safe and confident.",
    content: `
      <h2>Reassurance & Confidence Guide</h2>

      <h3>Positive Reinforcement</h3>
      <p>Reward calm, confident behavior with treats, praise, or play to reinforce reassurance.</p>

      <h3>Comfort & Safety</h3>
      <p>Create a safe environment during training. Avoid loud corrections and provide gentle guidance.</p>

      <h3>Gradual Exposure</h3>
      <p>Introduce new experiences slowly, allowing your dog to approach at their own pace.</p>

      <h3>Calm Handling</h3>
      <p>Use a soft voice, relaxed body language, and reassuring touch to reduce stress.</p>
    `
  },
  {
    title: "Impulse Control",
    desc: "Teach your dog patience and control in situations with distractions or excitement triggers.",
    content: `
      <h2>Impulse Control Guide</h2>

      <h3>Wait at Doors</h3>
      <p>Teach your dog to pause before entering or exiting doors to prevent rushing or jumping.</p>

      <h3>Leave It Command</h3>
      <p>Practice leaving items alone on cue. Reward with treats when your dog obeys.</p>

      <h3>Impulse Exercises</h3>
      <p>Use games like “stay” or “wait for treat” to strengthen self-control.</p>
    `
  },
  {
    title: "Advanced Commands",
    desc: "Step up training with advanced obedience skills and practical commands for everyday life.",
    content: `
      <h2>Advanced Commands Guide</h2>

      <h3>Recall</h3>
      <p>Practice reliable recall with distractions. Reward your dog when they come promptly.</p>

      <h3>Off-Leash Control</h3>
      <p>Train in safe environments to maintain obedience without a leash.</p>

      <h3>Complex Commands</h3>
      <p>Chain commands together (sit → down → wait) for mental stimulation.</p>
    `
  },
  {
    title: "Alone Time",
    desc: "Help your dog feel comfortable when alone, reducing anxiety and promoting independence.",
    content: `
      <h2>Alone Time Guide</h2>

      <h3>Short Absences</h3>
      <p>Start with short departures and gradually increase the time your dog is alone.</p>

      <h3>Safe Space</h3>
      <p>Create a comfortable area with toys and water where your dog feels secure.</p>

      <h3>Positive Association</h3>
      <p>Use treats or toys when leaving to make alone time enjoyable.</p>
    `
  },
  {
    title: "Socialization & Enrichment",
    desc: "Introduce new experiences and mental challenges for a well-rounded, confident dog.",
    content: `
      <h2>Socialization & Enrichment Guide</h2>

      <h3>New Experiences</h3>
      <p>Introduce your dog safely to new people, dogs, sounds, and environments to build confidence and adaptability.</p>

      <h3>Mental Stimulation</h3>
      <p>Use puzzle toys, scent games, and problem-solving activities to keep your dog's mind active and engaged.</p>

      <h3>Play & Exploration</h3>
      <p>Encourage safe play and exploration outdoors or indoors to reinforce learning and social skills.</p>
    `
  },
  {
    title: "Confidence Building Challenges",
    desc: "Structured challenges and problem-solving activities to boost your dog's self-assurance.",
    content: `
      <h2>Confidence Building Challenges Guide</h2>

      <h3>Obstacle Courses</h3>
      <p>Create simple indoor or outdoor obstacle courses to encourage problem-solving and boost confidence.</p>

      <h3>Problem-Solving Games</h3>
      <p>Hide treats or toys for your dog to find. Encourage independent thinking and reward small successes.</p>

      <h3>Challenge-Based Rewards</h3>
      <p>Use gradual challenges, rewarding perseverance and calm problem-solving to build self-assurance.</p>
    `
  }
];
  
  const trainingMessage = "<strong>Tip:</strong> Consistency and positive reinforcement are the keys to long-term success.";

  const products = [
  // ===== Training Tools & Accessories =====
  { title: "Training Clicker", link: "https://www.amazon.com/Pet-Training-Clicker-Wrist-Strap/dp/B07F6FTTM7/ref=sr_1_5?crid=1ONDEA0S77TAN&dib=eyJ2IjoiMSJ9.JScunlJ9XKPRxD9qmssWe7Odpw6QgOwzn9yT_ULWn1ZzzgH0i7U1ZTVd4A4uHTH8V8DM1Zx4BqhztUwilkUVV1HGC1_MHKYPDTDoJE6XrrRZZPNBDemcrAUGQEgmA3UGI3XgAa3mTBbmTW_1LdEOJ6XdFHFMe_prZaZmHMhD8kFSoM1OM-lKUZM1gyZfJ4sEFFXaV7r0IdcYBGRZWYihqisQ4ZesHUTN_epbBRGkTzGTzOwaKuhBxdDvoBX2yDFHBy31zQl0w8LRofcjOEVjVRkIbN2W3jY0mhJdO8etF6I._ZINcR2vafzeuNvwp6wYkJmJ8btIQT46Zu8SrU0wTlM&dib_tag=se&keywords=dog+clicker&qid=1756937688&sprefix=dog+clicker%2Caps%2C103&sr=8-5", sub: "tools" },
  { title: "Treat Pouch", link: "https://www.amazon.com/RoyalCare-Silicone-Training-Portable-Magnetic/dp/B07C4V2GG3/ref=sxin_17_pa_sp_search_thematic_sspa?content-id=amzn1.sym.5a2f80d8-3686-499a-bbaa-70664bd0de70%3Aamzn1.sym.5a2f80d8-3686-499a-bbaa-70664bd0de70&cv_ct_cx=Dog+Training+pouch&keywords=Dog+Training+pouch&pd_rd_i=B07C4V2GG3&pd_rd_r=9d6cc732-fb08-438b-be35-ee0038228144&pd_rd_w=L0JUj&pd_rd_wg=tKYeV&pf_rd_p=5a2f80d8-3686-499a-bbaa-70664bd0de70&pf_rd_r=2YFZENARA3C66TV9J882&qid=1756937870&s=pet-supplies&sbo=RZvfv%2F%2FHxDF%2BO5021pAnSA%3D%3D&sr=1-4-6024b2a3-78e4-4fed-8fed-e1613be3bcce-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9zZWFyY2hfdGhlbWF0aWM&psc=1", sub: "tools" },
  { title: "Pet Potty Training Tray", link: "https://www.amazon.com/Smart-Paws-X20-47-Training-Bulldog/dp/B094F6WCTN/ref=sr_1_4?crid=1COBHTAVQ7HKP&dib=eyJ2IjoiMSJ9.1cblJWnVypZDGwG3u6ZC1AVYDKC73jMfpRobC9vF48DB0KhAIiMOOJpxssywYh4o7NJiNIV9u-6Gm_8k3KGKHadVCZTWXsyfkRhYrn-2cwmQaF8gL2LIAGnE8gDAs8A7r0p7rZ6abpSEkxTDF8w7AVdmyzkGLPaCgelDISeO0ymESFjpRUtq-WzUmF0qWWQHAxX53KZfADR7G2vW2n0TCSAAfPy2fhyLaHqNysk-5isgHaMvs0fQXTpnVnVIu8nKuUtVOE0tYnUKcRB0pR3dXcFOEUKOSE1PZWt2LW0Iris.cMtDl8syLuYswZV4GpEZaIfQ7BYe1PUnR3itekN7j3c&dib_tag=se&keywords=smart%2Bpaws%2Bcorgi%2Bpotty&qid=1756484618&s=pet-supplies&sprefix=smart%2Bpaws%2Bcorgi%2Bpotty%2Cpets%2C83&sr=1-4&th=1", sub: "tools" },
  { title: "Dog Playpen for Indoor, Yard, RV Camping, 40 inch 8 Panels for Medium and Large Dogs, Black│Patented", link: "https://www.amazon.com/FXW-Rollick-Playpen-Designed-Camping/dp/B0B9SPTBQ2/ref=sr_1_27?crid=M2FYFKLHCUY0&dib=eyJ2IjoiMSJ9.g93_8TseOzFq6XjmgAoaGoq-sZMbRbLO9IeriUL8fXnOuAiXSFeRRTmYpMDnGY80cs3YlUWqMmtvOcFAfIFo8orNs6vz9RKJeXOX8K63Yvatdig5heuzLnRM6_vg6YiTF5uv3EpJMo-ioMekaCiJnZ4dTxHp8e4XW0zRImh7qJYDFwIwNg0AL7qTYTrMG5ofCx5MtyZwWjiH-6gZOefEUI3KBBWfc6Nk2N9G2kk9iysVJy-RFP_aOW8aAjyytTgpN-hmga0NY0KRJ7jo57ScAIlhaEHMCgZ88DFYtm7wgKY.V9wcKuNAk4g-PFJ_Ce3xpqHUXZdycdZUV42uFX05S-w&dib_tag=se&keywords=playpen&qid=1756484333&s=pet-supplies&sprefix=playpen%2Cpets%2C92&sr=1-27&th=1", sub: "tools" },
  { title: "MidWest Homes for Pets 36-Inch iCrate", link: "https://www.amazon.com/MidWest-Folding-Protecting-Leak-Proof-Intermediate/dp/B000OXAES6/ref=sr_1_6?crid=1PB635J8DSL3Y&dib=eyJ2IjoiMSJ9.XFj96YzvvB02me1rP4409bMQnVjwY9U1PJlInlpRxAL1F3_lwV469xRMLarYQ_3_0y2zzIzszyKf_vqmHuXMUsHTGgnIvoKftYZcVrU3xQQjXN_i-c46CXmRmPLtq_teo5GpB6RZ-Vs93cCRlp9zXwLqOlOjR2ZV2UhvvqgzQ46S4pT1Yn0rlAVmsxy2hUKt_YC0tFjF8YByfU4V-3nJ5vhj-nYyP1iS_AczHp9-l80t20MWXs9DcHSHVzzHg-9ehkG9bvR5plpV-0IFpk8uJ14sTnTmfxlC7ZdQ.YivhtJwHr0AZu9NNjCpI6p9DYwXqEj0ZWhlsa3n9edU&dib_tag=se&keywords=midwest%2Bdog%2Bcrates&qid=1756938209&sprefix=midwest%2Caps%2C133&sr=8-6&th=1", sub: "tools" },
  { title: "Gunner Dog Kennel", link: "https://gunner.com/", sub: "tools" },

  // ===== Enrichment Toys & Feeders =====
  { title: "Outward Hound Lickin’ Layers Puzzle Feeder", link: "https://www.petco.com/shop/en/petcostore/product/outward-hound-lickin-layers-interactive-puzzle-game-and-slow-feeder-bowl-for-dogs", sub: "toys" },
  { title: "Dog Brick Treat Puzzle Enrichment Toy, Level 2", link: "https://a.co/d/2eERMrB", sub: "toys" },
  { title: "Food Dispenser Toy", link: "https://a.co/d/8DdP9Lp", sub: "toys" },
  { title: "Heartbeat Puppy for Dogs", link: "https://a.co/d/gzIpVZk", sub: "toys" },

  // ===== Wellness & Miscellaneous =====
  { title: "Dog Blow Dryer", link: "https://www.amazon.com/petaboo-Blow-Dryer-All-One/dp/B0D1VDNVLS", sub: "wellness" },
  { title: "Booster Bath Elevated Pet Bathing, Teal, Large", link: "https://www.amazon.com/Booster-Bath-Elevated-Bathing-Large/dp/B005THTCYE/ref=sr_1_4?crid=2XWWQFLGU5NXZ&dib=eyJ2IjoiMSJ9.I2ePErr2Akvkf0Vyj7ihp0ibHP34cHbeIxpcptIE1s6SZ-tQkTLNYjw3BVm50NCDWEir-SBpUXQaJTdSkDVXBMDLK_FZ6WvwmkEmYKslDQidnyHNLrKR7UvNsCa06zRuZsE8FlFfCUegjdQZteBCoFwvLKjnnqZJb9gZ92GA6NF8Q51G37JEh0IGoNoX25mcqANOoqQzcAZDvdTLNhtowiP2VM0oRXPF0BO4JaYQKKERLDEmnhTuDs25ndhHkOPHOm0SGUIZlTWqsOFRTcTlqJu1ttnvTcCKxdFlzHqehiY.WhrWZvZIoeA8D_3TVJok1SETrnhQ2JFQ1UR9xy0kqKg", sub: "wellness" },
  { title: "Pet Honesty Multivitamin 10-in-1", link: "https://www.chewy.com/pethonesty-multivitamin-10-in-1/dp/966830?utm_source=google-product&utm_medium=cpc&utm_campaign=20648416049&utm_content=&gad_source=1&gad_campaignid=20648417993&gbraid=0AAAAADmQ2V0MrjwiPPhreoeqI2EDaoT_N&gclid=Cj0KCQjwzt_FBhCEARIsAJGFWVk3rIEUHJBqkNBirsoqfwfvw1KzqqLzawojbo-Nec6HkJf-7lw2v94aAm4DEALw_wcB", sub: "wellness" },
  { title: "Virbac MOVOFLEX", link: "https://www.chewy.com/virbac-movoflex-advanced-soft-chews/dp/1091542", sub: "wellness" }
];

const productsMessage = "<strong>DISCLAIMER:</strong> We are not affiliated with any of the sellers listed. These products are professionally recommended based on our training experience and can be purchased from multiple retailers. We do not guarantee results and recommend consulting your veterinarian before using any supplements or introducing new training tools.";

  const videos = [
    { title: "Truck Desensitization", embed: "https://www.youtube.com/embed/GCATSyKcKBg" },
    { title: "Rain & Thunder Desensitization", embed: "https://www.youtube.com/embed/82AKMTNblp8" }
  ];

  const healthSafety = [
  {
    title: "Dog First Aid",
    content: `
    <p><strong>DISCLAIMER:</strong> This Dog First Aid guide is for educational purposes only. It is not a substitute for professional veterinary care. Always consult a licensed veterinarian regarding your dog’s health, especially in emergencies.</p>
    
      <h3>Minor Cuts & Scrapes</h3>
      <p>Clean wound with mild soap and warm water. Apply antiseptic and bandage if needed. Monitor for infection (redness, swelling, discharge).</p>
      
      <h3>Burns</h3>
      <p>Rinse with cool water for 10–15 minutes. Apply sterile, non-stick bandage. Do <strong>not</strong> use butter or oils.</p>
      
      <h3>Choking</h3>
      <p>Check mouth for visible obstruction. Perform dog Heimlich maneuver if needed. Seek emergency vet immediately.</p>
      
      <h3>Heatstroke</h3>
      <p>Move dog to cool, shaded area. Offer small amounts of water. Wet with cool (not ice) water and monitor breathing.</p>
      
      <h3>Poisoning / Toxins</h3>
      <p>Remove access to toxin. Call ASPCA Poison Control: 1-888-426-4435. Contact vet immediately.</p>
      
      <h3>CPR</h3>
      <p>Lay dog on right side. Compress chest (small 100–120/min, medium/large 80–100/min). Give rescue breaths if trained. Continue until help arrives.</p>
      
      <h3>Emergency Supplies to Keep</h3>
      <p>Bandages, antiseptic wipes, tweezers, scissors, muzzle, digital thermometer, emergency contact sheet (vet, nearest 24/7 clinic).</p>
    `
  },
  {
    title: "Emergency Vets",
    content: `
      <p><strong>DISCLAIMER:</strong> The following emergency veterinary clinics are listed for informational purposes only. We are not affiliated with, endorsed by, or responsible for any of these providers. Services, availability, and contact information may change—please verify directly with each clinic before visiting.</p>
      
      <h3>24/7 Emergency Animal Hospitals</h3>
      <ul>
        <li>VCA Knowles Central Animal Hospital – 1000 NW 27th Ave, Miami, FL 33125 – Phone: (305) 649-1234</li>
        <li>VCA Knowles Snapper Creek Animal Hospital – 9933 Sunset Dr, Miami, FL 33173 – Phone: (305) 279-2323</li>
        <li>Veterinary Emergency Group – Miami – 2707 Biscayne Blvd, Miami, FL 33137 – Phone: (786) 206-8811</li>
        <li>Animal Emergency Clinic South – 8429 SW 132nd St, Miami, FL 33156 – Phone: (305) 251-2096</li>
        <li>Miami Emergency & Critical Care Center – 8601 SW 72nd St, Miami, FL 33143 – Phone: (305) 630-3880</li>
      </ul>
      
      <h3>After-Hours & Weekend Emergency Clinics</h3>
      <ul>
        <li>Miami Pet Emergency – 11774 SW 88th St, Miami, FL 33186 – Phone: (305) 598-1234</li>
        <li>Emergency Animal Clinic (Jonicer Emergency) – 570 NW 103rd St, Miami, FL 33150 – Phone: (305) 757-3030</li>
      </ul>
      
      <h3>Specialty and Emergency Referral Centers</h3>
      <ul>
        <li>Southeast Veterinary Referral Center & The Pet Emergency Room – 6394 S Dixie Hwy, South Miami, FL 33143 – Phone: (305) 666-4142</li>
        <li>Miami Veterinary Specialists – 8601 Sunset Dr, Miami, FL 33143 – Phone: (305) 665-2820</li>
      </ul>
    `
  },
  {
    title: "Wellness Tips",
    content: `
    <p><strong>DISCLAIMER:</strong> The following wellness tips are provided for informational purposes only. They are not a substitute for professional veterinary advice, diagnosis, or treatment. Always consult your veterinarian regarding your dog’s diet, exercise, and overall health before making changes.</p>
    
      <h3>Nutrition & Diet</h3>
      <p>Feed a balanced diet appropriate for your dog’s age, breed, and activity level. Avoid toxic foods like chocolate, grapes, onions, and xylitol. Consider supplements only under vet guidance.</p>
      
      <h3>Exercise & Mental Stimulation</h3>
      <p>Daily walks, play sessions, and interactive toys keep dogs healthy and happy. Rotate toys and introduce puzzle feeders for mental enrichment. Provide safe socialization with other dogs and people.</p>
      
      <h3>Preventative Care & Grooming</h3>
      <p>Regular vet check-ups and vaccinations. Brush teeth or provide dental chews. Groom coat, trim nails, and check ears regularly.</p>
    `
  }
];

// ===== FUNCTIONS =====
function createCard(item, type) {
  const card = document.createElement('div');
  card.className = 'card';
  const h3 = document.createElement('h3');
  h3.textContent = item.title;
  card.appendChild(h3);

  if (type === 'guide' || type === 'health') {
    const p = document.createElement('p');
    p.textContent = item.desc || '';
    if (p.textContent) card.appendChild(p);

    const btn = document.createElement('button');
    btn.textContent = 'View Details';
    btn.onclick = () => openModal(item.content);
    card.appendChild(btn);
  } else if (type === 'product') {
    card.onclick = () => window.open(item.link, '_blank');
  }
  return card;
}

function render() {
  // ===== Training Guides =====
  const guidesContainer = document.getElementById('training-guides');
  trainingGuides.forEach(g => guidesContainer.appendChild(createCard(g, 'guide')));

  if (trainingMessage) {
    const msg = document.createElement('p');
    msg.innerHTML = trainingMessage;
    msg.style.fontStyle = "italic";
    msg.style.marginTop = "10px";
    guidesContainer.appendChild(msg);
  }

  // ===== Products with Subcategories =====
const productsContainer = document.getElementById('products');

if (productsMessage && !document.querySelector('.products-disclaimer')) {
    const disclaimer = document.createElement('p');
    disclaimer.className = 'products-disclaimer';
    disclaimer.innerHTML = productsMessage;
    disclaimer.style.fontStyle = 'italic';
    disclaimer.style.marginBottom = '20px';
    productsContainer.prepend(disclaimer); // Add on top
}

  const subcategories = [
    { title: "Training Tools & Accessories", key: "tools" },
    { title: "Enrichment Toys & Feeders", key: "toys" },
    { title: "Wellness & Miscellaneous", key: "wellness" }
  ];

  subcategories.forEach(sub => {
    const items = products.filter(p => p.sub === sub.key);
    if (items.length === 0) return;

    const title = document.createElement('div');
    title.className = 'subcategory-title';
    title.textContent = sub.title;

    const wrapper = document.createElement('div');
    wrapper.className = 'subcategory-wrapper';
    items.forEach(item => wrapper.appendChild(createCard(item, 'product')));

    productsContainer.appendChild(title);
    productsContainer.appendChild(wrapper);
  });

  // ===== Videos =====
  const videosContainer = document.getElementById('videos');
  videos.forEach(v => {
    const videoCard = document.createElement('div');
    videoCard.className = 'card';

    const h3 = document.createElement('h3');
    h3.textContent = v.title;

    const iframe = document.createElement('iframe');
    iframe.src = v.embed;
    iframe.allowFullscreen = true;

    videoCard.appendChild(h3);
    videoCard.appendChild(iframe);
    videosContainer.appendChild(videoCard);
  });

  // ===== Health & Safety =====
  const healthContainer = document.getElementById('health-safety');
  healthSafety.forEach(h => healthContainer.appendChild(createCard(h, 'health')));
}

// ===== MODAL =====
const modal = document.getElementById('modal');
const modalBody = document.getElementById('modal-body');
const modalClose = document.getElementById('modal-close');

function openModal(content) {
  modalBody.innerHTML = content;
  modal.style.display = 'block';

  setTimeout(() => {
    const modalContent = modal.querySelector('.modal-content');
    if (modalContent) {
      modalContent.scrollTop = 0;
    }
  }, 0);
}
if (modalClose) {
  modalClose.addEventListener('click', function () {
    modal.style.display = 'none';
  });
}

// Close modal when clicking outside the modal content
modal.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.style.display = 'none';
  }
});

// Close modal with Escape key
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && modal.style.display === 'flex') {
    modal.style.display = 'none';
  }
});

document.addEventListener('DOMContentLoaded', render);
