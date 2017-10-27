import pandas as pd

class WageFrame():
    def __init__(self):
        self.taxesFrame = pd.read_csv('./Data/Wages_Earnings/Tax-Linked-Graduate-Earnings/Tax-Linked-Graduate-Earnings.csv')
