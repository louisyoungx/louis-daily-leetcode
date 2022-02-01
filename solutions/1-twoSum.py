

class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        num2List = []
        index = 0
        for num1 in nums:
            num2 = target - num1
            if num1 == num2:
                nums.pop(index)
                nums.insert(index, 0)
                if num2 in nums:
                    num2List.append(index)
                nums.pop(index)
                nums.insert(index, num2)
            elif num2 in nums:
                num2List.append(index)
            index += 1
        return num2List
