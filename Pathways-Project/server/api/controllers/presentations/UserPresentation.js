const UserPresentation = {};

UserPresentation.presentUser = (user) => ({
  id: user.id,
  name: user.name,
  studentID: user.studentID
});

export default UserPresentation;
