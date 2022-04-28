#!/usr/bin/env python
from ast import Try
import os, sys, getopt , shutil, fnmatch, csv, argparse


### Paths
# cp /Volumes/GoogleDrive/Shared\ drives/DESIGN/OpenFren/Character\ Art/Layering/Canine/Latest\ Final/Cloth/Cloth_05/Cloth_05_Third_N.png ./layers/Cloth/Cloth_05\#15/3_Tertiary
goblin_path = '/Volumes/GoogleDrive/Shared drives/DESIGN/OpenFren/Character Art/Layering/Goblin/latest final/card/'
canine_path = '/Volumes/GoogleDrive/Shared drives/DESIGN/OpenFren/Character Art/Layering/Canine/Card Size Final Asset/'
card_path = '/Volumes/GoogleDrive/Shared drives/DESIGN/OpenFren/Character Art/Layering/Card/'
background_path_sharp = '/Volumes/GoogleDrive/Shared drives/DESIGN/OpenFren/Character Art/Layering/Background/'
background_path = '/Volumes/GoogleDrive/Shared drives/DESIGN/OpenFren/Character Art/card/Card BG/'
input_path = '/Volumes/GoogleDrive/Shared drives/DESIGN/OpenFren/Character Art/Layering/'
output_path = os.getcwd() + '/.utils_output/'
csv_card_path = './downloaded_files/Card_Map.csv'
csv_background_path = './downloaded_files/Background_Update.csv'
csv_goblin_path = './downloaded_files/Goblin_Map.csv'
csv_canine_path = './downloaded_files/Canine_Map.csv'

# There are a number of ways to copy files in python, see: https://stackoverflow.com/questions/123198/how-to-copy-files
# Resource 2, https://www.geeksforgeeks.org/python-shutil-copy-method/
# This alternative needs linux back slahes / escape characters to work dest = os.system(f'cp {source} {destination}')
def copy_files(source, destination, destination_file_name):
    print(f'Copying from {source} to {destination}')

    if not destination.endswith('/'):
        destination = destination + '/'

    if not os.path.exists(destination):
        os.makedirs(destination)
    
    # The below alternative is better as it is portable and a native library in python. Have to remove backslahes
    dest = shutil.copy(source, destination + destination_file_name, follow_symlinks=True)
    print(f'Files copied to {dest}')

    return

# Getting all files and subdirectories in a directory: https://stackoverflow.com/questions/2909975/python-list-directory-subdirectory-and-files
# os.listdir only give files and folders on the current directory
def list_directory(input_path):
    file_pattern = "*.png"

    for path, subdirs, files in os.walk(input_path):
        for name in files:
            if fnmatch.fnmatch(name, file_pattern):
                print(os.path.join(path, name))

def create_layers(input_path):
    f = open(input_path, 'r')
    reader = csv.reader(f)
    header = []
    header = next(reader)
    source_path_index = header.index('Source')
    source_file_name_index = header.index('File Name')
    destination_path_index = header.index('Destination')
    destination_file_index = header.index('Destination Final Name')

    construct_and_copy(reader,source_path_index, source_file_name_index, destination_path_index, destination_file_index)


def construct_and_copy(reader, source_path_index, source_file_name_index, destination_path_index, destination_file_index):
    skipped_files = []
    for row in reader:
        try:
            source_path = row[source_path_index] 
            if not source_path.endswith('/'):
                source_path = source_path + '/'

            source_file = source_path + row[source_file_name_index]
            destination_folder = output_path + 'layers/' + row[destination_path_index] 
            destination_file = row[destination_file_index]
            print('Copying ', row[source_file_name_index] , 'to' , destination_file)
            copy_files(source_file, destination_folder,destination_file)            
        except:
            print("skipping file ", source_file)
            skipped_files.append(source_file)

    write_skipped_files(skipped_files)
    

def write_skipped_files(skipped_files):
    working_path = output_path + "skipped_files" + ".csv"
    f = open(working_path, 'w')
    writer = csv.writer(f)
    header = ['File Name']
    writer.writerow(header)
    for name in skipped_files:
        writer.writerow([name])




def read_spreadsheet(input_path):
    return 

def generate_list_of_files(input_path, type=""):
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
                print(os.path.join(path, name))
                data = [path, name]
                writer.writerow(data)

def main(argv):
    try:
        opts, args = getopt.getopt(argv,"htl:c:")
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
                generate_list_of_files(canine_path, 'canine')
            elif arg == 'card':
                generate_list_of_files(card_path, 'card')
            elif arg == 'goblin':
                generate_list_of_files(goblin_path, 'goblin')
            elif arg == 'background':
                generate_list_of_files(background_path, 'background')
        if opt in ['-c']:
            print('Creating layers for ', arg)
            if arg == 'background':
                create_layers(csv_background_path)
            if arg == 'card':
                create_layers(csv_card_path)
            if arg == 'goblin':
                create_layers(csv_goblin_path)
            if arg == 'canine':
                create_layers(csv_canine_path)
        if opt in ['-t']:
            print('Testing')

if __name__ == "__main__":
    main(sys.argv[1:])

# Testing
# s = '/Volumes/GoogleDrive/Shared drives/DESIGN/OpenFren/Character Art/Layering/Card/Back Design/Goblin_B.png'
# d = '/Users/mo/code/openfren/openfren-nft-generator-nftchef/.utils_output/layers/Card_Back/1_Text_Black/'
# f = 'Black Goblin Text#10.png'
# copy_files(s,d,f)

# read_csv_input_files(csv_card_path)
# read_csv_input_files(csv_background_path)
# read_csv_input_files(csv_background_path)
# create_layers(csv_canine_path)