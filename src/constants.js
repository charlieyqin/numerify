export const ABBR = {
  th: 3,
  mi: 6,
  bi: 9,
  tr: 12
}

export const DEFAULT_OPTIONS = {
  zeroFormat: null,
  nullFormat: null,
  defaultFormat: '0,0',
  scalePercentBy100: true,
  abbrLabel: {
    th: 'k',
    mi: 'm',
    bi: 'b',
    tr: 't'
  }
}

export const TRILLION = 1e12
export const BILLION = 1e9
export const MILLION = 1e6
export const THOUSAND = 1e3

export const DECIMAL = {
  base: 1000,
  suffixes: ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB']
}
export const BINARY = {
  base: 1024,
  suffixes: ['B', 'KiB', 'MiB', 'GiB', 'TiB', 'PiB', 'EiB', 'ZiB', 'YiB']
}
