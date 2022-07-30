export const sortByDate = (a, b) => {
    return new Date(b.frontmatter.date) - new Date(a.frontmatter.date)
  }

  export const sortByDateMaps = (a, b) => {
    return new Date(b.date) - new Date(a.date)
  }

  export const onlyUnique = (value, index, self) => {
    return self.indexOf(value) === index;
  }