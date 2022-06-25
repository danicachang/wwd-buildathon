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
    'members': *[_type == "coreMember"] { 
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
   'partnerships': *[_type == "aboutBuildathon" && ("partnerships" in tags)] { 
      "id": _id,
      title,
      highlight,
      description,
      tags
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
    'speakers': *[_type == "speaker"] { 
      "id": _id, 
      image,
      name, 
      role,
      description,
      "email": socials.email,
      "linkedin": socials.linkedin,
      "website": socials.website
    },
  }`;
