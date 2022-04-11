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
      print(file_name)

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
         print('test.py -i <inputfile> -o <outputfile>')
         sys.exit()
      elif opt in ("-i", "--ifile"):
         inputfile = arg
      elif opt in ("-o", "--ofile"):
         outputfile = arg
   
   list_directory(inputfile)
   print('Input file is', inputfile)
   print('Output file is', outputfile)



if __name__ == "__main__":
   main(sys.argv[1:])

