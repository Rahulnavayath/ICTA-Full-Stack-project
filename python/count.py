#str= "this is string example...wow!!!";
#print str.count("i",4,40)
#print "wow occur in",str.count("wow")
#print "hai occur in",str.count("hai")

s=raw_input("enter string")
n=0
p=0
k=0
j=0
for i in s:
	if i in "aeiouAEIOU":
		n=n+1
	elif i in "bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ":
		p=p+1
	elif i in" ":
		k=k+1
	elif i in "?":
		j=j+1
print "no of vowels is" ,n
print "no of constants is" ,p
print "no of words is" ,k+1
print "no of ? is" ,j

