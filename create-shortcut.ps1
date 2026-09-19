$WshShell = New-Object -ComObject WScript.Shell
$DesktopPath = [System.Environment]::GetFolderPath('Desktop')
$Shortcut = $WshShell.CreateShortcut("$DesktopPath\Newlight Quiz 2083-04-29.lnk")
$Shortcut.TargetPath = "wscript.exe"
$Shortcut.Arguments = """D:\quiz\Launch-Quiz-Silent.vbs"""
$Shortcut.WorkingDirectory = "D:\quiz"
$Shortcut.Description = "Newlight Quiz 2083/04/29 Desktop Application"
$Shortcut.Save()
Write-Host "Desktop shortcut created successfully for Newlight Quiz 2083/04/29!"
