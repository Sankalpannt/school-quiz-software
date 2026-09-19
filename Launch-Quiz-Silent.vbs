Set fso = CreateObject("Scripting.FileSystemObject")
currentDir = fso.GetParentFolderName(WScript.ScriptFullName)
Set WshShell = CreateObject("WScript.Shell")
electronExe = currentDir & "\node_modules\electron\dist\electron.exe"
If fso.FileExists(electronExe) Then
    WshShell.Run """" & electronExe & """ """ & currentDir & """", 0, False
Else
    WshShell.Run "cmd /c cd /d """ & currentDir & """ && npx electron .", 0, False
End If

