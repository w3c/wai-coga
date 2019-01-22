# wai-coga
Cognitive and Learning Disabilities Accessibility pages on WAI website

Preview: https://w3c.github.io/wai-coga/coga/
Live: not yet

## Local dev setup when on windows

https://jekyllrb.com/docs/installation/windows/

* Install the recommended [ Ruby+DevKit 2.5](https://rubyinstaller.org/downloads/)
* Open a new cmd window
* ```gem install jekyll bundler```
* cd to ...\\```wai-coga```
* ```bundle lock --add-platform=x64-mingw32```
* Ensure gemfile has ```gem 'wdm', '>= 0.1.0' if Gem.win_platform?``` to stop file system polling
* ```bundle install```
* ```bundle update```
* ```bundle exec jekyll serve```
* Can't use `--livereload` with Ruby 2.5 due to bug [#1](https://github.com/w3c/wai-coga/issues/1). Use F5 to refresh browser
