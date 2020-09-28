(function () {
	jQuery.expr[':'].epmstartswith = function (a, i, m) {
		return jQuery(a).text().toUpperCase().substr(0, m[3].length) === m[3].toUpperCase();
	};

	function addSearchTopics() {
		var keepme = UI.pickTopicClick;
		UI.pickTopicClick = function (element) {
			keepme(element);
			var isResearch = element === "research";
			if (isResearch == false) {
				var game = GameManager.company.currentGame;
				if (game && (game.flags.lockedSettings && game.flags.lockedSettings.topic))
					return
			}
			if (!isResearch && element)
				return

			var modal = $(".simplemodal-data");
			var container = modal.find(".listContainer");
			var title = modal.find(".overlayTitle").text("Pick Topic".localize("heading"));
			var e = title.find('.listContainer').find('.selectorButton');
			var a = title.parent().find('.listContainer');
			if (!modal.find("#topicsToPick").length)
				a.wrap('<div id="topicsToPick"></div>');
			a.prepend('<div id="topicSearchDiv" class="centeredButtonWrapper">Topic Search: <input id="topicSearch" type="text" value="" maxlength="35" style="font-size: 22pt" /></div>');

			$("#topicsToPick > * > *[id!='topicSearchDiv'] > *").each(function (i, e) {
				e = $(e);
				count = usedTopics(e.text());
				if (count >= 0) {
					count = ' <span class="numberCircle">' + count + '</span>';
				} else {
					count = '';
				}
				e.append(count);
			});
			
			$('#topicSearch').on('input', function (e) {
				var searchstr = $(this).val();
				$("#topicsToPick > * > *[id!='topicSearchDiv'] > *").css({ position: '', "margin-right": 0, "margin-bottom": 0 }).show();
				$('#topicsToPick .numberCircle').css({ position: 'relative', float: 'right', top: '-75%' });
				if (searchstr.length > 0) {
					$("#topicsToPick > * > *[id!='topicSearchDiv'] > :not(:epmstartswith(" + searchstr + "))").hide();
					$("#topicsToPick > * > *[id!='topicSearchDiv'] > :epmstartswith(" + searchstr + ")");
					$('#topicsToPick .numberCircle');
				}
			});
		}
		$('head').append('<style id="topicSearchCss" type="text/css"> .listContainer { overflow-x: hidden; } #topicsToPick { overflow-x: hidden; overflow-y: visible; height: 100%; position: relative; } </style>');
		$('#topicSearchCss').append('.numberCircle { position: absolute; top: 1px; right: 1px; display: block; height: 20px; width: 20px; line-height: 18.5px; border-radius: 50%; background-color: #494949; color: #ededed; text-align: center; font-size: 13px; }');
	} addSearchTopics();

	function usedTopics(topic) {
		var a = GameManager.company;
		var uses = 0;
		if (topic === "?")
			uses = -1;

		if (a.gameLog.length >= 1)
			for (var i = 0; i < a.gameLog.length; i++)
			{
				var gameTopic = a.gameLog[i].topic.name;
				if (gameTopic == topic)
					uses++;
			}
				

		return uses;
	}
})();