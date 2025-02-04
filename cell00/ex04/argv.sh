if [ $# -eq 0 ]; then
    echo "No arguments passed"
elif [ $# -gt 3 ]; then
    echo "Too many arguments passed: ${@:1:3}"
else
    echo "Arguments passed: $@"
fi