const STORAGE_SCHEDULE_KEY = "memoryCalendarSchedules_v6";
const STORAGE_CATEGORY_KEY = "memoryCalendarCategories_v6";
const STORAGE_WORKOUT_MASTER_KEY = "memoryCalendarWorkoutMasters_v3";
const STORAGE_WORKOUT_SESSION_KEY = "memoryCalendarWorkoutSessions_v3";
const STORAGE_WORKOUT_UI_SETTINGS_KEY = "memoryCalendarWorkoutUiSettings_v1";

function createId() {
  return "id_" + Math.random().toString(36).slice(2, 11);
}

function deepCopy(obj) {
  return JSON.parse(JSON.stringify(obj));
}

const DEFAULT_CATEGORIES = [
  {
    id: createId(),
    name: "業務用",
    color: "#2563eb",
    template: "【中項目】\n- \n\n【小項目】\n- \n\n【内容】\n- "
  },
  {
    id: createId(),
    name: "投稿用",
    color: "#7c3aed",
    template: "【中項目】\n- \n\n【小項目】\n- \n\n【内容】\n- "
  },
  {
    id: createId(),
    name: "副業用",
    color: "#059669",
    template: "【中項目】\n- \n\n【小項目】\n- \n\n【内容】\n- "
  }
];

const DEFAULT_WORKOUT_MASTERS = {
  "肩": ["ショルダープレス", "サイドレイズ"],
  "腕": ["ダンベルカール", "トライセプスエクステンション"],
  "胸": ["ベンチプレス", "ダンベルフライ"],
  "腹筋": ["クランチ", "レッグレイズ"],
  "背中": ["ラットプルダウン", "デッドリフト"],
  "お尻": ["ヒップスラスト", "ブルガリアンスクワット"],
  "脚": ["スクワット", "レッグプレス"]
};

const DEFAULT_WORKOUT_UI_SETTINGS = {
  defaultSets: 3,
  defaultRestSec: 60
};

const views = {
  calendar: document.getElementById("view-calendar"),
  input: document.getElementById("view-input"),
  workout: document.getElementById("view-workout"),
  workoutInput: document.getElementById("view-workout-input"),
  workoutStats: document.getElementById("view-workout-stats"),
  settings: document.getElementById("view-settings")
};

/* header */
const goCalendarBtnHeader = document.getElementById("goCalendarBtnHeader");
const goWorkoutBtnHeader = document.getElementById("goWorkoutBtnHeader");
const goSettingsBtnHeader = document.getElementById("goSettingsBtnHeader");
const appViewTitle = document.getElementById("appViewTitle");

/* calendar */
const monthLabel = document.getElementById("monthLabel");
const calendarGrid = document.getElementById("calendarGrid");
const scheduleList = document.getElementById("scheduleList");
const itemCount = document.getElementById("itemCount");
const prevMonthBtn = document.getElementById("prevMonthBtn");
const nextMonthBtn = document.getElementById("nextMonthBtn");
const goInputBtn = document.getElementById("goInputBtn");

/* input */
const backToCalendarFromInputBtn = document.getElementById("backToCalendarFromInputBtn");
const inputTargetDateLabel = document.getElementById("inputTargetDateLabel");
const toggleInputDatePickerBtn = document.getElementById("toggleInputDatePickerBtn");
const inputMiniCalendarWrap = document.getElementById("inputMiniCalendarWrap");
const inputDatePickerPopup = inputMiniCalendarWrap;
const miniMonthLabel = document.getElementById("miniMonthLabel");
const miniCalendarGrid = document.getElementById("miniCalendarGrid");
const miniPrevMonthBtn = document.getElementById("miniPrevMonthBtn");
const miniNextMonthBtn = document.getElementById("miniNextMonthBtn");
const categorySelect = document.getElementById("categorySelect");
const startDateTimeInput = document.getElementById("startDateTime");
const endDateTimeInput = document.getElementById("endDateTime");
const setNowStartBtn = document.getElementById("setNowStartBtn");
const setNowEndBtn = document.getElementById("setNowEndBtn");
const titleInput = document.getElementById("title");
const contentInput = document.getElementById("content");
const saveRecordBtn = document.getElementById("saveRecordBtn");
const cancelEditRecordBtn = document.getElementById("cancelEditRecordBtn");

/* workout */
const backToCalendarFromWorkoutBtn = document.getElementById("backToCalendarFromWorkoutBtn");
const goWorkoutStatsBtn = document.getElementById("goWorkoutStatsBtn");
const goWorkoutInputBtn = document.getElementById("goWorkoutInputBtn");
const backToWorkoutFromInputBtn = document.getElementById("backToWorkoutFromInputBtn");
const workoutDateInput = document.getElementById("workoutDate");
const workoutInputTargetDateLabel = document.getElementById("workoutInputTargetDateLabel");
const toggleWorkoutInputDatePickerBtn = document.getElementById("toggleWorkoutInputDatePickerBtn");
const workoutInputMiniCalendarWrap = document.getElementById("workoutInputMiniCalendarWrap");
const workoutInputDatePickerPopup = workoutInputMiniCalendarWrap;
const workoutInputMiniMonthLabel = document.getElementById("workoutInputMiniMonthLabel");
const workoutInputMiniCalendarGrid = document.getElementById("workoutInputMiniCalendarGrid");
const workoutInputMiniPrevMonthBtn = document.getElementById("workoutInputMiniPrevMonthBtn");
const workoutInputMiniNextMonthBtn = document.getElementById("workoutInputMiniNextMonthBtn");
const workoutMiniMonthLabel = document.getElementById("workoutMiniMonthLabel");
const workoutMiniCalendarGrid = document.getElementById("workoutMiniCalendarGrid");
const workoutMiniPrevMonthBtn = document.getElementById("workoutMiniPrevMonthBtn");
const workoutMiniNextMonthBtn = document.getElementById("workoutMiniNextMonthBtn");
const bodyPartSelect = document.getElementById("bodyPartSelect");
const exerciseSelect = document.getElementById("exerciseSelect");
const loadPreviousWorkoutBtn = document.getElementById("loadPreviousWorkoutBtn");
const setsInput = document.getElementById("setsInput");
const restSecInput = document.getElementById("restSecInput");
const workoutMemo = document.getElementById("workoutMemo");
const workoutPhaseLabel = document.getElementById("workoutPhaseLabel");
const workoutTimerDisplay = document.getElementById("workoutTimerDisplay");
const workoutSetStatus = document.getElementById("workoutSetStatus");
const workoutMainBtn = document.getElementById("workoutMainBtn");
const workoutResetBtn = document.getElementById("workoutResetBtn");
const setFormsWrap = document.getElementById("setFormsWrap");
const workoutLogs = document.getElementById("workoutLogs");
const saveWorkoutBtn = document.getElementById("saveWorkoutBtn");
const cancelEditWorkoutBtn = document.getElementById("cancelEditWorkoutBtn");
const workoutHistoryList = document.getElementById("workoutHistoryList");
const workoutItemCount = document.getElementById("workoutItemCount");

/* stats */
const backToWorkoutFromStatsBtn = document.getElementById("backToWorkoutFromStatsBtn");
const statsBodyPartSelect = document.getElementById("statsBodyPartSelect");
const statsExerciseSelect = document.getElementById("statsExerciseSelect");
const showWeekStatsBtn = document.getElementById("showWeekStatsBtn");
const showMonthStatsBtn = document.getElementById("showMonthStatsBtn");
const statsCanvas = document.getElementById("statsCanvas");
const statsSummary = document.getElementById("statsSummary");

/* settings */
const backToCalendarFromSettingsBtn = document.getElementById("backToCalendarFromSettingsBtn");
const showCalendarSettingsBtn = document.getElementById("showCalendarSettingsBtn");
const showWorkoutSettingsBtn = document.getElementById("showWorkoutSettingsBtn");
const calendarSettingsSection = document.getElementById("calendarSettingsSection");
const workoutSettingsSection = document.getElementById("workoutSettingsSection");
const newCategoryInput = document.getElementById("newCategoryInput");
const addCategoryBtn = document.getElementById("addCategoryBtn");
const categorySettingsList = document.getElementById("categorySettingsList");
const newBodyPartInput = document.getElementById("newBodyPartInput");
const addBodyPartBtn = document.getElementById("addBodyPartBtn");
const settingsBodyPartSelect = document.getElementById("settingsBodyPartSelect");
const newExerciseInput = document.getElementById("newExerciseInput");
const addExerciseBtn = document.getElementById("addExerciseBtn");
const workoutSettingsList = document.getElementById("workoutSettingsList");
const defaultSetsSettingInput = document.getElementById("defaultSetsSettingInput");
const defaultRestSecSettingInput = document.getElementById("defaultRestSecSettingInput");
const saveWorkoutDefaultsBtn = document.getElementById("saveWorkoutDefaultsBtn");

const today = new Date();
let currentYear = today.getFullYear();
let currentMonth = today.getMonth();
let selectedDate = formatDateKey(today);
let miniYear = today.getFullYear();
let miniMonth = today.getMonth();
let workoutMiniYear = today.getFullYear();
let workoutMiniMonth = today.getMonth();
let workoutInputMiniYear = today.getFullYear();
let workoutInputMiniMonth = today.getMonth();

let workoutTimerInterval = null;
let workoutState = {
  mode: "idle",
  currentSet: 0,
  targetSets: 0,
  phaseStartedAt: null,
  setLogs: []
};

let scheduleEditState = null;
let workoutEditState = null;

function isScheduleEditing() {
  return !!(scheduleEditState && scheduleEditState.id && scheduleEditState.dateKey);
}

function isWorkoutEditing() {
  return !!(workoutEditState && workoutEditState.id && workoutEditState.dateKey);
}

function getCategories() {
  try {
    const raw = localStorage.getItem(STORAGE_CATEGORY_KEY);
    if (!raw) {
      const defaults = deepCopy(DEFAULT_CATEGORIES);
      localStorage.setItem(STORAGE_CATEGORY_KEY, JSON.stringify(defaults));
      return defaults;
    }
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed) || parsed.length === 0) throw new Error();
    return parsed.map(item => ({
      id: item.id || createId(),
      name: item.name || "無題",
      color: item.color || "#2563eb",
      template: item.template || "【中項目】\n- \n\n【小項目】\n- \n\n【内容】\n- "
    }));
  } catch {
    const defaults = deepCopy(DEFAULT_CATEGORIES);
    localStorage.setItem(STORAGE_CATEGORY_KEY, JSON.stringify(defaults));
    return defaults;
  }
}

