/**

	This code is generated.
	For more information see generation/README.md.
*/


function sanitize_viewInteraction(value) {
  return typeof value === 'function' ? value() : value;
} 
function sanitize_matcher(matcherThunk) {
  const matcher = typeof matcherThunk === 'function' ? matcherThunk() : matcherThunk;
  if (matcher.type) {
    return matcher.value;
  }

  const originalMatcher = typeof matcher._call === 'function' ? matcher._call() : matcher._call;
  return originalMatcher.type ? originalMatcher.value : originalMatcher;
} 
class DetoxAssertion {
  static assertMatcher(i, m) {
    ;
    return {
      target: {
        type: "Class",
        value: "com.wix.detox.espresso.DetoxAssertion"
      },
      method: "assertMatcher",
      args: [{
        type: "Invocation",
        value: sanitize_viewInteraction(i)
      }, {
        type: "Invocation",
        value: sanitize_matcher(m)
      }]
    };
  }

  static assertNotVisible(i) {
    return {
      target: {
        type: "Class",
        value: "com.wix.detox.espresso.DetoxAssertion"
      },
      method: "assertNotVisible",
      args: [{
        type: "Invocation",
        value: sanitize_viewInteraction(i)
      }]
    };
  }

  static assertNotExists(i) {
    return {
      target: {
        type: "Class",
        value: "com.wix.detox.espresso.DetoxAssertion"
      },
      method: "assertNotExists",
      args: [{
        type: "Invocation",
        value: sanitize_viewInteraction(i)
      }]
    };
  }

  static waitForAssertMatcher(i, m, timeoutSeconds) {
    ;
    if (typeof timeoutSeconds !== "number") throw new Error("timeoutSeconds should be a number, but got " + (timeoutSeconds + (" (" + (typeof timeoutSeconds + ")"))));
    return {
      target: {
        type: "Class",
        value: "com.wix.detox.espresso.DetoxAssertion"
      },
      method: "waitForAssertMatcher",
      args: [{
        type: "Invocation",
        value: sanitize_viewInteraction(i)
      }, {
        type: "Invocation",
        value: sanitize_matcher(m)
      }, {
        type: "Double",
        value: timeoutSeconds
      }]
    };
  }

  static waitForAssertMatcherWithSearchAction(i, m, searchAction, searchMatcher) {
    ;
    ;
    return {
      target: {
        type: "Class",
        value: "com.wix.detox.espresso.DetoxAssertion"
      },
      method: "waitForAssertMatcherWithSearchAction",
      args: [{
        type: "Invocation",
        value: sanitize_viewInteraction(i)
      }, {
        type: "Invocation",
        value: sanitize_matcher(m)
      }, {
        type: "ViewAction",
        value: searchAction
      }, {
        type: "Invocation",
        value: sanitize_matcher(searchMatcher)
      }]
    };
  }

}

module.exports = DetoxAssertion;