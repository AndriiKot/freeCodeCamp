projects = {
    Role_Playing_Game: 'https://github.com/AndriiKot/JS__Role_Playing_Game__FreeCodeCamp.git',
}


update = "git subtree pull --prefix "

projects.each do |folder, git_repo| 
    system(`#{update}#{folder} #{git_repo} main`)
end

system(`git push`)
