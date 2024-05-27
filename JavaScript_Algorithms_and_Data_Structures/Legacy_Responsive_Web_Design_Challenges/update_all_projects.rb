projects = {
 HTML_Basic: 'https://github.com/AndriiKot/HTML__Basic__FreeCodeCamp.git',
 CSS_Basic: 'https://github.com/AndriiKot/CSS__Basic__FreeCodeCamp.git',
 CSS_Flexbox: 'https://github.com/AndriiKot/CSS__Flexbox__FreeCodeCamp.git',
 CSS_Grid: 'https://github.com/AndriiKot/CSS__Grid__FreeCodeCamp.git',
}

update = "git subtree pull --prefix "

projects.each do |folder, git_repo| 
    system(`#{update}#{folder} #{git_repo} main`)
end

system(`git push`)
