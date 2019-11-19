/* tslint:disable no-redundant-jsdoc */

export interface VisavailConfig {
  /**
   * ID of the div that contains the graph.
   *
   * @default 'visavail_container'
   */
  id_div_container?: string;

  /**
   * ID of the div that the graph should be rendered into.
   */
  id_div_graph?: string;

  /**
   * Visavail will autodetect the language of the browser and sets the moment locale automatically.
   * This option lets you set the moment locale manually
   * If you set this to null, moment will use `"en"` as the locale
   *
   * @see https://momentjscom.readthedocs.io/en/latest/moment/06-i18n/01-changing-locale/
   */
  moment_locale?: string;

  /**
   * Object that contains the margins of the graph.
   */
  margin?: VisavailMarginConfig;

  /**
   * Object that contains the padding of the graph.
   */
  padding?: VisavailMarginConfig;

  /**
   * The width of the graph.
   * This option will be ignored if the resposive option is enabled
   *
   * @default 960
   */
  width?: number;

  /**
   * Space for three dots when you use a simple title for the measurement.
   *
   * @default 36
   */
  reduce_space_wrap?: number;

  /**
   * Space between the data set rows.
   *
   * @default 16
   */
  line_spacing?: number;

  /**
   * Emphasize the year when the range of the data covers mor than one year.
   *
   * @default true
   */
  emphasize_year_ticks?: boolean;

  /**
   * Emphasize the month when the range of the data covers more than one month but less than one year.
   *
   * @default true
   */
  emphasize_month_ticks?: boolean;

  /**
   * Maximum number of datasets that will be displayed. A value of `0` (zero) means all datasets.
   *
   *
   * @default 0
   */
  max_display_datasets?: number;

  /**
   * Number of ticks that will be displayed.
   * A value of `null` means the maximum amount of ticks (this can cause overlap issues).
   * The ticks are controlled by `d3.js` and in some cases this value will be ignored.
   *
   * @default 6
   */
  ticks_for_graph?: number;

  /**
   * Current first data set to display.
   *
   * @default 0
   */
  cur_display_first_dataset?: number;

  /**
   * Range of dates that will be shown.
   * If from-date (first element) or to-date (second element) is zero, it will be determined according to your data
   *
   * @default [0,0]
   */
  display_date_range?: [number, number];

  /**
   * Set to true if you want to use custom categories.
   *
   * @default false
   */
  custom_categories?: boolean;

  /**
   * Set to true if your dataset only contains date without time.
   *
   * @default false
   */
  is_date_only_format?: boolean;

  /**
   * Whether to show the title for each data set.
   *
   * @default true
   */
  show_y_title?: boolean;

  /**
   * Whether the dates in the dataset are in UTC format.
   *
   * @default true
   */
  date_in_utc?: boolean;

  /**
   * Whether to display the dataset in descending order (i.e. from new to old).
   *
   * @default false
   */
  date_is_descending?: boolean;

  /**
   *
   *
   * @default false
   */
  defined_blocks?: boolean;

  /**
   * This callback will be called when the user clicks on a block.
   *
   * @param data An array with the date(s) and value of the clicked block.
   * @param index The index of the block within the dataset.
   *
   * @default null
   */
  onClickBlock?: (
    data: [Date, number, Date | undefined],
    index: number
  ) => void;

  /**
   * Object that contains the tooltip options for the graph.
   */
  tooltip?: VisavailTooltipConfig;

  /**
   * Object that contains the legends options for the graph.
   */
  legend?: VisavailLegendConfig;

  /**
   * Object that contains the title options for the graph.
   */
  title?: VisavailTitleConfig;

  /**
   * Object that contains the subtitle options for the graph.
   */
  sub_title?: VisavailSubtitleConfig;

  /**
   * Object that contains the icon options for the graph.
   */
  icon?: VisavailIconConfig;

  /**
   * Object that contains the graph options.
   */
  graph?: VisavailGraphConfig;

