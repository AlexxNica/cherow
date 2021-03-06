# Changelog

*2017-10-14: Version 0.7.4*

 * Added 'sourceType' option for parsing module code.
 * Added 'globalReturn' option. Allow return statement in global scope
 * Fixed correct error location tracking for arrows

*2017-10-16: Version 0.8.1*

* Fails / passes correctly on block-scoping
* Fails / passes correctly on duplicates in ForStatement

*2017-10-16: Version 0.8.3*

* Optimized label validation, and fixed a bug where not checking for undefined

*2017-10-18: Version 0.8.9*

* Fixed lexical issues in scope
* Fixed variabel so they are failing correctly on complex binding patterns
* Reduced code size
* Optimized part of scanner code

*2017-10-18: Version 0.9.0*

- parsed through mostly all common libraries on GH and fixed a few bugs along the road

*2017-10-18: Version 0.9.2*

- Fixed scoping issue with two or more switch statements in global
- Fixed issue with await in async arrow param list in sloppy mode
- Fixed several minor issues
- Do and Throw expression now throw correctly if the options isn't set
- Reduced code size

*2017-10-18: Version 0.9.3*
- Fixed issue with reserved words in module code for object expressions

*2017-10-19: Version 0.9.8*
- Refactored module-code.