import pandas as pd


class WageFrame:
    def __init__(self):
        self.automationFrame = pd.read_csv('./Data/Employment/Automation-Risk/Automation-Risk.csv')
        self.NOCFrame = pd.read_csv('./Data/Employment/NOC-Education/NOC-Education.csv')
        self.uniJobRelateFrame = pd.read_csv('./Data/Employment/University-Degree-Job-Relatedness/University-Degree-Job-Relatedness.csv')
        self.uniEmploymentFrame = pd.read_csv('./Data/Employment/University-Employment-Rates-v2/University-Employment-Rates.csv')
        self.uniNOCFrame = pd.read_csv('./Data/Employment/University-Program-NOC/University-Program-NOC.csv')
