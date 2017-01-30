const oppish = require('../oppish');

describe('Oppish - correctness tests', () => {
	it('should correctly handle a simple word', () => {
		expect(oppish('word')).toBe('wopporoppdopp');
	});

	it('should correctly handle the double consonant rule', () => {
		expect(oppish('all')).toBe('allopp');
	});

	it('should respect the two letter word rule', () => {
		expect(oppish('hi')).toBe('opphi');
	});

	it('should leave capitalisation alone', () => {
		expect(oppish('Hello')).toBe('Hoppelloppo');
	});

	it('should respect the two letter word rule with contractions', () => {
		expect(oppish('I\'m')).toBe('oppI\'m');
	});

	it('should correctly handle contractions in larger words', () => {
		expect(oppish('Kevin\'s challenge is mean.')).toBe('Koppevoppinopp\'sopp copphoppalloppenoppgoppe oppis moppeanopp.');
	});

	it('should correctly handle punctuation in the middle of a sentence', () => {
		expect(oppish('This - that')).toBe('Topphoppisopp - topphoppatopp');
	});

	it('should correctly translate a simple sentence', () => {
		expect(oppish('Hello world from oppish!')).toBe('Hoppelloppo wopporopploppdopp fopproppomopp oppoppisopphopp!');
	});

	it('should leave punctuation alone', () => {
		expect(oppish('./.,!@#^#$@%@$&^#$%')).toBe('./.,!@#^#$@%@$&^#$%');
	});

	it('should leave Korean alone', () => {
		expect(oppish('안녕하세요 세계')).toBe('안녕하세요 세계');
	});

	it('should leave Japanese alone', () => {
		expect(oppish('こんにちは世界')).toBe('こんにちは世界');
	});

	it('should leave emoji characters alone', () => {
		expect(oppish(' 🇦🇫 🇦🇽 🇦🇱 🇩🇿 🇦🇸 🇦🇩 🇦🇴 🇦🇮 🇦🇶 🇦🇬 🇦🇷 🇦🇲 🇦🇼 🇦🇨 🇦🇺  ')).toBe(' 🇦🇫 🇦🇽 🇦🇱 🇩🇿 🇦🇸 🇦🇩 🇦🇴 🇦🇮 🇦🇶 🇦🇬 🇦🇷 🇦🇲 🇦🇼 🇦🇨 🇦🇺  ');
	});

	it('should leave tabs alone and recognise them as spaces', () => {
		expect(oppish('Hi\t\ttabs.')).toBe('oppHi\t\ttoppaboppsopp.');
	});

	it('should leave numbers alone', () => {
		expect(oppish('I have 3 chickens.')).toBe('oppI hoppavoppe 3 copphoppicoppkoppenoppsopp.');
	});

	it('should leave large numbers alone', () => {
		expect(oppish('I have 323490823489 chickens.')).toBe('oppI hoppavoppe 323490823489 copphoppicoppkoppenoppsopp.');
	});

	it('should leave mixed whitespace alone', () => {
		expect(oppish(`This is

		two paragraphs.`)).toBe(`Topphoppisopp oppis

		toppwoppo popparoppagopproppapopphoppsopp.`);
	});

	it('should leave trailing whitespace alone', () => {
		expect(oppish('Test       ')).toBe('Toppesopptopp       ');
	});
});

describe('Oppish - performance tests', () => {

	// I'm not going to provide these to you to prevent gaming of specific texts, but they're going to involve
	// reading large pieces of text from Project Gutenberg: http://gutenberg.net.au/ and running oppish() on them,
	// timing the runtime of the result 3 times on my MacBook Air, then averaging. Use as much memory as you like
	// as long as you don't crash the node process.

});
