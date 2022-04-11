#!/usr/bin/env python
import os, sys, getopt
path = ""

def list_directory(input_path):
   
   print("Running list Directory")
   if input_path == '' :
      input_path = os.getcwd();
   
   print("input path is ", input_path)
   list_directory = os.listdir(input_path)
   for file_name in list_directory:
      print("Processing: ", file_name)
      new_name = add_rarity(file_name)
      processed = f"Converted {file_name} --> {new_name}"
      print(processed)

def add_rarity(name, rarity=0):
   if rarity == 0:
      rarity = 10
   rarity_name = name + '#' + str(rarity)
   print("New name is ", rarity_name)
   return rarity_name


def main(argv):
   inputfile = ''
   outputfile = ''
   try:
      opts, args = getopt.getopt(argv,"hi:o:",["ifile=","ofile="])
   except getopt.GetoptError:
      print('add_rarity.py -i <inputfile> -o <outputfile>')
      sys.exit(2)
   for opt, arg in opts:
      if opt == '-h':
         print('add_rarity.py -i <inputfile> -o <outputfile>')
         sys.exit()
      elif opt in ("-i", "--ifile"):
         inputfile = arg
      elif opt in ("-o", "--ofile"):
         outputfile = arg
   
   list_directory(inputfile)

   # ToDo: create function to modify output file and add rarity to traits. 
   print('Input file is', inputfile)
   print('Output file is', outputfile)



if __name__ == "__main__":
   main(sys.argv[1:])

