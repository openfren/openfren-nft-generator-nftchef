### Find all files in directory and subdirectory that end with an extension

With path
```
find /Volumes/GoogleDrive/Shared\ drives/DESIGN/OpenFren/Character\ Art/Layering/Goblin/latest\ final/ -type f -name "*.png" > all_files_with_path_goblin.txt
```

Without path
```
find ./downloaded_files/downloaded_assets -name "*.png" | rev | cut -d '/' -f1 | rev > allfiles.txt
```

[source](https://stackoverflow.com/questions/8518750/to-show-only-file-name-without-the-entire-directory-path)