function saveCategories(data) {
  localStorage.setItem(STORAGE_CATEGORY_KEY, JSON.stringify(data));
}

function getSchedules() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_SCHEDULE_KEY) || "{}");
  } catch {
    return {};
  }
}

function saveSchedules(data) {
  localStorage.setItem(STORAGE_SCHEDULE_KEY, JSON.stringify(data));
}

function getWorkoutMasters() {
  try {
    const raw = localStorage.getItem(STORAGE_WORKOUT_MASTER_KEY);
    if (!raw) {
      const defaults = deepCopy(DEFAULT_WORKOUT_MASTERS);
      localStorage.setItem(STORAGE_WORKOUT_MASTER_KEY, JSON.stringify(defaults));
      return defaults;
    }
    const parsed = JSON.parse(raw);
    if (!parsed || typeof parsed !== "object" || Array.isArray(parsed)) throw new Error();
    return parsed;
  } catch {
    const defaults = deepCopy(DEFAULT_WORKOUT_MASTERS);
    localStorage.setItem(STORAGE_WORKOUT_MASTER_KEY, JSON.stringify(defaults));
    return defaults;
  }
}

function saveWorkoutMasters(data) {
  localStorage.setItem(STORAGE_WORKOUT_MASTER_KEY, JSON.stringify(data));
}

function getWorkoutSessions() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_WORKOUT_SESSION_KEY) || "{}");
  } catch {
    return {};
  }
}

function saveWorkoutSessions(data) {
  localStorage.setItem(STORAGE_WORKOUT_SESSION_KEY, JSON.stringify(data));
}

function getWorkoutUiSettings() {
  try {
    const raw = localStorage.getItem(STORAGE_WORKOUT_UI_SETTINGS_KEY);
    if (!raw) {
      const defaults = deepCopy(DEFAULT_WORKOUT_UI_SETTINGS);
      localStorage.setItem(STORAGE_WORKOUT_UI_SETTINGS_KEY, JSON.stringify(defaults));
      return defaults;
    }
    const parsed = JSON.parse(raw);
    const defaultSets = Math.max(1, Number(parsed.defaultSets || DEFAULT_WORKOUT_UI_SETTINGS.defaultSets));
    const defaultRestSec = Math.max(0, Number(parsed.defaultRestSec ?? DEFAULT_WORKOUT_UI_SETTINGS.defaultRestSec));
    return { defaultSets, defaultRestSec };
  } catch {
    const defaults = deepCopy(DEFAULT_WORKOUT_UI_SETTINGS);
    localStorage.setItem(STORAGE_WORKOUT_UI_SETTINGS_KEY, JSON.stringify(defaults));
    return defaults;
  }
}

function saveWorkoutUiSettings(data) {
  const normalized = {
    defaultSets: Math.max(1, Number(data.defaultSets || DEFAULT_WORKOUT_UI_SETTINGS.defaultSets)),
    defaultRestSec: Math.max(0, Number(data.defaultRestSec ?? DEFAULT_WORKOUT_UI_SETTINGS.defaultRestSec))
  };
  localStorage.setItem(STORAGE_WORKOUT_UI_SETTINGS_KEY, JSON.stringify(normalized));
}

function applyWorkoutDefaultsToInputs() {
  const settings = getWorkoutUiSettings();
  setsInput.value = String(settings.defaultSets);
  restSecInput.value = String(settings.defaultRestSec);
}

function renderWorkoutDefaultSettingsInputs() {
  const settings = getWorkoutUiSettings();
  if (defaultSetsSettingInput) defaultSetsSettingInput.value = String(settings.defaultSets);
  if (defaultRestSecSettingInput) defaultRestSecSettingInput.value = String(settings.defaultRestSec);
}

function saveWorkoutDefaultSettings() {
  const defaultSets = Number(defaultSetsSettingInput?.value || 0);
  const defaultRestSec = Number(defaultRestSecSettingInput?.value || 0);

  if (!defaultSets || defaultSets < 1) {
    alert("初期セット数は1以上で入力してください。");
    return;
  }
  if (defaultRestSec < 0) {
    alert("休憩時間は0以上で入力してください。");
    return;
  }

  saveWorkoutUiSettings({ defaultSets, defaultRestSec });
  applyWorkoutDefaultsToInputs();
  buildSetForms();
  resetWorkoutState();
  renderWorkoutDefaultSettingsInputs();
  alert("筋トレの初期設定を保存しました。");
}

function formatWeightNumber(value) {
  const num = Number(value || 0);
  if (!Number.isFinite(num) || num <= 0) return "0";
  return Number.isInteger(num) ? String(num) : String(num);
}

function calcWorkoutTotalVolume(setLogs) {
  return (setLogs || []).reduce((sum, log) => sum + (Number(log.weight || 0) * Number(log.reps || 0)), 0);
}

function getWorkoutVolumeText(item) {
  const setLogs = item.setLogs || [];
  const validLogs = setLogs.filter(log => Number(log.weight || 0) > 0 && Number(log.reps || 0) > 0);
  if (!validLogs.length) return "総重量:-";

  const totalVolume = calcWorkoutTotalVolume(validLogs);
  const firstWeight = Number(validLogs[0].weight || 0);
  const firstReps = Number(validLogs[0].reps || 0);
  const isSamePattern = validLogs.every(log => Number(log.weight || 0) === firstWeight && Number(log.reps || 0) === firstReps);

  if (isSamePattern) {
    return `総重量:${formatWeightNumber(firstWeight)}kg×${firstReps}回×${validLogs.length}セット=${formatWeightNumber(totalVolume)}kg`;
  }

  return `総重量:${formatWeightNumber(totalVolume)}kg`;
}

function formatDateKey(dateObj) {
  const y = dateObj.getFullYear();
  const m = String(dateObj.getMonth() + 1).padStart(2, "0");
  const d = String(dateObj.getDate()).padStart(2, "0");
  return `${y}-${m}-${d}`;
}

function toDateTimeLocalString(dateObj) {
  const y = dateObj.getFullYear();
  const m = String(dateObj.getMonth() + 1).padStart(2, "0");
  const d = String(dateObj.getDate()).padStart(2, "0");
  const hh = String(dateObj.getHours()).padStart(2, "0");
  const mm = String(dateObj.getMinutes()).padStart(2, "0");
  return `${y}-${m}-${d}T${hh}:${mm}`;
}

function buildDateWithTime(dateKey, hour, minute) {
  const [y, m, d] = dateKey.split("-").map(Number);
  return new Date(y, (m || 1) - 1, d || 1, hour || 0, minute || 0, 0, 0);
}

function updateInputTargetDateLabel() {
  if (inputTargetDateLabel) inputTargetDateLabel.textContent = selectedDate;
}

function updateScheduleFormMode() {
  if (saveRecordBtn) saveRecordBtn.textContent = isScheduleEditing() ? "更新する" : "保存する";
  if (cancelEditRecordBtn) cancelEditRecordBtn.classList.toggle("hidden", !isScheduleEditing());
}

function updateWorkoutFormMode() {
  if (saveWorkoutBtn) saveWorkoutBtn.textContent = isWorkoutEditing() ? "更新する" : "筋トレ記録を保存";
  if (cancelEditWorkoutBtn) cancelEditWorkoutBtn.classList.toggle("hidden", !isWorkoutEditing());
}

function resetScheduleForm() {
  scheduleEditState = null;
  titleInput.value = "";
  setDefaultDateTimes(selectedDate);
  updateContentTemplateIfEmpty(true);
  updateScheduleFormMode();
}

function resetWorkoutForm() {
  workoutEditState = null;
  workoutMemo.value = "";
  applyWorkoutDefaultsToInputs();
  buildSetForms();
  resetWorkoutState();
  updateWorkoutFormMode();
}

function collectWorkoutSetLogsForSave() {
  const targetSets = Number(setsInput.value || 0);
  const baseLogs = workoutEditState?.originalSetLogs || workoutState.setLogs || [];
  const logs = [];

  for (let i = 1; i <= targetSets; i++) {
    const current = getCurrentSetFormData(i);
    const base = baseLogs[i - 1] || {};
    logs.push({
      setNo: i,
      workSec: Number(base.workSec || 0),
      restSec: base.restSec == null ? null : Number(base.restSec || 0),
      weight: current.weight,
      reps: current.reps,
      memo: current.memo,
      assist: current.assist,
      rm: current.rm
    });
  }

  return logs;
}

function startEditSchedule(dateKey, recordId) {
  const schedules = getSchedules();
  const item = (schedules[dateKey] || []).find(x => x.id === recordId);
  if (!item) return;

  scheduleEditState = { dateKey, id: recordId };
  selectedDate = item.startDateTime?.slice(0, 10) || dateKey;
  currentYear = Number(selectedDate.slice(0, 4));
  currentMonth = Number(selectedDate.slice(5, 7)) - 1;
  miniYear = currentYear;
  miniMonth = currentMonth;

  switchView("input");

  titleInput.value = item.title || "";
  categorySelect.value = item.categoryId || "";
  startDateTimeInput.value = item.startDateTime || "";
  endDateTimeInput.value = item.endDateTime || "";
  contentInput.value = item.content || "";

  updateScheduleFormMode();
}

function startEditWorkoutSession(dateKey, sessionId) {
  const sessions = getWorkoutSessions();
  const item = (sessions[dateKey] || []).find(x => x.id === sessionId);
  if (!item) return;

  workoutEditState = {
    dateKey,
    id: sessionId,
    originalSetLogs: deepCopy(item.setLogs || [])
  };

  setWorkoutInputDate(dateKey);
  switchView("workoutInput");

  renderWorkoutBodyPartSelect(item.bodyPart || "");
  renderWorkoutExerciseSelect(item.exercise || "");
  bodyPartSelect.value = item.bodyPart || bodyPartSelect.value;
  renderWorkoutExerciseSelect(item.exercise || "");
  exerciseSelect.value = item.exercise || exerciseSelect.value;
  setsInput.value = String(item.targetSets || (item.setLogs || []).length || 1);
  restSecInput.value = String(getWorkoutUiSettings().defaultRestSec);
  workoutMemo.value = item.memo || "";
  buildSetForms();

  (item.setLogs || []).forEach((log, idx) => {
    const box = setFormsWrap.querySelector(`[data-set-form="${idx + 1}"]`);
    if (!box) return;
    box.querySelector("[data-weight]").value = log.weight || "";
    box.querySelector("[data-reps]").value = log.reps || "";
    box.querySelector("[data-memo]").value = log.memo || "";
    box.querySelector("[data-assist]").checked = !!log.assist;
  });

  updateSetRMDisplays();
  workoutState = {
    mode: "done",
    currentSet: Number(setsInput.value || 0),
    targetSets: Number(setsInput.value || 0),
    phaseStartedAt: null,
    setLogs: deepCopy(item.setLogs || [])
  };
  stopWorkoutTimer();
  renderWorkoutState();
  renderWorkoutLogs();
  updateWorkoutFormMode();
}

