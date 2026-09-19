Set WshShell = CreateObject("WScript.Shell")
desktop = WshShell.SpecialFolders("Desktop")
Set shortcut = WshShell.CreateShortcut(desktop & "\Nepal Quiz App.lnk")
shortcut.TargetPath = "wscript.exe"
shortcut.Arguments = """" & "D:\quiz\Launch-Quiz-Silent.vbs" & """"
shortcut.WorkingDirectory = "D:\quiz"
shortcut.Description = "Nepal Quiz Desktop Application"
shortcut.Save
