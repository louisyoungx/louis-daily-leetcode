class Solution:
    def romanToInt(self, s: str) -> int:
        result = 0
        scap = False
        indexDict = {
            "I": 1,
            "V": 5,
            "X": 10,
            "L": 50,
            "C": 100,
            "D": 500,
            "M": 1000
        }
        douDict = {
            "IV": 4,
            "IX": 9,
            "XL": 40,
            "XC": 90,
            "CD": 400,
            "CM": 900
        }
        for i in range(len(s)):
            if scap:
                scap = False
                continue
            this = s[i]
            dou = s[i:i+2]
            if dou not in ["IV", "IX", "XL", "XC", "CD", "CM"]:
                result += indexDict[this]
            else:
                scap = True
                result += douDict[dou]
        return result