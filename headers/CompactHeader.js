//responsible for coordinating when the length of the title bar changes, so it will displace the bottom bars positioning respectively
new MutationObserver((mutations) => {
	mutations.forEach(function(mutation) {
		mutation.addedNodes.forEach(function(addedNode) {
			//looking for steamdesktop_OuterFrame_3mz8w which is the parent of titlebarcontrols_TitleBarControls_
			if (addedNode.classList && addedNode.classList.contains('_3mz8wQ6Q44B8P7pzPP4Iyw')) {
				const title_bar_controls = document.querySelector('._3cykd-VfN_xBxf3Qxriccm')
				const bottom_bar_controls = document.querySelector('._1_yS5UP7el0aN4vntx3dx')	
				//titlebar observer
				new MutationObserver((mutationsList) => {
					for (const _ of mutationsList) {
						//every time the titlebar changes, update the offset of the bottombars positioning (they are exactly relative)
						bottom_bar_controls.style.setProperty('right', `${title_bar_controls.offsetWidth + 90}px`, 'important');
					}
				//listen for mutations on the titlebar, but we dont listen for anything in specific, just changes
				}).observe(title_bar_controls, { attributes: true, childList: true, subtree: true, characterData: true });
			}
		});
	});
//create an observer on the document body so you can read new DOM modifications. 
//used to tell when titlebar contents have loaded
}).observe(document.body, { childList: true, subtree: true });