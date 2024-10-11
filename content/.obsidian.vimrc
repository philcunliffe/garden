" Have j and k navigate visual lines rather than logical ones
noremap j gj
noremap k gk
" noremap j h
" noremap h i
" I like using H and L for beginning/end of line
nmap <C-h> ^
nmap <C-l> $
" Quickly remove search highlights
nmap <F9> :nohl

" Yank to system clipboard
set clipboard=unnamed

" Go back and forward with Ctrl+O and Ctrl+I
" (make sure to remove default Obsidian shortcuts for these to work)
exmap back obcommand app:go-back
nmap <C-o> :back
exmap forward obcommand app:go-forward
nmap <C-i> :forward
