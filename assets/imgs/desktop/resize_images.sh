#!/bin/bash

# Prompt the user to enter a folder path
#read -p "Enter the folder path: " folder_path


# Get the current folder path
folder_path="$PWD"

# Set the output folder path
output_folder="$folder_path/temp"

# Check if the folder exists
if [ -d "$output_folder" ]; then
  echo "Folder exists: $output_folder"
else
  # Create the folder
  mkdir "$folder_path"

  # Print a message
  echo "Folder created: $output_folder"
fi

# Loop through all the files in the folder
for file_path in "$folder_path"/*
do
  # Check if the file is an image
  if [[ "$file_path" == *.jpg || "$file_path" == *.png ]]; then
    # Set the output file path
    output_path="$output_folder/$(basename "$file_path")"

    # Resize the image using ffmpeg
    ffmpeg -i "$file_path" -vf scale=iw/4:-1 "$output_path"

    echo "$(basename "$file_path") resized successfully!"
  else
    echo "$(basename "$file_path") is not an image file."
  fi
done
