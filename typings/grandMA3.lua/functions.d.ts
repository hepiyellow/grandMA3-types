// Based on https://github.com/hossimo/GMA3Plugins/wiki/Echo

/// <reference lib="es2015.iterable" />

/** @noSelfInFile */

declare function AddIPAddress(...args: any): any;
declare function AddonVars(...args: any): any;
declare function BuildDetails(...args: any): any;
declare function CheckDMXCollision(...args: any): any;
declare function CheckFIDCollision(...args: any): any;
declare function CloseAllOverlays(...args: any): any;
declare function CloseUndo(...args: any): any;
declare function Cmd(...args: any): any;
declare function CmdIndirect(...args: any): any;
declare function CmdIndirectWait(...args: any): any;
declare function CmdObj(...args: any): any;
declare function Confirm(...args: any): any;
declare function CreateUndo(...args: any): any;
declare function CurrentExecPage(...args: any): any;
declare function CurrentProfile(...args: any): any;
declare function CurrentUser(...args: any): any;
declare function DataPool(...args: any): any;
declare function DefaultDisplayPositions(...args: any): any;
declare function DeleteIPAddress(...args: any): any;
declare function DelVar(...args: any): any;
declare function DeskLocked(...args: any): any;
declare function DirList(...args: any): any;
declare function Echo(...args: any): any;
declare function ErrEcho(...args: any): any;
declare function ErrPrintf(...args: any): any;
declare function Export(...args: any): any;
declare function ExportCSV(...args: any): any;
declare function ExportJson(...args: any): any;
declare function FileExists(...args: any): any;
declare function FindBestDMXPatchAddr(...args: any): any;
declare function FindBestFocus(...args: any): any;
declare function FindNextFocus(...args: any): any;
declare function FindTexture(...args: any): any;
declare function FixtureType(...args: any): any;
declare function FromAddr(...args: any): any;
declare function GetAttributeByUIChannel(...args: any): any;
declare function GetAttributeCount(...args: any): any;
declare function GetAttributeIndex(...args: any): any;
declare function GetButton(...args: any): any;
declare function GetChannelFunction(...args: any): any;
declare function GetChannelFunctionIndex(...args: any): any;
declare function GetDisplayByIndex(...args: any): any;
declare function GetDisplayCollect(...args: any): any;
declare function GetDMXUniverse(...args: any): any;
declare function GetDMXValue(...args: any): any;
declare function GetExecutor(...args: any): any;
declare function GetFocus(...args: any): any;
declare function GetFocusDisplay(...args: any): any;
declare function GetPath(...args: any): any;
declare function GetPathOverrideFor(...args: any): any;
declare function GetPathSeparator(...args: any): any;
declare function GetPathType(...args: any): any;
declare function GetPresetData(...args: any): any;
declare function GetProgPhaser(...args: any): any;
declare function GetProgPhaserValue(...args: any): any;
declare function GetPropertyColumnId(...args: any): any;
declare function GetRTChannel(...args: any): any;
declare function GetRTChannelCount(...args: any): any;
declare function GetSelectedAttribute(...args: any): any;
declare function GetSubfixture(...args: any): any;
declare function GetSubfixtureCount(...args: any): any;
declare function GetTokenName(...args: any): any;
declare function GetTokenNameByIndex(...args: any): any;
declare function GetTopModal(...args: any): any;
declare function GetTopOverlay(...args: any): any;
declare function GetUIChannel(...args: any): any;
declare function GetUIChannelCount(...args: any): any;
declare function GetUIChannelIndex(...args: any): any;
declare function GetUIChannels(...args: any): any;
declare function GetUIObjectAtPosition(...args: any): any;
declare function GetVar(...args: any): any;
declare function GlobalVars(...args: any): any;
declare function HandleToInt(...args: any): any;
declare function HandleToStr(...args: any): any;
declare function HookObjectChange(...args: any): any;
declare function HostOS(...args: any): any;
declare function HostSubType(...args: any): any;
declare function HostType(...args: any): any;
declare function Import(...args: any): any;
declare function IncProgress(...args: any): any;
declare function IntToHandle(...args: any): any;
declare function IsObjectValid(...args: any): any;
declare function Keyboard(...args: any): any;
declare function KeyboardObj(...args: any): any;
declare function LoadExecConfig(...args: any): any;
declare function LoadStorePreferencesFromProfile(...args: any): any;
declare function MessageBox(...args: any): any;
declare function Mouse(...args: any): any;
declare function MouseObj(...args: any): any;
declare const MultiLanguage: Array<[string, string]>;
declare const Obj: Obj<any, any>;
declare function OverallDeviceCertificate(...args: any): any;
declare function Patch(...args: any): any;
declare function PluginVars(...args: any): any;
declare function PopupInput(...args: any): MultiReturn<[any, any]>;
declare function Printf(...args: any): any;
declare function Programmer(...args: any): any;
declare function ProgrammerPart(...args: any): any;
declare function Pult(...args: any): any;
declare function RefreshLibrary(...args: any): any;
declare function ReleaseType(...args: any): any;
declare function RenewLayoutHook(...args: any): any;
declare function Root(): Root;
declare function SaveExecConfig(...args: any): any;
declare function SaveStorePreferencesToProfile(...args: any): any;
declare function Selection(...args: any): any;
declare function SelectionComponentX(...args: any): any;
declare function SelectionComponentY(...args: any): any;
declare function SelectionComponentZ(...args: any): any;
declare function SelectionCount(...args: any): any;
declare function SelectionFirst(...args: any): any;
declare function SelectionNext(...args: any): any;
declare function SelectionNotifyBegin(...args: any): any;
declare function SelectionNotifyEnd(...args: any): any;
declare function SelectionNotifyObject(...args: any): any;
declare function SerialNumber(...args: any): any;
declare function SetBlockInput(...args: any): any;
declare function SetColor(...args: any): any;
declare function SetFilterSettingsTarget(...args: any): any;
declare function SetLED(...args: any): any;
declare function SetProgPhaser(...args: any): any;
declare function SetProgPhaserValue(...args: any): any;
declare function SetProgress(...args: any): any;
declare function SetProgressRange(...args: any): any;
declare function SetProgressText(...args: any): any;
declare function SetVar(...args: any): any;
declare function ShowData(...args: any): any;
declare function ShowSettings(...args: any): any;
declare function StartProgress(...args: any): any;
declare function StopProgress(...args: any): any;
declare function StrToHandle(...args: any): any;
declare function SyncFS(...args: any): any;
declare function TextInput(...args: any): string;
declare function Time(...args: any): any;
declare function Timer(...args: any): any;
declare function ToAddr(...args: any): any;
declare function Touch(...args: any): any;
declare function TouchObj(...args: any): any;
declare function Unhook(...args: any): any;
declare function UnhookMultiple(...args: any): any;
declare function UserVars(...args: any): any;
/**
 * Returns software version of grandMA3.
 */
declare function Version(): string;
declare function WaitModal(...args: any): any;
declare function WaitObjectDelete(...args: any): any;