function updateWorkoutInputTargetDateLabel() {
  if (workoutInputTargetDateLabel) workoutInputTargetDateLabel.textContent = workoutDateInput.value || selectedDate;
}

function syncDatePartToDateTimeInput(targetInput, dateKey, fallbackHour, fallbackMinute) {
  if (!targetInput) return;
  const currentValue = targetInput.value;
  let hh = fallbackHour;
  let mm = fallbackMinute;

  if (currentValue && currentValue.includes("T")) {
    const timePart = currentValue.split("T")[1] || "";
    const parts = timePart.split(":");
    if (parts.length >= 2) {
      hh = Number(parts[0]);
      mm = Number(parts[1]);
    }
  }

  targetInput.value = toDateTimeLocalString(buildDateWithTime(dateKey, hh, mm));
}

function setDefaultDateTimes(dateKey = selectedDate) {
  const todayKey = formatDateKey(today);
  if (dateKey === todayKey) {
    const now = new Date();
    const plus1 = new Date(now.getTime() + 60 * 60 * 1000);
    startDateTimeInput.value = toDateTimeLocalString(now);
    endDateTimeInput.value = toDateTimeLocalString(plus1);
    return;
  }

  startDateTimeInput.value = toDateTimeLocalString(buildDateWithTime(dateKey, 9, 0));
  endDateTimeInput.value = toDateTimeLocalString(buildDateWithTime(dateKey, 10, 0));
}

function setSelectedDateFromInput(dateKey, keepTime = true) {
  selectedDate = dateKey;
  currentYear = Number(dateKey.slice(0, 4));
  currentMonth = Number(dateKey.slice(5, 7)) - 1;
  miniYear = currentYear;
  miniMonth = currentMonth;

  updateInputTargetDateLabel();

  if (keepTime) {
    syncDatePartToDateTimeInput(startDateTimeInput, dateKey, 9, 0);
    syncDatePartToDateTimeInput(endDateTimeInput, dateKey, 10, 0);
  } else {
    setDefaultDateTimes(dateKey);
  }

  renderMiniCalendar();
  renderCalendar();
  renderScheduleList();
}

function setWorkoutInputDate(dateKey) {
  workoutDateInput.value = dateKey;
  selectedDate = dateKey;
  currentYear = Number(dateKey.slice(0, 4));
  currentMonth = Number(dateKey.slice(5, 7)) - 1;
  workoutMiniYear = currentYear;
  workoutMiniMonth = currentMonth;
  workoutInputMiniYear = currentYear;
  workoutInputMiniMonth = currentMonth;

  updateWorkoutInputTargetDateLabel();
  renderWorkoutMiniCalendar();
  renderWorkoutInputMiniCalendar();
  renderWorkoutHistory();
  renderCalendar();
  renderScheduleList();
}

function toggleInputDatePicker(forceOpen) {
  if (!inputDatePickerPopup) return;
  const shouldOpen = typeof forceOpen === "boolean" ? forceOpen : inputDatePickerPopup.classList.contains("hidden");
  inputDatePickerPopup.classList.toggle("hidden", !shouldOpen);
}

function toggleWorkoutInputDatePicker(forceOpen) {
  if (!workoutInputDatePickerPopup) return;
  const shouldOpen = typeof forceOpen === "boolean" ? forceOpen : workoutInputDatePickerPopup.classList.contains("hidden");
  workoutInputDatePickerPopup.classList.toggle("hidden", !shouldOpen);
}

function setNowToInput(target) {
  const now = new Date();
  target.value = toDateTimeLocalString(now);
}

function formatDateTimeRange(start, end) {
  const s = start ? start.replace("T", " ") : "";
  const e = end ? end.replace("T", " ") : "";
  if (s && e) return `${s} 〜 ${e}`;
  if (s) return `${s} 〜`;
  if (e) return `〜 ${e}`;
  return "日時未設定";
}

function formatTimeOnlyRange(start, end) {
  const s = start && start.includes("T") ? start.split("T")[1].slice(0, 5) : "";
  const e = end && end.includes("T") ? end.split("T")[1].slice(0, 5) : "";
  if (s && e) return `${s} 〜 ${e}`;
  if (s) return `${s} 〜`;
  if (e) return `〜 ${e}`;
  return "時刻未設定";
}

function formatSeconds(sec) {
  const s = Math.max(0, Math.floor(sec));
  const mm = String(Math.floor(s / 60)).padStart(2, "0");
  const ss = String(s % 60).padStart(2, "0");
  return `${mm}:${ss}`;
}

function calcEstimated1RM(weight, reps) {
  const w = Number(weight || 0);
  const r = Number(reps || 0);
  if (w <= 0 || r <= 0) return "";
  const rm = w * (1 + r / 30);
  return rm.toFixed(1);
}

