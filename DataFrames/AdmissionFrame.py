import pandas as pd


class WageFrame:
    def __init__(self):
        self.collegePreFrame = pd.read_csv('./Data/Admission/College-Prerequisites/College-Prerequisites.csv')
        self.highSchoolPreFrame = pd.read_csv('./Data/Admission/High-School-Prerequisites/High-School-Prerequisites.csv')
        self.secondarySchoolAvgFrame = pd.read_csv('./Data/Admission/Secondary-School-Avg-First-Year/Secondary-School-Avg-First-Year.csv')
        self.uniPreFrame = pd.read_csv('./Data/Admission/University-Prerequisites/University-Prerequisites.csv')
