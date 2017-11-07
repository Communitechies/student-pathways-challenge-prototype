import pandas as pd


class WageFrame:
    def __init__(self):
        self.employmentByCredential = pd.read_csv('./Data/Graduation/College-Graduate-Employment-by-Credential/College-Graduate-Employment-by-Credential.csv')
        self.collegeGradRate = pd.read_csv('./Data/Graduation/College-Graduation-Rate/College-Graduation-Rate.csv')
        self.uniDegreeCompletion = pd.read_csv('./Data/Graduation/University-Degree-Completion/University-Degree-Completion.csv')
        self.uniQualificationsAwarded = pd.read_csv('./Data/Graduation/University-Qualifications-Awarded/University-Qualifications-Awarded.csv')


