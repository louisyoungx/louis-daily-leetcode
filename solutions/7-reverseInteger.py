class Solution:
    def reverse(self, x: int) -> int:
        numStr = str(x)
        if not numStr[0] == '-':
            numStr = numStr[::-1]
            x = int( numStr)
        else:
            numStr = numStr[1:]
            numStr = numStr[::-1]
            print(numStr)
            x = int(numStr)
            x = - x
        y = pow(2, 31)
        if x > y or x < -y:
            return 0
        return x