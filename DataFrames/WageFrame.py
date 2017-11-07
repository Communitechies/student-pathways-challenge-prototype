import pandas as pd


class WageFrame():
    def __init__(self):
        self.taxesFrame = pd.read_csv('./Data/Wages_Earnings/Tax-Linked-Graduate-Earnings/Tax-Linked-Graduate-Earnings.csv')
        self.gradSalaryFrame = pd.read_csv('./Data/Wages_Earnings/University-Graduate-Salaries/University-Graduate-Salaries.csv')
        self.wageFrame = pd.read_csv('./Data/Wages_Earnings/Wages-by-Skill-Level/Wages-by-Skill-Level.csv')

    def getSalaryAgricultural(self):
        return self.gradSalaryFrame.loc[self.gradSalaryFrame['Program'] == 'ABS']

