(function() {
	var DOM = tinymce.DOM;

    tinymce.create('tinymce.plugins.wipshortcode', {
		mceTout : 0,
		
        init : function(ed, url) {
			var t = this, clearImgHTML, dividerHTML, testiHTML;
			clearImgHTML = '<img src="' + url + '/images/blank.gif" class="mceWPclear mceItemNoResize" title="" />';
            dividerHTML = '<img src="'+url+'/images/line.gif" class="divider mceItemNoResize" title=""/>';
			testiHTML = '<img src="'+url+'/images/trans.gif" class="testi mceItemNoResize" title=""/>';
			
			ed.addButton('2_columns', {
                title : 'Add 2 Columns',
                image : url+'/images/2col.png',
                onclick : function() {
                     ed.selection.setContent('<div class="col_two float_left no_margin_left"><p>Content for column 1</p></div><div class="col_two float_left no_margin_right"><p>Content for column 2</p></div>'+clearImgHTML);

                }
            });
			
			ed.addButton('3_columns', {
                title : 'Add 3 Columns',
                image : url+'/images/3col.png',
                onclick : function() {
                     ed.selection.setContent('<div class="col_three float_left no_margin_left"><p>Content for column 1</p></div><div class="col_three float_left"><p>Content for column 2</p></div><div class="col_three float_left no_margin_right"><p>Content for column 3</p></div>'+clearImgHTML);

                }
            });
			
			ed.addButton('4_columns', {
                title : 'Add 4 Columns',
                image : url+'/images/4col.png',
                onclick : function() {
                     ed.selection.setContent('<div class="col_four float_left no_margin_left"><p>Content for column 1</p></div><div class="col_four float_left"><p>Content for column 2</p></div><div class="col_four float_left"><p>Content for column 3</p></div><div class="col_four float_left no_margin_right"><p>Content for column 4</p></div>'+clearImgHTML);

                }
            });
			
			ed.addButton('1-2-3_columns', {
                title : 'Add 1/3 and 2/3 Columns',
                image : url+'/images/1-2-3col.png',
                onclick : function() {
                     ed.selection.setContent('<div class="col_three float_left no_margin_left"><p>Content for column 1</p></div><div class="col_twothree float_left no_margin_right"><p>Content for column 2</p></div>'+clearImgHTML);

                }
            });
			
			ed.addButton('213_columns', {
                title : 'Add 2/3 and 1/3 Columns',
                image : url+'/images/213col.png',
                onclick : function() {
                     ed.selection.setContent('<div class="col_twothree float_left no_margin_left"><p>Content for column 1</p></div><div class="col_three float_left no_margin_right"><p>Content for column 2</p></div>'+clearImgHTML);

                }
            });
			
			ed.addButton('112_columns', {
                title : 'Add 1/4, 1/4 and 2/4 Columns',
                image : url+'/images/112cols.png',
                onclick : function() {
                     ed.selection.setContent('<div class="col_four float_left no_margin_left"><p>Content for column 1</p></div><div class="col_four float_left"><p>Content for column 2</p></div><div class="col_twofourth float_left no_margin_right"><p>Content for column 3</p></div>'+clearImgHTML);

                }
            });
			
			ed.addButton('121_columns', {
                title : 'Add 1/4, 2/4 and 1/4 Columns',
                image : url+'/images/121cols.png',
                onclick : function() {
                     ed.selection.setContent('<div class="col_four float_left no_margin_left"><p>Content for column 1</p></div><div class="col_twofourth float_left"><p>Content for column 2</p></div><div class="col_four float_left no_margin_right"><p>Content for column 3</p></div>'+clearImgHTML);

                }
            });
			
			ed.addButton('211_columns', {
                title : 'Add 2/4, 1/4 and 1/4 Columns',
                image : url+'/images/211cols.png',
                onclick : function() {
                     ed.selection.setContent('<div class="col_twofourth float_left no_margin_left"><p>Content for column 1</p></div><div class="col_four float_left"><p>Content for column 2</p></div><div class="col_four float_left no_margin_right"><p>Content for column 3</p></div>'+clearImgHTML);

                }
            });
			
			ed.addButton('13_columns', {
                title : 'Add 1/4 and 3/4 Columns',
                image : url+'/images/13cols.png',
                onclick : function() {
                     ed.selection.setContent('<div class="col_four float_left no_margin_left"><p>Content for column 1</p></div><div class="col_threefourth float_left no_margin_right"><p>Content for column 2</p></div>'+clearImgHTML);

                }
            });
			
			ed.addButton('31_columns', {
                title : 'Add 3/4 and 1/4 Columns',
                image : url+'/images/31cols.png',
                onclick : function() {
                     ed.selection.setContent('<div class="col_threefourth float_left no_margin_left"><p>Content for column 1</p></div><div class="col_four float_left no_margin_right"><p>Content for column 2</p></div>'+clearImgHTML);

                }
            });
			
			ed.addButton('divider', {
                title : 'Add divider line',
                image : url+'/images/divider.png',
                onclick : function() {
                     ed.selection.setContent(dividerHTML);

                }
            });
			
			ed.addButton('tabs', {
                title : 'Add Tab Shortcode',
                image : url+'/images/tab.png',
                onclick : function() {
                     var tabs;
					 
					tabs = '[tabgroup]';
					tabs += "<br/>";
					tabs += '[tab title="Tab 1"]Tab 1 content goes here.[/tab]';
					tabs += "<br/>";
					tabs += '[tab title="Tab 2"]Tab 2 content goes here.[/tab]';
					tabs += "<br/>";
					tabs += '[tab title="Tab 3"]Tab 3 content goes here, etc...[/tab]';
					tabs += "<br/>";
					tabs += '[/tabgroup]';
					 
					 ed.selection.setContent(tabs);

                }
            });
			
			ed.addButton('toggle', {
                title : 'Add Toggle Content Shortcode',
                image : url+'/images/toggle.png',
                onclick : function() {
                    var togs;
					 
					togs = '[toggle title="Toggle tittle"]';
					togs += '<br/>';
					togs += 'content goes here...';
					togs += '<br/>';
					togs += '[/toggle]';
					 
					 ed.selection.setContent(togs);

                }
            });
			
			ed.addButton('wip_video', {
                title : 'Add Video Shortcode',
                image : url+'/images/video.gif',
                onclick : function() {
						ed.windowManager.open({
							file : url + '/htm/video.htm',
							width : 360 + ed.getLang('example.delta_width', 0),
							height : 380 + ed.getLang('example.delta_height', 0),
							inline : 1
						}, {
							plugin_url : url, // Plugin absolute URL
							some_custom_arg : '' // Custom argument
						});
                }
            });
			
			ed.addButton('wip_button', {
                title : 'Add Button Shortcode',
                image : url+'/images/button.png',
                onclick : function() {
						ed.windowManager.open({
							file : url + '/htm/button.htm',
							width : 560 + ed.getLang('example.delta_width', 0),
							height : 400 + ed.getLang('example.delta_height', 0),
							inline : 1
						}, {
							plugin_url : url, // Plugin absolute URL
							some_custom_arg : '' // Custom argument
						});
                }
            });
		
			
			t._handleClearBreak(ed, url);
			t._handleDivider(ed, url);
			t._handleTesti(ed, url);
			
        },
        createControl : function(n, cm) {
            return null;
        },
        getInfo : function() {
            return {
                longname : "The_Builder theme Shortcode",
                author : 'WebInPixels',
                authorurl : 'http://themeforest.net/user/webinpixels',
                infourl : 'http://themeforest.net/user/webinpixels',
                version : "1.0"
            };
        },
		
		_handleClearBreak : function(ed, url) {
			var clearImgHTML;

			clearImgHTML = '<img src="' + url + '/images/blank.gif" class="mceWPclear mceItemNoResize" title="" />';
			
			ed.onBeforeSetContent.add(function(ed, o) {
				if ( o.content ) {
					o.content = o.content.replace(/<!--clear-->/g, clearImgHTML);
				}
			});

			// Replace images with morebreak
			ed.onPostProcess.add(function(ed, o) {
				if (o.get)
					o.content = o.content.replace(/<img[^>]+>/g, function(im) {
						if (im.indexOf('class="mceWPclear') !== -1)
							im = '<!--clear-->';

						return im;
					});

			});

		},
		
		_handleDivider : function(ed, url) {
			var dividerHTML;
			dividerHTML = '<img src="'+url+'/images/line.gif" class="divider mceItemNoResize" title=""/>';
			
			ed.onBeforeSetContent.add(function(ed, o) {
				if ( o.content ) {
					o.content = o.content.replace(/<!--divider-->/g, dividerHTML);
				}
			});

			ed.onPostProcess.add(function(ed, o) {
				if (o.get)
					o.content = o.content.replace(/<img[^>]+>/g, function(it) {
						if (it.indexOf('class="divider') !== -1)
							it = '<!--divider-->';

						return it;
					});
			});

		},
		
		_handleTesti : function(ed, url) {
			var testiHTML;
			testiHTML = '<img src="'+url+'/images/trans.gif" class="testi mceItemNoResize" title=""/>';
			
			ed.onBeforeSetContent.add(function(ed, o) {
				if ( o.content ) {
					o.content = o.content.replace(/<!--testimonial-->/g, testiHTML);
				}
			});

			ed.onPostProcess.add(function(ed, o) {
				if (o.get)
					o.content = o.content.replace(/<img[^>]+>/g, function(ts) {
						if (ts.indexOf('class="testi') !== -1)
							ts = '<!--testimonial-->';

						return ts;
					});
			});

		}
		
		
    });
    tinymce.PluginManager.add('wipshortcode', tinymce.plugins.wipshortcode);
	
})();