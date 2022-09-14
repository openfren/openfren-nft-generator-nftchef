#!/usr/bin/env python
from ast import If, Try
import os, sys, getopt , shutil, fnmatch, csv, argparse

output_path = os.getcwd() + '/.utils_output/'

input_path_drive='/Volumes/GoogleDrive/Shared drives/DESIGN/OpenFren/Character Art/Layering/Egg '

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

generate_list_of_files(input_path_drive, 'egg')