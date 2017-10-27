import pandas as pd


class WageFrame():
    def __init__(self):
        self.taxesFrame = pd.read_csv('./Data/Wages_Earnings/Tax-Linked-Graduate-Earnings/Tax-Linked-Graduate-Earnings.csv')
        self.gradSalaryFrame = pd.read_csv('./Data/Wages_Earnings/University-Graduate-Salaries/University-Graduate-Salaries.csv')
        self.wageFrame = pd.read_csv('./Data/Wages_Earnings/Wages-by-Skill-Level/Wages-by-Skill-Level.csv')

    def getSalaryAgricultural(self):
        return self.gradSalaryFrame.loc[self.gradSalaryFrame['Program'] == 'ABS']

    def getSalaryArchitecture(self):
        return self.gradSalaryFrame.loc[self.gradSalaryFrame['Program'] == 'ALA']

    def getSalaryBusiness(self):
        return self.gradSalaryFrame.loc[self.gradSalaryFrame['Program'] == 'BCO']

    def getSalaryCompSci(self):
        return self.gradSalaryFrame.loc[self.gradSalaryFrame['Program'] == 'CSC']

    def getSalaryDentist(self):
        return self.gradSalaryFrame.loc[self.gradSalaryFrame['Program'] == 'DEN']

    def getSalaryEducation(self):
        return self.gradSalaryFrame.loc[self.gradSalaryFrame['Program'] == 'EDU']

    def getSalaryEngineer(self):
        return self.gradSalaryFrame.loc[self.gradSalaryFrame['Program'] == 'ENG']

    def getSalaryFineArts(self):
        return self.gradSalaryFrame.loc[self.gradSalaryFrame['Program'] == 'FAA']

    def getSalaryForestry(self):
        return self.gradSalaryFrame.loc[self.gradSalaryFrame['Program'] == 'FOR']

    def getSalaryFoodSci(self):
        return self.gradSalaryFrame.loc[self.gradSalaryFrame['Program'] == 'FSN']

    def getSalaryHealth(self):
        return self.gradSalaryFrame.loc[self.gradSalaryFrame['Program'] == 'HPR']

    def getSalaryHumanities(self):
        return self.gradSalaryFrame.loc[self.gradSalaryFrame['Program'] == 'HUM']

    def getSalaryJournalism(self):
        return self.gradSalaryFrame.loc[self.gradSalaryFrame['Program'] == 'JOU']

    def getSalaryKin(self):
        return self.gradSalaryFrame.loc[self.gradSalaryFrame['Program'] == 'KRP']

    def getSalaryLaw(self):
        return self.gradSalaryFrame.loc[self.gradSalaryFrame['Program'] == 'LAW']

    def getSalaryMath(self):
        return self.gradSalaryFrame.loc[self.gradSalaryFrame['Program'] == 'MAT']

    def getSalaryMedicine(self):
        return self.gradSalaryFrame.loc[self.gradSalaryFrame['Program'] == 'MED']

    def getSalaryNursing(self):
        return self.gradSalaryFrame.loc[self.gradSalaryFrame['Program'] == 'NUR']

    def getSalaryOtherArts(self):
        return self.gradSalaryFrame.loc[self.gradSalaryFrame['Program'] == 'OAS']

    def getSalaryOptom(self):
        return self.gradSalaryFrame.loc[self.gradSalaryFrame['Program'] == 'OPT']

    def getSalaryPharm(self):
        return self.gradSalaryFrame.loc[self.gradSalaryFrame['Program'] == 'PHA']

    def getSalaryPhysics(self):
        return self.gradSalaryFrame.loc[self.gradSalaryFrame['Program'] == 'PSC']

    def getSalarySocialScience(self):
        return self.gradSalaryFrame.loc[self.gradSalaryFrame['Program'] == 'SSC']

    def getSalaryTheology(self):
        return self.gradSalaryFrame.loc[self.gradSalaryFrame['Program'] == 'THE']

    def getSalaryTherapy(self):
        return self.gradSalaryFrame.loc[self.gradSalaryFrame['Program'] == 'TRE']

    def getSalaryVet(self):
        return self.gradSalaryFrame.loc[self.gradSalaryFrame['Program'] == 'VME']
