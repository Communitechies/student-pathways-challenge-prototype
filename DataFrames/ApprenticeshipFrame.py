import pandas as pd


class WageFrame:
    def __init__(self):
        self.apprenticeAggFrame = pd.read_csv('./Data/Apprenticeship/Apprenticeship-Aggregated/Apprenticeship-Aggregated.csv')
        self.apprenticeLabourFrame = pd.read_csv('./Data/Apprenticeship/Apprenticeship-Labour-Force-Statistics/Apprenticeship-Labour-Force-Statistics.csv')
        self.apprenticeEarningsFrame = pd.read_csv('./Data/Apprenticeship/Earnings-by-Apprenticeable-Occupation/Earnings-by-Apprenticeable-Occupation.csv')
        self.OCTAAFrame = pd.read_csv('./Data/Apprenticeship/OCTAA-Chart/OCTAA-Chart.csv')
        self.ontarioApprenticeParticipantsFrame = pd.read_csv('./Data/Apprenticeship/Ontario-Apprentice-Participants-Sponsors-TDAs/Ontario-Apprentice-Participants-Sponsors-TDAs.csv')
        self.ontarioApprenticeRegistrationFrames = pd.read_csv('./Data/Apprenticeship/Ontario-Apprenticeship-2015-2016-Registrations/Ontario-Apprenticeship-2015-2016-Registrations-By-Trade.csv')
        self.ontarioApprenticeWageVacancies = pd.read_csv('./Data/Apprenticeship/Ontario-Apprenticeship-Wages-Vacancies/Ontario-Apprenticeship-Wages-Vacancies.csv')
