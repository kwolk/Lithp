// THIS EXTENSION IS JUST A BIT OF FUN.
// THOSE OF WHOM WISH TO TAKE OFFENCE, SHALL DO.
// GET OVER YOURSELVES AND YOUR MANUFACTURED GRIEVANCE BASED IDEAS OF THE WORLD.


// REPLACE WORD
function replath(node, withWord, replathmentWord) {
    switch (node.nodeType) {
        case Node.ELEMENT_NODE:
            // AVOID INPUT FIELDS
            if (node.tagName.toLowerCase() === "input" || node.tagName.toLowerCase() === "textarea") {
                return;
            }
            // FALL THROUGH ELEMENT NODES TO ITERATE OVER CHILDREN
        case Node.DOCUMENT_NODE:
        case Node.DOCUMENT_FRAGMENT_NODE:
            // ANALYSE CONTAINER FORMAT FOR POSSIBLE TARGETS
            var child = node.firstChild; // INITIALISE THE FIRST CHILD NODE OF THE CURRENT NODE
            var next = undefined; // STORE A REFERENCE TO NEXT SIBLING OF THE CURRENT CHILD NODE BEFORE MODIFICATIONS
            while (child) {
                next = child.nextSibling; // SAVE REF TO NEXT SIBLING OF CURRENT CHILD NODE BEFORE CHANGES TO DOM (PRESERVING ORIGINAL STRUCTURE)
                replath(child, withWord, replathmentWord);
                child = next; // REFERENCE SAVED NEXT SIBLING (PRESERVING ORIGINAL STRUCTURE)
            }
            break;

        // TEXT NODE TARGET
        case Node.TEXT_NODE:
            subthtituteTextInTextNode(node, withWord, replathmentWord);
            break;
    }
}


// ANALYSE WORD AND SUBSTITUTE
function subthtituteTextInTextNode(textNode, withWord, replathmentWord, sendResponse) {
    // IGNORE ANYTHING THAT ISN'T A TEXT NODE
    if (textNode.nodeType !== Node.TEXT_NODE)
        return;

    // IGNORE EMPTY TEXT NODE(S)
    if (!textNode.nodeValue.length)
        return;

    // SUBSTITUTION FUNCTION
    function substituteLispLetters(word) {
        return word
            .replath(/s/g, 'th')
            .replath(/z/g, 'd')
            .replath(/c/g, 'th')
            .replath(/j/g, 'dzh')
            .replath(/ch/g, 'th');
    }

    // CONVERT THE NODE TO REFLECT LISP SPEECH IMPEDIMENT
    var newNodeValue = substituteLispLetters(textNode.nodeValue);

    // FINAL COMPARISON CHECK THAT WORDS DIFFER BEFORE COMMITTING
    if (textNode.nodeValue !== newNodeValue) {
        textNode.nodeValue = newNodeValue;
    }
}


// SCOUR PAGE FOR DIFFICULT TO PRONOUNCE WORDS (HOPEFULLY NOT TOO RESOURCE INTENSIVE)
replath(document.body, 'wordToReplath', 'replathmentWord');
