projects = {
 Legacy_Responsive_Web_Design_Challenges: 'https://github.com/AndriiKot/Legacy_Responsive_Web_Design_Challenges-FreeCodeCamp-.git',
 JavaScript_Algorithms_and_Data_Structures: 'https://github.com/AndriiKot/JavaScript_Algorithms_and_Data_Structures__FreeCodeCamp.git',
}

update = "git subtree pull --prefix "

projects.each do |folder, git_repo| 
    system(`#{update}#{folder} #{git_repo} main`)
end

system(`git push`)
