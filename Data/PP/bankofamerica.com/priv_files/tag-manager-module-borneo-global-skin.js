/*Determine LLE vs Prod */
function bactm_setTMLib() {
  var env = "prod";
  var testString = window.location.href;
  if ( testString.indexOf( '.bankofamerica.com' ) > -1 ) {
    var tempArr = testString.split( '.bankofamerica.com' );
    var tempStr = tempArr[ 0 ];
    if ( tempStr.indexOf( '//' ) > -1 ) {
      tempArr = tempStr.split( '//' );
      tempStr = tempArr[ 1 ];
      if ( tempStr.indexOf( '.' ) > -1 ) {
        tempArr = tempStr.split( '.' );
        tempStr = tempArr[ 0 ];
        var tempStrPt2 = tempArr[ 1 ];
      }
      if ( tempStr.indexOf( 'www' ) > -1 ) {
        if ( tempStr.indexOf( '-' ) > -1 ) {
          env = "notprod";
        } else if ( tempStrPt2 != null ) {
          if ( tempStrPt2.indexOf( 'ecnp' ) > -1 ) {
            env = "notprod";
          }
        } else {
          env = "prod";
        }
      } else if ( tempStrPt2 != null ) {
        if ( tempStrPt2.indexOf( 'ecnp' ) > -1 ) {
          env = "notprod";
        }
      } else {
        env = "prod";
      }
    }
  }
  return env;
}

function bactm_validateValue( value ) {

  var isEmptyObject = function( obj ) {
      if ( typeof obj === "object" ) {
        for ( var prop in obj ) {
          if ( obj.hasOwnProperty( prop ) )
            return false;
        }
        return true;
      } else {
        return false;
      }
    },
    isArray = function( arg ) {
      return Object.prototype.toString.call( arg ) === '[object Array]';
    },
    isEmptyArray = function( arr ) {
      return ( isArray( arr ) && arr.length === 0 );
    },
    empty = ( value === "" || value === null || typeof value === "undefined" 
      || isEmptyObject( value ) || isEmptyArray( value ) );

  return !empty;
}
