# List Folders
dir = Dir.new('./')
dir.each_child  do |folder| 
    p folder
    p folder.include?(' ')
    
    if folder.include?(' ') 
        new_folder_name = folder.gsub(/[^a-zA-Z0-9\.-_]/, '')
        p new_folder_name
    end
    gets
end
