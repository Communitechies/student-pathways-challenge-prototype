import pandas as pd


class WageFrame:
    def __init__(self):
        self.skillsFrame = pd.read_csv('./Data/Labour_Market/Essential-Skills-Compétences-Clés/Essential-Skills.csv')
        self.forceByEASE = pd.read_csv('./Data/Labour_Market/Labour-Force-by-Education-Age-Sex-Employment/Labour-Force-by-Education-Age-Sex-Employment.csv')
        self.forceBySkill = pd.read_csv('./Data/Labour_Market/Labour-Force-by-Skill-Level/Labour-Force-by-Skill-Level.csv')
