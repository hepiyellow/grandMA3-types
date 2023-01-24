// Based on lfs lua

/// <reference lib="es2015.iterable" />

/** @noSelfInFile */


declare module "lfs" {
	export function attributes(path: string): { mode: 'directory' | 'file' | string }
	export function attributes(path: string, name: string): string
	export function dir(path: string): LuaIterable<string>;
	export function mkdir(path: string): LuaIterable<string>;
	export function rmdir(path: string): void
}