  /**
   * Object that contains the responsive options for the graph.
   */
  responsive?: VisavailResponsiveConfig;

  /**
   * Object that contains the zoom options for the graph.
   */
  zoom?: VisavailZoomConfig;

  /**
   * Object that contains the tick format options for the graph.
   */
  custom_time_format?: VisavailCustomTickFormatConfig;
}

export interface VisavailMarginConfig {
  /**
   * Margin top in pixels.
   *
   * @default 65
   */
  top?: number;

  /**
   * margin bottom in pixels.
   *
   * @default 40
   */
  bottom?: number;

  /**
   * Margin right in pixels.
   *
   * @default 20
   */
  right?: number;

  /**
   * Margin left in pixels.
   *
   * @default 100
   */
  left?: number;
}

export interface VisavailPaddingConfig {
  /**
   * Padding top in pixels.
   *
   * @default -50
   */
  top?: number;

  /**
   * Padding bottom in pixels.
   *
   * @default 10
   * @unused
   */
  bottom?: number;

  /**
   * Padding right in pixels.
   *
   * @default 0
   * @unused
   */
  right?: number;

  /**
   * Padding left in pixels.
   *
   * @default -100
   * @unused
   */
  left?: number;
}

export interface VisavailTooltipConfig {
  /**
   * Class for the tooltip.
   *
   * @default 'tooltip'
   */
  class?: string;

  /**
   * The height of the tooltip. Corresponds to the css line-height.
   *
   * @default 10
   */
  height?: number;

  /**
   * The position of the tooltip.
   * `'top'` is a line from top to bottom of the graph.
   * `'overlay'` is a normal tooltip that follows the mouse.
   *
   * @default 'top'
   */
  position?: 'top' | 'overlay';

  /**
   * The spacing between the tooltip and the mouse.
   *
   * @default 0
   */
  left_spacing?: number;

  /**
   * Whether to show date and time in the tooltip.
   *
   * @default false
   */
  date_plus_time?: boolean;

  /**
   * Whether to only show the first date (to-date) in the tooltip.
   * This is suggested for a rhombus or circle chart.
   *
   * @default false
   */
  only_first_date?: boolean;

  /**
   * The duration of the animation in ms.
   *
   * @default 150
   */
  duration?: number;

  /**
   * Tooltip zoom options.
   */
  hover_zoom?: VisavailTooltipHoverZoomConfig;
}

export interface VisavailTooltipHoverZoomConfig {
  /**
   * Whether to zoom a block on mouse hover.
   *
   * @default false
   */
  enabled?: boolean;

  /**
   * A number from 0 to 1 determining the zoom. Will be multiplied with `line_spacing`.
   *
   * @default 0.4
   */
  ratio?: number;
}

export interface VisavailLegendConfig {
  enabled?: boolean;
  line_space?: number;
  offset?: number;
  has_no_data_text?: string;
  has_data_text?: string;
}

export interface VisavailTitleConfig {
  enabled?: boolean;
  line_space?: number;
  text?: string;
}

export interface VisavailSubtitleConfig {
  enabled?: boolean;
  line_space?: number;
  from_text?: string;
  to_text?: string;
}

export interface VisavailIconConfig {
  class_has_data?: string;
  class_has_no_data?: string;
}

export interface VisavailGraphConfig {
  type?: string;
  height?: number;
  width?: number;
}

export interface VisavailResponsiveConfig {
  enabled?: boolean;
  onresize?: () => void;
}

export interface VisavailZoomConfig {
  enabled?: boolean;
  onZoom?: (e: any) => void;
  onZoomStart?: (e: any) => void;
  onZoomEnd?: (e: any) => void;
}

export interface VisavailCustomTickFormatConfig {
  format_millisecond?: string;
  format_second?: string;
  format_minute?: string;
  format_hour?: string;
  format_day?: string;
  format_week?: string;
  format_month?: string;
  format_year?: string;
}
