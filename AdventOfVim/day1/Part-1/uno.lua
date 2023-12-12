
-- mi_script.lua
-- local total = 0
-- for _, line in ipairs(vim.fn.readfile(vim.fn.expand('%:p'))) do
--     total = total + tonumber(string.sub(line, 1, 1)) + tonumber(string.sub(line, -1))
-- end
-- print(total)
-- mi_script.lua

local total = 0
for _, line in ipairs(vim.fn.readfile(vim.fn.expand('%:p'))) do
    total = total + tonumber(line)
end
print(total)

-- Use :%s/[^0-9]//g to remove all non-numeric characters per line
-- use %s/\v^(\d)$/\1\1/ to duplicate the last digit
-- :%s/^\(\d\).*\(\d\)$/\1\2/ to remove all but the first and last digit
-- luafile % to run the script
