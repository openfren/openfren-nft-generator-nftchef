#!/usr/bin/env python
import os, sys, getopt , shutil

# cp /Volumes/GoogleDrive/Shared\ drives/DESIGN/OpenFren/Character\ Art/Layering/Canine/Latest\ Final/Cloth/Cloth_05/Cloth_05_Third_N.png ./layers/Cloth/Cloth_05\#15/3_Tertiary

# input_path = '/Volumes/GoogleDrive/Shared\ drives/DESIGN/OpenFren/Character\ Art/Layering/Canine/Latest\ Final/Cloth/Cloth_05/Cloth_05_Third_N.png'
input_path = '/Volumes/GoogleDrive/My Drive/brand_partnerships.csv'
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


def main(argv):
    copy_files(input_path, output_path)

if __name__ == "__main__":
    main(sys.argv[1:])