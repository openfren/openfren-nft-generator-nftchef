#!/usr/bin/env python
import os, sys, getopt , shutil, fnmatch, csv, argparse


### Paths
# cp /Volumes/GoogleDrive/Shared\ drives/DESIGN/OpenFren/Character\ Art/Layering/Canine/Latest\ Final/Cloth/Cloth_05/Cloth_05_Third_N.png ./layers/Cloth/Cloth_05\#15/3_Tertiary
goblin_path = '/Volumes/GoogleDrive/Shared drives/DESIGN/OpenFren/Character Art/Layering/Goblin/latest final/card/'
canine_path = '/Volumes/GoogleDrive/Shared drives/DESIGN/OpenFren/Character Art/Layering/Canine/Card Size Final Asset/'
card_path = '/Volumes/GoogleDrive/Shared drives/DESIGN/OpenFren/Character Art/Layering/Card/'
input_path = '/Volumes/GoogleDrive/Shared drives/DESIGN/OpenFren/Character Art/Layering/'
output_path = os.getcwd() + '/.utils_output/'

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
                # print(f'Name is {name}')
                # print(f'Path is {path}')
                print(os.path.join(path, name))

def create_csv_input_files(input_path, type=""):
    file_pattern = "*.png"
    working_path = output_path + type + ".csv"
    if not os.path.exists(output_path):
        os.mkdir(output_path)

    f = open(working_path, 'w')
    writer = csv.writer(f)
    header = ['Source', 'File_Name']
    writer.writerow(header)

    for path, subdirs, files in os.walk(input_path):
        for name in files:
            if fnmatch.fnmatch(name, file_pattern):
                # print(f'Name is {name}')
                # print(f'Path is {path}')
                print(os.path.join(path, name))
                data = [path, name]
                writer.writerow(data)

# 1. List files in Directory
# 2. Iterate over files in Directory
# 3. Move files in directory

def main(argv):
    try:
        opts, args = getopt.getopt(argv,"hl:c:")
    except getopt.GetoptError:
        print('There was an error')
        print('create_layers.py -l card --> creates csv file with list of files for card')
        print('create_layers.py -l card --> creates layers folder based on type card')
        sys.exit(2)
    
    for opt, arg in opts:
        if opt == '-h':
            print('create_layers.py -l card --> creates csv file with list of files for card')
            print('create_layers.py -l card --> creates layers folder based on type card')
        if opt in ['-l']:
            print('Running list generation for ', arg)
            if arg == 'canine':
                create_csv_input_files(canine_path, 'canine')
            elif arg == 'card':
                create_csv_input_files(card_path, 'card')
            elif arg == 'goblin':
                create_csv_input_files(goblin_path, 'goblin')
        if opt in ['-c']:
            print('Creating layers for ', arg)

    # create_csv_input_files(input_path)
    # list_directory(input_path)
    # copy_files(input_path, output_path)

if __name__ == "__main__":
    main(sys.argv[1:])