// сам класс: 
function _WithEvent(types) { 
	var listeners = {}; // список слушателей, разделенный по типам событий

	for (var i=0, l=types.length; i<l; i++) { 
		listeners[types[i]] = []; 
	} 

	this.addListener = function(type, fn, args, context) { 
		// добавляем случателя на события type: 
		// fn - исполняемя функция, args - 2й+ аргументы, context - this в исполняемом методе
		listeners[type].push( new Listener(fn, args, context) ); 
	}; 

	this.fireEvent = function(type, data) { 
		// запускаем событие type, все св-ва из data перекочуют в первый аргумент
		var evt = new Event(type, data); 
		for (var i=0, l=listeners[type].length; i<l; i++) { 
			if (evt.stoped) break; 
			evt.lastRet.push( listeners[type][i].fire(evt) ); 
		} 
		return !evt.stoped; 
	}; 

	function Listener(fn, args, context) { 
		// класс слушателей
		this.fire = function(evt) { 
			try { 
				return fn.apply(context || this, [evt].concat(args || [])); 
			} catch(er) { 
				return; 
			} 
		}; 
	} 

	function Event(type, data) { 
		// класс события
		if (typeof(data)=="object") { 
			for (var key in data) { 
				this[key] = data[key]; 
			} 
		} 
		this.type = type; 
		this.lastRet = []; 
		this.stoped = false; 
		this.stop = function() { 
			this.stoped = true; 
		}; 
	} 
} 

// и пример использования: 
function Q(map) { 
	_WithEvent.call(this, [ "q", "w" ]); 
	var countQ = 0, countW = 0;
	
	this.q = function() {
		// запускаем событие "q" и смотрим (!success), не застопили его
		var success = this.fireEvent("q", {curValue: countQ, nextValue:countQ+1});
		if (!success) return;
		// если не застопили
		countQ++;
	};
	
	this.w = function() {
		// аналогично q
		var success = this.fireEvent("w", {curValue: countW, nextValue:countW+1, q: countQ});
		if (!success) return;
		countW++;
	};
}

// подписываемся
var obj = new Q();
obj.addListener("q", myAlert);
obj.addListener("w", onW);
obj.addListener("w", myAlert);
obj.q();
obj.w(); // событие стопится, т.к. evt.q==1
obj.q();
obj.w();

function myAlert(evt) {
	alert(evt.type +": "+ evt.curValue +" >> "+ evt.nextValue);
}

function onW(evt) {
	if (evt.q==1) evt.stop();
}