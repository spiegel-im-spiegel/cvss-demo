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
		//Base Metrics
		var vector = getBaseVector(form);
		form.baseVecor.value = vector;
		var base = new CVSS3_Base(vector);
		//output score
		document.getElementById("baseScore").innerHTML = " " + base.getScore() + " ";
	};

	/**
	 * set score of temporal metrics
	 *
	 * @param {object} form : document form
	 * @public
	 */
	CVSS3.getTemporalScore = function getTemporalScore(form) {
		//Base Metrics
		var vector = getBaseVector(form);
		form.baseVecor.value = vector;
		var base = new CVSS3_Base(vector);
		//Temporal Metrics
		vector = getTemporalVector(form);
		form.temporalVecor.value = vector;
		var temporal = new CVSS3_Temporal(vector);
		//output score
		document.getElementById("temporalScore").innerHTML = " " + temporal.getScore(base) + " ";
	};

	/**
	 * set score of temporal metrics
	 *
	 * @param {object} form : document form
	 * @public
	 */
	CVSS3.getEnvironmentalScore = function getEnvironmentalScore(form) {
		//Base Metrics
		var vector = getBaseVector(form);
		form.baseVecor.value = vector;
		var base = new CVSS3_Base(vector);
		//Temporal Metrics
		vector = getTemporalVector(form);
		form.temporalVecor.value = vector;
		var temporal = new CVSS3_Temporal(vector);
		//Environmental Metrics
		vector = getEnvironmentalVector(form);
		form.envVecor.value = vector;
		var environmental = new CVSS3_Environmental(vector);
		//output score
		document.getElementById("envScore").innerHTML = " " + environmental.getScore(base, temporal) + " ";
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
	 * set vector of temporal metrics
	 *
	 * @param {object} form : document form
	 * @return base vector
	 * @private
	 */
	function getTemporalVector(form) {
		var e = 'E:' + getRadioValue(form.tempoE, 'X');
		var rl = 'RL:' + getRadioValue(form.tempoRL, 'X');
		var rc = 'RC:' + getRadioValue(form.tempoRC, 'X');
		return getBaseVector(form) + '/' + e + '/' + rl + '/' + rc;
	}

	/**
	 * set vector of environmental metrics
	 *
	 * @param {object} form : document form
	 * @return base vector
	 * @private
	 */
	function getEnvironmentalVector(form) {
		var cr = 'CR:' + getRadioValue(form.envCR, 'X');
		var ir = 'IR:' + getRadioValue(form.envIR, 'X');
		var ar = 'AR:' + getRadioValue(form.envAR, 'X');
		var mav = 'MAV:' + getRadioValue(form.envMAV, 'X');
		var mac = 'MAC:' + getRadioValue(form.envMAC, 'X');
		var mpr = 'MPR:' + getRadioValue(form.envMPR, 'X');
		var mui = 'MUI:' + getRadioValue(form.envMUI, 'X');
		var ms = 'MS:' + getRadioValue(form.envMS, 'X');
		var mc = 'MC:' + getRadioValue(form.envMC, 'X');
		var mi = 'MI:' + getRadioValue(form.envMI, 'X');
		var ma = 'MA:' + getRadioValue(form.envMA, 'X');
		return getTemporalVector(form) + '/' + cr + '/' + ir + '/' + ar + '/' + mav + '/' + mac + '/' + mpr + '/' + mui + '/' + ms + '/' + mc + '/' + mi + '/' + ma;
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
