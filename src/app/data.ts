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
      bullets: string[];
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
      paragraph: "kdsjbfkd;n;aknsd;ofhoiasf;lknsa;",
    },
    caseStudy: {
      paragraph:
        "A Naples galley kitchen felt cramped and dated. We opened a non-load-bearing wall, added impact window upgrades, and installed moisture-tolerant cabinets with quartz counters. The result: a brighter cook space with better ventilation and smarter storage.",
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
      paragraph: "kdsjbfkd;n;aknsd;ofhoiasf;lknsa;",
    },
    caseStudy: {
      paragraph:
        "In Fort Myers, we built a lanai kitchen with marine-grade cabinets, sealed outlets, proper grill ventilation, and heat-resistant counters. Entertaining is easier, clean-up is quicker, and the finishes stand up to rain and salt air.",
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
      paragraph: "kdsjbfkd;n;aknsd;ofhoiasf;lknsa;",
    },
    caseStudy: {
      paragraph:
        "A Tampa remodel needed a kitchen pass-through. Our structural review confirmed a bearing wall; we installed a properly sized LVL beam with permits and inspections, delivering an open layout without compromising safety.",
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
      paragraph: "kdsjbfkd;n;aknsd;ofhoiasf;lknsa;",
    },
    caseStudy: {
      paragraph:
        'We replaced a sinking driveway in Port Charlotte with a compacted base, 4"–5" slab, fiber reinforcement, and clean control joints. Proper curing minimized cracking and the apron now drains correctly during heavy rains.',
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
      paragraph: "kdsjbfkd;n;aknsd;ofhoiasf;lknsa;",
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
      paragraph: "kdsjbfkd;n;aknsd;ofhoiasf;lknsa;",
    },
    caseStudy: {
      paragraph:
        "We added a side entry to a Bonita Springs garage by framing a new opening with an engineered header, installing an impact-rated door, and flashing the assembly to keep water out—fully permitted and inspected.",
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
      paragraph: "kdsjbfkd;n;aknsd;ofhoiasf;lknsa;",
    },
    caseStudy: {
      paragraph:
        "We converted a rear suite into a rentable efficiency with a kitchenette, dedicated subpanel, legal egress, and sound attenuation. The unit rents quickly and complies with local zoning.",
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
      paragraph: "kdsjbfkd;n;aknsd;ofhoiasf;lknsa;",
    },
    caseStudy: {
      paragraph:
        "A family in North Port selected a semi-custom plan we tailored for wind loads, energy performance, and coastal finishes. The home passed inspections smoothly and came in on budget.",
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
      paragraph: "kdsjbfkd;n;aknsd;ofhoiasf;lknsa;",
    },
    caseStudy: {
      paragraph:
        "On a rural parcel outside Sarasota, we coordinated surveys, soil tests, septic design, and driveway access before breaking ground—preventing expensive mid-build surprises.",
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
      paragraph: "kdsjbfkd;n;aknsd;ofhoiasf;lknsa;",
    },
    caseStudy: {
      paragraph:
        "Through value engineering on a Fort Myers renovation, we redirected budget from low-impact finishes to better insulation and high-durability surfaces—reducing maintenance without sacrificing style.",
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
