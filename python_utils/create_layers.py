#!/usr/bin/env python
import os, sys, getopt , shutil, fnmatch

# cp /Volumes/GoogleDrive/Shared\ drives/DESIGN/OpenFren/Character\ Art/Layering/Canine/Latest\ Final/Cloth/Cloth_05/Cloth_05_Third_N.png ./layers/Cloth/Cloth_05\#15/3_Tertiary

# input_path = '/Volumes/GoogleDrive/Shared\ drives/DESIGN/OpenFren/Character\ Art/Layering/Canine/Latest\ Final/Cloth/Cloth_05/Cloth_05_Third_N.png'
input_path = '/Volumes/GoogleDrive/My Drive/'
output_path = os.getcwd() + '/.test'

# There are a number of ways to copy files in python, see: https://stackoverflow.com/questions/123198/how-to-copy-files
# Resource 2, https://www.geeksforgeeks.org/python-shutil-copy-method/

def copy_files(source, destination):
    print(f'Copying from {source} to {destination}')

    if not os.path.exists(destination):
        os.mkdir(destination)
    
    # This needs linux back slahes / escape characters to work 
    # dest = os.system(f'cp {source} {destination}')

    # The below alternative is better as it is portable and a native library in python. Have to remove backslahes
    dest = shutil.copy(source, destination, follow_symlinks=True)

    print(f'Files copied to {dest}')

    return

# 1. List files in Directory
# 2. Iterate over files in Directory
# 3. Move files in directory

# Getting all files and subdirectories in a directory: https://stackoverflow.com/questions/2909975/python-list-directory-subdirectory-and-files
# os.listdir only give files and folders on the current directory
def list_directory(input_path):
    # list_directory = os.listdir(input_path)
    # for file_name in list_directory:
    #     print(f'{file_name} in {input_path}')
    file_pattern = "*.png"

    for path, subdirs, files in os.walk(input_path):
        for name in files:
            if fnmatch.fnmatch(name, file_pattern):
                print(f'Name is {name}')
                print(f'Path is {path}')
                print(os.path.join(path, name))

def main(argv):
    list_directory(input_path)
    # copy_files(input_path, output_path)

if __name__ == "__main__":
    main(sys.argv[1:])