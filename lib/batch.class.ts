// ****** Object manipulation ******** //
// This class holds the logic for creating a batch, adding content or denied content to it
// and then compute the resulting list of content accepted in a correct shape
// You can add to the class as much properties or methods you consider needed
// There is no real optimisation here, still a clean code with coherent methods will be appreciated
// In the tests, the negative values of content object must be ignored

export class Batch {
	// content is an object with the stockId as key, and the amount as value
	// amount ∈ [0, +∞]
	public content: any // example: {'10': 5, '12': 3, '14': 20} -> the batch contains 5 items of stockId 10, 3 items of stockId 12, 20 items of stockId 14
	// deniedContent is an object with the stockId as key, and the amount as value 
	public deniedContent: any // example: {'10': 0, '12': 2, '14': 5}

	// listAcceptedContent is the resulting acceptedContent (ie, if deniedContent['12'] = 2, content['12'] = 3 then the user accepts 1 item of stockId 12) 
	// listAcceptedContent is shaped as a list: [amountStockId1, stockId1, amountStockId2, stockId2,...], where stockIds are ordered from smaller to bigger
	// if amountStockId == 0 then it should not be set inside listAcceptedContent
	public listAcceptedContent: number[] // example: [5, 10, 1, 12, 15, 14]

	// TODO: 
	// Set the content in the constructor
	// Check if the content has the good shape (object with integers)
	constructor(content : any) {
	}

	// TODO:
	// Should set the content if empty content in the instance
	// Should add the content to the instance content if content already present (add amounts by stockId)
	// Return true if operation succeeded, else false
	addContent(content: any) : boolean {
		return false
	}

	// TODO:
	// Should set the deniedContent if empty deniedContent in the instance
	// Should add the deniedContent to the instance deniedContent if deniedContent already present (add amounts by stockId)
	// Return true if operation succeeded, else false
	addDeniedContent(deniedContent: any) : boolean {
		return false
	}

	// TODO:
	// Should set the listAcceptedContent based on the difference between content and deniedContent, shaped as a list
	// Return true if operation succeeded, else false
	setListAcceptedContent() : boolean {
		return false
	}
}