class Solution:
    def myAtoi(self, s: str) -> int:
        status = 0
        re = 0
        start=0
        intList = ['0','1','2','3','4','5','6','7','8','9']
        intStr = ""
        for c in s:
            if re == 1 and c not in intList:
                break
            if c == ' ' and start ==0:
                continue
            elif c in intList:
                intStr += c
                start = 1
            elif c == '-' or c == '+':
                if start == 1:
                    break
                re = 1
                intStr += c
                if c == '-':
                    status = 1
            else:
                break
        try:
            int(intStr)
        except:
            return 0
        
        if intStr == "":
            return 0
        else:
            back = int(intStr)
            y = pow(2, 31)
            print(back)
            if -back > y or back >= y:
                if status == 1:
                    return -y
                else:
                    return y - 1
            return back