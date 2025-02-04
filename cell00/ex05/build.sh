if [ $# -eq 0 ]; then
    echo "No arguments passed"
else
    for arg in $@; do
        mkdir ex$arg
    done
fi
