# wai-coga
Cognitive and Learning Disabilities Accessibility pages on WAI website

Preview: https://w3c.github.io/wai-coga/fundamentals/coga/
Live: not yet

## Local dev setup when on windows

Note you might want to use WSL rather than set up for cmd as described here. 
As I currently use Git 4 Windows Bash this made sense for me.
https://jekyllrb.com/docs/installation/windows/

* Install a recommended [https://rubyinstaller.org/downloads/ Ruby+DevKit]
* Open a new cmd window
* ```gem install jekyll bundler```
* ``` jekyll -v``` to test all OK
* cd to ```wai-coga```
* ``` jekyll -v``` if error then delete ```gemfile.lock```
* Add ```require 'em/pure_ruby``` to head of ```C:\Ruby24-x64\lib\ruby\gems\2.4.0\gems\eventmachine-1.2.5-x64-mingw32\lib\eventmachine.rb```
* ```bundle install```
* ```bundle update```
* ```bundle exec jekyll serve```  --livereload errored for me
