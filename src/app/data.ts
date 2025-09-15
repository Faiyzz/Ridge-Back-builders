export type Blog = {
  id: number;
  title: string;
  excerpt: string;

  // SEO
  seoTitle?: string;
  seoDescription?: string;
  keywords?: string[];
  author?: string;
  publishedAt?: string;
  updatedAt?: string;
  ogImage?: string;
  draft?: boolean;

  banner: {
    image: { src: string; alt?: string };
  };

  Desc: {
    paragraph: string;
  };

  caseStudy?: {
    paragraph: string;
    bullets?: string[];
  };

  howWeDoIt: {
    heading: string;
    steps: {
      number: number;
      title: string;
      summary: string;
      bullets?: string[];
      media?: { src: string; alt?: string };
    }[];
  };
};

export const BLOGS: Blog[] = [
  {
    id: 1,
    title: "Florida Hurricane / Flood Remediation & Mold Removal",
    excerpt:
      "Essential guide to protecting your home from hurricane damage and preventing mold growth in Florida's humid climate.",
    banner: {
      image: {
        src: "/lovable-uploads/b1n1.jpg",
        alt: "Florida Hurricane / Flood Remediation & Mold Removal",
      },
    },
    Desc: {
      paragraph:
        "When a hurricane passes, Florida homeowners often face more damage than what's visible on the surface. Floodwaters bring hidden moisture, structural risks, and the rapid growth of mold — sometimes within 24 to 48 hours. **At Ridgeback Builders, we specialize in fast-response flood remediation and mold removal**, helping homeowners in Lehigh Acres, Naples, Fort Myers, Port Charlotte, Sarasota, and other coastal communities recover safely and fully.",
    },
    caseStudy: {
      paragraph:
        "After Hurricane Milton, the Cortez family returned to their home in Cape Coral after evacuating during a Category 3 storm. The house appeared intact, but they noticed a strong musty smell and signs of water pooling near the walls. Within 12 hours of their call, Ridgeback Builders was on site with a remediation team.",
      bullets: [
        "**Moisture Mapping & Thermal Imaging:** Using infrared cameras and moisture sensors, we identified water intrusion behind the walls and under the laminate flooring.",
        "**Demolition & Material Removal:** We removed all compromised drywall 2 feet above the water line, vinyl flooring and wet subfloor, and mold-infested insulation.",
        "**Industrial Drying & Dehumidification:** Deployed high-power air movers and commercial-grade dehumidifiers to dry the structure for 72 hours while monitoring humidity levels daily.",
        "**Mold Remediation & Air Scrubbing:** Treated all affected surfaces with EPA-approved antimicrobials and ran HEPA filtration systems to remove airborne spores.",
        "**Full Renovation & Restoration:** Rebuilt the drywall, installed waterproof luxury vinyl plank flooring, and repainted with mold-resistant interior paint.",
      ],
    },
    howWeDoIt: {
      heading: "How We Remove Mold & Restore After Floods",
      steps: [
        {
          number: 1,
          title: "What Happens After Flooding in a Florida Home?",
          summary: "",
          bullets: [
            "Drywall and insulation",
            "Underflooring materials",
            "HVAC ductwork",
            "Electrical outlets and junctions",
            "Studs and framing",
          ],
          media: {
            src: "/lovable-uploads/b1n2.jpg",
            alt: "Emergency response",
          },
        },
        {
          number: 2,
          title: "Signs You Need Immediate Mold Remediation",
          summary: "",
          bullets: [
            "Recent hurricane, roof leak, or standing water",
            "Strong musty odor after flooding",
            "Discoloration on walls or ceilings",
            "Allergy-like symptoms in the home",
            "Swollen or warped baseboards or flooring",
          ],
          media: {
            src: "/lovable-uploads/b1n3.jpg",
            alt: "Drying process",
          },
        },
        {
          number: 3,
          title: "What Makes Ridgeback Builders Different?",
          summary: "Curious what makes us different here you go.",
          bullets: [
            "Licensed mold remediation and residential construction experts",
            "Quick turnaround, fully insured, and insurance documentation provided",
            "Servicing Lehigh Acres, Fort Myers, Cape Coral, Naples, Port Charlotte, Sarasota, and beyond",
          ],
          media: {
            src: "/lovable-uploads/b1n4.jpg",
            alt: "Drying process",
          },
        },
      ],
    },
  },
  {
    id: 2,
    title: "Florida Hurricane Roof Replacement vs Repair",
    excerpt:
      "When to repair and when to replace your roof after hurricane damage - a comprehensive guide for Florida homeowners.",
    banner: {
      image: {
        src: "/lovable-uploads/0558b537-c818-4b1b-b263-278aa10d4c7a.png",
        alt: "Florida Hurricane Roof Replacement vs Repair",
      },
    },
    Desc: {
      paragraph:
        "Florida's hurricane season brings with it a major concern for homeowners: roof damage. While it's tempting to just fix what's broken, in many cases, a repair may be a band-aid solution, especially after a severe storm. **At Ridgeback Builders, we help homeowners in Fort Myers, Sarasota, Naples, and surrounding areas** assess whether a roof repair or full replacement is the smarter long-term choice.",
    },
    caseStudy: {
      paragraph: `**Fort Myers Roof Replacement After Hurricane Damage**  
       The Rodriguez family in Fort Myers had a 15-year-old asphalt shingle roof. After Hurricane Milton, they noticed missing shingles, and water spots on the ceiling. They weren't sure whether to repair or replace and their insurance company had sent a confusing report`,
    },
    howWeDoIt: {
      heading: "Here's how Ridgeback Builders handled it:",
      steps: [
        {
          number: 1,
          title: "Structural Assessment & Insurance Support",
          summary: "Our project manager conducted a full inspection:",
          bullets: [
            "Missing shingles: over 30% of the roof",
            "Exposed decking with visible water stains",
            "Moisture detected in attic insulation",
            "Trusses showing signs of warping",
          ],
          media: {
            src: "/lovable-uploads/730b180b-6fbf-4b0e-8abc-1bf58608c568.png",
            alt: "Emergency response",
          },
        },
        {
          number: 2,
          title: " Repair vs. Replacement Decision",
          summary: "We compared both options side-by-side:",
          bullets: [
            `**Repair**  
            Lower upfront cost but doesn't address hidden damage, shorter life, no manufacturer warranty`,
            `**Full Replacement**  
            Stronger structure, warranty-backed, long-term value but Higher initial investment`,
          ],
          media: {
            src: "/lovable-uploads/6a992879-5397-4477-b096-68ef98e8a293.png",
            alt: "Drying process",
          },
        },
        {
          number: 3,
          title: "Roof Replacement",
          summary: "We replaced the roof with:",
          bullets: [
            "Temporary tarp coverage to prevent further leaks",
            "Architectural shingles rated for 130 mph wind",
            "Underlayment for moisture resistance",
            "New flashing and ridge venting",
            "Complete removal of previous shingles, and underlayment",
          ],
          media: {
            src: "/lovable-uploads/b566dc6a-acc7-4aa0-8938-18a2fdcd76ea.png",
            alt: "Build & Implementation",
          },
        },
      ],
    },
  },
  {
    id: 3,
    title: "Bathroom Remodeling Tips and Tricks for Florida Homeowners",
    excerpt:
      "Transform your bathroom with Florida-specific considerations for humidity, materials, and design trends.",
    banner: {
      image: {
        src: "/lovable-uploads/f285936d-a7b6-40fd-b669-9bde63ff0c06.png",
        alt: "Bathroom Remodeling Tips and Tricks for Florida Homeowners",
      },
    },
    Desc: {
      paragraph: `Bathroom remodeling in Florida comes with a unique set of challenges — from high humidity to hurricane season prep and everything in between. Whether you're planning a full renovation or just upgrading fixtures, understanding the local climate, building codes, and material durability is key to a successful remodel.  
      At **Ridgeback Builders, we've remodeled hundreds of bathrooms** in Lehigh Acres, Fort Myers, Naples, Sarasota, Tampa, Bradenton, West Palm Beach, and beyond. Here's what every Florida homeowner should know before remodeling a bathroom.`,
    },
    howWeDoIt: {
      heading: "",
      steps: [
        {
          number: 1,
          title: "Plan for Humidity — Always",
          summary:
            "Florida's climate is humid nearly year-round. That means moisture management is a top priority when remodeling a bathroom.",
          bullets: [
            "Install exhaust fans with humidity sensors that automatically turn on",
            "Use mildew-resistant drywall (green board or cement board) in shower areas",
            "Choose moisture-rated LED lighting to avoid corrosion",
            `Color your walls using mold-resistant paint options
we've seen too many DIY jobs fall apart because standard drywall or cheap ventilation couldn't hold up. That's why **Ridgeback Builders only uses high-performance materials** tested for Florida's conditions.`,
          ],
          media: {
            src: "/lovable-uploads/3e34e6e4-4848-4e0d-a666-808efc7d123d.png",
            alt: "Emergency response",
          },
        },
        {
          number: 2,
          title: "Choose Smart, Water-Resistant Materials",
          summary:
            "In Florida, bathrooms must handle not only daily use but also extreme conditions — including heat, humidity, and occasionally storm-related moisture.",
          bullets: [
            "Porcelain or ceramic tile (non-slip, easy to clean)",
            "Quartz countertops (resistant to moisture and heat)",
            "PVC or marine-grade vanities (no warping like traditional wood)",
            "Glass shower panels with treated anti-fog coating",
            "Luxury vinyl plank flooring (LVP) (an option for bathroom floors)",
          ],
        },
        {
          number: 3,
          title: "Keep It Light, Bright & Spacious",
          summary:
            "Florida homes thrive on brightness. Many older bathrooms feel cramped or dark — a problem we solve often during remodels.",
          bullets: [
            "Add recessed ceiling lighting for a clean, modern glow",
            "Use floating vanities to open the floor visually",
            "Install larger mirrors to reflect light and space",
            `Consider clear glass shower doors over opaque curtains or frosted panels.  
             We recently remodeled a Bradenton master bathroom where simply switching from a bulky vanity to a wall-mounted one made the entire space feel twice as big.`,
          ],
          media: {
            src: "/lovable-uploads/7cbb6016-653b-4731-8c76-23afdd4f0820.png",
            alt: "Build & Implementation",
          },
        },
        {
          number: 4,
          title: "Upgrade Your Plumbing — it's Worth It",
          summary:
            "If your home was built before 2000, chances are your plumbing system is due for an upgrade — especially in bathrooms.",
          bullets: [
            "Pipe material (older copper or polybutylene often needs replacing)",
            "Water pressure regulation",
            "Hot water delivery to showers/tubs",
            `Drain line slopes (often neglected in older homes)  
            Don't wait for slow drains or leaky pipes to show up after the remodel. **Ridgeback Builders includes full project management** — including plumbing and electrical upgrades so everything works beautifully behind the walls too.`,
          ],
        },
        {
          number: 5,
          title: "Make It Hurricane-Resilient Where It Counts",
          summary:
            "You may not associate bathrooms with hurricanes, but it's a growing trend in Florida to reinforce certain rooms as emergency safe spaces or use hurricane-rated windows and doors during major remodels.",
          bullets: [
            "Impact-rated glass in windows",
            "Hurricane clips if you're replacing drywall or ceilings",
            `Water-sealed thresholds and frames.  
            At Ridgeback Builders, we help Fort Myers and Tampa clients make smart, storm-resilient design choices — even in spaces like bathrooms.`,
          ],
          media: {
            src: "/lovable-uploads/b3b73c95-a78d-4e87-8a35-686ede0a2bef.png",
            alt: "Handover & Support",
          },
        },
        {
          number: 6,
          title: "Don't Forget Permits and Code Compliance",
          summary: `Every city in Florida has its remodeling regulations, and bathrooms often involve plumbing, electrical, and structural / framing updates. **Ridgeback Builders handles all permitting and code compliance** — whether you're in Lehigh Acres, Sarasota, Port St. Lucie, or Naples.`,
          bullets: [
            "ADA compliance (if needed)",
            "Proper fixture spacing",
            "Water heater upgrades (when applicable)",
            `Shower/toilet spacing per Florida building code  
            Homeowners often underestimate how much of a bathroom remodel is "behind the scenes." That's where working with licensed pros like **Ridgeback Builders saves you time and future headaches**. We are fully licensed, insured, and experienced with local code enforcement across multiple Florida counties.`,
          ],
        },
      ],
    },
  },
  {
    id: 4,
    title: "Kitchen Remodeling Tips and Tricks for Florida Homeowners",
    excerpt:
      "Create your dream kitchen while navigating Florida's unique building codes and climate considerations.",
    banner: {
      image: {
        src: "/lovable-uploads/24ddca78-b823-40fc-9122-89a82c5975b0.png",
        alt: "Kitchen Remodeling Tips and Tricks for Florida Homeowners",
      },
    },
    Desc: {
      paragraph: `Remodeling your kitchen in Florida isn't just about creating a beautiful space — it's about building one that performs well in a hot, humid, and storm-prone environment...  
      At **Ridgeback Builders**, we specialize in kitchen remodeling projects...`,
    },

    howWeDoIt: {
      heading: "",
      steps: [
        {
          number: 1,
          title: "Choose Materials Built for Heat and Humidity",
          summary:
            "Florida's environment demands durable, moisture-resistant materials...",
          bullets: [
            `**Quartz countertops:** more durable than granite and resistant to mold and stains`,
            `**Porcelain tile flooring:** water-resistant and cool underfoot`,
            `**PVC cabinets or marine-grade plywood:** warping-resistant even in coastal zones`,
            `**Glass or metal backsplash:** easier to clean and more heat resistant  
            We helped one Tampa homeowner switch from MDF cabinets to waterproof PVC...`,
          ],
          media: {
            src: "/lovable-uploads/cd34e88a-ed09-49ac-b344-d254670d23b7.png",
            alt: "Emergency response",
          },
        },
        {
          number: 2,
          title: " Maximize Ventilation & Airflow",
          summary:
            "A Florida kitchen without proper ventilation can feel like a sauna...",
          bullets: [
            "Install high-efficiency range hoods vented directly outside",
            "Use ceiling fans or ductless fans to move air",
            "Include operable windows for natural ventilation",
          ],
          media: {
            src: "/lovable-uploads/de0364e6-8599-4d7e-8914-6965e7b30f4a.png",
            alt: "Drying process",
          },
        },
        {
          number: 3,
          title: "Go for an Open Layout — But Be Smart About It",
          summary: "Florida homeowners love open-concept kitchens...",
          bullets: [
            "If the wall is load-bearing",
            "If it contains plumbing or ductwork",
            "If reinforcements (like beams or columns) are needed",
          ],
          media: {
            src: "/lovable-uploads/24ddca78-b823-40fc-9122-89a82c5975b0.png",
            alt: "Build & Implementation",
          },
        },
        {
          number: 4,
          title: "Add Smart Storage Without Cluttering the Design",
          summary: "",
          bullets: [
            "Deep drawers instead of lower cabinets",
            "ull-out pantries",
            "Corner lazy Susans",
            "Built-in microwave drawers",
          ],
        },
        {
          number: 5,
          title: "Focus on Natural Light + Cool Colors",
          summary: "",
          bullets: [
            "White or soft gray cabinets + brushed nickel hardware",
            "Light-colored quartz counters",
            "Under-cabinet LED lighting",
            "Sea glass backsplash, open shelving",
          ],
        },
        {
          number: 6,
          title: "Always Plan for Power and Plumbing Needs",
          summary: "",
          bullets: [
            "Upgrading electrical for modern appliances",
            "Rerouting plumbing for islands",
            "Code-compliant outlets and lighting",
            "Surge protection during storms",
          ],
          media: {
            src: "/lovable-uploads/d4f41a5d-7c97-485a-9c2c-ef02895046bd.png",
            alt: "Build & Implementation",
          },
        },

        {
          number: 7,
          title: "Don't Skip Permits or Licensing — Florida Codes Are Strict",
          summary: "",
          bullets: [
            "Lee County",
            "Collier County",
            "Charlotte County",
            "Sarasota County",
            "Palm Beach County",
          ],
        },
      ],
    },
  },
  {
    id: 5,
    title: "How to Build an Outdoor Kitchen in Your Florida Lanai",
    excerpt:
      "Maximize your outdoor living space with a custom kitchen addition designed for Florida's year-round outdoor lifestyle.",
    banner: {
      image: {
        src: "/lovable-uploads/403cae62-d6da-49cf-830c-f9546cc4c987.png",
        alt: "How to Build an Outdoor Kitchen in Your Florida Lanai",
      },
    },
    Desc: {
      paragraph: `In Florida, outdoor living isn't a luxury — it's a way of life. From weekend grilling to poolside dinners with friends, outdoor kitchens are becoming one of the most requested upgrades among Florida homeowners. But building a functional, weatherproof kitchen in your lanai takes more than just a grill and a countertop.  
      At **Ridgeback Builders, we've built outdoor kitchens** in Lehigh Acres, Fort Myers, Naples, Port Charlotte, Sarasota, Bradenton, Tampa, West Palm Beach, and Port St. Lucie — and we've learned exactly what it takes to make them beautiful, functional, and Florida-proof.`,
    },
    howWeDoIt: {
      heading: "",
      steps: [
        {
          number: 1,
          title: "Start with the Right Foundation — Literally",
          summary:
            "Your lanai floor may not be ready for the weight and heat of an outdoor kitchen.",
          bullets: [
            "Concrete slab strength & slope",
            "Drainage and water runoff",
            `Leveling and load support.  
            If your lanai isn't reinforced or properly graded, we'll pour a new concrete base to support cabinetry, countertops, and appliances — especially if you're adding a heavy built-in grill or brick oven.`,
          ],
          media: {
            src: "/lovable-uploads/76443640-15e8-4615-9e33-822db27e1522.png",
            alt: "Emergency response",
          },
        },
        {
          number: 2,
          title: "Choose Hurricane-Resistant, Florida-Safe Materials",
          summary:
            "Outdoor kitchens must withstand intense UV, coastal air, heavy rain, and — at times — tropical storms. We recommend:",
          bullets: [
            "Stainless steel cabinets (marine-grade 304/316)",
            "Quartzite or sealed granite countertops",
            "Tile, stone, or sealed concrete finishes",
            "Non-slip flooring materials",
          ],
        },
        {
          number: 3,
          title: "Add the Essentials — But Plan Smart",
          summary:
            "Every Florida outdoor kitchen should be designed for comfort, convenience, and energy efficiency. Here's what most homeowners request:",
          bullets: [
            "Built-in gas or propane grill (or smoker)",
            "Mini fridge and/or ice maker",
            "Stainless steel sink with drainage line",
            "Pull-out trash and storage cabinets",
            `A weather-rated ceiling fan or hood vent.  
            **Pro tip:** Always run dedicated GFCI outlets and proper gas or water lines. Ridgeback Builders handles all utility work with licensed contractors where available.`,
          ],
          media: {
            src: "/lovable-uploads/87a0198f-a57f-4948-8a82-f145bf1a027e.png",
            alt: "Build & Implementation",
          },
        },
        {
          number: 4,
          title: "Keep It Cool and Covered",
          summary: `Your lanai may already be screened or partially covered, but most homeowners still need a custom roof extension, pergola, or insulated cover to shield the kitchen from sun and rain.  
          We recently helped a family in Sarasota build a pavilion-style cover with recessed lighting, dual ceiling fans, and LED task lights. It made the space usable even in July and added serious resale value.`,
          bullets: [
            "Misters or fans for airflow",
            "Insect protection",
            "Overhead lighting for evening entertaining",
          ],
        },
        {
          number: 5,
          title: "Blend the Design with the Home",
          summary: `Your outdoor kitchen should feel like an extension of your interior, not an afterthought.`,
          bullets: [
            "Match stone, paver, or tile materials to your patio and landscaping",
            "Coordinate cabinet and counter colors with your home's exterior",
            `Listen to your hosting style to create design recommendations  
            In Bradenton, we recently built a coastal-style lanai kitchen with light blue cabinetry and brushed stainless hardware to match the home's coastal interior. Seamless. Stylish. Functional.`,
          ],
        },
        {
          number: 6,
          title: "Think Beyond Cooking — Make It a Destination",
          summary: `Want your lanai to be more than just a grill station? Add features like:`,
          bullets: [
            "Outdoor bar with stools",
            "TV wall with weather-rated screen",
            "Pizza oven or smoker station",
            "A fire pit or lounge area nearby",
            "Built-in Bluetooth speakers or sound system",
          ],
          media: {
            src: "/lovable-uploads/01dbfcbf-1bb4-433b-b0ff-39888c6b63bf.png",
            alt: "Handover & Support",
          },
        },
      ],
    },
  },
  {
    id: 6,
    title: "How to Distinguish Load-Bearing vs. Non-Load-Bearing Walls",
    excerpt:
      "Learn to identify structural walls and understand the differences between metal studs vs wood studs in construction.",
    banner: {
      image: {
        src: "/lovable-uploads/ad619d3b-6c34-4eec-ac27-c99115e40002.png",
        alt: "How to Distinguish Load-Bearing vs. Non-Load-Bearing Walls",
      },
    },
    Desc: {
      paragraph: `Whether you're opening up your kitchen, expanding your living space, or just trying to add natural light to a room, one of the most critical — and risky — steps is removing an interior wall. The first question we always ask is: Is it load-bearing?  
      At **Ridgeback Builders, we've helped homeowners across** Fort Myers, Naples, Port Charlotte, Sarasota, Tampa, Bradenton, West Palm Beach, and Port St. Lucie make safe, structurally sound modifications during renovations. Here's what you need to know before removing or relocating a wall in your Florida home.`,
    },
    howWeDoIt: {
      heading: "Here is what you need to know",
      steps: [
        {
          number: 1,
          title: "What Is a Load-Bearing Wall?",
          summary:
            "A load-bearing wall supports the structural weight of your home — including the roof, second floor (if applicable), trusses, and ceiling joists. Removing or altering this wall without reinforcement can cause:",
          bullets: [
            "Cracks in ceilings and walls",
            "Sagging floors above",
            "Foundation shifts",
            `In worst cases, partial collapse over time  
            Non-load-bearing walls, often called partition walls, are used simply to divide spaces. These can typically be removed or modified without structural consequences — if confirmed by a professional.`,
          ],
        },
        {
          number: 2,
          title: "How Ridgeback Builders Identifies Structural Walls",
          summary:
            "When we're brought in to consult on a remodel, we begin with a wall assessment that may include:",
          bullets: [
            "Reviewing original construction plans or blueprints",
            "Determining ceiling joist direction",
            "Inspecting attics or crawlspaces for weight transfer points",
            `Using wall scanners to detect beams, plumbing, or ductwork  
              In many cases, especially in older homes in Fort Myers or Tampa, we discover structural support hidden in what looks like a basic drywall partition. That's why homeowners trust **Ridgeback Builders to confirm the wall's role** before construction begins.`,
          ],
          media: {
            src: "/lovable-uploads/8936c2a8-4aea-4a84-b5c9-1b10912a1e5b.png",
            alt: "Drying process",
          },
        },
        {
          number: 3,
          title: "Understanding Wood Studs vs. Metal Studs in Florida Homes",
          summary:
            "Framing type plays a major role in renovation decisions. Here's how Florida homes generally break down:",
          media: {
            src: "/lovable-uploads/788988ed-eb72-4dfe-8521-a1b57a44bb34.png",
            alt: "Build & Implementation",
          },
        },
        {
          number: 4,
          title: "Wood Works",
          summary: "",
          bullets: [
            "Common in single-family homes built before 2010 (still used today)",
            "Ideal for both structural and non-structural use",
            "Easier to modify for doorways, windows, and support headers",
            "Can be vulnerable to termites and humidity without treatment",
          ],
        },
        {
          number: 5,
          title: "Metal Studs",
          summary: "",
          bullets: [
            "Frequently used in condos and newer construction in coastal areas",
            "Typically used for non-load-bearing partitions only",
            "Rust-resistant and lighter, but require special fastening techniques",
            `Not suitable for bearing vertical loads unless part of engineered framing  
            Recently, **Ridgeback Builders remodeled a Bradenton condo** with metal stud interior walls. Although the homeowner assumed the walls were structural, we verified that they were non-load-bearing, allowing for safe, cost-effective removal and a more open floor plan, raising the property's value.`,
          ],
        },
      ],
    },
  },
  {
    id: 7,
    title: "New Concrete Driveway Installation Guide",
    excerpt:
      "Everything you need to know about installing a durable concrete driveway that withstands Florida weather.",
    banner: {
      image: {
        src: "/lovable-uploads/b7n1.jpeg",
        alt: "New Concrete Driveway Installation Guide",
      },
    },
    Desc: {
      paragraph: `Adding a gazebo, pergola, shed, or any other outdoor structure to your Florida property is a great way to expand your living space, entertain guests, and increase property value. But the success of that addition depends on a solid foundation — specifically, a properly built concrete slab.  
      At **Ridgeback Builders**, we've poured concrete pads and foundations for homeowners across Fort Myers, Naples, Port Charlotte, Sarasota, Tampa, Bradenton, West Palm Beach, and Port St. Lucie. Whether you're adding a shed, workshop, or outdoor retreat, her's everything you need to know before installing a slab.`,
    },
    howWeDoIt: {
      heading: "",
      steps: [
        {
          number: 1,
          title: "Identify the Structure for Shed",
          summary: `**For sheds, we recommend:**`,
          bullets: [
            "4–6 inches of slab thickness",
            "Vapor barrier to control moisture from the ground",
            "Over 3000 PSI reinforced concrete",
            "Control joints to minimize concrete cracking",
          ],
          media: {
            src: "/lovable-uploads/b7n2.jpeg",
            alt: "Emergency response",
          },
        },
        {
          number: 2,
          title: "Identify the Structure Gazebo or Pergola",
          summary: `**For Gazebo or Pergola, we recommend:**`,
          bullets: [
            "A clean, level finish with decorative options",
            "Built-in deep footers (perimeter) for post anchoring",
            "Slope planning for water runoff",
            "Aesthetic touches like colored concrete or stamped finishes",
          ],
        },
        {
          number: 3,
          title: "Concrete Mix and Finishing Options",
          summary:
            "Ridgeback Builders uses the right mix for Florida's hot and humid conditions. Our standard is over 3,000 PSI concrete, with optional air-entrainment or additives for extra moisture resistance.",
          bullets: [
            "Smooth or broom finish",
            "Stamped patterns, colored concrete, or exposed aggregate",
            "Slip-resistant coatings",
            "UV-stable sealers",
          ],
          media: {
            src: "/lovable-uploads/b7n3.jpeg",
            alt: "Build & Implementation",
          },
        },
        {
          number: 4,
          title: "Anchoring and Florida Code Compliance",
          summary: `Outdoor structures must meet Florida Building Code wind-load requirements. That means we embed anchor bolts, tie-downs, or post brackets based on the slab type and local wind zone.  
          In a Naples project, Ridgeback Builders installed a 10x14 shed slab with hurricane-rated tie-downs and passed all inspections on the first visit.`,
        },
      ],
    },
  },
  {
    id: 8,
    title: "New Concrete Slabs for Florida Gazebos and Sheds",
    excerpt:
      "Proper foundation techniques for outdoor structures in Florida's sandy soil and hurricane-prone environment.",
    banner: {
      image: {
        src: "/lovable-uploads/b8n1.jpeg",
        alt: "New Concrete Slabs for Florida Gazebos and Sheds",
      },
    },
    Desc: {
      paragraph: "",
    },
    caseStudy: {
      paragraph:
        "For a coastal shed install, we poured a reinforced slab with uplift anchors rated for local wind maps. The owner got a rock-solid base that meets both city and HOA requirements.",
    },
    howWeDoIt: {
      heading: "How We Remove Mold & Restore After Floods",
      steps: [
        {
          number: 1,
          title: "Emergency Response",
          summary: "Immediate water extraction and site stabilization.",
          bullets: [
            "Deploy pumps & extractors",
            "Install dehumidifiers",
            "Remove saturated drywall",
          ],
          media: {
            src: "/images/process/flood-step-1.jpg",
            alt: "Emergency response",
          },
        },
        {
          number: 2,
          title: "Drying & Dehumidification",
          summary: "Control moisture levels to prevent further growth.",
          bullets: [
            "Commercial fans and dehumidifiers",
            "Monitor with moisture meters",
            "Target hidden wall cavities",
          ],
          media: {
            src: "/images/process/flood-step-2.jpg",
            alt: "Drying process",
          },
        },
        {
          number: 3,
          title: "Build & Implementation",
          summary:
            "Licensed pros execute the plan with quality control, inspections, and steady communication.",
          bullets: [
            "Scheduled, insured crews",
            "Progress updates & inspections",
            "Adjustments handled quickly",
          ],
          media: {
            src: "/images/process/step-3.jpg",
            alt: "Build & Implementation",
          },
        },
        {
          number: 4,
          title: "Handover & Support",
          summary:
            "Final QA, documentation, and care guidance so your project lasts and stays compliant.",
          bullets: [
            "Walkthrough & punch list",
            "Warranty & care guide",
            "Ongoing support",
          ],
          media: {
            src: "/images/process/step-4.jpg",
            alt: "Handover & Support",
          },
        },
      ],
    },
  },
  {
    id: 9,
    title: "How to Create New Exterior/Entry Door in Garage",
    excerpt:
      "Step-by-step guide to adding convenient access doors to your garage while maintaining structural integrity.",
    banner: {
      image: {
        src: "/lovable-uploads/b9n1.jpeg",
        alt: "How to Create New Exterior/Entry Door in Garage",
      },
    },
    Desc: {
      paragraph: `Florida’s real estate market has fueled a huge demand for accessory dwelling units (ADUs) and efficiency units. Whether you're creating a rentable suite for extra income, a guest room, or a space for extended family, converting part of your home into an efficiency unit can be a high-ROI upgrade.  
      At **Ridgeback Builders**, we help homeowners throughout Fort Myers, Naples, Port Charlotte, Sarasota, Tampa, Bradenton, West Palm Beach, and Port St. Lucie convert garages, spare rooms, and additions into functional, rentable units that meet code and add long-term value.`,
    },
    howWeDoIt: {
      heading: "Efficiency Unit",
      steps: [
        {
          number: 1,
          title: "What Is an Efficiency Unit?",
          summary: "An efficiency unit is a small, self-contained living space that typically includes",
          bullets: [
            "A bedroom or sleeping area",
            "A small kitchenette",
            "A bathroom",
            `A private entry  
            Some are attached (converted garages or rooms), while others are detached (shed-to-suite conversions or additions).`,
          ],
          media: {
            src: "/images/process/flood-step-1.jpg",
            alt: "Emergency response",
          },
        },
        {
          number: 2,
          title: "Define the Space You’ll Convert",
          summary: "",
          bullets: [
            "Garage conversions",
            "Florida room enclosures",
            "Split-layout additions with shared walls",
            `Backyard ADUs or tiny homes on slab  
            Ridgeback Builders assesses zoning and building codes to determine what’s possible in your municipality.`
          ],
          media: {
            src: "/lovable-uploads/b10n2.jpeg",
            alt: "Drying process",
          },
        },
        {
          number: 3,
          title: "Build & Implementation",
          summary:
            "Licensed pros execute the plan with quality control, inspections, and steady communication.",
          bullets: [
            "Scheduled, insured crews",
            "Progress updates & inspections",
            "Adjustments handled quickly",
          ],
          media: {
            src: "/images/process/step-3.jpg",
            alt: "Build & Implementation",
          },
        },
        {
          number: 4,
          title: "Handover & Support",
          summary:
            "Final QA, documentation, and care guidance so your project lasts and stays compliant.",
          bullets: [
            "Walkthrough & punch list",
            "Warranty & care guide",
            "Ongoing support",
          ],
          media: {
            src: "/images/process/step-4.jpg",
            alt: "Handover & Support",
          },
        },
      ],
    },
  },
  {
    id: 10,
    title: "How to Create an Efficiency in Your Home to Rent Out",
    excerpt:
      "Convert unused space into rental income with this comprehensive guide to creating legal rental units.",
    banner: {
      image: {
        src: "/lovable-uploads/b10n1.jpeg",
        alt: "How to Create an Efficiency in Your Home to Rent Out",
      },
    },
    Desc: {
      paragraph: `Florida’s real estate market has fueled a huge demand for accessory dwelling units (ADUs) and efficiency units. Whether you're creating a rentable suite for extra income, a guest room, or a space for extended family, converting part of your home into an efficiency unit can be a high-ROI upgrade.  
      At **Ridgeback Builders**, we help homeowners throughout Fort Myers, Naples, Port Charlotte, Sarasota, Tampa, Bradenton, West Palm Beach, and Port St. Lucie convert garages, spare rooms, and additions into functional, rentable units that meet code and add long-term value.`,
    },
    howWeDoIt: {
      heading: "Efficiency Unit",
      steps: [
        {
          number: 1,
          title: "What Is an Efficiency Unit?",
          summary: "An efficiency unit is a small, self-contained living space that typically includes",
          bullets: [
            "A bedroom or sleeping area",
            "A small kitchenette",
            "A bathroom",
            `A private entry  
            Some are attached (converted garages or rooms), while others are detached (shed-to-suite conversions or additions).`,
          ],
        },
        {
          number: 2,
          title: "Define the Space You’ll Convert",
          summary: "Control moisture levels to prevent further growth.",
          bullets: [
            "Garage conversions",
            "Florida room enclosures",
            "Split-layout additions with shared walls",
            `Backyard ADUs or tiny homes on slab  
            Ridgeback Builders assesses zoning and building codes to determine what’s possible in your municipality.`
          ],
        },
        {
          number: 3,
          title: "Understand Florida Zoning Laws and Permits",
          summary:
            "Each city has different rules for ADUs and rental suites. You’ll need to consider:",
          bullets: [
            "Zoning restrictions (some areas limit short-term rentals)",
            "Square footage minimums",
            "Parking space requirements",
            "Separate utility access (in some counties)",
            `Egress and ventilation codes  
            Ridgeback Builders handles the permitting process from start to finish, working with your city or county to ensure everything is up to code.`
          ],
          media: {
            src: "/lovable-uploads/b10n2.jpeg",
            alt: "Build & Implementation",
          },
        },
        {
          number: 4,
          title: "Plan the Layout for Comfort and Functionality",
          summary:
            "We help you maximize space by including:",
          bullets: [
            "Compact kitchenettes with mini-fridge and sink",
            "Efficient plumbing routes for the bathroom",
            "Soundproofing between the unit and the main home",
            "Smart storage solutions",
            `Private entry doors for independence  
            In a recent Tampa project, we converted a 1-car garage into a 350 sq. ft. efficiency unit with a full bath, kitchenette, and rear access door — perfect for Airbnb rental or long-term lease.`
          ],
        },
        {
          number: 5,
          title: " Build for Durability and Long-Term ROI",
          summary:
            "We use Florida-grade materials and finishes designed to last, such as:",
          bullets: [
            "Mold-resistant drywall and insulation",
            "Impact-rated windows",
            "Energy-efficient HVAC and lighting",
            "Water-resistant flooring",
            `Moisture-barrier protected plumbing  
            Efficiency units should be both low-maintenance and cost-effective to operate, especially for short-term renters.`
          ],
          media: {
            src: "/lovable-uploads/b10n3.jpeg",
            alt: "Build & Implementation",
          },
        },
      ],
    },
  },
  {
    id: 11,
    title: "How to Build Your Dream Home in Florida",
    excerpt:
      "Explore all the custom building paths Florida has to offer — from site-built to semi-custom and kit homes.",
    banner: {
      image: {
        src: "/lovable-uploads/blog11.jpg",
        alt: "How to Build Your Dream Home in Florida",
      },
    },
    Desc: {
      paragraph: "Dreaming of building a custom home in Florida? Whether you're looking at the vibrant streets of Tampa or the peaceful neighborhoods of Naples, Ridgeback Builders is here to help you understand the different ways to bring your vision to life.",
    },
    howWeDoIt: {
      heading: "Home in Florida",
      steps: [
        {
          number: 1,
          title: "Traditional Site-Built Custom Homes",
          summary: "Your home is designed, engineered, and built entirely on-site based on your lifestyle, lot size, and preferences.",
          bullets: [
            "Total customization from foundation to roof",
            "Fits irregular or sloped lots",
            `Built for Florida weather – hurricane-resistant, impact windows, elevated slabs  
            💡 Ideal If: You already own land or want full creative control.`
          ],
         
        },
        {
          number: 2,
          title: " Labor-Only Construction (You Supply the Materials)",
          summary: "You provide the blueprints and materials, and Ridgeback Builders brings the skilled team.",
          bullets: [
            "Cost savings through self-sourced materials",
            "Eco-friendly or premium materials flexibility",
            `Licensed, insured, efficient construction labor  
            💡 Ideal If: You're an investor with materials ready and just need a contractor.`
          ],
          media: {
            src: "/lovable-uploads/b11n1.jpg",
            alt: "Drying process",
          },
        },
        {
          number: 3,
          title: " Modular and Prefabricated Homes",
          summary:
            "Modular homes are built off-site and assembled on your land — popular for their speed and affordability.",
          bullets: [
            "3–6 month build time",
            "Lower cost per square foot",
            `Better quality control  
            💡 Ideal If: You need a budget-friendly or fast-build solution.  
            ⚠️ Note: We don’t manufacture modular homes but help with pads, add-ons, and site prep.`,
          ],
         
        },
        {
          number: 4,
          title: "Kit Homes or Home Building Packages",
          summary:
            "Pre-designed home kits include all frame and roof materials ready to assemble.",
          bullets: [
            "Entry-level cost starting from $50–85/sq ft",
            "Quick assembly with skilled crews",
            `Minimal waste and pre-cut materials  
            💡 Ideal If: You’re building a guest house, vacation home, or affordable rental.`,
          ],
         
        },
        {
          number: 5,
          title: " Semi-Custom Homes in Planned Communities",
          summary:
            "You choose from builder-approved layouts and finishes in a master-planned neighborhood.",
          bullets: [
            "Fast permitting and build",
            "Access to neighborhood amenities",
            `Some customizations available  
            💡 Ideal If: You want an HOA-friendly home with faster build time.`,
          ],
         
        },
      ],
    },
  },
  {
    id: 12,
    title: "What to Know Before Building on Your Lot in Florida",
    excerpt:
      "Avoid costly mistakes — learn what matters most before starting construction on your own land.",
    banner: {
      image: {
        src: "/lovable-uploads/blog12.jpg",
        alt: "What to Know Before Building on Your Lot in Florida",
      },
    },
    Desc: {
      paragraph: "Building your dream home on your own land in Florida is an exciting journey — but choosing the wrong lot can lead to delays, extra expenses, and serious setbacks. Here’s what you need to know before building on your lot",
    },
    howWeDoIt: {
      heading: "",
      steps: [
        {
          number: 1,
          title: "Define Your Homebuilding Vision",
          summary: "Before selecting land, think about your future home and lifestyle. Do you need a large backyard, pool space, or a detached garage? Make sure the lot supports your layout, orientation, and preferences. South-facing lots are great for maximizing natural light in Florida’s sunny climate.",
        },
        {
          number: 2,
          title: " Understand Zoning Requirements in Florida",
          summary: `Zoning laws vary by city and county. Confirm your lot is zoned for residential construction, and check for restrictions like setbacks, height limits, or environmental regulations. A custom builder like **Ridgeback Builders** can help you navigate these rules with ease.`,
        },
        {
          number: 3,
          title: "Get a Land Survey and Soil Test",
          summary: "These are critical steps. A land survey verifies your property lines and buildable space. A soil test will determine if special foundations are needed — especially in sandy or clay-heavy regions of Florida.",
        },
        {
          number: 4,
          title: "Check for Flood Zones and Drainage Issues",
          summary: "Florida weather means flood zones are a real concern. You may need a raised foundation or special insurance. Good drainage is essential to prevent long-term issues like water damage or foundation shifting.",
        },
        {
          number: 5,
          title: "Verify Utility Access and Infrastructure",
          summary: "Does your lot have access to electricity, water, sewer, and internet? Some areas require wells, septic tanks, or utility line extensions — all of which affect your timeline and budget.",
        },
        {
          number: 6,
          title: "Consider Road Access and Lot Shape",
          summary: "Landlocked or oddly shaped lots may need private driveways or custom layout designs. Accessibility and practicality should be considered early in the process.",
        },
        {
          number: 7,
          title: "Evaluate the Neighborhood and Long-Term Value",
          summary: "Look at growth trends, nearby amenities, and school zones. A great lot in a declining area can limit your resale value and overall satisfaction.",
        },
        {
          number: 8,
          title: "Know Your Budget and Financing Options",
          summary: "Buying land and building are usually financed separately. Lot loans may have higher down payments. Consider a construction-to-permanent loan that wraps everything into one. Always budget for site prep, permitting, and utilities.",
        },
      ],
    },
  },
  {
    id: 13,
    title: "How to Build Smarter",
    excerpt:
      "Discover how Ridgeback Builders helps you create efficient, stylish, and cost-saving homes in Florida.",
    banner: {
      image: {
        src: "/lovable-uploads/blog13.jpg",
        alt: "How to Build Smarter",
      },
    },
    Desc: {
      paragraph: `In today’s world, bigger isn’t always better. Florida homeowners are shifting toward smarter, more efficient living — homes that offer thoughtful design, energy savings, and personalized functionality.  
      At Ridgeback Builders, we believe in building homes that aren’t just large — but live large.`,
    },
    howWeDoIt: {
      heading: "",
      steps: [
        {
          number: 1,
          title: "Floorplans That Maximize Every Square Foot",
          summary: "One of the most common mistakes in custom construction is overbuilding. We design space-efficient homes that prioritize flow, natural light, and daily usability — from open-plan living to clever storage.",
        },
        {
          number: 2,
          title: "Energy-Efficient Home Building in Florida",
          summary: "Building smarter means building for long-term savings and comfort. Our energy-efficient practices include:",
          bullets: [
            "High-efficiency HVAC systems",
            "Impact-rated, insulated windows",
            "Foam or radiant barrier attic insulation",
            "Regulated plumbing fixtures",
            "Smart thermostats and LED lighting systems",
          ],
        },
        {
          number: 3,
          title: "Cost-Conscious Material Selection",
          summary:
            "Smart building includes smart spending. Whether full-service or labor-only, we guide you toward materials that balance quality, price, and design — without sacrificing aesthetics.",
        },
        {
          number: 4,
          title: "Adaptable Designs for Real Life",
          summary:
            "We design homes that grow with your needs. Our solutions include:",
          bullets: [
            "Multi-use spaces like office-guest room hybrids",
            "Accessible features for aging in place",
            `Custom built-ins that reduce furniture needs  
            Smart design now = fewer renovations later.`,
          ],
        },
        {
          number: 5,
          title: "Local Expertise That Cuts Through Red Tape",
          summary:
            "Permits, zoning, and inspections can be overwhelming. We handle:",
          bullets: [
            "Setback and zoning rules",
            "Wind-load and hurricane-resistant codes",
            `Septic and utility regulations  
            With Ridgeback Builders, your project stays compliant — and on time.`,
          ],
        },
        {
          number: 6,
          title: "Smaller Footprint, Greater Impact",
          summary:
            "Smarter homes are also more sustainable. We integrate:",
          bullets: [
            "On-demand hot water heaters",
            "Solar-ready wiring options",
            "Site-sensitive drainage and landscaping",
            `Waste-reducing construction practices  
            The result? A home that respects Florida’s environment while saving you money.`,
          ],
        },
      ],
    },
  },
  {
    id: 14,
    title: "2025 Kitchen Design Trends",
    excerpt:
      "Explore how Florida kitchens are evolving into smarter, bolder, and more personalized spaces with Ridgeback Builders.",
    banner: {
      image: {
        src: "/lovable-uploads/blog14.jpg",
        alt: "2025 Kitchen Design Trends",
      },
    },
    Desc: {
      paragraph: "kdsjbfkd;n;aknsd;ofhoiasf;lknsa;",
    },
    caseStudy: {
      paragraph:
        "We refreshed a Sarasota kitchen with colorful slab fronts, hidden storage, and a durable sintered-stone top. The trend-forward look still meets Florida’s performance needs.",
    },
    howWeDoIt: {
      heading: "How We Remove Mold & Restore After Floods",
      steps: [
        {
          number: 1,
          title: "Emergency Response",
          summary: "Immediate water extraction and site stabilization.",
          bullets: [
            "Deploy pumps & extractors",
            "Install dehumidifiers",
            "Remove saturated drywall",
          ],
          media: {
            src: "/images/process/flood-step-1.jpg",
            alt: "Emergency response",
          },
        },
        {
          number: 2,
          title: "Drying & Dehumidification",
          summary: "Control moisture levels to prevent further growth.",
          bullets: [
            "Commercial fans and dehumidifiers",
            "Monitor with moisture meters",
            "Target hidden wall cavities",
          ],
          media: {
            src: "/images/process/flood-step-2.jpg",
            alt: "Drying process",
          },
        },
        {
          number: 3,
          title: "Build & Implementation",
          summary:
            "Licensed pros execute the plan with quality control, inspections, and steady communication.",
          bullets: [
            "Scheduled, insured crews",
            "Progress updates & inspections",
            "Adjustments handled quickly",
          ],
          media: {
            src: "/images/process/step-3.jpg",
            alt: "Build & Implementation",
          },
        },
        {
          number: 4,
          title: "Handover & Support",
          summary:
            "Final QA, documentation, and care guidance so your project lasts and stays compliant.",
          bullets: [
            "Walkthrough & punch list",
            "Warranty & care guide",
            "Ongoing support",
          ],
          media: {
            src: "/images/process/step-4.jpg",
            alt: "Handover & Support",
          },
        },
      ],
    },
  },
  {
    id: 15,
    title: "Choosing the Right Countertop",
    excerpt:
      "Granite, Quartz, Laminate, Butcher Block and More — A Florida-focused guide to finding the perfect kitchen surface.",
    banner: {
      image: {
        src: "/lovable-uploads/blog15.jpg",
        alt: "Choosing the Right Countertop",
      },
    },
    Desc: {
      paragraph: "kdsjbfkd;n;aknsd;ofhoiasf;lknsa;",
    },
    caseStudy: {
      paragraph:
        "In a coastal condo, we replaced etched marble with quartz and upgraded caulks and backsplashes. The new surface shrugs off stains and salt-air moisture.",
    },
    howWeDoIt: {
      heading: "How We Remove Mold & Restore After Floods",
      steps: [
        {
          number: 1,
          title: "Emergency Response",
          summary: "Immediate water extraction and site stabilization.",
          bullets: [
            "Deploy pumps & extractors",
            "Install dehumidifiers",
            "Remove saturated drywall",
          ],
          media: {
            src: "/images/process/flood-step-1.jpg",
            alt: "Emergency response",
          },
        },
        {
          number: 2,
          title: "Drying & Dehumidification",
          summary: "Control moisture levels to prevent further growth.",
          bullets: [
            "Commercial fans and dehumidifiers",
            "Monitor with moisture meters",
            "Target hidden wall cavities",
          ],
          media: {
            src: "/images/process/flood-step-2.jpg",
            alt: "Drying process",
          },
        },
        {
          number: 3,
          title: "Build & Implementation",
          summary:
            "Licensed pros execute the plan with quality control, inspections, and steady communication.",
          bullets: [
            "Scheduled, insured crews",
            "Progress updates & inspections",
            "Adjustments handled quickly",
          ],
          media: {
            src: "/images/process/step-3.jpg",
            alt: "Build & Implementation",
          },
        },
        {
          number: 4,
          title: "Handover & Support",
          summary:
            "Final QA, documentation, and care guidance so your project lasts and stays compliant.",
          bullets: [
            "Walkthrough & punch list",
            "Warranty & care guide",
            "Ongoing support",
          ],
          media: {
            src: "/images/process/step-4.jpg",
            alt: "Handover & Support",
          },
        },
      ],
    },
  },
  {
    id: 16,
    title: "Top 5 Kitchen Remodeling Mistakes to Avoid",
    excerpt:
      "Avoid regrets and costly do-overs—plan your kitchen remodel the smart way with Ridgeback Builders.",
    banner: {
      image: {
        src: "/lovable-uploads/blog16.jpg",
        alt: "Top 5 Kitchen Remodeling Mistakes to Avoid",
      },
    },
    Desc: {
      paragraph: "kdsjbfkd;n;aknsd;ofhoiasf;lknsa;",
    },
    caseStudy: {
      paragraph:
        "A hasty DIY layout left a homeowner with poor workflow and weak ventilation. We re-planned zones, upsized the range hood, and corrected lighting—transforming daily use.",
    },
    howWeDoIt: {
      heading: "How We Remove Mold & Restore After Floods",
      steps: [
        {
          number: 1,
          title: "Emergency Response",
          summary: "Immediate water extraction and site stabilization.",
          bullets: [
            "Deploy pumps & extractors",
            "Install dehumidifiers",
            "Remove saturated drywall",
          ],
          media: {
            src: "/images/process/flood-step-1.jpg",
            alt: "Emergency response",
          },
        },
        {
          number: 2,
          title: "Drying & Dehumidification",
          summary: "Control moisture levels to prevent further growth.",
          bullets: [
            "Commercial fans and dehumidifiers",
            "Monitor with moisture meters",
            "Target hidden wall cavities",
          ],
          media: {
            src: "/images/process/flood-step-2.jpg",
            alt: "Drying process",
          },
        },
        {
          number: 3,
          title: "Build & Implementation",
          summary:
            "Licensed pros execute the plan with quality control, inspections, and steady communication.",
          bullets: [
            "Scheduled, insured crews",
            "Progress updates & inspections",
            "Adjustments handled quickly",
          ],
          media: {
            src: "/images/process/step-3.jpg",
            alt: "Build & Implementation",
          },
        },
        {
          number: 4,
          title: "Handover & Support",
          summary:
            "Final QA, documentation, and care guidance so your project lasts and stays compliant.",
          bullets: [
            "Walkthrough & punch list",
            "Warranty & care guide",
            "Ongoing support",
          ],
          media: {
            src: "/images/process/step-4.jpg",
            alt: "Handover & Support",
          },
        },
      ],
    },
  },
  {
    id: 17,
    title: "Should You Remodel or Replace Cabinets? Pros and Cons",
    excerpt:
      "A guide from Ridgeback Builders to help Florida homeowners decide between cabinet refacing and full replacement.",
    banner: {
      image: {
        src: "/lovable-uploads/blog17.jpg",
        alt: "Should You Remodel or Replace Cabinets? Pros and Cons",
      },
    },
    Desc: {
      paragraph: "kdsjbfkd;n;aknsd;ofhoiasf;lknsa;",
    },
    caseStudy: {
      paragraph:
        "We saved a Naples kitchen by refacing solid boxes with new doors and soft-close hardware while upgrading drawers. The look is fresh at half the replacement cost.",
    },
    howWeDoIt: {
      heading: "How We Remove Mold & Restore After Floods",
      steps: [
        {
          number: 1,
          title: "Emergency Response",
          summary: "Immediate water extraction and site stabilization.",
          bullets: [
            "Deploy pumps & extractors",
            "Install dehumidifiers",
            "Remove saturated drywall",
          ],
          media: {
            src: "/images/process/flood-step-1.jpg",
            alt: "Emergency response",
          },
        },
        {
          number: 2,
          title: "Drying & Dehumidification",
          summary: "Control moisture levels to prevent further growth.",
          bullets: [
            "Commercial fans and dehumidifiers",
            "Monitor with moisture meters",
            "Target hidden wall cavities",
          ],
          media: {
            src: "/images/process/flood-step-2.jpg",
            alt: "Drying process",
          },
        },
        {
          number: 3,
          title: "Build & Implementation",
          summary:
            "Licensed pros execute the plan with quality control, inspections, and steady communication.",
          bullets: [
            "Scheduled, insured crews",
            "Progress updates & inspections",
            "Adjustments handled quickly",
          ],
          media: {
            src: "/images/process/step-3.jpg",
            alt: "Build & Implementation",
          },
        },
        {
          number: 4,
          title: "Handover & Support",
          summary:
            "Final QA, documentation, and care guidance so your project lasts and stays compliant.",
          bullets: [
            "Walkthrough & punch list",
            "Warranty & care guide",
            "Ongoing support",
          ],
          media: {
            src: "/images/process/step-4.jpg",
            alt: "Handover & Support",
          },
        },
      ],
    },
  },
  {
    id: 18,
    title: "Lighting Tips 101 — Transform Your Space",
    excerpt:
      "Ridgeback Builders shares lighting strategies to elevate every room in your Florida home with smart, stylish, and functional design.",
    banner: {
      image: {
        src: "/lovable-uploads/blog18.jpg",
        alt: "Lighting Tips 101 — Transform Your Space",
      },
    },
    Desc: {
      paragraph: "kdsjbfkd;n;aknsd;ofhoiasf;lknsa;",
    },
    caseStudy: {
      paragraph:
        "A dim living area in Estero came alive after we layered ambient cans, task lighting, and warm dimmers—balanced for evening comfort and bright daytime use.",
    },
    howWeDoIt: {
      heading: "How We Remove Mold & Restore After Floods",
      steps: [
        {
          number: 1,
          title: "Emergency Response",
          summary: "Immediate water extraction and site stabilization.",
          bullets: [
            "Deploy pumps & extractors",
            "Install dehumidifiers",
            "Remove saturated drywall",
          ],
          media: {
            src: "/images/process/flood-step-1.jpg",
            alt: "Emergency response",
          },
        },
        {
          number: 2,
          title: "Drying & Dehumidification",
          summary: "Control moisture levels to prevent further growth.",
          bullets: [
            "Commercial fans and dehumidifiers",
            "Monitor with moisture meters",
            "Target hidden wall cavities",
          ],
          media: {
            src: "/images/process/flood-step-2.jpg",
            alt: "Drying process",
          },
        },
        {
          number: 3,
          title: "Build & Implementation",
          summary:
            "Licensed pros execute the plan with quality control, inspections, and steady communication.",
          bullets: [
            "Scheduled, insured crews",
            "Progress updates & inspections",
            "Adjustments handled quickly",
          ],
          media: {
            src: "/images/process/step-3.jpg",
            alt: "Build & Implementation",
          },
        },
        {
          number: 4,
          title: "Handover & Support",
          summary:
            "Final QA, documentation, and care guidance so your project lasts and stays compliant.",
          bullets: [
            "Walkthrough & punch list",
            "Warranty & care guide",
            "Ongoing support",
          ],
          media: {
            src: "/images/process/step-4.jpg",
            alt: "Handover & Support",
          },
        },
      ],
    },
  },
  {
    id: 19,
    title: "Top 2025 Bathroom Design Trends",
    excerpt:
      "From spa-inspired serenity to smart tech, these are the bathroom upgrades defining 2025—brought to life by Ridgeback Builders.",
    banner: {
      image: {
        src: "/lovable-uploads/blog19.jpg",
        alt: "Top 2025 Bathroom Design Trends",
      },
    },
    Desc: {
      paragraph: "kdsjbfkd;n;aknsd;ofhoiasf;lknsa;",
    },
    caseStudy: {
      paragraph:
        "We modernized a guest bath with micro-cement walls, a floating vanity, and warm LED mirrors—delivering a spa feel that’s easy to maintain in Florida humidity.",
    },
    howWeDoIt: {
      heading: "How We Remove Mold & Restore After Floods",
      steps: [
        {
          number: 1,
          title: "Emergency Response",
          summary: "Immediate water extraction and site stabilization.",
          bullets: [
            "Deploy pumps & extractors",
            "Install dehumidifiers",
            "Remove saturated drywall",
          ],
          media: {
            src: "/images/process/flood-step-1.jpg",
            alt: "Emergency response",
          },
        },
        {
          number: 2,
          title: "Drying & Dehumidification",
          summary: "Control moisture levels to prevent further growth.",
          bullets: [
            "Commercial fans and dehumidifiers",
            "Monitor with moisture meters",
            "Target hidden wall cavities",
          ],
          media: {
            src: "/images/process/flood-step-2.jpg",
            alt: "Drying process",
          },
        },
        {
          number: 3,
          title: "Build & Implementation",
          summary:
            "Licensed pros execute the plan with quality control, inspections, and steady communication.",
          bullets: [
            "Scheduled, insured crews",
            "Progress updates & inspections",
            "Adjustments handled quickly",
          ],
          media: {
            src: "/images/process/step-3.jpg",
            alt: "Build & Implementation",
          },
        },
        {
          number: 4,
          title: "Handover & Support",
          summary:
            "Final QA, documentation, and care guidance so your project lasts and stays compliant.",
          bullets: [
            "Walkthrough & punch list",
            "Warranty & care guide",
            "Ongoing support",
          ],
          media: {
            src: "/images/process/step-4.jpg",
            alt: "Handover & Support",
          },
        },
      ],
    },
  },
  {
    id: 20,
    title: "Shower vs. Bathtub: Which Adds More Value to Your Home?",
    excerpt:
      "Ridgeback Builders helps you decide which upgrade is smarter—based on lifestyle, layout, and resale appeal in Florida.",
    banner: {
      image: {
        src: "/lovable-uploads/blog20.jpg",
        alt: "Shower vs. Bathtub: Which Adds More Value to Your Home?",
      },
    },
    Desc: {
      paragraph: "kdsjbfkd;n;aknsd;ofhoiasf;lknsa;",
    },
    caseStudy: {
      paragraph:
        "We replaced a rarely used tub with a walk-in shower and niche storage. The new layout fits daily life and improved resale interest during showings.",
    },
    howWeDoIt: {
      heading: "How We Remove Mold & Restore After Floods",
      steps: [
        {
          number: 1,
          title: "Emergency Response",
          summary: "Immediate water extraction and site stabilization.",
          bullets: [
            "Deploy pumps & extractors",
            "Install dehumidifiers",
            "Remove saturated drywall",
          ],
          media: {
            src: "/images/process/flood-step-1.jpg",
            alt: "Emergency response",
          },
        },
        {
          number: 2,
          title: "Drying & Dehumidification",
          summary: "Control moisture levels to prevent further growth.",
          bullets: [
            "Commercial fans and dehumidifiers",
            "Monitor with moisture meters",
            "Target hidden wall cavities",
          ],
          media: {
            src: "/images/process/flood-step-2.jpg",
            alt: "Drying process",
          },
        },
        {
          number: 3,
          title: "Build & Implementation",
          summary:
            "Licensed pros execute the plan with quality control, inspections, and steady communication.",
          bullets: [
            "Scheduled, insured crews",
            "Progress updates & inspections",
            "Adjustments handled quickly",
          ],
          media: {
            src: "/images/process/step-3.jpg",
            alt: "Build & Implementation",
          },
        },
        {
          number: 4,
          title: "Handover & Support",
          summary:
            "Final QA, documentation, and care guidance so your project lasts and stays compliant.",
          bullets: [
            "Walkthrough & punch list",
            "Warranty & care guide",
            "Ongoing support",
          ],
          media: {
            src: "/images/process/step-4.jpg",
            alt: "Handover & Support",
          },
        },
      ],
    },
  },
  {
    id: 21,
    title: "How to Turn a Small Florida Bathroom into a Spa Retreat",
    excerpt:
      "Transform even the smallest bathroom into a luxurious, spa-like escape using natural tones, smart lighting, and Florida-friendly materials.",
    banner: {
      image: {
        src: "/lovable-uploads/blog21.jpg",
        alt: "How to Turn a Small Florida Bathroom into a Spa Retreat",
      },
    },
    Desc: {
      paragraph: "kdsjbfkd;n;aknsd;ofhoiasf;lknsa;",
    },
    caseStudy: {
      paragraph:
        "A 5'×8' bath in Tampa gained floating storage, a light palette, and a frameless shower. Careful lighting and ventilation solved the cramped, humid feel.",
    },
    howWeDoIt: {
      heading: "How We Remove Mold & Restore After Floods",
      steps: [
        {
          number: 1,
          title: "Emergency Response",
          summary: "Immediate water extraction and site stabilization.",
          bullets: [
            "Deploy pumps & extractors",
            "Install dehumidifiers",
            "Remove saturated drywall",
          ],
          media: {
            src: "/images/process/flood-step-1.jpg",
            alt: "Emergency response",
          },
        },
        {
          number: 2,
          title: "Drying & Dehumidification",
          summary: "Control moisture levels to prevent further growth.",
          bullets: [
            "Commercial fans and dehumidifiers",
            "Monitor with moisture meters",
            "Target hidden wall cavities",
          ],
          media: {
            src: "/images/process/flood-step-2.jpg",
            alt: "Drying process",
          },
        },
        {
          number: 3,
          title: "Build & Implementation",
          summary:
            "Licensed pros execute the plan with quality control, inspections, and steady communication.",
          bullets: [
            "Scheduled, insured crews",
            "Progress updates & inspections",
            "Adjustments handled quickly",
          ],
          media: {
            src: "/images/process/step-3.jpg",
            alt: "Build & Implementation",
          },
        },
        {
          number: 4,
          title: "Handover & Support",
          summary:
            "Final QA, documentation, and care guidance so your project lasts and stays compliant.",
          bullets: [
            "Walkthrough & punch list",
            "Warranty & care guide",
            "Ongoing support",
          ],
          media: {
            src: "/images/process/step-4.jpg",
            alt: "Handover & Support",
          },
        },
      ],
    },
  },
  {
    id: 22,
    title: "Aging in Place: Senior-Safe Bathroom Remodeling for Florida Homes",
    excerpt:
      "Upgrade your bathroom for safety, comfort, and independence with Florida-friendly aging-in-place remodeling tips.",
    banner: {
      image: {
        src: "/lovable-uploads/blog22.jpg",
        alt: "Aging in Place: Senior-Safe Bathroom Remodeling for Florida Homes",
      },
    },
    Desc: {
      paragraph: "kdsjbfkd;n;aknsd;ofhoiasf;lknsa;",
    },
    caseStudy: {
      paragraph:
        "We retrofitted a Cape Coral bath with a curbless shower, grab bars, anti-slip tile, and bright, glare-free lighting—allowing the owners to remain comfortably at home.",
    },
    howWeDoIt: {
      heading: "How We Remove Mold & Restore After Floods",
      steps: [
        {
          number: 1,
          title: "Emergency Response",
          summary: "Immediate water extraction and site stabilization.",
          bullets: [
            "Deploy pumps & extractors",
            "Install dehumidifiers",
            "Remove saturated drywall",
          ],
          media: {
            src: "/images/process/flood-step-1.jpg",
            alt: "Emergency response",
          },
        },
        {
          number: 2,
          title: "Drying & Dehumidification",
          summary: "Control moisture levels to prevent further growth.",
          bullets: [
            "Commercial fans and dehumidifiers",
            "Monitor with moisture meters",
            "Target hidden wall cavities",
          ],
          media: {
            src: "/images/process/flood-step-2.jpg",
            alt: "Drying process",
          },
        },
        {
          number: 3,
          title: "Build & Implementation",
          summary:
            "Licensed pros execute the plan with quality control, inspections, and steady communication.",
          bullets: [
            "Scheduled, insured crews",
            "Progress updates & inspections",
            "Adjustments handled quickly",
          ],
          media: {
            src: "/images/process/step-3.jpg",
            alt: "Build & Implementation",
          },
        },
        {
          number: 4,
          title: "Handover & Support",
          summary:
            "Final QA, documentation, and care guidance so your project lasts and stays compliant.",
          bullets: [
            "Walkthrough & punch list",
            "Warranty & care guide",
            "Ongoing support",
          ],
          media: {
            src: "/images/process/step-4.jpg",
            alt: "Handover & Support",
          },
        },
      ],
    },
  },
  {
    id: 23,
    title: "Ventilation in Florida Bathrooms: How to Prevent Mold & Mildew",
    excerpt:
      "Protect your bathroom from Florida humidity with proper exhaust fans, materials, and design strategies from Ridgeback Builders.",
    banner: {
      image: {
        src: "/lovable-uploads/blog23.jpg",
        alt: "Ventilation in Florida Bathrooms: How to Prevent Mold & Mildew",
      },
    },
    Desc: {
      paragraph: "kdsjbfkd;n;aknsd;ofhoiasf;lknsa;",
    },
    caseStudy: {
      paragraph:
        "We solved recurring mildew by upsizing the bath fan, rerouting ducting to a roof cap, and sealing penetrations—paired with mold-resistant paint for a lasting fix.",
    },
    howWeDoIt: {
      heading: "How We Remove Mold & Restore After Floods",
      steps: [
        {
          number: 1,
          title: "Emergency Response",
          summary: "Immediate water extraction and site stabilization.",
          bullets: [
            "Deploy pumps & extractors",
            "Install dehumidifiers",
            "Remove saturated drywall",
          ],
          media: {
            src: "/images/process/flood-step-1.jpg",
            alt: "Emergency response",
          },
        },
        {
          number: 2,
          title: "Drying & Dehumidification",
          summary: "Control moisture levels to prevent further growth.",
          bullets: [
            "Commercial fans and dehumidifiers",
            "Monitor with moisture meters",
            "Target hidden wall cavities",
          ],
          media: {
            src: "/images/process/flood-step-2.jpg",
            alt: "Drying process",
          },
        },
        {
          number: 3,
          title: "Build & Implementation",
          summary:
            "Licensed pros execute the plan with quality control, inspections, and steady communication.",
          bullets: [
            "Scheduled, insured crews",
            "Progress updates & inspections",
            "Adjustments handled quickly",
          ],
          media: {
            src: "/images/process/step-3.jpg",
            alt: "Build & Implementation",
          },
        },
        {
          number: 4,
          title: "Handover & Support",
          summary:
            "Final QA, documentation, and care guidance so your project lasts and stays compliant.",
          bullets: [
            "Walkthrough & punch list",
            "Warranty & care guide",
            "Ongoing support",
          ],
          media: {
            src: "/images/process/step-4.jpg",
            alt: "Handover & Support",
          },
        },
      ],
    },
  },
  {
    id: 24,
    title: "Bathroom Remodeling Under $10K in Florida: Yes, It’s Possible",
    excerpt:
      "Remodel your bathroom on a $10K budget with expert tips from Ridgeback Builders—no sacrifice in style or function.",
    banner: {
      image: {
        src: "/lovable-uploads/blog24.jpg",
        alt: "Bathroom Remodeling Under $10K in Florida: Yes, It’s Possible",
      },
    },
    Desc: {
      paragraph: "kdsjbfkd;n;aknsd;ofhoiasf;lknsa;",
    },
    caseStudy: {
      paragraph:
        "A budget-wise refresh in Lehigh Acres used stock vanity sizes, LVP, and a prefabricated shower kit—high impact, low cost, zero corners cut on waterproofing.",
    },
    howWeDoIt: {
      heading: "How We Remove Mold & Restore After Floods",
      steps: [
        {
          number: 1,
          title: "Emergency Response",
          summary: "Immediate water extraction and site stabilization.",
          bullets: [
            "Deploy pumps & extractors",
            "Install dehumidifiers",
            "Remove saturated drywall",
          ],
          media: {
            src: "/images/process/flood-step-1.jpg",
            alt: "Emergency response",
          },
        },
        {
          number: 2,
          title: "Drying & Dehumidification",
          summary: "Control moisture levels to prevent further growth.",
          bullets: [
            "Commercial fans and dehumidifiers",
            "Monitor with moisture meters",
            "Target hidden wall cavities",
          ],
          media: {
            src: "/images/process/flood-step-2.jpg",
            alt: "Drying process",
          },
        },
        {
          number: 3,
          title: "Build & Implementation",
          summary:
            "Licensed pros execute the plan with quality control, inspections, and steady communication.",
          bullets: [
            "Scheduled, insured crews",
            "Progress updates & inspections",
            "Adjustments handled quickly",
          ],
          media: {
            src: "/images/process/step-3.jpg",
            alt: "Build & Implementation",
          },
        },
        {
          number: 4,
          title: "Handover & Support",
          summary:
            "Final QA, documentation, and care guidance so your project lasts and stays compliant.",
          bullets: [
            "Walkthrough & punch list",
            "Warranty & care guide",
            "Ongoing support",
          ],
          media: {
            src: "/images/process/step-4.jpg",
            alt: "Handover & Support",
          },
        },
      ],
    },
  },
  {
    id: 25,
    title: "How to Transform Your Outdoor Space Without Breaking HOA Rules",
    excerpt:
      "Ridgeback Builders helps you upgrade your backyard in Florida—without violating HOA rules. Here’s how to stay compliant and creative.",
    banner: {
      image: {
        src: "/lovable-uploads/blog25.jpg",
        alt: "How to Transform Your Outdoor Space Without Breaking HOA Rules",
      },
    },
    Desc: {
      paragraph: "kdsjbfkd;n;aknsd;ofhoiasf;lknsa;",
    },
    caseStudy: {
      paragraph:
        "We delivered a paver patio, low-glare lighting, and compliant fencing for a strict HOA. Our pre-submittal package earned fast approval and zero fines.",
    },
    howWeDoIt: {
      heading: "How We Remove Mold & Restore After Floods",
      steps: [
        {
          number: 1,
          title: "Emergency Response",
          summary: "Immediate water extraction and site stabilization.",
          bullets: [
            "Deploy pumps & extractors",
            "Install dehumidifiers",
            "Remove saturated drywall",
          ],
          media: {
            src: "/images/process/flood-step-1.jpg",
            alt: "Emergency response",
          },
        },
        {
          number: 2,
          title: "Drying & Dehumidification",
          summary: "Control moisture levels to prevent further growth.",
          bullets: [
            "Commercial fans and dehumidifiers",
            "Monitor with moisture meters",
            "Target hidden wall cavities",
          ],
          media: {
            src: "/images/process/flood-step-2.jpg",
            alt: "Drying process",
          },
        },
        {
          number: 3,
          title: "Build & Implementation",
          summary:
            "Licensed pros execute the plan with quality control, inspections, and steady communication.",
          bullets: [
            "Scheduled, insured crews",
            "Progress updates & inspections",
            "Adjustments handled quickly",
          ],
          media: {
            src: "/images/process/step-3.jpg",
            alt: "Build & Implementation",
          },
        },
        {
          number: 4,
          title: "Handover & Support",
          summary:
            "Final QA, documentation, and care guidance so your project lasts and stays compliant.",
          bullets: [
            "Walkthrough & punch list",
            "Warranty & care guide",
            "Ongoing support",
          ],
          media: {
            src: "/images/process/step-4.jpg",
            alt: "Handover & Support",
          },
        },
      ],
    },
  },
  {
    id: 26,
    title: "Top 2025 Florida Outdoor Kitchen Design Trends",
    excerpt:
      "See what’s hot in Florida outdoor kitchens for 2025—grills, materials, smart tech, and layouts that wow guests and survive the weather.",
    banner: {
      image: {
        src: "/lovable-uploads/blog26.jpg",
        alt: "Top 2025 Florida Outdoor Kitchen Design Trends",
      },
    },
    Desc: {
      paragraph: "kdsjbfkd;n;aknsd;ofhoiasf;lknsa;",
    },
    caseStudy: {
      paragraph:
        "A Tampa lanai got a trend-forward makeover: porcelain-clad cabinets, ceramic smokers, and app-controlled lighting—built to handle heat and storms.",
    },
    howWeDoIt: {
      heading: "How We Remove Mold & Restore After Floods",
      steps: [
        {
          number: 1,
          title: "Emergency Response",
          summary: "Immediate water extraction and site stabilization.",
          bullets: [
            "Deploy pumps & extractors",
            "Install dehumidifiers",
            "Remove saturated drywall",
          ],
          media: {
            src: "/images/process/flood-step-1.jpg",
            alt: "Emergency response",
          },
        },
        {
          number: 2,
          title: "Drying & Dehumidification",
          summary: "Control moisture levels to prevent further growth.",
          bullets: [
            "Commercial fans and dehumidifiers",
            "Monitor with moisture meters",
            "Target hidden wall cavities",
          ],
          media: {
            src: "/images/process/flood-step-2.jpg",
            alt: "Drying process",
          },
        },
        {
          number: 3,
          title: "Build & Implementation",
          summary:
            "Licensed pros execute the plan with quality control, inspections, and steady communication.",
          bullets: [
            "Scheduled, insured crews",
            "Progress updates & inspections",
            "Adjustments handled quickly",
          ],
          media: {
            src: "/images/process/step-3.jpg",
            alt: "Build & Implementation",
          },
        },
        {
          number: 4,
          title: "Handover & Support",
          summary:
            "Final QA, documentation, and care guidance so your project lasts and stays compliant.",
          bullets: [
            "Walkthrough & punch list",
            "Warranty & care guide",
            "Ongoing support",
          ],
          media: {
            src: "/images/process/step-4.jpg",
            alt: "Handover & Support",
          },
        },
      ],
    },
  },
  {
    id: 27,
    title: "Can You Build a Shed Without a Permit in Florida?",
    excerpt:
      "Yes—but only in certain cases. Learn when you need a shed permit, and how Ridgeback Builders can help you stay legal and stress-free.",
    banner: {
      image: {
        src: "/lovable-uploads/blog27.jpg",
        alt: "Can You Build a Shed Without a Permit in Florida?",
      },
    },
    Desc: {
      paragraph: "kdsjbfkd;n;aknsd;ofhoiasf;lknsa;",
    },
    caseStudy: {
      paragraph:
        "We sited a code-exempt storage shed with the right setbacks and anchors. The owner avoided permit delays and met HOA rules on the first pass.",
    },
    howWeDoIt: {
      heading: "How We Remove Mold & Restore After Floods",
      steps: [
        {
          number: 1,
          title: "Emergency Response",
          summary: "Immediate water extraction and site stabilization.",
          bullets: [
            "Deploy pumps & extractors",
            "Install dehumidifiers",
            "Remove saturated drywall",
          ],
          media: {
            src: "/images/process/flood-step-1.jpg",
            alt: "Emergency response",
          },
        },
        {
          number: 2,
          title: "Drying & Dehumidification",
          summary: "Control moisture levels to prevent further growth.",
          bullets: [
            "Commercial fans and dehumidifiers",
            "Monitor with moisture meters",
            "Target hidden wall cavities",
          ],
          media: {
            src: "/images/process/flood-step-2.jpg",
            alt: "Drying process",
          },
        },
        {
          number: 3,
          title: "Build & Implementation",
          summary:
            "Licensed pros execute the plan with quality control, inspections, and steady communication.",
          bullets: [
            "Scheduled, insured crews",
            "Progress updates & inspections",
            "Adjustments handled quickly",
          ],
          media: {
            src: "/images/process/step-3.jpg",
            alt: "Build & Implementation",
          },
        },
        {
          number: 4,
          title: "Handover & Support",
          summary:
            "Final QA, documentation, and care guidance so your project lasts and stays compliant.",
          bullets: [
            "Walkthrough & punch list",
            "Warranty & care guide",
            "Ongoing support",
          ],
          media: {
            src: "/images/process/step-4.jpg",
            alt: "Handover & Support",
          },
        },
      ],
    },
  },
  {
    id: 28,
    title: "How to Build a Concrete Pad for a Gazebo or Hot Tub",
    excerpt:
      "Before you install that spa or backyard gazebo, you need a strong, level, Florida-friendly concrete pad. Here's how Ridgeback Builders does it right.",
    banner: {
      image: {
        src: "/lovable-uploads/blog28.jpg",
        alt: "How to Build a Concrete Pad for a Gazebo or Hot Tub",
      },
    },
    Desc: {
      paragraph: "kdsjbfkd;n;aknsd;ofhoiasf;lknsa;",
    },
    caseStudy: {
      paragraph:
        "We formed and poured a reinforced pad with proper drainage, isolation joints, and uplift anchors—ready for a heavy spa and hurricane season.",
    },
    howWeDoIt: {
      heading: "How We Remove Mold & Restore After Floods",
      steps: [
        {
          number: 1,
          title: "Emergency Response",
          summary: "Immediate water extraction and site stabilization.",
          bullets: [
            "Deploy pumps & extractors",
            "Install dehumidifiers",
            "Remove saturated drywall",
          ],
          media: {
            src: "/images/process/flood-step-1.jpg",
            alt: "Emergency response",
          },
        },
        {
          number: 2,
          title: "Drying & Dehumidification",
          summary: "Control moisture levels to prevent further growth.",
          bullets: [
            "Commercial fans and dehumidifiers",
            "Monitor with moisture meters",
            "Target hidden wall cavities",
          ],
          media: {
            src: "/images/process/flood-step-2.jpg",
            alt: "Drying process",
          },
        },
        {
          number: 3,
          title: "Build & Implementation",
          summary:
            "Licensed pros execute the plan with quality control, inspections, and steady communication.",
          bullets: [
            "Scheduled, insured crews",
            "Progress updates & inspections",
            "Adjustments handled quickly",
          ],
          media: {
            src: "/images/process/step-3.jpg",
            alt: "Build & Implementation",
          },
        },
        {
          number: 4,
          title: "Handover & Support",
          summary:
            "Final QA, documentation, and care guidance so your project lasts and stays compliant.",
          bullets: [
            "Walkthrough & punch list",
            "Warranty & care guide",
            "Ongoing support",
          ],
          media: {
            src: "/images/process/step-4.jpg",
            alt: "Handover & Support",
          },
        },
      ],
    },
  },
  {
    id: 29,
    title: "Can You Add a Driveway Extension Without HOA or City Approval?",
    excerpt:
      "In Florida, even a simple driveway expansion can turn into a permitting nightmare. Here's how to do it legally and beautifully.",
    banner: {
      image: {
        src: "/lovable-uploads/blog29.jpg",
        alt: "Can You Add a Driveway Extension Without HOA or City Approval?",
      },
    },
    Desc: {
      paragraph: "kdsjbfkd;n;aknsd;ofhoiasf;lknsa;",
    },
    caseStudy: {
      paragraph:
        "For a Cape Coral client, we designed a permeable paver extension with proper drainage. HOA and city approvals were secured with a clean submittal set.",
    },
    howWeDoIt: {
      heading: "How We Remove Mold & Restore After Floods",
      steps: [
        {
          number: 1,
          title: "Emergency Response",
          summary: "Immediate water extraction and site stabilization.",
          bullets: [
            "Deploy pumps & extractors",
            "Install dehumidifiers",
            "Remove saturated drywall",
          ],
          media: {
            src: "/images/process/flood-step-1.jpg",
            alt: "Emergency response",
          },
        },
        {
          number: 2,
          title: "Drying & Dehumidification",
          summary: "Control moisture levels to prevent further growth.",
          bullets: [
            "Commercial fans and dehumidifiers",
            "Monitor with moisture meters",
            "Target hidden wall cavities",
          ],
          media: {
            src: "/images/process/flood-step-2.jpg",
            alt: "Drying process",
          },
        },
        {
          number: 3,
          title: "Build & Implementation",
          summary:
            "Licensed pros execute the plan with quality control, inspections, and steady communication.",
          bullets: [
            "Scheduled, insured crews",
            "Progress updates & inspections",
            "Adjustments handled quickly",
          ],
          media: {
            src: "/images/process/step-3.jpg",
            alt: "Build & Implementation",
          },
        },
        {
          number: 4,
          title: "Handover & Support",
          summary:
            "Final QA, documentation, and care guidance so your project lasts and stays compliant.",
          bullets: [
            "Walkthrough & punch list",
            "Warranty & care guide",
            "Ongoing support",
          ],
          media: {
            src: "/images/process/step-4.jpg",
            alt: "Handover & Support",
          },
        },
      ],
    },
  },
  {
    id: 30,
    title: "Backyard Projects That Add Property Value",
    excerpt:
      "From lanais to lighting, here are Florida backyard upgrades that boost lifestyle—and resale value.",
    banner: {
      image: {
        src: "/lovable-uploads/blog30.jpg",
        alt: "Backyard Projects That Add Property Value",
      },
    },
    Desc: {
      paragraph: "kdsjbfkd;n;aknsd;ofhoiasf;lknsa;",
    },
    caseStudy: {
      paragraph:
        "We combined a screened lanai, low-voltage lighting, and a compact outdoor kitchen to elevate daily living and appraisal value without overbuilding.",
    },
    howWeDoIt: {
      heading: "How We Remove Mold & Restore After Floods",
      steps: [
        {
          number: 1,
          title: "Emergency Response",
          summary: "Immediate water extraction and site stabilization.",
          bullets: [
            "Deploy pumps & extractors",
            "Install dehumidifiers",
            "Remove saturated drywall",
          ],
          media: {
            src: "/images/process/flood-step-1.jpg",
            alt: "Emergency response",
          },
        },
        {
          number: 2,
          title: "Drying & Dehumidification",
          summary: "Control moisture levels to prevent further growth.",
          bullets: [
            "Commercial fans and dehumidifiers",
            "Monitor with moisture meters",
            "Target hidden wall cavities",
          ],
          media: {
            src: "/images/process/flood-step-2.jpg",
            alt: "Drying process",
          },
        },
        {
          number: 3,
          title: "Build & Implementation",
          summary:
            "Licensed pros execute the plan with quality control, inspections, and steady communication.",
          bullets: [
            "Scheduled, insured crews",
            "Progress updates & inspections",
            "Adjustments handled quickly",
          ],
          media: {
            src: "/images/process/step-3.jpg",
            alt: "Build & Implementation",
          },
        },
        {
          number: 4,
          title: "Handover & Support",
          summary:
            "Final QA, documentation, and care guidance so your project lasts and stays compliant.",
          bullets: [
            "Walkthrough & punch list",
            "Warranty & care guide",
            "Ongoing support",
          ],
          media: {
            src: "/images/process/step-4.jpg",
            alt: "Handover & Support",
          },
        },
      ],
    },
  },
];
