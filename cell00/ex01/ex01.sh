#Create a file called z that returns "Z", followed by a new line, whenever the command cat is used on it.

# Create Z File
touch z

# Open Z File in vim and Write "z" in it
vim z
i 
Z
:wq

# cat Z to check if it returns "z"
cat z