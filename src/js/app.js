/*!
 * JavaScript for CVSS (Common Vulnerability Scoring System) Version 3
 * These codes are licensed under CC0.
 * http://creativecommons.org/publicdomain/zero/1.0/deed.ja
 */

/**
 * cvss3 (Common Vulnerability Scoring System Version 3) module
 * @public
 */
(function() {
	"use strict;"
	require('./cvss3');

	/**
	 * set score of base metrics
	 *
	 * @param {object} form : document form
	 * @public
	 */
	CVSS3.getBaseScore = function getBaseScore(form) {
		var vector = getBaseVector(form);
		form.baseVecor.value = vector;
		var base = (new CVSS3_Base()).importVector(vector);
		document.getElementById("baseScore").innerHTML = " " + base.getScore() + " ";
	};

	/**
	 * set vector of base metrics
	 *
	 * @param {object} form : document form
	 * @return base vector
	 * @private
	 */
	function getBaseVector(form) {
		var av = 'AV:' + getRadioValue(form.baseAV, 'P');
		var ac = 'AC:' + getRadioValue(form.baseAC, 'H');
		var pr = 'PR:' + getRadioValue(form.basePR, 'H');
		var ui = 'UI:' + getRadioValue(form.baseUI, 'R');
		var s = 'S:' + getRadioValue(form.baseS, 'U');
		var c = 'C:' + getRadioValue(form.baseC, 'N');
		var i = 'I:' + getRadioValue(form.baseI, 'N');
		var a = 'A:' + getRadioValue(form.baseA, 'N');
		return "CVSS:3.0/" + av + '/' + ac + '/' + pr + '/' + ui + '/' + s + '/' + c + '/' + i + '/' + a;
	}

	/**
	 * set vector of base metrics
	 *
	 * @param {object} radioItem : radio button object
	 * @param {string} defvalue : default value
	 * @return base vector
	 * @private
	 */
	function getRadioValue(radioItem, defvalue) {
		if ( typeof (radioItem.length) == "undefined" ) {
			return defvalue;
		} else {
			var len = radioItem.length;
			for (var i = 0; i < len; i++ ) {
				if ( radioItem[i].checked ) {
					return radioItem[i].value;
				}
			}
			return radioItem[len-1].value;
		}
	}

})();
