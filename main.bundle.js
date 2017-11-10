webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/api/node_modules/uuid/index.js":
/***/ (function(module, exports, __webpack_require__) {

var v1 = __webpack_require__("../../../../../src/api/node_modules/uuid/v1.js");
var v4 = __webpack_require__("../../../../../src/api/node_modules/uuid/v4.js");

var uuid = v4;
uuid.v1 = v1;
uuid.v4 = v4;

module.exports = uuid;


/***/ }),

/***/ "../../../../../src/api/node_modules/uuid/lib/bytesToUuid.js":
/***/ (function(module, exports) {

/**
 * Convert array of 16 byte values to UUID string format of the form:
 * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
 */
var byteToHex = [];
for (var i = 0; i < 256; ++i) {
  byteToHex[i] = (i + 0x100).toString(16).substr(1);
}

function bytesToUuid(buf, offset) {
  var i = offset || 0;
  var bth = byteToHex;
  return bth[buf[i++]] + bth[buf[i++]] +
          bth[buf[i++]] + bth[buf[i++]] + '-' +
          bth[buf[i++]] + bth[buf[i++]] + '-' +
          bth[buf[i++]] + bth[buf[i++]] + '-' +
          bth[buf[i++]] + bth[buf[i++]] + '-' +
          bth[buf[i++]] + bth[buf[i++]] +
          bth[buf[i++]] + bth[buf[i++]] +
          bth[buf[i++]] + bth[buf[i++]];
}

module.exports = bytesToUuid;


/***/ }),

/***/ "../../../../../src/api/node_modules/uuid/lib/rng-browser.js":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {// Unique ID creation requires a high quality random # generator.  In the
// browser this is a little complicated due to unknown quality of Math.random()
// and inconsistent support for the `crypto` API.  We do the best we can via
// feature-detection
var rng;

var crypto = global.crypto || global.msCrypto; // for IE 11
if (crypto && crypto.getRandomValues) {
  // WHATWG crypto RNG - http://wiki.whatwg.org/wiki/Crypto
  var rnds8 = new Uint8Array(16); // eslint-disable-line no-undef
  rng = function whatwgRNG() {
    crypto.getRandomValues(rnds8);
    return rnds8;
  };
}

if (!rng) {
  // Math.random()-based (RNG)
  //
  // If all else fails, use Math.random().  It's fast, but is of unspecified
  // quality.
  var rnds = new Array(16);
  rng = function() {
    for (var i = 0, r; i < 16; i++) {
      if ((i & 0x03) === 0) r = Math.random() * 0x100000000;
      rnds[i] = r >>> ((i & 0x03) << 3) & 0xff;
    }

    return rnds;
  };
}

module.exports = rng;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("../../../../webpack/buildin/global.js")))

/***/ }),

/***/ "../../../../../src/api/node_modules/uuid/v1.js":
/***/ (function(module, exports, __webpack_require__) {

var rng = __webpack_require__("../../../../../src/api/node_modules/uuid/lib/rng-browser.js");
var bytesToUuid = __webpack_require__("../../../../../src/api/node_modules/uuid/lib/bytesToUuid.js");

// **`v1()` - Generate time-based UUID**
//
// Inspired by https://github.com/LiosK/UUID.js
// and http://docs.python.org/library/uuid.html

// random #'s we need to init node and clockseq
var _seedBytes = rng();

// Per 4.5, create and 48-bit node id, (47 random bits + multicast bit = 1)
var _nodeId = [
  _seedBytes[0] | 0x01,
  _seedBytes[1], _seedBytes[2], _seedBytes[3], _seedBytes[4], _seedBytes[5]
];

// Per 4.2.2, randomize (14 bit) clockseq
var _clockseq = (_seedBytes[6] << 8 | _seedBytes[7]) & 0x3fff;

// Previous uuid creation time
var _lastMSecs = 0, _lastNSecs = 0;

// See https://github.com/broofa/node-uuid for API details
function v1(options, buf, offset) {
  var i = buf && offset || 0;
  var b = buf || [];

  options = options || {};

  var clockseq = options.clockseq !== undefined ? options.clockseq : _clockseq;

  // UUID timestamps are 100 nano-second units since the Gregorian epoch,
  // (1582-10-15 00:00).  JSNumbers aren't precise enough for this, so
  // time is handled internally as 'msecs' (integer milliseconds) and 'nsecs'
  // (100-nanoseconds offset from msecs) since unix epoch, 1970-01-01 00:00.
  var msecs = options.msecs !== undefined ? options.msecs : new Date().getTime();

  // Per 4.2.1.2, use count of uuid's generated during the current clock
  // cycle to simulate higher resolution clock
  var nsecs = options.nsecs !== undefined ? options.nsecs : _lastNSecs + 1;

  // Time since last uuid creation (in msecs)
  var dt = (msecs - _lastMSecs) + (nsecs - _lastNSecs)/10000;

  // Per 4.2.1.2, Bump clockseq on clock regression
  if (dt < 0 && options.clockseq === undefined) {
    clockseq = clockseq + 1 & 0x3fff;
  }

  // Reset nsecs if clock regresses (new clockseq) or we've moved onto a new
  // time interval
  if ((dt < 0 || msecs > _lastMSecs) && options.nsecs === undefined) {
    nsecs = 0;
  }

  // Per 4.2.1.2 Throw error if too many uuids are requested
  if (nsecs >= 10000) {
    throw new Error('uuid.v1(): Can\'t create more than 10M uuids/sec');
  }

  _lastMSecs = msecs;
  _lastNSecs = nsecs;
  _clockseq = clockseq;

  // Per 4.1.4 - Convert from unix epoch to Gregorian epoch
  msecs += 12219292800000;

  // `time_low`
  var tl = ((msecs & 0xfffffff) * 10000 + nsecs) % 0x100000000;
  b[i++] = tl >>> 24 & 0xff;
  b[i++] = tl >>> 16 & 0xff;
  b[i++] = tl >>> 8 & 0xff;
  b[i++] = tl & 0xff;

  // `time_mid`
  var tmh = (msecs / 0x100000000 * 10000) & 0xfffffff;
  b[i++] = tmh >>> 8 & 0xff;
  b[i++] = tmh & 0xff;

  // `time_high_and_version`
  b[i++] = tmh >>> 24 & 0xf | 0x10; // include version
  b[i++] = tmh >>> 16 & 0xff;

  // `clock_seq_hi_and_reserved` (Per 4.2.2 - include variant)
  b[i++] = clockseq >>> 8 | 0x80;

  // `clock_seq_low`
  b[i++] = clockseq & 0xff;

  // `node`
  var node = options.node || _nodeId;
  for (var n = 0; n < 6; ++n) {
    b[i + n] = node[n];
  }

  return buf ? buf : bytesToUuid(b);
}

module.exports = v1;


/***/ }),

/***/ "../../../../../src/api/node_modules/uuid/v4.js":
/***/ (function(module, exports, __webpack_require__) {

var rng = __webpack_require__("../../../../../src/api/node_modules/uuid/lib/rng-browser.js");
var bytesToUuid = __webpack_require__("../../../../../src/api/node_modules/uuid/lib/bytesToUuid.js");

function v4(options, buf, offset) {
  var i = buf && offset || 0;

  if (typeof(options) == 'string') {
    buf = options == 'binary' ? new Array(16) : null;
    options = null;
  }
  options = options || {};

  var rnds = options.random || (options.rng || rng)();

  // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`
  rnds[6] = (rnds[6] & 0x0f) | 0x40;
  rnds[8] = (rnds[8] & 0x3f) | 0x80;

  // Copy bytes to buffer, if provided
  if (buf) {
    for (var ii = 0; ii < 16; ++ii) {
      buf[i + ii] = rnds[ii];
    }
  }

  return buf || bytesToUuid(rnds);
}

module.exports = v4;


/***/ }),

/***/ "../../../../../src/api/src/ts/classes/Application.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const EventEmitter_1 = __webpack_require__("../../../../../src/api/src/ts/classes/EventEmitter.ts");
const Factory_1 = __webpack_require__("../../../../../src/api/src/ts/classes/Factory.ts");
const ApplicationEventNames_1 = __webpack_require__("../../../../../src/api/src/ts/enums/event_names/ApplicationEventNames.ts");
/**
 * Приложение. Текущий объект приложения можно получить вызвав функцию `GetApplication()`.
 * Экземпляр `IApplication` содержит в себе менеджер открытых документов, менеджер локализованных ресурсов
 * и фабрику классов. Кроме того, приложение содержит экземпляр `IEventsPublisher`, посредством
 * которого можно получать уведомления о различных событиях, происходящих в процессе работы приложения.
 */
class Application extends EventEmitter_1.EventEmitter {
    // *** Методы для внутреннего использования ****
    _setDocumentManager(value) {
        const tmp = this._documentManager;
        this._documentManager = value;
        this.emit(ApplicationEventNames_1.ApplicationEventNames.DocumentManagerSwitched, this.factory.createIEventArgs({ source: this, data: { newValue: value, oldValue: tmp } }));
    }
    _setDataProvider(value) {
        const tmp = this._dataProvider;
        this._dataProvider = value;
        this.emit(ApplicationEventNames_1.ApplicationEventNames.DataProviderSwitched, this.factory.createIEventArgs({ source: this, data: { newValue: value, oldValue: tmp } }));
    }
    _setResourceManager(value) {
        const tmp = this._resourceManager;
        this._resourceManager = value;
        this.emit(ApplicationEventNames_1.ApplicationEventNames.ResourceManagerSwitched, this.factory.createIEventArgs({ source: this, data: { newValue: value, oldValue: tmp } }));
    }
    _setFactory(value) {
        const tmp = this._factory;
        this._factory = value;
        this.emit(ApplicationEventNames_1.ApplicationEventNames.FactorySwitched, this.factory.createIEventArgs({ source: this, data: { newValue: value, oldValue: tmp } }));
    }
    _setDatabase(db) {
        this._commonDatabase = db;
    }
    _getDocumentManager() {
        return this._documentManager;
    }
    _getDataProvider() {
        return this._dataProvider;
    }
    _getResourceManager() {
        return this._resourceManager;
    }
    _getFactory() {
        return this._factory;
    }
    _getDatabase() {
        return this._commonDatabase;
    }
    /**
     * База данных компаний.
     */
    get commonDatabase() {
        return this._commonDatabase;
    }
    /**
     * Провайдер данных, предназначенный для взаимодействия с сервером.
     */
    get dataProvider() {
        return this._dataProvider;
    }
    /**
     * Получить идентификатор текущего пользователя.
     * @returns {string}
     */
    getCurrentUserId() {
        return this.dataProvider.getCurrentUserId();
    }
    /**
     * Менеджер документов. Позволяет открывать, сохранять и закрывать документы.
     * Так же позволяет устанавливать нужный открытый вам документ в качестве текущего.
     */
    get documentManager() {
        return this._documentManager;
    }
    /**
     * Конструктор класса.
     */
    constructor() {
        super();
        this._factory = new Factory_1.Factory(this);
        this._resourceManager = this.factory.createIResourceManager('ru');
        this._documentManager = this.factory.createIDocumentManager();
        this._dataProvider = this._factory.createIDataProvider();
        this._commonDatabase = this._factory.createIDatabase(this);
        this._dataProvider = this._factory.createIDataProvider();
    }
    /**
     * Менеждер локализованных ресурсов.
     * @returns {IResourceManager}
     */
    get resourceManager() {
        return this._resourceManager;
    }
    /**
     * Фабрика классов.
     */
    get factory() {
        return this._factory;
    }
}
exports.Application = Application;
//# sourceMappingURL=Application.js.map

/***/ }),

/***/ "../../../../../src/api/src/ts/classes/CommandFactory.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Фабрика команд.
 */
class CommandFactory {
    /**
     * Конструктор класса.
     * @param {IApplication} app Приложение, в составе которого используется фабрика команд.
     */
    constructor(app) {
        this._application = app;
    }
    /**
     * Приложение, в составе которого используется фабрика команд.
     */
    get application() {
        return this._application;
    }
    hasCommand(cmdName) {
        throw new Error('Is not implemented.');
    }
    createICommand(context, cmdName, cmdArgs) {
        throw new Error('Is not implemented.');
    }
}
exports.CommandFactory = CommandFactory;
//# sourceMappingURL=CommandFactory.js.map

/***/ }),

/***/ "../../../../../src/api/src/ts/classes/CommandOutput.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * CommandOutput.ts
 */
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Этот класс содержит в себе информацию о результатах выполнения команды.
 */
class CommandOutput {
    /**
     * Конструктор класса.
     * @param {any} data Объект, в котором размещаются данные,
     * возвращаемые командой (если такие данные имеются).
     * @param {Result} result Краткая информация об успешности выполнения команды.
     */
    constructor({ data, result }) {
        this._data = data;
        this._result = result;
    }
    /**
     * Объект, в котором размещаются данные, возвращаемые командой (если такие данные имеются).
     * @returns {any}
     */
    get data() {
        return this._data;
    }
    /**
     * Краткая информация об успешности выполнения команды.
     * @returns {Result}
     */
    get report() {
        return this._result;
    }
}
exports.CommandOutput = CommandOutput;
//# sourceMappingURL=CommandOutput.js.map

/***/ }),

/***/ "../../../../../src/api/src/ts/classes/CommandStack.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Стек вызова команд. Этот стек определяется в составе документа,
 * в контексте которого выполнялись команды, помещаемые в данный стек.
 */
class CommandStack {
    /**
     * Конструктор класса.
     * @param {IDocumentContext} context Контекст использования документа.
     * Стек вызова команд находится в составе контекста.
     */
    constructor(context) {
        this._redoStack = new Array();
        this._commandStack = new Array();
        this._context = context;
    }
    /**
     * Контекст использования документа.
     * @returns {IDocumentContext}
     */
    get context() {
        return this._context;
    }
    set context(value) {
        this._context = value;
    }
    /**
     * Количество команд, находящихся в стеке вызовов.
     */
    get length() {
        return this._commandStack.length;
    }
    /**
     * Добавить команду на верширу стека вызовов команд.
     *
     * **ВНИМАНИЕ!** Данный метод предназначен для
     * внутреннего использования, не вызывайте его самостоятельно!
     * В случае успешного выполнения, команда сама себя добавит в стек
     * вызова команд (эта логика заложена в базовом классе `Command`,
     * от которого должны наследоваться все команды приложения).
     *
     * @param {ICommand} command Команда, которую следует добавить на
     * вершину стека вызовов команд.
     * @returns {IResult} Возвращается отчёт об успешности операции.
     */
    push(command) {
        const factory = this.context.document.application.factory;
        if (command) {
            this._commandStack.push(command);
            // поскольку цепочка вызовов `undo()` прервана новой поступившей
            // командой, то очищаем стек, предназначенный для использования
            // методом `redo()`.
            this._redoStack = new Array();
            return factory.createIResult(true, '');
        }
        else {
            return factory.createIResult(false, 'В стек команд можно добавлять только команды.');
        }
    }
    /**
     * Отменить действие команды, находящейся на вершине стека вызова команд.
     * Отменённая команда автоматически выталкивается из стека, тем самым позволяя
     * выполнять отмену для предыдущей команды и т.д.
     * @returns {IResult} Возвращается отчёт об успешности операции.
     */
    undo() {
        const factory = this.context.document.application.factory;
        if (this._commandStack.length) {
            const cmd = this._commandStack.pop();
            this._redoStack.push(cmd);
            return cmd.undo();
        }
        else {
            return factory.createIResult(false, 'В стеке выполненных команд отсутствуют команды.');
        }
    }
    /**
     * Вернуть обратно результаты выполнения команды (т.е. отменить отмену). В этом случае
     * на вершину стека вызова команд возвращается та команда, действия которой ранее
     * были отменены при помощи вызова `undo()`.
     * @returns {IResult} Возвращается отчёт об успешности операции.
     */
    redo() {
        const factory = this.context.document.application.factory;
        if (this._redoStack.length) {
            const cmd = this._redoStack.pop();
            this._commandStack.push(cmd);
            return cmd.execute().report;
        }
        else {
            return factory.createIResult(false, 'В стеке восстановления команд отсутствуют команды.');
        }
    }
}
exports.CommandStack = CommandStack;
//# sourceMappingURL=CommandStack.js.map

/***/ }),

/***/ "../../../../../src/api/src/ts/classes/Condition.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const EventEmitter_1 = __webpack_require__("../../../../../src/api/src/ts/classes/EventEmitter.ts");
const TypeNames_1 = __webpack_require__("../../../../../src/api/src/ts/enums/TypeNames.ts");
const TransactionStatus_1 = __webpack_require__("../../../../../src/api/src/ts/enums/TransactionStatus.ts");
/**
 * Условие, размещаемое на уровне.
 */
class Condition extends EventEmitter_1.EventEmitter {
    _setID(value) {
        this._id = value;
    }
    isInsideOfTransaction() {
        let transaction = this._document.getCurrentTransaction();
        if (!transaction || transaction.status != TransactionStatus_1.TransactionStatus.Started)
            return false;
        else
            return true;
    }
    get document() {
        return this._document;
    }
    constructor(doc, code, text) {
        super();
        this._document = doc;
        this._typeName = TypeNames_1.TypeNames.Condition;
        this._code = code;
        this._name = text;
        this._node = null;
        this._inputConnections = [];
        this._variants = [];
    }
    /**
     * Проверка на то, был ли удалён данный объект опосредованно - через удаление одного из его
     * предков.
     * @returns {boolean}
     */
    isDeletedByForefather() {
        let parent = this.getParent();
        let context = this.document.getContext();
        let treeNode = context.treeNodes.get(parent.nodeId);
        return treeNode.isDeleted();
    }
    /**
     * Проверка на то, был ли объект удалён каким-либо образом: напрямую, через установку
     * свойства `isDeletedDirectly`, или же опосредованно, через удаление родителя
     * (см. метод `isDeletedByForefather()`).
     * @returns {boolean}
     */
    isDeleted() {
        let context = this.document.getContext();
        let treeNode = context.treeNodes.get(this.nodeId);
        return treeNode.isDeleted();
    }
    /**
     * Удалить узел или условие.
     * @returns {IResult} Отчёт о результате выполнения операции.
     */
    delete() {
        if (!this.isInsideOfTransaction()) {
            throw new Error('Редактировать объект можно только в предварительно открытой транзакции.');
        }
        let context = this.document.getContext();
        let treeNode = context.treeNodes.get(this.nodeId);
        let result = treeNode.delete();
        if (result.success)
            this.document.getCurrentTransaction().editedItems.set(this.id, this);
        return result;
    }
    /**
     * Заблокировать узел или условие.
     * @returns {IResult} Отчёт о результате выполнения операции.
     */
    lock() {
        if (!this.isInsideOfTransaction()) {
            throw new Error('Редактировать объект можно только в предварительно открытой транзакции.');
        }
        let context = this.document.getContext();
        let treeNode = context.treeNodes.get(this.nodeId);
        return treeNode.lock();
    }
    /**
     * Разблокировать узел или условие.
     * @returns {IResult} Отчёт о результате выполнения операции.
     */
    unlock() {
        if (!this.isInsideOfTransaction()) {
            throw new Error('Редактировать объект можно только в предварительно открытой транзакции.');
        }
        let context = this.document.getContext();
        let treeNode = context.treeNodes.get(this.nodeId);
        return treeNode.unlock();
    }
    /**
     * Получить идентификатор пользователя, заблокировавшего данный объект.
     * Объект может быть заблокирован опосредованно, через одного из своих предков.
     * @returns {string}
     */
    getLockerID() {
        let context = this.document.getContext();
        let treeNode = context.treeNodes.get(this.nodeId);
        return treeNode.getLockerID();
    }
    get lockerId() {
        return this._lockerId;
    }
    set lockerId(value) {
        if (!this.isInsideOfTransaction()) {
            throw new Error('Редактировать объект можно только в предварительно открытой транзакции.');
        }
        if (this.getLockerID() != this.document.application.getCurrentUserId()) {
            throw new Error('Редактировать можно только объекты, предварительно заблокированые вами.');
        }
        this._lockerId = value;
        this.document.getCurrentTransaction().editedItems.set(this.id, this);
    }
    get isChanged() {
        return this._isChanged;
    }
    set isChanged(value) {
        if (!this.isInsideOfTransaction()) {
            throw new Error('Редактировать объект можно только в предварительно открытой транзакции.');
        }
        if (this.getLockerID() != this.document.application.getCurrentUserId()) {
            throw new Error('Редактировать можно только объекты, предварительно заблокированые вами.');
        }
        this._isChanged = value;
        this.document.getCurrentTransaction().editedItems.set(this.id, this);
    }
    get nodeId() {
        return this._node;
    }
    set nodeId(value) {
        if (!this.isInsideOfTransaction()) {
            throw new Error('Редактировать объект можно только в предварительно открытой транзакции.');
        }
        this._node = value;
        this.document.getCurrentTransaction().editedItems.set(this.id, this);
    }
    get code() {
        return this._code;
    }
    set code(value) {
        if (!this.isInsideOfTransaction()) {
            throw new Error('Редактировать объект можно только в предварительно открытой транзакции.');
        }
        if (this.getLockerID() != this.document.application.getCurrentUserId()) {
            throw new Error('Редактировать можно только объекты, предварительно заблокированые вами.');
        }
        this._code = value;
        this.document.getCurrentTransaction().editedItems.set(this.id, this);
    }
    get name() {
        return this._name;
    }
    set name(value) {
        if (!this.isInsideOfTransaction()) {
            throw new Error('Редактировать объект можно только в предварительно открытой транзакции.');
        }
        if (this.getLockerID() != this.document.application.getCurrentUserId()) {
            throw new Error('Редактировать можно только объекты, предварительно заблокированые вами.');
        }
        this._name = value;
        this.document.getCurrentTransaction().editedItems.set(this.id, this);
    }
    getLevel() {
        let index = 0; // индекс уровня
        let node = this.document.getContext().treeNodes.get(this.nodeId);
        while (node.getParent()) {
            ++index;
            node = this.document.getContext().treeNodes.get(node.getParent());
        }
        // теперь выбираем уровень с нужным индексом.
        let level = this.document.getContext().getTopLevel();
        if (!level) {
            console.log('Верхний уровень не найден.');
            return null;
        }
        while (index > 0) {
            if (!level.nextId) {
                return null;
            }
            else {
                level = this.document.getContext().levels.get(level.nextId);
                --index;
            }
        }
        return level;
    }
    get inputConnections() {
        return this._inputConnections;
    }
    get variants() {
        return this._variants;
    }
    get typeName() {
        return this._typeName;
    }
    /**
     * Получить объекты входящих подключений.
     * @returns {Array<IConnection>}
     */
    getInputConnections() {
        let arr = [];
        for (let n of this.inputConnections) {
            let connection = this.document.getContext().connections.get(n);
            if (!connection.isDeletedDirectly)
                arr.push(connection);
        }
        return arr;
    }
    /**
     * Получить родительский узел, находящийся на одном уровне выше.
     * @returns {ILevelEntity}
     */
    getParent() {
        let node = this.document.getContext().treeNodes.get(this.nodeId);
        let parentId = node.getParent();
        if (parentId) {
            let _node = this.document.getContext().treeNodes.get(parentId);
            return this.document.getContext().levelEntities.get(_node.valueId);
        }
        else {
            return null;
        }
    }
    /**
     * Получить варианты, определённые в составе данного условия.
     * @returns {Array<IVariant>}
     */
    getVariants() {
        let arr = [];
        for (let n of this.variants) {
            let variant = this.document.getContext().variants.get(n);
            if (!variant.isDeletedDirectly)
                arr.push(variant);
        }
        return arr;
    }
    clone() {
        let item = this.document.application.factory.createICondition(this.document, this.code, this.name);
        item._setID(this.id);
        for (let n of this.inputConnections) {
            item.inputConnections.push(n);
        }
        for (let n of this.variants) {
            item.variants.push(n);
        }
        item._node = this.nodeId;
        return item;
    }
}
exports.Condition = Condition;
//# sourceMappingURL=Condition.js.map

/***/ }),

/***/ "../../../../../src/api/src/ts/classes/Connection.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const EventEmitter_1 = __webpack_require__("../../../../../src/api/src/ts/classes/EventEmitter.ts");
const TypeNames_1 = __webpack_require__("../../../../../src/api/src/ts/enums/TypeNames.ts");
const TransactionStatus_1 = __webpack_require__("../../../../../src/api/src/ts/enums/TransactionStatus.ts");
/**
 * Связь, устанавливаемая между узлами, условиями и вариантами условий.
 */
class Connection extends EventEmitter_1.EventEmitter {
    _setID(value) {
        this._id = value;
    }
    isInsideOfTransaction() {
        let transaction = this._document.getCurrentTransaction();
        if (!transaction || transaction.status != TransactionStatus_1.TransactionStatus.Started)
            return false;
        else
            return true;
    }
    /**
     * Проверка на то, был ли удалён данный объект опосредованно - через удаление одного из его
     * предков.
     * @returns {boolean}
     */
    isDeletedByForefather() {
        return false;
    }
    /**
     * Проверка на то, был ли объект удалён каким-либо образом: напрямую, через установку
     * свойства `isDeletedDirectly`, или же опосредованно, через удаление родителя
     * (см. метод `isDeletedByForefather()`).
     * @returns {boolean}
     */
    isDeleted() {
        return this.isDeletedDirectly;
    }
    /**
     * Удалить узел или условие.
     * @returns {IResult} Отчёт о результате выполнения операции.
     */
    delete() {
        if (!this.isInsideOfTransaction()) {
            throw new Error('Редактировать объект можно только в предварительно открытой транзакции.');
        }
        this.isDeletedDirectly = true;
        return this.document.application.factory.createIResult(true, '');
    }
    /**
     * Конструктор класса.
     * @param {IDocument} document Документ, в составе которого определяется подключение.
     * @param {ID} sourceId Источник подключения.
     * @param {ID} targetId Приемник подключения.
     * @param {string} text Текст, отображаемый пользователю над линией подключения.
     */
    constructor(document, sourceId, targetId, text) {
        super();
        this._document = document;
        this._typeName = TypeNames_1.TypeNames.Connection;
        this._sourceId = sourceId;
        this._targetId = targetId;
        this._text = text;
        this._lockerId = null;
        this._isChanged = false;
    }
    get document() {
        return this._document;
    }
    get text() {
        return this._text;
    }
    get sourceId() {
        return this._sourceId;
    }
    get targetId() {
        return this._targetId;
    }
    set lockerId(value) {
        this._lockerId = value;
    }
    get isChanged() {
        return this._isChanged;
    }
    get isDeletedDirectly() {
        return this._isDeletedDirectly;
    }
    set isDeletedDirectly(value) {
        if (!this.isInsideOfTransaction()) {
            throw new Error('Редактировать объект можно только в предварительно открытой транзакции.');
        }
        this._isDeletedDirectly = value;
    }
    get typeName() {
        return this._typeName;
    }
    clone() {
        let item = this.document.application.factory.createIConnection(this.document, this.sourceId, this.targetId, this.text);
        item._setID(this.id);
        item._lockerId = this.lockerId;
        item._isChanged = this.isChanged;
        item._isDeletedDirectly = this.isDeletedDirectly;
        return item;
    }
}
exports.Connection = Connection;
//# sourceMappingURL=Connection.js.map

/***/ }),

/***/ "../../../../../src/api/src/ts/classes/DataProvider.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const EventEmitter_1 = __webpack_require__("../../../../../src/api/src/ts/classes/EventEmitter.ts");
/**
 * Реализация интерфейса для взаимодействия с сервером.
 */
class DataProvider extends EventEmitter_1.EventEmitter {
    /**
     * Конструктор класса.
     * @param {IApplication} app Приложение, в составе которого используется провайдер данных.
     */
    constructor(app) {
        super();
        if (!app)
            throw new Error('Провайдеру данных не указан объект приложения.');
        this._application = app;
    }
    /**
     * Приложение, в составе которого используется провайдер данных.
     */
    get application() {
        return this._application;
    }
    /**
     * Получить с сервера копию общей базы данных компаний.
     * @param {ID} databaseId Идентификатор искомой базы данных.
     * @returns {IDatabase} Копия общей базы данных компаний или `null`, если для указанного
     * идентификатора ничего не было найдено.
     */
    openDb(databaseId) {
        throw new Error('Method is not implemented.');
    }
    _lockDbObject(databaseId, objectId) {
        // TODO: здесь нужно добавить код, отправляющий на сервер запрос о блокировке
        // и получающий логическое значение, сообщающее об успешности или отказе операции.
        throw new Error('Method is not implemented.');
    }
    _unlockDbObject(databaseId, objectId) {
        // TODO: здесь нужно добавить код, отправляющий на сервер запрос о разблокировке
        // и получающий логическое значение, сообщающее об успешности или отказе операции.
        throw new Error('Method is not implemented.');
    }
    /**
     * Заблокировать объект в общей базе данных компаний.
     * @param {ID} databaseId Идентификатор базы данных компаний.
     * @param {ID} objectId Идентификатор объекта, подлежащего блокировке.
     * @returns {IResult} Отчёт о результатах выполнения операции.
     */
    lockDbObject(databaseId, objectId) {
        const result = this._lockDbObject(databaseId, objectId);
        if (result.success) {
            let obj = this.application.commonDatabase.getContext().getObject(objectId);
            if (obj) {
                let m = obj;
                m = m;
                m.lockerId = this.application.getCurrentUserId();
                return this.application.factory.createIResult(true, '');
            }
            else {
                return this.application.factory.createIResult(false, `Объект с ID = '${objectId}' не найден. Блокировка отклонена.`);
            }
        }
        else {
            return result;
        }
    }
    /**
     * Разблокировать объект в общей базе данных компаний.
     * @param {ID} databaseId Идентификатор базы данных компаний.
     * @param {ID} objectId Идентификатор объекта, подлежащего разблокировке.
     * @returns {IResult} Отчёт о результатах выполнения операции.
     */
    unlockDbObject(databaseId, objectId) {
        const result = this._unlockDbObject(databaseId, objectId);
        if (result.success) {
            let obj = this.application.commonDatabase.getContext().getObject(objectId);
            if (obj) {
                let m = obj;
                m = m;
                m.lockerId = null;
                return this.application.factory.createIResult(true, '');
            }
            else {
                return this.application.factory.createIResult(false, `Объект с ID = '${objectId}' не найден. Разблокировка отклонена.`);
            }
        }
        else {
            return result;
        }
    }
    /**
     * Синхронизировать локальную копию общей базы данных компаний с её серверной копией.
     * @param {IDatabase} database Локальная копия общей базы данных компаний.
     * @returns {IResult} Отчёт о результатах выполнения операции.
     */
    syncDb(database) {
        throw new Error('Method is not implemented.');
    }
    /**
     * Получить документ (технологию) с сервера.
     * @param {ID} docId Идентификатор искомого документа.
     * @returns {IDocument} Возвращается запрошенный документ или `null`, если документ с
     * указанным идентификатором не был найден.
     */
    openDocument(docId) {
        throw new Error('Method is not implemented.');
    }
    _lockDocumentObject(docId, objectId) {
        // TODO: здесь нужно добавить код, отправляющий на сервер запрос о блокировке
        // и получающий логическое значение, сообщающее об успешности или отказе операции.
        throw new Error('Method is not implemented.');
    }
    _unlockDocumentObject(docId, objectId) {
        // TODO: здесь нужно добавить код, отправляющий на сервер запрос о разблокировке
        // и получающий логическое значение, сообщающее об успешности или отказе операции.
        throw new Error('Method is not implemented.');
    }
    /**
     * Заблокировать объект в документе.
     * @param {ID} docId Идентификатор целевого документа.
     * @param {ID} objectId Идентификатор целевого объекта.
     * @returns {IResult} Отчёт о результатах выполнения операции.
     */
    lockDocumentObject(docId, objectId) {
        const result = this._lockDocumentObject(docId, objectId);
        if (result.success) {
            let obj = null;
            const context = this.application.documentManager.get(docId).getContext();
            if (context.levels.has(objectId)) {
                obj = context.levels.get(objectId);
            }
            if (context.treeNodes.has(objectId)) {
                obj = context.treeNodes.get(objectId);
            }
            else if (context.connections.has(objectId)) {
                obj = context.connections.get(objectId);
            }
            else if (context.variants.has(objectId)) {
                obj = context.variants.get(objectId);
            }
            else if (context.references.has(objectId)) {
                obj = context.references.get(objectId);
            }
            if (obj) {
                obj.lockerId = this.application.getCurrentUserId();
                return this.application.factory.createIResult(true, '');
            }
            else {
                return this.application.factory.createIResult(false, `Объект с ID = '${objectId}' не найден. Блокировка отклонена.`);
            }
        }
        else {
            return result;
        }
    }
    /**
     * Разблокировать объект в документе.
     * @param {ID} docId Идентификатор целевого документа.
     * @param {ID} objectId Идентификатор целевого объекта.
     * @returns {IResult} Отчёт о результатах выполнения операции.
     */
    unlockDocumentObject(docId, objectId) {
        const result = this._unlockDocumentObject(docId, objectId);
        if (result.success) {
            const context = this.application.documentManager.get(docId)
                .getContext();
            let obj = null;
            if (context.levels.has(objectId)) {
                obj = context.levels.get(objectId);
            }
            if (context.treeNodes.has(objectId)) {
                obj = context.treeNodes.get(objectId);
            }
            else if (context.connections.has(objectId)) {
                obj = context.connections.get(objectId);
            }
            else if (context.variants.has(objectId)) {
                obj = context.variants.get(objectId);
            }
            else if (context.references.has(objectId)) {
                obj = context.references.get(objectId);
            }
            if (obj) {
                obj.lockerId = null;
                return this.application.factory.createIResult(true, '');
            }
            else {
                return this.application.factory.createIResult(false, `Объект с ID = '${objectId}' не найден. Разблокировка отклонена.`);
            }
        }
        else {
            return result;
        }
    }
    /**
     * Синхронизировать локальную копию документа (технологии) с его серверной копией.
     * @param {IDocument} doc Локальная копия документа (технологии)
     * @returns {IResult} Отчёт о результатах выполнения операции.
     */
    syncDocument(doc) {
        throw new Error('Method is not implemented.');
    }
    /**
     * Получить перечень документов, имеющихся на сервере.
     * @returns {Array<IDocumentInfo>}
     */
    getDocumentList() {
        throw new Error('Method is not implemented.');
    }
    /**
     * Получить идентификатор текущего пользователя.
     * @returns {string}
     */
    getCurrentUserId() {
        throw new Error('Method is not implemented.');
    }
}
exports.DataProvider = DataProvider;
//# sourceMappingURL=DataProvider.js.map

/***/ }),

/***/ "../../../../../src/api/src/ts/classes/Database.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const EventEmitter_1 = __webpack_require__("../../../../../src/api/src/ts/classes/EventEmitter.ts");
const TransactionStatus_1 = __webpack_require__("../../../../../src/api/src/ts/enums/TransactionStatus.ts");
class Database extends EventEmitter_1.EventEmitter {
    /**
     * Заблокировать объект с указанным идентификатором.
     * @param {ID} objId Идентификатор объекта, подлежащего блокировке.
     * @returns {IResult} Отчёт о результатах операции.
     */
    lock(objId) {
        return this.application.dataProvider.lockDbObject(this.id, objId);
    }
    /**
     * Разблокировать объект с указанным идентификатором.
     * @param {ID} objId Идентификатор объекта, подлежащего разблокировке.
     * @returns {IResult} Отчёт о результатах операции.
     */
    unlock(objId) {
        return this.application.dataProvider.unlockDbObject(this.id, objId);
    }
    constructor(app) {
        super();
        this._application = app;
        this._contexts = new Array();
        this._transactionStack = new Array();
        const departments = new Map();
        const commandStack = this.application.factory.createIDbCommandStack(null);
        const roles = new Map();
        const users = new Map();
        const context = this.application.factory.createIDatabaseContext(this, departments, roles, users);
        commandStack.context = context;
        this._contexts.push(context);
    }
    get application() {
        return this._application;
    }
    set application(value) {
        this._application = value;
    }
    get code() {
        return this._code;
    }
    set code(value) {
        this._code = value;
    }
    get name() {
        return this._name;
    }
    set name(value) {
        this._name = value;
    }
    sync() {
        return undefined;
    }
    close() {
    }
    _pushTransaction(tr) {
        if (!tr)
            throw new Error('_pushTransaction: В качестве параметра должен передаваться объек транзакции.');
        else if (tr.database !== this) {
            throw new Error('_popTransaction: Указанная транзакция не принадлежит данному документу.');
        }
        else if (tr.status !== TransactionStatus_1.TransactionStatus.Started) {
            throw new Error('_pushTransaction: В стек транзакций можно помещать только открытую транзакцию.');
        }
        else if (this._transactionStack.indexOf(tr) >= 0) {
            throw new Error('_pushTransaction: Эта транзакция уже присутствует в стеке транзакций.');
        }
        else {
            // Заталкиваем транзакцию в стек и создаём для неё полную копию
            // текущего состояния документа.
            this._transactionStack.push(tr);
            const context = this.getContext().clone();
            this._contexts.push(context);
        }
    }
    _popTransaction(tr) {
        if (!tr)
            throw new Error('_popTransaction: В качестве параметра должен передаваться объек транзакции.');
        else if (tr.database !== this) {
            throw new Error('_popTransaction: Указанная транзакция не принадлежит данному документу.');
        }
        else if (tr.status !== TransactionStatus_1.TransactionStatus.Commited && tr.status !== TransactionStatus_1.TransactionStatus.RolledBack) {
            throw new Error('_popTransaction: Нельзя удалить из стека не закрытую транзакцию.');
        }
        else if (this._transactionStack.indexOf(tr) < 0) {
            throw new Error('_popTransaction: Эта транзакция отсутствует в стеке транзакций.');
        }
        else if (this._transactionStack.length && this._transactionStack[this._transactionStack.length - 1] != tr) {
            throw new Error('_popTransaction: Транзакции должны закрываться в порядке, обратном их открытию!');
        }
        else {
            // Если транзакция отклонена, то уничтожаем изменения, выполненные в рамках этой транзакции.
            if (tr.status === TransactionStatus_1.TransactionStatus.RolledBack) {
                this._contexts.pop();
                this._transactionStack.pop();
            }
            else if (tr.status === TransactionStatus_1.TransactionStatus.Commited) {
                this._transactionStack.pop();
            }
            else {
                throw new Error('_popTransaction: Непредвиденная ошибка при попытке вытолкнуть транзакцию из стека!');
            }
        }
        // Если все транзакции закрыты, то удаляем все состояния документа,
        // кроме самого последнего, имеющегося в стеке состояний, т.к. оно содержит
        // все актуальные изменения.
        if (0 === this._transactionStack.length) {
            const last = this._contexts.pop();
            this._contexts = new Array();
            this._contexts.push(last);
        }
    }
    createTransaction() {
        return this.application.factory.createIDbTransaction(this);
    }
    getContext() {
        return this._contexts[this._contexts.length - 1];
    }
}
exports.Database = Database;
//# sourceMappingURL=Database.js.map

/***/ }),

/***/ "../../../../../src/api/src/ts/classes/DatabaseContext.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const EventEmitter_1 = __webpack_require__("../../../../../src/api/src/ts/classes/EventEmitter.ts");
class DatabaseContext extends EventEmitter_1.EventEmitter {
    constructor(database, departments, roles, users) {
        super();
        this._database = database;
        this._departments = departments;
        this._roles = roles;
        this._users = users;
    }
    get database() {
        return this._database;
    }
    get commandStack() {
        return this._commandStack;
    }
    get departments() {
        return this._departments;
    }
    get roles() {
        return this._roles;
    }
    get users() {
        return this._users;
    }
    getObject(id) {
        if (this._roles.has(id))
            return this._roles.get(id);
        else if (this._departments.has(id))
            return this._departments.get(id);
        else if (this._roles.has(id))
            return this._roles.get(id);
        else if (this._users.has(id))
            return this._users.get(id);
    }
    clone() {
        return undefined;
    }
}
exports.DatabaseContext = DatabaseContext;
//# sourceMappingURL=DatabaseContext.js.map

/***/ }),

/***/ "../../../../../src/api/src/ts/classes/DbCommandStack.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * Стек вызова команд. Этот стек определяется в составе документа,
 * в контексте которого выполнялись команды, помещаемые в данный стек.
 */
Object.defineProperty(exports, "__esModule", { value: true });
class DbCommandStack {
    /**
     * Конструктор класса.
     * @param {IDocumentContext} context Контекст использования документа.
     * Стек вызова команд находится в составе контекста.
     */
    constructor(context) {
        this._redoStack = new Array();
        this._commandStack = new Array();
        this._context = context;
    }
    /**
     * Контекст использования документа.
     * @returns {IDocumentContext}
     */
    get context() {
        return this._context;
    }
    set context(value) {
        this._context = value;
    }
    /**
     * Количество команд, находящихся в стеке вызовов.
     */
    get length() {
        return this._commandStack.length;
    }
    /**
     * Добавить команду на верширу стека вызовов команд.
     *
     * **ВНИМАНИЕ!** Данный метод предназначен для
     * внутреннего использования, не вызывайте его самостоятельно!
     * В случае успешного выполнения, команда сама себя добавит в стек
     * вызова команд (эта логика заложена в базовом классе `Command`,
     * от которого должны наследоваться все команды приложения).
     *
     * @param {ICommand} command Команда, которую следует добавить на
     * вершину стека вызовов команд.
     * @returns {IResult} Возвращается отчёт об успешности операции.
     */
    push(command) {
        const factory = this.context.database.application.factory;
        if (command) {
            this._commandStack.push(command);
            // поскольку цепочка вызовов `undo()` прервана новой поступившей
            // командой, то очищаем стек, предназначенный для использования
            // методом `redo()`.
            this._redoStack = new Array();
            return factory.createIResult(true, '');
        }
        else {
            return factory.createIResult(false, 'В стек команд можно добавлять только команды.');
        }
    }
    /**
     * Отменить действие команды, находящейся на вершине стека вызова команд.
     * Отменённая команда автоматически выталкивается из стека, тем самым позволяя
     * выполнять отмену для предыдущей команды и т.д.
     * @returns {IResult} Возвращается отчёт об успешности операции.
     */
    undo() {
        const factory = this.context.database.application.factory;
        if (this._commandStack.length) {
            const cmd = this._commandStack.pop();
            this._redoStack.push(cmd);
            return cmd.undo();
        }
        else {
            return factory.createIResult(false, 'В стеке выполненных команд отсутствуют команды.');
        }
    }
    /**
     * Вернуть обратно результаты выполнения команды (т.е. отменить отмену). В этом случае
     * на вершину стека вызова команд возвращается та команда, действия которой ранее
     * были отменены при помощи вызова `undo()`.
     * @returns {IResult} Возвращается отчёт об успешности операции.
     */
    redo() {
        const factory = this.context.database.application.factory;
        if (this._redoStack.length) {
            const cmd = this._redoStack.pop();
            this._commandStack.push(cmd);
            return cmd.execute().report;
        }
        else {
            return factory.createIResult(false, 'В стеке восстановления команд отсутствуют команды.');
        }
    }
}
exports.DbCommandStack = DbCommandStack;
//# sourceMappingURL=DbCommandStack.js.map

/***/ }),

/***/ "../../../../../src/api/src/ts/classes/DbRole.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const EventEmitter_1 = __webpack_require__("../../../../../src/api/src/ts/classes/EventEmitter.ts");
const TypeNames_1 = __webpack_require__("../../../../../src/api/src/ts/enums/TypeNames.ts");
/**
 * Роль, определённая в составе компании.
 */
class DbRole extends EventEmitter_1.EventEmitter {
    constructor(database, code, name, site, parent) {
        super();
        this._database = database;
        this._typeName = TypeNames_1.TypeNames.DbRole;
        this._code = code;
        this._name = name;
        this._site = site;
        this._parent = parent;
    }
    get database() {
        return this._database;
    }
    get code() {
        return this._code;
    }
    set code(value) {
        this._code = value;
    }
    get name() {
        return this._name;
    }
    set name(value) {
        this._name = value;
    }
    get site() {
        return this._site;
    }
    set site(value) {
        this._site = value;
    }
    get parent() {
        return this._parent;
    }
    set parent(value) {
        this._parent = value;
    }
    get children() {
        return this._children;
    }
    get typeName() {
        return this._typeName;
    }
}
exports.DbRole = DbRole;
//# sourceMappingURL=DbRole.js.map

/***/ }),

/***/ "../../../../../src/api/src/ts/classes/DbTransaction.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const EventEmitter_1 = __webpack_require__("../../../../../src/api/src/ts/classes/EventEmitter.ts");
const TransactionStatus_1 = __webpack_require__("../../../../../src/api/src/ts/enums/TransactionStatus.ts");
/**
 * Транзакция. Транзакция позволяет выполнять над базой данных компаний
 * произвольный набор действий с тем, чтобы иметь возможность
 * в любой момент выполнить полный откат этих изменений обратно.
 *
 * Работать с базой данных компаний можно и без транзакций, т.к. каждая команда (`IDbCommand`) имеет
 * методы `undo()` и `redo()`, позволяющие отменять изменения, и снова восстанавливать их.
 * Однако, в том случае, если в процессе работы команды возникнет непредвиденная ошибка, в
 * виду которой команда будет выполнена не до конца, то
 * `undo()` и `redo()` могут не справиться с проблемой, т.к. они не знают о том, какие из
 * данных были успешно изменены, а какие - нет (в виду возникновения ошибки). Транзакции позволяют
 * избежать подобных ситуаций, однако их использование накладывает некоторые дополнительные
 * издержки (в плане производительности), т.к. на время своей работы каждая транзакция, при старте,
 * создаёт полную копию базы данных (так называемый *контекст*, представленный в виде
 * объекта `IDatabaseContext`).
 *
 * Транзакции следует создавать при помощи метода `IDatabase.createTransaction()`.
 *
 * **Открытые транзакции обязательно должны закрываться!** *Если транзакция
 * не будет закрыта, то все изменения, выполненные в рамках этой транзакции,
 * а так же в рамках всех вложенных транзакций, не будут применены к базе
 * данных.*
 *
 * Транзакции могут быть вложенными. Вложенность транзакций
 * определяется порядком их открытия и закрытия:
 *
 * Если была создана транзакция `A` и для неё был вызван метод `A.start()`,
 * после чего была создана транзакция `B` и для неё был вызван метод `B.start()`,
 * то транзакция `B` является вложенной по отношению к транзакции `A`.
 *
 * Транзакции должны закрываться *обязательно* в порядке противоположном
 * тому, в котором они открывались - в противном случае будет генерироваться
 * исключение.
 *
 * Если была создана транзакция `A` после чего была создана транзакция `B`,
 * а затем были вызваны методы `A.start()`, и `B.start()`, то
 * транзакция `B` является вложенной по отношению к транзакции `A`.
 *
 * Если была создана транзакция `A` после чего была создана транзакция `B`,
 * а затем были вызваны методы `B.start()`, и `A.start()`, то
 * транзакция `A` является вложенной по отношению к транзакции `B`.
 *
 * Если была создана транзакция `A`, затем вызваны методы `A.start()`, и
 * `A.commit()` (или `A.rollback()`), то все последующие стартуемые транзакции
 * не будут являться вложенными по отношению к транзакции `A`.
 */
class DbTransaction extends EventEmitter_1.EventEmitter {
    /**
     * Конструктор класса.
     * @param {IDatabase} db База данных компаний, владеющая данной транзакцией.
     */
    constructor(db) {
        super();
        this._database = db;
        this._status = TransactionStatus_1.TransactionStatus.Created;
    }
    /**
     * База данных компаний, владеющая данной транзакцией.
     */
    get database() {
        return this._database;
    }
    /**
     * Открыть транзакцию для выполнения. В этот момент создаётся *полная копия*
     * базы данных и все изменения будут выполняться с этой копией.
     * *Вложенные* транзакции будут получать копии этой копии. Причём копии базы,
     * получаемые во вложенных транзакциях, будут содержать все те изменения,
     * которые на момент открытия вложенной транзакции уже были выполнены *родительской
     * транзакцией*.
     *
     * Если транзакция откатывается, то изменения, выполненные в ней и
     * во всех вложенных транзакциях, не будут применяться к базе данных документа.
     *
     * Если транзакция применяется, то все изменения, выполненные в ней и во всех
     * вложенных транзакциях (для которых не был выполнен откат), будут применены
     * к базе данных документа.
     */
    start() {
        if (this._status !== TransactionStatus_1.TransactionStatus.Created) {
            throw new Error('start: Нельзя повторно открывать транзакцию.');
        }
        this._status = TransactionStatus_1.TransactionStatus.Started;
        this.database._pushTransaction(this);
    }
    /**
     * Сохранение изменений, выполненных в рамках данной транзакции, а так же во
     * всех вложенных в неё транзакций, для которых был выполнен `commit()`.
     */
    commit() {
        if (this._status !== TransactionStatus_1.TransactionStatus.Started) {
            throw new Error('commit: Нельзя применять `commit()` для незапущенной транзакции.');
        }
        this._status = TransactionStatus_1.TransactionStatus.Commited;
        this.database._popTransaction(this);
    }
    /**
     * Откат всех изменений, выполненных в рамках данной транзакции, а так же во всех
     * вложенных в неё транзакциях.
     */
    rollback() {
        if (this._status !== TransactionStatus_1.TransactionStatus.Started) {
            throw new Error('rollback: Нельзя применять `rollback()` для незапущенной транзакции.');
        }
        this._status = TransactionStatus_1.TransactionStatus.RolledBack;
        this.database._popTransaction(this);
    }
    /**
     * Состояние, в котором находится транзакция.
     */
    get status() {
        return this._status;
    }
}
exports.DbTransaction = DbTransaction;
//# sourceMappingURL=DbTransaction.js.map

/***/ }),

/***/ "../../../../../src/api/src/ts/classes/DbUser.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const EventEmitter_1 = __webpack_require__("../../../../../src/api/src/ts/classes/EventEmitter.ts");
const TypeNames_1 = __webpack_require__("../../../../../src/api/src/ts/enums/TypeNames.ts");
/**
 * Сотрудник компании.
 */
class DbUser extends EventEmitter_1.EventEmitter {
    isDeletedByForefather() {
        return false;
    }
    isDeleted() {
        return this.isDeletedDirectly || this.isDeletedByForefather();
    }
    constructor(database, firstName, middleName, lastName, site) {
        super();
        this._database = database;
        this._typeName = TypeNames_1.TypeNames.DbUser;
        this._firstName = firstName;
        this._middleName = middleName;
        this._lastName = lastName;
        this._site = site;
        this._lockerId = null;
        this._isChanged = false;
        this._isDeleted = false;
    }
    /**
     * Общая база данных, в составе которой находится данный объект.
     */
    get database() {
        return this._database;
    }
    /**
     * Идентификаторы ролей, назначенных данному сотруднику.
     * @returns {Array<RoleID>}
     */
    get roleIds() {
        return this._roleIds;
    }
    /**
     * Имя
     * @returns {string}
     */
    get firstName() {
        return this._firstName;
    }
    set firstName(value) {
        this._firstName = value;
    }
    /**
     * Отчество
     * @returns {string}
     */
    get middleName() {
        return this._middleName;
    }
    set middleName(value) {
        this._middleName = value;
    }
    /**
     * Фамилия
     * @returns {string}
     */
    get lastName() {
        return this._lastName;
    }
    set lastName(value) {
        this._lastName = value;
    }
    /**
     * Сайт
     * @returns {string}
     */
    get site() {
        return this._site;
    }
    set site(value) {
        this._site = value;
    }
    /**
     * Информация о блокировке данного объекта.
     * @returns {UserID}
     */
    get lockerId() {
        return this._lockerId;
    }
    set lockerId(value) {
        this._lockerId = value;
    }
    get isChanged() {
        return this._isChanged;
    }
    set isChanged(value) {
        this._isChanged = value;
    }
    get isDeletedDirectly() {
        return this._isDeleted;
    }
    set isDeletedDirectly(value) {
        this._isDeleted = value;
    }
    get typeName() {
        return this._typeName;
    }
}
exports.DbUser = DbUser;
//# sourceMappingURL=DbUser.js.map

/***/ }),

/***/ "../../../../../src/api/src/ts/classes/Department.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const EventEmitter_1 = __webpack_require__("../../../../../src/api/src/ts/classes/EventEmitter.ts");
const TypeNames_1 = __webpack_require__("../../../../../src/api/src/ts/enums/TypeNames.ts");
/**
 * Компания или отдел.
 */
class Department extends EventEmitter_1.EventEmitter {
    constructor(database, code, name, site, parent, role) {
        super();
        this._typeName = TypeNames_1.TypeNames.Department;
        this._database = database;
        this._code = code;
        this._name = name;
        this._site = site;
        this._parent = parent;
        this._role = role;
    }
    get database() {
        return this._database;
    }
    get code() {
        return this._code;
    }
    set code(value) {
        this._code = value;
    }
    get name() {
        return this._name;
    }
    set name(value) {
        this._name = value;
    }
    get site() {
        return this._site;
    }
    set site(value) {
        this._site = value;
    }
    get parent() {
        return this._parent;
    }
    set parent(value) {
        this._parent = value;
    }
    get children() {
        return this._children;
    }
    set children(value) {
        this._children = value;
    }
    get role() {
        return this._role;
    }
    set role(value) {
        this._role = value;
    }
    get typeName() {
        return this._typeName;
    }
}
exports.Department = Department;
//# sourceMappingURL=Department.js.map

/***/ }),

/***/ "../../../../../src/api/src/ts/classes/Document.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const EventEmitter_1 = __webpack_require__("../../../../../src/api/src/ts/classes/EventEmitter.ts");
const TransactionStatus_1 = __webpack_require__("../../../../../src/api/src/ts/enums/TransactionStatus.ts");
const DocumentEventNames_1 = __webpack_require__("../../../../../src/api/src/ts/enums/event_names/DocumentEventNames.ts");
const TypeNames_1 = __webpack_require__("../../../../../src/api/src/ts/enums/TypeNames.ts");
/**
 * Документ (технология).
 */
class Document extends EventEmitter_1.EventEmitter {
    _setID(id) {
        this._id = id;
    }
    /**
     * Заблокировать объект с указанным идентификатором.
     * @param {ID} objId Идентификатор объекта, подлежащего блокировке.
     * @returns {IResult} Отчёт о результатах операции.
     */
    lock(objId) {
        let result = this.application.dataProvider.lockDocumentObject(this.id, objId);
        if (result.success) {
            let transaction = this.createTransaction();
            transaction.start();
            let obj = this.getContext().getObject(objId);
            result = null;
            switch (obj.typeName) {
                case TypeNames_1.TypeNames.LevelNode: {
                    let item = obj;
                    let treeNode = this.getContext().treeNodes.get(item.nodeId);
                    treeNode.lockerId = this.application.getCurrentUserId();
                    result = this.application.factory.createIResult(true, '');
                    transaction.commit();
                    break;
                }
                case TypeNames_1.TypeNames.Condition: {
                    let item = obj;
                    let treeNode = this.getContext().treeNodes.get(item.nodeId);
                    treeNode.lockerId = this.application.getCurrentUserId();
                    result = this.application.factory.createIResult(true, '');
                    transaction.commit();
                    break;
                }
                case TypeNames_1.TypeNames.Level: {
                    let item = obj;
                    item.lockerId = this.application.getCurrentUserId();
                    result = this.application.factory.createIResult(true, '');
                    transaction.commit();
                    break;
                }
                default: {
                    result = this.application.factory.createIResult(false, 'Указанный объект не предназначен для блокировки.');
                    transaction.rollback();
                    break;
                }
            }
            return result;
        }
        else {
            return result;
        }
    }
    /**
     * Разблокировать объект с указанным идентификатором.
     * @param {ID} objId Идентификатор объекта, подлежащего разблокировке.
     * @returns {IResult} Отчёт о результатах операции.
     */
    unlock(objId) {
        let result = this.application.dataProvider.unlockDocumentObject(this.id, objId);
        if (result.success) {
            let transaction = this.createTransaction();
            transaction.start();
            let obj = this.getContext().getObject(objId);
            result = null;
            switch (obj.typeName) {
                case TypeNames_1.TypeNames.LevelNode: {
                    let item = obj;
                    let treeNode = this.getContext().treeNodes.get(item.nodeId);
                    treeNode.lockerId = null;
                    result = this.application.factory.createIResult(true, '');
                    transaction.commit();
                    break;
                }
                case TypeNames_1.TypeNames.Condition: {
                    let item = obj;
                    let treeNode = this.getContext().treeNodes.get(item.nodeId);
                    treeNode.lockerId = null;
                    result = this.application.factory.createIResult(true, '');
                    transaction.commit();
                    break;
                }
                case TypeNames_1.TypeNames.Level: {
                    let item = obj;
                    item.lockerId = null;
                    result = this.application.factory.createIResult(true, '');
                    transaction.commit();
                    break;
                }
                default: {
                    result = this.application.factory.createIResult(false, 'Указанный объект не предназначен для разблокировки.');
                    transaction.rollback();
                    break;
                }
            }
            return result;
        }
        else {
            return result;
        }
    }
    /**
     * Конструктор класса.
     * @param {IApplication} app Приложение, в котором используется документ.
     * @param {string} name Наименование документа.
     * @param {string} code Код документа.
     */
    constructor(app, name, code) {
        super();
        if (!app)
            throw new Error('Экземпляр `IApplication` не должен быть `null` или `undefined`.');
        if (!name || !name.trim())
            throw new Error('Имя документа не должно быть пустым.');
        if (!code || !code.trim())
            throw new Error('Код документа не должен быть пустым.');
        this._application = app;
        this.docContexts = new Array();
        this._transactionStack = new Array();
        const context = this.application.factory.createIDocumentContext(this, new Map(), new Map(), new Map(), new Map(), new Map(), new Map(), name, code);
        this.docContexts.push(context);
        this.currentContextIndex = 0;
    }
    /**
     * Получить текущую транзакцию.
     * @returns {ITransaction} Возвращается объект текущей транзакции или `null`, если
     * транзакции нет.
     */
    getCurrentTransaction() {
        if (this._transactionStack.length)
            return this._transactionStack[this._transactionStack.length - 1];
        else
            return null;
    }
    /**
     * Поместить транзакцию на вершину стека открытых транзакций документа.
     *
     * **ВНИМАНИЕ!** *Этот метод предназначен только для внутреннего
     * использования механизмом транзакций: он используется в коде метода `ITransaction.start()`.
     * Не вызывайте его самостоятельно!*
     * @param {ITransaction} tr Транзакция, которую следует поместить на вершину стека.
     * Если транзакция уже имеется в стеке транзакций, или если статус транзакции не равен
     * `TransactionStatus.Started`, то генерируется исключение.
     */
    _pushTransaction(tr) {
        //console.log('Beep 1...');
        if (!tr)
            throw new Error('_pushTransaction: В качестве параметра должен передаваться объек транзакции.');
        else if (tr.document !== this) {
            throw new Error('_popTransaction: Указанная транзакция не принадлежит данному документу.');
        }
        else if (tr.status !== TransactionStatus_1.TransactionStatus.Started) {
            throw new Error('_pushTransaction: В стек транзакций можно помещать только открытую транзакцию.');
        }
        else if (this._transactionStack.indexOf(tr) >= 0) {
            throw new Error('_pushTransaction: Эта транзакция уже присутствует в стеке транзакций.');
        }
        else {
            // Заталкиваем транзакцию в стек и создаём для неё полную копию
            // текущего состояния документа.
            this._transactionStack.push(tr);
            let context = this.getContext();
            //console.log('Beep 2...');
            let old = this.getContext();
            if (!old)
                throw new Error('Не удалось получить контекст.');
            context = context.clone();
            //console.log('Beep 2.5 ...');
            // Если перед этим выполнялись операции undo, то удаляем все контексты, имеющиеся
            // в стеке контекстов выше текущего.
            if (this.currentContextIndex != this.docContexts.length - 1) {
                this.docContexts.splice((this.currentContextIndex + 1), this.docContexts.length - (this.currentContextIndex + 1));
            }
            this.docContexts.push(context);
            ++this.currentContextIndex;
        }
        //console.log('Beep 3...');
    }
    /**
     * Вытолкнуть транзакцию с вершины стека открытых транзакций документа.
     *
     * **ВНИМАНИЕ!** *Этот метод предназначен только для внутреннего
     * использования механизмом транзакций: он используется в коде методов
     * `ITransaction.commit()` и `ITransaction.rollback()`. * Не вызывайте его самостоятельно!*
     * @param {ITransaction} tr Транзакция, которую следует вытолкнуть из стека.
     * Этот параметр используется для проверки того, что выталкиваемая транзакция
     * действительно находится на вершине стека.
     */
    _popTransaction(tr) {
        if (!tr)
            throw new Error('_popTransaction: В качестве параметра должен передаваться объек транзакции.');
        else if (tr.document !== this) {
            throw new Error('_popTransaction: Указанная транзакция не принадлежит данному документу.');
        }
        else if (tr.status !== TransactionStatus_1.TransactionStatus.Commited && tr.status !== TransactionStatus_1.TransactionStatus.RolledBack) {
            throw new Error('_popTransaction: Нельзя удалить из стека не закрытую транзакцию.');
        }
        else if (this._transactionStack.indexOf(tr) < 0) {
            throw new Error('_popTransaction: Эта транзакция отсутствует в стеке транзакций.');
        }
        else if (this._transactionStack.length && this._transactionStack[this._transactionStack.length - 1] != tr) {
            throw new Error('_popTransaction: Транзакции должны закрываться в порядке, обратном их открытию!');
        }
        else {
            if (tr !== this.getCurrentTransaction())
                throw new Error('Выталкиваемая из стека транзакция не является текущей.');
            // Если транзакция отклонена, то уничтожаем изменения, выполненные в рамках этой транзакции.
            if (tr.status === TransactionStatus_1.TransactionStatus.RolledBack) {
                // Получаем идентификаторы модифицированных объектов
                let src = tr;
                src.addedItems.clear();
                src.editedItems.clear();
                src.deletedItems.clear();
                this.docContexts.pop();
                this._transactionStack.pop();
                --this.currentContextIndex;
            }
            else if (tr.status === TransactionStatus_1.TransactionStatus.Commited) {
                // Получаем идентификаторы модифицированных объектов
                let src = tr;
                let added = [];
                let edited = [];
                let deleted = [];
                // удаляем ненужные записи
                for (let n of src.deletedItems.keys()) {
                    if (src.addedItems.has(n))
                        src.addedItems.delete(n);
                    if (src.editedItems.has(n))
                        src.editedItems.delete(n);
                }
                for (let n of src.addedItems.keys()) {
                    if (src.editedItems.has(n))
                        src.editedItems.delete(n);
                }
                // используем оставшиеся записи
                for (let n of src.addedItems.keys()) {
                    added.push(n);
                }
                for (let n of src.editedItems.keys()) {
                    edited.push(n);
                }
                for (let n of src.deletedItems.keys()) {
                    deleted.push(n);
                }
                let obj = { added: added, edited: edited, deleted: deleted };
                this._transactionStack.pop();
                src.addedItems.clear();
                src.editedItems.clear();
                src.deletedItems.clear();
                // Сообщаем об изменении документа
                this.emit(DocumentEventNames_1.DocumentEventNames.DocumentChanged, this.application.factory.createIEventArgs({ source: this, data: obj }));
            }
            else {
                throw new Error('_popTransaction: Непредвиденная ошибка при попытке вытолкнуть транзакцию из стека!');
            }
        }
        // Если все транзакции закрыты, то удаляем все состояния документа,
        // кроме самого последнего, имеющегося в стеке состояний, т.к. оно содержит
        // все актуальные изменения.
        /*if(0 === this._transactionStack.length){

            const last = this.docContexts.pop();

            this.docContexts = new Array<IDocumentContext>();
            this.docContexts.push(last);
        }*/
    }
    /**
     * Создать новую транзакцию для работы с данным документом.
     * @returns {ITransaction}
     */
    createTransaction() {
        return this.application.factory.createITransaction(this);
    }
    /**
     * Приложение, в составе которого открыт документ.
     */
    get application() {
        return this._application;
    }
    _setApplication(value) {
        this._application = value;
    }
    /**
     * Синхронизировать документ с сервером. Во время синхронизации с сервера получается текущее состояние документа,
     * к нему применяются изменения, выполненные в локальной версии документа, после чего результат отправляется на
     * сервер.
     * @returns {IResult} Возвращается отчёт об успешности операции.
     */
    sync() {
        throw new Error('Not implemented.');
    }
    /**
     * Закрыть документ.
     */
    close() {
        this.application.documentManager.closeDocument(this.id);
    }
    /**
     * Получить текущий контекст документа.
     * @returns {IDocumentContext}
     */
    getContext() {
        return this.docContexts[this.currentContextIndex];
    }
    /**
     * Установить текущим предыдущий контекст документа в стеке контекстов. Т.е. это отмена изменений, выполненных
     * в рамках текущего контекста документа.
     * @returns {IResult}
     */
    undo() {
        if (this.currentContextIndex > 0) {
            --this.currentContextIndex;
            this.emit(DocumentEventNames_1.DocumentEventNames.DocumentChanged, this.application.factory
                .createIEventArgs({ source: this, data: null }));
            return this.application.factory.createIResult(true, '');
        }
        else {
            return this.application.factory.createIResult(false, 'Операция отмены невозможна.');
        }
    }
    /**
     * Установить текущим следующий контекст документа в стеке контекстов. Т.е. это отмена ранее
     * выполненной отмены изменений, выполненных в рамках текущего контекста документа (т.е.
     * восстановление ранее отменённых изменений).
     * @returns {IResult}
     */
    redo() {
        if (this.currentContextIndex < this.docContexts.length - 1) {
            ++this.currentContextIndex;
            this.emit(DocumentEventNames_1.DocumentEventNames.DocumentChanged, this.application.factory
                .createIEventArgs({ source: this, data: null }));
            return this.application.factory.createIResult(true, '');
        }
        else {
            return this.application.factory.createIResult(false, 'Операция восстановления невозможна.');
        }
    }
}
exports.Document = Document;
//# sourceMappingURL=Document.js.map

/***/ }),

/***/ "../../../../../src/api/src/ts/classes/DocumentContext.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const EventEmitter_1 = __webpack_require__("../../../../../src/api/src/ts/classes/EventEmitter.ts");
const TypeNames_1 = __webpack_require__("../../../../../src/api/src/ts/enums/TypeNames.ts");
/**
 * Контекст работы с документом. Контекст представляет собой
 * полную копию содержимого документа и используется механизмом
 * транзакций.
 *
 * **ВНИМАНИЕ!**
 * *Контекст документа предназначен исключительно для внутреннего использования.
 * Не редактируйте его самостоятельно!*
 */
class DocumentContext extends EventEmitter_1.EventEmitter {
    get documentName() {
        return this._name;
    }
    set documentName(value) {
        if (!value || !value.trim())
            throw new Error('Имя документа не должно быть пустым.');
        this._name = value;
    }
    /**
     * Код документа.
     */
    get documentCode() {
        return this._code;
    }
    set documentCode(value) {
        if (!value || !value.trim())
            throw new Error('Код документа не должен быть пустым.');
        this._code = value;
    }
    /**
     * Уровни, определённые в составе проекта (технологии).
     */
    get levels() {
        return this._levels;
    }
    /**
     * Описание иерархических структур.
     */
    get treeNodes() {
        return this._nodes;
    }
    /**
     * Объекты бизнес-модели, хранящиеся в нодах иерархических структур:
     * узлы, условия, варианты условий и связи.
     */
    get levelEntities() {
        return this._nodeValues;
    }
    /**
     * Конструктор контекста использования документа.
     * @param {IDocument} doc Документ, для которого следует создать контекст.
     * @param {Map<ID,ILevel>} levels Уровни, определённые в составе документа (технологии).
     * @param {Map<NodeID, ITreeNode<EntityID>>} treeNodes Описания иерархических структур, ссылающихся
     * на объекты бизнес-модели.
     * @param {Map<ID, ILevelEntity>} levelEntities Узлы и условия.
     * @param {Map<ID,IConnection>} connections Связи между узлами и условиями.
     * @param {Map<ID,IVariant>} variants Варианты, используемые в условиях.
     * @param {Map<ID,IReference>} references Ссылки на web-странички, используемые в узлах.
     * @param {string} name Наименование документа.
     * @param {string} name Код документа.
     * @returns {IDocumentContext}
     */
    constructor(doc, levels, treeNodes, levelEntities, connections, variants, references, name, code) {
        super();
        if (!doc || !levels || !treeNodes || !levelEntities || !connections || !variants || !references) {
            throw new Error('Недопустимое значение параметра в конструкторе: `null` и `undefined` запрещены.');
        }
        ;
        this._document = doc;
        this._nodes = treeNodes;
        this._nodeValues = levelEntities;
        this._connections = connections;
        this._variants = variants;
        this._references = references;
        this._levels = levels;
        this._name = name;
        this._code = code;
        this.rootNodeId = null; // идентификатор корневого `ILevelNode`.
        let tmp = null;
        let count = 0;
        for (let n of this._nodes.values()) {
            if (!n.getParent()) {
                ++count;
                tmp = n;
            }
        }
        if (count > 1) {
            throw new Error('На верхнем уровне допускается наличие только одного узла.');
        }
        else if (count == 1) {
            this.rootNodeId = tmp.valueId;
        }
    }
    /**
     * Получить корневой узел (экземпляр `ILevelNode`), находящийся на самом верхнем уровне.
     */
    getRootNode() {
        if (!this.rootNodeId)
            return null;
        let levelNode = this.levelEntities.get(this.rootNodeId);
        return levelNode.isDeleted() ? null : levelNode;
    }
    /**
     * Получить уровень по его идентификатору.
     * @param {ID} id Идентификатор искомого уровня.
     * @returns {ILevel} Возвращается уровень или `null` если уровень с указанным ID не был найден.
     */
    getLevel(id) {
        if (!id || !this.levels.has(id))
            return null;
        else {
            let level = this.levels.get(id);
            return level.isDeleted() ? null : level;
        }
    }
    /**
     * Документ, к которому относится данный контекст.
     */
    get document() {
        return this._document;
    }
    /**
     * Создать полную копию данного контекста. Метод используется вложенными транзакциями.
     * @returns {IDocumentContext}
     */
    clone() {
        let doc = this.document;
        let levels = new Map();
        let treeNodes = new Map();
        let levelEntities = new Map();
        let connections = new Map();
        let variants = new Map();
        let references = new Map();
        //console.log("this.levels...");
        for (let n of this.levels.values()) {
            let item = n.clone();
            levels.set(item.id, item);
        }
        //console.log("this.treeNodes...");
        for (let n of this.treeNodes.values()) {
            let item = n.clone();
            treeNodes.set(item.id, item);
        }
        //console.log("this.levelEntities...");
        for (let n of this.levelEntities.values()) {
            if (n.typeName == TypeNames_1.TypeNames.LevelNode) {
                let item = n.clone();
                levelEntities.set(item.id, item);
            }
            else if (n.typeName == TypeNames_1.TypeNames.Condition) {
                let item = n.clone();
                levelEntities.set(item.id, item);
            }
            else {
                throw new Error('Неожиданный тип объекта: ' + n.typeName);
            }
        }
        //console.log("this.connections...");
        for (let n of this.connections.values()) {
            let item = n.clone();
            connections.set(item.id, item);
        }
        //console.log("this.variants...");
        for (let n of this.variants.values()) {
            let m = n;
            let item = m.clone(levelEntities.get(m.conditionId));
            variants.set(item.id, item);
        }
        //console.log("this.references...");
        for (let n of this.references.values()) {
            let m = n;
            let owner = levelEntities.get(m._levelNodeID);
            let item = n.clone(owner);
            references.set(item.id, item);
        }
        let context = this.document.application.factory.createIDocumentContext(doc, levels, treeNodes, levelEntities, connections, variants, references, this._name, this._code);
        return context;
    }
    /**
     * Получить самый верхний не удалённый уровень.
     * @returns {ILevel}
     */
    getTopLevel() {
        // Находим самый верхний уровень среди неудалённых. Самым верхним
        // считаем тот уровень, у которого свойство `prevId` возвращает `null`.
        for (let n of this.levels.keys()) {
            let level = this.levels.get(n);
            if (!level.isDeleted() && level.prevId == null)
                return level;
        }
        return null;
    }
    getBottomLevel() {
        // Находим самый нижний уровень среди неудалённых. Самым нижним
        // считаем тот уровень, у которого свойство `nextId` возвращает `null`.
        for (let n of this.levels.keys()) {
            let level = this.levels.get(n);
            if (!level.isDeleted() && level.nextId == null)
                return level;
        }
        return null;
    }
    /**
     * Добавить нижний уровень. Добавляемый уровень автоматически блокируется.
     * @param {string} name Имя нового уровня.
     * @param {string} code Код уровня.
     * @param {string} color Цвет узлов уровня.
     * @param {boolean} autoNum Метка о необходимости использования автоматической
     * нумерации для узлов уровня.
     * @returns {ILevel} Возвращается созданный уровень или `null` если уровень не был создан.
     */
    pushLevel(name, code, color, autoNum) {
        let level = this.document.application.factory.createILevel(this.document, name, code, color, autoNum);
        if (this.getTopLevel()) {
            // Находим самый нижний уровень среди неудалённых.
            let last = this.getBottomLevel();
            // Если уровни не найдены, значит мы создаём самый верхний уровень
            if (!last) {
                throw new Error('Обнаружен верхний уровень, но не удалось найти нижний.');
            }
            // Если уровни уже имеются, то самый нижний из них должен быть предварительно заблокирован.
            if (last.lockerId != this.document.application.getCurrentUserId()) {
                return null;
            }
            else {
                this.levels.set(level.id, level);
                level._setDocument(this.document);
                level.lockerId = this.document.application.getCurrentUserId();
                last.nextId = level.id;
                level.prevId = last.id;
                return level;
            }
        }
        else {
            this.levels.set(level.id, level);
            level.lockerId = this.document.application.getCurrentUserId();
            return level;
        }
    }
    /**
     * Удалить нижний уровень.
     * @returns {IResult}
     */
    popLevel() {
        if (this.getTopLevel()) {
            // Находим самый нижний уровень среди неудалённых.
            let last = this.getBottomLevel();
            if (!last)
                return this.document.application.factory.createIResult(false, 'Уровни не найдены.');
            // Если уровни уже имеются, то самый нижний из них должен быть предварительно заблокирован.
            if (last.lockerId != this.document.application.getCurrentUserId()) {
                return this.document.application.factory.createIResult(false, 'Удаляемый уровень должен быть предварительно заблокирован вами.');
            }
            else {
                last.isDeletedDirectly = true;
                return this.document.application.factory.createIResult(true, '');
            }
        }
        else {
            return this.document.application.factory.createIResult(false, 'Уровни не найдены.');
        }
    }
    /**
     * Добавить узел или условие в документ (технологию).
     * @param {ID} parentId Идентификатор родительского `ILevelEntity`. Если узел или условие
     * размещается на самом верхнем уровне, то в качестве значения указывается `null`.
     * @param {ILevelEntity} levelEntity Добавляемый узел или условие.
     * @returns {IResult} Отчёт о результате выполнения операции.
     */
    addLevelEntity(parentId, levelEntity) {
        if (!levelEntity)
            return this.document.application.factory.createIResult(false, 'Нельзя вместо узла добавлять `null` или `undefined`.');
        levelEntity = levelEntity;
        if (this.levelEntities.has(levelEntity.id))
            return this.document.application.factory.createIResult(false, `Объект с ID = '${levelEntity.id}' уже принадлежит данному документу.`);
        if (!this.getTopLevel())
            return this.document.application.factory.createIResult(false, 'Нельзя добавлять узлы и условия при отсутствии уровней в документе.');
        // Если объект добавляется не на самый верхний уровень...
        if (parentId) {
            // Если родительский узел найден...
            if (this.levelEntities.has(parentId)) {
                let parent = this.levelEntities.get(parentId);
                let parentNode = this.treeNodes.get(parent.nodeId);
                if (parentNode) {
                    if (parentNode.getLockerID() !== this.document.application.getCurrentUserId()) {
                        return this.document.application.factory.createIResult(false, 'Добавление объекта отклонено, т.к. родитель ' +
                            'не был предварительно заблокирован вами.');
                    }
                    if (parentNode.isDeleted())
                        return this.document.application.factory.createIResult(false, 'Указанный родительский объект был ранее вами удалён.');
                    if (!parentNode.getLevel().nextId)
                        return this.document.application.factory.createIResult(false, 'Для добавляемого дочернего узла нет соотвествующего уровня.');
                    let subNode = this.document.application.factory.createITreeNode(this.document);
                    this.treeNodes.set(subNode.id, subNode);
                    this.levelEntities.set(levelEntity.id, levelEntity);
                    subNode.lockerId = this.document.application.getCurrentUserId();
                    parentNode.childrenIDs.push(subNode.id);
                    subNode.setParent(parentNode.id);
                    subNode.valueId = levelEntity.id;
                    levelEntity.nodeId = subNode.id;
                    this.document.getCurrentTransaction().addedItems.set(levelEntity.id, levelEntity);
                    let pval = this.levelEntities.get(parentNode.valueId);
                    this.document.getCurrentTransaction().editedItems.set(parentNode.valueId, pval);
                    return this.document.application.factory.createIResult(true, '');
                }
                else {
                    return this.document.application.factory.createIResult(false, `Контейнер с ID = '${parent.nodeId}' не найден.`);
                }
            }
            else {
                return this.document.application.factory.createIResult(false, `Объект с ID = ${parentId} не найден.`);
            }
        }
        else {
            for (let n of this.treeNodes.values()) {
                if (!n.isDeleted())
                    return this.document.application.factory.createIResult(false, 'На верхнем уровне должен размещаться только один узел.');
            }
            let node = this.document.application.factory.createITreeNode(this.document);
            this.treeNodes.set(node.id, node);
            this.levelEntities.set(levelEntity.id, levelEntity);
            node.lockerId = this.document.application.getCurrentUserId();
            node.setParent(null);
            node.valueId = levelEntity.id;
            levelEntity.nodeId = node.id;
            this.rootNodeId = levelEntity.id;
            this.document.getCurrentTransaction().addedItems.set(levelEntity.id, levelEntity);
            return this.document.application.factory.createIResult(true, '');
        }
    }
    /**
     * Удалить узел или условие из документа (технологии).
     * @param {ID} id Идентификатор удаляемого узла или условия.
     * @returns {IResult} Отчёт о результате выполнения операции.
     */
    deleteLevelEntity(id) {
        if (!id)
            return this.document.application.factory.createIResult(false, 'Нельзя в качестве ID указывать `null` или `undefined`.');
        else if (!this.levelEntities.has(id))
            return this.document.application.factory.createIResult(false, `Объект с ID = '${id}' не найден.`);
        else {
            let nodeValue = this.levelEntities.get(id);
            let node = this.treeNodes.get(nodeValue.nodeId);
            if (node.isDeleted())
                return this.document.application.factory.createIResult(false, `Нод с ID = '${id}' уже удалён вами ранее.`);
            else if (node.getLockerID() !== this.document.application.getCurrentUserId())
                return this.document.application.factory.createIResult(false, `Операция удаления отклонена, т.к. нод с ID = '${id}' не был вами предварительно заблокирован.`);
            else {
                node.isDeletedDirectly = true;
                this.document.getCurrentTransaction().deletedItems.set(nodeValue.id, nodeValue.id);
                return this.document.application.factory.createIResult(true, '');
            }
        }
    }
    /**
     * Получить узел по его идентификатору.
     * @param {ID} id Идентификатор искомого узла.
     * @returns {ILevelNode} Искомый узел или `null`, если ничего не найдено.
     */
    getLevelNode(id) {
        if (!id || !this.levelEntities.has(id))
            return null;
        let nodeValue = this.levelEntities.get(id);
        if (nodeValue.isDeleted())
            return null;
        else
            return nodeValue;
    }
    /**
     * Получить условие по его идентификатору.
     * @param {ID} id Идентификатор искомого условия.
     * @returns {ILevelEntity} Искомое условие или `null`, если ничего не найдено.
     */
    getCondition(id) {
        if (!id || !this.levelEntities.has(id))
            return null;
        let item = this.levelEntities.get(id);
        if (!item.isDeleted()) {
            return item;
        }
        else {
            return null;
        }
    }
    /**
     * Связи, устанавливаемые между узлами и условиями.
     */
    get connections() {
        return this._connections;
    }
    /**
     * Варианты, используемые в условиях.
     */
    get variants() {
        return this._variants;
    }
    /**
     * Ссылки на web-странички (используются узлами).
     */
    get references() {
        return this._references;
    }
    /**
     * Добавить связь.
     * @param {ID} sourceId Идентификатор источника соединения: узла или варианта,
     * используемого в составе некоторого условия.
     * @param {ID} targetID Идентификатор приемника соединения: узла или условия.
     * @param {string} text Текстая информация, отображаемая пользователю для этой связи.
     * @returns {IConnection} В случае успеха возвращается экземпляр IConnection,
     * в противном случае возвращается `null`.
     */
    addConnection(sourceId, targetID, text) {
        if (!sourceId || !targetID) {
            //console.log('Beeep #1');
            return null;
        }
        // Проверяем, что такой связи (не удалённой) ещё нет в документе
        for (let n of this.connections.values()) {
            if (n.sourceId === sourceId && n.targetId === targetID && !n.isDeleted()) {
                //console.log('Beeep #2');
                return null;
            }
        }
        let source = null;
        // Сначала проверяем источник подключения...
        // Если источником является узел.
        if (this.levelEntities.has(sourceId) && this.levelEntities.get(sourceId)
            .typeName === TypeNames_1.TypeNames.LevelNode) {
            source = this.levelEntities.get(sourceId);
            // Если в качестве источника указан ранее удалённый объект
            if (source.isDeleted()) {
                //console.log('Beeep #3');
                return null;
            }
            // Если источник не был предварительно заблокирован
            if (source.getLockerID() !== this.document.application.getCurrentUserId()) {
                //console.log('Beeep #4');
                return null;
            }
        }
        else if (this.variants.has(sourceId)) {
            source = this.variants.get(sourceId);
            // Если в качестве источника указан ранее удалённый объект
            if (source.isDeleted()) {
                //console.log('Beeep #5');
                return null;
            }
            // Если условие, владеющее данным вариантом было удалено или же не было
            // предварительно заблокировано
            let condition = this.getCondition(source.conditionId);
            if (condition.isDeleted() || condition.getLockerID() !== this.document
                .application.getCurrentUserId()) {
                //console.log('Beeep #6');
                return null;
            }
        }
        else {
            //console.log('Beeep #7');
            return null;
        }
        // Теперь проверяем приемник подключения...
        let target = null;
        // Целью может являться только узел или условие.
        if (this.levelEntities.has(targetID)) {
            target = this.levelEntities.get(targetID);
            // Если приемник был удалён или же не был предварительно заблокирован
            if (target.isDeleted() || target.getLockerID() !== this.document
                .application.getCurrentUserId()) {
                //console.log('Beeep #8');
                return null;
            }
        }
        else {
            //console.log('Beeep #9');
            return null;
        }
        // Если источник и цель найдены и заблокированы текущим юзером, то
        // создаём связь и добавляем её в документ.
        let connection = this.document.application.factory.createIConnection(this.document, sourceId, targetID, text);
        this.connections.set(connection.id, connection);
        // редактируем источник подключения
        if (source.typeName === TypeNames_1.TypeNames.LevelNode) {
            source.outputConnectionIDs.push(connection.id);
        }
        else if (source.typeName === TypeNames_1.TypeNames.Variant) {
            source.outputConnections.push(connection.id);
        }
        else {
            //console.log('Beeep #10');
            return null;
        }
        // редактируем приемник подключения
        if (target.typeName === TypeNames_1.TypeNames.LevelNode) {
            target.inputConnectionIDs.push(connection.id);
        }
        else if (target.typeName === TypeNames_1.TypeNames.Condition) {
            target.inputConnections.push(connection.id);
        }
        else {
            //console.log('Beeep #11');
            return null;
        }
        //console.log('Beeep #12');
        this.document.getCurrentTransaction().addedItems.set(connection.id, connection);
        this.document.getCurrentTransaction().editedItems.set(connection.sourceId, source);
        this.document.getCurrentTransaction().editedItems.set(connection.targetId, target);
        return connection;
    }
    /**
     * Удалить связь по её идентификатору.
     * @param {ID} id Идентификатор удаляемой связи.
     * @returns {IResult} Отчёт о результате выполнения операции.
     */
    deleteConnection(id) {
        if (!id)
            return this.document.application.factory.createIResult(false, 'В качестве идентификатора нельзя указывать `null` или `undefined`.');
        if (!this.connections.has(id))
            return this.document.application.factory.createIResult(false, `Связь с ID = '${id}' не найдена.`);
        let connection = this.connections.get(id);
        if (connection.isDeleted())
            return this.document.application.factory.createIResult(false, `Связь с ID = '${id}' уже была ранее удалена вами.`);
        connection.isDeletedDirectly = true;
        this.document.getCurrentTransaction().deletedItems.set(connection.id, connection);
    }
    /**
     * Получить связь по её идентификатору.
     * @param {ID} id Идентификатор искомой связи.
     * @returns {IConnection} Возвращается искомый объект связи или `null`, если ничего не найдено.
     */
    getConnection(id) {
        if (!id || !this.connections.has(id) || this.connections.get(id).isDeletedDirectly)
            return null;
        else
            return this.connections.get(id);
    }
    /**
     * Добавить вариант в условие.
     * @param {ID} conditionId Идентификатор целевого условия.
     * @param {string} text Текст варианта, отображаемый пользователю.
     * @returns {IVariant} Возвращается созданный объект или `null` если создать объект не удалось.
     */
    addVariant(conditionId, text) {
        if (!conditionId)
            return null;
        if (this.levelEntities.has(conditionId)) {
            let condition = this.levelEntities.get(conditionId);
            if (condition.isDeleted())
                return null;
            else if (condition.getLockerID() !== this.document.application.getCurrentUserId()) {
                return null;
            }
            else {
                let condition = this.getCondition(conditionId);
                let variant = this.document.application.factory.createIVariant(condition, text);
                this.variants.set(variant.id, variant);
                condition.variants.push(variant.id);
                variant.conditionId = condition.id;
                this.document.getCurrentTransaction().addedItems.set(variant.id, variant);
                this.document.getCurrentTransaction().editedItems.set(condition.id, condition);
                return variant;
            }
        }
        else {
            return null;
        }
    }
    /**
     * Получить вариант, используемый в условии, по его ID.
     * @param {ID} id Идентификатор искомого варианта.
     * @returns {IVariant} Возвращается искомый объект или `null` если ничего не найдено.
     */
    getVariant(id) {
        if (!id || !this.variants.has(id))
            return null;
        let variant = this.variants.get(id);
        if (variant.isDeleted())
            return null;
        else
            return variant;
    }
    /**
     * Удалить вариант, используемый в условии.
     * @param {ID} id Идентификатор варианта, подлежащего удалению.
     * @returns {IResult} Отчёт о результате выполнения операции.
     */
    deleteVariant(id) {
        if (!id)
            return this.document.application.factory.createIResult(false, 'В качестве идентификатора нельзя указывать `null` или `undefined`.');
        if (!this.variants.has(id))
            return this.document.application.factory.createIResult(false, `Вариант с ID = '${id}' не найдена.`);
        let variant = this.variants.get(id);
        if (variant.isDeleted())
            return this.document.application.factory.createIResult(false, `Вариант с ID = '${id}' уже был ранее удалён вами.`);
        const condition = variant.getCondition();
        this.document.getCurrentTransaction().editedItems.set(condition.id, condition);
        variant.isDeletedDirectly = true;
        this.document.getCurrentTransaction().deletedItems.set(variant.id, variant);
    }
    /**
     * Получить объект по его ID. Полученный объект затем нужно будет явно приводить к нужному интерфейсу.
     * @param {ID} id Идентификатор искомого объекта.
     * @returns {IType}
     */
    getObject(id) {
        if (!id)
            return null;
        if (this.levels.has(id)) {
            let level = this.levels.get(id);
            return level.isDeleted() ? null : level;
        }
        else if (this.levelEntities.has(id)) {
            let item = this.levelEntities.get(id);
            let treeNode = this.treeNodes.get(item.nodeId);
            return treeNode.isDeleted() ? null : item;
        }
        else if (this.treeNodes.has(id)) {
            let treeNode = this.treeNodes.get(id);
            return treeNode.isDeleted() ? null : treeNode;
        }
        else if (this.connections.has(id)) {
            let item = this.connections.get(id);
            return item.isDeleted() ? null : item;
        }
        else if (this.variants.has(id)) {
            let item = this.variants.get(id);
            return item.isDeleted() ? null : item;
        }
        else if (this.references.has(id)) {
            let item = this.references.get(id);
            return item.isDeleted() ? null : item;
        }
    }
    /**
     * Добавить ссылку в узел.
     * @param {ID} entityID Идентификатор целевого узла.
     * @param {string} text Текст, отображаемый пользователю.
     * @param {string} path  URL-адрес ссылки.
     * @param {string} tooltip Текст всплывающей подсказки.
     * @param {string} iconName Имя файла изображения.
     * @returns {IReference} Возвращается созданный объект или `null` если создать объект не удалось.
     */
    addReference(entityID, text, path, tooltip, iconName) {
        if (!entityID || !this.levelEntities.has(entityID))
            return null;
        let levelNode = this.levelEntities.get(entityID);
        if (!levelNode)
            throw new Error('Узел не найден. ID = ' + entityID);
        if (levelNode.isDeleted() || levelNode.getLockerID() != this.document
            .application.getCurrentUserId()) {
            return null;
        }
        let reference = this.document.application.factory.createIReference(levelNode, text, path, tooltip, iconName);
        this.references.set(reference.id, reference);
        levelNode.references.push(reference.id);
        reference._levelNodeID = levelNode.id;
        this.document.getCurrentTransaction().addedItems.set(reference.id, reference);
        this.document.getCurrentTransaction().addedItems.set(reference._levelNodeID, levelNode);
        return reference;
    }
    /**
     * Получить ссылку по её ID.
     * @param {ID} id Идентификатор искомой ссылки.
     * @returns {IReference} Возвращается искомый объект или `null` если ничего не найдено.
     */
    getReference(id) {
        if (this.document.getContext().references.has(id)) {
            let item = this.document.getContext().references.get(id);
            if (item.isDeleted())
                return null;
            else
                return item;
        }
        else
            return null;
    }
    /**
     * Удалить ссылку.
     * @param {ID} id Идентификатор ссылки, подлежащей удалению.
     * @returns {IResult} Отчёт о результате выполнения операции.
     */
    deleteReference(id) {
        if (!id || !this.document.getContext().references.has(id)) {
            return this.document.application.factory.createIResult(false, 'Ссылка с указанным ID не найдена.');
        }
        let reference = this.document.getContext().references
            .get(id);
        if (reference.getlevelNode().getLockerID() != this.document.application
            .getCurrentUserId()) {
            return this.document.application.factory.createIResult(false, 'Прежде чем удалить ссылку, вы должны заблокировать её узел.');
        }
        reference._isDeleted = true;
        this.document.getCurrentTransaction().deletedItems.set(reference.id, reference);
    }
}
exports.DocumentContext = DocumentContext;
//# sourceMappingURL=DocumentContext.js.map

/***/ }),

/***/ "../../../../../src/api/src/ts/classes/DocumentInfo.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Краткая информация о документе. Используется для получения перечней документов,
 * хранящихся на сервере.
 */
class DocumentInfo {
    /**
     * Конструктор класса.
     * @param {ID} id Идентификатор документа.
     * @param {string} code Код документа.
     * @param {string} name Наименование документа.
     */
    constructor(id, code, name) {
        this._id = id;
        this._code = code;
        this._name = name;
    }
    /**
     * Идентификатор документа.
     * @returns {ID}
     */
    get id() {
        return this._id;
    }
    /**
     * Код документа.
     * @returns {string}
     */
    get code() {
        return this._code;
    }
    /**
     * Наименование документа.
     * @returns {string}
     */
    get name() {
        return this._name;
    }
}
exports.DocumentInfo = DocumentInfo;
//# sourceMappingURL=DocumentInfo.js.map

/***/ }),

/***/ "../../../../../src/api/src/ts/classes/DocumentManager.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const EventEmitter_1 = __webpack_require__("../../../../../src/api/src/ts/classes/EventEmitter.ts");
const DocumentManagerEventNames_1 = __webpack_require__("../../../../../src/api/src/ts/enums/event_names/DocumentManagerEventNames.ts");
/**
 * Менеджер документов.
 */
class DocumentManager extends EventEmitter_1.EventEmitter {
    /**
     * Конструктор класса.
     * @param {IApplication} app Приложение, в составе которого используется менеджер документов.
     */
    constructor(app) {
        super();
        this._documents = new Map();
        this._application = app;
        this.current = null;
    }
    /**
     * Перечень открытых документов.
     */
    get documents() {
        return this._documents.values();
    }
    /**
     * Приложение, в составе которого работает менеджер документов.
     */
    get application() {
        return this._application;
    }
    /**
     * Создать новый документ. Созданный документ автоматически будет установлен в качестве текущего.
     * @param {string} name Наименование документа.
     * @param {string} code Код документа.
     * @returns {IDocument} Возвращается новый документ.
     */
    create(name, code) {
        const doc = this.application.factory.createIDocument(name, code);
        this._documents.set(doc.id, doc);
        this.emit(DocumentManagerEventNames_1.DocumentManagerEventNames.DocumentCreated, this.application.factory.createIEventArgs({ source: this, data: { document: doc } }));
        this.current = doc;
        return doc;
    }
    /**
     * Получить с сервера документ по его идентификатору.
     * @param {ID} id Идентификатор искомого объекта.
     * @returns {IDocument}
     */
    open(id) {
        if (this._documents.has(id)) {
            let doc = this._documents.get(id);
            return doc;
        }
        else {
            let doc = this.application.dataProvider.openDocument(id);
            if (!doc)
                return null;
            let _doc = doc;
            if (_doc.docContexts.length) {
                let context = _doc.docContexts[_doc.docContexts.length - 1];
                _doc.docContexts = [];
                _doc.docContexts.push(context);
                _doc.currentContextIndex = 0;
            }
            _doc._transactionStack = [];
            this._documents.set(doc.id, doc);
            this.emit(DocumentManagerEventNames_1.DocumentManagerEventNames.DocumentOpened, this.application.factory.createIEventArgs({ source: this, data: { document: doc } }));
            this.current = doc;
            return doc;
        }
    }
    /**
     * Получить открытый документ по его ID. Результат может использоваться для
     * смены текущего документа.
     * @param {ID} id
     * @returns {IDocument}
     */
    get(id) {
        return this._documents.has(id) ? this._documents.get(id) : null;
    }
    /**
     * Текущий документ
     */
    get current() {
        return this._current;
    }
    set current(value) {
        if (null == value || this._documents.has(value.id)) {
            this._current = value;
            this.emit(DocumentManagerEventNames_1.DocumentManagerEventNames.CurrentDocumentSwitched, this.application.factory.createIEventArgs({ source: this, data: { document: value } }));
        }
        else {
            throw new Error('current: Указано недопустимое значение в качестве текущего документа.');
        }
    }
    /**
     * Закрыть документ с указанным идентификатором. Если документ с указанным
     * идентификатором не будет найден, то никаких изменений произведено не будет.
     *
     * Если документ с указанным идентификатором будет найден, то он будет закрыт. При этом,
     * если закрываемый документ был текущим, то свойство `current` устанавливается в `null`,
     * если нет других открытых документов. В противном случае - в качестве текущего устанавливается
     * первый найденный документ среди открытых в приложении.
     * @param {ID} id Идентификатор документа, подлежащего закрытию.
     */
    closeDocument(id) {
        if (this._documents.has(id)) {
            this._documents.delete(id);
            // Если закрывается текущий документ, то устанавливаем текущим любой др. открытый документ.
            // Если других открытых документов нет, то текущим документом устанавливаем `null`.
            if (this.current.id === id) {
                if (this._documents.size) {
                    this.current = this._documents.get(this._documents.keys().next().value);
                }
                else {
                    this.current = null;
                }
            }
        }
        this.emit(DocumentManagerEventNames_1.DocumentManagerEventNames.DocumentClosed, this.application.factory.createIEventArgs({ source: this, data: { documentID: id } }));
    }
    /**
     * Получить перечень документов, имеющихся на сервере.
     * @returns {Array<IDocumentInfo>}
     */
    getServerDocumentsList() {
        return this.application.dataProvider.getDocumentList();
    }
}
exports.DocumentManager = DocumentManager;
//# sourceMappingURL=DocumentManager.js.map

/***/ }),

/***/ "../../../../../src/api/src/ts/classes/EventArgs.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Класс, используемый в качестве параметра генерируемых событий.
 */
class EventArgs {
    /**
     * Конструктор класса.
     * @param {any} source Объект, являющийся источником события.
     * @param {any} data Дополнительная информация, зависящая от контекста событий.
     */
    constructor({ source, data }) {
        this._source = source;
        this._data = data;
    }
    /**
     * Идентификатор объекта, подвергшегося изменению.
     * @returns {any}
     */
    get source() {
        return this._source;
    }
    /**
     * Дополнительная информация, зависящая от контекста событий.
     */
    get data() {
        return this._data;
    }
}
exports.EventArgs = EventArgs;
//# sourceMappingURL=EventArgs.js.map

/***/ }),

/***/ "../../../../../src/api/src/ts/classes/EventEmitter.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/* EventEmitter.ts
 * Механизм генерации событий.
 */
Object.defineProperty(exports, "__esModule", { value: true });
const v4 = __webpack_require__("../../../../../src/api/node_modules/uuid/v4.js");
/**
 * Данный класс предоставляет механизм генерации событий, подписки на них
 * и оповещения подписчиков. Класс является абстрактным и предназначен
 * для наследования от него.
 */
class EventEmitter {
    /**
     * Конструктор класса.
     */
    constructor() {
        this._subscriptions = new Map();
        this._id = v4();
    }
    /**
     * Источник события
     */
    get id() {
        return this._id;
    }
    setSource(value) {
        this._id = value;
    }
    /**
     * Регистрация функции обратного вызова для прослушивания определённого события.
     * @param {T} eventName Наименование события.
     * @param {(arg: IEventArgs) => void} listener Функция обратного вызова, регистрируемая
     * в качестве подписчика.
     * @returns {boolean} Возвращается логическое значение, сообщающее
     * об успешности выполнения операции.
     */
    addListener(eventName, listener) {
        if (!listener)
            return false;
        else {
            let arr = null;
            if (this._subscriptions.has(eventName)) {
                arr = this._subscriptions.get(eventName);
                arr.push(listener);
            }
            else {
                arr = [listener];
                this._subscriptions.set(eventName, arr);
            }
            return true;
        }
    }
    /**
     * Отмена регистрации функции обратного вызова, ранее зарегистрированной для
     * указанного события.
     * @param {T} eventName Наименование события.
     * @param {(arg: any) => void} listener Функция обратного вызова, чью
     * подписку следует аннулировать.
     * @returns {boolean} Возвращается логическое значение, сообщающее
     * об успешности выполнения операции.
     */
    deleteListener(eventName, listener) {
        if (!listener)
            return false;
        else {
            if (this._subscriptions.has(eventName)) {
                const arr = this._subscriptions.get(eventName);
                let index = arr.indexOf(listener);
                if (index >= 0) {
                    arr.splice(index, 1);
                    return true;
                }
                else {
                    return false;
                }
            }
            else {
                return false;
            }
        }
    }
    /**
     * Генерация указанного события
     * @param {T} eventName Наименование события.
     * @param {IEventArgs} info Параметр события, передаваемый всем подписчикам.
     */
    emit(eventName, info) {
        if (this._subscriptions.has(eventName)) {
            for (let fn of this._subscriptions.get(eventName)) {
                if (fn)
                    fn(info);
            }
        }
    }
}
exports.EventEmitter = EventEmitter;
//# sourceMappingURL=EventEmitter.js.map

/***/ }),

/***/ "../../../../../src/api/src/ts/classes/Factory.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/* IFactory.ts
 * The factory creates the instances of the necessary interfaces.
 * It allows you know nothing about the implementation of the interfaces.
 *
 * You can dynamically replace the factory with the implementation you need.
 * For example, this may be required for unit testing: it allows you to
 * create stubs, mocks, and fakes.
 *
 * Company: PIK-PROJECT.
 * Site: https://www.pik.ru/
 *
 * Developer: Andrey Bushman, 2017
 * email: bushman.andrey@gmail.com
 */
Object.defineProperty(exports, "__esModule", { value: true });
const CommandOutput_1 = __webpack_require__("../../../../../src/api/src/ts/classes/CommandOutput.ts");
const Result_1 = __webpack_require__("../../../../../src/api/src/ts/classes/Result.ts");
const ResourceManager_1 = __webpack_require__("../../../../../src/api/src/ts/classes/ResourceManager.ts");
const uuid_1 = __webpack_require__("../../../../../src/api/node_modules/uuid/index.js");
const EventEmitter_1 = __webpack_require__("../../../../../src/api/src/ts/classes/EventEmitter.ts");
const EventArgs_1 = __webpack_require__("../../../../../src/api/src/ts/classes/EventArgs.ts");
const DocumentManager_1 = __webpack_require__("../../../../../src/api/src/ts/classes/DocumentManager.ts");
const CommandFactory_1 = __webpack_require__("../../../../../src/api/src/ts/classes/CommandFactory.ts");
const CommandStack_1 = __webpack_require__("../../../../../src/api/src/ts/classes/CommandStack.ts");
const Transaction_1 = __webpack_require__("../../../../../src/api/src/ts/classes/Transaction.ts");
const DocumentContext_1 = __webpack_require__("../../../../../src/api/src/ts/classes/DocumentContext.ts");
const Document_1 = __webpack_require__("../../../../../src/api/src/ts/classes/Document.ts");
const DbCommandStack_1 = __webpack_require__("../../../../../src/api/src/ts/classes/DbCommandStack.ts");
const DatabaseContext_1 = __webpack_require__("../../../../../src/api/src/ts/classes/DatabaseContext.ts");
const DbUser_1 = __webpack_require__("../../../../../src/api/src/ts/classes/DbUser.ts");
const DbRole_1 = __webpack_require__("../../../../../src/api/src/ts/classes/DbRole.ts");
const Department_1 = __webpack_require__("../../../../../src/api/src/ts/classes/Department.ts");
const Database_1 = __webpack_require__("../../../../../src/api/src/ts/classes/Database.ts");
const DbTransaction_1 = __webpack_require__("../../../../../src/api/src/ts/classes/DbTransaction.ts");
const Reference_1 = __webpack_require__("../../../../../src/api/src/ts/classes/Reference.ts");
const Variant_1 = __webpack_require__("../../../../../src/api/src/ts/classes/Variant.ts");
const DataProvider_1 = __webpack_require__("../../../../../src/api/src/ts/classes/DataProvider.ts");
const Level_1 = __webpack_require__("../../../../../src/api/src/ts/classes/Level.ts");
const LevelNode_1 = __webpack_require__("../../../../../src/api/src/ts/classes/LevelNode.ts");
const Connection_1 = __webpack_require__("../../../../../src/api/src/ts/classes/Connection.ts");
const Condition_1 = __webpack_require__("../../../../../src/api/src/ts/classes/Condition.ts");
const DocumentInfo_1 = __webpack_require__("../../../../../src/api/src/ts/classes/DocumentInfo.ts");
const TreeNode_1 = __webpack_require__("../../../../../src/api/src/ts/classes/TreeNode.ts");
/**
 * Этот класс реализует интерфейс `IFactory`, предназначенный для реализации
 * паттерна "Фабрика". Экземпляры всех интерфейсов, кроме `IFactory` и
 * `IApplication`, следует создавать только при
 * помощи фабрики. Текущая фабрика доступна через метод `IApplication.factory`.
 * Экземпляр `IApplication` доступен через самостоятельную функцию
 * `getApplication()`. Присваивая свойству `IApplication.factory` новое
 * значение можно динамически менять реализацию интерфейсов, наследуемых
 * конкретными классами. Подмена фабрики может использоваться, например, в
 * модульных тестах проекта.
 */
class Factory extends EventEmitter_1.EventEmitter {
    /**
     * Конструктор класса фабрики.
     * @param {IApplication} app Приложение, в составе которого используется фабрика.
     */
    constructor(app) {
        super();
        this._application = app;
    }
    /**
     * Приложение, в составе которого используется данная фабрика.
     */
    get application() {
        return this._application;
    }
    /**
     * Создать объект, содержащий информацию об успешности проделанной операции.
     * @param {boolean} Метка об успешности операции.
     * @param {string} Сообщение об ошибке (используется в случае отказа).
     */
    createIResult(success, errorMessage) {
        let item = new Result_1.Result(success, errorMessage);
        return item;
    }
    /**
     * Создать объект, содержащий в себе подробную информацию о результате работы команды.
     * @param {any} data Объект, в котором размещаются данные,
     * возвращаемые командой (если такие данные имеются).
     * @param {Result} result Перечисление, указывающее на успешность выполнения команды.
     * @return {ICommandOutput} Возвращается экземпляр `ICommandOutput`.
     */
    createICommandOutput({ data, result }) {
        const item = new CommandOutput_1.CommandOutput({ data, result });
        return item;
    }
    /** Создать новый ID. */
    createId() {
        const id = uuid_1.v4();
        return id;
    }
    /**
     * Создать менеджер локализованных ресурсов.
     * @param {string} localizationName Имя локализации, используемой по умолчанию. Эта же локализация
     * будет установлена и в качестве текущей.
     */
    createIResourceManager(localizationName) {
        const item = new ResourceManager_1.ResourceManager(this.application, localizationName);
        return item;
    }
    /**
     * Создать параметр события.
     * @param {any} source
     * @param data
     * @returns {IEventArgs}
     */
    createIEventArgs({ source, data }) {
        const item = new EventArgs_1.EventArgs({ source, data });
        return item;
    }
    /**
     * Создать менеджер документов.
     * @returns {IDocumentManager}
     */
    createIDocumentManager() {
        const item = new DocumentManager_1.DocumentManager(this.application);
        return item;
    }
    /**
     * Создать конструктор команд.
     * @returns {ICommandFactory}
     */
    createICommandFactory() {
        const item = new CommandFactory_1.CommandFactory(this.application);
        return item;
    }
    /**
     * Создать объект стека вызова команд.
     * @param {IDocumentContext} context Контекст, в составе которого будет
     * размещаться создаваемый стек команд.
     * @returns {ICommandStack}
     */
    createICommandStack(context) {
        const item = new CommandStack_1.CommandStack(context);
        return item;
    }
    /**
     * Создать новую транзакцию для заданного документа.
     * @param {IDocument} doc Документ, владеющий транзакцией.
     * @returns {ITransaction}
     */
    createITransaction(doc) {
        const item = new Transaction_1.Transaction(doc);
        return item;
    }
    /**
     * Создать контекст использования документа.
     * @param {IDocument} doc Документ, для которого следует создать контекст.
     * @param {Map<ID,ILevel>} levels Уровни, определённые в составе документа (технологии).
     * @param {Map<NodeID, ITreeNode<EntityID>>} treeNodes Описания иерархических структур, ссылающихся
     * на объекты бизнес-модели.
     * @param {Map<ID, ILevelEntity>} levelEntities Узлы и условия.
     * @param {Map<ID,IConnection>} connections Связи между узлами и условиями.
     * @param {Map<ID,IVariant>} variants Варианты, используемые в условиях.
     * @param {Map<ID,IReference>} references Ссылки на web-странички, используемые в узлах.
     * @param {string} name Наименование документа.
     * @param {string} name Код документа.
     * @returns {IDocumentContext}
     */
    createIDocumentContext(doc, levels, treeNodes, levelEntities, connections, variants, references, name, code) {
        const item = new DocumentContext_1.DocumentContext(doc, levels, treeNodes, levelEntities, connections, variants, references, name, code);
        return item;
    }
    /**
     * Создать новый документ (технологию).
     * @param {string} name Наименование документа.
     * @param {string} code Код документа.
     * @returns {IDocument}
     */
    createIDocument(name, code) {
        const item = new Document_1.Document(this.application, name, code);
        return item;
    }
    createIDbTransaction(db) {
        return new DbTransaction_1.DbTransaction(db);
    }
    createIDbCommandStack(context) {
        return new DbCommandStack_1.DbCommandStack(context);
    }
    createIDatabaseContext(database, departments, roles, users) {
        return new DatabaseContext_1.DatabaseContext(database, departments, roles, users);
    }
    createIDbUser(database, firstName, middleName, lastName, site) {
        return new DbUser_1.DbUser(database, firstName, middleName, lastName, site);
    }
    createIDbRole(database, code, name, site, parent) {
        return new DbRole_1.DbRole(database, code, name, site, parent);
    }
    createDepartment(database, code, name, site, parent, role) {
        return new Department_1.Department(database, code, name, site, parent, role);
    }
    createIDatabase(app) {
        return new Database_1.Database(app);
    }
    createITreeNode(doc) {
        return new TreeNode_1.TreeNode(doc);
    }
    createIReference(levelNode, text, path, tooltip, iconName) {
        return new Reference_1.Reference(levelNode, text, path, tooltip, iconName);
    }
    createIVariant(condition, text) {
        return new Variant_1.Variant(condition, text);
    }
    createIDataProvider() {
        return new DataProvider_1.DataProvider(this.application);
    }
    createILevel(doc, name, code, color, autoNum) {
        return new Level_1.Level(doc, name, code, color, autoNum);
    }
    createILevelNode(doc, name, code) {
        return new LevelNode_1.LevelNode(doc, name, code);
    }
    createIConnection(document, source, target, text) {
        return new Connection_1.Connection(document, source, target, text);
    }
    createICondition(doc, code, text) {
        return new Condition_1.Condition(doc, code, text);
    }
    createIDocumentInfo(id, code, name) {
        return new DocumentInfo_1.DocumentInfo(id, code, name);
    }
}
exports.Factory = Factory;
//# sourceMappingURL=Factory.js.map

/***/ }),

/***/ "../../../../../src/api/src/ts/classes/Level.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const EventEmitter_1 = __webpack_require__("../../../../../src/api/src/ts/classes/EventEmitter.ts");
const TypeNames_1 = __webpack_require__("../../../../../src/api/src/ts/enums/TypeNames.ts");
const TransactionStatus_1 = __webpack_require__("../../../../../src/api/src/ts/enums/TransactionStatus.ts");
/**
 * Уровень.
 */
class Level extends EventEmitter_1.EventEmitter {
    isDeletedByForefather() {
        if (!this.prevId)
            return false;
        let prev = this.document.getContext().levels.get(this.prevId);
        return prev.isDeleted();
    }
    isDeleted() {
        return this.isDeletedDirectly || this.isDeletedByForefather();
    }
    _setDocument(doc) {
        this._document = doc;
    }
    get prevId() {
        return this._prevId;
    }
    isInsideOfTransaction() {
        let transaction = this._document.getCurrentTransaction();
        if (!transaction || transaction.status != TransactionStatus_1.TransactionStatus.Started)
            return false;
        else
            return true;
    }
    set prevId(value) {
        if (!this.isInsideOfTransaction()) {
            throw new Error('Редактировать объект можно только в предварительно открытой транзакции.');
        }
        if (this.document.application.getCurrentUserId() !== this.lockerId) {
            throw new Error('Попытка отредактировать свойство незаблокированного вами объекта.');
        }
        this._prevId = value;
        this.isChanged = true;
        this.document.getCurrentTransaction().editedItems.set(this.id, this);
    }
    get nextId() {
        return this._nextId;
    }
    set nextId(value) {
        if (!this.isInsideOfTransaction()) {
            throw new Error('Редактировать объект можно только в предварительно открытой транзакции.');
        }
        if (this.document.application.getCurrentUserId() !== this.lockerId) {
            throw new Error('Попытка отредактировать свойство незаблокированного вами объекта.');
        }
        this._nextId = value;
        this.isChanged = true;
        this.document.getCurrentTransaction().editedItems.set(this.id, this);
    }
    get typeName() {
        return this._typeName;
    }
    constructor(doc, name, code, color, autoNum) {
        super();
        this._document = doc;
        this._typeName = TypeNames_1.TypeNames.Level;
        this._code = code;
        this._name = name;
        this._color = color;
        this._autoNum = autoNum;
        this._isChanged = false;
        this._isDeleted = false;
        this._lockerId = null;
        this._prevId = null;
        this._nextId = null;
    }
    get document() {
        return this._document;
    }
    get code() {
        return this._code;
    }
    set code(value) {
        if (!this.isInsideOfTransaction()) {
            throw new Error('Редактировать объект можно только в предварительно открытой транзакции.');
        }
        if (this.document.application.getCurrentUserId() !== this.lockerId) {
            throw new Error('Попытка отредактировать свойство незаблокированного вами объекта.');
        }
        this._code = value;
        this.document.getCurrentTransaction().editedItems.set(this.id, this);
    }
    get name() {
        return this._name;
    }
    set name(value) {
        if (!this.isInsideOfTransaction()) {
            throw new Error('Редактировать объект можно только в предварительно открытой транзакции.');
        }
        if (this.document.application.getCurrentUserId() !== this.lockerId) {
            throw new Error('Попытка отредактировать свойство незаблокированного вами объекта.');
        }
        this._name = value;
        this.isChanged = true;
        this.document.getCurrentTransaction().editedItems.set(this.id, this);
    }
    get autoNum() {
        return this._autoNum;
    }
    set autoNum(value) {
        if (!this.isInsideOfTransaction()) {
            throw new Error('Редактировать объект можно только в предварительно открытой транзакции.');
        }
        if (this.document.application.getCurrentUserId() !== this.lockerId) {
            throw new Error('Попытка отредактировать свойство незаблокированного вами объекта.');
        }
        this._autoNum = value;
        this.isChanged = true;
        this.document.getCurrentTransaction().editedItems.set(this.id, this);
    }
    get color() {
        return this._color;
    }
    set color(value) {
        if (!this.isInsideOfTransaction()) {
            throw new Error('Редактировать объект можно только в предварительно открытой транзакции.');
        }
        if (this.document.application.getCurrentUserId() !== this.lockerId) {
            throw new Error('Попытка отредактировать свойство незаблокированного вами объекта.');
        }
        this._color = value;
        this.isChanged = true;
        this.document.getCurrentTransaction().editedItems.set(this.id, this);
    }
    get isDeletedDirectly() {
        return this._isDeleted;
    }
    set isDeletedDirectly(value) {
        if (!this.isInsideOfTransaction()) {
            throw new Error('Редактировать объект можно только в предварительно открытой транзакции.');
        }
        if (this.document.application.getCurrentUserId() !== this.lockerId) {
            throw new Error('Попытка отредактировать свойство незаблокированного вами объекта.');
        }
        this._isDeleted = value;
        this.isChanged = true;
        this.document.getCurrentTransaction().deletedItems.set(this.id, this);
    }
    get lockerId() {
        return this._lockerId;
    }
    set lockerId(value) {
        if (!this.isInsideOfTransaction()) {
            throw new Error('Редактировать объект можно только в предварительно открытой транзакции.');
        }
        this._lockerId = value;
        this._isChanged = true;
        this.document.getCurrentTransaction().editedItems.set(this.id, this);
    }
    get isChanged() {
        return this._isChanged;
    }
    set isChanged(value) {
        if (!this.isInsideOfTransaction()) {
            throw new Error('Редактировать объект можно только в предварительно открытой транзакции.');
        }
        if (this.document.application.getCurrentUserId() !== this.lockerId) {
            throw new Error('Попытка отредактировать свойство незаблокированного вами объекта.');
        }
        this._isChanged = value;
        this.document.getCurrentTransaction().editedItems.set(this.id, this);
    }
    _setID(value) {
        this._id = value;
    }
    /**
     * Создать полную копию уровня, с тем же самым ID.
     * @returns {ILevel}
     */
    clone() {
        let item = this.document.application.factory.createILevel(this.document, this.name, this.code, this.color, this.autoNum);
        item._setID(this.id);
        item._lockerId = this.lockerId;
        item._isChanged = this.isChanged;
        item._isDeleted = this.isDeletedDirectly;
        item._prevId = this.prevId;
        item._nextId = this.nextId;
        return item;
    }
}
exports.Level = Level;
//# sourceMappingURL=Level.js.map

/***/ }),

/***/ "../../../../../src/api/src/ts/classes/LevelNode.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const EventEmitter_1 = __webpack_require__("../../../../../src/api/src/ts/classes/EventEmitter.ts");
const TypeNames_1 = __webpack_require__("../../../../../src/api/src/ts/enums/TypeNames.ts");
const TransactionStatus_1 = __webpack_require__("../../../../../src/api/src/ts/enums/TransactionStatus.ts");
class LevelNode extends EventEmitter_1.EventEmitter {
    constructor(doc, name, code) {
        super();
        this._document = doc;
        this._typeName = TypeNames_1.TypeNames.LevelNode;
        this._treeNodeID = null;
        this._code = code;
        this._name = name;
        this._roleID = null;
        this._references = [];
        this._inputConnections = [];
        this._outputConnections = [];
        this._laborCosts = 0;
    }
    /**
     * Получить все ссылки узла.
     * @returns {Array<IReference>}
     */
    getReferences() {
        let arr = [];
        for (let n of this.references) {
            let reference = this.document.getContext()
                .references.get(n);
            if (!reference.isDeleted())
                arr.push(reference);
        }
        return arr;
    }
    isInsideOfTransaction() {
        let transaction = this._document.getCurrentTransaction();
        if (!transaction || transaction.status != TransactionStatus_1.TransactionStatus.Started)
            return false;
        else
            return true;
    }
    /**
     * Проверка на то, был ли удалён данный объект опосредованно - через удаление одного из его
     * предков.
     * @returns {boolean}
     */
    isDeletedByForefather() {
        let parent = this.getParent();
        let context = this.document.getContext();
        let treeNode = context.treeNodes.get(parent.nodeId);
        return treeNode.isDeleted();
    }
    /**
     * Проверка на то, был ли объект удалён каким-либо образом: напрямую, через установку
     * свойства `isDeletedDirectly`, или же опосредованно, через удаление родителя
     * (см. метод `isDeletedByForefather()`).
     * @returns {boolean}
     */
    isDeleted() {
        let context = this.document.getContext();
        let treeNode = context.treeNodes.get(this.nodeId);
        return treeNode.isDeleted();
    }
    /**
     * Удалить узел или условие.
     * @returns {IResult} Отчёт о результате выполнения операции.
     */
    delete() {
        if (!this.isInsideOfTransaction()) {
            throw new Error('Редактировать объект можно только в предварительно открытой транзакции.');
        }
        let context = this.document.getContext();
        let treeNode = context.treeNodes.get(this.nodeId);
        let result = treeNode.delete();
        if (result.success)
            this.document.getCurrentTransaction().editedItems.set(this.id, this);
        return result;
    }
    /**
     * Заблокировать узел или условие.
     * @returns {IResult} Отчёт о результате выполнения операции.
     */
    lock() {
        if (!this.isInsideOfTransaction()) {
            throw new Error('Редактировать объект можно только в предварительно открытой транзакции.');
        }
        let context = this.document.getContext();
        let treeNode = context.treeNodes.get(this.nodeId);
        return treeNode.lock();
    }
    /**
     * Разблокировать узел или условие.
     * @returns {IResult} Отчёт о результате выполнения операции.
     */
    unlock() {
        if (!this.isInsideOfTransaction()) {
            throw new Error('Редактировать объект можно только в предварительно открытой транзакции.');
        }
        let context = this.document.getContext();
        let treeNode = context.treeNodes.get(this.nodeId);
        return treeNode.unlock();
    }
    /**
     * Получить идентификатор пользователя, заблокировавшего данный объект.
     * Объект может быть заблокирован опосредованно, через одного из своих предков.
     * @returns {string}
     */
    getLockerID() {
        let context = this.document.getContext();
        let treeNode = context.treeNodes.get(this.nodeId);
        return treeNode.getLockerID();
    }
    get document() {
        return this._document;
    }
    get authorId() {
        return this._author;
    }
    set authorId(value) {
        if (!this.isInsideOfTransaction()) {
            throw new Error('Редактировать объект можно только в предварительно открытой транзакции.');
        }
        if (this.getLockerID() != this.document.application.getCurrentUserId()) {
            throw new Error('Редактировать можно только объекты, предварительно заблокированые вами.');
        }
        this._author = value;
        this.document.getCurrentTransaction().editedItems.set(this.id, this);
    }
    get references() {
        return this._references;
    }
    set references(value) {
        if (!this.isInsideOfTransaction()) {
            throw new Error('Редактировать объект можно только в предварительно открытой транзакции.');
        }
        if (this.getLockerID() != this.document.application.getCurrentUserId()) {
            throw new Error('Редактировать можно только объекты, предварительно заблокированые вами.');
        }
        this._references = value;
        this.document.getCurrentTransaction().editedItems.set(this.id, this);
    }
    get autoSum() {
        return this._autoSum;
    }
    set autoSum(value) {
        if (!this.isInsideOfTransaction()) {
            throw new Error('Редактировать объект можно только в предварительно открытой транзакции.');
        }
        if (this.getLockerID() != this.document.application.getCurrentUserId()) {
            throw new Error('Редактировать можно только объекты, предварительно заблокированые вами.');
        }
        this._autoSum = value;
        this.document.getCurrentTransaction().editedItems.set(this.id, this);
    }
    get laborCosts() {
        return this._laborCosts;
    }
    set laborCosts(value) {
        if (!this.isInsideOfTransaction()) {
            throw new Error('Редактировать объект можно только в предварительно открытой транзакции.');
        }
        if (this.getLockerID() != this.document.application.getCurrentUserId()) {
            throw new Error('Редактировать можно только объекты, предварительно заблокированые вами.');
        }
        this._laborCosts = value;
        this.document.getCurrentTransaction().editedItems.set(this.id, this);
    }
    get description() {
        return this._description;
    }
    set description(value) {
        if (!this.isInsideOfTransaction()) {
            throw new Error('Редактировать объект можно только в предварительно открытой транзакции.');
        }
        if (this.getLockerID() != this.document.application.getCurrentUserId()) {
            throw new Error('Редактировать можно только объекты, предварительно заблокированые вами.');
        }
        this._description = value;
        this.document.getCurrentTransaction().editedItems.set(this.id, this);
    }
    get inputConnectionIDs() {
        return this._inputConnections;
    }
    get outputConnectionIDs() {
        return this._outputConnections;
    }
    /**
     * Получить уровень, на котором размещается узел.
     * @returns {ILevel} Возвращается уровень. Если узел был удалён, то возвращается `null`.
     */
    getLevel() {
        let index = 0; // индекс уровня
        let node = this.document.getContext().treeNodes.get(this.nodeId);
        while (node.getParent()) {
            ++index;
            node = this.document.getContext().treeNodes.get(node.getParent());
        }
        // теперь выбираем уровень с нужным индексом.
        let level = this.document.getContext().getTopLevel();
        if (!level) {
            console.log('Верхний уровень не найден.');
            return null;
        }
        while (index > 0) {
            if (!level.nextId) {
                return null;
            }
            else {
                level = this.document.getContext().levels.get(level.nextId);
                --index;
            }
        }
        return level;
    }
    /**
     * Наименование типа данного объекта.
     */
    get typeName() {
        return this._typeName;
    }
    /**
     * Идентификатор нода в иерархической структуре, содержащего ссылку на данный объект.
     */
    get nodeId() {
        return this._treeNodeID;
    }
    set nodeId(id) {
        if (!this.isInsideOfTransaction()) {
            throw new Error('Редактировать объект можно только в предварительно открытой транзакции.');
        }
        // Если свойство уже содержит присваиваемое значение, то нет смысла присваивать его повторно.
        if (id && this.nodeId === id)
            return;
        else if (id) {
            const obj = this.document.getContext().treeNodes.get(id);
            if (obj) {
                if (obj.valueId != this.id)
                    obj.valueId = this.id;
            }
            // Изменяем значение даже если объект не был найден, т.к. если идёт инициализация
            // проекта или общей базы данных, то вполне возможно, что объект к этому моменту
            // ещё не был добавлен, но будет присутствовать к моменту завершения инициализации.
            this._treeNodeID = id;
            this.document.getCurrentTransaction().editedItems.set(this.id, this);
        }
        else {
            this._treeNodeID = null;
            this.document.getCurrentTransaction().editedItems.set(this.id, this);
        }
    }
    /**
     * Код объекта.
     */
    get code() {
        return this._code;
    }
    set code(value) {
        if (!this.isInsideOfTransaction()) {
            throw new Error('Редактировать объект можно только в предварительно открытой транзакции.');
        }
        if (this.getLockerID() != this.document.application.getCurrentUserId()) {
            throw new Error('Редактировать можно только объекты, предварительно заблокированые вами.');
        }
        this._code = value;
        this.document.getCurrentTransaction().editedItems.set(this.id, this);
    }
    /**
     * Наименование объекта.
     */
    get name() {
        return this._name;
    }
    set name(value) {
        if (!this.isInsideOfTransaction()) {
            throw new Error('Редактировать объект можно только в предварительно открытой транзакции.');
        }
        if (this.getLockerID() != this.document.application.getCurrentUserId()) {
            throw new Error('Редактировать можно только объекты, предварительно заблокированые вами.');
        }
        this._name = value;
        this.document.getCurrentTransaction().editedItems.set(this.id, this);
    }
    /**
     * Идентификатор роли, связанной в данным объектом.
     */
    get roleId() {
        return this._roleID;
    }
    set roleId(id) {
        if (!this.isInsideOfTransaction()) {
            throw new Error('Редактировать объект можно только в предварительно открытой транзакции.');
        }
        if (this.getLockerID() != this.document.application.getCurrentUserId()) {
            throw new Error('Редактировать можно только объекты, предварительно заблокированые вами.');
        }
        this._roleID = id;
        this.document.getCurrentTransaction().editedItems.set(this.id, this);
    }
    /**
     * Получить дочерние узлы, лежащие на один уровень ниже данного узла.
     * @returns {Array<ILevelNode>}
     */
    getChildrenNodes() {
        let arr = [];
        let node = this.document.getContext().treeNodes.get(this.nodeId);
        for (let n of node.childrenIDs) {
            let _node = this.document.getContext().treeNodes.get(n);
            if (!_node.isDeletedDirectly) {
                let item = this.document.getContext().levelEntities.get(_node.valueId);
                if (item.typeName === TypeNames_1.TypeNames.LevelNode)
                    arr.push(item);
            }
        }
        return arr;
    }
    /**
     * Получить дочерние условия, лежащие на один уровень ниже данного узла.
     * @returns {Array<ILevelEntity>}
     */
    getChildrenConditions() {
        let arr = [];
        let node = this.document.getContext().treeNodes.get(this.nodeId);
        for (let n of node.childrenIDs) {
            let _node = this.document.getContext().treeNodes.get(n);
            if (!_node.isDeletedDirectly) {
                let item = this.document.getContext().levelEntities.get(_node.valueId);
                if (item.typeName === TypeNames_1.TypeNames.Condition)
                    arr.push(item);
            }
        }
        return arr;
    }
    /**
     * Получить объекты входящих подключений.
     * @returns {Array<IConnection>}
     */
    getInputConnections() {
        let arr = [];
        for (let n of this.inputConnectionIDs) {
            let connection = this.document.getContext().connections.get(n);
            if (!connection.isDeletedDirectly)
                arr.push(connection);
        }
        return arr;
    }
    /**
     * Получить объекты исходящих подключений.
     * @returns {Array<IConnection>}
     */
    getOutputConnections() {
        let arr = [];
        for (let n of this.outputConnectionIDs) {
            let connection = this.document.getContext().connections.get(n);
            if (!connection.isDeletedDirectly)
                arr.push(connection);
        }
        return arr;
    }
    /**
     * Получить родительский узел, находящийся на одном уровне выше.
     * @returns {ILevelEntity}
     */
    getParent() {
        let node = this.document.getContext().treeNodes.get(this.nodeId);
        let parentId = node.getParent();
        if (parentId) {
            let _node = this.document.getContext().treeNodes.get(parentId);
            return this.document.getContext().levelEntities.get(_node.valueId);
        }
        else {
            return null;
        }
    }
    /**
     * Проверка на то, может ли нод содержать дочерние ноды. Это определяется
     * структурой уровней: если для дочерних объектов предоставлен уровень, то
     * их можно создавать для данного нода.
     * @returns {boolean}
     */
    canHaveChildren() {
        return this.document.getContext()
            .treeNodes.get(this.nodeId).canHaveChildren();
    }
    /**
     * Создать полную копию узла с тем же самым ID.
     * @returns {ILevelNode}
     */
    clone() {
        let item = this.document.application.factory.createILevelNode(this.document, this.name, this.code);
        item._setID(this.id);
        item._treeNodeID = this.nodeId;
        item._roleID = this.roleId;
        item._author = this.authorId;
        item._autoSum = this.autoSum;
        item._laborCosts = this.laborCosts;
        item._description = this.description;
        for (let n of this.references) {
            item.references.push(n);
        }
        for (let n of this.inputConnectionIDs) {
            item.inputConnectionIDs.push(n);
        }
        for (let n of this.outputConnectionIDs) {
            item.outputConnectionIDs.push(n);
        }
        return item;
    }
    _setID(value) {
        this._id = value;
    }
}
exports.LevelNode = LevelNode;
//# sourceMappingURL=LevelNode.js.map

/***/ }),

/***/ "../../../../../src/api/src/ts/classes/Reference.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const EventEmitter_1 = __webpack_require__("../../../../../src/api/src/ts/classes/EventEmitter.ts");
const TypeNames_1 = __webpack_require__("../../../../../src/api/src/ts/enums/TypeNames.ts");
const TransactionStatus_1 = __webpack_require__("../../../../../src/api/src/ts/enums/TransactionStatus.ts");
/**
 * Ссылка на web-страничку.
 */
class Reference extends EventEmitter_1.EventEmitter {
    isInsideOfTransaction() {
        let transaction = this.document.getCurrentTransaction();
        if (!transaction || transaction.status != TransactionStatus_1.TransactionStatus.Started)
            return false;
        else
            return true;
    }
    /**
     * Конструктор класса.
     * @param {ILevelNode} levelNode Идентификатор узла, в составе которого определена ссылка.
     * @param {string} text Наименование ссылки (для отображения пользователю).
     * @param {string} path URL-адрес ссылки.
     * @param {string} tooltip Текст всплывающей подсказки.
     * @param {string} iconName Наименование иконки, используемой для ссылки.
     */
    constructor(levelNode, text, path, tooltip, iconName) {
        super();
        this._levelNodeID = levelNode.id;
        this._document = levelNode.document;
        this._text = text;
        this._path = path;
        this._tooltip = tooltip;
        this._iconName = iconName;
        this._typeName = TypeNames_1.TypeNames.Reference;
    }
    /**
     * Проверка на то, был ли удалён данный объект опосредованно - через удаление одного из его
     * предков.
     * @returns {boolean}
     */
    isDeletedByForefather() {
        return this._document.getContext().levelEntities
            .get(this.levelNodeID).isDeleted();
    }
    /**
     * Проверка на то, был ли объект удалён каким-либо образом: напрямую, через установку
     * свойства `isDeletedDirectly`, или же опосредованно, через удаление родителя
     * (см. метод `isDeletedByForefather()`).
     * @returns {boolean}
     */
    isDeleted() {
        return this.isDeletedDirectly || this.isDeletedByForefather();
    }
    get document() {
        return this._document;
    }
    /**
     * Документ (технология), в составе которого определена ссылка.
     * @returns {IDocument}
     */
    get levelNodeID() {
        return this._levelNodeID;
    }
    /**
     * Идентификатор пользователя, заблокировавшего ссылку.
     * @returns {string}
     */
    get lockerId() {
        return this._lockerId;
    }
    set lockerId(value) {
        if (!this.isInsideOfTransaction()) {
            throw new Error('Редактировать объект можно только в предварительно открытой транзакции.');
        }
        this._lockerId = value;
        this.document.getCurrentTransaction().editedItems.set(this.id, this);
    }
    /**
     * Метка о том, была ли ссылка изменена вами.
     * @returns {boolean}
     */
    get isChanged() {
        return this._isChanged;
    }
    set isChanged(value) {
        if (!this.isInsideOfTransaction()) {
            throw new Error('Редактировать объект можно только в предварительно открытой транзакции.');
        }
        this._isChanged = value;
        this.document.getCurrentTransaction().editedItems.set(this.id, this);
    }
    /**
     * Метка о том, была ли ссылка удалена вами.
     * @returns {boolean}
     */
    get isDeletedDirectly() {
        return this._isDeleted;
    }
    set isDeletedDirectly(value) {
        if (!this.isInsideOfTransaction()) {
            throw new Error('Редактировать объект можно только в предварительно открытой транзакции.');
        }
        this._isDeleted = value;
        this.document.getCurrentTransaction().editedItems.set(this.id, this);
        if (this._isDeleted)
            this.document.getCurrentTransaction().deletedItems.set(this.id, this);
    }
    /**
     * Всплывающая подсказка для ссылки.
     * @returns {string}
     */
    get tooltip() {
        return this.tooltip;
    }
    set tooltip(value) {
        if (!this.isInsideOfTransaction()) {
            throw new Error('Редактировать объект можно только в предварительно открытой транзакции.');
        }
        this.tooltip = value;
        this.document.getCurrentTransaction().editedItems.set(this.id, this);
    }
    /**
     * URL-адрес ссылки.
     * @returns {string}
     */
    get path() {
        return this._path;
    }
    set path(value) {
        if (!this.isInsideOfTransaction()) {
            throw new Error('Редактировать объект можно только в предварительно открытой транзакции.');
        }
        this._path = value;
        this.document.getCurrentTransaction().editedItems.set(this.id, this);
    }
    /**
     * Наименование ссылки (для отображения пользователю).
     * @returns {string}
     */
    get text() {
        return this._text;
    }
    set text(value) {
        if (!this.isInsideOfTransaction()) {
            throw new Error('Редактировать объект можно только в предварительно открытой транзакции.');
        }
        this._text = value;
        this.document.getCurrentTransaction().editedItems.set(this.id, this);
    }
    /**
     * Наименование иконки, отображаемой для ссылки.
     * @returns {string}
     */
    get iconName() {
        return this._iconName;
    }
    set iconName(value) {
        if (!this.isInsideOfTransaction()) {
            throw new Error('Редактировать объект можно только в предварительно открытой транзакции.');
        }
        this._iconName = value;
        this.document.getCurrentTransaction().editedItems.set(this.id, this);
    }
    get typeName() {
        return this._typeName;
    }
    _setID(value) {
        this._id = value;
    }
    clone(owner) {
        let item = this._document.application.factory.createIReference(owner, this._text, this._path, this._tooltip, this._iconName);
        item._setID(this.id);
        item._lockerId = this._lockerId;
        item._isChanged = this._isChanged;
        item._isDeleted = this.isDeletedDirectly;
        return item;
    }
    getlevelNode() {
        return this.document.getContext().levelEntities
            .get(this.levelNodeID);
    }
}
exports.Reference = Reference;
//# sourceMappingURL=Reference.js.map

/***/ }),

/***/ "../../../../../src/api/src/ts/classes/ResourceManager.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const EventEmitter_1 = __webpack_require__("../../../../../src/api/src/ts/classes/EventEmitter.ts");
/**
 * Менеджер локализованных ресурсов. Он позволяет добавлять и удалять локализации, а
 * так же сохранять в них локализованные текстовые сообщения, используемые в программе. Менеджер
 * так же следит за тем, чтовы во всех локализациях был одинаковый набор ключей.
 */
class ResourceManager extends EventEmitter_1.EventEmitter {
    /**
     * Конструктор класса.
     * @param {IApplication} app Приложение, в составе которого используется менеджер ресурсов.
     * @param {string} localizationName Имя локализации, используемой по умолчанию. Эта же локализация
     * будет установлена и в качестве текущей.
     */
    constructor(app, localizationName) {
        super();
        this._application = app;
        localizationName = localizationName.toUpperCase();
        // Словарь локализаций. Ключ - имя локализации, значение - словарь локализованных записей.
        this._localizedMaps = new Map();
        this._localizedMaps.set(localizationName, new Map());
        this.defaultLocalizationName = localizationName;
        this.currentLocalizationName = localizationName;
        this.addRecord('COMMAND-NOT-FOUND', "Команда '{0}' не найдена.", "Command '{0}' not found.");
    }
    /**
     * Упрощённое форматирование строк: заменить все числовые значения, вида `{число}` в строке,
     * указанной в параметре `format`, на строки с соответствующим индексом, перечисленные в
     * параметре `args`.
     * @param {string} format Строка форматирования.
     * @param {any[]} args Параметры, используемые в процессе форматирования.
     * @returns {string} Возвращается отформатированное значение.
     */
    printf(format, ...args) {
        if (!format)
            return null;
        return format.replace(/{(\d+)}/g, function (match, number) {
            return typeof args[number] != 'undefined' ? (null == args[number] ? 'null' : args[number].toString()) : match;
        });
    }
    ;
    /**
     * Получить отформатированное значение локализованного ресурса.
     * @param {string} key Ключ локализованного ресурса.
     * @param {any[]} args Параметры, участвующие в процессе форматирования.
     * @returns {string} Возвращается результат форматирования.
     */
    getValue(key, ...args) {
        const format = this._getValue(key);
        return this.printf(format, ...args);
    }
    /**
     * Для указанной локализации получить отформатированное значение локализованного
     * ресурса.
     * @param {string} localization Локализация, для которой следует получить значение.
     * @param {string} key Ключ локализованного ресурса.
     * @param {any[]} args Параметры, участвующие в процессе форматирования.
     * @returns {string} Возвращается результат форматирования.
     */
    getValue2(localization, key, ...args) {
        const format = this._getValue2(localization, key);
        return this.printf(format, ...args);
    }
    /**
     * Проверка наличия локализации с указанным именем.
     * @param {string} key Наименование искомой локализации.
     * @returns {boolean}
     */
    hasLocalization(key) {
        return (!key || !key.trim() || !this._localizedMaps.has(key.toUpperCase())) ? false : true;
    }
    /**
     * Приложение, в составе которого используется данный менеджер ресурсов.
     */
    get application() {
        return this._application;
    }
    get defaultLocalizationName() {
        return this._defaultLocalizationName;
    }
    /**
     * Имя локализации, используемой по умолчанию. Эта локализация будет использоваться командой
     * `addLocalization()` если его параметру `sourceId` в качестве значения будет передан `null`.
     * @param {string} value Новое значение будет присвоено только в том случае,
     * если указанное имя было предварительно зарегистрировано. В противном случае
     * будет сгенерировано исключение
     */
    set defaultLocalizationName(value) {
        if (value && value.trim() && this._localizedMaps.has(value.toUpperCase())) {
            this._defaultLocalizationName = value.toUpperCase();
        }
        else {
            throw new Error("Незарегистрированное имя локализации: '" + value + "'");
        }
    }
    /**
     * Имя локализации, используемой на данный момент времени.
     * @returns {string}
     */
    get currentLocalizationName() {
        return this._currentLocalizationName;
    }
    /**
     * Новое значение будет присвоено только в том случае, если указанное имя было
     * предварительно зарегистрировано. В противном случае будет сгенерировано исключение.
     * @param {string} value
     */
    set currentLocalizationName(value) {
        if (value && value.trim() && this._localizedMaps.has(value.toUpperCase())) {
            this._currentLocalizationName = value.toUpperCase();
        }
        else {
            throw new Error("Незарегистрированное имя локализации: '" + value + "'");
        }
    }
    /**
     * Зарегистрировать новую локализацию. При этом в новую локализацию будут скопированы все
     * локализованные записи из локализации, указанной в параметре `sourceId`. Если в `sourceId`
     * в качестве значения был указан `null`, то записи будут копироваться из локализации,
     * используемой по умолчанию.
     *
     * **ВНИМАНИЕ!** *Затем вам нужно будет не забыть **локализовать** записи зарегистрированной
     * вами новой локализации.*
     *
     * Если в качестве значения параметра `sourceId` будет передано ранее незагеристрированное
     * имя локализации, то операция будет отклонена.
     *
     * @param {string} name Имя новой локализации. Если в качестве имени новой локализации
     * указано уже зарегистрированное имя, то операция будет отклонена.
     * @param {string} source Имя заранее зарегистрированой локализации, взятой за основу для
     * создания новой.
     * @returns {IResult} Отчёт об успешности проделанной операции.
     */
    addLocalization(name, source = null) {
        if (!name || !name.trim()) {
            const result = this._application.factory.createIResult(false, `addLocalization: Указано недопустимое имя локализации.`);
            return result;
        }
        name = name.toUpperCase();
        if (this._localizedMaps.has(name)) {
            const result = this._application.factory.createIResult(false, `Локализация с именем '${name}' уже зарегистрирована.`);
            return result;
        }
        if (source && !this._localizedMaps.has(source.toUpperCase())) {
            const result = this._application.factory.createIResult(false, `Локализация с именем '${name}' не найдена среди ранее зарегистрированных.`);
            return result;
        }
        let sourceName;
        if (!source) {
            sourceName = this.defaultLocalizationName;
        }
        else {
            sourceName = source;
        }
        let map = new Map();
        sourceName = sourceName.toUpperCase();
        for (let n of this._localizedMaps.get(sourceName)) {
            map.set(n[0], n[1]);
        }
        this._localizedMaps.set(name, map);
        const result = this._application.factory.createIResult(true, '');
        return result;
    }
    /**
     * Удалить локализацию. Попытка удалить локализацию, используемую по умолчанию,
     * будет отклонена. Так же будет отклонена попытка удалить текущую локализацию.
     * @param {string} name Имя удаляемой локализации.
     * @returns {IResult}
     */
    deleteLocalization(name) {
        if (!name || !name.trim()) {
            const result = this._application.factory.createIResult(false, `deleteLocalization: Указано недопустимое имя локализации.`);
            return result;
        }
        name = name.toUpperCase();
        if (this.defaultLocalizationName === name) {
            const result = this._application.factory.createIResult(false, 'Отклонена попытка удаления локализации, используемой по умолчанию.');
            return result;
        }
        else if (this.currentLocalizationName === name) {
            const result = this._application.factory.createIResult(false, 'Отклонена попытка удаления текущей локализации.');
            return result;
        }
        else if (!this._localizedMaps.has(name)) {
            const result = this._application.factory.createIResult(false, `Локализация с именем '${name}' не зарегистрирована.`);
            return result;
        }
        else {
            this._localizedMaps.delete(name);
            const result = this._application.factory.createIResult(true, '');
            return result;
        }
    }
    /**
     * Количество зарегистрированных локализаций.
     * @returns {number}
     */
    getLocalizationsCount() {
        return this._localizedMaps.size;
    }
    /**
     * Получить имена зарегистрированных локализаций.
     * @returns {IterableIterator<string>}
     */
    getLocalizationNames() {
        return this._localizedMaps.keys();
    }
    /**
     * Проверить в текущей локализации наличие записи с указанным ключом.
     * @param {string} key Ключ искомой записи.
     * @returns {boolean}
     */
    hasKey(key) {
        if (!key || !key.trim())
            return false;
        return this._localizedMaps.get(this.currentLocalizationName).has(key.toUpperCase());
    }
    /**
     * Добавить локализованную запись.
     * @param {string} key Ключ новой записи.
     * @param {string} localizedValue Текстовое значение, которое должно быть
     * сохранено для текущей локализации.
     * @param {string} defaultValue Текстовое значение, которое должно быть
     * сохранено для всех локализаций кроме текущей.
     * @returns {IResult}
     */
    addRecord(key, localizedValue, defaultValue) {
        if (!key || !key.trim()) {
            const result = this._application.factory.createIResult(false, 'addRecord: Новая запись имеет недопустимый ключ.');
            return result;
        }
        if (!localizedValue || !localizedValue.trim() || !defaultValue || !defaultValue.trim()) {
            const result = this._application.factory.createIResult(false, 'addRecord: Запрещено использовать `null` и `undefined` в качестве значений.');
            return result;
        }
        key = key.toUpperCase();
        if (this.hasKey(key)) {
            const result = this._application.factory.createIResult(false, `Запись с ключом '${key}' уже существует в локализованных ресурсах.`);
            return result;
        }
        else {
            for (let lang of this.getLocalizationNames()) {
                const map = this._localizedMaps.get(lang);
                const text = this.currentLocalizationName === lang ? localizedValue : defaultValue;
                map.set(key.toUpperCase(), text);
            }
            const result = this._application.factory.createIResult(true, '');
            return result;
        }
    }
    /**
     * Удалить во всех локализациях запись с указанным ключом.
     * @param {string} key Ключ записей, подлежащих удалению во всех локализациях.
     * @returns {IResult}
     */
    deleteRecord(key) {
        if (!key || !key.trim()) {
            const result = this._application.factory.createIResult(false, 'deleteRecord: Указан недопустимый ключ записи.');
            return result;
        }
        key = key.toUpperCase();
        if (!this.hasKey(key)) {
            const result = this._application.factory.createIResult(false, `Запись с ключом '${key}' не найдена в ресурсах текущей локализации.`);
            return result;
        }
        else {
            key = key.toUpperCase();
            for (let lang of this.getLocalizationNames()) {
                const map = this._localizedMaps.get(lang);
                if (map.has(key))
                    map.delete(key);
            }
            const result = this._application.factory.createIResult(true, '');
            return result;
        }
    }
    /**
     * Назначить новое значение для уже существующей записи.
     * @param {string} localization Локализация, для которой требуется отредактировать значение.
     * @param {string} key Ключ записи, подлежащей редактированию.
     * @param {string} value Новое значение записи.
     * @returns {IResult} Возвращается отчёт о проделанной операции.
     */
    editValue(localization, key, value) {
        if (!key || !key.trim()) {
            const result = this._application.factory.createIResult(false, 'editValue: Указан недопустимый ключ записи.');
            return result;
        }
        if (!value) {
            const result = this._application.factory.createIResult(false, 'editValue: Значение не должно быть `null` или `undefined`.');
            return result;
        }
        key = key.toUpperCase();
        if (!this.hasLocalization(localization)) {
            const result = this._application.factory.createIResult(false, `Локализация '${localization}' не найдена.`);
            return result;
        }
        if (!this.hasKey(key)) {
            const result = this._application.factory.createIResult(false, `Запись с ключом '${key}' не найдена в ресурсах текущей локализации.`);
            return result;
        }
        else {
            localization = localization.toUpperCase();
            key = key.toUpperCase();
            const map = this._localizedMaps.get(localization);
            if (map.has(key))
                map.set(key, value);
            const result = this._application.factory.createIResult(true, '');
            return result;
        }
    }
    /**
     * Получить ресурс текущей локализации по его ключу.
     * @param {string} key Ключ локализованного ресурса.
     * @returns {string}
     */
    _getValue(key) {
        if (!key || !key.trim())
            return null;
        key = key.toUpperCase();
        const map = this._localizedMaps.get(this.currentLocalizationName);
        if (map.has(key)) {
            return map.get(key);
        }
        else {
            return null;
        }
    }
    /**
     * Для указанной локализации получить значение по ключу. Если указанная локализация
     * не зарегистрирована или запрашиваемый ключ не существует, то будет возвращён `null`.
     * @param {string} localization Локализация, для которой следует получить значение.
     * @param {string} key Ключ запрашиваемой записи.
     * @returns {string}
     */
    _getValue2(localization, key) {
        if (!localization || !localization.trim())
            return null;
        localization = localization.toUpperCase();
        if (!key || !key.trim())
            return null;
        key = key.toUpperCase();
        if (!this._localizedMaps.has(localization) || !this._localizedMaps.get(localization).has(key)) {
            return null;
        }
        else {
            return this._localizedMaps.get(localization).get(key);
        }
    }
}
exports.ResourceManager = ResourceManager;
//# sourceMappingURL=ResourceManager.js.map

/***/ }),

/***/ "../../../../../src/api/src/ts/classes/Result.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Отчёт о выполнении операции.
 */
class Result {
    /**
     * Конструктор класса
     * @param {boolean} Метка об успешности операции.
     * @param {string} Сообщение об ошибке (используется в случае отказа).
     */
    constructor(success, errorMessage) {
        this._success = success;
        this._errorMessage = errorMessage;
    }
    /**
     * Если это свойство равно `true`, значит операция выполнена успешно. В этом случае
     * значение свойства `errorMessage` должно быть пустой строкой. Если же значение
     * свойства `success` равно `false`, то это означает, что операция не выполнена. В
     * этом случае в свойстве `errorMessage` должно находится описание причины отказа.
     */
    get success() {
        return this._success;
    }
    /**
     * Если запрошенная операция не была выполнена, то в данном свойстве должно находится
     * описание причины отказа. Если же операция выполнена успешно, то данное свойство
     * должно содержать пустую строку.
     */
    get errorMessage() {
        return this._errorMessage;
    }
}
exports.Result = Result;
//# sourceMappingURL=Result.js.map

/***/ }),

/***/ "../../../../../src/api/src/ts/classes/Transaction.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const TransactionStatus_1 = __webpack_require__("../../../../../src/api/src/ts/enums/TransactionStatus.ts");
const EventEmitter_1 = __webpack_require__("../../../../../src/api/src/ts/classes/EventEmitter.ts");
/**
 * Транзакция. Транзакция позволяет выполнять над документом
 * произвольный набор действий с тем, чтобы иметь возможность
 * в любой момент выполнить полный откат этих изменений обратно.
 *
 * Работать с документом можно и без транзакций, т.к. каждая команда (`ICommand`) имеет
 * методы `undo()` и `redo()`, позволяющие отменять изменения, и снова восстанавливать их.
 * Однако, в том случае, если в процессе работы команды возникнет непредвиденная ошибка, в
 * виду которой команда будет выполнена не до конца, то
 * `undo()` и `redo()` могут не справиться с проблемой, т.к. они не знают о том, какие из
 * данных были успешно изменены, а какие - нет (в виду возникновения ошибки). Транзакции позволяют
 * избежать подобных ситуаций, однако их использование накладывает некоторые дополнительные
 * издержки (в плане производительности), т.к. на время своей работы каждая транзакция, при старте,
 * создаёт полную копию данных документа (так называемый *контекст*, представленный в виде
 * объекта `IDocumentContext`).
 *
 * Транзакции следует создавать при помощи метода `IDocument.createTransaction()`.
 *
 * **Открытые транзакции обязательно должны закрываться!** *Если транзакция
 * не будет закрыта, то все изменения, выполненные в рамках этой транзакции,
 * а так же в рамках всех вложенных транзакций, не будут применены к базе
 * данных документа.*
 *
 * Транзакции могут быть вложенными. Вложенность транзакций
 * определяется порядком их открытия и закрытия:
 *
 * Если была создана транзакция `A` и для неё был вызван метод `A.start()`,
 * после чего была создана транзакция `B` и для неё был вызван метод `B.start()`,
 * то транзакция `B` является вложенной по отношению к транзакции `A`.
 *
 * Транзакции должны закрываться *обязательно* в порядке противоположном
 * тому, в котором они открывались - в противном случае будет генерироваться
 * исключение.
 *
 * Если была создана транзакция `A` после чего была создана транзакция `B`,
 * а затем были вызваны методы `A.start()`, и `B.start()`, то
 * транзакция `B` является вложенной по отношению к транзакции `A`.
 *
 * Если была создана транзакция `A` после чего была создана транзакция `B`,
 * а затем были вызваны методы `B.start()`, и `A.start()`, то
 * транзакция `A` является вложенной по отношению к транзакции `B`.
 *
 * Если была создана транзакция `A`, затем вызваны методы `A.start()`, и
 * `A.commit()` (или `A.rollback()`), то все последующие стартуемые транзакции
 * не будут являться вложенными по отношению к транзакции `A`.
 */
class Transaction extends EventEmitter_1.EventEmitter {
    /**
     * Конструктор класса.
     * @param {IDocument} docStage Документ, владеющий данной транзакцией.
     */
    constructor(doc) {
        super();
        this._document = doc;
        this._status = TransactionStatus_1.TransactionStatus.Created;
        this.addedItems = new Map();
        this.editedItems = new Map();
        this.deletedItems = new Map();
    }
    /**
     * Документ, владеющий данной транзакцией.
     */
    get document() {
        return this._document;
    }
    /**
     * Открыть транзакцию для выполнения. В этот момент создаётся *полная копия*
     * базы данных документа и все изменения будут выполняться с этой копией.
     * *Вложенные* транзакции будут получать копии этой копии. Причём копии базы,
     * получаемые во вложенных транзакциях, будут содержать все те изменения,
     * которые на момент открытия вложенной транзакции уже были выполнены *родительской
     * транзакцией*.
     *
     * Если транзакция откатывается, то изменения, выполненные в ней и
     * во всех вложенных транзакциях, не будут применяться к базе данных документа.
     *
     * Если транзакция применяется, то все изменения, выполненные в ней и во всех
     * вложенных транзакциях (для которых не был выполнен откат), будут применены
     * к базе данных документа.
     */
    start() {
        if (this._status !== TransactionStatus_1.TransactionStatus.Created) {
            throw new Error('start: Нельзя повторно открывать транзакцию.');
        }
        this._status = TransactionStatus_1.TransactionStatus.Started;
        this.document._pushTransaction(this);
    }
    /**
     * Сохранение изменений, выполненных в рамках данной транзакции, а так же во
     * всех вложенных в неё транзакций, для которых был выполнен `commit()`.
     */
    commit() {
        if (this._status !== TransactionStatus_1.TransactionStatus.Started) {
            throw new Error('commit: Нельзя применять `commit()` для незапущенной транзакции.');
        }
        this._status = TransactionStatus_1.TransactionStatus.Commited;
        this.document._popTransaction(this);
    }
    /**
     * Откат всех изменений, выполненных в рамках данной транзакции, а так же во всех
     * вложенных в неё транзакциях.
     */
    rollback() {
        if (this._status !== TransactionStatus_1.TransactionStatus.Started) {
            throw new Error('rollback: Нельзя применять `rollback()` для незапущенной транзакции.');
        }
        this._status = TransactionStatus_1.TransactionStatus.RolledBack;
        this.document._popTransaction(this);
    }
    /**
     * Состояние, в котором находится транзакция.
     */
    get status() {
        return this._status;
    }
}
exports.Transaction = Transaction;
//# sourceMappingURL=Transaction.js.map

/***/ }),

/***/ "../../../../../src/api/src/ts/classes/TreeNode.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const EventEmitter_1 = __webpack_require__("../../../../../src/api/src/ts/classes/EventEmitter.ts");
const TypeNames_1 = __webpack_require__("../../../../../src/api/src/ts/enums/TypeNames.ts");
/**
 * Нод, используемый для построения иерархической структуры (используется
 * в качестве контейнера, содержимое которого указано в свойстве `valueId`).
 * В качестве значения нода должны использоваться идентификаторы объектов `ILevelNode` и `ICondition`.
 * Родительский нод всегда находится на один уровень выше своих детей.
 */
class TreeNode extends EventEmitter_1.EventEmitter {
    /**
     * Конструктор класса.
     */
    constructor(document) {
        super();
        this._document = document;
        this._isDeleted = false;
        this._typeName = TypeNames_1.TypeNames.TreeNode;
        this._parentID = null;
        this._valueID = null;
        this._childrenIDs = new Array();
        this._isChanged = false;
        this._isDeleted = false;
    }
    /**
     * Проверка на то, был ли удалён данный объект опосредованно - через удаление одного из его
     * предков.
     * @returns {boolean}
     */
    isDeletedByForefather() {
        if (this._parentID) {
            let parent = this.document.getContext().treeNodes.get(this._parentID);
            if (parent.isDeletedDirectly)
                return true;
            else
                return parent.isDeletedByForefather();
        }
        else
            return false;
    }
    /**
     * Проверка на то, был ли объект удалён каким-либо образом: напрямую, через установку
     * свойства `isDeletedDirectly`, или же опосредованно, через удаление родителя
     * (см. метод `isDeletedByForefather()`).
     * @returns {boolean}
     */
    isDeleted() {
        return this.isDeletedDirectly || this.isDeletedByForefather();
    }
    /**
     * Удалить нод.
     * @returns {IResult} Отчёт о результате выполнения операции.
     */
    delete() {
        if (this.getLockerID() === this.document.application.getCurrentUserId()) {
            this.isDeletedDirectly = true;
            return this.document.application.factory.createIResult(true, '');
        }
        else {
            return this.document.application.factory.createIResult(false, 'Нельзя удалить объект, предварительно не заблокированный вами.');
        }
    }
    /**
     * Заблокировать нод.
     * @returns {IResult} Отчёт о результате выполнения операции.
     */
    lock() {
        // если уже заблокирован, сообщаем о положительном результате
        if (this.getLockerID() === this.document.application.getCurrentUserId()) {
            return this.document.application.factory.createIResult(true, '');
        }
        else if (this.getLockerID() === null) {
            // спрашиваем у сервера, можно ли блокировать документ
            let result = this.document.application.dataProvider.lockDocumentObject(this.document.id, this.id);
            // если сервер разрешил, то блокируем объект и всех его детей
            if (result.success) {
                this.lockerId = this.document.application.getCurrentUserId();
                for (let n of this.childrenIDs) {
                    let node = this.document.getContext().treeNodes.get(n);
                    node.lock();
                }
            }
            return result; // возвращаем ответ сервера
        }
        else {
            return this.document.application.factory.createIResult(false, 'Попытка заблокировать объект, ранее заблокированный другим пользователем.');
        }
    }
    /**
     * Разблокировать нод.
     * @returns {IResult} Отчёт о результате выполнения операции.
     */
    unlock() {
        // запрашиваем у сервера разрешение на разблокировку
        let result = this.document.application.dataProvider.unlockDocumentObject(this.document.id, this.id);
        // если сервер разрешил, то снимаем блокировку у объекта и всех его детей
        if (result.success) {
            this.lockerId = null;
            for (let n of this.childrenIDs) {
                let node = this.document.getContext().treeNodes.get(n);
                node.unlock();
            }
        }
        return result;
    }
    /**
     * Получить идентификатор пользователя, заблокировавшего данный нод.
     * Нод может быть заблокирован опосредованно, через одного из предков.
     * @returns {string}
     */
    getLockerID() {
        // нод может быть заблокирован опосредованно, через одного из его предков
        if (this.lockerId)
            return this.lockerId;
        else {
            let parentID = this.getParent();
            if (parentID) {
                let parent = this.document.getContext().treeNodes.get(parentID);
                return parent.getLockerID();
            }
            else
                return null;
        }
    }
    /**
     * Документ, в составе которого находится данный нод.
     */
    get document() {
        return this._document;
    }
    getLevelIndex() {
        let index = 0;
        let _node = this;
        let nodeId = _node.getParent();
        while (nodeId) {
            _node = this.document.getContext().treeNodes.get(nodeId);
            if (!_node.isDeletedDirectly)
                ++index;
            nodeId = _node.getParent();
        }
        return index;
    }
    /**
     * Проверка на то, может ли нод содержать дочерние ноды. Это определяется
     * структурой уровней: если для дочерних объектов предоставлен уровень, то
     * их можно создавать для данного нода.
     * @returns {boolean}
     */
    canHaveChildren() {
        let levelIndex = this.getLevelIndex();
        let context = this.document.getContext();
        let levelsCount = 0;
        for (let key of context.levels.keys()) {
            if (!context.levels.get(key).isDeletedDirectly)
                ++levelsCount;
        }
        // console.log('Index: ' + levelIndex);
        // console.log('levelsCount: ' + levelsCount);
        return levelIndex >= 0 && levelIndex < levelsCount - 1;
    }
    /**
     * Наименование типа объекта.
     */
    get typeName() {
        return this._typeName;
    }
    /**
     * Идентификатор родительского нода.
     */
    getParent() {
        return this._parentID;
    }
    setParent(id) {
        if (this.lockerId != this.document.application.getCurrentUserId()) {
            return this.document.application.factory.createIResult(false, 'TreeNode.setParent: Нельзя редактировать объекты, предварительно не заблокированные вами.');
        }
        // Если свойство уже содержит указанное значение, то нет смысла менять его.
        if (id && id === this._parentID)
            return;
        // Нужно убедиться, что для целевого нода имеется подуровень для дочерних нодов.
        const parentNode = this.document.getContext().treeNodes.get(id);
        if (parentNode && !parentNode.canHaveChildren()) {
            return this.document.application.factory.createIResult(false, `Для 'INode' с ID = '${id}' не определён уровень для дочерних нодов.`);
        }
        // Сначала разрушаем существующую связь с родителем (если она есть)
        if (this._parentID) {
            const _parentNode = this.document.getContext().treeNodes.get(this._parentID);
            if (_parentNode) {
                const index = _parentNode.childrenIDs.indexOf(this.id);
                if (index >= 0) {
                    _parentNode.childrenIDs.splice(index, 1);
                    let value = this.document.getContext().levelEntities.get(_parentNode.valueId);
                    this.document.getCurrentTransaction().editedItems.set(_parentNode.valueId, value);
                }
            }
        }
        if (!id) {
            this._parentID = null;
        }
        else {
            // Если у нового родителя не имеется ссылки на текущий нод в качестве
            // дочернего, то добавляем такую ссылку.
            const index = parentNode.childrenIDs.indexOf(this.id);
            if (index < 0)
                parentNode.childrenIDs.push(this.id);
            // Изменяем значение даже если объект не был найден, т.к. если идёт инициализация
            // проекта или общей базы данных, то вполне возможно, что объект к этому моменту
            // ещё не был добавлен, но будет присутствовать к моменту завершения инициализации.
            this._parentID = id;
        }
        let value = this.document.getContext().levelEntities.get(this.valueId);
        this.document.getCurrentTransaction().editedItems.set(this.valueId, value);
        return this.document.application.factory.createIResult(true, '');
    }
    /**
     * Идентификаторы дочерних нодов.
     * **ВНИМАНИЕ!**
     * *Не изменяйте значение этого свойства самостоятельно! Оно автоматически будет
     * изменяться у родителя при изменении свойства `prevId` дочернего нода.*.
     */
    get childrenIDs() {
        // Если ранее, по какой-то причине, был удалён вложенный уровень, то скрываем
        // и объекты, располагающиеся на нём. Если позднее вложенный уровень будет восстановлен,
        // то и располагающиеся на нём объекты снова станут доступны для использования.
        if (this.canHaveChildren())
            return this._childrenIDs;
        else
            return [];
    }
    /**
     * Идентификатор объекта, хранящегося в данном нода в качестве значения.
     */
    get valueId() {
        return this._valueID;
    }
    set valueId(id) {
        if (this.lockerId != this.document.application.getCurrentUserId()) {
            throw new Error('TreeNode.valueId: Нельзя редактировать объекты, предварительно не заблокированные вами.');
        }
        // Если свойство уже содержит указанное значение, то нет смысла менять его.
        if (id && id === this.valueId)
            return;
        // Сначала разрушаем существующую связь со значением (если она есть)
        if (this._valueID) {
            const _value = this.document.getContext().levelEntities.get(this._valueID);
            if (_value) {
                _value.nodeId = null;
                this.document.getCurrentTransaction().editedItems.set(this._valueID, _value);
            }
        }
        // теперь присваиваем новое значение
        if (!id) {
            this._valueID = null;
        }
        else {
            // у целевого объекта обновляем ссылку на нод.
            const _value = this.document.getContext()
                .levelEntities.get(this._valueID);
            if (_value) {
                _value.nodeId = this.id;
            }
            // Изменяем значение даже если объект не был найден, т.к. если идёт инициализация
            // проекта или общей базы данных, то вполне возможно, что объект к этому моменту
            // ещё не был добавлен, но будет присутствовать к моменту завершения инициализации.
            this._valueID = id;
            let value = this.document.getContext().levelEntities.get(this.valueId);
            this.document.getCurrentTransaction().editedItems.set(this.valueId, value);
        }
    }
    /**
     * Если `true`, значит объект был удалён вами.
     * ** Внимание!**
     * *Не изменяйте это свойство самостоятельно!*
     */
    get isDeletedDirectly() {
        return this._isDeleted;
    }
    set isDeletedDirectly(value) {
        this._isDeleted = value;
        let item = this.document.getContext().levelEntities.get(this.valueId);
        this.document.getCurrentTransaction().deletedItems.set(this.valueId, item);
    }
    /**
     * Идентификатор пользователя, заблокировавшего объект.
     * Если объект не заблокирован, то это свойство равно `null`.
     */
    get lockerId() {
        return this._lockerId;
    }
    set lockerId(value) {
        this._lockerId = value;
        let item = this.document.getContext().levelEntities.get(this.valueId);
        this.document.getCurrentTransaction().editedItems.set(this.valueId, item);
    }
    /**
     * Метка о том, был ли объект изменён. Эта информация будет использоваться для определения того, какие
     * записи следует отправлять на сервер при сохранении. После успешного сохранения это свойство должно
     * возвращать `false`.
     * @returns {boolean}
     */
    get isChanged() {
        return this._isChanged;
    }
    set isChanged(value) {
        this._isChanged = value;
        let item = this.document.getContext().levelEntities.get(this.valueId);
        this.document.getCurrentTransaction().editedItems.set(this.valueId, item);
    }
    /**
     * Получить уровень, на котором находится данный нод.
     * @returns {ILevel}
     */
    getLevel() {
        let levelIndex = this.getLevelIndex();
        let context = this.document.getContext();
        let level = context.getTopLevel();
        if (levelIndex == 0)
            return level;
        else {
            while (levelIndex) {
                level = context.levels.get(level.nextId);
                --levelIndex;
            }
            return level;
        }
    }
    clone() {
        let item = this.document.application.factory.createITreeNode(this.document);
        item._setID(this.id);
        item._valueID = this.valueId;
        item._parentID = this._parentID;
        item._lockerId = this._lockerId;
        item._isChanged = this._isChanged;
        item._isDeleted = this.isDeletedDirectly;
        for (let n of this.childrenIDs) {
            item.childrenIDs.push(n);
        }
        return item;
    }
    _setID(value) {
        this._id = value;
    }
}
exports.TreeNode = TreeNode;
//# sourceMappingURL=TreeNode.js.map

/***/ }),

/***/ "../../../../../src/api/src/ts/classes/Variant.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const EventEmitter_1 = __webpack_require__("../../../../../src/api/src/ts/classes/EventEmitter.ts");
const TypeNames_1 = __webpack_require__("../../../../../src/api/src/ts/enums/TypeNames.ts");
const TransactionStatus_1 = __webpack_require__("../../../../../src/api/src/ts/enums/TransactionStatus.ts");
/**
 * Вариант, используемый в условии.
 */
class Variant extends EventEmitter_1.EventEmitter {
    isInsideOfTransaction() {
        let transaction = this._document.getCurrentTransaction();
        if (!transaction || transaction.status != TransactionStatus_1.TransactionStatus.Started)
            return false;
        else
            return true;
    }
    constructor(condition, text) {
        super();
        this._document = condition.document;
        this._typeName = TypeNames_1.TypeNames.Variant;
        this._conditionID = condition.id;
        this._text = text;
        this._outputConnections = new Array();
        this._lockerId = null;
        this._isChanged = false;
        this._isDeleted = false;
        this._outputConnections = [];
    }
    /**
     * Проверка на то, был ли удалён данный объект опосредованно - через удаление одного из его
     * предков.
     * @returns {boolean}
     */
    isDeletedByForefather() {
        if (this.conditionId) {
            let condition = this.document.getContext()
                .levelEntities.get(this.conditionId);
            return condition.isDeleted();
        }
        else
            return false;
    }
    /**
     * Проверка на то, был ли объект удалён каким-либо образом: напрямую, через установку
     * свойства `isDeletedDirectly`, или же опосредованно, через удаление родителя
     * (см. метод `isDeletedByForefather()`).
     * @returns {boolean}
     */
    isDeleted() {
        return this.isDeletedDirectly || this.isDeletedByForefather();
    }
    /**
     * Ссылка на документ (технологию) в составе которого находится вариант.
     * @returns {IDocument}
     */
    get document() {
        return this._document;
    }
    /**
     * Условие, в составе которого используется данный вариант.
     * @returns {ConditionID}
     */
    get conditionId() {
        return this._conditionID;
    }
    set conditionId(value) {
        if (!this.isInsideOfTransaction()) {
            throw new Error('Редактировать объект можно только в предварительно открытой транзакции.');
        }
        this._conditionID = value;
        this.document.getCurrentTransaction().editedItems.set(this.id, this);
    }
    /**
     * Текст варианта, отображаемый пользователю.
     * @returns {string}
     */
    get text() {
        return this._text;
    }
    set text(value) {
        if (!this.isInsideOfTransaction()) {
            throw new Error('Редактировать объект можно только в предварительно открытой транзакции.');
        }
        if (this.getCondition().getLockerID() != this.document.application.getCurrentUserId()) {
            throw new Error('Редактировать можно только объекты, предварительно заблокированые вами.');
        }
        this._text = value;
        this.document.getCurrentTransaction().editedItems.set(this.id, this);
    }
    /**
     * Исходящие подключения данного варианта.
     * @returns {Array<ConnectionID>}
     */
    get outputConnections() {
        return this._outputConnections;
    }
    set outputConnections(value) {
        if (!this.isInsideOfTransaction()) {
            throw new Error('Редактировать объект можно только в предварительно открытой транзакции.');
        }
        if (this.getCondition().getLockerID() != this.document.application.getCurrentUserId()) {
            throw new Error('Редактировать можно только объекты, предварительно заблокированые вами.');
        }
        this._outputConnections = value;
    }
    /**
     * Идентификатор пользователя, заблокировавшего данный вариант.
     * @returns {UserID}
     */
    get lockerId() {
        return this._lockerId;
    }
    set lockerId(value) {
        if (!this.isInsideOfTransaction()) {
            throw new Error('Редактировать объект можно только в предварительно открытой транзакции.');
        }
        if (this.getCondition().getLockerID() != this.document.application.getCurrentUserId()) {
            throw new Error('Редактировать можно только объекты, предварительно заблокированые вами.');
        }
        this._lockerId = value;
        this.document.getCurrentTransaction().editedItems.set(this.id, this);
    }
    /**
     * Метка о том, был ли вариант изменён.
     * @returns {boolean}
     */
    get isChanged() {
        return this._isChanged;
    }
    set isChanged(value) {
        if (!this.isInsideOfTransaction()) {
            throw new Error('Редактировать объект можно только в предварительно открытой транзакции.');
        }
        if (this.getCondition().getLockerID() != this.document.application.getCurrentUserId()) {
            throw new Error('Редактировать можно только объекты, предварительно заблокированые вами.');
        }
        this._isChanged = value;
    }
    /**
     * Метка о том, был ли вариант удалён.
     * @returns {boolean}
     */
    get isDeletedDirectly() {
        return this._isDeleted;
    }
    set isDeletedDirectly(value) {
        if (!this.isInsideOfTransaction()) {
            throw new Error('Редактировать объект можно только в предварительно открытой транзакции.');
        }
        if (this.getCondition().getLockerID() != this.document.application.getCurrentUserId()) {
            throw new Error('Редактировать можно только объекты, предварительно заблокированые вами.');
        }
        this._isDeleted = value;
        this.document.getCurrentTransaction().editedItems.set(this.id, this.id);
        if (this._isDeleted)
            this.document.getCurrentTransaction().deletedItems.set(this.id, this);
    }
    /**
     * Наименование типа объекта.
     * @returns {string}
     */
    get typeName() {
        return this._typeName;
    }
    /**
     * Получить исходящие подключения данного варианта.
     * @returns {Array<IConnection>}
     */
    getOutputConnections() {
        let arr = [];
        for (let n of this.outputConnections) {
            let connection = this.document.getContext().connections.get(n);
            if (!connection.isDeletedDirectly)
                arr.push(connection);
        }
        return arr;
    }
    /**
     * Получить объект условия, в составе которого находится данный вариант.
     * @returns {ICondition}
     */
    getCondition() {
        let context = this.document.getContext();
        if (context.levelEntities.has(this.conditionId)) {
            let condition = context.levelEntities.get(this.conditionId);
            return condition;
        }
        else {
            return null;
        }
    }
    _setID(value) {
        this._id = value;
    }
    clone(owner) {
        let item = this.document.application.factory.createIVariant(owner, this.text);
        item._setID(this.id);
        item._text = this.text;
        item._lockerId = this.lockerId;
        item._isChanged = this.isChanged;
        item._isDeleted = this.isDeletedDirectly;
        for (let n of this.outputConnections) {
            item.outputConnections.push(n);
        }
        return item;
    }
}
exports.Variant = Variant;
//# sourceMappingURL=Variant.js.map

/***/ }),

/***/ "../../../../../src/api/src/ts/entryPoint.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const Application_1 = __webpack_require__("../../../../../src/api/src/ts/classes/Application.ts");
const FakeApplication_1 = __webpack_require__("../../../../../src/api/test/fakes/FakeApplication.ts");
let app = null;
let useFakeApp = true; // Переключатель использования фейковых реализаций (для тестирования и отладки)
let _createApp = () => useFakeApp ? new FakeApplication_1.FakeApplication() : new Application_1.Application();
/**
 * Получить объект приложения в виде интерфейса, предназначенного для внешнего использования.
 * @returns {IApplication}
 */
function getApplication() {
    if (!app) {
        app = _createApp();
    }
    return app;
}
exports.getApplication = getApplication;
/**
 * Получить объект приложения в виде интерфейса, предназначенного для внутреннего использования.
 * @returns {_IApplication}
 * @private
 */
function _getApplication() {
    if (!app) {
        app = _createApp();
    }
    return app;
}
exports._getApplication = _getApplication;
//# sourceMappingURL=entryPoint.js.map

/***/ }),

/***/ "../../../../../src/api/src/ts/enums/TransactionStatus.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Состояние, в котором находится транзакция.
 */
var TransactionStatus;
(function (TransactionStatus) {
    /**
     * Транзакция создана, но не запущена.
     */
    TransactionStatus[TransactionStatus["Created"] = 0] = "Created";
    /**
     * Транзакция создана и запущена.
     */
    TransactionStatus[TransactionStatus["Started"] = 1] = "Started";
    /**
     * Изменения, выполненные в рамках транзакции, применены.
     */
    TransactionStatus[TransactionStatus["Commited"] = 2] = "Commited";
    /**
     * Изменения, выполненные в рамках транзакции, отменены.
     */
    TransactionStatus[TransactionStatus["RolledBack"] = 3] = "RolledBack";
})(TransactionStatus = exports.TransactionStatus || (exports.TransactionStatus = {}));
//# sourceMappingURL=TransactionStatus.js.map

/***/ }),

/***/ "../../../../../src/api/src/ts/enums/TypeNames.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var TypeNames;
(function (TypeNames) {
    TypeNames[TypeNames["Level"] = 0] = "Level";
    TypeNames[TypeNames["LevelNode"] = 1] = "LevelNode";
    TypeNames[TypeNames["Condition"] = 2] = "Condition";
    TypeNames[TypeNames["Connection"] = 3] = "Connection";
    TypeNames[TypeNames["Reference"] = 4] = "Reference";
    TypeNames[TypeNames["Variant"] = 5] = "Variant";
    TypeNames[TypeNames["Department"] = 6] = "Department";
    TypeNames[TypeNames["DbRole"] = 7] = "DbRole";
    TypeNames[TypeNames["DbUser"] = 8] = "DbUser";
    TypeNames[TypeNames["TreeNode"] = 9] = "TreeNode";
})(TypeNames = exports.TypeNames || (exports.TypeNames = {}));
//# sourceMappingURL=TypeNames.js.map

/***/ }),

/***/ "../../../../../src/api/src/ts/enums/event_names/ApplicationEventNames.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Наименования событий, подписка на которые доступна в `IApplication`.
 */
var ApplicationEventNames;
(function (ApplicationEventNames) {
    /**
     * Приложению назначен к использованию другой менеджер документов.
     */
    ApplicationEventNames[ApplicationEventNames["DocumentManagerSwitched"] = 0] = "DocumentManagerSwitched";
    /**
     * Приложению назначен к использованию другой провайдер данных.
     */
    ApplicationEventNames[ApplicationEventNames["DataProviderSwitched"] = 1] = "DataProviderSwitched";
    /**
     * Приложению назначен к использованию другой менеджер ресурсов.
     */
    ApplicationEventNames[ApplicationEventNames["ResourceManagerSwitched"] = 2] = "ResourceManagerSwitched";
    /**
     * Приложению назначена к использованию другая фабрика классов.
     */
    ApplicationEventNames[ApplicationEventNames["FactorySwitched"] = 3] = "FactorySwitched";
    /**
     * Приложению назначена к использованию другая внешняя база данных компаний.
     */
    ApplicationEventNames[ApplicationEventNames["DatabaseSwitched"] = 4] = "DatabaseSwitched";
})(ApplicationEventNames = exports.ApplicationEventNames || (exports.ApplicationEventNames = {}));
//# sourceMappingURL=ApplicationEventNames.js.map

/***/ }),

/***/ "../../../../../src/api/src/ts/enums/event_names/DocumentEventNames.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Наименования событий, подписка на которые доступна в `IDocument`.
 */
var DocumentEventNames;
(function (DocumentEventNames) {
    /**
     * Документ изменён.
     */
    DocumentEventNames[DocumentEventNames["DocumentChanged"] = 0] = "DocumentChanged";
    /**
     * Документ синхронизирован с сервером.
     */
    DocumentEventNames[DocumentEventNames["DocumentSynchronized"] = 1] = "DocumentSynchronized";
})(DocumentEventNames = exports.DocumentEventNames || (exports.DocumentEventNames = {}));
//# sourceMappingURL=DocumentEventNames.js.map

/***/ }),

/***/ "../../../../../src/api/src/ts/enums/event_names/DocumentManagerEventNames.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Наименования событий, подписка на которые доступна в `IDocumentManager`.
 */
var DocumentManagerEventNames;
(function (DocumentManagerEventNames) {
    /**
     * Произошло открытие документа.
     */
    DocumentManagerEventNames[DocumentManagerEventNames["DocumentOpened"] = 0] = "DocumentOpened";
    /**
     * Произошло создание нового документа.
     */
    DocumentManagerEventNames[DocumentManagerEventNames["DocumentCreated"] = 1] = "DocumentCreated";
    /**
     * Произошло закрытие документа.
     */
    DocumentManagerEventNames[DocumentManagerEventNames["DocumentClosed"] = 2] = "DocumentClosed";
    /**
     * В качестве текущего был назначен другой документ.
     */
    DocumentManagerEventNames[DocumentManagerEventNames["CurrentDocumentSwitched"] = 3] = "CurrentDocumentSwitched";
})(DocumentManagerEventNames = exports.DocumentManagerEventNames || (exports.DocumentManagerEventNames = {}));
//# sourceMappingURL=DocumentManagerEventNames.js.map

/***/ }),

/***/ "../../../../../src/api/test/fakes/FakeApplication.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const EventEmitter_1 = __webpack_require__("../../../../../src/api/src/ts/classes/EventEmitter.ts");
const Factory_1 = __webpack_require__("../../../../../src/api/src/ts/classes/Factory.ts");
const FakeDataProvider_1 = __webpack_require__("../../../../../src/api/test/fakes/FakeDataProvider.ts");
/**
 * Фейковое приложение, предназначенное для использования в тестах.
 */
class FakeApplication extends EventEmitter_1.EventEmitter {
    _setDocumentManager(docMng) {
        this._documentManager = docMng;
    }
    _setDataProvider(provider) {
        this._dataProvider = provider;
    }
    _setResourceManager(resMng) {
        this._resourceManager = resMng;
    }
    _setFactory(factory) {
        this._factory = factory;
    }
    _setDatabase(db) {
        this._commonDatabase = db;
    }
    /**
     * База данных компаний.
     */
    get commonDatabase() {
        return this._commonDatabase;
    }
    /**
     * Провайдер данных, предназначенный для взаимодействия с сервером.
     */
    get dataProvider() {
        return this._dataProvider;
    }
    /**
     * Менеджер документов. Позволяет открывать, сохранять и закрывать документы.
     * Так же позволяет устанавливать нужный открытый вам документ в качестве текущего.
     */
    get documentManager() {
        return this._documentManager;
    }
    /**
     * Конструктор класса.
     */
    constructor() {
        super();
        this._factory = new Factory_1.Factory(this);
        this._documentManager = this.factory.createIDocumentManager();
        this._resourceManager = this.factory.createIResourceManager('ru');
        this._commonDatabase = this._factory.createIDatabase(this);
        this._dataProvider = new FakeDataProvider_1.FakeDataProvider(this);
        this._dataProvider.fillDocuments();
    }
    /**
     * Менеждер локализованных ресурсов.
     * @returns {IResourceManager}
     */
    get resourceManager() {
        return this._resourceManager;
    }
    /**
     * Фабрика классов, использущихся для работы самого приложения. Фабрика классов, описывающих бизнес-модель
     * представлена свойством `bmFactory`.
     */
    get factory() {
        return this._factory;
    }
    /**
     * Здесь ставим заглушку в виде возвращаемого фиксированного значения.
     * @returns {UserID}
     */
    getCurrentUserId() {
        return this.dataProvider.getCurrentUserId();
    }
    _getDocumentManager() {
        return this._documentManager;
    }
    _getDataProvider() {
        return this._dataProvider;
    }
    _getResourceManager() {
        return this._resourceManager;
    }
    _getFactory() {
        return this._factory;
    }
    _getDatabase() {
        return this._commonDatabase;
    }
}
exports.FakeApplication = FakeApplication;
//# sourceMappingURL=FakeApplication.js.map

/***/ }),

/***/ "../../../../../src/api/test/fakes/FakeDataProvider.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const DataProvider_1 = __webpack_require__("../../../../../src/api/src/ts/classes/DataProvider.ts");
/**
 * Фейковый провайдер данных, наследуемый от класса `DataProvider`. Предоставляет
 * дополнительные свойства, позволяющие управлять ответами сервера. Предназначен для использования в
 * модульных тестах.
 */
class FakeDataProvider extends DataProvider_1.DataProvider {
    /**
     * Конструктор класса.
     * @param {IApplication} app Приложение, в составе которого используется провайдер данных.
     */
    constructor(app) {
        super(app);
        this.allowDbObjectLock = false;
        this.allowDbObjectUnlock = false;
        this.allowDocumentObjectLock = false;
        this.allowDocumentObjectUnlock = false;
        // Фейковый набор документов, имеющихся на сервере
        this.documents = new Array();
    }
    fillDocuments() {
        this.documents = new Array();
        let doc1 = this.createDocument_0();
        this.documents.push(doc1);
        let doc2 = this.createDocument_1();
        this.documents.push(doc2);
    }
    /**
     * Заблокировать объект в общей базе данных компаний.
     * @param {ID} databaseId Идентификатор базы данных компаний.
     * @param {ID} objectId Идентификатор объекта, подлежащего блокировке.
     * @returns {IResult} Отчёт о результатах выполнения операции.
     */
    _lockDbObject(databaseId, objectId) {
        return this.application.factory.createIResult(this.allowDbObjectLock, '');
    }
    /**
     * Разблокировать объект в общей базе данных компаний.
     * @param {ID} databaseId Идентификатор базы данных компаний.
     * @param {ID} objectId Идентификатор объекта, подлежащего разблокировке.
     * @returns {IResult} Отчёт о результатах выполнения операции.
     */
    _unlockDbObject(databaseId, objectId) {
        return this.application.factory.createIResult(this.allowDbObjectUnlock, '');
    }
    /**
     * Заблокировать объект в документе.
     * @param {ID} docId Идентификатор целевого документа.
     * @param {ID} objectId Идентификатор целевого объекта.
     * @returns {IResult} Отчёт о результатах выполнения операции.
     */
    _lockDocumentObject(docId, objectId) {
        return this.application.factory.createIResult(this.allowDocumentObjectLock, '');
    }
    /**
     * Разблокировать объект в документе.
     * @param {ID} docId Идентификатор целевого документа.
     * @param {ID} objectId Идентификатор целевого объекта.
     * @returns {IResult} Отчёт о результатах выполнения операции.
     */
    _unlockDocumentObject(docId, objectId) {
        return this.application.factory.createIResult(this.allowDocumentObjectUnlock, '');
    }
    /**
     * Получить документ (технологию) с сервера. В случае успешного открытия документ назначается в качестве текущего.
     * @param {ID} docId Идентификатор искомого документа.
     * @returns {IDocument} Возвращается запрошенный документ или `null`, если документ с
     * указанным идентификатором не был найден.
     */
    openDocument(docId) {
        for (let n of this.documents) {
            if (n.id === docId)
                return n;
        }
        return null;
    }
    /**
     * Создать новый тестовый документ с заполненным только первым уровнем
     * @returns {IDocument}
     */
    createDocument_0() {
        let doc = this.application.documentManager.create('Tech proc (filled the top level only)', '123');
        if (!doc)
            throw new Error('Не удалось создать документ.');
        let transaction = doc.createTransaction();
        transaction.start();
        doc._setID('84F73DB1-51B5-4DA2-BB55-7C9070400E18');
        const colors = ['#ff4000', '#ffbf00', '#00ff80', '#00bfff', '#8000ff', '#ff00ff', '#00b3b3'];
        const levelsCount = colors.length;
        // Сначала нужно создать набор уровней, на которых будут размещаться узлы и условия.
        for (let n = 0; n < levelsCount; ++n) {
            let name = 'Level ' + n;
            let code = 'LEV-' + n;
            let color = colors[n];
            let autoNum = true;
            doc.getContext().pushLevel(name, code, color, autoNum);
        }
        let parentId = null;
        // корневой узел (на самом верхнем уровне)
        let name = 'Root';
        let code = 'ROOT';
        let entity = this.application.factory.createILevelNode(doc, name, code);
        doc.getContext().addLevelEntity(parentId, entity);
        parentId = entity.id;
        // первый  дочерний узел
        name = 'Foo';
        code = 'Bee';
        entity = this.application.factory.createILevelNode(doc, name, code);
        doc.getContext().addLevelEntity(parentId, entity);
        // второй дочерний узел
        name = 'Stuff';
        code = 'Go';
        let entity2 = this.application.factory.createILevelNode(doc, name, code);
        doc.getContext().addLevelEntity(parentId, entity2);
        // добавляем связь первого узла со вторым
        doc.getContext().addConnection(entity.id, entity2.id, 'Связь первого узла со вторым.');
        // Добавляем условие
        let condition = this.application.factory.createICondition(doc, 'Q1', 'Куда пойдём?');
        doc.getContext().addLevelEntity(parentId, condition);
        // Связываем второй узел с условием
        doc.getContext().addConnection(entity2.id, condition.id, 'Связь второго узла с условием.');
        // Добавляем для условия три выходных варианта
        let variant_1 = doc.getContext().addVariant(condition.id, 'Налево');
        if (!variant_1)
            throw new Error('Не удалось создать первый вариант.');
        let variant_2 = doc.getContext().addVariant(condition.id, 'Прямо');
        if (!variant_2)
            throw new Error('Не удалось создать второй вариант.');
        let variant_3 = doc.getContext().addVariant(condition.id, 'Направо');
        if (!variant_3)
            throw new Error('Не удалось создать третий вариант.');
        // Для каждого варианта создаём по дополнительному узлу и связываем вариант с узлом
        let leftEntity = this.application.factory.createILevelNode(doc, 'Left entity', 'LE');
        doc.getContext().addLevelEntity(parentId, leftEntity);
        let connection = doc.getContext().addConnection(variant_1.id, leftEntity.id, 'Связь с первым вариантом.');
        if (!connection)
            throw new Error('Не удалось создать связь для первого варианта.');
        let rightEntity = this.application.factory.createILevelNode(doc, 'Right entity', 'RT');
        doc.getContext().addLevelEntity(parentId, rightEntity);
        connection = doc.getContext().addConnection(variant_2.id, rightEntity.id, 'Связь со вторым вариантом.');
        if (!connection)
            throw new Error('Не удалось создать связь для второго варианта.');
        let frontEntity = this.application.factory.createILevelNode(doc, 'Front entity', 'FNT');
        doc.getContext().addLevelEntity(parentId, frontEntity);
        connection = doc.getContext().addConnection(variant_3.id, frontEntity.id, 'Связь с третьим вариантом.');
        if (!connection)
            throw new Error('Не удалось создать связь для третьего варианта.');
        transaction.commit();
        return doc;
    }
    /**
     * Создать новый тестовый документ с заполненными тремя уровнями
     * @returns {IDocument}
     */
    createDocument_1() {
        // Поскольку это фейковый провайдер данных, предназначенный для тестирования,
        // то для любого ID возвращаем один и тот же документ.
        let doc = this.application.documentManager.create('Tech proc 2 (filled three levels)', '456');
        if (!doc)
            throw new Error('Не удалось создать документ.');
        let transaction = doc.createTransaction();
        transaction.start();
        doc._setID('DBC9A89B-B893-4D69-AF85-D296631BBE6C');
        const colors = ['#ff4000', '#ffbf00', '#00ff80', '#00bfff', '#8000ff', '#ff00ff', '#00b3b3'];
        const levelsCount = colors.length;
        // Сначала нужно создать набор уровней, на которых будут размещаться узлы и условия.
        for (let n = 0; n < levelsCount; ++n) {
            let name = 'Level ' + n;
            let code = 'LEV-' + n;
            let color = colors[n];
            let autoNum = true;
            doc.getContext().pushLevel(name, code, color, autoNum);
        }
        let topLevelEntities = new Array();
        let self = this;
        let addEntities = function (parent, namePrefix, codePrefix, sitePrefix, arr) {
            for (let n = 0; n < 3; ++n) {
                let name = namePrefix + n;
                let code = codePrefix + n;
                let entity = self.application.factory.createILevelNode(doc, name, code);
                doc.getContext().addLevelEntity(parent, entity);
                arr.push(entity);
            }
        };
        // корневой узел (на самом верхнем уровне)
        let name = 'Root';
        let code = 'ROOT';
        let entity = this.application.factory.createILevelNode(doc, name, code);
        doc.getContext().addLevelEntity(null, entity);
        let parentId = entity.id;
        // На втором уровне создаём три не связанных друг с другом узла.
        addEntities(parentId, 'Stuff ', 'STF-', 'stuff-', topLevelEntities);
        // Для каждого узла второго уровня так же создаём на третьем уровне
        // три не связанных друг с другом узла.
        let secondLevelEntities = new Array();
        let data = [
            { namePrefix: 'AAA', codePrefix: 'A-', sitePrefix: 'asdf' },
            { namePrefix: 'BBB', codePrefix: 'B-', sitePrefix: 'qwerty' },
            { namePrefix: 'CCC', codePrefix: 'C-', sitePrefix: 'zxcvb' }
        ];
        for (let n = 0; n < topLevelEntities.length; ++n) {
            addEntities(topLevelEntities[n].id, data[n].namePrefix, data[n].codePrefix, data[n].sitePrefix, secondLevelEntities);
        }
        // Теперь для каждого узла третьего уровня создаём дочерние элементы на четвёртом уровне. На
        // этот раз это будет набор связанных друг с другом узлов и условий.
        let addChildSchema = function (parent) {
            // первый узел
            let name = 'Foo ' + parent;
            let code = 'Bee ' + parent;
            let entity = self.application.factory.createILevelNode(doc, name, code);
            doc.getContext().addLevelEntity(parent, entity);
            // второй узел
            name = 'Stuff ' + parent;
            code = 'Go ' + parent;
            let entity2 = self.application.factory.createILevelNode(doc, name, code);
            doc.getContext().addLevelEntity(parent, entity2);
            // добавляем связь первого узла со вторым
            doc.getContext().addConnection(entity.id, entity2.id, 'Связь первого узла со вторым');
            // Добавляем условие
            let condition = self.application.factory.createICondition(doc, 'Q1', 'Куда пойдём?');
            doc.getContext().addLevelEntity(parent, condition);
            // Связываем второй узел с условием
            doc.getContext().addConnection(entity2.id, condition.id, 'Связь второго узла с условием');
            // Добавляем для условия три выходных варианта
            let variant_1 = doc.getContext().addVariant(condition.id, 'Налево');
            let variant_2 = doc.getContext().addVariant(condition.id, 'Прямо');
            let variant_3 = doc.getContext().addVariant(condition.id, 'Направо');
            // Для каждого варианта создаём по дополнительному узлу и связываем вариант с узлом
            let leftEntity = self.application.factory.createILevelNode(doc, 'Left entity', 'LE');
            doc.getContext().addLevelEntity(parent, leftEntity);
            doc.getContext().addConnection(variant_1.id, leftEntity.id, 'Связь с первым вариантом.');
            let rightEntity = self.application.factory.createILevelNode(doc, 'Right entity', 'RT');
            doc.getContext().addLevelEntity(parent, rightEntity);
            doc.getContext().addConnection(variant_2.id, rightEntity.id, 'Связь со вторым вариантом.');
            let frontEntity = self.application.factory.createILevelNode(doc, 'Front entity', 'FNT');
            doc.getContext().addLevelEntity(parent, frontEntity);
            doc.getContext().addConnection(variant_3.id, frontEntity.id, 'Связь с третьим вариантом.');
        };
        for (let n of secondLevelEntities) {
            addChildSchema(n.id);
        }
        transaction.commit();
        return doc;
    }
    /**
     * Получить перечень документов, имеющихся на сервере.
     * @returns {Array<IDocumentInfo>}
     */
    getDocumentList() {
        let arr = [];
        for (let n of this.documents) {
            let info = this.application.factory.createIDocumentInfo(n.id, n.getContext().documentCode, n.getContext().documentName);
            arr.push(info);
        }
        return arr;
    }
    /**
     * Получить идентификатор текущего пользователя.
     * @returns {string}
     */
    getCurrentUserId() {
        return 'IVANOV-IVAN-ID';
    }
}
exports.FakeDataProvider = FakeDataProvider;
//# sourceMappingURL=FakeDataProvider.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const platform_browser_1 = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
const core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
const app_routing_module_1 = __webpack_require__("../../../../../src/app/modules/app-routing.module.ts");
const app_component_1 = __webpack_require__("../../../../../src/app/components/app/app.component.ts");
const animations_1 = __webpack_require__("../../../platform-browser/@angular/platform-browser/animations.es5.js");
const material_module_1 = __webpack_require__("../../../../../src/app/modules/material.module.ts");
const navigation_component_1 = __webpack_require__("../../../../../src/app/components/navigation/navigation.component.ts");
const editor_component_1 = __webpack_require__("../../../../../src/app/components/editor/editor.component.ts");
const sidebar_component_1 = __webpack_require__("../../../../../src/app/components/sidebar/sidebar.component.ts");
const document_editor_component_1 = __webpack_require__("../../../../../src/app/components/document-editor/document-editor.component.ts");
const document_list_component_1 = __webpack_require__("../../../../../src/app/components/document-list/document-list.component.ts");
const level_editor_component_1 = __webpack_require__("../../../../../src/app/components/level-editor/level-editor.component.ts");
const forms_1 = __webpack_require__("../../../forms/@angular/forms.es5.js");
const color_picker_component_1 = __webpack_require__("../../../../../src/app/components/color-picker/color-picker.component.ts");
const app_api_service_1 = __webpack_require__("../../../../../src/app/services/app-api.service.ts");
const data_service_1 = __webpack_require__("../../../../../src/app/services/data.service.ts");
const ng2_toastr_1 = __webpack_require__("../../../../ng2-toastr/ng2-toastr.js");
const toast_service_1 = __webpack_require__("../../../../../src/app/services/toast.service.ts");
const toast_custom_options_1 = __webpack_require__("../../../../../src/app/toast-custom-options.ts");
const main_menu_component_1 = __webpack_require__("../../../../../src/app/components/main-menu/main-menu.component.ts");
const signal_r_service_1 = __webpack_require__("../../../../../src/app/services/signal-r.service.ts");
let AppModule = class AppModule {
};
AppModule = __decorate([
    core_1.NgModule({
        declarations: [
            app_component_1.AppComponent,
            navigation_component_1.NavigationComponent,
            editor_component_1.EditorComponent,
            sidebar_component_1.SidebarComponent,
            document_editor_component_1.DocumentEditorComponent,
            document_list_component_1.DocumentListComponent,
            level_editor_component_1.LevelEditorComponent,
            color_picker_component_1.ColorPickerComponent,
            main_menu_component_1.MainMenuComponent
        ],
        imports: [
            platform_browser_1.BrowserModule,
            app_routing_module_1.AppRoutingModule,
            animations_1.BrowserAnimationsModule,
            material_module_1.MaterialModule,
            forms_1.ReactiveFormsModule,
            ng2_toastr_1.ToastModule.forRoot()
        ],
        providers: [
            { provide: app_api_service_1.AppApiService, useClass: app_api_service_1.AppApiService },
            { provide: data_service_1.DataService, useClass: data_service_1.DataService },
            { provide: toast_service_1.ToastService, useClass: toast_service_1.ToastService },
            { provide: ng2_toastr_1.ToastOptions, useClass: toast_custom_options_1.ToastCustomOptions },
            { provide: signal_r_service_1.SignalRService, useClass: signal_r_service_1.SignalRService },
        ],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/components/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-main-menu></app-main-menu>\r\n<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/app/app.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/app/app.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
const ng2_toastr_1 = __webpack_require__("../../../../ng2-toastr/ng2-toastr.js");
const toast_service_1 = __webpack_require__("../../../../../src/app/services/toast.service.ts");
let AppComponent = class AppComponent {
    constructor(toastr, vcr, toastsService) {
        this.toastr = toastr;
        this.toastsService = toastsService;
        this.toastr.setRootViewContainerRef(vcr);
    }
    ngOnInit() {
        this.toastsService.toastObservable.subscribe(toastInfo => this.toastr[toastInfo.type](toastInfo.message, toastInfo.title));
    }
};
AppComponent = __decorate([
    core_1.Component({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/components/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/app/app.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof ng2_toastr_1.ToastsManager !== "undefined" && ng2_toastr_1.ToastsManager) === "function" && _a || Object, typeof (_b = typeof core_1.ViewContainerRef !== "undefined" && core_1.ViewContainerRef) === "function" && _b || Object, typeof (_c = typeof toast_service_1.ToastService !== "undefined" && toast_service_1.ToastService) === "function" && _c || Object])
], AppComponent);
exports.AppComponent = AppComponent;
var _a, _b, _c;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/color-picker/color-picker.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
const forms_1 = __webpack_require__("../../../forms/@angular/forms.es5.js");
const Observable_1 = __webpack_require__("../../../../rxjs/Observable.js");
__webpack_require__("../../../../rxjs/add/observable/fromEvent.js");
__webpack_require__("../../../../rxjs/add/operator/debounceTime.js");
let ColorPickerComponent = ColorPickerComponent_1 = class ColorPickerComponent {
    constructor(_ngZone, elementRef, _cdr) {
        this._ngZone = _ngZone;
        this.elementRef = elementRef;
        this._cdr = _cdr;
        // Value accessors
        this.onChange = () => null;
        this.hexPattern = /^([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i;
        this.extraColorsInner = [];
        this.color = [0, 100, 50];
        this.barHeight = 200;
        this.barClicked = false;
        this.barPickerTopPosition = 0;
        this.satWidth = 270;
        this.satHeight = 200;
        this.satCliked = false;
        this.dropDownOpen = false;
    }
    onMouseMove(event) {
        if (this.barClicked) {
            this.setBarPickerValue(event);
        }
        else if (this.satCliked) {
            this.setSatPickerValue(event);
        }
    }
    onMouseUp(event) {
        if (this.barClicked || this.satCliked) {
            this.barClicked = false;
            this.satCliked = false;
        }
    }
    handleBlurClick(e) {
        if (!this.dropDownOpen)
            return;
        let target = e.srcElement || e.target;
        if (this.elementRef.nativeElement.contains(target) || this.elementRef.nativeElement === target) {
            return;
        }
        else {
            this.dropDownOpen = false;
        }
    }
    // TODO: Add logic for formating color types
    set extraColors(colors) {
        const final = [];
        colors.forEach(color => {
            const col = this._validHex(color);
            if (col) {
                final.push(col);
            }
        });
        this.extraColorsInner = final;
    }
    ;
    get barPickerStyle() {
        const toReturn = {
            background: this.hslBackgroundColor
        };
        if (this.barPickerTopPosition) {
            toReturn.top = `${this.barPickerTopPosition}%`;
        }
        return toReturn;
    }
    get satPickerStyle() {
        const toReturn = {
            background: this.hslFullColor
        };
        if (this.satPickerTopPosition) {
            toReturn.top = this.satPickerTopPosition;
        }
        if (this.satPickerLeftPosition) {
            toReturn.left = this.satPickerLeftPosition;
        }
        return toReturn;
    }
    get hslBackgroundColor() {
        return `hsl(${this.color[0]}, 100%, 50%)`;
    }
    get hslFullColor() {
        return `hsl(${this.color[0]}, ${this.color[1]}%, ${this.color[2]}%)`;
    }
    get hexColor() {
        const rgbColor = this._hslToRgb(this.color[0], this.color[1], this.color[2]);
        return Math.floor(((1 << 24) + (rgbColor[0] << 16) + (rgbColor[1] << 8) + rgbColor[2])).toString(16).slice(1).toUpperCase();
    }
    ngAfterViewInit() {
        this.inputEl.nativeElement.value = this.hexColor;
        this._registerInputListener();
    }
    toggle() {
        this.dropDownOpen = !this.dropDownOpen;
    }
    barClick(event) {
        this.barClicked = true;
        this.setBarPickerValue(event);
    }
    satClick(event) {
        this.satCliked = true;
        this.setSatPickerValue(event);
    }
    setBarPickerValue(event) {
        const barPosition = this._offset(this.barEl.nativeElement).top;
        this.barPickerTopPosition = this._segmentNumber(((event.pageY - barPosition) / this.barHeight) * 100, 0, this.barHeight / 2);
        this.color[0] = this._segmentNumber(Math.floor((((event.pageY - barPosition) / this.barHeight) * 360)), 0, 360);
        this.inputEl.nativeElement.value = this.hexColor;
        this.onChange('#' + this.inputEl.nativeElement.value);
    }
    setSatPickerValue(event) {
        const satPosition = this._offset(this.satEl.nativeElement);
        const leftPosition = this._segmentNumber(event.pageX - satPosition.left, 0, this.satWidth);
        this.satPickerLeftPosition = leftPosition + 'px';
        this.satPickerTopPosition = this._segmentNumber(event.pageY - satPosition.top, 0, this.satHeight) + 'px';
        this.color[1] = Math.floor((leftPosition / this.satWidth) * 100);
        let x = event.pageX - satPosition.left;
        let y = event.pageY - satPosition.top;
        if (x > this.satWidth) {
            x = this.satWidth;
        }
        else if (x < 0) {
            x = 0;
        }
        if (y > this.satHeight) {
            y = this.satHeight;
        }
        else if (y < 0) {
            y = 0;
        }
        // convert between hsv and hsl
        const xRatio = x / this.satWidth * 100;
        const yRatio = y / this.satHeight * 100;
        const hsvValue = 1 - (yRatio / 100);
        const hsvSaturation = xRatio / 100;
        const lightness = (hsvValue / 2) * (2 - hsvSaturation);
        this.color[2] = Math.floor(lightness * 100);
        this.inputEl.nativeElement.value = this.hexColor;
        this.onChange('#' + this.inputEl.nativeElement.value);
    }
    hexChange(color, change = true) {
        const result = this.hexPattern.exec(color);
        if (result) {
            this.inputEl.nativeElement.value = color;
            const r = parseInt(result[1], 16);
            const g = parseInt(result[2], 16);
            const b = parseInt(result[3], 16);
            const hsl = this._rgbToHsl(r, g, b);
            const hsv = this._rgbToHsv(r, g, b);
            this.barPickerTopPosition = hsl[0] / 360 * 100;
            this.satPickerLeftPosition = hsl[1] + '%';
            this.satPickerTopPosition = 100 - (hsv[2] * 100) + '%';
            this.color[0] = hsl[0];
            this.color[1] = hsl[1];
            this.color[2] = hsl[2];
            if (change) {
                this.onChange('#' + this.inputEl.nativeElement.value);
            }
            this._cdr.detectChanges();
        }
    }
    _registerInputListener() {
        this._ngZone.runOutsideAngular(() => {
            Observable_1.Observable.fromEvent(this.inputEl.nativeElement, 'input')
                .debounceTime(300)
                .subscribe(_ => {
                this.inputEl.nativeElement.value = this.inputEl.nativeElement.value.toUpperCase();
                if (this.inputEl.nativeElement.value.length > 6) {
                    this.inputEl.nativeElement.value = this.inputEl.nativeElement.value.slice(0, 6);
                    this.hexChange(this.inputEl.nativeElement.value);
                }
                else if (this.inputEl.nativeElement.value.length === 6) {
                    this.hexChange(this.inputEl.nativeElement.value);
                }
            });
        });
    }
    // TODO: Add logic for formating color types
    writeValue(value) {
        const val = this._validHex(value);
        if (val) {
            this.hexChange(val, false);
        }
        else {
            this.hexChange('000000', false);
        }
    }
    registerOnChange(fn) {
        this.onChange = fn;
    }
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    // Helpers
    _isWindow(obj) {
        return obj !== null && obj === obj.window;
    }
    _getWindow(element) {
        return this._isWindow(element) ? element : element.nodeType === 9 && element.defaultView;
    }
    _offset(element) {
        const doc = element && element.ownerDocument;
        const docElem = doc.documentElement;
        const win = this._getWindow(doc);
        let box = {
            top: 0,
            left: 0
        };
        if (typeof element.getBoundingClientRect !== typeof undefined) {
            box = element.getBoundingClientRect();
        }
        return {
            top: box.top + win.pageYOffset - docElem.clientTop,
            left: box.left + win.pageXOffset - docElem.clientLeft
        };
    }
    // Color Helpers
    _validHex(color) {
        if (typeof color !== 'string') {
            return;
        }
        if (color[0] === '#') {
            color = color.slice(1);
        }
        if (this.hexPattern.test(color)) {
            return color.toUpperCase();
        }
        return;
    }
    _segmentNumber(num, min, max) {
        return Math.max(min, Math.min(num, max));
    }
    _isPercentage(n) {
        return typeof n === 'string' && n.indexOf('%') !== -1;
    }
    _isOnePointZero(n) {
        return typeof n === 'string' && n.indexOf('.') !== -1 && parseFloat(n) === 1;
    }
    _bound01(n, max) {
        if (this._isOnePointZero(n)) {
            n = '100%';
        }
        const processPercent = this._isPercentage(n);
        n = Math.min(max, Math.max(0, parseFloat(n)));
        // Automatically convert percentage into number
        if (processPercent) {
            n = (n * max) / 100;
        }
        // Handle floating point rounding errors
        if ((Math.abs(n - max) < 0.000001)) {
            return 1;
        }
        // Convert into [0, 1] range if it isn't already
        return (n % max) / parseFloat(max);
    }
    _hslToRgb(h, s, l) {
        let r, g, b;
        h = this._bound01(h, 360);
        s = this._bound01(s, 100);
        l = this._bound01(l, 100);
        function hue2rgb(p, q, t) {
            if (t < 0) {
                t += 1;
            }
            else if (t > 1) {
                t -= 1;
            }
            else if (t < 1 / 6) {
                return p + (q - p) * 6 * t;
            }
            else if (t < 1 / 2) {
                return q;
            }
            else if (t < 2 / 3) {
                return p + (q - p) * (2 / 3 - t) * 6;
            }
            return p;
        }
        if (s === 0) {
            r = g = b = l; // achromatic
        }
        else {
            const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
            const p = 2 * l - q;
            r = hue2rgb(p, q, h + 1 / 3);
            g = hue2rgb(p, q, h);
            b = hue2rgb(p, q, h - 1 / 3);
        }
        return [r * 255, g * 255, b * 255];
    }
    _rgbToHsv(r, g, b) {
        const max = Math.max(r, g, b);
        const min = Math.min(r, g, b);
        const d = max - min;
        const s = (max === 0 ? 0 : d / max);
        const v = max / 255;
        let h;
        switch (max) {
            case min:
                h = 0;
                break;
            case r:
                h = (g - b) + d * (g < b ? 6 : 0);
                h /= 6 * d;
                break;
            case g:
                h = (b - r) + d * 2;
                h /= 6 * d;
                break;
            case b:
                h = (r - g) + d * 4;
                h /= 6 * d;
                break;
        }
        return [h, s, v];
    }
    _rgbToHsl(r, g, b) {
        r = r / 255;
        g = g / 255;
        b = b / 255;
        const maxColor = Math.max(r, g, b);
        const minColor = Math.min(r, g, b);
        // Calculate L:
        let L = (maxColor + minColor) / 2;
        let S = 0;
        let H = 0;
        if (maxColor !== minColor) {
            // Calculate S:
            if (L < 0.5) {
                S = (maxColor - minColor) / (maxColor + minColor);
            }
            else {
                S = (maxColor - minColor) / (2.0 - maxColor - minColor);
            }
            // Calculate H:
            if (r === maxColor) {
                H = (g - b) / (maxColor - minColor);
            }
            else if (g === maxColor) {
                H = 2.0 + (b - r) / (maxColor - minColor);
            }
            else {
                H = 4.0 + (r - g) / (maxColor - minColor);
            }
        }
        L = L * 100;
        S = S * 100;
        H = H * 60;
        if (H < 0) {
            H += 360;
        }
        return [H, S, L];
    }
};
__decorate([
    core_1.ViewChild('bar'),
    __metadata("design:type", typeof (_a = typeof core_1.ElementRef !== "undefined" && core_1.ElementRef) === "function" && _a || Object)
], ColorPickerComponent.prototype, "barEl", void 0);
__decorate([
    core_1.ViewChild('sat'),
    __metadata("design:type", typeof (_b = typeof core_1.ElementRef !== "undefined" && core_1.ElementRef) === "function" && _b || Object)
], ColorPickerComponent.prototype, "satEl", void 0);
__decorate([
    core_1.ViewChild('input'),
    __metadata("design:type", typeof (_c = typeof core_1.ElementRef !== "undefined" && core_1.ElementRef) === "function" && _c || Object)
], ColorPickerComponent.prototype, "inputEl", void 0);
__decorate([
    core_1.HostListener('mousemove', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ColorPickerComponent.prototype, "onMouseMove", null);
__decorate([
    core_1.HostListener('mouseup', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ColorPickerComponent.prototype, "onMouseUp", null);
__decorate([
    core_1.HostListener('document:click', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ColorPickerComponent.prototype, "handleBlurClick", null);
__decorate([
    core_1.Input(),
    __metadata("design:type", Array),
    __metadata("design:paramtypes", [Array])
], ColorPickerComponent.prototype, "extraColors", null);
ColorPickerComponent = ColorPickerComponent_1 = __decorate([
    core_1.Component({
        selector: 'color-picker',
        template: __webpack_require__("../../../../../src/app/components/color-picker/color-picker.html"),
        styles: [__webpack_require__("../../../../../src/app/components/color-picker/color-picker.css")],
        changeDetection: core_1.ChangeDetectionStrategy.OnPush,
        providers: [{
                provide: forms_1.NG_VALUE_ACCESSOR,
                useExisting: core_1.forwardRef(() => ColorPickerComponent_1),
                multi: true,
            }],
    }),
    __metadata("design:paramtypes", [typeof (_d = typeof core_1.NgZone !== "undefined" && core_1.NgZone) === "function" && _d || Object, typeof (_e = typeof core_1.ElementRef !== "undefined" && core_1.ElementRef) === "function" && _e || Object, typeof (_f = typeof core_1.ChangeDetectorRef !== "undefined" && core_1.ChangeDetectorRef) === "function" && _f || Object])
], ColorPickerComponent);
exports.ColorPickerComponent = ColorPickerComponent;
var ColorPickerComponent_1, _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=color-picker.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/color-picker/color-picker.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\r\n  display: block;\r\n  position: relative;\r\n}\r\n\r\n.jaspero__colorpicker-wrapper {\r\n  display: inline-block;\r\n  position: relative;\r\n  min-width: 100px;\r\n}\r\n\r\n.jaspero__colorpicker-preview {\r\n  width: 70px;\r\n  height: 35px;\r\n  position: absolute;\r\n  left: 0;\r\n  top: 0;\r\n  border-radius: 4px;\r\n}\r\n\r\n.jaspero__colorpicker-input {\r\n  font-family: sans-serif;\r\n  border: 0;\r\n  padding: 10px 10px 10px 50px;\r\n  outline: none;\r\n  width: 100%;\r\n  border-radius: 3px;\r\n  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, .2), 0 1px 1px 0 rgba(0, 0, 0, .14), 0 2px 1px -1px rgba(0, 0, 0, .12);\r\n}\r\n\r\n.jaspero__colorpicker-dropdown {\r\n  z-index: 1001;\r\n  position: absolute;\r\n  top: 110%;\r\n  left: 0;\r\n  opacity: 0;\r\n  pointer-events: none;\r\n  -webkit-transform: translateY(-10px);\r\n          transform: translateY(-10px);\r\n  transition: all .2s ease;\r\n  min-width: 300px;\r\n  padding: 10px;\r\n  background: white;\r\n  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, .2), 0 1px 1px 0 rgba(0, 0, 0, .14), 0 2px 1px -1px rgba(0, 0, 0, .12);\r\n}\r\n\r\n.jaspero__colorpicker-dropdown.active {\r\n  opacity: 1;\r\n  pointer-events: auto;\r\n  -webkit-transform: translateY(0px);\r\n          transform: translateY(0px);\r\n}\r\n\r\n.jaspero__colorpicker-dropdown__bar {\r\n  background: linear-gradient(to bottom, #ff0000 0%, #ffff00 17%, #00ff00 33%, #00ffff 50%, #0000ff 67%, #ff00ff 83%, #ff0000 100%);\r\n  width: 14px;\r\n  height: 200px;\r\n  position: relative;\r\n  display: inline-block;\r\n  cursor: pointer;\r\n  float: right;\r\n}\r\n\r\n.jaspero__colorpicker-dropdown__extra-color {\r\n  width: 20px;\r\n  height: 20px;\r\n}\r\n\r\n.jaspero__colorpicker-dropdown__bar_picker {\r\n  position: absolute;\r\n  left: 50%;\r\n  top: 0;\r\n  -webkit-transform: translate(-50%, -50%);\r\n  transform: translate(-50%, -50%);\r\n  height: 7px;\r\n  width: 14px;\r\n  border: 2px solid white;\r\n  cursor: pointer;\r\n  box-shadow: 2px 2px 6px 0 rgba(0, 0, 0, .3);\r\n  background: hsl(0, 100%, 50%);\r\n}\r\n\r\n.jaspero__colorpicker-dropdown__bar_picker.active {\r\n  width: 18px;\r\n  height: 18px;\r\n}\r\n\r\n.jaspero__colorpicker-dropdown__sat {\r\n  width: 90%;\r\n  height: 200px;\r\n  display: inline-block;\r\n  background: hsl(0, 100%, 50%);\r\n  position: relative;\r\n  cursor: pointer;\r\n  -webkit-user-select: none;\r\n  -moz-user-select: none;\r\n  -ms-user-select: none;\r\n  user-select: none;\r\n}\r\n\r\n.jaspero__colorpicker-dropdown__sat_sat_picker {\r\n  position: absolute;\r\n  -webkit-transform: translate(-50%, -50%);\r\n  transform: translate(-50%, -50%);\r\n  width: 12px;\r\n  height: 12px;\r\n  top: 0;\r\n  left: 100%;\r\n  border-radius: 50%;\r\n  border: 2px solid white;\r\n  z-index: 10;\r\n  transition: width .25s, height .25s;\r\n  background: hsl(0, 100%, 50%);\r\n  box-shadow: 2px 2px 6px 0 rgba(0, 0, 0, .3);\r\n}\r\n\r\n.jaspero__colorpicker-dropdown__sat_sat_picker.active {\r\n  width: 16px;\r\n  height: 16px;\r\n}\r\n\r\n.jaspero__colorpicker-dropdown__sat_white,\r\n.jaspero__colorpicker-dropdown__sat_black {\r\n  position: absolute;\r\n  top: 0;\r\n  right: 0;\r\n  bottom: 0;\r\n  left: 0;\r\n}\r\n\r\n.jaspero__colorpicker-dropdown__sat_white {\r\n  background: linear-gradient(to right, #fff, rgba(204, 154, 129, 0));\r\n}\r\n\r\n.jaspero__colorpicker-dropdown__sat_black {\r\n  background: linear-gradient(to top, #000, rgba(204, 154, 129, 0));\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/color-picker/color-picker.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"jaspero__colorpicker-wrapper\" (click)=\"toggle()\">\r\n  <div class=\"jaspero__colorpicker-preview\" [style.background]=\"hslFullColor\"></div>\r\n  <input class=\"jaspero__colorpicker-input\" type=\"text\" #input style=\"visibility: hidden;\"/>\r\n</div>\r\n<div class=\"jaspero__colorpicker-dropdown\" [class.active]=\"dropDownOpen\">\r\n\r\n  <div class=\"jaspero__colorpicker-dropdown__sat\" #sat [style.background]=\"hslBackgroundColor\"\r\n       (mousedown)=\"satClick($event)\">\r\n    <div class=\"jaspero__colorpicker-dropdown__sat_white\"></div>\r\n    <div class=\"jaspero__colorpicker-dropdown__sat_black\"></div>\r\n    <div class=\"jaspero__colorpicker-dropdown__sat_sat_picker\" [class.active]=\"satCliked\"\r\n         [ngStyle]=\"satPickerStyle\"></div>\r\n  </div>\r\n  <div class=\"jaspero__colorpicker-dropdown__bar\" #bar (mousedown)=\"barClick($event)\">\r\n    <div class=\"jaspero__colorpicker-dropdown__bar_picker\" [class.active]=\"barClicked\"\r\n         [ngStyle]=\"barPickerStyle\"></div>\r\n  </div>\r\n  <div class=\"jaspero__colorpicker-dropdown__extra\" *ngIf=\"extraColorsInner.length\">\r\n    <h5>Extra colors</h5>\r\n    <div class=\"jaspero__colorpicker-dropdown__extra-color\" *ngFor=\"let color of extraColorsInner\"\r\n         [style.background]=\"'#' + color\" (click)=\"hexChange(color)\"></div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/document-editor/document-editor.component.html":
/***/ (function(module, exports) {

module.exports = "<app-navigation (navigate)=\"onNavigate($event)\" [documentSource]=\"documentSource\"\r\n                [viewRootSource]=\"viewRootSource\"></app-navigation>\r\n<mat-sidenav-container class=\"example-container no-select\">\r\n  <mat-sidenav [opened]=\"true\" mode=\"side\" #sidenav class=\"example-sidenav\">\r\n    <app-sidebar tabindex=\"2\" [documentSource]=\"documentSource\"\r\n                 [selectionSource]=\"selectionSource.asObservable()\"></app-sidebar>\r\n  </mat-sidenav>\r\n  <div class=\"example-sidenav-content\">\r\n    <app-editor tabindex=\"1\" class=\"full-size\" (select)=\"onEditorSelection($event)\"\r\n                (viewRootChange)=\"editorViewRootChange($event)\"\r\n                [documentSource]=\"documentSource\"\r\n                [navigationSource]=\"navigationSource\"></app-editor>\r\n  </div>\r\n</mat-sidenav-container>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/document-editor/document-editor.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".example-container {\n  width: 100vw;\n  height: calc(100vh - 50px - 50px);\n  border: 1px solid rgba(0, 0, 0, 0.5); }\n\n.example-sidenav-content {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  height: 100%;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  position: relative; }\n\n.example-sidenav {\n  padding: 20px; }\n\n.full-size {\n  width: 100%;\n  height: 100%;\n  overflow: hidden; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/document-editor/document-editor.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
const Subject_1 = __webpack_require__("../../../../rxjs/Subject.js");
const router_1 = __webpack_require__("../../../router/@angular/router.es5.js");
const toast_service_1 = __webpack_require__("../../../../../src/app/services/toast.service.ts");
const app_api_service_1 = __webpack_require__("../../../../../src/app/services/app-api.service.ts");
let DocumentEditorComponent = class DocumentEditorComponent {
    constructor(ngZone, appApi, route, toastService) {
        this.ngZone = ngZone;
        this.appApi = appApi;
        this.route = route;
        this.toastService = toastService;
        this.navigationSource = new Subject_1.Subject();
        this.selectionSource = new Subject_1.Subject();
        this.viewRootSource = new Subject_1.Subject();
        this.documentSource = new Subject_1.Subject();
        this.subscriptions = [];
    }
    ngOnInit() {
    }
    ngOnDestroy() {
        this.subscriptions.forEach(s => s.unsubscribe());
    }
    ngAfterViewInit() {
        this.subscriptions.push(this.route.paramMap.subscribe(params => {
            const document = this.appApi.app.documentManager.open(params.get('id'));
            if (document) {
                this.documentSource.next(document);
            }
            else {
                this.toastService.error('Документ не найден', 'Ошибка открытия документа');
            }
        }));
    }
    onNavigate(r) {
        this.navigationSource.next(r);
    }
    onEditorSelection(selection) {
        this.selectionSource.next(selection);
    }
    editorViewRootChange(id) {
        this.viewRootSource.next(id);
    }
};
DocumentEditorComponent = __decorate([
    core_1.Component({
        selector: 'app-tech-editor',
        template: __webpack_require__("../../../../../src/app/components/document-editor/document-editor.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/document-editor/document-editor.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof core_1.NgZone !== "undefined" && core_1.NgZone) === "function" && _a || Object, typeof (_b = typeof app_api_service_1.AppApiService !== "undefined" && app_api_service_1.AppApiService) === "function" && _b || Object, typeof (_c = typeof router_1.ActivatedRoute !== "undefined" && router_1.ActivatedRoute) === "function" && _c || Object, typeof (_d = typeof toast_service_1.ToastService !== "undefined" && toast_service_1.ToastService) === "function" && _d || Object])
], DocumentEditorComponent);
exports.DocumentEditorComponent = DocumentEditorComponent;
var _a, _b, _c, _d;
//# sourceMappingURL=document-editor.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/document-list/document-list.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>Документы</h1>\r\n<mat-card style=\"width: 800px; margin-left: 36px;\">\r\n  <mat-card-title>Список документов</mat-card-title>\r\n  <mat-card-content>\r\n    <mat-nav-list>\r\n      <mat-list-item *ngFor=\"let document of documents\" [routerLink]=\"'editor/' + document.id\">\r\n        <a matLine>{{document.code}} {{ document.name }}</a>\r\n      </mat-list-item>\r\n    </mat-nav-list>\r\n    <button mat-mini-fab routerLink=\"level-editor\" type=\"button\" title=\"Новый документ\">\r\n      <mat-icon>add</mat-icon>\r\n    </button>\r\n  </mat-card-content>\r\n</mat-card>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/document-list/document-list.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/document-list/document-list.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
const app_api_service_1 = __webpack_require__("../../../../../src/app/services/app-api.service.ts");
let DocumentListComponent = class DocumentListComponent {
    constructor(_appApi) {
        this._appApi = _appApi;
    }
    ngOnInit() {
        this.documents = this._appApi.app.documentManager.getServerDocumentsList();
    }
    showInfo(document) {
        alert(`${document.code} ${document.name}`);
    }
};
DocumentListComponent = __decorate([
    core_1.Component({
        selector: 'app-document-list',
        template: __webpack_require__("../../../../../src/app/components/document-list/document-list.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/document-list/document-list.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof app_api_service_1.AppApiService !== "undefined" && app_api_service_1.AppApiService) === "function" && _a || Object])
], DocumentListComponent);
exports.DocumentListComponent = DocumentListComponent;
var _a;
//# sourceMappingURL=document-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/editor/editor.component.html":
/***/ (function(module, exports) {

module.exports = "<div style=\"width: 100%; user-select: none;\" class=\"buttons-panel\">\r\n  <button (click)=\"do('un')\" title=\"Отменить\"><i class=\"material-icons md-36\">undo</i></button>\r\n  <button (click)=\"do('re')\" title=\"Повторить\"><i class=\"material-icons md-36\">redo</i></button>\r\n  <button (click)=\"createBlock()\" title=\"Cоздать блок\"><i class=\"material-icons md-36\">label</i></button>\r\n  <button (click)=\"createCondition()\" title=\"Cоздать условие\"><i class=\"material-icons md-36\">label_outline</i></button>\r\n  <!--<button (click)=\"deleteSelected()\" title=\"Удалить выбранное\"><i class=\"material-icons md-36\">delete_forever</i></button>-->\r\n  <!--<button (click)=\"alignHorizontal()\" title=\"Выровнять горизонтально\"><i class=\"material-icons md-36\">vertical_align_top</i></button>-->\r\n  <!--<button (click)=\"distributeHorizontal()\" title=\"Распределить горизонтально\"><i class=\"material-icons md-36\">view_week</i></button>-->\r\n  <!--<button (click)=\"alignVertical()\" title=\"Выровнять вертикально\"><i class=\"material-icons md-36\">format_align_left</i></button>-->\r\n  <!--<button (click)=\"distributeVertical()\" title=\"Распределить вертикально\"><i class=\"material-icons md-36\">reorder</i></button>-->\r\n  <!--<button (click)=\"alignHorizontalCenter()\" title=\"Выровнять горизонтально по центру\"><i class=\"material-icons md-36\">vertical_align_center</i></button>-->\r\n  <!--<button (click)=\"alignVerticalCenter()\" title=\"Выровнять вертикально по центру\"><i class=\"material-icons md-36\">format_align_center</i></button>-->\r\n  <button (click)=\"autoLayout()\" title=\"Авторасстановка\"><i class=\"material-icons md-36\">flash_auto</i></button>\r\n  <button (click)=\"zoomToFit()\" title=\"Показать все\"><i class=\"material-icons md-36\">zoom_out_map</i></button>\r\n  <button (click)=\"syncDocument()\"><i class=\"material-icons md-36\" title=\"Синхронизировать документ\">sync</i></button>\r\n  <button (click)=\"exportImage()\"><i class=\"material-icons md-36\" title=\"Экспорт в PNG\">burst_mode</i></button>\r\n  <button [matMenuTriggerFor]=\"menu\"><i class=\"material-icons md-36\" title=\"Показать вложенные\">collections_bookmark</i></button>\r\n  <mat-menu #menu=\"matMenu\">\r\n    <button *ngFor=\"let level of levels;\" mat-menu-item (click)=\"showNested(level)\">{{level}}</button>\r\n  </mat-menu>\r\n  <button (click)=\"hideNested()\"><i class=\"material-icons md-36\" title=\"Свернуть все\">collections_bookmark</i></button>\r\n\r\n</div>\r\n<!--<div *ngIf=\"!document\">-->\r\n<!--<mat-card>Документ не загружен</mat-card>-->\r\n<!--</div>-->\r\n<canvas #pixi class=\"no-select\"></canvas>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/editor/editor.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".buttons-panel button {\n  width: 48px;\n  height: 48px;\n  border: none; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/editor/editor.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
const zoom_1 = __webpack_require__("../../../../../src/app/components/editor/zoom.ts");
const input_1 = __webpack_require__("../../../../../src/app/components/editor/input.ts");
const simple_block_1 = __webpack_require__("../../../../../src/app/components/editor/objects/simple-block.ts");
const port_1 = __webpack_require__("../../../../../src/app/components/editor/objects/port.ts");
const connection_1 = __webpack_require__("../../../../../src/app/components/editor/objects/connection.ts");
const editor_object_1 = __webpack_require__("../../../../../src/app/components/editor/objects/editor-object.ts");
const condition_1 = __webpack_require__("../../../../../src/app/components/editor/objects/condition.ts");
const phantom_connection_1 = __webpack_require__("../../../../../src/app/components/editor/objects/phantom-connection.ts");
const aligner_1 = __webpack_require__("../../../../../src/app/components/editor/objects/aligner.ts");
const selection_frame_1 = __webpack_require__("../../../../../src/app/components/editor/objects/selection-frame.ts");
const selector_fn_1 = __webpack_require__("../../../../../src/app/components/editor/selector-fn.ts");
const bump_1 = __webpack_require__("../../../../../src/app/ext/bump.ts");
const get_loader_1 = __webpack_require__("../../../../../src/app/components/editor/get-loader.ts");
const extract_image_1 = __webpack_require__("../../../../../src/app/components/editor/extract-image.ts");
const _ = __webpack_require__("../../../../lodash/lodash.js");
const case_1 = __webpack_require__("../../../../../src/app/components/editor/objects/case.ts");
const Observable_1 = __webpack_require__("../../../../rxjs/Observable.js");
const TypeNames_1 = __webpack_require__("../../../../../src/api/src/ts/enums/TypeNames.ts");
const data_service_1 = __webpack_require__("../../../../../src/app/services/data.service.ts");
const DocumentEventNames_1 = __webpack_require__("../../../../../src/api/src/ts/enums/event_names/DocumentEventNames.ts");
const toast_service_1 = __webpack_require__("../../../../../src/app/services/toast.service.ts");
const observable_listener_1 = __webpack_require__("../../../../../src/app/observable-listener.ts");
__webpack_require__("../../../../rxjs/add/operator/mergeMap.js");
const delete_button_1 = __webpack_require__("../../../../../src/app/components/editor/objects/delete-button.ts");
var Container = PIXI.Container;
const signal_r_service_1 = __webpack_require__("../../../../../src/app/services/signal-r.service.ts");
let EditorComponent = class EditorComponent {
    constructor(ngZone, toastService, sirnalr, dataService) {
        this.ngZone = ngZone;
        this.toastService = toastService;
        this.sirnalr = sirnalr;
        this.dataService = dataService;
        this.select = new core_1.EventEmitter(true);
        this.viewRootChange = new core_1.EventEmitter(true);
        this.aligner = new aligner_1.Aligner();
        this.selectedObjects = [];
        this.bump = new bump_1.Bump(PIXI);
        this.dragObjects = [];
        this.ticker = new PIXI.ticker.Ticker();
        this.subscriptions = [];
        this.levels = [];
    }
    ngOnInit() {
        this.subscriptions.push(this.navigationSource.subscribe((id) => {
            if (id !== this.currentViewRootNode.id) {
                this.navigate(id);
            }
        }));
        this.subscriptions.push(this.documentSource.subscribe((document) => {
            this.document = document;
            this.ngZone.runOutsideAngular(() => this.init(document));
        }));
        this.subscriptions.push(this.documentSource.flatMap(document => observable_listener_1.ObservableListener.create(document, DocumentEventNames_1.DocumentEventNames.DocumentChanged)).subscribe(e => this.documentChanged(e)));
    }
    ngAfterViewInit() {
        this.renderer = PIXI.autoDetectRenderer({
            view: this.pixiContainer.nativeElement,
            width: this.pixiContainer.nativeElement.parentElement.clientWidth,
            height: this.pixiContainer.nativeElement.parentElement.clientHeight,
            transparent: true,
            autoResize: true,
            antialias: true,
        });
    }
    ngOnDestroy() {
        if (this.input)
            this.input.dispose();
        this.subscriptions.forEach(s => s.unsubscribe());
        if (this.ticker)
            this.ticker.stop();
        this.resetGame();
        // самодельный хак
        /// TODO: создать ишучу
        //  в фильтер менеджере создается фильтров очень больше, чем на самом деле
        this.destroyFilterManager();
        ///
        if (this.ticker)
            this.ticker.destroy();
        if (this.renderer) {
            this.renderer.destroy();
            this.renderer = null;
        }
    }
    onResize(event) {
        if (!this.renderer)
            return;
        const el = this.pixiContainer.nativeElement.parentElement;
        const w = el.clientWidth;
        const h = el.clientHeight;
        const renderer = this.renderer;
        renderer.view.style.width = w + "px";
        renderer.view.style.height = h + "px";
        renderer.resize(w, h);
    }
    createBlock() {
        return this.dataService.createNode(this.document, this.currentViewRootNode.id);
    }
    createCondition() {
        return this.dataService.createCondition(this.document, this.currentViewRootNode.id);
    }
    autoLayout() {
        this.aligner.autoAlign(this.game.children.filter(x => x instanceof editor_object_1.EditorObject));
        this.zoomToFit();
    }
    exportImage() {
        this.updateZoom(new PIXI.Matrix());
        extract_image_1.extractImage(this.renderer, this.zoomContainer).then(() => this.updateZoom());
    }
    zoomToFit() {
        const zoomOffset = 0.85;
        const xOffset = -150;
        const f = () => {
            const bounds = this.game.getLocalBounds();
            const realBounds = { x: bounds.x, y: bounds.y, width: bounds.width, height: bounds.height };
            const desiredScale = Math.min(this.renderer.width / realBounds.width, this.renderer.height / realBounds.height) * zoomOffset;
            const bCenter = new PIXI.Point(bounds.x + bounds.width / 2, bounds.y + bounds.height / 2);
            const zoomCenter = this.game.toGlobal(bCenter);
            this.zoom.setScaleCenter(zoomCenter.x, zoomCenter.y);
            this.zoom.currentScale = desiredScale;
            this.zoom.translateBy(this.renderer.width / 2 - zoomCenter.x, this.renderer.height / 2 - zoomCenter.y);
            this.updateZoom();
        };
        f();
        f();
        this.zoom.translateBy(xOffset, 0);
        this.updateZoom();
    }
    deleteSelected() {
        this.dataService.deleteObjects(this.document, this.selectedObjects);
    }
    do(action) {
        const result = this.document[action + 'do']();
        if (!result.success)
            this.toastService.warning(result.errorMessage);
    }
    syncDocument() {
        this.dataService.sync(this.document)
            .catch(e => {
            this.toastService.error(e, 'Ошибка синхронизации документа');
            return Observable_1.Observable.of(false);
        })
            .subscribe((result) => result && this.toastService.success('Документ синхронизирован'));
    }
    navigate(rootViewNode) {
        if (!this.document)
            return;
        this.resetGame();
        this.createGame(this.document, rootViewNode);
        this.deselectAll();
    }
    resetGame() {
        const dispose = (container) => {
            if (!container)
                return;
            if ('children' in container)
                container.children.forEach(x => {
                    if (x instanceof PIXI.Container) {
                        dispose(x);
                    }
                    else if ('dispose' in x) {
                        x.dispose();
                    }
                });
        };
        dispose(this.stage);
        if (this.game)
            this.game.removeChildren();
        if (this.overlay)
            this.overlay.removeChildren();
        if (this.connectionContainer)
            this.connectionContainer.removeChildren();
    }
    destroyFilterManager() {
        if (!this.renderer || !this.renderer.filterManager)
            return;
        const filters = this.renderer.filterManager.managedFilters;
        for (let i = 0; i < filters.length; i++) {
            if (filters[i].glShaders[this.renderer.CONTEXT_UID]) {
                filters[i].glShaders[this.renderer.CONTEXT_UID].destroy();
                delete filters[i].glShaders[this.renderer.CONTEXT_UID];
            }
        }
        this.renderer.filterManager.shaderCache = {};
        this.renderer.filterManager.emptyPool();
        this.renderer.filterManager.managedFilters = [];
    }
    init(document) {
        if (!this.renderer) {
            this.toastService.error('Рендерер отсутствует');
            return;
        }
        const ticker = this.ticker;
        const renderer = this.renderer;
        ticker.stop();
        this.initContainers();
        this.initLoader(document);
        if (this.input)
            this.input.dispose();
        const input = this.input = new input_1.MyInput(renderer.plugins.interaction, this.pixiContainer);
        this.setupInput(document, input);
        ticker.add((deltaTime) => {
            const mousePoint = this.game.toLocal(input.getMousePoint(), this.overlay);
            this.zoom.setScaleCenter(mousePoint.x, mousePoint.y);
            renderer.render(this.stage);
        });
        ticker.start();
    }
    initLoader(document) {
        const afterLoad = () => this.createGame(document, document.getContext().getRootNode().id);
        const getLoaderResult = get_loader_1.getLoader(afterLoad);
        this.loader = getLoaderResult.loader;
        if (!getLoaderResult.willOnComplete)
            afterLoad();
    }
    startDrag(e) {
        this.dragObjects = this.selectedObjects.filter(o => o.canDrag).map(o => {
            const globalPos = o.getGlobalPosition();
            // TODO: исправить искривление смещения при масштабирования
            return {
                object: o,
                offset: new PIXI.Point(e.data.global.x - globalPos.x, e.data.global.y - globalPos.y)
            };
        });
    }
    updateZoom(_t = null) {
        const t = _t || this.zoom.Transform;
        this.connectionContainer.transform.localTransform.set(t.a, t.b, t.c, t.d, t.tx, t.ty);
        this.game.transform.localTransform.set(t.a, t.b, t.c, t.d, t.tx, t.ty);
        this.zoomContainer.transform.updateTransform(this.game.transform);
    }
    createConnection(doc, p1, p2) {
        if (p1.parentBlock === p2.parentBlock)
            return;
        if (p1.isInput === p2.isInput)
            return;
        let sourcePort = p1.isInput ? p2 : p1;
        let targetPort = p1.isInput ? p1 : p2;
        if (sourcePort.parentBlock instanceof condition_1.Condition) {
            const condition = sourcePort.parentBlock;
            const _case = _.find(condition.cases, { port: sourcePort });
            this.dataService.createConnection(doc, _case.id, targetPort.parentBlock.id);
        }
        this.dataService.createConnection(doc, sourcePort.parentBlock.id, targetPort.parentBlock.id);
    }
    factoryConnection(args) {
        const connection = new connection_1.Connection(args.sourcePort, args.targetPort);
        connection.id = args.connectionId;
        connection.setLoader(this.loader);
        connection.setTicker(this.ticker);
        connection.start();
        return connection;
    }
    createGame(document, rootNodeId) {
        this.viewRootChange.emit(rootNodeId);
        const rootNode = this.currentViewRootNode = document.getContext().getObject(rootNodeId);
        let levels = [];
        this.document.getContext().levels.forEach((k, v) => levels.push(k.name));
        const index = levels.indexOf(this.currentViewRootNode.getLevel().name);
        this.levels = levels.splice(index + 1, levels.length - 1);
        this.zoom = new zoom_1.Zoom();
        this.updateZoom();
        this.phantomConnection = new phantom_connection_1.PhantomConnection();
        const nodes = new Map();
        const connections = new Map();
        const childNodes = rootNode.getChildrenNodes().concat(rootNode.getChildrenConditions());
        childNodes.forEach((nodeValue) => {
            switch (nodeValue.typeName) {
                case TypeNames_1.TypeNames.LevelNode:
                    const levelNode = nodeValue;
                    const block = this.createBlockFromLevelNode(levelNode);
                    nodes.set(levelNode.id, block);
                    this.game.addChild(block);
                    levelNode.getInputConnections().concat(levelNode.getOutputConnections()).forEach(x => {
                        if (!connections.has(x.id))
                            connections.set(x.id, x);
                    });
                    break;
                case TypeNames_1.TypeNames.Condition:
                    const iCondition = nodeValue;
                    const condition = new condition_1.Condition(iCondition.name);
                    condition.id = iCondition.id;
                    condition.setTicker(this.ticker);
                    condition.setLoader(this.loader);
                    iCondition.getVariants().forEach(variant => {
                        const _case = new case_1.Case(variant.id, variant.text, condition);
                        condition.addCase(_case);
                        nodes.set(variant.id, _case);
                    });
                    nodes.set(iCondition.id, condition);
                    this.game.addChild(condition);
                    iCondition.getInputConnections().concat(_.flatMap(iCondition.getVariants().map(v => v.getOutputConnections()))).forEach(x => {
                        if (!connections.has(x.id))
                            connections.set(x.id, x);
                    });
                    break;
                default:
                    throw new Error(`Непонятный тип ${nodeValue.typeName}`);
            }
        });
        connections.forEach((iconnection, id) => {
            const source = nodes.get(iconnection.sourceId);
            const target = nodes.get(iconnection.targetId);
            const connection = this.factoryConnection({
                sourcePort: source.getOutputPorts()[0],
                targetPort: target.getInputPort(),
                connectionId: id
            });
            this.connectionContainer.addChild(connection);
        });
        this.connectionContainer.addChild(this.phantomConnection);
        if (this.game.children.length > 0)
            this.autoLayout();
    }
    createBlockFromLevelNode(levelNode) {
        const block = new simple_block_1.SimpleBlock();
        block.blockName = levelNode.name;
        block.blockCode = levelNode.code;
        block.blockHours = levelNode.laborCosts || 0;
        block.id = levelNode.id;
        block.color = levelNode.getLevel().color;
        block.setTicker(this.ticker);
        block.setLoader(this.loader);
        block.start();
        return block;
    }
    notifySelect(selectedObjects) {
        this.ngZone.run(() => {
            this.select.emit(this.selectedObjects.map(selectedObject => selectedObject.id));
        });
    }
    notifySelectById(ids) {
        this.ngZone.run(() => {
            this.select.emit(ids);
        });
    }
    startSelectionFrame(mousePos) {
        if (this.selectionFrame)
            this.stopSelectionFrame();
        this.selectionFrame = new selection_frame_1.SelectionFrame(mousePos.clone());
        this.overlay.addChild(this.selectionFrame);
    }
    stopSelectionFrame() {
        this.overlay.removeChild(this.selectionFrame);
        this.selectionFrame = null;
    }
    updateSelectionFrame(mousePos) {
        if (!this.selectionFrame)
            return;
        this.selectionFrame.update(mousePos);
    }
    getFrameSelection(rect, direction) {
        return this.game.children.filter(direction.right ?
            selector_fn_1.SelectorFn.containsSelectorFn(this.bump, rect) : selector_fn_1.SelectorFn.intersectSelectorFn(this.bump, rect));
    }
    selectAll() {
        this.setSelectedObjects(this.game.children.filter(x => x instanceof editor_object_1.EditorObject), true);
    }
    deselectAll() {
        this.setSelectedObjects([], false);
        this.notifySelectById(this.getParentBlockId());
    }
    setSelectedObjects(_objects, select = true, append = false) {
        const objects = _objects instanceof Array ? _objects : [_objects];
        if (append) {
            this.selectedObjects = this.selectedObjects.concat(objects);
        }
        else {
            this.selectedObjects.forEach(o => o.setSelected(false));
            this.selectedObjects = this.select ? objects : [];
        }
        objects.forEach(o => o.setSelected(select));
        if (this.selectedObjects.length > 0)
            this.notifySelect(this.selectedObjects);
        else {
            this.notifySelectById(this.getParentBlockId());
        }
    }
    getParentBlockId() {
        const rootNodeId = this.document.getContext().getRootNode().id;
        if (this.currentViewRootNode.id !== rootNodeId)
            return [this.currentViewRootNode.id];
        else
            return [];
    }
    stopDrag() {
        this.dragObjects = [];
    }
    updateDrag(e) {
        this.dragObjects.forEach(dragObject => {
            if (!dragObject.object.parent)
                return; // произошла навигация во время перетаскивания
            const newPos = dragObject.object.parent.toLocal(new PIXI.Point(e.data.global.x - dragObject.offset.x, e.data.global.y - dragObject.offset.y));
            dragObject.object.setPosition(newPos);
        });
    }
    setupInput(document, input) {
        this.subscriptions.push(input.onZoom.subscribe(zoom => {
            this.zoom.zoomBy(zoom, zoom);
            this.updateZoom();
        }));
        this.subscriptions.push(input.onRightDrag.subscribe(d => {
            this.zoom.translateBy(d.dx, d.dy);
            this.updateZoom();
        }));
        this.subscriptions.push(input.onKeyDown.subscribe(e => {
            switch (e.keyCode) {
                case 8:
                    if (this.currentViewRootNode && this.currentViewRootNode.getParent())
                        this.navigate(this.currentViewRootNode.getParent().id);
                    break;
                case 46:
                    this.deleteSelected();
                    break;
                case 65:
                    if (input.isCtrlKeyDown()) {
                        this.selectAll();
                        e.preventDefault();
                    }
                    break;
                case 90:
                    if (input.isCtrlKeyDown()) {
                        if (input.isShiftKeyDown()) {
                            this.do("re");
                        }
                        else {
                            this.do("un");
                        }
                    }
                    break;
            }
        }));
        this.subscriptions.push(input.onMouseMove.subscribe(e => {
            if (this.selectedPort != null) {
                const hitObject = this.renderer.plugins.interaction.hitTest(e.data.global, this.stage);
                if (hitObject instanceof port_1.Port && hitObject.isInput === this.selectedPort.isInput) {
                    // нельзя так соединять порты!
                }
                const portSnap = this.snapToPort(e.data.global);
                this.phantomConnection.update(portSnap.position);
            }
            if (input.isLeftMouseDown()) {
                this.updateDrag(e);
                this.updateSelectionFrame(e.data.global);
            }
            else {
                this.stopDrag();
                this.stopSelectionFrame();
            }
        }));
        this.subscriptions.push(input.onMouseOut.merge(input.onMouseUpOutside).subscribe(() => {
            this.stopSelectionFrame();
        }));
        this.subscriptions.push(input.onMouseUp.subscribe(e => {
            this.stopDrag();
            if (this.selectionFrame) {
                const rect = this.selectionFrame.getRect();
                if (rect)
                    this.setSelectedObjects(this.getFrameSelection(rect, this.selectionFrame.direction), true);
                this.stopSelectionFrame();
            }
        }));
        this.subscriptions.push(input.onMouseDown.subscribe(e => {
            const hitObject = this.renderer.plugins.interaction.hitTest(e.data.global, this.stage);
            if (input.isShiftKeyDown() && hitObject instanceof simple_block_1.SimpleBlock && this.document.getContext().getLevelNode(hitObject.id).canHaveChildren())
                this.navigate(hitObject.id);
            if (this.phantomConnection.isActive()) {
                const port = this.snapToPort(e.data.global).port;
                if (port) {
                    if (this.selectedPort.isInput !== port.isInput && this.selectedPort.parentBlock !== port.parentBlock)
                        this.createConnection(document, this.selectedPort, port);
                }
                else {
                    this.createBlock().subscribe(levelNode => this.createUnrealBlock(levelNode.id, e.data.global, this.selectedPort.parentBlock.id));
                }
                this.selectedPort = null;
                this.phantomConnection.hide();
                return;
            }
            if (hitObject instanceof port_1.Port) {
                this.deselectAll();
                if (!this.selectedPort || this.selectedPort === hitObject) {
                    this.selectedPort = hitObject;
                    this.phantomConnection.setPort(this.selectedPort);
                    return;
                }
                this.createConnection(document, this.selectedPort, hitObject);
                this.selectedPort = null;
                this.phantomConnection.hide();
            }
            else if (hitObject instanceof editor_object_1.EditorObject) {
                if (!hitObject.selected)
                    this.setSelectedObjects(hitObject, true, input.isCtrlKeyDown());
                this.startDrag(e);
            }
            else if (hitObject instanceof delete_button_1.DeleteButton) {
                this.dataService.deleteObjects(this.document, [hitObject.connectionId]);
            }
            else if (hitObject === null) {
                this.deselectAll();
                if (this.selectedPort !== null) {
                    this.selectedPort = null;
                    this.phantomConnection.hide();
                }
                this.startSelectionFrame(e.data.global);
            }
        }));
        this.subscriptions.push(input.onMouseDoubleClick.subscribe(e => {
            const hitObject = this.renderer.plugins.interaction.hitTest(e.data.global, this.stage);
            if (hitObject instanceof simple_block_1.SimpleBlock && this.document.getContext().getLevelNode(hitObject.id).canHaveChildren())
                this.navigate(hitObject.id);
            if (!hitObject && input.isCtrlKeyDown()) {
                if (input.isShiftKeyDown()) {
                    this.createCondition().subscribe(condition => this.createUnrealBlock(condition.id, e.data.global));
                }
                else {
                    this.createBlock().subscribe(levelNode => this.createUnrealBlock(levelNode.id, e.data.global));
                }
            }
        }));
    }
    snapToPort(mousePos) {
        const distanceThreshold = 100;
        const ports = _.sortBy(_.flatMap(this.game.children, o => o instanceof editor_object_1.EditorObject ? o.getAllPorts() : [])
            .map(p => {
            const portPos = p.getGlobalPosition();
            return {
                port: p,
                distance: Math.sqrt(Math.pow(portPos.x - mousePos.x, 2) + Math.pow(portPos.y - mousePos.y, 2))
            };
        }).filter(o => o.distance < distanceThreshold && o.port !== this.selectedPort && o.port.isInput !== this.selectedPort.isInput), 'distance');
        return ports.length > 0 ? { position: ports[0].port.getGlobalPosition(), port: ports[0].port } : {
            position: mousePos,
            port: null
        };
    }
    initContainers() {
        this.game = new PIXI.Container();
        this.connectionContainer = new PIXI.Container();
        this.zoomContainer = new PIXI.Container();
        this.overlay = new PIXI.Container();
        this.stage = new PIXI.Container();
        this.phantomConnection = new phantom_connection_1.PhantomConnection();
        this.zoom = new zoom_1.Zoom();
        this.zoomContainer.addChild(this.connectionContainer);
        this.zoomContainer.addChild(this.game);
        this.stage.addChild(this.zoomContainer);
        this.stage.addChild(this.overlay);
    }
    documentChanged(e) {
        if (e.source !== this.document) {
            this.toastService.error('Текущий документ не совпадает с документом в событии обновления', 'Ошибка');
            return;
        }
        if (!e.data) {
            this.resetGame();
            this.createGame(this.document, this.currentViewRootNode.id);
            return;
        }
        e.data.added.forEach(id => {
            const obj = this.document.getContext().getObject(id);
            switch (obj.typeName) {
                case TypeNames_1.TypeNames.LevelNode:
                    const block = this.createBlockFromLevelNode(obj);
                    block.setPosition(new PIXI.Point(this.renderer.width / 2 - block.width, this.renderer.height / 2 - block.height));
                    this.game.addChild(block);
                    this.setSelectedObjects(block);
                    break;
                case TypeNames_1.TypeNames.Condition:
                    const condition = this.createConditionFromICondition(obj);
                    condition.setPosition(new PIXI.Point(this.renderer.width / 2 - condition.width, this.renderer.height / 2 - condition.height));
                    this.setSelectedObjects(condition);
                    break;
                case TypeNames_1.TypeNames.Connection:
                    const iConnection = obj;
                    let sourcePort;
                    const sourceNode = this.document.getContext().getObject(iConnection.sourceId);
                    if (sourceNode.typeName === TypeNames_1.TypeNames.LevelNode) {
                        sourcePort = this.game.children.map(x => x)
                            .filter(x => x.id === iConnection.sourceId)[0].getOutputPorts()[0];
                    }
                    else {
                        const variant = sourceNode;
                        const condition = this.game.children.map(x => x)
                            .filter(x => x.id === variant.getCondition().id)[0];
                        sourcePort = condition.cases.filter(c => c.id === iConnection.sourceId)[0].port;
                    }
                    const targetPort = this.game.children.map(x => x)
                        .filter(x => x.id === iConnection.targetId)[0].getInputPort();
                    this.connectionContainer.addChild(this.factoryConnection({
                        sourcePort: sourcePort,
                        targetPort: targetPort,
                        connectionId: iConnection.id
                    }));
                    break;
            }
        });
        e.data.edited.forEach(id => {
            if (id === null)
                return;
            let ee = this.game.children.filter(obj => obj instanceof editor_object_1.EditorObject)
                .map(x => x)
                .filter(x => x.id === id)[0];
            if (!ee)
                return;
            const rootNodeId = this.document.getContext().getRootNode().id;
            if (id === rootNodeId)
                return;
            const node = this.document.getContext().getObject(id);
            switch (node.typeName) {
                case TypeNames_1.TypeNames.LevelNode:
                    const levelNode = node;
                    const block = ee;
                    block.blockCode = levelNode.code;
                    block.blockName = levelNode.name;
                    block.blockHours = levelNode.laborCosts ? levelNode.laborCosts : 0;
                    //todo обновить софт и линки
                    block.update();
                    break;
                case TypeNames_1.TypeNames.Condition:
                    let iCondition = node;
                    const condition = ee;
                    condition.title = iCondition.name;
                    condition.code = iCondition.code;
                    iCondition.getVariants().forEach(v => {
                        if (condition.cases.some(x => x.id === v.id)) {
                            condition.cases.filter(x => x.id === v.id).forEach(x => x.update(v.text));
                            return;
                        }
                        condition.addCase(new case_1.Case(v.id, v.text, condition));
                    });
                    condition.cases.forEach(c => {
                        if (c.id && e.data.deleted.indexOf(c.id) !== -1)
                            condition.cases.splice(condition.cases.indexOf(c), 1);
                    });
                    condition.update();
                    break;
            }
        });
        e.data.deleted.forEach(id => {
            if (this.connectionContainer.children.some((x) => x.id === id)) {
                const connection = _.find(this.connectionContainer.children, { id: id });
                connection.dispose();
                this.connectionContainer.removeChild(connection);
            }
        });
        this.game.children.forEach((x) => {
            if (x.id && e.data.deleted.indexOf(x.id) !== -1)
                this.game.removeChild(x);
        });
    }
    createUnrealBlock(levelNodeId, point, connectToId = null) {
        const node = _.find(this.game.children, { id: levelNodeId });
        if (!node) {
            this.toastService.error('Созданный узел не найден в редакторе');
            return;
        }
        const pt = this.game.toLocal(point);
        pt.y -= node.height / 2;
        node.setPosition(pt);
        if (connectToId)
            this.dataService.createConnection(this.document, connectToId, node.id);
    }
    createConditionFromICondition(iCondition) {
        const condition = new condition_1.Condition(iCondition.name);
        condition.code = iCondition.code;
        condition.id = iCondition.id;
        iCondition.getVariants().forEach(v => {
            condition.addCase(new case_1.Case(v.id, v.text, condition));
        });
        this.game.addChild(condition);
        return condition;
    }
    showNested(levelName) {
        if (this.selectedObjects.length < 1)
            return;
        else if (this.selectedObjects.some(x => x instanceof condition_1.Condition))
            return;
        else if (this.selectedObjects[0]) {
            const depth = this.levels.indexOf(levelName) + 1;
            const rootBlock = this.selectedObjects[0];
            this.addNestedBlocks(rootBlock, depth, 0.75);
            rootBlock.update();
        }
    }
    hideNested() {
        this.game.children.filter(x => x instanceof simple_block_1.SimpleBlock && x.embeddedContainer.children.length > 0).forEach(x => {
            x.embeddedContainer = undefined;
            x.update();
        });
    }
    addNestedBlocks(rootBlock, depth, scale) {
        if (depth === 0)
            return;
        const nestedNodes = this.document.getContext().getLevelNode(rootBlock.id).getChildrenNodes();
        const nestedConditions = this.document.getContext().getLevelNode(rootBlock.id).getChildrenConditions();
        const childNodes = nestedNodes.concat(nestedConditions);
        let embeddedContainer = new Container();
        let blocksContainer = new Container();
        const nodes = new Map();
        const connections = new Map();
        childNodes.forEach((nodeValue) => {
            switch (nodeValue.typeName) {
                case TypeNames_1.TypeNames.LevelNode:
                    const levelNode = nodeValue;
                    const block = this.createBlockFromLevelNode(levelNode);
                    block.canDrag = false;
                    this.addNestedBlocks(block, depth - 1, scale - 0.25);
                    nodes.set(levelNode.id, block);
                    blocksContainer.addChild(block);
                    levelNode.getInputConnections().concat(levelNode.getOutputConnections()).forEach(x => {
                        if (!connections.has(x.id))
                            connections.set(x.id, x);
                    });
                    break;
                case TypeNames_1.TypeNames.Condition:
                    const iCondition = nodeValue;
                    const condition = new condition_1.Condition(iCondition.name);
                    condition.id = iCondition.id;
                    condition.setTicker(this.ticker);
                    condition.setLoader(this.loader);
                    condition.canDrag = false;
                    iCondition.getVariants().forEach(variant => {
                        const _case = new case_1.Case(variant.id, variant.text, condition);
                        condition.addCase(_case);
                        nodes.set(variant.id, _case);
                    });
                    nodes.set(iCondition.id, condition);
                    blocksContainer.addChild(condition);
                    iCondition.getInputConnections().concat(_.flatMap(iCondition.getVariants().map(v => v.getOutputConnections()))).forEach(x => {
                        if (!connections.has(x.id))
                            connections.set(x.id, x);
                    });
                    break;
                default:
                    throw new Error(`Непонятный тип ${nodeValue.typeName}`);
            }
        });
        let connectionsContatiner = new Container();
        connections.forEach((iconnection, id) => {
            const source = nodes.get(iconnection.sourceId);
            const target = nodes.get(iconnection.targetId);
            const connection = this.factoryConnection({
                sourcePort: source.getOutputPorts()[0],
                targetPort: target.getInputPort(),
                connectionId: id
            });
            connectionsContatiner.addChild(connection);
        });
        this.aligner.autoAlign(blocksContainer.children);
        embeddedContainer.addChild(connectionsContatiner, blocksContainer);
        embeddedContainer.scale.set(scale, scale);
        rootBlock.embeddedContainer = embeddedContainer;
    }
};
__decorate([
    core_1.ViewChild('pixi'),
    __metadata("design:type", Object)
], EditorComponent.prototype, "pixiContainer", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", typeof (_a = typeof Observable_1.Observable !== "undefined" && Observable_1.Observable) === "function" && _a || Object)
], EditorComponent.prototype, "navigationSource", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", typeof (_b = typeof Observable_1.Observable !== "undefined" && Observable_1.Observable) === "function" && _b || Object)
], EditorComponent.prototype, "documentSource", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", typeof (_c = typeof core_1.EventEmitter !== "undefined" && core_1.EventEmitter) === "function" && _c || Object)
], EditorComponent.prototype, "select", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", typeof (_d = typeof core_1.EventEmitter !== "undefined" && core_1.EventEmitter) === "function" && _d || Object)
], EditorComponent.prototype, "viewRootChange", void 0);
__decorate([
    core_1.HostListener('window:resize'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], EditorComponent.prototype, "onResize", null);
EditorComponent = __decorate([
    core_1.Component({
        selector: 'app-editor',
        template: __webpack_require__("../../../../../src/app/components/editor/editor.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/editor/editor.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_e = typeof core_1.NgZone !== "undefined" && core_1.NgZone) === "function" && _e || Object, typeof (_f = typeof toast_service_1.ToastService !== "undefined" && toast_service_1.ToastService) === "function" && _f || Object, typeof (_g = typeof signal_r_service_1.SignalRService !== "undefined" && signal_r_service_1.SignalRService) === "function" && _g || Object, typeof (_h = typeof data_service_1.DataService !== "undefined" && data_service_1.DataService) === "function" && _h || Object])
], EditorComponent);
exports.EditorComponent = EditorComponent;
var _a, _b, _c, _d, _e, _f, _g, _h;
//# sourceMappingURL=editor.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/editor/events/position-changed-args.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class PositionChangedArgs {
    constructor(position) {
        this.position = position;
    }
}
exports.PositionChangedArgs = PositionChangedArgs;
//# sourceMappingURL=position-changed-args.js.map

/***/ }),

/***/ "../../../../../src/app/components/editor/extract-image.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const my_extract_1 = __webpack_require__("../../../../../src/app/components/editor/my-extract.ts");
function extractImage(renderer, container) {
    const extract = new my_extract_1.MyExtract(renderer);
    return new Promise((resolve, reject) => {
        extract.canvas(container, new PIXI.Rectangle(0, 0, Math.round(container.width), Math.round(container.height))).toBlob((blob) => {
            window.open(URL.createObjectURL(blob));
            resolve();
        }, 'image/png');
    });
}
exports.extractImage = extractImage;
//# sourceMappingURL=extract-image.js.map

/***/ }),

/***/ "../../../../../src/app/components/editor/get-loader.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const loader = new PIXI.loaders.Loader();
const assets = [
    ['book', 'assets/book.png'],
    ['del', 'assets/del.png'],
    ['edu', 'assets/edu.png'],
    ['excel', 'assets/excel.png'],
    ['navisworks', 'assets/navisworks.png'],
    ['pdf', 'assets/pdf.png'],
    ['picture', 'assets/picture.png'],
    ['revit', 'assets/revit.png'],
    ['table', 'assets/table.png'],
    ['word', 'assets/word.png'],
    ['youtube', 'assets/youtube.png'],
];
function getLoader(fn) {
    let willLoadNewAssets = false;
    assets.forEach(asset => {
        if (!loader.resources[asset[0]]) {
            loader.add(asset[0], asset[1]);
            willLoadNewAssets = true;
        }
    });
    if (willLoadNewAssets) {
        loader.onComplete.add(fn);
    }
    loader.load();
    return { loader: loader, willOnComplete: willLoadNewAssets };
}
exports.getLoader = getLoader;
//# sourceMappingURL=get-loader.js.map

/***/ }),

/***/ "../../../../../src/app/components/editor/glow.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const vertex = "attribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\n\nuniform mat3 projectionMatrix;\nvarying vec2 vTextureCoord;\n\nvoid main(void){\n    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n    vTextureCoord = aTextureCoord;\n}\n";
const fragment = "varying vec2 vTextureCoord;\nvarying vec4 vColor;\n\nuniform sampler2D uSampler;\n\nuniform float distance;\nuniform float outerStrength;\nuniform float innerStrength;\nuniform vec4 glowColor;\nuniform vec4 filterArea;\nuniform vec4 filterClamp;\nvec2 px = vec2(1.0 / filterArea.x, 1.0 / filterArea.y);\n\nvoid main(void) {\n    const float PI = 3.14159265358979323846264;\n    vec4 ownColor = texture2D(uSampler, vTextureCoord);\n    vec4 curColor;\n    float totalAlpha = 0.0;\n    float maxTotalAlpha = 0.0;\n    float cosAngle;\n    float sinAngle;\n    vec2 displaced;\n    for (float angle = 0.0; angle <= PI * 2.0; angle += %QUALITY_DIST%) {\n       cosAngle = cos(angle);\n       sinAngle = sin(angle);\n       for (float curDistance = 1.0; curDistance <= %DIST%; curDistance++) {\n           displaced.x = vTextureCoord.x + cosAngle * curDistance * px.x;\n           displaced.y = vTextureCoord.y + sinAngle * curDistance * px.y;\n           curColor = texture2D(uSampler, clamp(displaced, filterClamp.xy, filterClamp.zw));\n           totalAlpha += (distance - curDistance) * curColor.a;\n           maxTotalAlpha += (distance - curDistance);\n       }\n    }\n    maxTotalAlpha = max(maxTotalAlpha, 0.0001);\n\n    ownColor.a = max(ownColor.a, 0.0001);\n    ownColor.rgb = ownColor.rgb / ownColor.a;\n    float outerGlowAlpha = (totalAlpha / maxTotalAlpha)  * outerStrength * (1. - ownColor.a);\n    float innerGlowAlpha = ((maxTotalAlpha - totalAlpha) / maxTotalAlpha) * innerStrength * ownColor.a;\n    float resultAlpha = (ownColor.a + outerGlowAlpha);\n    gl_FragColor = vec4(mix(mix(ownColor.rgb, glowColor.rgb, innerGlowAlpha / ownColor.a), glowColor.rgb, outerGlowAlpha / resultAlpha) * resultAlpha, resultAlpha);\n}\n";
/**
 * GlowFilter, originally by mishaa
 * http://www.html5gamedevs.com/topic/12756-glow-filter/?hl=mishaa#entry73578
 * http://codepen.io/mishaa/pen/raKzrm
 * ![original](../tools/screenshots/dist/original.png)![filter](../tools/screenshots/dist/glow.png)
 *
 * @class
 *
 * @extends PIXI.Filter
 * @memberof PIXI.filters
 * @param {number} [distance=10] The distance of the glow. Make it 2 times more for resolution=2. It cant be changed after filter creation
 * @param {number} [outerStrength=4] The strength of the glow outward from the edge of the sprite.
 * @param {number} [innerStrength=0] The strength of the glow inward from the edge of the sprite.
 * @param {number} [color=0xffffff] The color of the glow.
 * @param {number} [quality=0.1] A number between 0 and 1 that describes the quality of the glow.
 *
 * @example
 *  someSprite.filters = [
 *      new GlowFilter(15, 2, 1, 0xFF0000, 0.5)
 *  ];
 */
class GlowFilter extends PIXI.Filter {
    constructor(distance, outerStrength, innerStrength, color, quality) {
        if (distance === void 0)
            distance = 10;
        if (outerStrength === void 0)
            outerStrength = 4;
        if (innerStrength === void 0)
            innerStrength = 0;
        if (color === void 0)
            color = 0xffffff;
        if (quality === void 0)
            quality = 0.1;
        super(vertex, fragment
            .replace(/%QUALITY_DIST%/gi, '' + (1 / quality / distance).toFixed(7))
            .replace(/%DIST%/gi, '' + distance.toFixed(7)));
        this.uniforms.glowColor = new Float32Array([0, 0, 0, 1]);
        this.distance = distance;
        this.color = color;
        this.outerStrength = outerStrength;
        this.innerStrength = innerStrength;
    }
    get color() {
        return PIXI.utils.rgb2hex(this.uniforms.glowColor);
    }
    set color(value) {
        PIXI.utils.hex2rgb(value, this.uniforms.glowColor);
    }
    get distance() {
        return this.uniforms.distance;
    }
    set distance(value) {
        this.uniforms.distance = value;
    }
    get innerStrength() {
        return this.uniforms.innerStrength;
    }
    set innerStrength(value) {
        this.uniforms.innerStrength = value;
    }
    get outerStrength() {
        return this.uniforms.outerStrength;
    }
    set outerStrength(value) {
        this.uniforms.outerStrength = value;
    }
}
exports.GlowFilter = GlowFilter;
//# sourceMappingURL=glow.js.map

/***/ }),

/***/ "../../../../../src/app/components/editor/input.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const Subject_1 = __webpack_require__("../../../../rxjs/Subject.js");
const Observable_1 = __webpack_require__("../../../../rxjs/Observable.js");
__webpack_require__("../../../../rxjs/add/operator/buffer.js");
__webpack_require__("../../../../rxjs/add/operator/debounce.js");
__webpack_require__("../../../../rxjs/add/operator/map.js");
__webpack_require__("../../../../rxjs/add/operator/filter.js");
__webpack_require__("../../../../rxjs/add/observable/timer.js");
class MyInput {
    constructor(interactionManager, pixiContainer) {
        this.interactionManager = interactionManager;
        this.pixiContainer = pixiContainer;
        this.keymap = new Map();
        this._mousePoint = new PIXI.Point(0, 0);
        this._zoomSubject = new Subject_1.Subject();
        this._rightDragSubject = new Subject_1.Subject();
        this._mouseDownSubject = new Subject_1.Subject();
        this._mouseUpSubject = new Subject_1.Subject();
        this._mouseUpOutsideSubject = new Subject_1.Subject();
        this._mouseMoveSubject = new Subject_1.Subject();
        this._mouseOutSubject = new Subject_1.Subject();
        this._keyDownSubject = new Subject_1.Subject();
        this.onZoom = this._zoomSubject.asObservable();
        this.onRightDrag = this._rightDragSubject.asObservable();
        this.onMouseDown = this._mouseDownSubject.asObservable();
        this.onMouseUp = this._mouseUpSubject.asObservable();
        this.onMouseUpOutside = this._mouseUpOutsideSubject.asObservable();
        this.onMouseMove = this._mouseMoveSubject.asObservable();
        this.onMouseOut = this._mouseOutSubject.asObservable();
        this.onKeyDown = this._keyDownSubject.asObservable();
        this.mousePosition = new PIXI.Point();
        this.onMouseDoubleClick = this._mouseDownSubject
            .buffer(this._mouseDownSubject.debounce(x => Observable_1.Observable.timer(250)))
            .filter((list) => list.length === 2 && MyInput.mousePosThreshold(list, 1))
            .map((list) => list[0]);
        this.interactionListeners = {
            mousemove: (e) => this.handleMousemove(e),
            mousedown: (e) => this.handleMousedown(e),
            mouseup: (e) => this.handleMouseup(e),
            mouseout: (e) => this.handleMouseout(e),
            mouseupoutside: (e) => this.handleMouseupOutside(e),
            rightdown: (e) => this.handleRightMousedown(e),
            rightup: (e) => this.handleRightMouseup(e),
        };
        this.containerEventListeners = {
            keydown: (e) => this.handleKeydown(e),
            keyup: (e) => this.handleKeyup(e),
            wheel: (e) => this.handleMouseWheel(e),
            contextmenu: (e) => e.preventDefault(),
        };
        this.documentEventListeners = {
            keydown: (e) => this.keymap[e.keyCode] = true,
            keyup: (e) => this.keymap[e.keyCode] = false,
        };
        for (let event in this.interactionListeners)
            interactionManager.on(event, this.interactionListeners[event]);
        for (let event in this.containerEventListeners)
            pixiContainer.nativeElement.parentNode.addEventListener(event, this.containerEventListeners[event], false);
        for (let event in this.documentEventListeners)
            document.addEventListener(event, this.documentEventListeners[event], false);
    }
    dispose() {
        for (let event in this.interactionListeners)
            this.interactionManager.off(event, this.interactionListeners[event]);
        for (let event in this.containerEventListeners)
            this.pixiContainer.nativeElement.removeEventListener(event, this.containerEventListeners[event], false);
        for (let event in this.documentEventListeners)
            document.removeEventListener(event, this.documentEventListeners[event], false);
    }
    handleMousemove(e) {
        this._mousePoint = e.data.global;
        if (this._lastDragMousePos && this._rightMouseDown) {
            this._rightDragSubject.next({
                dx: e.data.global.x - this._lastDragMousePos.x,
                dy: e.data.global.y - this._lastDragMousePos.y
            });
            this._lastDragMousePos = e.data.global.clone();
        }
        this.mousePosition.set(e.data.global.x, e.data.global.y);
        this._mouseMoveSubject.next(e);
    }
    handleMousedown(e) {
        this._leftMouseDown = true;
        this._mouseDownSubject.next(e);
    }
    handleMouseup(e) {
        this._leftMouseDown = false;
        this._mouseUpSubject.next(e);
    }
    handleKeydown(e) {
        this.keymap[e.keyCode] = true;
        this._keyDownSubject.next(e);
    }
    handleKeyup(e) {
        this.keymap[e.keyCode] = false;
    }
    handleMouseWheel(e) {
        if (e.deltaY < 0) {
            this._zoomSubject.next(0.1);
        }
        else if (e.deltaY > 0) {
            this._zoomSubject.next(-0.1);
        }
        e.preventDefault();
    }
    handleRightMousedown(e) {
        this._rightMouseDown = true;
        this._lastDragMousePos = e.data.global.clone();
    }
    handleRightMouseup(e) {
        this._rightMouseDown = false;
        this._lastDragMousePos = undefined;
    }
    isCtrlKeyDown() {
        return this.keymap[17] === true;
    }
    isLeftMouseDown() {
        return this._leftMouseDown === true;
    }
    isRightMouseDown() {
        return this._rightMouseDown === true;
    }
    getMousePoint() {
        return this._mousePoint;
    }
    handleMouseupOutside(e) {
        this._mouseUpOutsideSubject.next(e);
    }
    handleMouseout(e) {
        this._mouseOutSubject.next(e);
    }
    isShiftKeyDown() {
        return this.keymap[16] === true;
    }
    static mousePosThreshold(list, threshold) {
        const dx = Math.abs(list[0].data.global.x - list[1].data.global.x);
        const dy = Math.abs(list[0].data.global.y - list[1].data.global.y);
        const result = dx < threshold && dy < threshold;
        if (!result)
            console.log('Double click mouse pos diff', dx, dy);
        return result;
    }
}
exports.MyInput = MyInput;
//# sourceMappingURL=input.js.map

/***/ }),

/***/ "../../../../../src/app/components/editor/my-extract.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var RenderTexture = PIXI.RenderTexture;
var Matrix = PIXI.Matrix;
const TEMP_RECT = new PIXI.Rectangle();
const BYTES_PER_PIXEL = 4;
/**
 * The extract manager provides functionality to export content from the renderers.
 *
 * An instance of this class is automatically created by default, and can be found at renderer.plugins.extract
 *
 * @class
 * @memberof PIXI.extract
 */
class MyExtract {
    /**
     * @param {PIXI.WebGLRenderer} renderer - A reference to the current renderer
     */
    constructor(renderer) {
        this.renderer = renderer;
        /**
         * Collection of methods for extracting data (image, pixels, etc.) from a display object or render texture
         *
         * @member {PIXI.extract.WebGLExtract} extract
         * @memberof PIXI.WebGLRenderer#
         * @see PIXI.extract.WebGLExtract
         */
        renderer.extract = this;
    }
    /**
     * Will return a HTML Image of the target
     *
     * @param {PIXI.DisplayObject|PIXI.RenderTexture} target - A displayObject or renderTexture
     *  to convert. If left empty will use use the main renderer
     * @return {HTMLImageElement} HTML Image of the target
     */
    image(target) {
        const image = new Image();
        image.src = this.base64(target);
        return image;
    }
    /**
     * Will return a a base64 encoded string of this target. It works by calling
     *  `WebGLExtract.getCanvas` and then running toDataURL on that.
     *
     * @param {PIXI.DisplayObject|PIXI.RenderTexture} target - A displayObject or renderTexture
     *  to convert. If left empty will use use the main renderer
     * @return {string} A base64 encoded string of the texture.
     */
    base64(target) {
        return this.canvas(target).toDataURL();
    }
    /**
     * Creates a Canvas element, renders this target to it and then returns it.
     *
     * @param {PIXI.DisplayObject|PIXI.RenderTexture} target - A displayObject or renderTexture
     *  to convert. If left empty will use use the main renderer
     * @return {HTMLCanvasElement} A Canvas element with the texture rendered on.
     */
    canvas(target, _frame = null) {
        const renderer = this.renderer;
        let textureBuffer;
        let resolution;
        let frame;
        let flipY = false;
        let renderTexture;
        frame = _frame;
        if (target) {
            if (target instanceof PIXI.RenderTexture) {
                renderTexture = target;
            }
            else {
                renderTexture = this.generateTexture(target, 0, 1);
            }
        }
        if (renderTexture) {
            textureBuffer = renderTexture.baseTexture._glRenderTargets[this.renderer.CONTEXT_UID];
            resolution = textureBuffer.resolution;
            //frame = _frame || renderTexture.frame;
            flipY = false;
        }
        else {
            textureBuffer = this.renderer.rootRenderTarget;
            resolution = textureBuffer.resolution;
            flipY = true;
            //frame = TEMP_RECT;
            // frame.width = textureBuffer.size.width;
            //frame.height = textureBuffer.size.height;
        }
        const width = frame.width * resolution;
        const height = frame.height * resolution;
        const canvasBuffer = new PIXI.CanvasRenderTarget(width, height, 1);
        if (textureBuffer) {
            // bind the buffer
            renderer.bindRenderTarget(textureBuffer);
            // set up an array of pixels
            const webglPixels = new Uint8Array(BYTES_PER_PIXEL * width * height);
            // read pixels to the array
            const gl = renderer.gl;
            gl.readPixels(frame.x * resolution, frame.y * resolution, width, height, gl.RGBA, gl.UNSIGNED_BYTE, webglPixels);
            // add the pixels to the canvas
            const canvasData = canvasBuffer.context.getImageData(0, 0, width, height);
            canvasData.data.set(webglPixels);
            canvasBuffer.context.putImageData(canvasData, 0, 0);
            // pulling pixels
            if (flipY) {
                canvasBuffer.context.scale(1, -1);
                canvasBuffer.context.drawImage(canvasBuffer.canvas, 0, -height);
            }
        }
        // send the canvas back..
        return canvasBuffer.canvas;
    }
    generateTexture(displayObject, scaleMode, resolution) {
        const bounds = displayObject.getLocalBounds();
        const renderTexture = RenderTexture.create(bounds.width | 0, bounds.height | 0, scaleMode, resolution);
        const tempMatrix = new Matrix();
        tempMatrix.tx = -bounds.x;
        tempMatrix.ty = -bounds.y;
        this.renderer.render(displayObject, renderTexture, false, tempMatrix, true);
        return renderTexture;
    }
    /**
     * Will return a one-dimensional array containing the pixel data of the entire texture in RGBA
     * order, with integer values between 0 and 255 (included).
     *
     * @param {PIXI.DisplayObject|PIXI.RenderTexture} target - A displayObject or renderTexture
     *  to convert. If left empty will use use the main renderer
     * @return {Uint8ClampedArray} One-dimensional array containing the pixel data of the entire texture
     */
    pixels(target) {
        const renderer = this.renderer;
        let textureBuffer;
        let resolution;
        let frame;
        let renderTexture;
        if (target) {
            if (target instanceof PIXI.RenderTexture) {
                renderTexture = target;
            }
            else {
                renderTexture = this.renderer.generateTexture(target);
            }
        }
        if (renderTexture) {
            textureBuffer = renderTexture.baseTexture._glRenderTargets[this.renderer.CONTEXT_UID];
            resolution = textureBuffer.resolution;
            frame = renderTexture.frame;
        }
        else {
            textureBuffer = this.renderer.rootRenderTarget;
            resolution = textureBuffer.resolution;
            frame = TEMP_RECT;
            frame.width = textureBuffer.size.width;
            frame.height = textureBuffer.size.height;
        }
        const width = frame.width * resolution;
        const height = frame.height * resolution;
        const webglPixels = new Uint8Array(BYTES_PER_PIXEL * width * height);
        if (textureBuffer) {
            // bind the buffer
            renderer.bindRenderTarget(textureBuffer);
            // read pixels to the array
            const gl = renderer.gl;
            gl.readPixels(frame.x * resolution, frame.y * resolution, width, height, gl.RGBA, gl.UNSIGNED_BYTE, webglPixels);
        }
        return webglPixels;
    }
    /**
     * Destroys the extract
     *
     */
    destroy() {
        this.renderer.extract = null;
        this.renderer = null;
    }
}
exports.MyExtract = MyExtract;
//# sourceMappingURL=my-extract.js.map

/***/ }),

/***/ "../../../../../src/app/components/editor/objects/Layouts/alignment.enum.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Alignment;
(function (Alignment) {
    Alignment[Alignment["TopLeft"] = 0] = "TopLeft";
    Alignment[Alignment["Top"] = 1] = "Top";
    Alignment[Alignment["TopRight"] = 2] = "TopRight";
    Alignment[Alignment["CenterLeft"] = 3] = "CenterLeft";
    Alignment[Alignment["Center"] = 4] = "Center";
    Alignment[Alignment["CenterRight"] = 5] = "CenterRight";
    Alignment[Alignment["BottomLeft"] = 6] = "BottomLeft";
    Alignment[Alignment["Bottom"] = 7] = "Bottom";
    Alignment[Alignment["BottomRight"] = 8] = "BottomRight";
})(Alignment = exports.Alignment || (exports.Alignment = {}));
//# sourceMappingURL=alignment.enum.js.map

/***/ }),

/***/ "../../../../../src/app/components/editor/objects/Layouts/cell.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Container = PIXI.Container;
const table_1 = __webpack_require__("../../../../../src/app/components/editor/objects/Layouts/table.ts");
const alignment_enum_1 = __webpack_require__("../../../../../src/app/components/editor/objects/Layouts/alignment.enum.ts");
var Graphics = PIXI.Graphics;
class Cell extends Container {
    constructor(table, col, row, debug = false) {
        super();
        this.curAlignment = alignment_enum_1.Alignment.TopLeft;
        this.lines = new Graphics();
        this.columnIndex = 0;
        this.rowIndex = 0;
        this.paddingLeft = 0;
        this.paddingRight = 0;
        this.paddingTop = 0;
        this.paddingBottom = 0;
        this.span = 1;
        this.isDebug = false;
        this.debugRect = new PIXI.Graphics();
        this.isDebug = debug;
        this.table = table;
        this.columnIndex = col;
        this.rowIndex = row;
        if (this.isDebug)
            this.drawDebug();
    }
    add(obj) {
        this.removeChild(this.curObj);
        this.curObj = obj;
        this.addChild(obj);
        return this;
    }
    //region Align
    align(align) {
        switch (align) {
            case alignment_enum_1.Alignment.TopLeft:
                this.alignTopLeft();
                break;
            case alignment_enum_1.Alignment.Top:
                this.alignTop();
                break;
            case alignment_enum_1.Alignment.TopRight:
                this.alignTopRight();
                break;
            case alignment_enum_1.Alignment.BottomLeft:
                this.alignBottomLeft();
                break;
            case alignment_enum_1.Alignment.Bottom:
                this.alignBottom();
                break;
            case alignment_enum_1.Alignment.BottomRight:
                this.alignBottomRight();
                break;
            case alignment_enum_1.Alignment.CenterLeft:
                this.alignCenterLeft();
                break;
            case alignment_enum_1.Alignment.Center:
                this.alignCenter();
                break;
            case alignment_enum_1.Alignment.CenterRight:
                this.alignCenterRight();
                break;
        }
        return this;
    }
    alignTopLeft() {
        this.curAlignment = alignment_enum_1.Alignment.TopLeft;
        this.curObj.x = this.paddingLeft;
        this.curObj.y = this.paddingTop;
        return this;
    }
    alignTop() {
        this.curAlignment = alignment_enum_1.Alignment.Top;
        this.curObj.x = (this.width - this.curObj.width) / 2;
        this.curObj.y = this.paddingTop;
        return this;
    }
    alignTopRight() {
        this.curAlignment = alignment_enum_1.Alignment.TopRight;
        this.curObj.x = this.width - this.curObj.width - this.paddingRight;
        this.curObj.y = this.paddingTop;
        return this;
    }
    alignBottomLeft() {
        this.curAlignment = alignment_enum_1.Alignment.BottomLeft;
        this.curObj.x = this.paddingLeft;
        this.curObj.y = this.height - this.curObj.height - this.paddingBottom;
        return this;
    }
    alignBottom() {
        this.curAlignment = alignment_enum_1.Alignment.Bottom;
        this.curObj.x = (this.width - this.curObj.width) / 2;
        this.curObj.y = this.height - this.curObj.height - this.paddingBottom;
        return this;
    }
    alignBottomRight() {
        this.curAlignment = alignment_enum_1.Alignment.BottomRight;
        this.curObj.x = this.width - this.curObj.width - this.paddingRight;
        this.curObj.y = this.height - this.curObj.height - this.paddingBottom;
        return this;
    }
    alignCenterLeft() {
        this.curAlignment = alignment_enum_1.Alignment.CenterLeft;
        this.curObj.x = this.paddingLeft;
        this.curObj.y = (this.height - this.curObj.height) / 2;
        return this;
    }
    alignCenter() {
        this.curAlignment = alignment_enum_1.Alignment.Center;
        this.curObj.x = (this.width - this.curObj.width) / 2;
        this.curObj.y = (this.height - this.curObj.height) / 2;
        return this;
    }
    alignCenterRight() {
        this.curAlignment = alignment_enum_1.Alignment.CenterRight;
        this.curObj.x = this.width - this.curObj.width - this.paddingRight;
        this.curObj.y = (this.height - this.curObj.height) / 2;
        return this;
    }
    //endregion
    //region Padding
    padLeft(pad) {
        this.paddingLeft = pad;
        this.pad();
        return this;
    }
    padRight(pad) {
        this.paddingRight = pad;
        this.pad();
        return this;
    }
    padTop(pad) {
        this.paddingTop = pad;
        this.pad();
        return this;
    }
    padBottom(pad) {
        this.paddingBottom = pad;
        this.pad();
        return this;
    }
    padAll(pad) {
        this.padLeft(pad);
        this.padRight(pad);
        this.padTop(pad);
        this.padBottom(pad);
        return this;
    }
    pad() {
        let width = this.curObj.width + this.paddingLeft + this.paddingRight;
        let height = this.curObj.height + this.paddingTop + this.paddingBottom;
        this.setSize(width, height);
    }
    //endregion
    colspan(i) {
        this.span = i;
        this.table.colspan(i);
        return this;
    }
    setSize(width, height) {
        // width += this.paddingLeft + this.paddingRight;
        // height += this.paddingTop + this.paddingBottom;
        const smallTexture = PIXI.RenderTexture.create(width, height);
        this.size = new PIXI.Sprite(smallTexture);
        this.children.forEach(x => this.removeChild(x));
        this.addChild(this.size);
        if (this.isDebug)
            this.drawDebug();
        this.add(this.curObj);
        this.update();
    }
    update() {
        // this.pad();
        this.align(this.curAlignment);
    }
    drawDebug() {
        this.debugRect.lineStyle(1, 0xFF0000);
        this.debugRect.drawRect(0, 0, this.width, this.height);
        this.addChild(this.debugRect);
    }
    debug(debug) {
        this.isDebug = debug;
        this.children.forEach(x => this.removeChild(x));
        this.addChild(this.size);
        if (debug)
            this.drawDebug();
        this.add(this.curObj);
        if (this.curObj instanceof table_1.Table)
            this.curObj.debug(debug);
    }
    drawLines() {
        this.lines.clear();
        this.lines.lineStyle(1);
        if (this.rowIndex === 0) {
            this.lines.moveTo(0, 0);
            this.lines.lineTo(this.width, 0);
        }
        if (this.rowIndex !== this.table.rowsCount - 1) {
            this.lines.moveTo(0, this.height);
            this.lines.lineTo(this.width, this.height);
        }
        else
            this.lines.moveTo(this.width, this.height);
        if (this.span !== this.table.columnsCount)
            this.lines.lineTo(this.width, 0);
        this.addChild(this.lines);
    }
}
exports.Cell = Cell;
//# sourceMappingURL=cell.js.map

/***/ }),

/***/ "../../../../../src/app/components/editor/objects/Layouts/table.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Container = PIXI.Container;
const cell_1 = __webpack_require__("../../../../../src/app/components/editor/objects/Layouts/cell.ts");
class Table extends Container {
    constructor() {
        super(...arguments);
        this.curCol = 0;
        this.curRow = 0;
        this.cells = [[]];
    }
    get cellsCount() {
        return this.cells.reduce((a, b) => a.concat(b)).length;
    }
    get columnsCount() {
        return this.cells.map(x => x.length)
            .reduce((a, b) => Math.max(a, b));
    }
    get rowsCount() {
        return this.cells.length;
    }
    add(obj) {
        let cell = new cell_1.Cell(this, this.curCol, this.curRow);
        cell.add(obj);
        this.cells[this.curRow].push(cell);
        this.curCol++;
        this.addChild(cell);
        return cell;
    }
    addText(str) {
        let cell = new cell_1.Cell(this, this.curCol, this.curRow);
        cell.add(new PIXI.Text(str));
        this.cells[this.curRow].push(cell);
        this.curCol++;
        this.addChild(cell);
        return cell;
    }
    row() {
        if (this.cells.length > 1 && !this.checkRows()) {
            throw new Error('Не одинаковое количество колонок');
        }
        this.curRow++;
        this.curCol = 0;
        this.cells.push([]);
        return this;
    }
    checkRows() {
        return this.cells.map(cr => cr.map(c => c.span).reduce((a, b) => a + b))
            .every((x, i, a) => x === a[0]);
    }
    colspan(i) {
        this.curCol += i - 1;
    }
    build() {
        let curX = 0;
        let curY = 0;
        for (let row = 0; row < this.cells.length; row++) {
            for (let col = 0; col < this.cells[row].length; col++) {
                var cell = this.cells[row][col];
                let maxHeight = this.getRowHeight(row);
                // let maxWidth = this.getColumnWidth(col);
                let maxWidth = this.getColumnWidthWithSpan(cell.columnIndex, cell.span);
                cell.setSize(maxWidth, maxHeight);
                cell.position.set(curX, curY);
                curX += cell.width;
            }
            curX = 0;
            curY += cell.height;
        }
    }
    build2(drawLines = false) {
        let curX = 0;
        let curY = 0;
        let allCells = this.cells.reduce((a, b) => a.concat(b));
        let numberOfCols = this.columnsCount;
        let colWidths = [];
        for (let i = 0; i < numberOfCols; i++) {
            colWidths.push(this.getColumnWidth(i));
        }
        let rowHeights = [];
        for (let i = 0; i < this.cells.length; i++) {
            rowHeights.push(this.getRowHeight(i));
        }
        allCells.forEach(cell => {
            let width = 0;
            for (let i = cell.columnIndex; i < cell.columnIndex + cell.span; i++) {
                width += colWidths[i];
            }
            cell.setSize(width, rowHeights[cell.rowIndex]);
        });
        for (let row = 0; row < this.cells.length; row++) {
            for (let col = 0; col < this.cells[row].length; col++) {
                var cell = this.cells[row][col];
                cell.position.set(curX, curY);
                curX += cell.width;
            }
            curX = 0;
            curY += cell.height;
        }
        if (drawLines) {
            this.cells.reduce((a, b) => a.concat(b)).forEach((x, i, a) => {
                if (i !== a.length - 1)
                    x.drawLines();
            });
        }
    }
    getRowHeight(row) {
        return this.cells[row].map(x => x.height)
            .reduce((a, b) => Math.max(a, b));
    }
    getColumnWidthWithSpan(col, span) {
        let result = 0;
        for (let i = 0; i < span; i++) {
            result += this.getColumnWidth(col + i);
        }
        return result;
    }
    getColumnWidth(col) {
        let widths = [];
        this.cells.reduce((a, b) => a.concat(b))
            .filter(x => x.columnIndex === col)
            .forEach(c => {
            // if (c.span === 1) {
            let result = c.width;
            widths.push(result);
            // }
        });
        return widths.reduce((a, b) => Math.max(a, b));
    }
    debug(debug) {
        if (debug)
            this.cells.forEach(r => r.forEach(c => c.debug(debug)));
    }
}
exports.Table = Table;
//# sourceMappingURL=table.js.map

/***/ }),

/***/ "../../../../../src/app/components/editor/objects/aligner.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Point = PIXI.Point;
const simple_block_1 = __webpack_require__("../../../../../src/app/components/editor/objects/simple-block.ts");
class Aligner {
    constructor() {
        this.distance = 50;
        this.stack = [];
    }
    alignHorizontal(objects) {
        let y = objects[0].getGlobalPosition().y;
        objects.forEach(x => {
            let p = x.getGlobalPosition();
            p.y = y;
            let newP = x.parent.toLocal(p);
            x.setPosition(newP);
        });
    }
    alignHorizontalCenter(objects) {
        let y = objects[0].getGlobalPosition().y + objects[0].height / 2;
        objects.forEach(x => {
            let p = x.getGlobalPosition();
            p.y = y - x.height / 2;
            let newP = x.parent.toLocal(p);
            x.setPosition(newP);
        });
    }
    alignVertical(objects) {
        let x = objects[0].getGlobalPosition().x;
        objects.forEach(o => {
            let p = o.getGlobalPosition();
            p.x = x;
            let newP = o.parent.toLocal(p);
            o.setPosition(newP);
        });
    }
    alignVerticalCenter(objects) {
        let x = objects[0].getGlobalPosition().x + objects[0].width / 2;
        objects.forEach(o => {
            let p = o.getGlobalPosition();
            p.x = x - o.width / 2;
            let newP = o.parent.toLocal(p);
            o.setPosition(newP);
        });
    }
    distributeHorizontal(objects, sortByX = true) {
        if (sortByX)
            objects = objects.sort(this.sortX);
        for (let i = 1; i < objects.length; i++) {
            let newP = new Point(objects[i - 1].x + objects[i - 1].width + this.distance, objects[i].y);
            objects[i].setPosition(newP);
        }
    }
    distributeVertical(objects, sortByY = true) {
        if (sortByY)
            objects = objects.sort(this.sortY);
        for (let i = 1; i < objects.length; i++) {
            let newP = new Point(objects[i].x, objects[i - 1].y + objects[i - 1].height + this.distance);
            objects[i].setPosition(newP);
        }
    }
    autoAlign(objects) {
        let rootObjs = this.getRootObjects(objects);
        let y = 0;
        rootObjs.forEach((x, i) => {
            let newP = new Point(0, y);
            x.setPosition(newP);
            let branchHeight = this.setNext(x, objects);
            y += branchHeight + this.distance;
        });
        this.stack = [];
    }
    getRootObjects(objects) {
        return objects.filter(x => x instanceof simple_block_1.SimpleBlock && !x.getInputPort().hasConnections());
    }
    setNext(x, objects) {
        let delta = 0;
        let ports = x.getOutputPorts().filter(p => p.hasConnections());
        ports.forEach(p => {
            p.getConnections().forEach(c => {
                let node = c.targetPort.parentBlock;
                if (this.stack.indexOf(node) === -1) {
                    let X = x.x + x.width + this.distance;
                    let Y = x.y + delta;
                    let point = new Point(X, Y);
                    delta += node.height + this.distance;
                    node.setPosition(point);
                    this.stack.push(node);
                    if (node.getOutputPorts().filter(p => p.hasConnections()).length > 0)
                        this.setNext(node, objects);
                }
            });
        });
        return delta === 0 ? x.height : delta;
    }
    sortX(a, b) {
        if (a.x > b.x)
            return 1;
        else if (a.x < b.x)
            return -1;
        else
            return 0;
    }
    sortY(a, b) {
        if (a.y > b.y)
            return 1;
        else if (a.y < b.y)
            return -1;
        else
            return 0;
    }
}
exports.Aligner = Aligner;
//# sourceMappingURL=aligner.js.map

/***/ }),

/***/ "../../../../../src/app/components/editor/objects/button.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Sprite = PIXI.Sprite;
class Button extends PIXI.Container {
    constructor(name, click) {
        super();
        this.s = 1;
        this.down = delta => this.scaleDown(delta);
        this.up = delta => this.scaleUp(delta);
        this._name = name;
        this._click = click;
    }
    start() {
        if (!this.loader)
            throw new Error('Loader not set');
        if (!this.ticker)
            throw new Error('Ticker not set');
        this.sprite = new Sprite(this.loader.resources[this._name].texture);
        this.sprite.width = 32;
        this.sprite.height = 32;
        this.sprite.interactive = true;
        this.sprite.on('pointerout', e => {
            this.ticker.remove(this.up);
            this.ticker.add(this.down);
        });
        this.sprite.on('pointerover', e => {
            this.ticker.remove(this.down);
            this.ticker.add(this.up);
        });
        this.addChild(this.sprite);
        this.sprite.on('click', (e) => this._click());
    }
    setTicker(ticker) {
        this.ticker = ticker;
    }
    setLoader(loader) {
        this.loader = loader;
    }
    scaleUp(delta) {
        this.s += 0.1 * delta;
        this.sprite.scale.set(this.s, this.s);
        if (this.s >= 1.5) {
            this.ticker.remove(this.up);
        }
    }
    scaleDown(delta) {
        this.s -= 0.2 * delta;
        this.sprite.scale.set(this.s, this.s);
        if (this.s <= 1) {
            this.sprite.scale.set(1, 1);
            this.ticker.remove(this.down);
        }
    }
}
exports.Button = Button;
//# sourceMappingURL=button.js.map

/***/ }),

/***/ "../../../../../src/app/components/editor/objects/case.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const port_1 = __webpack_require__("../../../../../src/app/components/editor/objects/port.ts");
const table_1 = __webpack_require__("../../../../../src/app/components/editor/objects/Layouts/table.ts");
var Container = PIXI.Container;
class Case extends Container {
    constructor(id, title, parent) {
        super();
        this.id = id;
        this.title = title;
        this.port = new port_1.Port(parent, port_1.PortOrientation.Right);
        this.port.isInput = false;
        let t = new table_1.Table();
        t.addText(this.title).alignCenterRight().padRight(5);
        t.add(this.port).padTop(20);
        t.build2();
        this.addChild(t);
    }
    update(title) {
        this.removeChildren();
        this.title = title;
        let t = new table_1.Table();
        t.addText(this.title).alignCenterRight().padRight(5);
        t.add(this.port).padTop(20);
        t.build2();
        this.addChild(t);
    }
    getOutputPorts() {
        return [this.port];
    }
}
exports.Case = Case;
//# sourceMappingURL=case.js.map

/***/ }),

/***/ "../../../../../src/app/components/editor/objects/condition.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const editor_object_1 = __webpack_require__("../../../../../src/app/components/editor/objects/editor-object.ts");
const port_1 = __webpack_require__("../../../../../src/app/components/editor/objects/port.ts");
const table_1 = __webpack_require__("../../../../../src/app/components/editor/objects/Layouts/table.ts");
class Condition extends editor_object_1.EditorObject {
    constructor(title) {
        super();
        this.title = title;
        this.outPorts = [];
        this.cases = [];
        this.interactive = true;
        this.addListener('added', e => {
            this.update();
        });
    }
    addCase(_case) {
        this.cases.push(_case);
        this.update();
    }
    getName() {
        return this.title;
    }
    dispose() {
        // TODO: удалить подписки и тикеры
    }
    update() {
        this.removeChildren();
        let condition = this.createCondition();
        let cases = this.createCases();
        let box = this.createBox(condition, cases);
        cases.position.set(box.width - cases.width + 10, condition.height);
        this.addChild(box, condition, cases);
    }
    createCondition() {
        let t = new table_1.Table();
        if (!this.inPort) {
            this.inPort = new port_1.Port(this, port_1.PortOrientation.Left);
        }
        this.inPort.isInput = true;
        t.add(this.inPort).padTop(20);
        t.addText(this.title).alignCenterLeft();
        t.build2();
        return t;
    }
    createCases() {
        let table = new table_1.Table();
        this.outPorts = [];
        this.cases.forEach((x, i, a) => {
            table.add(x).alignCenterRight();
            if (i < a.length - 1)
                table.row();
        });
        table.build2();
        return table;
    }
    createBox(condition, cases) {
        let box = this.box = new PIXI.Graphics();
        let height = condition.height + cases.height;
        let width = condition.width >= cases.width ? condition.width : cases.width;
        box.beginFill(0xffe311);
        box.lineStyle(1);
        box.drawRoundedRect(0, 0, width, height, 10);
        box.endFill();
        return box;
    }
}
exports.Condition = Condition;
//# sourceMappingURL=condition.js.map

/***/ }),

/***/ "../../../../../src/app/components/editor/objects/connection.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Graphics = PIXI.Graphics;
__webpack_require__("../../../../rxjs/add/operator/startWith.js");
__webpack_require__("../../../../rxjs/add/operator/merge.js");
const delete_button_1 = __webpack_require__("../../../../../src/app/components/editor/objects/delete-button.ts");
class Connection extends PIXI.Container {
    constructor(_p1, _p2) {
        super();
        this.btnScale = 1;
        this.tickerCounter = 0;
        this.isSelected = false;
        this.fun = (delta) => this.tick(delta);
        this._started = false;
        if (_p1.isInput === _p2.isInput)
            throw new Error('Оба порта одинаковые, нельзя так подключать');
        this.interactive = true;
        let [targetPort, sourcePort] = _p1.isInput ? [_p1, _p2] : [_p2, _p1];
        this.targetPort = targetPort;
        this.sourcePort = sourcePort;
        if (sourcePort.isInput)
            throw new Error();
        if (!targetPort.isInput)
            throw new Error();
        if (this.sourcePort.isInput)
            throw new Error();
        if (!this.targetPort.isInput)
            throw new Error();
        targetPort.addConnection(this);
        sourcePort.addConnection(this);
        this.curve = new Graphics();
        this.addChild(this.curve);
    }
    start() {
        if (!this.loader)
            throw new Error('Loader not set');
        if (!this.ticker)
            throw new Error('Ticker not set');
        this._started = true;
        this.createDeleteButton();
        this.updateSubscription = this.targetPort.parentBlock.onPositionChanged.merge(this.sourcePort.parentBlock.onPositionChanged).startWith(null).subscribe(e => this.update());
        this.addListener('added', e => this.update());
    }
    setLoader(loader) {
        this.loader = loader;
    }
    setTicker(ticker) {
        this.ticker = ticker;
    }
    dispose() {
        this.filters = [];
        this.clearPorts();
        this.updateSubscription.unsubscribe();
        this.removeDeleteButton();
    }
    setSelected(value) {
        this.isSelected = value;
        if (value) {
            this.showDelBtn();
        }
        else {
            this.removeDeleteButton();
        }
        this.update();
    }
    clearPorts() {
        this.targetPort.removeConnection(this);
        this.sourcePort.removeConnection(this);
    }
    update() {
        if (this.targetPort.getConnections().indexOf(this) < 0)
            throw new Error();
        if (this.sourcePort.getConnections().indexOf(this) < 0)
            throw new Error();
        const targetPortGlobalPos = this.targetPort.getGlobalPosition();
        const sourcePortGlobalPos = this.sourcePort.getGlobalPosition();
        let num1 = 0.75 * Math.abs(sourcePortGlobalPos.y - targetPortGlobalPos.y);
        let num2 = Math.abs(0.5 * (sourcePortGlobalPos.x - targetPortGlobalPos.x));
        if (num2 < num1)
            num2 = num1;
        const cp1Global = new PIXI.Point(targetPortGlobalPos.x - num2, targetPortGlobalPos.y);
        const cp2Global = new PIXI.Point(sourcePortGlobalPos.x + num2, sourcePortGlobalPos.y);
        const port1LocalPos = this.toLocal(targetPortGlobalPos);
        const cp1Local = this.toLocal(cp1Global);
        const cp2Local = this.toLocal(cp2Global);
        const port2LocalPos = this.toLocal(sourcePortGlobalPos);
        this.curve.clear();
        this.curve.lineStyle(this.isSelected ? 5 : 3, this.isSelected ? 0xff4500 : 0x3355ee);
        this.curve.moveTo(port1LocalPos.x + 10, port1LocalPos.y);
        this.curve.bezierCurveTo(cp1Local.x, cp1Local.y, cp2Local.x, cp2Local.y, port2LocalPos.x - 10, port2LocalPos.y);
        if (this.deleteButton)
            this.calcBtnPosition();
    }
    getMiddlePoint() {
        let point = new PIXI.Point();
        let a = this.targetPort.getGlobalPosition();
        let b = this.sourcePort.getGlobalPosition();
        point.x = (a.x + b.x) / 2;
        point.y = (a.y + b.y) / 2;
        return this.toLocal(point);
    }
    showDelBtn() {
        if (!this.deleteButton)
            this.createDeleteButton();
        this.calcBtnPosition();
        this.addChild(this.deleteButton);
        if (this.ticker) {
            this.ticker.remove((this.fun));
            this.ticker.add(this.fun);
        }
    }
    removeDeleteButton() {
        this.removeChild(this.deleteButton);
        if (this.ticker)
            this.ticker.remove(this.fun);
        this.tickerCounter = Math.random() * 100;
    }
    calcBtnPosition() {
        let p = this.getMiddlePoint();
        this.deleteButton.position.set(p.x, p.y);
    }
    tick(delta) {
        this.btnScale = (Math.sin(this.tickerCounter += delta / 20) + 1) * 0.15 + 0.6;
        this.deleteButton.scale.set(this.btnScale, this.btnScale);
    }
    createDeleteButton() {
        if (!this.loader)
            throw new Error('Loader is not set');
        this.deleteButton = new delete_button_1.DeleteButton(this.loader.resources.del.texture, this.id);
        this.deleteButton.width = 32;
        this.deleteButton.height = 32;
        this.deleteButton.pivot = new PIXI.Point(16, 16);
        this.deleteButton.interactive = true;
        this.deleteButton.buttonMode = true;
    }
}
exports.Connection = Connection;
//# sourceMappingURL=connection.js.map

/***/ }),

/***/ "../../../../../src/app/components/editor/objects/delete-button.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class DeleteButton extends PIXI.Sprite {
    constructor(texture, connectionId) {
        super(texture);
        this.connectionId = connectionId;
    }
}
exports.DeleteButton = DeleteButton;
//# sourceMappingURL=delete-button.js.map

/***/ }),

/***/ "../../../../../src/app/components/editor/objects/editor-object.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const Subject_1 = __webpack_require__("../../../../rxjs/Subject.js");
const position_changed_args_1 = __webpack_require__("../../../../../src/app/components/editor/events/position-changed-args.ts");
const port_1 = __webpack_require__("../../../../../src/app/components/editor/objects/port.ts");
const glow_1 = __webpack_require__("../../../../../src/app/components/editor/glow.ts");
var Container = PIXI.Container;
class EditorObject extends PIXI.Container {
    constructor() {
        super();
        this.isSelected = false;
        this._positionChangedSubject = new Subject_1.Subject();
        this.onPositionChanged = this._positionChangedSubject.asObservable();
        this.canDrag = true;
        this._color = 0xFFFFFF;
    }
    get color() {
        var bbggrr = ("000000" + this._color.toString(16)).slice(-6);
        var rrggbb = bbggrr.substr(4, 2) + bbggrr.substr(2, 2) + bbggrr.substr(0, 2);
        return "#" + rrggbb;
    }
    set color(hex) {
        hex = hex.substring(1);
        this._color = parseInt(hex, 16);
    }
    setTicker(ticker) {
        this.ticker = ticker;
    }
    setLoader(loader) {
        if (!loader)
            throw new Error('Loader is null');
        this.loader = loader;
    }
    dispose() {
        this.filters = [];
    }
    setPosition(point) {
        this.x = point.x;
        this.y = point.y;
        this._positionChangedSubject.next(new position_changed_args_1.PositionChangedArgs(point.clone()));
    }
    setSelected(isSelected) {
        if (isSelected && !this.isSelected) {
            this.selectConnections();
            this.filters = [new glow_1.GlowFilter(10, 2, 0, 0x0099ff, 0.5)];
        }
        else if (!isSelected && this.isSelected) {
            this.deselectConnections();
            this.filters = [];
        }
        this.isSelected = isSelected;
    }
    get selected() {
        return this.isSelected;
    }
    selectConnections() {
        this.getAllPorts().filter(x => x.hasConnections())
            .forEach(x => x.getConnections().forEach(c => c.setSelected(true)));
    }
    deselectConnections() {
        this.getAllPorts().filter(x => x.hasConnections())
            .forEach(x => x.getConnections().forEach(c => c.setSelected(false)));
    }
    hasConnenctions() {
        return this.getAllPorts().filter(x => x.hasConnections()).length > 0;
    }
    getInputPort() {
        return this.getPorts(this).filter(x => x.isInput)[0];
    }
    getOutputPorts() {
        return this.getPorts(this).filter(x => !x.isInput);
    }
    getAllPorts() {
        return this.getPorts(this);
    }
    getPorts(obj) {
        let result = [];
        obj.children.forEach(x => {
            if (x instanceof port_1.Port) {
                result.push(x);
            }
            else if (x instanceof Container) {
                result = result.concat(this.getPorts(x));
            }
        });
        return result;
    }
}
exports.EditorObject = EditorObject;
//# sourceMappingURL=editor-object.js.map

/***/ }),

/***/ "../../../../../src/app/components/editor/objects/phantom-connection.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Graphics = PIXI.Graphics;
var Container = PIXI.Container;
var Point = PIXI.Point;
class PhantomConnection extends Container {
    constructor() {
        super();
        this.curve = new Graphics();
        this.addChild(this.curve);
    }
    hide() {
        this.curve.clear();
        this.p1 = null;
    }
    setPort(p1) {
        this.p1 = p1;
    }
    isActive() {
        return !!this.p1;
    }
    update(b) {
        if (!this.p1)
            return;
        let c2;
        let c1;
        let a = this.p1.getGlobalPosition();
        c1 = new PIXI.Point(b.x - (b.x - a.x) / 2, a.y);
        c2 = new PIXI.Point(a.x + (b.x - a.x) / 2, b.y);
        a = this.toLocal(a);
        c1 = this.toLocal(c1);
        c2 = this.toLocal(c2);
        b = this.toLocal(b);
        this.curve.clear();
        let vvv = Math.sqrt(Math.pow(a.x - b.x, 2) + Math.pow(a.y - b.y, 2));
        let step = 1 / (vvv / 10);
        let delta = step * 0.3;
        step -= delta;
        for (let i = 0; i <= 1; i += step + delta) {
            let lp1 = PhantomConnection.bezier4(a, c1, c2, b, i);
            let lp2 = PhantomConnection.bezier4(a, c1, c2, b, i + step);
            this.curve.lineStyle(2, 0x111133);
            this.curve.moveTo(lp1.x, lp1.y);
            this.curve.lineTo(lp2.x, lp2.y);
        }
    }
    static bezier4(p1, p2, p3, p4, mu) {
        let mum1, mum13, mu3;
        let p = new PIXI.Point();
        mum1 = 1 - mu;
        mum13 = mum1 * mum1 * mum1;
        mu3 = mu * mu * mu;
        p.x = mum13 * p1.x + 3 * mu * mum1 * mum1 * p2.x + 3 * mu * mu * mum1 * p3.x + mu3 * p4.x;
        p.y = mum13 * p1.y + 3 * mu * mum1 * mum1 * p2.y + 3 * mu * mu * mum1 * p3.y + mu3 * p4.y;
        return p;
    }
    getLength(p0, p1, p2) {
        const a = new Point(p0.x - 2 * p1.x + p2.x, p0.y - 2 * p1.y + p2.y);
        const b = new Point(2 * p1.x - 2 * p0.x, 2 * p1.y - 2 * p0.y);
        const A = 4 * (a.x * a.x + a.y * a.y);
        const B = 4 * (a.x * b.x + a.y * b.y);
        const C = b.x * b.x + b.y * b.y;
        const Sabc = 2 * Math.sqrt(A + B + C);
        const A_2 = Math.sqrt(A);
        const A_32 = 2 * A * A_2;
        const C_2 = 2 * Math.sqrt(C);
        const BA = B / A_2;
        return (A_32 * Sabc + A_2 * B * (Sabc - C_2) + (4 * C * A - B * B) * Math.log((2 * A_2 + BA + Sabc) / (BA + C_2))) / (4 * A_32);
    }
}
exports.PhantomConnection = PhantomConnection;
//# sourceMappingURL=phantom-connection.js.map

/***/ }),

/***/ "../../../../../src/app/components/editor/objects/port.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const glow_1 = __webpack_require__("../../../../../src/app/components/editor/glow.ts");
class Port extends PIXI.Graphics {
    constructor(parent, orientation = PortOrientation.Left) {
        super();
        this.parent = parent;
        this.isInput = false;
        this.connections = [];
        this._color = 0x00aa33;
        this.parentBlock = parent;
        this.orientation = orientation;
        this.update();
        this.interactive = true;
        this.buttonMode = true;
        this.addListener('mouseover', e => {
            this.filters = [new glow_1.GlowFilter(10, 5, 0, 0xdd11ff, 0.6)];
        });
        this.addListener('mouseout', e => {
            this.filters = [];
        });
    }
    get color() {
        return this._color;
    }
    set color(c) {
        this._color = c;
        this.update();
    }
    dispose() {
        this.filters = [];
    }
    addConnection(connection) {
        if (this.connections.indexOf(connection) !== -1)
            throw new Error('Соединение уже есть в порте');
        this.connections.push(connection);
    }
    removeConnection(connection) {
        if (this.connections.indexOf(connection) === -1)
            throw new Error('Такого соединения нет в порте');
        this.connections.splice(this.connections.indexOf(connection), 1);
    }
    getConnections() {
        return this.connections;
    }
    hasConnection(connection) {
        return this.connections.indexOf(connection) !== -1;
    }
    hasConnections() {
        return this.connections.length > 0;
    }
    update() {
        this.beginFill(this.color);
        this.lineStyle(2);
        const angle = this.getAngle(this.orientation);
        this.arc(0, 0, 10, angle, Math.PI + angle);
        this.endFill();
    }
    getAngle(orientation) {
        switch (orientation) {
            case PortOrientation.Left:
                return Math.PI / 2;
            case PortOrientation.Right:
                return Math.PI / 2 + Math.PI;
            default:
                return Math.PI / 2;
        }
    }
}
exports.Port = Port;
var PortOrientation;
(function (PortOrientation) {
    PortOrientation[PortOrientation["Left"] = 0] = "Left";
    PortOrientation[PortOrientation["Right"] = 1] = "Right";
})(PortOrientation = exports.PortOrientation || (exports.PortOrientation = {}));
//# sourceMappingURL=port.js.map

/***/ }),

/***/ "../../../../../src/app/components/editor/objects/selection-frame.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class SelectionFrame extends PIXI.Graphics {
    constructor(startPoint) {
        super();
        this.startPoint = startPoint;
    }
    update(currentPoint) {
        this.clear();
        let width = currentPoint.x - this.startPoint.x;
        let height = currentPoint.y - this.startPoint.y;
        this.frameWidth = Math.abs(width);
        this.frameHeight = Math.abs(height);
        this.lineStyle(1, 0x002277);
        this.beginFill(0x0000ff, 0.05);
        this.drawRect(this.startPoint.x, this.startPoint.y, width, height);
        this.endFill();
        this.endPoint = currentPoint.clone();
        this.direction = { down: height > 0, right: width > 0 };
    }
    getRect() {
        if (!this.endPoint)
            return null;
        return new PIXI.Rectangle(Math.min(this.startPoint.x, this.endPoint.x), Math.min(this.startPoint.y, this.endPoint.y), this.frameWidth, this.frameHeight);
    }
}
exports.SelectionFrame = SelectionFrame;
//# sourceMappingURL=selection-frame.js.map

/***/ }),

/***/ "../../../../../src/app/components/editor/objects/simple-block.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const port_1 = __webpack_require__("../../../../../src/app/components/editor/objects/port.ts");
const editor_object_1 = __webpack_require__("../../../../../src/app/components/editor/objects/editor-object.ts");
const table_1 = __webpack_require__("../../../../../src/app/components/editor/objects/Layouts/table.ts");
const button_1 = __webpack_require__("../../../../../src/app/components/editor/objects/button.ts");
var Container = PIXI.Container;
class SimpleBlock extends editor_object_1.EditorObject {
    constructor() {
        super();
        this.inputReqs = [];
        this.outputReqs = [];
        this.blockName = 'pupsik\r\nshmupsik\r\nepta';
        this.blockCode = 'ПД.ОДИ.Б1.Э1';
        this.blockRole = 'АР_ВС';
        this.blockHours = 10000;
        this.interactive = true;
    }
    getName() {
        return this.blockName;
    }
    start() {
        if (!this.loader)
            throw new Error('Loader not set');
        if (!this.ticker)
            throw new Error('Ticker not set');
        this.addListener('added', e => {
            this.update();
        });
    }
    dispose() {
        // TODO: удалить подписки и тикеры
    }
    addInputReq(req) {
        this.inputReqs.push(req);
        return this;
    }
    addOutputReq(req) {
        this.outputReqs.push(req);
        return this;
    }
    update() {
        if (this.embeddedContainer) {
            this.embeddedContainer.children.filter(x => x instanceof SimpleBlock).forEach(x => x.update());
        }
        this.removeChildren();
        this.createEmbeddedContainer();
        let root = this.createMainContent();
        let reqs = this.createReqs(root);
        root.position.set(0, Math.max(reqs[0].height, reqs[1].height));
        let box = this.createBox(root, reqs[0], reqs[1]);
        this.createPorts(root, reqs[0], reqs[1]);
        this.addChild(this.inPort, this.outPort, box, ...reqs, root);
    }
    createReqs(rootTable) {
        let inputReqs = new table_1.Table();
        for (let req of this.inputReqs) {
            inputReqs.add(req);
            inputReqs.row();
        }
        if (inputReqs.cellsCount > 0) {
            inputReqs.build2();
            inputReqs.position.set(0, 0);
        }
        let outputReqs = new table_1.Table();
        for (let req of this.outputReqs) {
            outputReqs.add(req);
            outputReqs.row();
        }
        if (outputReqs.cellsCount > 0) {
            outputReqs.build2();
            outputReqs.position.set(rootTable.width, 0);
        }
        return [inputReqs, outputReqs];
    }
    createMainContent() {
        let table = new table_1.Table();
        table.addText(this.blockName).alignCenter().colspan(3);
        table.row();
        if (this.embeddedContainer.children.length > 0) {
            table.add(this.embeddedContainer).colspan(3).alignCenter().padAll(20);
            table.row();
        }
        table.addText(this.blockCode).alignCenter(); //.separtor();
        table.addText(this.blockRole).alignCenter(); //.separtor();
        table.addText(this.blockHours.toString()).alignCenter();
        table.row();
        this.loadImg(table);
        table.build2(true);
        return table;
    }
    createEmbeddedContainer() {
        if (!this.embeddedContainer) {
            this.embeddedContainer = new Container();
        }
        //ToDo сделать заполнение вложенными данными
        // let co = new Container();
        // let c1 = new Condition(3, 'fgsfg');
        // c1.position.set(30, 0);
        // let c2 = new Condition(3, 'fgsfg');
        // c2.position.set(300, 30);
        // let cccc = new Connection(c1.outPorts[0], c2.sourcePort);
        // co.addChild(c1, c2, cccc);
    }
    createBox(rootTable, inputReqs, outputReqs) {
        let box = this._box = new PIXI.Graphics();
        let h = rootTable.height + Math.max(inputReqs.height, outputReqs.height);
        let w = rootTable.width;
        // box.beginFill(0xCBC6BE);
        box.beginFill(this._color);
        box.lineStyle(2);
        box.drawRoundedRect(0, 0, w, h, 10);
        box.endFill();
        return box;
    }
    createPorts(rootTable, inputReqs, outputReqs) {
        let h = rootTable.height + Math.max(inputReqs.height, outputReqs.height);
        let w = rootTable.width;
        if (!this.inPort)
            this.inPort = new port_1.Port(this, port_1.PortOrientation.Left);
        this.inPort.x = 0;
        this.inPort.y = h - rootTable.height / 2;
        this.inPort.isInput = true;
        if (!this.outPort)
            this.outPort = new port_1.Port(this, port_1.PortOrientation.Right);
        this.outPort.x = w;
        this.outPort.y = h - rootTable.height / 2;
        return [this.inPort, this.outPort];
    }
    loadImg(rootTable) {
        let table = new table_1.Table();
        table.add(this.loadSprite('word')).alignCenter();
        table.add(this.loadSprite('pdf')).alignCenter();
        table.add(this.loadSprite('revit')).alignCenter();
        table.add(this.loadSprite('navisworks')).alignCenter();
        table.add(this.loadSprite('excel')).alignCenter();
        table.build2();
        let table1 = new table_1.Table();
        table1.add(this.createButton('picture', () => {
            alert('Picture!');
        }));
        table1.add(this.createButton('youtube', () => {
            window.open('https://youtu.be/nKFDp9Y52-o');
        })).alignCenter().padRight(2);
        table1.add(this.createButton('table', () => {
        })).alignCenter().padRight(2);
        table1.add(this.createButton('edu', () => {
        })).alignCenter().padRight(2);
        table1.add(this.createButton('book', () => {
        })).alignCenter().padRight(2);
        table1.build2();
        rootTable.add(table).alignCenterLeft();
        rootTable.add(table1).alignCenterRight().colspan(2);
    }
    createButton(name, fn) {
        const button = new button_1.Button(name, fn);
        button.setTicker(this.ticker);
        button.setLoader(this.loader);
        button.start();
        return button;
    }
    loadSprite(name) {
        if (!this.loader)
            throw new Error('Loader is not set');
        let sprite = new PIXI.Sprite(this.loader.resources[name].texture);
        sprite.scale = new PIXI.Point(0.5, 0.5);
        sprite.width = 32;
        sprite.height = 32;
        return sprite;
    }
}
exports.SimpleBlock = SimpleBlock;
//# sourceMappingURL=simple-block.js.map

/***/ }),

/***/ "../../../../../src/app/components/editor/selector-fn.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const editor_object_1 = __webpack_require__("../../../../../src/app/components/editor/objects/editor-object.ts");
class SelectorFn {
    static containsSelectorFn(bump, rect) {
        return function (object) {
            if (!(object instanceof editor_object_1.EditorObject))
                return false;
            let bounds = object.getBounds();
            return rect.x < bounds.x && rect.y < bounds.y && (rect.x + rect.width > bounds.x + bounds.width) &&
                (rect.y + rect.height > bounds.y + bounds.height);
        };
    }
    ;
    static intersectSelectorFn(bump, rect) {
        return function (object) {
            if (!(object instanceof editor_object_1.EditorObject))
                return false;
            return bump.hitTestRectangle(rect, object.getBounds());
        };
    }
    ;
}
exports.SelectorFn = SelectorFn;
//# sourceMappingURL=selector-fn.js.map

/***/ }),

/***/ "../../../../../src/app/components/editor/zoom.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const PIXI = __webpack_require__("../../../../pixi.js/lib/index.js");
class Zoom {
    constructor() {
        this._zoomDirty = true;
        this._positionX = 0;
        this._positionY = 0;
        this._scaleX = 1;
        this._scaleY = 1;
        this._scaleCenterX = 0;
        this._scaleCenterY = 0;
        this._atSCTransform = new PIXI.Matrix();
        this._zoomCenter = new PIXI.Matrix();
        this._scaleTransform = new PIXI.Matrix();
        this._negScaleCenter = new PIXI.Matrix();
        this._transform = new PIXI.Matrix();
    }
    _updateMatrix() {
        this._zoomCenter.set(1, 0, 0, 1, this._scaleCenterX, this._scaleCenterY); // Sets to translate
        this._scaleTransform.set(this._scaleX, 0, 0, this._scaleY, 0, 0); // Sets to scale
        this._negScaleCenter.set(1, 0, 0, 1, -this._scaleCenterX, -this._scaleCenterY); // Sets to translate
        // Accumulate zoom transformations.
        // atSCTransform is an intermediate accumulative matrix used for tracking the current zoom target.
        this._atSCTransform.append(this._zoomCenter);
        this._atSCTransform.append(this._scaleTransform);
        this._atSCTransform.append(this._negScaleCenter);
        // We reset Scale because atSCTransform is accumulative and has "captured" the information.
        this._scaleX = 1;
        this._scaleY = 1;
        // Tack on translation. Note: we don't append it, but concat it into a separate matrix.
        // We want to leave atSCTransform solely responsible for zooming.
        // "transform" is the final matrix.
        this._transform.set(this._atSCTransform.a, this._atSCTransform.b, this._atSCTransform.c, this._atSCTransform.d, this._atSCTransform.tx, this._atSCTransform.ty);
        // this._transform.prepend(this._atTransform);
        this._transform.translate(this._positionX, this._positionY);
    }
    get Transform() {
        if (this._zoomDirty) {
            this._updateMatrix();
            // Now that we have rebuilt the transform matrix is it no longer dirty.
            this._zoomDirty = false;
        }
        return this._transform;
    }
    set Transform(t) {
        this._transform = t;
    }
    /**
     * Use this if you want to manually set the positional value.
     * You would typically use translateBy() instead.
     */
    setPosition(posX, posY) {
        this._positionX = posX;
        this._positionY = posY;
        this._zoomDirty = true;
    }
    get positionX() {
        return this._positionX;
    }
    get positionY() {
        return this._positionY;
    }
    /**
     * A relative zoom.
     * [delta] is a delta relative to the current scale/zoom.
     */
    zoomBy(deltaX, deltaY) {
        this._scaleX += deltaX;
        this._scaleY += deltaY;
        this._zoomDirty = true;
    }
    translateBy(deltaX, deltaY) {
        this._positionX += deltaX;
        this._positionY += deltaY;
        this._zoomDirty = true;
    }
    /**
     * Set the zoom value absolutely. If you want to zoom relative use
     * [zoomBy]
     */
    set currentScale(newScale) {
        if (this._zoomDirty) {
            this._updateMatrix();
        }
        // We use dimensional analysis to set the scale. Remember we can't
        // just set the scale absolutely because atSCTransform is an accumulating matrix.
        // We have to take its current value and compute a new value based
        // on the passed in value.
        // Also, I can use atSCTransform.a because I don't allow rotations within in the game,
        // so the diagonal components correctly represent the matrix's current scale.
        // And because I only perform uniform scaling I can safely use just the "a" element.
        const scaleFactor = newScale / this._atSCTransform.a;
        this._scaleX = scaleFactor;
        this._scaleY = scaleFactor;
        this._zoomDirty = true;
    }
    get currentScale() {
        return this._atSCTransform.a;
    }
    setScaleCenter(posX, posY) {
        this._scaleCenterX = posX;
        this._scaleCenterY = posY;
        this._zoomDirty = true;
    }
}
exports.Zoom = Zoom;
//# sourceMappingURL=zoom.js.map

/***/ }),

/***/ "../../../../../src/app/components/level-editor/level-editor.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>Создать документ</h1>\r\n<mat-card style=\"width: 980px; margin-left: 36px;\">\r\n  <mat-card-title>Документ</mat-card-title>\r\n  <mat-card-content>\r\n    <form novalidate [formGroup]=\"form\" (ngSubmit)=\"onSubmit(form)\" style=\"font-size: medium;\">\r\n      <mat-form-field [floatPlaceholder]=\"true\">\r\n        <input matInput placeholder=\"Название документа\" formControlName=\"name\" required>\r\n      </mat-form-field>\r\n      <mat-form-field [floatPlaceholder]=\"true\">\r\n        <input matInput placeholder=\"Шифр документа\" formControlName=\"code\" required>\r\n      </mat-form-field>\r\n      <div formArrayName=\"levels\">\r\n        <h4>Уровни</h4>\r\n        <div *ngFor=\"let level of levelsControls(); let i=index\">\r\n          <div [formGroupName]=\"i\">\r\n            <span><b>{{i}}</b></span>\r\n            <mat-form-field [floatPlaceholder]=\"true\">\r\n              <input matInput placeholder=\"Шифр\" formControlName=\"code\" required>\r\n            </mat-form-field>\r\n            <mat-form-field [floatPlaceholder]=\"true\">\r\n              <input matInput placeholder=\"Название\" formControlName=\"name\" required>\r\n            </mat-form-field>\r\n            <mat-checkbox formControlName=\"autoNumbering\">Автонумерация</mat-checkbox>\r\n            <color-picker formControlName=\"color\"\r\n                          style=\"width: 100px; display: inline-block;    margin-left: 36px;\"></color-picker>\r\n            <button *ngIf=\"i > 0\" mat-button type=\"button\" (click)=\"removeLevel(level, i)\" title=\"Удалить уровень\">\r\n              <mat-icon>delete_forever</mat-icon>\r\n            </button>\r\n          </div>\r\n        </div>\r\n        <button mat-mini-fab (click)=\"addLevel()\" type=\"button\" title=\"Добавить уровень\">\r\n          <mat-icon>add</mat-icon>\r\n        </button>\r\n        <br><br><br><br><br><br>\r\n        <button mat-button mat-raised-button class=\"primary\" type=\"submit\">Создать документ</button>\r\n      </div>\r\n    </form>\r\n  </mat-card-content>\r\n</mat-card>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/level-editor/level-editor.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/level-editor/level-editor.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
const forms_1 = __webpack_require__("../../../forms/@angular/forms.es5.js");
const toast_service_1 = __webpack_require__("../../../../../src/app/services/toast.service.ts");
const data_service_1 = __webpack_require__("../../../../../src/app/services/data.service.ts");
const router_1 = __webpack_require__("../../../router/@angular/router.es5.js");
__webpack_require__("../../../../rxjs/add/operator/catch.js");
const Observable_1 = __webpack_require__("../../../../rxjs/Observable.js");
let LevelEditorComponent = class LevelEditorComponent {
    constructor(formBuilder, toastService, router, dataService) {
        this.formBuilder = formBuilder;
        this.toastService = toastService;
        this.router = router;
        this.dataService = dataService;
        this.form = formBuilder.group({
            name: formBuilder.control(''),
            code: formBuilder.control(''),
            levels: formBuilder.array([
                formBuilder.group(this.makeLevel())
            ])
        });
    }
    ngOnInit() {
    }
    onSubmit({ value, valid }) {
        if (!valid) {
            this.toastService.error('Форма невалидна');
            return;
        }
        this.dataService.createDocument(value.name, value.code, value.levels)
            .catch(e => {
            this.toastService.error(e);
            return Observable_1.Observable.of(null);
        })
            .subscribe(document => {
            if (document) {
                this.router.navigate(['editor', document.id]);
            }
        });
    }
    makeLevel() {
        return {
            name: '',
            code: '',
            autoNumbering: true,
            color: 'ff0000'
        };
    }
    addLevel() {
        const control = this.form.controls.levels;
        const level = this.formBuilder.group(this.makeLevel());
        control.push(level);
    }
    removeLevel(level, i) {
        const control = this.form.controls.levels;
        control.removeAt(i);
    }
    levelsControls() {
        return this.form.controls.levels.controls;
    }
};
LevelEditorComponent = __decorate([
    core_1.Component({
        selector: 'app-level-editor',
        template: __webpack_require__("../../../../../src/app/components/level-editor/level-editor.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/level-editor/level-editor.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof forms_1.FormBuilder !== "undefined" && forms_1.FormBuilder) === "function" && _a || Object, typeof (_b = typeof toast_service_1.ToastService !== "undefined" && toast_service_1.ToastService) === "function" && _b || Object, typeof (_c = typeof router_1.Router !== "undefined" && router_1.Router) === "function" && _c || Object, typeof (_d = typeof data_service_1.DataService !== "undefined" && data_service_1.DataService) === "function" && _d || Object])
], LevelEditorComponent);
exports.LevelEditorComponent = LevelEditorComponent;
var _a, _b, _c, _d;
//# sourceMappingURL=level-editor.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/listener-subscription.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @deprecated
 */
class ListenerSubscription {
    constructor(object, event, fn) {
        this.object = object;
        this.event = event;
        this.fn = fn;
    }
    subscribe() {
        this.object.addListener(this.event, this.fn);
        return this;
    }
    unsubscribe() {
        this.object.deleteListener(this.event, this.fn);
    }
}
exports.ListenerSubscription = ListenerSubscription;
//# sourceMappingURL=listener-subscription.js.map

/***/ }),

/***/ "../../../../../src/app/components/main-menu/main-menu.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main-menu\">\n  <mat-menu #appMenu=\"matMenu\">\n    <button mat-menu-item routerLink=\"\"> Документы</button>\n  </mat-menu>\n  <button mat-icon-button [matMenuTriggerFor]=\"appMenu\">\n    <mat-icon>more_vert</mat-icon>\n  </button>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/main-menu/main-menu.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".main-menu {\n  height: 50px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/main-menu/main-menu.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
let MainMenuComponent = class MainMenuComponent {
    constructor() {
    }
    ngOnInit() {
    }
};
MainMenuComponent = __decorate([
    core_1.Component({
        selector: 'app-main-menu',
        template: __webpack_require__("../../../../../src/app/components/main-menu/main-menu.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/main-menu/main-menu.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], MainMenuComponent);
exports.MainMenuComponent = MainMenuComponent;
//# sourceMappingURL=main-menu.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/navigation/collapsible-tree.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const d3 = __webpack_require__("../../../../d3/index.js");
const Subject_1 = __webpack_require__("../../../../rxjs/Subject.js");
class CollapsibleTree {
    constructor(svgElement) {
        this.duration = 300;
        this.margin = { top: 20, right: 120, bottom: 20, left: 120 };
        this.xOffset = 100;
        this.i = 1;
        this.circleRadius = 10;
        this._navigate = new Subject_1.Subject();
        this.onNavigate = this._navigate.asObservable();
        this.svgElement = svgElement;
    }
    init(treeData, currentViewRootId) {
        this.currentViewRootId = currentViewRootId;
        const svgElement = this.svgElement;
        let margin = this.margin;
        let width = svgElement.clientWidth - margin.right - margin.left;
        let height = svgElement.clientHeight - margin.top - margin.bottom;
        d3.select(svgElement).selectAll('*').remove();
        const svg = this.svg = d3.select(svgElement)
            .attr("width", width + margin.right + margin.left)
            .attr("height", height + margin.top + margin.bottom)
            .append("g")
            .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
        this.treemap = d3.tree().size([height, width]);
        let root = d3.hierarchy(treeData, (d) => d.children);
        root.x0 = height / 2;
        root.y0 = 0;
        if (root.children)
            root.children.forEach(x => this.collapse(x, x.data.expanded));
        this.root = root;
        this.update(root);
    }
    collapse(d, selfExpanded = false) {
        if (d.children) {
            if (selfExpanded) {
                // схлопнуть только детей
                d.children.forEach(x => this.collapse(x));
            }
            else if (!d.data.expanded) {
                d._children = d.children;
                d._children.forEach(x => this.collapse(x));
                d.children = null;
            }
        }
    }
    click(d) {
        if (d.parent)
            d.parent.children.filter(c => c !== d).forEach(c => this.collapse(c));
        if (d.children) {
            d._children = d.children;
            d.children = null;
        }
        else {
            d.children = d._children;
            d._children = null;
        }
        this.update(d);
    }
    static diagonal(s, d) {
        return `M ${s.y} ${s.x} C ${(s.y + d.y) / 2} ${s.x},${(s.y + d.y) / 2} ${d.x},${d.y} ${d.x}`;
    }
    update(source) {
        let treeData = this.treemap(this.root);
        let nodes = treeData.descendants(), links = treeData.descendants().slice(1);
        nodes.forEach(d => {
            d.y = d.depth * this.xOffset;
        });
        let node = this.svg.selectAll('g.node').data(nodes, d => d.id || (d.id = this.getId()));
        let nodeEnter = node.enter().append('g')
            .attr('class', 'node')
            .attr("transform", d => "translate(" + source.y0 + "," + source.x0 + ")")
            .on('contextmenu', d => {
            d3.event.preventDefault();
            this._navigate.next(d.data);
        })
            .on('click', d => this.click(d));
        nodeEnter.append('circle')
            .attr('class', 'node')
            .attr('r', 1e-6)
            .style("fill", (d) => this.getNodeColor(d));
        nodeEnter.append('text')
            .attr("dy", ".35em")
            .attr("x", (d) => d.children || d._children ? -13 : 13)
            .attr("text-anchor", (d) => d.children || d._children ? "end" : "start")
            .attr('id', d => d.data.id)
            .text(d => d.data.name);
        let nodeUpdate = nodeEnter.merge(node);
        nodeUpdate.transition()
            .duration(this.duration)
            .attr("transform", (d) => {
            return "translate(" + d.y + "," + d.x + ")";
        });
        nodeUpdate.select('circle.node')
            .attr('r', this.circleRadius)
            .style("fill", (d) => this.getNodeColor(d))
            .attr('cursor', 'pointer');
        let nodeExit = node.exit().transition()
            .duration(this.duration)
            .attr("transform", (d) => {
            return "translate(" + source.y + "," + source.x + ")";
        })
            .remove();
        nodeExit.select('circle')
            .attr('r', 1e-6);
        nodeExit.select('text')
            .style('fill-opacity', 1e-6);
        let link = this.svg.selectAll('path.link')
            .data(links, d => d.id);
        let linkEnter = link.enter().insert('path', "g")
            .attr("class", "link")
            .attr('d', d => {
            let o = { x: source.x0, y: source.y0 };
            return CollapsibleTree.diagonal(o, o);
        });
        let linkUpdate = linkEnter.merge(link);
        linkUpdate.transition()
            .duration(this.duration)
            .attr('d', d => {
            return CollapsibleTree.diagonal(d, d.parent);
        });
        let linkExit = link.exit().transition()
            .duration(this.duration)
            .attr('d', d => {
            let o = { x: source.x, y: source.y };
            return CollapsibleTree.diagonal(o, o);
        })
            .remove();
        nodes.forEach((d) => {
            d.x0 = d.x;
            d.y0 = d.y;
        });
    }
    getNodeColor(node) {
        return node.data.id === this.currentViewRootId ? '#FFA500' : node._children ? "lightsteelblue" : "#fff";
    }
    getId() {
        this.i += 1;
        return this.i;
    }
}
exports.CollapsibleTree = CollapsibleTree;
//# sourceMappingURL=collapsible-tree.js.map

/***/ }),

/***/ "../../../../../src/app/components/navigation/navigation.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-expansion-panel>\r\n  <mat-expansion-panel-header>\r\n    <mat-panel-title>\r\n      Навигация\r\n    </mat-panel-title>\r\n    <mat-panel-description>\r\n      <mat-chip-list>\r\n        <mat-chip *ngFor=\"let b of breadcrumbs\" [style.background-color]=\"b.color\" (click)=\"chipsNavigate(b.id)\">\r\n          {{b.name}}\r\n        </mat-chip>\r\n      </mat-chip-list>\r\n    </mat-panel-description>\r\n  </mat-expansion-panel-header>\r\n  <svg #svg width=\"960\" height=\"700\" class=\"no-select\"></svg>\r\n</mat-expansion-panel>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/components/navigation/navigation.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".mat-expansion-panel-header {\n  box-shadow: 1px -3px 7px 3px; }\n\n.mat-expansion-panel-header-title {\n  -webkit-box-flex: 0;\n      -ms-flex-positive: 0;\n          flex-grow: 0; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/navigation/navigation.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
const collapsible_tree_1 = __webpack_require__("../../../../../src/app/components/navigation/collapsible-tree.ts");
const material_1 = __webpack_require__("../../../material/esm5/material.es5.js");
const app_api_service_1 = __webpack_require__("../../../../../src/app/services/app-api.service.ts");
const navigation_record_1 = __webpack_require__("../../../../../src/app/models/navigation-record.ts");
const DocumentEventNames_1 = __webpack_require__("../../../../../src/api/src/ts/enums/event_names/DocumentEventNames.ts");
const Observable_1 = __webpack_require__("../../../../rxjs/Observable.js");
const listener_subscription_1 = __webpack_require__("../../../../../src/app/components/listener-subscription.ts");
let NavigationComponent = class NavigationComponent {
    constructor(appApiService, ngZone) {
        this.appApiService = appApiService;
        this.ngZone = ngZone;
        this.navigate = new core_1.EventEmitter(true);
        this.subscriptions = [];
        this.breadcrumbs = [];
    }
    ngOnInit() {
        const collapsibleTree = this.collapsibleTree = new collapsible_tree_1.CollapsibleTree(this.svg.nativeElement);
        this.subscriptions.push(this.documentSource.subscribe(document => {
            this.document = document;
            if (this.documentChangedListener)
                this.documentChangedListener.unsubscribe();
            this.documentChangedListener = new listener_subscription_1.ListenerSubscription(document, DocumentEventNames_1.DocumentEventNames.DocumentChanged, (e) => {
                this.makeNavigation(document, collapsibleTree, this.viewRootNodeId);
            }).subscribe();
            this.makeNavigation(document, collapsibleTree, document.getContext().getRootNode().id);
        }));
        this.subscriptions.push(collapsibleTree.onNavigate.subscribe(r => {
            if (!r.navigatable)
                return;
            this.ngZone.run(() => {
                this.accordion.close();
                this.navigate.emit(r.id);
            });
        }));
        this.subscriptions.push(this.viewRootSource.subscribe(id => {
            if (!this.document)
                return;
            const breadcrumbs = [];
            let node = this.document.getContext().getObject(id);
            if (!node)
                return;
            while (true) {
                breadcrumbs.push({
                    id: node.id,
                    name: node.name,
                    code: node.code,
                    color: node.getLevel().color
                });
                if (!node.getParent())
                    break;
                node = node.getParent();
            }
            this.breadcrumbs = breadcrumbs.reverse();
            this.viewRootNodeId = id;
            this.makeNavigation(this.document, this.collapsibleTree, id);
        }));
    }
    ngOnDestroy() {
        this.subscriptions.forEach(s => s.unsubscribe());
    }
    makeNavigation(document, collapsibleTree, viewRootId) {
        const makeNavRecs = (levelNode, parent) => {
            const navRecord = new navigation_record_1.NavigationRecord(levelNode.id, levelNode.name, levelNode.code);
            navRecord.parent = parent;
            navRecord.children = levelNode.getChildrenNodes()
                .filter(childLevelNode => {
                return childLevelNode.canHaveChildren();
            })
                .map(x => makeNavRecs(x, navRecord));
            if (navRecord.id === viewRootId) {
                navRecord.expanded = true;
                let parent = navRecord;
                while (true) {
                    parent = parent.parent;
                    if (!parent)
                        break;
                    parent.expanded = true;
                }
            }
            return navRecord;
        };
        const rootNode = document.getContext().getRootNode();
        const root = new navigation_record_1.NavigationRecord(rootNode.id, rootNode.name, rootNode.code);
        root.children = rootNode.getChildrenNodes().map(x => makeNavRecs(x, root));
        collapsibleTree.init(root, viewRootId);
    }
    chipsNavigate(id) {
        this.navigate.emit(id);
    }
};
__decorate([
    core_1.ViewChild('svg'),
    __metadata("design:type", Object)
], NavigationComponent.prototype, "svg", void 0);
__decorate([
    core_1.ViewChild(material_1.AccordionItem),
    __metadata("design:type", Object)
], NavigationComponent.prototype, "accordion", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", typeof (_a = typeof core_1.EventEmitter !== "undefined" && core_1.EventEmitter) === "function" && _a || Object)
], NavigationComponent.prototype, "navigate", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", typeof (_b = typeof Observable_1.Observable !== "undefined" && Observable_1.Observable) === "function" && _b || Object)
], NavigationComponent.prototype, "viewRootSource", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", typeof (_c = typeof Observable_1.Observable !== "undefined" && Observable_1.Observable) === "function" && _c || Object)
], NavigationComponent.prototype, "documentSource", void 0);
NavigationComponent = __decorate([
    core_1.Component({
        selector: 'app-navigation',
        template: __webpack_require__("../../../../../src/app/components/navigation/navigation.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/navigation/navigation.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_d = typeof app_api_service_1.AppApiService !== "undefined" && app_api_service_1.AppApiService) === "function" && _d || Object, typeof (_e = typeof core_1.NgZone !== "undefined" && core_1.NgZone) === "function" && _e || Object])
], NavigationComponent);
exports.NavigationComponent = NavigationComponent;
var _a, _b, _c, _d, _e;
//# sourceMappingURL=navigation.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/sidebar/sidebar.component.html":
/***/ (function(module, exports) {

module.exports = "<div style=\"width: 250px;\">\r\n  <mat-card>\r\n    <mat-card-header>\r\n\r\n    </mat-card-header>\r\n\r\n    <mat-card-content>\r\n      <div [ngSwitch]=\"formType\">\r\n        <div *ngSwitchCase=\"'entity'\">\r\n          <form [formGroup]=\"form\" novalidate>\r\n            <div class=\"form-group\">\r\n              <mat-form-field>\r\n                <input matInput formControlName=\"code\" placeholder=\"Шифр\">\r\n              </mat-form-field>\r\n\r\n              <mat-form-field>\r\n                <input matInput formControlName=\"name\" placeholder=\"Имя\">\r\n              </mat-form-field>\r\n\r\n              <mat-form-field>\r\n                <input matInput type=\"number\" formControlName=\"laborCosts\" placeholder=\"Трудозатраты\">\r\n              </mat-form-field>\r\n\r\n              <!--<mat-form-field>-->\r\n              <!--<mat-select placeholder=\"Роль\" formControlName=\"role\">-->\r\n              <!--<mat-option *ngFor=\"let role of roles\" [value]=\"role\">{{role}}</mat-option>-->\r\n              <!--</mat-select>-->\r\n              <!--</mat-form-field>-->\r\n\r\n              <mat-form-field>\r\n                <input matInput formControlName=\"soft\" placeholder=\"link\">\r\n              </mat-form-field>\r\n\r\n              <mat-form-field>\r\n                <input matInput formControlName=\"author\" placeholder=\"Автор\">\r\n              </mat-form-field>\r\n\r\n              <div formArrayName=\"links\">\r\n                <div *ngFor=\"let link of links.controls; let i=index\" [formGroupName]=\"i\">\r\n\r\n                  <mat-form-field>\r\n                    <input matInput formControlName=\"text\" placeholder=\"\">\r\n                  </mat-form-field>\r\n                </div>\r\n              </div>\r\n\r\n\r\n              <mat-form-field>\r\n                <textarea matInput formControlName=\"description\" placeholder=\"Примечание\"></textarea>\r\n              </mat-form-field>\r\n\r\n            </div>\r\n          </form>\r\n        </div>\r\n\r\n        <div *ngSwitchCase=\"'condition'\">\r\n          <form [formGroup]=\"form\" novalidate>\r\n            <div class=\"form-group\">\r\n              <mat-form-field>\r\n                <input matInput formControlName=\"code\" placeholder=\"Шифр\">\r\n              </mat-form-field>\r\n\r\n              <mat-form-field>\r\n                <input matInput formControlName=\"name\" placeholder=\"Имя\">\r\n              </mat-form-field>\r\n\r\n              <mat-card>\r\n                <mat-card-header><b>Варианты</b></mat-card-header>\r\n                <mat-card-content>\r\n                  <div formArrayName=\"variants\">\r\n                    <div *ngFor=\"let variant of variants.controls; let i=index\">\r\n                      <div [formGroupName]=\"i\" class=\"slon\">\r\n                        <mat-form-field>\r\n                          <input matInput formControlName=\"text\">\r\n                        </mat-form-field>\r\n                        <button *ngIf=\"i > 1\" mat-button (click)=\"deleteVariant(i)\" type=\"button\" style=\"width: 50px\">\r\n                          <mat-icon>delete_forever</mat-icon>\r\n                        </button>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n\r\n                  <div class=\"slon\">\r\n                    <button mat-button type=\"button\" (click)=\"addVariant()\">\r\n                      <mat-icon>add</mat-icon>\r\n                    </button>\r\n                  </div>\r\n                </mat-card-content>\r\n              </mat-card>\r\n\r\n\r\n            </div>\r\n          </form>\r\n        </div>\r\n\r\n        <div *ngSwitchCase=\"'all'\">\r\n          <mat-card>Выбраны разные типы объектов!</mat-card>\r\n        </div>\r\n\r\n        <div *ngSwitchCase=\"''\">\r\n          <mat-card>Корневой документ</mat-card>\r\n        </div>\r\n      </div>\r\n    </mat-card-content>\r\n  </mat-card>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/sidebar/sidebar.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/sidebar/sidebar.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
const Observable_1 = __webpack_require__("../../../../rxjs/Observable.js");
const app_api_service_1 = __webpack_require__("../../../../../src/app/services/app-api.service.ts");
const forms_1 = __webpack_require__("../../../forms/@angular/forms.es5.js");
const TypeNames_1 = __webpack_require__("../../../../../src/api/src/ts/enums/TypeNames.ts");
const data_service_1 = __webpack_require__("../../../../../src/app/services/data.service.ts");
__webpack_require__("../../../../rxjs/add/operator/switchMap.js");
__webpack_require__("../../../../rxjs/add/operator/withLatestFrom.js");
const DocumentEventNames_1 = __webpack_require__("../../../../../src/api/src/ts/enums/event_names/DocumentEventNames.ts");
const observable_listener_1 = __webpack_require__("../../../../../src/app/observable-listener.ts");
__webpack_require__("../../../../rxjs/add/operator/do.js");
let SidebarComponent = class SidebarComponent {
    constructor(_appApi, fB, dataService) {
        this._appApi = _appApi;
        this.fB = fB;
        this.dataService = dataService;
        this.formSubscriptions = [];
        this.roles = ['1', '2'];
        this.formType = '';
        this.subscriptions = [];
    }
    get variants() {
        return this.form.get('variants');
    }
    get links() {
        return this.form.get('links');
    }
    ngOnDestroy() {
        this.subscriptions.forEach(x => x.unsubscribe());
        this.formSubscriptions.forEach(x => x.unsubscribe());
    }
    ngOnInit() {
        this.subscriptions.push(this.documentSource.do(document => this.document = document).flatMap(document => observable_listener_1.ObservableListener.create(document, DocumentEventNames_1.DocumentEventNames.DocumentChanged))
            .subscribe((e) => {
            const doc = e.source;
            if (e.data) {
                switch (this.formType) {
                    case 'entity':
                        const entityFormItems = this.form.get('items').value;
                        if (entityFormItems.length > 0) {
                            const nodes = entityFormItems.map(x => doc.getContext().getLevelNode(x));
                            this.form = this.createEntityForm(nodes);
                            this.subscribeForm();
                        }
                        break;
                    case 'condition':
                        const conditionFormItems = this.form.get('items').value;
                        if (conditionFormItems.length > 0) {
                            const nodes = conditionFormItems.map(x => doc.getContext().getCondition(x));
                            this.form = this.createConditionForm(nodes);
                            this.subscribeForm();
                        }
                        break;
                }
            }
        }));
        this.subscriptions.push(this.selectionSource.withLatestFrom(this.documentSource)
            .subscribe(([items, document]) => {
            this.unsubscribeAll();
            if (items.length > 0) {
                const nodeValues = items.map(itemId => document.getContext().getLevelNode(itemId) || document.getContext().getCondition(itemId));
                if (nodeValues.every(x => x.typeName === TypeNames_1.TypeNames.LevelNode)) {
                    this.formType = 'entity';
                    this.form = this.createEntityForm(nodeValues);
                    this.subscribeForm();
                }
                else if (nodeValues.every(x => x.typeName === TypeNames_1.TypeNames.Condition)) {
                    this.formType = 'condition';
                    this.form = this.createConditionForm(nodeValues);
                    this.subscribeForm();
                }
                else if (nodeValues.some(x => x.typeName === TypeNames_1.TypeNames.LevelNode) &&
                    nodeValues.some(x => x.typeName === TypeNames_1.TypeNames.Condition)) {
                    this.formType = 'all';
                }
                else {
                    this.formType = '';
                }
            }
            else {
                this.formType = '';
            }
        }));
    }
    subscribeForm() {
        this.formSubscriptions.push(this.form.valueChanges
            .subscribe(value => this.dataService.updateEntitiesFromForm(this.document, value)));
    }
    unsubscribeAll() {
        this.formSubscriptions.forEach(x => x.unsubscribe());
        this.formSubscriptions = [];
    }
    createEntityForm(nodeValues) {
        let result = {};
        result.formType = 'entity';
        result.items = [];
        result.items.push(nodeValues.map(x => x.id));
        result.links = this.fB.array([]);
        result.role = '';
        result.code = '';
        result.name = '';
        result.laborCosts = 0;
        result.description = '';
        result.soft = '';
        result.author = '';
        let form = this.fB.group(result);
        if (nodeValues.every((x, i, a) => x.code === a[0].code)) {
            form.get('code').patchValue(nodeValues[0].code);
        }
        else {
            form.get('code').patchValue('*РАЗЛИЧНЫЕ*');
            form.get('code').disable();
        }
        if (nodeValues.every((x, i, a) => x.name === a[0].name)) {
            form.get('name').patchValue(nodeValues[0].name);
        }
        else {
            form.get('name').patchValue('*РАЗЛИЧНЫЕ*');
            form.get('name').disable();
        }
        if (nodeValues.every((x, i, a) => x.laborCosts === a[0].laborCosts)) {
            form.get('laborCosts').patchValue(nodeValues[0].laborCosts);
        }
        else {
            form.get('laborCosts').patchValue('*РАЗЛИЧНЫЕ*');
        }
        if (nodeValues.every((x, i, a) => x.description === a[0].description)) {
            form.get('description').patchValue(nodeValues[0].description);
        }
        else {
            form.get('description').patchValue('*РАЗЛИЧНЫЕ*');
            form.get('description').disable();
        }
        //todo обновить софт и линки
        return form;
    }
    createConditionForm(conditions) {
        let result = {};
        result.formType = 'condition';
        result.items = [];
        result.items.push(conditions.map(x => x.id));
        result.code = '';
        result.name = '';
        result.variants = this.fB.array([]);
        let form = this.fB.group(result);
        if (conditions.every((x, i, a) => x.code === a[0].code)) {
            form.get('code').patchValue(conditions[0].code);
        }
        else {
            form.get('code').patchValue('*РАЗЛИЧНЫЕ*');
        }
        if (conditions.every((x, i, a) => x.name === a[0].name)) {
            form.get('name').patchValue(conditions[0].name);
        }
        else {
            form.get('name').patchValue('*РАЗЛИЧНЫЕ*');
        }
        if (conditions.map(x => x.getVariants().map(v => v.text).reduce((a, b) => a + b) ===
            conditions[0].getVariants().map(v => v.text).reduce((a, b) => a + b))) {
            const objects = conditions[0].getVariants().map(x => this.fB.group({ id: x.id, text: x.text }));
            let array = form.get('variants');
            array.reset();
            objects.forEach(o => array.push(o));
        }
        return form;
    }
    // private getRole(entity: IEntity): string {
    //   return this.roles.filter(role => role.id === entity.roleId)[0];
    // }
    addVariant() {
        this.dataService.createVarian(this.document, this.form.get('items').value, 'новый вариант');
    }
    deleteVariant(index) {
        const array = this.form.get('variants');
        const id = array.controls[index].get('id').value;
        this.dataService.deleteObjects(this.document, [id]);
    }
};
__decorate([
    core_1.Input(),
    __metadata("design:type", typeof (_a = typeof Observable_1.Observable !== "undefined" && Observable_1.Observable) === "function" && _a || Object)
], SidebarComponent.prototype, "selectionSource", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", typeof (_b = typeof Observable_1.Observable !== "undefined" && Observable_1.Observable) === "function" && _b || Object)
], SidebarComponent.prototype, "documentSource", void 0);
SidebarComponent = __decorate([
    core_1.Component({
        selector: 'app-sidebar',
        template: __webpack_require__("../../../../../src/app/components/sidebar/sidebar.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/sidebar/sidebar.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_c = typeof app_api_service_1.AppApiService !== "undefined" && app_api_service_1.AppApiService) === "function" && _c || Object, typeof (_d = typeof forms_1.FormBuilder !== "undefined" && forms_1.FormBuilder) === "function" && _d || Object, typeof (_e = typeof data_service_1.DataService !== "undefined" && data_service_1.DataService) === "function" && _e || Object])
], SidebarComponent);
exports.SidebarComponent = SidebarComponent;
var _a, _b, _c, _d, _e;
//# sourceMappingURL=sidebar.component.js.map

/***/ }),

/***/ "../../../../../src/app/ext/bump.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class Bump {
    constructor(renderingEngine = PIXI) {
        if (renderingEngine === undefined)
            throw new Error("Please assign a rendering engine in the constructor before using bump.js");
        this.renderer = "pixi";
    }
    //`addCollisionProperties` adds extra properties to sprites to help
    //simplify the collision code. It won't add these properties if they
    //already exist on the sprite. After these properties have been
    //added, this methods adds a Boolean property to the sprite called `_bumpPropertiesAdded`
    //and sets it to `true` to flag that the sprite has these
    //new properties
    addCollisionProperties(sprite) {
        //Add properties to Pixi sprites
        if (this.renderer === "pixi") {
            //gx
            if (sprite.gx === undefined) {
                Object.defineProperty(sprite, "gx", {
                    get() {
                        return sprite.getGlobalPosition().x;
                    },
                    enumerable: true, configurable: true
                });
            }
            //gy
            if (sprite.gy === undefined) {
                Object.defineProperty(sprite, "gy", {
                    get() {
                        return sprite.getGlobalPosition().y;
                    },
                    enumerable: true, configurable: true
                });
            }
            //centerX
            if (sprite.centerX === undefined) {
                Object.defineProperty(sprite, "centerX", {
                    get() {
                        return sprite.x + sprite.width / 2;
                    },
                    enumerable: true, configurable: true
                });
            }
            //centerY
            if (sprite.centerY === undefined) {
                Object.defineProperty(sprite, "centerY", {
                    get() {
                        return sprite.y + sprite.height / 2;
                    },
                    enumerable: true, configurable: true
                });
            }
            //halfWidth
            if (sprite.halfWidth === undefined) {
                Object.defineProperty(sprite, "halfWidth", {
                    get() {
                        return sprite.width / 2;
                    },
                    enumerable: true, configurable: true
                });
            }
            //halfHeight
            if (sprite.halfHeight === undefined) {
                Object.defineProperty(sprite, "halfHeight", {
                    get() {
                        return sprite.height / 2;
                    },
                    enumerable: true, configurable: true
                });
            }
            //xAnchorOffset
            if (sprite.xAnchorOffset === undefined) {
                Object.defineProperty(sprite, "xAnchorOffset", {
                    get() {
                        if (sprite.anchor !== undefined) {
                            return sprite.width * sprite.anchor.x;
                        }
                        else {
                            return 0;
                        }
                    },
                    enumerable: true, configurable: true
                });
            }
            //yAnchorOffset
            if (sprite.yAnchorOffset === undefined) {
                Object.defineProperty(sprite, "yAnchorOffset", {
                    get() {
                        if (sprite.anchor !== undefined) {
                            return sprite.height * sprite.anchor.y;
                        }
                        else {
                            return 0;
                        }
                    },
                    enumerable: true, configurable: true
                });
            }
            if (sprite.circular && sprite.radius === undefined) {
                Object.defineProperty(sprite, "radius", {
                    get() {
                        return sprite.width / 2;
                    },
                    enumerable: true, configurable: true
                });
            }
            //Earlier code - not needed now.
            /*
            Object.defineProperties(sprite, {
              "gx": {
                get(){return sprite.getGlobalPosition().x},
                enumerable: true, configurable: true
              },
              "gy": {
                get(){return sprite.getGlobalPosition().y},
                enumerable: true, configurable: true
              },
              "centerX": {
                get(){return sprite.x + sprite.width / 2},
                enumerable: true, configurable: true
              },
              "centerY": {
                get(){return sprite.y + sprite.height / 2},
                enumerable: true, configurable: true
              },
              "halfWidth": {
                get(){return sprite.width / 2},
                enumerable: true, configurable: true
              },
              "halfHeight": {
                get(){return sprite.height / 2},
                enumerable: true, configurable: true
              },
              "xAnchorOffset": {
                get(){
                  if (sprite.anchor !== undefined) {
                    return sprite.height * sprite.anchor.x;
                  } else {
                    return 0;
                  }
                },
                enumerable: true, configurable: true
              },
              "yAnchorOffset": {
                get(){
                  if (sprite.anchor !== undefined) {
                    return sprite.width * sprite.anchor.y;
                  } else {
                    return 0;
                  }
                },
                enumerable: true, configurable: true
              }
            });
            */
        }
        //Add a Boolean `_bumpPropertiesAdded` property to the sprite to flag it
        //as having these new properties
        sprite._bumpPropertiesAdded = true;
    }
    /*
    hitTestPoint
    ------------
  
    Use it to find out if a point is touching a circlular or rectangular sprite.
    Parameters:
    a. An object with `x` and `y` properties.
    b. A sprite object with `x`, `y`, `centerX` and `centerY` properties.
    If the sprite has a `radius` property, the function will interpret
    the shape as a circle.
    */
    hitTestPoint(point, sprite) {
        //Add collision properties
        if (!sprite._bumpPropertiesAdded)
            this.addCollisionProperties(sprite);
        let shape, left, right, top, bottom, vx, vy, magnitude, hit;
        //Find out if the sprite is rectangular or circular depending
        //on whether it has a `radius` property
        if (sprite.radius) {
            shape = "circle";
        }
        else {
            shape = "rectangle";
        }
        //Rectangle
        if (shape === "rectangle") {
            //Get the position of the sprite's edges
            left = sprite.x - sprite.xAnchorOffset;
            right = sprite.x + sprite.width - sprite.xAnchorOffset;
            top = sprite.y - sprite.yAnchorOffset;
            bottom = sprite.y + sprite.height - sprite.yAnchorOffset;
            //Find out if the point is intersecting the rectangle
            hit = point.x > left && point.x < right && point.y > top && point.y < bottom;
        }
        //Circle
        if (shape === "circle") {
            //Find the distance between the point and the
            //center of the circle
            let vx = point.x - sprite.x - (sprite.width / 2) + sprite.xAnchorOffset, vy = point.y - sprite.y - (sprite.height / 2) + sprite.yAnchorOffset, magnitude = Math.sqrt(vx * vx + vy * vy);
            //The point is intersecting the circle if the magnitude
            //(distance) is less than the circle's radius
            hit = magnitude < sprite.radius;
        }
        //`hit` will be either `true` or `false`
        return hit;
    }
    /*
    hitTestCircle
    -------------
  
    Use it to find out if two circular sprites are touching.
    Parameters:
    a. A sprite object with `centerX`, `centerY` and `radius` properties.
    b. A sprite object with `centerX`, `centerY` and `radius`.
    */
    hitTestCircle(c1, c2, global = false) {
        //Add collision properties
        if (!c1._bumpPropertiesAdded)
            this.addCollisionProperties(c1);
        if (!c2._bumpPropertiesAdded)
            this.addCollisionProperties(c2);
        let vx, vy, magnitude, combinedRadii, hit;
        //Calculate the vector between the circles’ center points
        if (global) {
            //Use global coordinates
            vx = (c2.gx + (c2.width / 2) - c2.xAnchorOffset) - (c1.gx + (c1.width / 2) - c1.xAnchorOffset);
            vy = (c2.gy + (c2.width / 2) - c2.yAnchorOffset) - (c1.gy + (c1.width / 2) - c1.yAnchorOffset);
        }
        else {
            //Use local coordinates
            vx = (c2.x + (c2.width / 2) - c2.xAnchorOffset) - (c1.x + (c1.width / 2) - c1.xAnchorOffset);
            vy = (c2.y + (c2.width / 2) - c2.yAnchorOffset) - (c1.y + (c1.width / 2) - c1.yAnchorOffset);
        }
        //Find the distance between the circles by calculating
        //the vector's magnitude (how long the vector is)
        magnitude = Math.sqrt(vx * vx + vy * vy);
        //Add together the circles' total radii
        combinedRadii = c1.radius + c2.radius;
        //Set `hit` to `true` if the distance between the circles is
        //less than their `combinedRadii`
        hit = magnitude < combinedRadii;
        //`hit` will be either `true` or `false`
        return hit;
    }
    /*
    circleCollision
    ---------------
  
    Use it to prevent a moving circular sprite from overlapping and optionally
    bouncing off a non-moving circular sprite.
    Parameters:
    a. A sprite object with `x`, `y` `centerX`, `centerY` and `radius` properties.
    b. A sprite object with `x`, `y` `centerX`, `centerY` and `radius` properties.
    c. Optional: true or false to indicate whether or not the first sprite
    should bounce off the second sprite.
    The sprites can contain an optional mass property that should be greater than 1.
  
    */
    circleCollision(c1, c2, bounce = false, global = false) {
        //Add collision properties
        if (!c1._bumpPropertiesAdded)
            this.addCollisionProperties(c1);
        if (!c2._bumpPropertiesAdded)
            this.addCollisionProperties(c2);
        let magnitude, combinedRadii, overlap, vx, vy, dx, dy, s = { x: undefined, y: undefined }, hit = false;
        //Calculate the vector between the circles’ center points
        if (global) {
            //Use global coordinates
            vx = (c2.gx + (c2.width / 2) - c2.xAnchorOffset) - (c1.gx + (c1.width / 2) - c1.xAnchorOffset);
            vy = (c2.gy + (c2.width / 2) - c2.yAnchorOffset) - (c1.gy + (c1.width / 2) - c1.yAnchorOffset);
        }
        else {
            //Use local coordinates
            vx = (c2.x + (c2.width / 2) - c2.xAnchorOffset) - (c1.x + (c1.width / 2) - c1.xAnchorOffset);
            vy = (c2.y + (c2.width / 2) - c2.yAnchorOffset) - (c1.y + (c1.width / 2) - c1.yAnchorOffset);
        }
        //Find the distance between the circles by calculating
        //the vector's magnitude (how long the vector is)
        magnitude = Math.sqrt(vx * vx + vy * vy);
        //Add together the circles' combined half-widths
        combinedRadii = c1.radius + c2.radius;
        //Figure out if there's a collision
        if (magnitude < combinedRadii) {
            //Yes, a collision is happening
            hit = true;
            //Find the amount of overlap between the circles
            overlap = combinedRadii - magnitude;
            //Add some "quantum padding". This adds a tiny amount of space
            //between the circles to reduce their surface tension and make
            //them more slippery. "0.3" is a good place to start but you might
            //need to modify this slightly depending on the exact behaviour
            //you want. Too little and the balls will feel sticky, too much
            //and they could start to jitter if they're jammed together
            let quantumPadding = 0.3;
            overlap += quantumPadding;
            //Normalize the vector
            //These numbers tell us the direction of the collision
            dx = vx / magnitude;
            dy = vy / magnitude;
            //Move circle 1 out of the collision by multiplying
            //the overlap with the normalized vector and subtract it from
            //circle 1's position
            c1.x -= overlap * dx;
            c1.y -= overlap * dy;
            //Bounce
            if (bounce) {
                //Create a collision vector object, `s` to represent the bounce "surface".
                //Find the bounce surface's x and y properties
                //(This represents the normal of the distance vector between the circles)
                s.x = vy;
                s.y = -vx;
                //Bounce c1 off the surface
                this.bounceOffSurface(c1, s);
            }
        }
        return hit;
    }
    /*
    movingCircleCollision
    ---------------------
  
    Use it to make two moving circles bounce off each other.
    Parameters:
    a. A sprite object with `x`, `y` `centerX`, `centerY` and `radius` properties.
    b. A sprite object with `x`, `y` `centerX`, `centerY` and `radius` properties.
    The sprites can contain an optional mass property that should be greater than 1.
  
    */
    movingCircleCollision(c1, c2, global = false) {
        //Add collision properties
        if (!c1._bumpPropertiesAdded)
            this.addCollisionProperties(c1);
        if (!c2._bumpPropertiesAdded)
            this.addCollisionProperties(c2);
        let combinedRadii, overlap, xSide, ySide, 
        //`s` refers to the distance vector between the circles
        s = {
            vx: undefined,
            vy: undefined,
            lx: undefined,
            ly: undefined,
            magnitude: undefined,
            dx: undefined,
            dy: undefined,
            vxHalf: undefined,
            vyHalf: undefined
        }, p1A = { x: undefined, y: undefined }, p1B = { x: undefined, y: undefined }, p2A = { x: undefined, y: undefined }, p2B = { x: undefined, y: undefined }, hit = false;
        //Apply mass, if the circles have mass properties
        c1.mass = c1.mass || 1;
        c2.mass = c2.mass || 1;
        //Calculate the vector between the circles’ center points
        if (global) {
            //Use global coordinates
            s.vx = (c2.gx + c2.radius - c2.xAnchorOffset) - (c1.gx + c1.radius - c1.xAnchorOffset);
            s.vy = (c2.gy + c2.radius - c2.yAnchorOffset) - (c1.gy + c1.radius - c1.yAnchorOffset);
        }
        else {
            //Use local coordinates
            s.vx = (c2.x + c2.radius - c2.xAnchorOffset) - (c1.x + c1.radius - c1.xAnchorOffset);
            s.vy = (c2.y + c2.radius - c2.yAnchorOffset) - (c1.y + c1.radius - c1.yAnchorOffset);
        }
        //Find the distance between the circles by calculating
        //the vector's magnitude (how long the vector is)
        s.magnitude = Math.sqrt(s.vx * s.vx + s.vy * s.vy);
        //Add together the circles' combined half-widths
        combinedRadii = c1.radius + c2.radius;
        //Figure out if there's a collision
        if (s.magnitude < combinedRadii) {
            //Yes, a collision is happening
            hit = true;
            //Find the amount of overlap between the circles
            overlap = combinedRadii - s.magnitude;
            //Add some "quantum padding" to the overlap
            overlap += 0.3;
            //Normalize the vector.
            //These numbers tell us the direction of the collision
            s.dx = s.vx / s.magnitude;
            s.dy = s.vy / s.magnitude;
            //Find the collision vector.
            //Divide it in half to share between the circles, and make it absolute
            s.vxHalf = Math.abs(s.dx * overlap / 2);
            s.vyHalf = Math.abs(s.dy * overlap / 2);
            //Find the side that the collision is occurring on
            (c1.x > c2.x) ? xSide = 1 : xSide = -1;
            (c1.y > c2.y) ? ySide = 1 : ySide = -1;
            //Move c1 out of the collision by multiplying
            //the overlap with the normalized vector and adding it to
            //the circles' positions
            c1.x = c1.x + (s.vxHalf * xSide);
            c1.y = c1.y + (s.vyHalf * ySide);
            //Move c2 out of the collision
            c2.x = c2.x + (s.vxHalf * -xSide);
            c2.y = c2.y + (s.vyHalf * -ySide);
            //1. Calculate the collision surface's properties
            //Find the surface vector's left normal
            s.lx = s.vy;
            s.ly = -s.vx;
            //2. Bounce c1 off the surface (s)
            //Find the dot product between c1 and the surface
            let dp1 = c1.vx * s.dx + c1.vy * s.dy;
            //Project c1's velocity onto the collision surface
            p1A.x = dp1 * s.dx;
            p1A.y = dp1 * s.dy;
            //Find the dot product of c1 and the surface's left normal (s.lx and s.ly)
            let dp2 = c1.vx * (s.lx / s.magnitude) + c1.vy * (s.ly / s.magnitude);
            //Project the c1's velocity onto the surface's left normal
            p1B.x = dp2 * (s.lx / s.magnitude);
            p1B.y = dp2 * (s.ly / s.magnitude);
            //3. Bounce c2 off the surface (s)
            //Find the dot product between c2 and the surface
            let dp3 = c2.vx * s.dx + c2.vy * s.dy;
            //Project c2's velocity onto the collision surface
            p2A.x = dp3 * s.dx;
            p2A.y = dp3 * s.dy;
            //Find the dot product of c2 and the surface's left normal (s.lx and s.ly)
            let dp4 = c2.vx * (s.lx / s.magnitude) + c2.vy * (s.ly / s.magnitude);
            //Project c2's velocity onto the surface's left normal
            p2B.x = dp4 * (s.lx / s.magnitude);
            p2B.y = dp4 * (s.ly / s.magnitude);
            //4. Calculate the bounce vectors
            //Bounce c1
            //using p1B and p2A
            c1.bounce = {};
            c1.bounce.x = p1B.x + p2A.x;
            c1.bounce.y = p1B.y + p2A.y;
            //Bounce c2
            //using p1A and p2B
            c2.bounce = {};
            c2.bounce.x = p1A.x + p2B.x;
            c2.bounce.y = p1A.y + p2B.y;
            //Add the bounce vector to the circles' velocity
            //and add mass if the circle has a mass property
            c1.vx = c1.bounce.x / c1.mass;
            c1.vy = c1.bounce.y / c1.mass;
            c2.vx = c2.bounce.x / c2.mass;
            c2.vy = c2.bounce.y / c2.mass;
        }
        return hit;
    }
    /*
    multipleCircleCollision
    -----------------------
  
    Checks all the circles in an array for a collision against
    all the other circles in an array, using `movingCircleCollision` (above)
    */
    multipleCircleCollision(arrayOfCircles, global = false) {
        for (let i = 0; i < arrayOfCircles.length; i++) {
            //The first circle to use in the collision check
            var c1 = arrayOfCircles[i];
            for (let j = i + 1; j < arrayOfCircles.length; j++) {
                //The second circle to use in the collision check
                let c2 = arrayOfCircles[j];
                //Check for a collision and bounce the circles apart if
                //they collide. Use an optional `mass` property on the sprite
                //to affect the bounciness of each marble
                this.movingCircleCollision(c1, c2, global);
            }
        }
    }
    /*
    rectangleCollision
    ------------------
  
    Use it to prevent two rectangular sprites from overlapping.
    Optionally, make the first rectangle bounce off the second rectangle.
    Parameters:
    a. A sprite object with `x`, `y` `centerX`, `centerY`, `halfWidth` and `halfHeight` properties.
    b. A sprite object with `x`, `y` `centerX`, `centerY`, `halfWidth` and `halfHeight` properties.
    c. Optional: true or false to indicate whether or not the first sprite
    should bounce off the second sprite.
    */
    rectangleCollision(r1, r2, bounce = false, global = true) {
        //Add collision properties
        if (!r1._bumpPropertiesAdded)
            this.addCollisionProperties(r1);
        if (!r2._bumpPropertiesAdded)
            this.addCollisionProperties(r2);
        let collision, combinedHalfWidths, combinedHalfHeights, overlapX, overlapY, vx, vy;
        //Calculate the distance vector
        if (global) {
            vx = (r1.gx + Math.abs(r1.halfWidth) - r1.xAnchorOffset) - (r2.gx + Math.abs(r2.halfWidth) - r2.xAnchorOffset);
            vy = (r1.gy + Math.abs(r1.halfHeight) - r1.yAnchorOffset) - (r2.gy + Math.abs(r2.halfHeight) - r2.yAnchorOffset);
        }
        else {
            //vx = r1.centerX - r2.centerX;
            //vy = r1.centerY - r2.centerY;
            vx = (r1.x + Math.abs(r1.halfWidth) - r1.xAnchorOffset) - (r2.x + Math.abs(r2.halfWidth) - r2.xAnchorOffset);
            vy = (r1.y + Math.abs(r1.halfHeight) - r1.yAnchorOffset) - (r2.y + Math.abs(r2.halfHeight) - r2.yAnchorOffset);
        }
        //Figure out the combined half-widths and half-heights
        combinedHalfWidths = Math.abs(r1.halfWidth) + Math.abs(r2.halfWidth);
        combinedHalfHeights = Math.abs(r1.halfHeight) + Math.abs(r2.halfHeight);
        //Check whether vx is less than the combined half widths
        if (Math.abs(vx) < combinedHalfWidths) {
            //A collision might be occurring!
            //Check whether vy is less than the combined half heights
            if (Math.abs(vy) < combinedHalfHeights) {
                //A collision has occurred! This is good!
                //Find out the size of the overlap on both the X and Y axes
                overlapX = combinedHalfWidths - Math.abs(vx);
                overlapY = combinedHalfHeights - Math.abs(vy);
                //The collision has occurred on the axis with the
                //*smallest* amount of overlap. Let's figure out which
                //axis that is
                if (overlapX >= overlapY) {
                    //The collision is happening on the X axis
                    //But on which side? vy can tell us
                    if (vy > 0) {
                        collision = "top";
                        //Move the rectangle out of the collision
                        r1.y = r1.y + overlapY;
                    }
                    else {
                        collision = "bottom";
                        //Move the rectangle out of the collision
                        r1.y = r1.y - overlapY;
                    }
                    //Bounce
                    if (bounce) {
                        r1.vy *= -1;
                        /*Alternative
                        //Find the bounce surface's vx and vy properties
                        var s = {};
                        s.vx = r2.x - r2.x + r2.width;
                        s.vy = 0;
            
                        //Bounce r1 off the surface
                        //this.bounceOffSurface(r1, s);
                        */
                    }
                }
                else {
                    //The collision is happening on the Y axis
                    //But on which side? vx can tell us
                    if (vx > 0) {
                        collision = "left";
                        //Move the rectangle out of the collision
                        r1.x = r1.x + overlapX;
                    }
                    else {
                        collision = "right";
                        //Move the rectangle out of the collision
                        r1.x = r1.x - overlapX;
                    }
                    //Bounce
                    if (bounce) {
                        r1.vx *= -1;
                        /*Alternative
                        //Find the bounce surface's vx and vy properties
                        var s = {};
                        s.vx = 0;
                        s.vy = r2.y - r2.y + r2.height;
            
                        //Bounce r1 off the surface
                        this.bounceOffSurface(r1, s);
                        */
                    }
                }
            }
            else {
                //No collision
            }
        }
        else {
            //No collision
        }
        //Return the collision string. it will be either "top", "right",
        //"bottom", or "left" depending on which side of r1 is touching r2.
        return collision;
    }
    /*
    hitTestRectangle
    ----------------
  
    Use it to find out if two rectangular sprites are touching.
    Parameters:
    a. A sprite object with `centerX`, `centerY`, `halfWidth` and `halfHeight` properties.
    b. A sprite object with `centerX`, `centerY`, `halfWidth` and `halfHeight` properties.
  
    */
    hitTestRectangle(r1, r2, global = false) {
        //Add collision properties
        if (!r1._bumpPropertiesAdded)
            this.addCollisionProperties(r1);
        if (!r2._bumpPropertiesAdded)
            this.addCollisionProperties(r2);
        let hit, combinedHalfWidths, combinedHalfHeights, vx, vy;
        //A variable to determine whether there's a collision
        hit = false;
        //Calculate the distance vector
        if (global) {
            vx = (r1.gx + Math.abs(r1.halfWidth) - r1.xAnchorOffset) - (r2.gx + Math.abs(r2.halfWidth) - r2.xAnchorOffset);
            vy = (r1.gy + Math.abs(r1.halfHeight) - r1.yAnchorOffset) - (r2.gy + Math.abs(r2.halfHeight) - r2.yAnchorOffset);
        }
        else {
            vx = (r1.x + Math.abs(r1.halfWidth) - r1.xAnchorOffset) - (r2.x + Math.abs(r2.halfWidth) - r2.xAnchorOffset);
            vy = (r1.y + Math.abs(r1.halfHeight) - r1.yAnchorOffset) - (r2.y + Math.abs(r2.halfHeight) - r2.yAnchorOffset);
        }
        //Figure out the combined half-widths and half-heights
        combinedHalfWidths = Math.abs(r1.halfWidth) + Math.abs(r2.halfWidth);
        combinedHalfHeights = Math.abs(r1.halfHeight) + Math.abs(r2.halfHeight);
        //Check for a collision on the x axis
        if (Math.abs(vx) < combinedHalfWidths) {
            //A collision might be occuring. Check for a collision on the y axis
            if (Math.abs(vy) < combinedHalfHeights) {
                //There's definitely a collision happening
                hit = true;
            }
            else {
                //There's no collision on the y axis
                hit = false;
            }
        }
        else {
            //There's no collision on the x axis
            hit = false;
        }
        //`hit` will be either `true` or `false`
        return hit;
    }
    /*
    hitTestCircleRectangle
    ----------------
  
    Use it to find out if a circular shape is touching a rectangular shape
    Parameters:
    a. A sprite object with `centerX`, `centerY`, `halfWidth` and `halfHeight` properties.
    b. A sprite object with `centerX`, `centerY`, `halfWidth` and `halfHeight` properties.
  
    */
    hitTestCircleRectangle(c1, r1, global = false) {
        //Add collision properties
        if (!r1._bumpPropertiesAdded)
            this.addCollisionProperties(r1);
        if (!c1._bumpPropertiesAdded)
            this.addCollisionProperties(c1);
        let region, collision, c1x, c1y, r1x, r1y;
        //Use either global or local coordinates
        if (global) {
            c1x = c1.gx;
            c1y = c1.gy;
            r1x = r1.gx;
            r1y = r1.gy;
        }
        else {
            c1x = c1.x;
            c1y = c1.y;
            r1x = r1.x;
            r1y = r1.y;
        }
        //Is the circle above the rectangle's top edge?
        if (c1y - c1.yAnchorOffset < r1y - Math.abs(r1.halfHeight) - r1.yAnchorOffset) {
            //If it is, we need to check whether it's in the
            //top left, top center or top right
            if (c1x - c1.xAnchorOffset < r1x - 1 - Math.abs(r1.halfWidth) - r1.xAnchorOffset) {
                region = "topLeft";
            }
            else if (c1x - c1.xAnchorOffset > r1x + 1 + Math.abs(r1.halfWidth) - r1.xAnchorOffset) {
                region = "topRight";
            }
            else {
                region = "topMiddle";
            }
        }
        else if (c1y - c1.yAnchorOffset > r1y + Math.abs(r1.halfHeight) - r1.yAnchorOffset) {
            //If it is, we need to check whether it's in the bottom left,
            //bottom center, or bottom right
            if (c1x - c1.xAnchorOffset < r1x - 1 - Math.abs(r1.halfWidth) - r1.xAnchorOffset) {
                region = "bottomLeft";
            }
            else if (c1x - c1.xAnchorOffset > r1x + 1 + Math.abs(r1.halfWidth) - r1.xAnchorOffset) {
                region = "bottomRight";
            }
            else {
                region = "bottomMiddle";
            }
        }
        else {
            if (c1x - c1.xAnchorOffset < r1x - Math.abs(r1.halfWidth) - r1.xAnchorOffset) {
                region = "leftMiddle";
            }
            else {
                region = "rightMiddle";
            }
        }
        //Is this the circle touching the flat sides
        //of the rectangle?
        if (region === "topMiddle" || region === "bottomMiddle" || region === "leftMiddle" || region === "rightMiddle") {
            //Yes, it is, so do a standard rectangle vs. rectangle collision test
            collision = this.hitTestRectangle(c1, r1, global);
        }
        else {
            let point = { x: undefined, y: undefined };
            switch (region) {
                case "topLeft":
                    point.x = r1x - r1.xAnchorOffset;
                    point.y = r1y - r1.yAnchorOffset;
                    break;
                case "topRight":
                    point.x = r1x + r1.width - r1.xAnchorOffset;
                    point.y = r1y - r1.yAnchorOffset;
                    break;
                case "bottomLeft":
                    point.x = r1x - r1.xAnchorOffset;
                    point.y = r1y + r1.height - r1.yAnchorOffset;
                    break;
                case "bottomRight":
                    point.x = r1x + r1.width - r1.xAnchorOffset;
                    point.y = r1y + r1.height - r1.yAnchorOffset;
            }
            //Check for a collision between the circle and the point
            collision = this.hitTestCirclePoint(c1, point, global);
        }
        //Return the result of the collision.
        //The return value will be `undefined` if there's no collision
        if (collision) {
            return region;
        }
        else {
            return collision;
        }
    }
    /*
    hitTestCirclePoint
    ------------------
  
    Use it to find out if a circular shape is touching a point
    Parameters:
    a. A sprite object with `centerX`, `centerY`, and `radius` properties.
    b. A point object with `x` and `y` properties.
  
    */
    hitTestCirclePoint(c1, point, global = false) {
        //Add collision properties
        if (!c1._bumpPropertiesAdded)
            this.addCollisionProperties(c1);
        //A point is just a circle with a diameter of
        //1 pixel, so we can cheat. All we need to do is an ordinary circle vs. circle
        //Collision test. Just supply the point with the properties
        //it needs
        point.diameter = 1;
        point.width = point.diameter;
        point.radius = 0.5;
        point.centerX = point.x;
        point.centerY = point.y;
        point.gx = point.x;
        point.gy = point.y;
        point.xAnchorOffset = 0;
        point.yAnchorOffset = 0;
        point._bumpPropertiesAdded = true;
        return this.hitTestCircle(c1, point, global);
    }
    /*
    circleRectangleCollision
    ------------------------
  
    Use it to bounce a circular shape off a rectangular shape
    Parameters:
    a. A sprite object with `centerX`, `centerY`, `halfWidth` and `halfHeight` properties.
    b. A sprite object with `centerX`, `centerY`, `halfWidth` and `halfHeight` properties.
  
    */
    circleRectangleCollision(c1, r1, bounce = false, global = false) {
        //Add collision properties
        if (!r1._bumpPropertiesAdded)
            this.addCollisionProperties(r1);
        if (!c1._bumpPropertiesAdded)
            this.addCollisionProperties(c1);
        let region, collision, c1x, c1y, r1x, r1y;
        //Use either the global or local coordinates
        if (global) {
            c1x = c1.gx;
            c1y = c1.gy;
            r1x = r1.gx;
            r1y = r1.gy;
        }
        else {
            c1x = c1.x;
            c1y = c1.y;
            r1x = r1.x;
            r1y = r1.y;
        }
        //Is the circle above the rectangle's top edge?
        if (c1y - c1.yAnchorOffset < r1y - Math.abs(r1.halfHeight) - r1.yAnchorOffset) {
            //If it is, we need to check whether it's in the
            //top left, top center or top right
            if (c1x - c1.xAnchorOffset < r1x - 1 - Math.abs(r1.halfWidth) - r1.xAnchorOffset) {
                region = "topLeft";
            }
            else if (c1x - c1.xAnchorOffset > r1x + 1 + Math.abs(r1.halfWidth) - r1.xAnchorOffset) {
                region = "topRight";
            }
            else {
                region = "topMiddle";
            }
        }
        else if (c1y - c1.yAnchorOffset > r1y + Math.abs(r1.halfHeight) - r1.yAnchorOffset) {
            //If it is, we need to check whether it's in the bottom left,
            //bottom center, or bottom right
            if (c1x - c1.xAnchorOffset < r1x - 1 - Math.abs(r1.halfWidth) - r1.xAnchorOffset) {
                region = "bottomLeft";
            }
            else if (c1x - c1.xAnchorOffset > r1x + 1 + Math.abs(r1.halfWidth) - r1.xAnchorOffset) {
                region = "bottomRight";
            }
            else {
                region = "bottomMiddle";
            }
        }
        else {
            if (c1x - c1.xAnchorOffset < r1x - Math.abs(r1.halfWidth) - r1.xAnchorOffset) {
                region = "leftMiddle";
            }
            else {
                region = "rightMiddle";
            }
        }
        //Is this the circle touching the flat sides
        //of the rectangle?
        if (region === "topMiddle" || region === "bottomMiddle" || region === "leftMiddle" || region === "rightMiddle") {
            //Yes, it is, so do a standard rectangle vs. rectangle collision test
            collision = this.rectangleCollision(c1, r1, bounce, global);
        }
        else {
            let point = { x: undefined, y: undefined };
            switch (region) {
                case "topLeft":
                    point.x = r1x - r1.xAnchorOffset;
                    point.y = r1y - r1.yAnchorOffset;
                    break;
                case "topRight":
                    point.x = r1x + r1.width - r1.xAnchorOffset;
                    point.y = r1y - r1.yAnchorOffset;
                    break;
                case "bottomLeft":
                    point.x = r1x - r1.xAnchorOffset;
                    point.y = r1y + r1.height - r1.yAnchorOffset;
                    break;
                case "bottomRight":
                    point.x = r1x + r1.width - r1.xAnchorOffset;
                    point.y = r1y + r1.height - r1.yAnchorOffset;
            }
            //Check for a collision between the circle and the point
            collision = this.circlePointCollision(c1, point, bounce, global);
        }
        if (collision) {
            return region;
        }
        else {
            return collision;
        }
    }
    /*
    circlePointCollision
    --------------------
  
    Use it to boucnce a circle off a point.
    Parameters:
    a. A sprite object with `centerX`, `centerY`, and `radius` properties.
    b. A point object with `x` and `y` properties.
  
    */
    circlePointCollision(c1, point, bounce = false, global = false) {
        //Add collision properties
        if (!c1._bumpPropertiesAdded)
            this.addCollisionProperties(c1);
        //A point is just a circle with a diameter of
        //1 pixel, so we can cheat. All we need to do is an ordinary circle vs. circle
        //Collision test. Just supply the point with the properties
        //it needs
        point.diameter = 1;
        point.width = point.diameter;
        point.radius = 0.5;
        point.centerX = point.x;
        point.centerY = point.y;
        point.gx = point.x;
        point.gy = point.y;
        point.xAnchorOffset = 0;
        point.yAnchorOffset = 0;
        point._bumpPropertiesAdded = true;
        return this.circleCollision(c1, point, bounce, global);
    }
    /*
    bounceOffSurface
    ----------------
  
    Use this to bounce an object off another object.
    Parameters:
    a. An object with `v.x` and `v.y` properties. This represents the object that is colliding
    with a surface.
    b. An object with `x` and `y` properties. This represents the surface that the object
    is colliding into.
    The first object can optionally have a mass property that's greater than 1. The mass will
    be used to dampen the bounce effect.
    */
    bounceOffSurface(o, s) {
        //Add collision properties
        if (!o._bumpPropertiesAdded)
            this.addCollisionProperties(o);
        let dp1, dp2, p1 = { vx: undefined, vy: undefined }, p2 = { vx: undefined, vy: undefined }, bounce = { x: undefined, y: undefined }, mass = o.mass || 1;
        //1. Calculate the collision surface's properties
        //Find the surface vector's left normal
        s.lx = s.y;
        s.ly = -s.x;
        //Find its magnitude
        s.magnitude = Math.sqrt(s.x * s.x + s.y * s.y);
        //Find its normalized values
        s.dx = s.x / s.magnitude;
        s.dy = s.y / s.magnitude;
        //2. Bounce the object (o) off the surface (s)
        //Find the dot product between the object and the surface
        dp1 = o.vx * s.dx + o.vy * s.dy;
        //Project the object's velocity onto the collision surface
        p1.vx = dp1 * s.dx;
        p1.vy = dp1 * s.dy;
        //Find the dot product of the object and the surface's left normal (s.lx and s.ly)
        dp2 = o.vx * (s.lx / s.magnitude) + o.vy * (s.ly / s.magnitude);
        //Project the object's velocity onto the surface's left normal
        p2.vx = dp2 * (s.lx / s.magnitude);
        p2.vy = dp2 * (s.ly / s.magnitude);
        //Reverse the projection on the surface's left normal
        p2.vx *= -1;
        p2.vy *= -1;
        //Add up the projections to create a new bounce vector
        bounce.x = p1.vx + p2.vx;
        bounce.y = p1.vy + p2.vy;
        //Assign the bounce vector to the object's velocity
        //with optional mass to dampen the effect
        o.vx = bounce.x / mass;
        o.vy = bounce.y / mass;
    }
    /*
    contain
    -------
    `contain` can be used to contain a sprite with `x` and
    `y` properties inside a rectangular area.
  
    The `contain` function takes four arguments: a sprite with `x` and `y`
    properties, an object literal with `x`, `y`, `width` and `height` properties. The
    third argument is a Boolean (true/false) value that determines if the sprite
    should bounce when it hits the edge of the container. The fourth argument
    is an extra user-defined callback function that you can call when the
    sprite hits the container
    ```js
    contain(anySprite, {x: 0, y: 0, width: 512, height: 512}, true, callbackFunction);
    ```
    The code above will contain the sprite's position inside the 512 by
    512 pixel area defined by the object. If the sprite hits the edges of
    the container, it will bounce. The `callBackFunction` will run if
    there's a collision.
  
    An additional feature of the `contain` method is that if the sprite
    has a `mass` property, it will be used to dampen the sprite's bounce
    in a natural looking way.
  
    If the sprite bumps into any of the containing object's boundaries,
    the `contain` function will return a value that tells you which side
    the sprite bumped into: “left”, “top”, “right” or “bottom”. Here's how
    you could keep the sprite contained and also find out which boundary
    it hit:
    ```js
    //Contain the sprite and find the collision value
    let collision = contain(anySprite, {x: 0, y: 0, width: 512, height: 512});
  
    //If there's a collision, display the boundary that the collision happened on
    if(collision) {
      if collision.has("left") console.log("The sprite hit the left");
      if collision.has("top") console.log("The sprite hit the top");
      if collision.has("right") console.log("The sprite hit the right");
      if collision.has("bottom") console.log("The sprite hit the bottom");
    }
    ```
    If the sprite doesn't hit a boundary, the value of
    `collision` will be `undefined`.
    */
    /*
     contain(sprite, container, bounce = false, extra = undefined) {
  
       //Helper methods that compensate for any possible shift the the
       //sprites' anchor points
       let nudgeAnchor = (o, value, axis) => {
         if (o.anchor !== undefined) {
           if (o.anchor[axis] !== 0) {
             return value * ((1 - o.anchor[axis]) - o.anchor[axis]);
           } else {
             return value;
           }
         } else {
           return value;
         }
       };
  
       let compensateForAnchor = (o, value, axis) => {
         if (o.anchor !== undefined) {
           if (o.anchor[axis] !== 0) {
             return value * o.anchor[axis];
           } else {
             return 0;
           }
         } else {
           return 0;
         }
       };
  
       let compensateForAnchors = (a, b, property1, property2) => {
          return compensateForAnchor(a, a[property1], property2) + compensateForAnchor(b, b[property1], property2)
       };
       //Create a set called `collision` to keep track of the
       //boundaries with which the sprite is colliding
       let collision = new Set();
  
       //Left
       if (sprite.x - compensateForAnchor(sprite, sprite.width, "x") < container.x - sprite.parent.gx - compensateForAnchor(container, container.width, "x")) {
         //Bounce the sprite if `bounce` is true
         if (bounce) sprite.vx *= -1;
  
         //If the sprite has `mass`, let the mass
         //affect the sprite's velocity
         if(sprite.mass) sprite.vx /= sprite.mass;
  
         //Keep the sprite inside the container
         sprite.x = container.x - sprite.parent.gx + compensateForAnchor(sprite, sprite.width, "x") - compensateForAnchor(container, container.width, "x");
  
         //Add "left" to the collision set
         collision.add("left");
       }
  
       //Top
       if (sprite.y - compensateForAnchor(sprite, sprite.height, "y") < container.y - sprite.parent.gy - compensateForAnchor(container, container.height, "y")) {
         if (bounce) sprite.vy *= -1;
         if(sprite.mass) sprite.vy /= sprite.mass;
         sprite.y = container.x - sprite.parent.gy + compensateForAnchor(sprite, sprite.height, "y") - compensateForAnchor(container, container.height, "y");
         collision.add("top");
       }
  
       //Right
       if (sprite.x - compensateForAnchor(sprite, sprite.width, "x") + sprite.width > container.width - compensateForAnchor(container, container.width, "x")) {
         if (bounce) sprite.vx *= -1;
         if(sprite.mass) sprite.vx /= sprite.mass;
         sprite.x = container.width - sprite.width + compensateForAnchor(sprite, sprite.width, "x") - compensateForAnchor(container, container.width, "x");
         collision.add("right");
       }
  
       //Bottom
       if (sprite.y - compensateForAnchor(sprite, sprite.height, "y") + sprite.height > container.height - compensateForAnchor(container, container.height, "y")) {
         if (bounce) sprite.vy *= -1;
         if(sprite.mass) sprite.vy /= sprite.mass;
         sprite.y = container.height - sprite.height + compensateForAnchor(sprite, sprite.height, "y") - compensateForAnchor(container, container.height, "y");
         collision.add("bottom");
       }
  
       //If there were no collisions, set `collision` to `undefined`
       if (collision.size === 0) collision = undefined;
  
       //The `extra` function runs if there was a collision
       //and `extra` has been defined
       if (collision && extra) extra(collision);
  
       //Return the `collision` value
       return collision;
     }
     */
    contain(sprite, container, bounce = false, extra = undefined) {
        //Add collision properties
        if (!sprite._bumpPropertiesAdded)
            this.addCollisionProperties(sprite);
        //Give the container x and y anchor offset values, if it doesn't
        //have any
        if (container.xAnchorOffset === undefined)
            container.xAnchorOffset = 0;
        if (container.yAnchorOffset === undefined)
            container.yAnchorOffset = 0;
        if (sprite.parent.gx === undefined)
            sprite.parent.gx = 0;
        if (sprite.parent.gy === undefined)
            sprite.parent.gy = 0;
        //Create a Set called `collision` to keep track of the
        //boundaries with which the sprite is colliding
        let collision = new Set();
        //Left
        if (sprite.x - sprite.xAnchorOffset < container.x - sprite.parent.gx - container.xAnchorOffset) {
            //Bounce the sprite if `bounce` is true
            if (bounce)
                sprite.vx *= -1;
            //If the sprite has `mass`, let the mass
            //affect the sprite's velocity
            if (sprite.mass)
                sprite.vx /= sprite.mass;
            //Reposition the sprite inside the container
            sprite.x = container.x - sprite.parent.gx - container.xAnchorOffset + sprite.xAnchorOffset;
            //Make a record of the side which the container hit
            collision.add("left");
        }
        //Top
        if (sprite.y - sprite.yAnchorOffset < container.y - sprite.parent.gy - container.yAnchorOffset) {
            if (bounce)
                sprite.vy *= -1;
            if (sprite.mass)
                sprite.vy /= sprite.mass;
            sprite.y = container.y - sprite.parent.gy - container.yAnchorOffset + sprite.yAnchorOffset;
            ;
            collision.add("top");
        }
        //Right
        if (sprite.x - sprite.xAnchorOffset + sprite.width > container.width - container.xAnchorOffset) {
            if (bounce)
                sprite.vx *= -1;
            if (sprite.mass)
                sprite.vx /= sprite.mass;
            sprite.x = container.width - sprite.width - container.xAnchorOffset + sprite.xAnchorOffset;
            collision.add("right");
        }
        //Bottom
        if (sprite.y - sprite.yAnchorOffset + sprite.height > container.height - container.yAnchorOffset) {
            if (bounce)
                sprite.vy *= -1;
            if (sprite.mass)
                sprite.vy /= sprite.mass;
            sprite.y = container.height - sprite.height - container.yAnchorOffset + sprite.yAnchorOffset;
            collision.add("bottom");
        }
        //If there were no collisions, set `collision` to `undefined`
        if (collision.size === 0)
            collision = undefined;
        //The `extra` function runs if there was a collision
        //and `extra` has been defined
        if (collision && extra)
            extra(collision);
        //Return the `collision` value
        return collision;
    }
    //`outsideBounds` checks whether a sprite is outide the boundary of
    //another object. It returns an object called `collision`. `collision` will be `undefined` if there's no
    //collision. But if there is a collision, `collision` will be
    //returned as a Set containg strings that tell you which boundary
    //side was crossed: "left", "right", "top" or "bottom"
    outsideBounds(s, bounds, extra) {
        let x = bounds.x, y = bounds.y, width = bounds.width, height = bounds.height;
        //The `collision` object is used to store which
        //side of the containing rectangle the sprite hits
        let collision = new Set();
        //Left
        if (s.x < x - s.width) {
            collision.add("left");
        }
        //Top
        if (s.y < y - s.height) {
            collision.add("top");
        }
        //Right
        if (s.x > width + s.width) {
            collision.add("right");
        }
        //Bottom
        if (s.y > height + s.height) {
            collision.add("bottom");
        }
        //If there were no collisions, set `collision` to `undefined`
        if (collision.size === 0)
            collision = undefined;
        //The `extra` function runs if there was a collision
        //and `extra` has been defined
        if (collision && extra)
            extra(collision);
        //Return the `collision` object
        return collision;
    }
    /*
    _getCenter
    ----------
  
    A utility that finds the center point of the sprite. If it's anchor point is the
    sprite's top left corner, then the center is calculated from that point.
    If the anchor point has been shifted, then the anchor x/y point is used as the sprite's center
    */
    _getCenter(o, dimension, axis) {
        if (o.anchor !== undefined) {
            if (o.anchor[axis] !== 0) {
                return 0;
            }
            else {
                //console.log(o.anchor[axis])
                return dimension / 2;
            }
        }
        else {
            return dimension;
        }
    }
    /*
    hit
    ---
    A convenient universal collision function to test for collisions
    between rectangles, circles, and points.
    */
    hit(a, b, react = false, bounce = false, global, extra = undefined) {
        //Local references to bump's collision methods
        let hitTestPoint = this.hitTestPoint.bind(this), hitTestRectangle = this.hitTestRectangle.bind(this), hitTestCircle = this.hitTestCircle.bind(this), movingCircleCollision = this.movingCircleCollision.bind(this), circleCollision = this.circleCollision.bind(this), hitTestCircleRectangle = this.hitTestCircleRectangle.bind(this), rectangleCollision = this.rectangleCollision.bind(this), circleRectangleCollision = this.circleRectangleCollision.bind(this);
        let collision, aIsASprite = a.parent !== undefined, bIsASprite = b.parent !== undefined;
        //Check to make sure one of the arguments isn't an array
        if (aIsASprite && b instanceof Array || bIsASprite && a instanceof Array) {
            //If it is, check for a collision between a sprite and an array
            spriteVsArray();
        }
        else {
            //If one of the arguments isn't an array, find out what type of
            //collision check to run
            collision = findCollisionType(a, b);
            if (collision && extra)
                extra(collision);
        }
        //Return the result of the collision.
        //It will be `undefined` if there's no collision and `true` if
        //there is a collision. `rectangleCollision` sets `collsision` to
        //"top", "bottom", "left" or "right" depeneding on which side the
        //collision is occuring on
        return collision;
        function findCollisionType(a, b) {
            //Are `a` and `b` both sprites?
            //(We have to check again if this function was called from
            //`spriteVsArray`)
            let aIsASprite = a.parent !== undefined;
            let bIsASprite = b.parent !== undefined;
            if (aIsASprite && bIsASprite) {
                //Yes, but what kind of sprites?
                if (a.diameter && b.diameter) {
                    //They're circles
                    return circleVsCircle(a, b);
                }
                else if (a.diameter && !b.diameter) {
                    //The first one is a circle and the second is a rectangle
                    return circleVsRectangle(a, b);
                }
                else {
                    //They're rectangles
                    return rectangleVsRectangle(a, b);
                }
            }
            else if (bIsASprite && !(a.x === undefined) && !(a.y === undefined)) {
                //Yes, so this is a point vs. sprite collision test
                return hitTestPoint(a, b);
            }
            else {
                //The user is trying to test some incompatible objects
                throw new Error(`I'm sorry, ${a} and ${b} cannot be use together in a collision test.'`);
            }
        }
        function spriteVsArray() {
            //If `a` happens to be the array, flip it around so that it becomes `b`
            let b;
            if (a instanceof Array) {
                [a, b] = [b, a];
            }
            //Loop through the array in reverse
            for (let i = b.length - 1; i >= 0; i--) {
                let sprite = b[i];
                collision = findCollisionType(a, sprite);
                if (collision && extra)
                    extra(collision, sprite);
            }
        }
        function circleVsCircle(a, b) {
            //If the circles shouldn't react to the collision,
            //just test to see if they're touching
            if (!react) {
                return hitTestCircle(a, b);
            }
            else {
                //Are they both moving?
                if (a.vx + a.vy !== 0 && b.vx + b.vy !== 0) {
                    //Yes, they are both moving
                    //(moving circle collisions always bounce apart so there's
                    //no need for the third, `bounce`, argument)
                    return movingCircleCollision(a, b, global);
                }
                else {
                    //No, they're not both moving
                    return circleCollision(a, b, bounce, global);
                }
            }
        }
        function rectangleVsRectangle(a, b) {
            //If the rectangles shouldn't react to the collision, just
            //test to see if they're touching
            if (!react) {
                return hitTestRectangle(a, b, global);
            }
            else {
                return rectangleCollision(a, b, bounce, global);
            }
        }
        function circleVsRectangle(a, b) {
            //If the rectangles shouldn't react to the collision, just
            //test to see if they're touching
            if (!react) {
                return hitTestCircleRectangle(a, b, global);
            }
            else {
                return circleRectangleCollision(a, b, bounce, global);
            }
        }
    }
}
exports.Bump = Bump;
//# sourceMappingURL=bump.js.map

/***/ }),

/***/ "../../../../../src/app/models/navigation-record.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class NavigationRecord {
    constructor(id, name, code) {
        this.id = id;
        this.name = name;
        this.code = code;
        this.navigatable = true;
        this.children = [];
    }
}
exports.NavigationRecord = NavigationRecord;
//# sourceMappingURL=navigation-record.js.map

/***/ }),

/***/ "../../../../../src/app/modules/app-routing.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
const router_1 = __webpack_require__("../../../router/@angular/router.es5.js");
const document_list_component_1 = __webpack_require__("../../../../../src/app/components/document-list/document-list.component.ts");
const document_editor_component_1 = __webpack_require__("../../../../../src/app/components/document-editor/document-editor.component.ts");
const level_editor_component_1 = __webpack_require__("../../../../../src/app/components/level-editor/level-editor.component.ts");
const routes = [
    {
        path: '',
        component: document_list_component_1.DocumentListComponent,
        children: []
    },
    {
        path: 'editor/:id',
        component: document_editor_component_1.DocumentEditorComponent,
        children: []
    },
    {
        path: 'level-editor',
        component: level_editor_component_1.LevelEditorComponent,
        children: []
    }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = __decorate([
    core_1.NgModule({
        imports: [router_1.RouterModule.forRoot(routes)],
        exports: [router_1.RouterModule]
    })
], AppRoutingModule);
exports.AppRoutingModule = AppRoutingModule;
//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/modules/material.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
const common_1 = __webpack_require__("../../../common/@angular/common.es5.js");
const material_1 = __webpack_require__("../../../material/esm5/material.es5.js");
let MaterialModule = class MaterialModule {
};
MaterialModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            material_1.MatButtonModule,
            material_1.MatCardModule,
            material_1.MatDialogModule,
            material_1.MatIconModule,
            material_1.MatFormFieldModule,
            material_1.MatCardModule,
            material_1.MatInputModule,
            material_1.MatCheckboxModule,
            material_1.MatSelectModule,
            material_1.MatListModule,
            material_1.MatChipsModule,
            material_1.MatMenuModule
        ],
        exports: [
            material_1.MatButtonModule,
            material_1.MatCardModule,
            material_1.MatDialogModule,
            material_1.MatExpansionModule,
            material_1.MatSidenavModule,
            material_1.MatIconModule,
            material_1.MatFormFieldModule,
            material_1.MatCardModule,
            material_1.MatInputModule,
            material_1.MatCheckboxModule,
            material_1.MatSelectModule,
            material_1.MatListModule,
            material_1.MatChipsModule,
            material_1.MatMenuModule
        ],
        declarations: []
    })
], MaterialModule);
exports.MaterialModule = MaterialModule;
//# sourceMappingURL=material.module.js.map

/***/ }),

/***/ "../../../../../src/app/observable-listener.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const Observable_1 = __webpack_require__("../../../../rxjs/Observable.js");
class ObservableListener {
    static create(eventEmitter, event) {
        return Observable_1.Observable.create((observer) => {
            const listener = (e) => observer.next(e);
            eventEmitter.addListener(event, listener);
            return () => eventEmitter.deleteListener(event, listener);
        });
    }
}
exports.ObservableListener = ObservableListener;
//# sourceMappingURL=observable-listener.js.map

/***/ }),

/***/ "../../../../../src/app/services/app-api.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
const entryPoint_1 = __webpack_require__("../../../../../src/api/src/ts/entryPoint.ts");
let AppApiService = class AppApiService {
    constructor() {
        this.app = entryPoint_1.getApplication();
    }
};
AppApiService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [])
], AppApiService);
exports.AppApiService = AppApiService;
//# sourceMappingURL=app-api.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/data.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
const app_api_service_1 = __webpack_require__("../../../../../src/app/services/app-api.service.ts");
const toast_service_1 = __webpack_require__("../../../../../src/app/services/toast.service.ts");
const TypeNames_1 = __webpack_require__("../../../../../src/api/src/ts/enums/TypeNames.ts");
const Observable_1 = __webpack_require__("../../../../rxjs/Observable.js");
__webpack_require__("../../../../rxjs/add/observable/never.js");
__webpack_require__("../../../../rxjs/add/observable/of.js");
__webpack_require__("../../../../rxjs/add/observable/throw.js");
const TransactionStatus_1 = __webpack_require__("../../../../../src/api/src/ts/enums/TransactionStatus.ts");
const Subject_1 = __webpack_require__("../../../../rxjs/Subject.js");
let DataService = class DataService {
    constructor(apiService, toastService) {
        this.apiService = apiService;
        this.toastService = toastService;
        this.updateSubject = new Subject_1.Subject();
        this.updateSubject.debounce(() => Observable_1.Observable.timer(500)).subscribe(({ document, value }) => this.updateEntities(document, value));
    }
    createNode(doc, parentId) {
        const transaction = doc.createTransaction();
        transaction.start();
        const curNode = doc.getContext().getLevelNode(parentId);
        const lockRes = curNode.lock();
        if (lockRes.success) {
            let entity = doc.application.factory.createILevelNode(doc, 'блок', 'new');
            const result = doc.getContext().addLevelEntity(parentId, entity);
            if (result.success) {
                transaction.commit();
                return Observable_1.Observable.of(entity);
            }
            else {
                this.toastService.error(result.errorMessage, 'Ошибка создания узла');
                transaction.rollback();
                return Observable_1.Observable.throw(result);
            }
        }
        else {
            this.toastService.error(lockRes.errorMessage, 'Ошибка блокировки');
            transaction.rollback();
            return Observable_1.Observable.throw(lockRes);
        }
    }
    createCondition(doc, parentId) {
        const t = doc.createTransaction();
        t.start();
        const curNode = doc.getContext().getLevelNode(parentId);
        const lockRes = curNode.lock();
        if (lockRes.success) {
            let condition = doc.application.factory.createICondition(doc, 'блок', 'new');
            const result = doc.getContext().addLevelEntity(parentId, condition);
            if (result.success) {
                const variant1 = doc.getContext().addVariant(condition.id, 'вариант 1');
                const variant2 = doc.getContext().addVariant(condition.id, 'вариант 1');
                if (variant1 !== null && variant2 !== null) {
                    t.commit();
                }
                else {
                    this.toastService.error('Не удалось содать условие', 'Ошибка создания условия');
                    t.rollback();
                    return Observable_1.Observable.throw('Не удалось содать условие');
                }
                return Observable_1.Observable.of(condition);
            }
            else {
                this.toastService.error(lockRes.errorMessage, 'Ошибка создания условия');
                t.rollback();
                return Observable_1.Observable.throw(result);
            }
        }
        else {
            this.toastService.error(lockRes.errorMessage, 'Ошибка блокировки');
            t.rollback();
            return Observable_1.Observable.throw(lockRes);
        }
    }
    createVarian(doc, conditionIds, text) {
        let result = [];
        const t = doc.createTransaction();
        t.start();
        conditionIds.forEach(conditionId => {
            const condition = doc.getContext().getCondition(conditionId);
            const lockRes = condition.lock();
            if (lockRes.success) {
                let variant = doc.getContext().addVariant(condition.id, 'новый вариант');
                if (variant === null) {
                    this.toastService.error('Не удалось создать вариант', 'Ошибка создания варианта');
                    t.rollback();
                    return Observable_1.Observable.throw('Не удалось создать вариант');
                }
            }
            else {
                this.toastService.error(lockRes.errorMessage, 'Ошибка блокировки');
                t.rollback();
                return Observable_1.Observable.throw(lockRes);
            }
        });
        t.commit();
        return Observable_1.Observable.of(result);
    }
    createConnection(doc, sourceBlockId, targetBlockId) {
        const t = doc.createTransaction();
        t.start();
        const startNode = doc.getContext().getLevelNode(sourceBlockId);
        const distNode = doc.getContext().getLevelNode(targetBlockId);
        const startRes = startNode.lock();
        const disrRes = distNode.lock();
        if (startRes.success && disrRes.success) {
            let connection = doc.getContext().addConnection(sourceBlockId, targetBlockId, 'new');
            if (connection != null) {
                t.commit();
            }
            else {
                this.toastService.error('Не удалось создать соединение', 'Ошибка создания соединения');
                t.rollback();
            }
        }
        else {
            const title = 'Ошибка создания соединения';
            if (!startRes.success)
                this.toastService.error(startRes.errorMessage, title);
            else
                this.toastService.error(disrRes.errorMessage, title);
            t.rollback();
        }
    }
    updateEntities(document, data) {
        if (data !== null && data.items.length > 0) {
            const t = document.createTransaction();
            t.start();
            const blocks = data.items.map(id => document.getContext().getObject(id));
            let lockResult;
            for (let block of blocks) {
                switch (block.typeName) {
                    case TypeNames_1.TypeNames.LevelNode:
                        let levelNode = block;
                        lockResult = levelNode.lock();
                        if (lockResult.success) {
                            levelNode.code = data.code;
                            levelNode.name = data.name;
                            levelNode.laborCosts = data.laborCosts;
                            levelNode.description = data.description;
                            //todo сделать назначение роли. софта и автора
                        }
                        else {
                            this.toastService.error(lockResult.errorMessage, 'Ошибка блокировки');
                            t.rollback();
                            break;
                        }
                        break;
                    case TypeNames_1.TypeNames.Condition:
                        let iCondition = block;
                        lockResult = iCondition.lock();
                        if (lockResult.success) {
                            iCondition.code = data.code;
                            iCondition.name = data.name;
                            iCondition.getVariants().forEach((v, i) => {
                                v.text = data.variants[i].text;
                            });
                        }
                        else {
                            this.toastService.error(lockResult.errorMessage, 'Ошибка блокировки');
                            t.rollback();
                            break;
                        }
                        break;
                }
            }
            if (t.status === TransactionStatus_1.TransactionStatus.Started)
                t.commit();
        }
    }
    deleteObjects(document, objects) {
        const transaction = document.createTransaction();
        const apiObjects = objects.map((x) => {
            const id = typeof x === 'string' ? x : x.id;
            return document.getContext().getObject(id);
        });
        transaction.start();
        try {
            apiObjects.forEach((apiObject) => {
                if (apiObject.lock) {
                    const lockResult = apiObject.lock();
                    if (!lockResult.success)
                        throw { message: lockResult.errorMessage, object: apiObject };
                }
            });
        }
        catch (e) {
            this.toastService.error(e.message, 'Ошибка блокировки');
        }
        apiObjects.forEach(apiObject => {
            switch (apiObject.typeName) {
                case TypeNames_1.TypeNames.LevelNode:
                    document.getContext().deleteLevelEntity(apiObject.id);
                    apiObject.getOutputConnections().concat(apiObject.getInputConnections()).forEach(connection => {
                        document.getContext().deleteConnection(connection.id);
                    });
                    break;
                case TypeNames_1.TypeNames.Condition:
                    throw 'vasya';
                case TypeNames_1.TypeNames.Connection:
                    document.getContext().deleteConnection(apiObject.id);
                    break;
                case TypeNames_1.TypeNames.Variant:
                    apiObject.getOutputConnections().forEach(connection => {
                        document.getContext().deleteConnection(connection.id);
                    });
                    document.getContext().deleteVariant(apiObject.id);
            }
        });
        transaction.commit();
    }
    createDocument(name, code, levels) {
        const document = this.apiService.app.documentManager.create(name, code);
        if (!document)
            return Observable_1.Observable.throw('Не удалось создать документ');
        const transaction = document.createTransaction();
        transaction.start();
        levels.forEach((x, i) => {
            const level = document.getContext().pushLevel(x.name, x.code, x.color, x.autoNumbering);
            if (!level) {
                transaction.rollback();
                return Observable_1.Observable.throw(`Не удалось создать уровень ${x.code}-${x.name}`);
            }
        });
        const levelEntity = document.application.factory.createILevelNode(document, 'Корневой узел', 'ROOT');
        const rootAddResult = document.getContext().addLevelEntity(null, levelEntity);
        if (!rootAddResult.success) {
            transaction.rollback();
            return Observable_1.Observable.throw(rootAddResult.errorMessage);
        }
        transaction.commit();
        return Observable_1.Observable.of(document);
    }
    sync(document) {
        let syncResult;
        try {
            syncResult = document.sync();
        }
        catch (e) {
            return Observable_1.Observable.throw(e.message);
        }
        if (!syncResult.success) {
            return Observable_1.Observable.throw(syncResult.errorMessage);
        }
        return Observable_1.Observable.of(true);
    }
    updateEntitiesFromForm(document, value) {
        for (let p in value) {
            if (value.hasOwnProperty(p) && (value[p] === '*РАЗЛИЧНЫЕ*' || value.p === null))
                delete value.p;
        }
        this.updateSubject.next({ document: document, value: value });
    }
};
DataService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [typeof (_a = typeof app_api_service_1.AppApiService !== "undefined" && app_api_service_1.AppApiService) === "function" && _a || Object, typeof (_b = typeof toast_service_1.ToastService !== "undefined" && toast_service_1.ToastService) === "function" && _b || Object])
], DataService);
exports.DataService = DataService;
var _a, _b;
//# sourceMappingURL=data.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/signal-r.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
const signalr_client_1 = __webpack_require__("../../../../@aspnet/signalr-client/dist/src/index.js");
let SignalRService = class SignalRService {
    constructor(ngZone) {
        this.ngZone = ngZone;
        const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6InRlbXBAand0LnJ1IiwidXNlcl9pZCI6IjU3ZGM1MWEzMzg5YjMwZmVkMWIxM2Y5MSIsIm5iZiI6MTUxMDI0NzE5MSwiZXhwIjoxNTEwMzMzNTkxLCJpYXQiOjE1MTAyNDcxOTEsImlzcyI6IkV4YW1wbGVJc3N1ZXIiLCJhdWQiOiJFeGFtcGxlQXVkaWVuY2UifQ.noOolXI8Nrg-d1NGhHeqV0pxUvAZ5AmBmp-gt4lGoPA';
        const connection = this.connection = new signalr_client_1.HubConnection('api/test?token=' + token);
        connection.on('DocumentCreated', data => {
            console.log('document created', data);
        });
        connection.on('DocumentUpdated', data => {
            console.log('document updated', data);
        });
        this.ngZone.runOutsideAngular(() => connection.start().then(() => this.test()));
    }
    test() {
        this.connection.invoke('send', 'Hello');
    }
};
SignalRService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [typeof (_a = typeof core_1.NgZone !== "undefined" && core_1.NgZone) === "function" && _a || Object])
], SignalRService);
exports.SignalRService = SignalRService;
var _a;
//# sourceMappingURL=signal-r.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/toast.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
const Subject_1 = __webpack_require__("../../../../rxjs/Subject.js");
let ToastService = class ToastService {
    constructor() {
        this.subject = new Subject_1.Subject();
        this.toastObservable = this.subject.asObservable();
    }
    info(message, title) {
        this.makeToast('info', message, title);
    }
    error(message, title) {
        this.makeToast('error', message, title);
    }
    success(message, title) {
        this.makeToast('success', message, title);
    }
    warning(message, title) {
        this.makeToast('warning', message, title);
    }
    makeToast(type, message, title) {
        this.subject.next({ type: type, message: message, title: title });
    }
};
ToastService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [])
], ToastService);
exports.ToastService = ToastService;
//# sourceMappingURL=toast.service.js.map

/***/ }),

/***/ "../../../../../src/app/toast-custom-options.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const ng2_toastr_1 = __webpack_require__("../../../../ng2-toastr/ng2-toastr.js");
class ToastCustomOptions extends ng2_toastr_1.ToastOptions {
    constructor() {
        super(...arguments);
        this.toastLife = 3000;
        this.animate = 'flyRight';
        this.showCloseButton = false;
    }
}
exports.ToastCustomOptions = ToastCustomOptions;
//# sourceMappingURL=toast-custom-options.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
Object.defineProperty(exports, "__esModule", { value: true });
exports.environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
const platform_browser_dynamic_1 = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
const app_module_1 = __webpack_require__("../../../../../src/app/app.module.ts");
const environment_1 = __webpack_require__("../../../../../src/environments/environment.ts");
if (environment_1.environment.production) {
    core_1.enableProdMode();
}
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ }),

/***/ 1:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 2:
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map