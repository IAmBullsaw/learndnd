if [ $BASH_SOURCE != $0 ]; then
    #echo "ok... running source'd script..."
    :
else
    echo "Error: must source script, cannot just execute..."
    exit 1
fi

# Make sure supported git is used
git --version | perl -ne 'if (/version (\d+\.\d+)(.+)/ && $1 < 1.8) { print "Warning: Unsupported git version ($1$2). Run \"module add git\" to setup required git version\n" ;} '

export MY_GIT_TOP=`git rev-parse --show-toplevel`

module add nodejs/10.14.0

export PATH="$PATH:/$MY_GIT_TOP/app/node_modules/.bin"

export LEARNDND_ROOT="$MY_GIT_TOP"
