Set fso = CreateObject("Scripting.FileSystemObject")
currentDir = fso.GetParentFolderName(WScript.ScriptFullName)
Set WshShell = CreateObject("WScript.Shell")
exePackaged = currentDir & "\dist\NepalQuiz-win32-x64\NepalQuiz.exe"
electronExe = currentDir & "\node_modules\electron\dist\electron.exe"
If fso.FileExists(exePackaged) Then
    WshShell.Run """" & exePackaged & """", 0, False
ElseIf fso.FileExists(electronExe) Then
    WshShell.Run """" & electronExe & """ """ & currentDir & """", 0, False
Else
    WshShell.Run "cmd /c cd /d """ & currentDir & """ && npx electron .", 0, False
End If

