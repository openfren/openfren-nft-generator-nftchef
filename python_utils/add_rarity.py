#!/usr/bin/env python
import os, sys, getopt
def rename_file_folder(input, output, input_path=os.getcwd() + '/layers', rename=False):
   if rename is True:
      print("Rename flag is set")
      input_path = os.path.join(input_path, input)
      output_path = os.path.join(input_path, output)
      processed = f"Renamed {input_path} --> {output_path}"
      
   if rename is not True:
      print("Rename flag is set to False, not renaming")

def list_directory(input_path=''):
   
   print("Running list Directory")
   if input_path == '' :
      working_path = os.getcwd() + '/layers'
   elif input_path != '':
      working_path = os.getcwd() + '/layers/' + input_path
   
   print("Working path is ", working_path)
   list_directory = os.listdir(working_path)
   for file_name in list_directory:
      print("Processing: ", file_name)
      rarity_name = add_rarity(file_name)
      # processed = f"Converted {file_name} --> {rarity_name}"
      # print(processed)

def add_rarity(name, rarity=0, type='file'):
   if rarity == 0:
      rarity = 10
   
   if type == 'folder':
      rarity_name = name + '#' + str(rarity)
   if type == 'file':
      rarity_name = str(name[:name.find('.')]) + '#' + str(rarity) + str(name[name.find('.'):])
    

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

