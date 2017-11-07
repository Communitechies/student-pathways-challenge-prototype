import pandas as pd


class WageFrame:
    def __init__(self):
        self.appsByUniProgramGroupFrame = pd.read_csv('./Data/Application_Enrolment/Applicants-by-University-Program-Groups/Applicants-by-University-Program-Groups.csv')
        self.appsByUniInstitutionFrame = pd.read_csv('./Data/Application_Enrolment/Applications-by-University-Institution/Applications-by-University-Institution.csv')
        self.appsByUniProgramFrame = pd.read_csv('./Data/Application_Enrolment/Applications-by-University-Program/Applications-by-University-Program.csv')
        self.collegeEnrolmentFrame = pd.read_csv('./Data/Application_Enrolment/College-Enrolment/College-Enrolment.csv')
        self.retentionByUniFrame = pd.read_csv('./Data/Application_Enrolment/Retention-by-University/Retention-by-University.csv')
        self.transfersByUniFrame = pd.read_csv('./Data/Application_Enrolment/Transfers-by-University/Transfers-by-University.csv')
        self.uniEnrolmentFrame = pd.read_csv('./Data/Application_Enrolment/University-Enrolment/University-Enrolment.csv')
        self.uniProgramEnrolmentFrame = pd.read_csv('./Data/Application_Enrolment/University-Program-Enrolment/University-Program-Enrolment.csv')
