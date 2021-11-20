"clean": "del-cli ./build/*",  --- windows OS
"clean": "del ./build/*", --- non windows OS
Ref: https://www.npmjs.com/package/del-cli

#  Windows users: Since $ del is already a builtin command on Windows, you need to use $ del-cli there.