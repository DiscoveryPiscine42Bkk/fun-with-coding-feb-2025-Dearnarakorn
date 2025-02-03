# create count_files.sh file 
touch count_files.sh

# Write the following commands in count_files.sh
echo 'count=$(find . -mindepth 1 -maxdepth 1 | wc -l)' > count_files.sh
echo 'echo $count' >> count_files.sh

# Create test files
touch test01
touch test02
touch test03

chmod 777 count_files.sh

# Run count_files.sh
./count_files.sh
