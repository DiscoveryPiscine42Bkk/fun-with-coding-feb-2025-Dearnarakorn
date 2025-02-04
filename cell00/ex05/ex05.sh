# Write a build.sh program which will create the folders using the argument of this program by adding "ex" to the beginning of the name.

# create a build.sh file
touch build.sh

# add the code to the build.sh file
echo 'if [ $# -eq 0 ]; then
    echo "No arguments passed"
else
    for arg in $@; do
        mkdir ex$arg
    done
fi' > build.sh

chmod 777 build.sh

# test the build.sh file

# ./build.sh
# ิ./build.sh 00