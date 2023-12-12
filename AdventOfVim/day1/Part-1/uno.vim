let total = 0
for line in getline(1, '$')
  let total += str2nr(line[:1]) + str2nr(line[-1:])
endfor
echo total

