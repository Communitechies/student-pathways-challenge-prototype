import pandas as pd


class ExperienceFrame:
    def __init__(self):
        self.classSize = pd.read_csv('./Data/Student_Experience/University-Class-Size-Students/University-Class-Size-Students.csv')
        self.instructionalFaculty = pd.read_csv('./Data/Student_Experience/University-Instructional-Faculty/University-Instructional-Faculty.csv')
        self.studentEngagement = pd.read_csv('./Data/Student_Experience/University-Student-Engagement/University-Student-Engagement.csv')

