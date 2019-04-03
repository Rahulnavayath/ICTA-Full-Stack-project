b={"welcome":"swagatham",3.5:"Three point five",4:"Four"}
print b
print b["welcome"]
print b[3.5]
b["welcome"]="SWAGATH"		#mutability
print b
print b.keys()			#to print keys only
print b.values()		#to print values only
print b.items()			#print the list items

for i in b:
	print i,b[i]		# to print onebyone
print b.has_key("welcome")
print b.get(4)
del b[4]
print b