function escapeHtml(str) {
  return String(str)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function updateAppViewTitle(viewName) {
  if (!appViewTitle) return;

  if (viewName === "workout" || viewName === "workoutInput" || viewName === "workoutStats") {
    appViewTitle.textContent = "筋トレ";
    return;
  }

  if (viewName === "calendar" || viewName === "input") {
    appViewTitle.textContent = "カレンダー";
    return;
  }

  if (viewName === "settings") {
    appViewTitle.textContent = "設定";
    return;
  }

  appViewTitle.textContent = "記憶カレンダー";
}

function switchView(viewName) {
  updateAppViewTitle(viewName);
  Object.keys(views).forEach(key => {
    views[key].classList.toggle("active", key === viewName);
  });

  if (viewName === "input") {
    miniYear = Number(selectedDate.slice(0, 4));
    miniMonth = Number(selectedDate.slice(5, 7)) - 1;
    updateInputTargetDateLabel();
    renderMiniCalendar();
    if (!isScheduleEditing()) {
      resetScheduleForm();
    } else {
      updateScheduleFormMode();
    }
    toggleInputDatePicker(false);
  }

  if (viewName === "workout") {
    workoutDateInput.value = selectedDate;
    workoutMiniYear = Number(selectedDate.slice(0, 4));
    workoutMiniMonth = Number(selectedDate.slice(5, 7)) - 1;
    renderWorkoutMiniCalendar();
    renderWorkoutHistory();
  }

  if (viewName === "workoutInput") {
    if (!workoutDateInput.value) workoutDateInput.value = selectedDate;
    workoutInputMiniYear = Number((workoutDateInput.value || selectedDate).slice(0, 4));
    workoutInputMiniMonth = Number((workoutDateInput.value || selectedDate).slice(5, 7)) - 1;
    updateWorkoutInputTargetDateLabel();
    renderWorkoutInputMiniCalendar();
    toggleWorkoutInputDatePicker(false);
    if (!isWorkoutEditing()) {
      resetWorkoutForm();
    } else {
      updateWorkoutFormMode();
    }
    renderWorkoutHistory();
  }

  if (viewName === "workoutStats") {
    renderStatsBodyPartSelect();
  }

  if (viewName === "settings") {
    renderCategorySettingsList();
    renderWorkoutSettingsList();
    renderSettingsBodyPartSelect();
    showCalendarSettings();
  }
}

function showCalendarSettings() {
  calendarSettingsSection.classList.remove("hidden");
  workoutSettingsSection.classList.add("hidden");
  showCalendarSettingsBtn.classList.add("active-tab");
  showWorkoutSettingsBtn.classList.remove("active-tab");
}

function showWorkoutSettings() {
  calendarSettingsSection.classList.add("hidden");
  workoutSettingsSection.classList.remove("hidden");
  showCalendarSettingsBtn.classList.remove("active-tab");
  showWorkoutSettingsBtn.classList.add("active-tab");
}

function renderCategorySelect(selectedId = "") {
  const categories = getCategories();
  categorySelect.innerHTML = "";
  categories.forEach(item => {
    const option = document.createElement("option");
    option.value = item.id;
    option.textContent = item.name;
    categorySelect.appendChild(option);
  });

  if (selectedId && categories.some(item => item.id === selectedId)) {
    categorySelect.value = selectedId;
  }

  updateContentTemplateIfEmpty(true);
}

function updateContentTemplateIfEmpty(force = false) {
  const categories = getCategories();
  const selected = categories.find(item => item.id === categorySelect.value);
  if (!selected) return;
  if (force || contentInput.value.trim() === "") {
    contentInput.value = selected.template || "";
  }
}

function compareSchedulesByStart(a, b) {
  const ta = a.startDateTime || "9999";
  const tb = b.startDateTime || "9999";
  if (ta < tb) return -1;
  if (ta > tb) return 1;
  return 0;
}

function renderCalendar() {
  calendarGrid.innerHTML = "";
  monthLabel.textContent = `${currentYear}年${currentMonth + 1}月`;

  const firstDay = new Date(currentYear, currentMonth, 1);
  const startWeekday = firstDay.getDay();
  const lastDate = new Date(currentYear, currentMonth + 1, 0).getDate();
  const prevMonthLastDate = new Date(currentYear, currentMonth, 0).getDate();

  const schedules = getSchedules();
  const categories = getCategories();
  const totalCells = 42;

  for (let i = 0; i < totalCells; i++) {
    const cell = document.createElement("button");
    cell.type = "button";
    cell.className = "day-cell";

    let cellDate;
    let displayDay;
    let isOtherMonth = false;

    if (i < startWeekday) {
      displayDay = prevMonthLastDate - startWeekday + i + 1;
      cellDate = new Date(currentYear, currentMonth - 1, displayDay);
      isOtherMonth = true;
    } else if (i >= startWeekday + lastDate) {
      displayDay = i - (startWeekday + lastDate) + 1;
      cellDate = new Date(currentYear, currentMonth + 1, displayDay);
      isOtherMonth = true;
    } else {
      displayDay = i - startWeekday + 1;
      cellDate = new Date(currentYear, currentMonth, displayDay);
    }

    const dateKey = formatDateKey(cellDate);
    const items = (schedules[dateKey] || []).slice().sort(compareSchedulesByStart);

    if (isOtherMonth) cell.classList.add("other-month");
    if (dateKey === formatDateKey(today)) cell.classList.add("today");
    if (dateKey === selectedDate) cell.classList.add("selected");

    const dayNumber = document.createElement("div");
    dayNumber.className = "day-number";
    dayNumber.textContent = displayDay;

    const dotWrap = document.createElement("div");
    dotWrap.className = "event-dot-wrap";

    items.slice(0, 3).forEach(item => {
      const dot = document.createElement("span");
      dot.className = "event-dot";
      const category = categories.find(c => c.id === item.categoryId);
      dot.style.background = category ? category.color : "#2563eb";
      dotWrap.appendChild(dot);
    });

    cell.appendChild(dayNumber);
    cell.appendChild(dotWrap);

    cell.addEventListener("click", () => {
      selectedDate = dateKey;
      currentYear = cellDate.getFullYear();
      currentMonth = cellDate.getMonth();
      renderCalendar();
      renderScheduleList();
    });

    calendarGrid.appendChild(cell);
  }
}

function renderMiniCalendar() {
  miniCalendarGrid.innerHTML = "";
  miniMonthLabel.textContent = `${miniYear}年${miniMonth + 1}月`;

  const firstDay = new Date(miniYear, miniMonth, 1);
  const startWeekday = firstDay.getDay();
  const lastDate = new Date(miniYear, miniMonth + 1, 0).getDate();
  const prevMonthLastDate = new Date(miniYear, miniMonth, 0).getDate();
  const totalCells = 42;

  for (let i = 0; i < totalCells; i++) {
    const cell = document.createElement("button");
    cell.type = "button";
    cell.className = "day-cell";

    let cellDate;
    let displayDay;
    let isOtherMonth = false;

    if (i < startWeekday) {
      displayDay = prevMonthLastDate - startWeekday + i + 1;
      cellDate = new Date(miniYear, miniMonth - 1, displayDay);
      isOtherMonth = true;
    } else if (i >= startWeekday + lastDate) {
      displayDay = i - (startWeekday + lastDate) + 1;
      cellDate = new Date(miniYear, miniMonth + 1, displayDay);
      isOtherMonth = true;
    } else {
      displayDay = i - startWeekday + 1;
      cellDate = new Date(miniYear, miniMonth, displayDay);
    }

    const dateKey = formatDateKey(cellDate);

    if (isOtherMonth) cell.classList.add("other-month");
    if (dateKey === formatDateKey(today)) cell.classList.add("today");
    if (dateKey === selectedDate) cell.classList.add("selected");

    const dayNumber = document.createElement("div");
    dayNumber.className = "day-number";
    dayNumber.textContent = displayDay;
    cell.appendChild(dayNumber);

    cell.addEventListener("click", () => {
      miniYear = cellDate.getFullYear();
      miniMonth = cellDate.getMonth();
      setSelectedDateFromInput(dateKey, true);
      toggleInputDatePicker(false);
    });

    miniCalendarGrid.appendChild(cell);
  }
}

function renderWorkoutInputMiniCalendar() {
  if (!workoutInputMiniCalendarGrid) return;

  workoutInputMiniCalendarGrid.innerHTML = "";
  workoutInputMiniMonthLabel.textContent = `${workoutInputMiniYear}年${workoutInputMiniMonth + 1}月`;

  const firstDay = new Date(workoutInputMiniYear, workoutInputMiniMonth, 1);
  const startWeekday = firstDay.getDay();
  const lastDate = new Date(workoutInputMiniYear, workoutInputMiniMonth + 1, 0).getDate();
  const prevMonthLastDate = new Date(workoutInputMiniYear, workoutInputMiniMonth, 0).getDate();
  const totalCells = 42;

  for (let i = 0; i < totalCells; i++) {
    const cell = document.createElement("button");
    cell.type = "button";
    cell.className = "mini-day-cell";

    let cellDate;
    let displayDay;
    let isOtherMonth = false;

    if (i < startWeekday) {
      displayDay = prevMonthLastDate - startWeekday + i + 1;
      cellDate = new Date(workoutInputMiniYear, workoutInputMiniMonth - 1, displayDay);
      isOtherMonth = true;
    } else if (i >= startWeekday + lastDate) {
      displayDay = i - (startWeekday + lastDate) + 1;
      cellDate = new Date(workoutInputMiniYear, workoutInputMiniMonth + 1, displayDay);
      isOtherMonth = true;
    } else {
      displayDay = i - startWeekday + 1;
      cellDate = new Date(workoutInputMiniYear, workoutInputMiniMonth, displayDay);
    }

    const dateKey = formatDateKey(cellDate);

    if (isOtherMonth) cell.classList.add("other-month");
    if (dateKey === formatDateKey(today)) cell.classList.add("today");
    if ((workoutDateInput.value || selectedDate) === dateKey) cell.classList.add("selected");

    const dayNumber = document.createElement("div");
    dayNumber.className = "mini-day-number";
    dayNumber.textContent = displayDay;
    cell.appendChild(dayNumber);

    cell.addEventListener("click", () => {
      workoutInputMiniYear = cellDate.getFullYear();
      workoutInputMiniMonth = cellDate.getMonth();
      setWorkoutInputDate(dateKey);
      toggleWorkoutInputDatePicker(false);
    });

    workoutInputMiniCalendarGrid.appendChild(cell);
  }
}

function renderWorkoutMiniCalendar() {
  workoutMiniCalendarGrid.innerHTML = "";
  workoutMiniMonthLabel.textContent = `${workoutMiniYear}年${workoutMiniMonth + 1}月`;

  const firstDay = new Date(workoutMiniYear, workoutMiniMonth, 1);
  const startWeekday = firstDay.getDay();
  const lastDate = new Date(workoutMiniYear, workoutMiniMonth + 1, 0).getDate();
  const prevMonthLastDate = new Date(workoutMiniYear, workoutMiniMonth, 0).getDate();

  const sessions = getWorkoutSessions();
  const totalCells = 42;

  for (let i = 0; i < totalCells; i++) {
    const cell = document.createElement("button");
    cell.type = "button";
    cell.className = "day-cell";

    let cellDate;
    let displayDay;
    let isOtherMonth = false;

    if (i < startWeekday) {
      displayDay = prevMonthLastDate - startWeekday + i + 1;
      cellDate = new Date(workoutMiniYear, workoutMiniMonth - 1, displayDay);
      isOtherMonth = true;
    } else if (i >= startWeekday + lastDate) {
      displayDay = i - (startWeekday + lastDate) + 1;
      cellDate = new Date(workoutMiniYear, workoutMiniMonth + 1, displayDay);
      isOtherMonth = true;
    } else {
      displayDay = i - startWeekday + 1;
      cellDate = new Date(workoutMiniYear, workoutMiniMonth, displayDay);
    }

    const dateKey = formatDateKey(cellDate);
    const items = sessions[dateKey] || [];

    if (isOtherMonth) cell.classList.add("other-month");
    if (dateKey === formatDateKey(today)) cell.classList.add("today");
    if (workoutDateInput.value === dateKey) cell.classList.add("selected");

    const dayNumber = document.createElement("div");
    dayNumber.className = "day-number";
    dayNumber.textContent = displayDay;

    const dotWrap = document.createElement("div");
    dotWrap.className = "workout-mini-day-dot-wrap";

    const dotCount = Math.min(items.length, 3);
    for (let j = 0; j < dotCount; j++) {
      const dot = document.createElement("span");
      dot.className = "workout-mini-day-dot";
      dotWrap.appendChild(dot);
    }

    cell.appendChild(dayNumber);
    cell.appendChild(dotWrap);

    cell.addEventListener("click", () => {
      const pickedDate = formatDateKey(cellDate);
      workoutDateInput.value = pickedDate;
      selectedDate = pickedDate;
      currentYear = cellDate.getFullYear();
      currentMonth = cellDate.getMonth();
      workoutMiniYear = cellDate.getFullYear();
      workoutMiniMonth = cellDate.getMonth();

      workoutInputMiniYear = Number(workoutDateInput.value.slice(0, 4));
      workoutInputMiniMonth = Number(workoutDateInput.value.slice(5, 7)) - 1;
      updateWorkoutInputTargetDateLabel();
      renderWorkoutMiniCalendar();
      renderWorkoutInputMiniCalendar();
      renderWorkoutHistory();
      renderCalendar();
      renderScheduleList();
    });

    workoutMiniCalendarGrid.appendChild(cell);
  }
}

function renderScheduleList() {
  const schedules = getSchedules();
  const categories = getCategories();
  const items = (schedules[selectedDate] || []).slice().sort(compareSchedulesByStart);

  itemCount.textContent = `${items.length}件`;

  if (items.length === 0) {
    scheduleList.innerHTML = `<p class="empty-text">まだ記録はありません。</p>`;
    return;
  }

  scheduleList.innerHTML = items.map(item => {
    const category = categories.find(c => c.id === item.categoryId);
    const categoryName = category ? category.name : "未分類";
    const categoryColor = category ? category.color : "#2563eb";

    return `
      <details class="schedule-item schedule-item-simple">
        <summary class="schedule-summary">
          <div class="schedule-summary-main">
            <h3 class="schedule-title">${escapeHtml(item.title)}</h3>
            <div class="schedule-time">${escapeHtml(formatTimeOnlyRange(item.startDateTime, item.endDateTime))}</div>
            <div class="schedule-category-inline" style="color:${escapeHtml(categoryColor)}">${escapeHtml(categoryName)}</div>
          </div>
          <div class="schedule-actions inline-action-row" onclick="event.stopPropagation()">
            <button class="edit-small-btn" type="button" onclick="editSchedule('${selectedDate}','${item.id}')">編集</button>
            <button class="close-x-btn" type="button" aria-label="削除" onclick="deleteSchedule('${selectedDate}','${item.id}')">×</button>
          </div>
        </summary>
        <div class="schedule-detail-wrap">
          <div class="schedule-detail-top">
            <div class="schedule-category" style="background:${escapeHtml(categoryColor)}">${escapeHtml(categoryName)}</div>
            <button class="edit-small-btn" type="button" onclick="editSchedule('${selectedDate}','${item.id}')">編集</button>
          </div>
          <div class="schedule-content">${escapeHtml(item.content || "内容なし")}</div>
          <div class="schedule-detail-meta">${escapeHtml(formatDateTimeRange(item.startDateTime, item.endDateTime))}</div>
        </div>
      </details>
    `;
  }).join("");
}

function addSchedule() {
  const categoryId = categorySelect.value;
  const title = titleInput.value.trim();
  const startDateTime = startDateTimeInput.value;
  const endDateTime = endDateTimeInput.value;
  const content = contentInput.value.trim();

  const categories = getCategories();
  const selectedCategory = categories.find(item => item.id === categoryId);

  if (!selectedCategory) {
    alert("項目を選択してください。");
    return;
  }
  if (!title) {
    alert("タイトルを入力してください。");
    return;
  }
  if (!startDateTime) {
    alert("開始日時を入力してください。");
    return;
  }
  if (endDateTime && startDateTime > endDateTime) {
    alert("終了日時は開始日時以降にしてください。");
    return;
  }

  const saveDateKey = startDateTime.slice(0, 10);
  const normalizedStartDateTime = startDateTimeInput.value;
  const normalizedEndDateTime = endDateTimeInput.value;
  const schedules = getSchedules();

  if (isScheduleEditing()) {
    const oldDateKey = scheduleEditState.dateKey;
    const oldId = scheduleEditState.id;
    if (schedules[oldDateKey]) {
      schedules[oldDateKey] = schedules[oldDateKey].filter(item => item.id !== oldId);
      if (schedules[oldDateKey].length === 0) delete schedules[oldDateKey];
    }

    if (!schedules[saveDateKey]) schedules[saveDateKey] = [];
    schedules[saveDateKey].push({
      id: oldId,
      categoryId,
      title,
      startDateTime: normalizedStartDateTime,
      endDateTime: normalizedEndDateTime,
      content,
      createdAt: Date.now()
    });
  } else {
    if (!schedules[saveDateKey]) schedules[saveDateKey] = [];
    schedules[saveDateKey].push({
      id: createId(),
      categoryId,
      title,
      startDateTime: normalizedStartDateTime,
      endDateTime: normalizedEndDateTime,
      content,
      createdAt: Date.now()
    });
  }

  const wasEditing = isScheduleEditing();
  saveSchedules(schedules);

  selectedDate = saveDateKey;
  currentYear = Number(saveDateKey.slice(0, 4));
  currentMonth = Number(saveDateKey.slice(5, 7)) - 1;

  resetScheduleForm();

  renderMiniCalendar();
  renderCalendar();
  renderScheduleList();
  switchView("calendar");
  alert(wasEditing ? "記録を更新しました。" : "記録を保存しました。");
}

function deleteSchedule(dateKey, recordId) {
  const schedules = getSchedules();
  if (!schedules[dateKey]) return;

  schedules[dateKey] = schedules[dateKey].filter(item => item.id !== recordId);
  if (schedules[dateKey].length === 0) delete schedules[dateKey];

  saveSchedules(schedules);
  renderCalendar();
  renderScheduleList();
}

function renderCategorySettingsList() {
  const categories = getCategories();

  if (categories.length === 0) {
    categorySettingsList.innerHTML = `<p class="empty-text">項目がありません。</p>`;
    return;
  }

  categorySettingsList.innerHTML = categories.map(item => `
    <div class="setting-item">
      <div class="setting-item-top">
        <div class="setting-item-title">${escapeHtml(item.name)}</div>
      </div>

      <div class="form-group">
        <label>項目名</label>
        <input type="text" id="name_${item.id}" value="${escapeHtml(item.name)}" />
      </div>

      <div class="form-group">
        <label>カレンダー色</label>
        <div class="color-row">
          <input type="color" id="color_${item.id}" class="color-input" value="${escapeHtml(item.color)}" />
          <span>${escapeHtml(item.color)}</span>
        </div>
      </div>

      <div class="form-group">
        <label>内容テンプレ</label>
        <textarea id="template_${item.id}" rows="6">${escapeHtml(item.template)}</textarea>
      </div>

      <div class="small-btn-row">
        <button class="save-small-btn" type="button" onclick="saveCategorySetting('${item.id}')">保存</button>
        <button class="delete-small-btn" type="button" onclick="deleteCategory('${item.id}')">削除</button>
      </div>
    </div>
  `).join("");
}

function addCategory() {
  const name = newCategoryInput.value.trim();
  if (!name) {
    alert("追加する項目名を入力してください。");
    return;
  }

  const categories = getCategories();
  if (categories.some(item => item.name === name)) {
    alert("その項目名は既に存在します。");
    return;
  }

  categories.push({
    id: createId(),
    name,
    color: "#2563eb",
    template: "【中項目】\n- \n\n【小項目】\n- \n\n【内容】\n- "
  });

  saveCategories(categories);
  newCategoryInput.value = "";
  renderCategorySelect();
  renderCategorySettingsList();
}

function saveCategorySetting(categoryId) {
  const categories = getCategories();
  const idx = categories.findIndex(item => item.id === categoryId);
  if (idx === -1) return;

  const nameEl = document.getElementById(`name_${categoryId}`);
  const colorEl = document.getElementById(`color_${categoryId}`);
  const templateEl = document.getElementById(`template_${categoryId}`);

  const newName = nameEl.value.trim();
  const newColor = colorEl.value;
  const newTemplate = templateEl.value;

  if (!newName) {
    alert("項目名を入力してください。");
    return;
  }
  if (categories.some(item => item.id !== categoryId && item.name === newName)) {
    alert("同じ項目名が既にあります。");
    return;
  }

  categories[idx].name = newName;
  categories[idx].color = newColor;
  categories[idx].template = newTemplate;

  saveCategories(categories);
  renderCategorySelect(categoryId);
  renderCategorySettingsList();
  renderCalendar();
  renderScheduleList();
}

function deleteCategory(categoryId) {
  const categories = getCategories();
  if (categories.length <= 1) {
    alert("項目は最低1つ必要です。");
    return;
  }

  const target = categories.find(item => item.id === categoryId);
  if (!target) return;

  if (!confirm(`「${target.name}」を削除しますか？\nこの項目の記録も削除されます。`)) return;

  const newCategories = categories.filter(item => item.id !== categoryId);
  saveCategories(newCategories);

  const schedules = getSchedules();
  Object.keys(schedules).forEach(dateKey => {
    schedules[dateKey] = schedules[dateKey].filter(item => item.categoryId !== categoryId);
    if (schedules[dateKey].length === 0) delete schedules[dateKey];
  });
  saveSchedules(schedules);

  renderCategorySelect();
  renderCategorySettingsList();
  renderCalendar();
  renderScheduleList();
}

function renderWorkoutBodyPartSelect(selected = "") {
  const masters = getWorkoutMasters();
  const bodyParts = Object.keys(masters);
  bodyPartSelect.innerHTML = "";

  bodyParts.forEach(part => {
    const option = document.createElement("option");
    option.value = part;
    option.textContent = part;
    bodyPartSelect.appendChild(option);
  });

  if (selected && bodyParts.includes(selected)) bodyPartSelect.value = selected;
  renderWorkoutExerciseSelect();
}

function renderWorkoutExerciseSelect(selected = "") {
  const masters = getWorkoutMasters();
  const bodyPart = bodyPartSelect.value;
  const exercises = masters[bodyPart] || [];
  exerciseSelect.innerHTML = "";

  exercises.forEach(ex => {
    const option = document.createElement("option");
    option.value = ex;
    option.textContent = ex;
    exerciseSelect.appendChild(option);
  });

  if (selected && exercises.includes(selected)) exerciseSelect.value = selected;
}

function renderSettingsBodyPartSelect(selected = "") {
  const masters = getWorkoutMasters();
  const bodyParts = Object.keys(masters);
  settingsBodyPartSelect.innerHTML = "";

  bodyParts.forEach(part => {
    const option = document.createElement("option");
    option.value = part;
    option.textContent = part;
    settingsBodyPartSelect.appendChild(option);
  });

  if (selected && bodyParts.includes(selected)) settingsBodyPartSelect.value = selected;
}

function renderWorkoutSettingsList() {
  const masters = getWorkoutMasters();
  const bodyParts = Object.keys(masters);

  if (!bodyParts.length) {
    workoutSettingsList.innerHTML = `<p class="empty-text">部位がありません。</p>`;
    return;
  }

  workoutSettingsList.innerHTML = bodyParts.map(part => {
    const inputId = `exercise_input_${createId()}`;
    const menusHtml = (masters[part] || []).map(ex => `
      <div class="menu-line">
        <span class="menu-line-text">${escapeHtml(ex)}</span>
        <button class="x-btn" type="button" onclick="deleteExercise('${escapeHtml(part)}','${escapeHtml(ex)}')" aria-label="${escapeHtml(ex)} を削除">×</button>
      </div>
    `).join("");

    return `
      <div class="setting-item workout-setting-card">
        <div class="setting-item-top workout-setting-head">
          <div class="setting-item-title">${escapeHtml(part)}</div>
          <button class="x-btn bodypart-x-btn" type="button" onclick="deleteBodyPart('${escapeHtml(part)}')" aria-label="${escapeHtml(part)} を削除">×</button>
        </div>
        <div class="menu-list-wrap">
          ${menusHtml || `<p class="empty-text">メニューがありません。</p>`}
        </div>
        <div class="inline-add-row">
          <input id="${inputId}" type="text" placeholder="メニューを追加" />
          <button class="sub-btn compact-btn" type="button" onclick="addExerciseFromList('${escapeHtml(part)}','${inputId}')">追加</button>
        </div>
      </div>
    `;
  }).join("");
}

function addBodyPart() {
  const name = newBodyPartInput.value.trim();
  if (!name) {
    alert("追加する部位名を入力してください。");
    return;
  }
  const masters = getWorkoutMasters();
  if (masters[name]) {
    alert("その部位は既に存在します。");
    return;
  }
  masters[name] = ["メニュー1"];
  saveWorkoutMasters(masters);
  newBodyPartInput.value = "";
  renderWorkoutBodyPartSelect(name);
  renderSettingsBodyPartSelect(name);
  renderWorkoutSettingsList();
  renderStatsBodyPartSelect();
}

function addExercise() {
  const bodyPart = settingsBodyPartSelect.value;
  const name = newExerciseInput.value.trim();
  if (!bodyPart) {
    alert("対象部位を選択してください。");
    return;
  }
  if (!name) {
    alert("追加するメニュー名を入力してください。");
    return;
  }
  const masters = getWorkoutMasters();
  if (!masters[bodyPart]) masters[bodyPart] = [];
  if (masters[bodyPart].includes(name)) {
    alert("そのメニューは既に存在します。");
    return;
  }
  masters[bodyPart].push(name);
  saveWorkoutMasters(masters);
  newExerciseInput.value = "";
  renderWorkoutBodyPartSelect(bodyPart);
  renderWorkoutExerciseSelect(name);
  renderSettingsBodyPartSelect(bodyPart);
  renderWorkoutSettingsList();
  renderStatsBodyPartSelect();
}

function addExerciseFromList(bodyPart, inputId) {
  const input = document.getElementById(inputId);
  if (!input) return;

  const name = input.value.trim();
  if (!bodyPart) {
    alert("対象部位が見つかりません。");
    return;
  }
  if (!name) {
    alert("追加するメニュー名を入力してください。");
    return;
  }

  const masters = getWorkoutMasters();
  if (!masters[bodyPart]) masters[bodyPart] = [];
  if (masters[bodyPart].includes(name)) {
    alert("そのメニューは既に存在します。");
    return;
  }

  masters[bodyPart].push(name);
  saveWorkoutMasters(masters);
  input.value = "";
  renderWorkoutBodyPartSelect(bodyPart);
  renderWorkoutExerciseSelect(name);
  renderSettingsBodyPartSelect(bodyPart);
  renderWorkoutSettingsList();
  renderStatsBodyPartSelect();
}


function deleteBodyPart(bodyPart) {
  const masters = getWorkoutMasters();
  if (Object.keys(masters).length <= 1) {
    alert("部位は最低1つ必要です。");
    return;
  }
  if (!confirm(`「${bodyPart}」を削除しますか？`)) return;
  delete masters[bodyPart];
  saveWorkoutMasters(masters);
  renderWorkoutBodyPartSelect();
  renderSettingsBodyPartSelect();
  renderWorkoutSettingsList();
  renderStatsBodyPartSelect();
}

function deleteExercise(bodyPart, exercise) {
  const masters = getWorkoutMasters();
  if (!masters[bodyPart] || masters[bodyPart].length <= 1) {
    alert("メニューは最低1つ必要です。");
    return;
  }
  if (!confirm(`「${exercise}」を削除しますか？`)) return;
  masters[bodyPart] = masters[bodyPart].filter(x => x !== exercise);
  saveWorkoutMasters(masters);
  renderWorkoutBodyPartSelect(bodyPart);
  renderSettingsBodyPartSelect(bodyPart);
  renderWorkoutSettingsList();
  renderStatsBodyPartSelect();
}

function buildSetForms() {
  const targetSets = Number(setsInput.value || 0);
  if (!targetSets || targetSets < 1) {
    setFormsWrap.innerHTML = `<p class="empty-text">セット数を入力してください。</p>`;
    return;
  }

  const existing = {};
  setFormsWrap.querySelectorAll("[data-set-form]").forEach(box => {
    const setNo = box.getAttribute("data-set-form");
    existing[setNo] = {
      weight: box.querySelector("[data-weight]")?.value || "",
      reps: box.querySelector("[data-reps]")?.value || "",
      memo: box.querySelector("[data-memo]")?.value || "",
      assist: box.querySelector("[data-assist]")?.checked || false
    };
  });

  setFormsWrap.innerHTML = "";
  for (let i = 1; i <= targetSets; i++) {
    const prev = existing[String(i)] || {};
    const item = document.createElement("div");
    item.className = "set-form-item";
    item.setAttribute("data-set-form", String(i));
    item.innerHTML = `
      <div class="set-form-title-row">
        <div class="set-form-title">セット ${i}</div>
        ${i >= 2 ? `<button class="copy-set-btn" type="button" data-copy-prev="${i}">前のセットをコピー</button>` : ``}
      </div>
      <div class="time-grid">
        <div class="form-group">
          <label>重さ</label>
          <input data-weight type="number" min="0" step="0.5" value="${escapeHtml(prev.weight || "")}" placeholder="kg" />
        </div>
        <div class="form-group">
          <label>回数</label>
          <input data-reps type="number" min="1" step="1" value="${escapeHtml(prev.reps || "")}" placeholder="回" />
        </div>
      </div>
      <div class="form-group">
        <label>メモ</label>
        <textarea data-memo rows="2" placeholder="セットメモ">${escapeHtml(prev.memo || "")}</textarea>
      </div>
      <div class="checkbox-row">
        <input data-assist type="checkbox" ${prev.assist ? "checked" : ""} />
        <label>補助あり</label>
      </div>
      <div class="schedule-content" data-rm-display>RM: -</div>
    `;

    item.querySelector("[data-weight]").addEventListener("input", updateSetRMDisplays);
    item.querySelector("[data-reps]").addEventListener("input", updateSetRMDisplays);

    const copyBtn = item.querySelector("[data-copy-prev]");
    if (copyBtn) {
      copyBtn.addEventListener("click", () => copyPreviousSetValues(Number(copyBtn.getAttribute("data-copy-prev"))));
    }

    setFormsWrap.appendChild(item);
  }
  updateSetRMDisplays();

  if (workoutState.mode !== "idle" && workoutState.mode !== "done") {
    workoutState.targetSets = targetSets;
    renderWorkoutState();
  }
}

function copyPreviousSetValues(currentSetNo) {
  if (!currentSetNo || currentSetNo <= 1) return;

  const prevBox = setFormsWrap.querySelector(`[data-set-form="${currentSetNo - 1}"]`);
  const currentBox = setFormsWrap.querySelector(`[data-set-form="${currentSetNo}"]`);
  if (!prevBox || !currentBox) return;

  currentBox.querySelector("[data-weight]").value = prevBox.querySelector("[data-weight]")?.value || "";
  currentBox.querySelector("[data-reps]").value = prevBox.querySelector("[data-reps]")?.value || "";
  currentBox.querySelector("[data-memo]").value = prevBox.querySelector("[data-memo]")?.value || "";
  currentBox.querySelector("[data-assist]").checked = !!prevBox.querySelector("[data-assist]")?.checked;
  updateSetRMDisplays();
}

function updateSetRMDisplays() {
  setFormsWrap.querySelectorAll("[data-set-form]").forEach(box => {
    const weight = box.querySelector("[data-weight]").value;
    const reps = box.querySelector("[data-reps]").value;
    const rm = calcEstimated1RM(weight, reps);
    box.querySelector("[data-rm-display]").textContent = rm ? `RM: ${rm}kg` : "RM: -";
  });
}

function getCurrentSetFormData(setNo) {
  const box = setFormsWrap.querySelector(`[data-set-form="${setNo}"]`);
  if (!box) return { weight: "", reps: "", memo: "", assist: false, rm: "" };

  const weight = box.querySelector("[data-weight]").value;
  const reps = box.querySelector("[data-reps]").value;
  const memo = box.querySelector("[data-memo]").value;
  const assist = box.querySelector("[data-assist]").checked;
  const rm = calcEstimated1RM(weight, reps);

  return { weight, reps, memo, assist, rm };
}

function stopWorkoutTimer() {
  if (workoutTimerInterval) {
    clearInterval(workoutTimerInterval);
    workoutTimerInterval = null;
  }
}

function resetWorkoutState() {
  workoutState = {
    mode: "idle",
    currentSet: 0,
    targetSets: Number(setsInput.value || 0),
    phaseStartedAt: null,
    setLogs: []
  };
  stopWorkoutTimer();
  renderWorkoutState();
  renderWorkoutLogs();
}

function startWorkoutTimer() {
  stopWorkoutTimer();
  workoutTimerInterval = setInterval(renderWorkoutState, 300);
}

function renderWorkoutState() {
  let phaseText = "待機中";
  let elapsed = "00:00";

  if (workoutState.mode === "work") {
    phaseText = `セット ${workoutState.currentSet} 実施中`;
    elapsed = formatSeconds((Date.now() - workoutState.phaseStartedAt) / 1000);
    workoutMainBtn.textContent = "1セット終了 / 休憩開始";
  } else if (workoutState.mode === "rest") {
    phaseText = `休憩中（次はセット ${workoutState.currentSet + 1}）`;
    elapsed = formatSeconds((Date.now() - workoutState.phaseStartedAt) / 1000);
    workoutMainBtn.textContent = "休憩終了 / 次セット開始";
  } else if (workoutState.mode === "done") {
    phaseText = "完了";
    workoutMainBtn.textContent = "完了済み";
  } else {
    workoutMainBtn.textContent = "開始";
  }

  workoutPhaseLabel.textContent = phaseText;
  workoutTimerDisplay.textContent = elapsed;
  workoutSetStatus.textContent = `セット ${workoutState.currentSet} / ${workoutState.targetSets || setsInput.value || 0}`;
}

function renderWorkoutLogs() {
  if (!workoutState.setLogs.length) {
    workoutLogs.innerHTML = `<p class="empty-text">まだセット記録はありません。</p>`;
    return;
  }

  workoutLogs.innerHTML = workoutState.setLogs.map(log => `
    <div class="workout-log-item">
      <div class="workout-log-item-title">セット ${log.setNo}</div>
      <div class="workout-log-item-body">
        実施時間：${formatSeconds(log.workSec || 0)}<br>
        休憩時間：${log.restSec != null ? formatSeconds(log.restSec) : "未記録"}<br>
        重さ：${escapeHtml(log.weight || "-")}kg / 回数：${escapeHtml(log.reps || "-")}回 / 補助：${log.assist ? "あり" : "なし"} / RM：${escapeHtml(log.rm || "-")}
      </div>
    </div>
  `).join("");
}

function workoutMainAction() {
  const targetSets = Number(setsInput.value || 0);
  if (!targetSets || targetSets < 1) {
    alert("セット数を1以上で入力してください。");
    return;
  }

  if (workoutState.mode === "idle") {
    workoutState.targetSets = targetSets;
    workoutState.currentSet = 1;
    workoutState.mode = "work";
    workoutState.phaseStartedAt = Date.now();
    workoutState.setLogs = [];
    startWorkoutTimer();
    renderWorkoutState();
    return;
  }

  if (workoutState.mode === "work") {
    const workSec = Math.max(1, Math.round((Date.now() - workoutState.phaseStartedAt) / 1000));
    const setData = getCurrentSetFormData(workoutState.currentSet);

    workoutState.setLogs.push({
      setNo: workoutState.currentSet,
      workSec,
      restSec: null,
      ...setData
    });

    if (workoutState.currentSet >= workoutState.targetSets) {
      workoutState.mode = "done";
      workoutState.phaseStartedAt = null;
      stopWorkoutTimer();
      renderWorkoutState();
      renderWorkoutLogs();
      return;
    }

    workoutState.mode = "rest";
    workoutState.phaseStartedAt = Date.now();
    startWorkoutTimer();
    renderWorkoutState();
    renderWorkoutLogs();
    return;
  }

  if (workoutState.mode === "rest") {
    const restSec = Math.max(1, Math.round((Date.now() - workoutState.phaseStartedAt) / 1000));
    const lastLog = workoutState.setLogs[workoutState.setLogs.length - 1];
    if (lastLog) lastLog.restSec = restSec;

    workoutState.currentSet += 1;
    workoutState.mode = "work";
    workoutState.phaseStartedAt = Date.now();
    startWorkoutTimer();
    renderWorkoutState();
    renderWorkoutLogs();
  }
}

function saveWorkoutSession() {
  const dateKey = workoutDateInput.value || selectedDate;
  const bodyPart = bodyPartSelect.value;
  const exercise = exerciseSelect.value;
  const targetSets = Number(setsInput.value || 0);
  const memo = workoutMemo.value.trim();

  if (!bodyPart || !exercise) {
    alert("部位とメニューを選択してください。");
    return;
  }
  if (!targetSets || targetSets < 1) {
    alert("セット数を1以上で入力してください。");
    return;
  }

  const wasEditing = isWorkoutEditing();
  let finalSetLogs = [];

  if (wasEditing) {
    finalSetLogs = collectWorkoutSetLogsForSave();
  } else {
    if (workoutState.mode !== "done" || workoutState.setLogs.length === 0) {
      alert("筋トレを完了させてから保存してください。");
      return;
    }
    finalSetLogs = deepCopy(workoutState.setLogs);
  }

  const sessions = getWorkoutSessions();

  if (wasEditing) {
    const oldDateKey = workoutEditState.dateKey;
    const oldId = workoutEditState.id;
    if (sessions[oldDateKey]) {
      sessions[oldDateKey] = sessions[oldDateKey].filter(x => x.id !== oldId);
      if (!sessions[oldDateKey].length) delete sessions[oldDateKey];
    }
    if (!sessions[dateKey]) sessions[dateKey] = [];
    sessions[dateKey].push({
      id: oldId,
      bodyPart,
      exercise,
      targetSets,
      memo,
      setLogs: finalSetLogs,
      createdAt: Date.now()
    });
  } else {
    if (!sessions[dateKey]) sessions[dateKey] = [];
    sessions[dateKey].push({
      id: createId(),
      bodyPart,
      exercise,
      targetSets,
      memo,
      setLogs: finalSetLogs,
      createdAt: Date.now()
    });
  }

  saveWorkoutSessions(sessions);

  selectedDate = dateKey;
  currentYear = Number(dateKey.slice(0, 4));
  currentMonth = Number(dateKey.slice(5, 7)) - 1;
  workoutMiniYear = currentYear;
  workoutMiniMonth = currentMonth;

  resetWorkoutForm();
  renderWorkoutMiniCalendar();
  renderWorkoutHistory();
  renderCalendar();
  renderScheduleList();
  switchView("workout");
  alert(wasEditing ? "筋トレ記録を更新しました。" : "筋トレ記録を保存しました。");
}

function renderWorkoutHistory() {
  const dateKey = workoutDateInput.value || selectedDate;
  const sessions = getWorkoutSessions();
  const items = (sessions[dateKey] || []).slice().sort((a, b) => a.createdAt - b.createdAt);

  workoutItemCount.textContent = `${items.length}件`;

  if (!items.length) {
    workoutHistoryList.innerHTML = `<p class="empty-text">まだ筋トレ記録はありません。</p>`;
    return;
  }

  workoutHistoryList.innerHTML = items.map(item => {
    const totalWork = item.setLogs.reduce((sum, x) => sum + (x.workSec || 0), 0);
    const totalRest = item.setLogs.reduce((sum, x) => sum + (x.restSec || 0), 0);
    const topRm = Math.max(...item.setLogs.map(x => Number(x.rm || 0)), 0);
    const volumeText = getWorkoutVolumeText(item);
    const detailHtml = (item.setLogs || []).map((log, idx) => `
      <div class="workout-history-detail-row">
        <div class="workout-history-detail-title">${idx + 1}セット目</div>
        <div class="workout-history-detail-body">
          重さ：${escapeHtml(log.weight || "-")}kg / 回数：${escapeHtml(log.reps || "-")}回 / 補助：${log.assist ? "あり" : "なし"}<br>
          実施：${formatSeconds(log.workSec || 0)} / 休憩：${log.restSec != null ? formatSeconds(log.restSec) : "未記録"} / RM：${escapeHtml(log.rm || "-")}
        </div>
        <div class="workout-history-detail-body">メモ：${escapeHtml(log.memo || "なし")}</div>
      </div>
    `).join("");

    return `
      <details class="workout-history-simple">
        <summary class="workout-history-summary">
          <div class="workout-history-summary-main">
            <div class="workout-history-simple-title">${escapeHtml(item.bodyPart)} / ${escapeHtml(item.exercise)}</div>
            <div class="workout-history-simple-body">
              セット:${escapeHtml(item.targetSets || "-")} /
              実施:${formatSeconds(totalWork)} /
              休憩:${formatSeconds(totalRest)} /
              最高RM:${topRm ? topRm.toFixed(1) : "-"}kg
            </div>
            <div class="workout-history-simple-body">${escapeHtml(volumeText)}</div>
          </div>
          <div class="workout-history-actions inline-action-row" onclick="event.stopPropagation()">
            <button class="edit-small-btn" type="button" onclick="editWorkoutSession('${dateKey}','${item.id}')">編集</button>
            <button class="close-x-btn" type="button" aria-label="削除" onclick="deleteWorkoutSession('${dateKey}','${item.id}')">×</button>
          </div>
        </summary>
        <div class="workout-history-detail-wrap">
          <div class="workout-history-detail-top">
            <div class="workout-history-simple-body">全体メモ：${escapeHtml(item.memo || "メモなし")}</div>
            <button class="edit-small-btn" type="button" onclick="editWorkoutSession('${dateKey}','${item.id}')">編集</button>
          </div>
          ${detailHtml || `<div class="workout-history-simple-body">セット詳細はありません。</div>`}
        </div>
      </details>
    `;
  }).join("");
}

function deleteWorkoutSession(dateKey, sessionId) {
  const sessions = getWorkoutSessions();
  if (!sessions[dateKey]) return;

  sessions[dateKey] = sessions[dateKey].filter(x => x.id !== sessionId);
  if (!sessions[dateKey].length) delete sessions[dateKey];

  saveWorkoutSessions(sessions);
  renderWorkoutMiniCalendar();
  renderWorkoutHistory();
}

function loadPreviousWorkout() {
  const bodyPart = bodyPartSelect.value;
  const exercise = exerciseSelect.value;
  if (!bodyPart || !exercise) {
    alert("部位とメニューを選択してください。");
    return;
  }

  const sessions = getWorkoutSessions();
  const all = [];

  Object.keys(sessions).forEach(dateKey => {
    sessions[dateKey].forEach(item => {
      if (item.bodyPart === bodyPart && item.exercise === exercise) {
        all.push({ dateKey, ...item });
      }
    });
  });

  all.sort((a, b) => b.createdAt - a.createdAt);
  const latest = all[0];

  if (!latest) {
    alert("前回記録がありません。");
    return;
  }

  const settings = getWorkoutUiSettings();
  setsInput.value = String(latest.targetSets || latest.setLogs.length || settings.defaultSets);
  workoutMemo.value = latest.memo || "";
  buildSetForms();

  latest.setLogs.forEach((log, idx) => {
    const setNo = idx + 1;
    const box = setFormsWrap.querySelector(`[data-set-form="${setNo}"]`);
    if (!box) return;
    box.querySelector("[data-weight]").value = log.weight || "";
    box.querySelector("[data-reps]").value = log.reps || "";
    box.querySelector("[data-memo]").value = log.memo || "";
    box.querySelector("[data-assist]").checked = !!log.assist;
  });
  updateSetRMDisplays();

  alert(`前回記録を読み込みました（${latest.dateKey}）`);
}

function renderStatsBodyPartSelect(selected = "") {
  const masters = getWorkoutMasters();
  const bodyParts = Object.keys(masters);
  statsBodyPartSelect.innerHTML = "";

  bodyParts.forEach(part => {
    const option = document.createElement("option");
    option.value = part;
    option.textContent = part;
    statsBodyPartSelect.appendChild(option);
  });

  if (selected && bodyParts.includes(selected)) statsBodyPartSelect.value = selected;
  renderStatsExerciseSelect();
}

function renderStatsExerciseSelect(selected = "") {
  const masters = getWorkoutMasters();
  const bodyPart = statsBodyPartSelect.value;
  const exercises = masters[bodyPart] || [];
  statsExerciseSelect.innerHTML = "";

  exercises.forEach(ex => {
    const option = document.createElement("option");
    option.value = ex;
    option.textContent = ex;
    statsExerciseSelect.appendChild(option);
  });

  if (selected && exercises.includes(selected)) statsExerciseSelect.value = selected;
}

function collectWorkoutStats(days) {
  const bodyPart = statsBodyPartSelect.value;
  const exercise = statsExerciseSelect.value;
  const sessions = getWorkoutSessions();
  const end = new Date();
  const start = new Date();
  start.setDate(end.getDate() - (days - 1));

  const map = new Map();

  for (let d = new Date(start); d <= end; d.setDate(d.getDate() + 1)) {
    map.set(formatDateKey(new Date(d)), 0);
  }

  Object.keys(sessions).forEach(dateKey => {
    if (!map.has(dateKey)) return;
    sessions[dateKey].forEach(item => {
      if (item.bodyPart === bodyPart && item.exercise === exercise) {
        const topRm = Math.max(...item.setLogs.map(x => Number(x.rm || 0)), 0);
        map.set(dateKey, Math.max(map.get(dateKey), topRm));
      }
    });
  });

  return Array.from(map.entries()).map(([date, value]) => ({ date, value }));
}

function drawStats(days) {
  const ctx = statsCanvas.getContext("2d");
  const data = collectWorkoutStats(days);

  ctx.clearRect(0, 0, statsCanvas.width, statsCanvas.height);
  ctx.fillStyle = "#ffffff";
  ctx.fillRect(0, 0, statsCanvas.width, statsCanvas.height);

  const left = 48;
  const right = 20;
  const top = 20;
  const bottom = 40;
  const width = statsCanvas.width - left - right;
  const height = statsCanvas.height - top - bottom;
  const maxVal = Math.max(...data.map(x => x.value), 1);

  ctx.strokeStyle = "#cbd5e1";
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.moveTo(left, top);
  ctx.lineTo(left, top + height);
  ctx.lineTo(left + width, top + height);
  ctx.stroke();

  ctx.fillStyle = "#64748b";
  ctx.font = "12px sans-serif";

  for (let i = 0; i < 5; i++) {
    const yVal = maxVal * (1 - i / 4);
    const y = top + height * (i / 4);
    ctx.fillText(yVal.toFixed(0), 6, y + 4);
    ctx.strokeStyle = "#e5e7eb";
    ctx.beginPath();
    ctx.moveTo(left, y);
    ctx.lineTo(left + width, y);
    ctx.stroke();
  }

  const stepX = data.length > 1 ? width / (data.length - 1) : width;
  ctx.strokeStyle = "#2563eb";
  ctx.lineWidth = 2;
  ctx.beginPath();

  data.forEach((point, idx) => {
    const x = left + stepX * idx;
    const y = top + height - (point.value / maxVal) * height;
    if (idx === 0) ctx.moveTo(x, y);
    else ctx.lineTo(x, y);
  });
  ctx.stroke();

  ctx.fillStyle = "#2563eb";
  data.forEach((point, idx) => {
    const x = left + stepX * idx;
    const y = top + height - (point.value / maxVal) * height;
    ctx.beginPath();
    ctx.arc(x, y, 4, 0, Math.PI * 2);
    ctx.fill();

    ctx.fillStyle = "#64748b";
    ctx.fillText(point.date.slice(5), x - 12, top + height + 18);

    if (point.value > 0) {
      ctx.fillStyle = "#111827";
      ctx.fillText(point.value.toFixed(1), x - 12, y - 10);
    }
    ctx.fillStyle = "#2563eb";
  });

  const nonZero = data.filter(x => x.value > 0);
  const latest = nonZero[nonZero.length - 1];
  const best = Math.max(...data.map(x => x.value), 0);
  statsSummary.textContent = `期間: ${days === 7 ? "1週間" : "1か月"} / 最新RM: ${latest ? latest.value.toFixed(1) : "-"}kg / 最高RM: ${best ? best.toFixed(1) : "-"}kg`;
}

window.deleteSchedule = deleteSchedule;
window.editSchedule = startEditSchedule;
window.saveCategorySetting = saveCategorySetting;
window.deleteCategory = deleteCategory;
window.deleteBodyPart = deleteBodyPart;
window.deleteExercise = deleteExercise;
window.deleteWorkoutSession = deleteWorkoutSession;
window.editWorkoutSession = startEditWorkoutSession;
window.addExerciseFromList = addExerciseFromList;

function bindEvents() {
  goCalendarBtnHeader.addEventListener("click", () => switchView("calendar"));
  goWorkoutBtnHeader.addEventListener("click", () => switchView("workout"));
  goSettingsBtnHeader.addEventListener("click", () => switchView("settings"));

  prevMonthBtn.addEventListener("click", () => {
    currentMonth--;
    if (currentMonth < 0) {
      currentMonth = 11;
      currentYear--;
    }
    renderCalendar();
  });

  nextMonthBtn.addEventListener("click", () => {
    currentMonth++;
    if (currentMonth > 11) {
      currentMonth = 0;
      currentYear++;
    }
    renderCalendar();
  });

  miniPrevMonthBtn.addEventListener("click", () => {
    miniMonth--;
    if (miniMonth < 0) {
      miniMonth = 11;
      miniYear--;
    }
    renderMiniCalendar();
  });

  miniNextMonthBtn.addEventListener("click", () => {
    miniMonth++;
    if (miniMonth > 11) {
      miniMonth = 0;
      miniYear++;
    }
    renderMiniCalendar();
  });

  if (toggleInputDatePickerBtn) {
    toggleInputDatePickerBtn.addEventListener("click", () => toggleInputDatePicker());
  }

  workoutMiniPrevMonthBtn.addEventListener("click", () => {
    workoutMiniMonth--;
    if (workoutMiniMonth < 0) {
      workoutMiniMonth = 11;
      workoutMiniYear--;
    }
    renderWorkoutMiniCalendar();
  });

  workoutMiniNextMonthBtn.addEventListener("click", () => {
    workoutMiniMonth++;
    if (workoutMiniMonth > 11) {
      workoutMiniMonth = 0;
      workoutMiniYear++;
    }
    renderWorkoutMiniCalendar();
  });

  if (workoutInputMiniPrevMonthBtn) {
    workoutInputMiniPrevMonthBtn.addEventListener("click", () => {
      workoutInputMiniMonth--;
      if (workoutInputMiniMonth < 0) {
        workoutInputMiniMonth = 11;
        workoutInputMiniYear--;
      }
      renderWorkoutInputMiniCalendar();
    });
  }

  if (workoutInputMiniNextMonthBtn) {
    workoutInputMiniNextMonthBtn.addEventListener("click", () => {
      workoutInputMiniMonth++;
      if (workoutInputMiniMonth > 11) {
        workoutInputMiniMonth = 0;
        workoutInputMiniYear++;
      }
      renderWorkoutInputMiniCalendar();
    });
  }

  if (toggleWorkoutInputDatePickerBtn) {
    toggleWorkoutInputDatePickerBtn.addEventListener("click", () => toggleWorkoutInputDatePicker());
  }

  goInputBtn.addEventListener("click", () => {
    scheduleEditState = null;
    switchView("input");
  });
  goWorkoutInputBtn.addEventListener("click", () => {
    workoutEditState = null;
    switchView("workoutInput");
  });
  backToCalendarFromInputBtn.addEventListener("click", () => switchView("calendar"));
  backToWorkoutFromInputBtn.addEventListener("click", () => switchView("workout"));
  if (backToCalendarFromWorkoutBtn) {
    backToCalendarFromWorkoutBtn.addEventListener("click", () => switchView("calendar"));
  }
  backToCalendarFromSettingsBtn.addEventListener("click", () => switchView("calendar"));
  backToWorkoutFromStatsBtn.addEventListener("click", () => switchView("workout"));
  goWorkoutStatsBtn.addEventListener("click", () => switchView("workoutStats"));

  setNowStartBtn.addEventListener("click", () => setNowToInput(startDateTimeInput));
  setNowEndBtn.addEventListener("click", () => setNowToInput(endDateTimeInput));

  addCategoryBtn.addEventListener("click", addCategory);
  saveRecordBtn.addEventListener("click", addSchedule);
  if (cancelEditRecordBtn) cancelEditRecordBtn.addEventListener("click", () => {
    scheduleEditState = null;
    resetScheduleForm();
  });
  categorySelect.addEventListener("change", () => updateContentTemplateIfEmpty(true));

  bodyPartSelect.addEventListener("change", () => renderWorkoutExerciseSelect());

  setsInput.addEventListener("input", () => {
    buildSetForms();
    resetWorkoutState();
  });

  addBodyPartBtn.addEventListener("click", addBodyPart);
  addExerciseBtn.addEventListener("click", addExercise);
  if (saveWorkoutDefaultsBtn) saveWorkoutDefaultsBtn.addEventListener("click", saveWorkoutDefaultSettings);
  loadPreviousWorkoutBtn.addEventListener("click", loadPreviousWorkout);

  workoutMainBtn.addEventListener("click", workoutMainAction);
  workoutResetBtn.addEventListener("click", () => {
    resetWorkoutState();
    buildSetForms();
  });
  saveWorkoutBtn.addEventListener("click", saveWorkoutSession);
  if (cancelEditWorkoutBtn) cancelEditWorkoutBtn.addEventListener("click", () => {
    workoutEditState = null;
    resetWorkoutForm();
  });

  workoutDateInput.addEventListener("change", () => {
    if (workoutDateInput.value) {
      selectedDate = workoutDateInput.value;
      workoutMiniYear = Number(workoutDateInput.value.slice(0, 4));
      workoutMiniMonth = Number(workoutDateInput.value.slice(5, 7)) - 1;
      workoutInputMiniYear = workoutMiniYear;
      workoutInputMiniMonth = workoutMiniMonth;
      currentYear = workoutMiniYear;
      currentMonth = workoutMiniMonth;
      updateWorkoutInputTargetDateLabel();
      renderWorkoutMiniCalendar();
      renderWorkoutInputMiniCalendar();
      renderWorkoutHistory();
      renderCalendar();
      renderScheduleList();
    }
  });

  statsBodyPartSelect.addEventListener("change", () => renderStatsExerciseSelect());
  showWeekStatsBtn.addEventListener("click", () => drawStats(7));
  showMonthStatsBtn.addEventListener("click", () => drawStats(30));

  showCalendarSettingsBtn.addEventListener("click", showCalendarSettings);
  showWorkoutSettingsBtn.addEventListener("click", showWorkoutSettings);
}

function init() {
  renderCategorySelect();
  updateInputTargetDateLabel();
  renderCalendar();
  renderMiniCalendar();
  renderScheduleList();

  renderWorkoutBodyPartSelect();
  renderSettingsBodyPartSelect();
  renderWorkoutSettingsList();
  renderStatsBodyPartSelect();

  workoutDateInput.value = selectedDate;
  updateWorkoutInputTargetDateLabel();
  renderWorkoutMiniCalendar();
  renderWorkoutInputMiniCalendar();
  applyWorkoutDefaultsToInputs();
  buildSetForms();
  resetWorkoutState();
  renderWorkoutHistory();

  renderCategorySettingsList();
  updateScheduleFormMode();
  updateWorkoutFormMode();
  renderWorkoutDefaultSettingsInputs();
  setDefaultDateTimes();
  bindEvents();
  showCalendarSettings();
  switchView("calendar");
}

init();