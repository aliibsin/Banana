
export const fetchSections = () => {
  return (
    $.ajax({
      method: "GET",
      url: "api/sections"
    })
  );
};

export const createSection = section => {
  return (
    $.ajax({
      method: "POST",
      url: "api/sections",
      data: {section}
    })
  )
}

export const updateSection = section => {
  return (
    $.ajax({
      method: "PATCH",
      url: `api/sections/${section.id}`,
      data: {section}
    })
  )
} 

export const deleteSection = sectionId => {
  return (
    $.ajax({
      method: "DELETE",
      url: `api/sections/${sectionId}`
    })
  )
}