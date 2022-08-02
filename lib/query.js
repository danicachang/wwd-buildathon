export const query = `{
    'about': *[_type == "aboutUs" && ("about" in tags)] { 
      "id": _id,
      title,
      highlight,
      description,
      tags
    },
    'aboutBuildathon': *[_type == "aboutBuildathon" && ("about" in tags)] { 
      "id": _id,
      title,
      highlight,
      description,
      tags
    },
    'aboutPartnerships': *[_type == "aboutBuildathon" && ("partnerships" in tags)] { 
      "id": _id,
      title,
      highlight,
      description,
      tags
    },
    'buildathonPeriod': *[_type == "buildathonPeriod"] { 
      "id": _id,
      startDate,
      endDate,
      remarks,
    },
    'buildathonGoals': *[_type == "aboutBuildathon" && ("goals" in tags)] { 
      "id": _id,
      title,
      highlight,
      description,
      tags
    },
    'faq': *[_type == "faq"] | order(order) { 
      "id": _id,
      question,
      description,
      order
    },
    'members': *[_type == "coreMember"] | order(order) { 
      "id": _id,
      name,
      image,
      role,
      description,
      "twitter": socials.twitter,
      "instagram": socials.instagram,
    },
    'otherNews': *[_type == "otherNews"] { 
      "id": _id,
      title,
      gallery,
      highlight,
      description,
    },
    'partnerships': *[_type == "partnership"] | order(paid, lower(name)) { 
      "id": _id,
      name,
      image,
      paid,
      scale,
      width
    },
    'pastEvents': *[_type == "pastEvents"] { 
      "id": _id,
      title,
      image,
      description,
    },
    'pricing': *[_type == "ticket"] | order(dateFrom) { 
      "id": _id,
      title,
      pricing,
      dateFrom,
      dateTill
    },
    'schedule': *[_type == "schedule"] | order(dateTime) { 
      "id": _id,
      activity,
      dateTime,
      "speakerName": speaker->name
    },
    'speakers': *[_type == "speaker"] | order(lower(name) asc) { 
      "id": _id, 
      image,
      name, 
      role,
      descriptions,
      "email": socials.email,
      "linkedin": socials.linkedin,
      "website": socials.website,
      "category": speakerCategory->category
    },
    'specialSpeakerCategory': *[_type == "speakerCategory" && paid] | order(lower(category)) { 
      "id": _id, 
      "name": category,
    },
    'speakerCategory': *[_type == "speakerCategory" && paid != true] | order(lower(category)) { 
      "id": _id, 
      "name": category,
    },
    'speakerTrack': *[_type == "speakerTrack"] | order(lower(speakerCategory) asc, lower(speaker) asc) { 
      "id": _id, 
      title,
      description, 
      speaker,
      "category": speakerCategory->category
    },
    'sponsorPerks': *[_type == "sponsorPerks"] | order(order) { 
      "id": _id, 
      perk,
      sponsorTier
    },
  }`;
