#a=[2,4,12,8,10]
#max=0


#for i in a:
#	if i>max:
#		max=i		#greatest and smallest element
#	if i<min:
#		min=i
#print "large is=" ,max
#print "small is=" ,min

lst=[]
num=int(input("enter limit:"))
for i in range(num):
	nums=int(input("enter number:"))
	lst.append(nums)
print lst
print "maximum:",max(lst)
print "minimum:",min(lst)
