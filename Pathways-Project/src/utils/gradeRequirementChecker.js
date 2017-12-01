export function checkCourseSatisfied (courses, courseCode, grade = 50) {
  const course = courses.find(c => c.course === courseCode)
  return course && course.grade >= grade
}

export function matchSingleRequirement (requirement, courses) {
  if (typeof ele === 'string') {
    if (requirement.search(' or ')) {
      const [, course1, course2] = requirement.match(/(.*) or (.*)/)
      return checkCourseSatisfied(courses, course1) ||
        checkCourseSatisfied(courses, course2)
    }
    return checkCourseSatisfied(courses, requirement)
  }
  return checkCourseSatisfied(courses, requirement.course, requirement.minimum)
}

export function getRequirementStatus (courses, requiredGrade) {
  if (!courses) {
    return requirementStatus.UNKNOWN
  }
  if (!requiredGrade) {
    return requirementStatus.MET
  }

  const required = requiredGrade.required
  const gradesMet = required.every(ele => matchSingleRequirement(ele, courses))

  return gradesMet ? requirementStatus.MET : requirementStatus.UNMET
}

export function getRequirementColor (requirement) {
  switch (requirement) {
    case requirementStatus.MET: return 'green'
    case requirementStatus.UNMET: return 'red'
    case requirementStatus.UNKNOWN: return 'orange'
    default: return undefined
  }
}

export const requirementStatus = {
  'MET': 'MET',
  'UNMET': 'UNMET',
  'UNKNOWN': 'UNKNOWN'
}
