class Solution:
    def lengthOfLongestSubstring(self, s: str) -> int:
        Max = 0
        
        OutList = []

        for letter in s:
          #  print(OutList)
            if letter not in OutList:

                OutList.append(letter)
                
            else:
                
                if len(OutList) > Max:
                    Max = len(OutList)
                NewList = []
                for o in OutList[::-1]:
                    if o != letter:
                        NewList.append(o)
                    else:
                        OutList = NewList[::-1]
                        break
                OutList.append(letter)
            if len(OutList) > Max:
                Max = len(OutList)

        return Max
