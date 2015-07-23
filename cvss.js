/* JavaScript for CVSS (Common Vulnerability Scoring System)
 *   Revised by Yasuhiro (Spiegel) ARAKAWA on 2007/02/28
 *   This file is licensed under a CC-by license.
 *   http://www.baldanders.info/spiegel/archive/cvss/
 */

if ( typeof(CVSS) == 'undefined' ) CVSS = function() {};

// --------------------------------------------------------------------
// Base Metrics Class
CVSS.BaseMetrics = function(baseAV, baseAC, baseAu, baseC, baseI, baseA, baseB) {
    this.setBaseAV(baseAV);
    this.setBaseAC(baseAC);
    this.setBaseAu(baseAu);
    this.setBaseC(baseC);
    this.setBaseI(baseI);
    this.setBaseA(baseA);
    this.setBaseB(baseB);
};
CVSS.BaseMetrics.prototype.setBaseAV = function(val) {
    switch (val) {
    case 0 : // local
        this.baseAV = 0.7;
        break;
    default : // remote
        this.baseAV = 1.0;
        break;
    }
};
CVSS.BaseMetrics.prototype.setBaseAC = function(val) {
    switch (val) {
    case 0 : // high
        this.baseAC = 0.8;
        break;
    default : //low
        this.baseAC = 1.0;
        break;
    }
};
CVSS.BaseMetrics.prototype.setBaseAu = function(val) {
    switch (val) {
    case 0 : // required
        this.baseAu = 0.6;
        break;
    default : // not required
        this.baseAu = 1.0;
        break;
    }
};
CVSS.BaseMetrics.prototype.setBaseC = function(val) {
    switch (val) {
    case 0 : // none
        this.baseC = 0.0;
        break;
    case 1 : // partial
        this.baseC = 0.7;
        break;
    default : // complete
        this.baseC = 1.0;
        break;
    }
};
CVSS.BaseMetrics.prototype.setBaseI = function(val) {
    switch (val) {
    case 0 : // none
        this.baseI = 0.0;
        break;
    case 1 : // partial
        this.baseI = 0.7;
        break;
    default : // complete
        this.baseI = 1.0;
        break;
    }
};
CVSS.BaseMetrics.prototype.setBaseA = function(val) {
    switch (val) {
    case 0 : // none
        this.baseA = 0.0;
        break;
    case 1 : // partial
        this.baseA = 0.7;
        break;
    default : // complete
        this.baseA = 1.0;
        break;
    }
};
CVSS.BaseMetrics.prototype.setBaseB = function(val) {
    switch (val) {
    case 0 : // normal
        this.baseBc = (1.0 / 3.0);
        this.baseBi = (1.0 / 3.0);
        this.baseBa = (1.0 / 3.0);
        break;
    case 1 : // confidentiality
        this.baseBc = 0.5;
        this.baseBi = 0.25;
        this.baseBa = 0.25;
        break;
    case 2 : // Integrity
        this.baseBc = 0.25;
        this.baseBi = 0.5;
        this.baseBa = 0.25;
        break;
    default : // Availability
        this.baseBc = 0.25;
        this.baseBi = 0.25;
        this.baseBa = 0.5;
        break;
    }
};
CVSS.BaseMetrics.prototype.getScore = function() {
    return Math.round( 10.0 * this.baseAV * this.baseAC * this.baseAu * (this.baseC * this.baseBc + this.baseI * this.baseBi + this.baseA * this.baseBa) );
};

// --------------------------------------------------------------------
// Temporal Metrics Class
CVSS.TemporalMetrics = function(temporalE, temporalRL, temporalRC, baseMetrics) {
    this.setTemporalE(temporalE);
    this.setTemporalRL(temporalRL);
    this.setTemporalRC(temporalRC);
    this.setBaseMetrics(baseMetrics);
};
CVSS.TemporalMetrics.prototype.setTemporalE = function(val) {
    switch (val) {
    case 0 : // unproven
        this.temporalE = 0.85;
        break;
    case 1 : // proof of concept
        this.temporalE = 0.9;
        break;
    case 2 : // functional
        this.temporalE = 0.95;
        break;
    default : // high
        this.temporalE = 1.0;
        break;
    }
};
CVSS.TemporalMetrics.prototype.setTemporalRL = function(val) {
    switch (val) {
    case 0 : // official fix
        this.temporalRL = 0.87;
        break;
    case 1 : // temporary fix
        this.temporalRL = 0.9;
        break;
    case 2 : // workaround
        this.temporalRL = 0.95;
        break;
    default : // unavailable
        this.temporalRL = 1.0;
        break;
    }
};
CVSS.TemporalMetrics.prototype.setTemporalRC = function(val) {
    switch (val) {
    case 0 : // unconfirmed
        this.temporalRC = 0.9;
        break;
    case 1 : // uncorroborated
        this.temporalRC = 0.95;
        break;
    default : // confirmed
        this.temporalRC = 1.0;
        break;
    }
};
CVSS.TemporalMetrics.prototype.setBaseMetrics = function(val) {
    if ( typeof (val.getScore) == "undefined" ) {
        this.baseScore = 10.0;
    }
    else {
        this.baseScore = val.getScore();
    }
};
CVSS.TemporalMetrics.prototype.getScore = function() {
    return Math.round( this.baseScore * this.temporalE * this.temporalRL * this.temporalRC );
};

// --------------------------------------------------------------------
// Environmental Metrics Class
CVSS.EnvironmentalMetrics = function(environmentalCD, environmentalTD, temporalMetrics) {
    this.setEnvironmentalCD(environmentalCD);
    this.setEnvironmentalTD(environmentalTD);
    this.setTemporalMetrics(temporalMetrics);
};
CVSS.EnvironmentalMetrics.prototype.setEnvironmentalCD = function(val) {
    switch (val) {
    case 0 : // none
        this.environmentalCD = 0.0;
        break;
    case 1 : // low
        this.environmentalCD = 0.1;
        break;
    case 2 : // medium
        this.environmentalCD = 0.3;
        break;
    default : // high
        this.environmentalCD = 0.5;
        break;
    }
};
CVSS.EnvironmentalMetrics.prototype.setEnvironmentalTD = function(val) {
    switch (val) {
    case 0 : // none
        this.environmentalTD = 0.0;
        break;
    case 1 : // low
        this.environmentalTD = 0.25;
        break;
    case 2 : // medium
        this.environmentalTD = 0.75;
        break;
    default : // high
        this.environmentalTD = 1.0;
        break;
    }
};
CVSS.EnvironmentalMetrics.prototype.setTemporalMetrics = function(val) {
    if ( typeof (val.getScore) == "undefined" ) {
        this.temporalScore = 10.0;
    }
    else {
        this.temporalScore = val.getScore();
    }
};
CVSS.EnvironmentalMetrics.prototype.getScore = function() {
    return Math.round( (this.temporalScore + ( (10.0 - this.temporalScore) * this.environmentalCD ) ) * this.environmentalTD );
};

/* end of file */
