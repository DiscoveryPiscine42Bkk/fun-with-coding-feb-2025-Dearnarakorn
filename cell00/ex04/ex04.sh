# Write an argv.sh program that displays the arguments passed to this program (3 maximum)

# create a argv.sh file
touch argv.sh

echo 'if [ $# -eq 0 ]; then
    echo "No arguments passed"
elif [ $# -gt 3 ]; then
    echo "Too many arguments passed: ${@:1:3}"
else
    echo "Arguments passed: $@"
fi
 '> argv.sh

chmod 777 argv.sh

# texst the argv.sh file
./argv.sh

./argv.sh arg1

./argv.sh arg1 arg2 arg3

./argv.sh arg1 arg2 arg3 arg4