projects = {
    Role_Playing_Game: 'https://github.com/AndriiKot/JS__Role_Playing_Game__FreeCodeCamp.git',
    Pyramid_Generator: 'https://github.com/AndriiKot/JS__Pyramid_Generator__FreeCodeCamp.git',
    Gradebook_App: 'https://github.com/AndriiKot/JS__Gradebook_App__FreeCodeCamp.git',
    Random_Background_Color_Changer: 'https://github.com/AndriiKot/JS__Random_Background_Color_Changer__freeCodeCamp.git',
}



update = "git subtree pull --prefix "

projects.each do |folder, git_repo| 
    system(`#{update}#{folder} #{git_repo} main`)
end

system(`git push`)
