created: 20181108075032695
creator: Charles Delbé
modified: 20181108075032695
modifier: Charles Delbé
title: c:\Users\Charles\dev\projects\tiddlywiki\wiki\wiki\tiddlers\libs\ckeditor\samples\old\assets\posteddata.php
tmap.id: a323711d-233e-477c-96d1-29cc10bf6859
type: .php

created: 20181108074509265
creator: Charles Delbé
modified: 20181108074509265
modifier: Charles Delbé
title: c:\Users\Charles\dev\projects\tiddlywiki\wiki\wiki\tiddlers\libs\ckeditor\samples\old\assets\posteddata.php
tmap.id: 4bebfd07-0789-48a4-bc8d-fb5c8ed3bcc6
type: .php

created: 20181108074214159
creator: Charles Delbé
modified: 20181108074214159
modifier: Charles Delbé
title: c:\Users\Charles\dev\projects\tiddlywiki\wiki\wiki\tiddlers\libs\ckeditor\samples\old\assets\posteddata.php
tmap.id: 823d50c9-8486-4e8d-91d0-5cc179998d09
type: .php

created: 20181108073418006
creator: Charles Delbé
modified: 20181108073418006
modifier: Charles Delbé
title: c:\Users\Charles\dev\projects\tiddlywiki\wiki\wiki\tiddlers\libs\ckeditor\samples\old\assets\posteddata.php
tmap.id: f44a9af5-9bab-452b-93cb-fbad67d156c2
type: .php

created: 20181108070528265
creator: Charles Delbé
modified: 20181108070528265
modifier: Charles Delbé
title: c:\Users\Charles\dev\projects\tiddlywiki\wiki\wiki\tiddlers\libs\ckeditor\samples\old\assets\posteddata.php
tmap.id: 18cd6638-59a7-45ab-a1cc-bccffd065678
type: .php

created: 20181108070318966
creator: Charles Delbé
modified: 20181108070318966
modifier: Charles Delbé
title: c:\Users\Charles\dev\projects\tiddlywiki\wiki\wiki\tiddlers\libs\ckeditor\samples\old\assets\posteddata.php
tmap.id: 18903889-687c-42b1-a1c9-8b2af230b629
type: .php

created: 20181108063934747
creator: Charles Delbé
modified: 20181108063934747
modifier: Charles Delbé
title: c:\Users\Charles\dev\projects\tiddlywiki\wiki\wiki\tiddlers\libs\ckeditor\samples\old\assets\posteddata.php
tmap.id: 5bfb32d4-ce1b-4b89-a6ba-b324f8f5eec2
type: .php

created: 20181108063817726
creator: Charles Delbé
modified: 20181108063817726
modifier: Charles Delbé
title: c:\Users\Charles\dev\projects\tiddlywiki\wiki\wiki\tiddlers\ckeditor\samples\old\assets\posteddata.php
tmap.id: 2718416d-5c3d-454c-a56b-fcde9473bb7c
type: .php

<!DOCTYPE html>
<?php
/*
Copyright (c) 2003-2018, CKSource - Frederico Knabben. All rights reserved.
For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
*/
?>
<html>
<head>
	<meta charset="utf-8">
	<title>Sample &mdash; CKEditor</title>
	<link rel="stylesheet" href="sample.css">
</head>
<body>
	<h1 class="samples">
		CKEditor &mdash; Posted Data
	</h1>
	<table border="1" cellspacing="0" id="outputSample">
		<colgroup><col width="120"></colgroup>
		<thead>
			<tr>
				<th>Field&nbsp;Name</th>
				<th>Value</th>
			</tr>
		</thead>
<?php

if (!empty($_POST))
{
	foreach ( $_POST as $key => $value )
	{
		if ( ( !is_string($value) && !is_numeric($value) ) || !is_string($key) )
			continue;

		if ( get_magic_quotes_gpc() )
			$value = htmlspecialchars( stripslashes((string)$value) );
		else
			$value = htmlspecialchars( (string)$value );
?>
		<tr>
			<th style="vertical-align: top"><?php echo htmlspecialchars( (string)$key ); ?></th>
			<td><pre class="samples"><?php echo $value; ?></pre></td>
		</tr>
	<?php
	}
}
?>
	</table>
	<div id="footer">
		<hr>
		<p>
			CKEditor - The text editor for the Internet - <a class="samples" href="https://ckeditor.com/">https://ckeditor.com</a>
		</p>
		<p id="copy">
			Copyright &copy; 2003-2018, <a class="samples" href="https://cksource.com/">CKSource</a> - Frederico Knabben. All rights reserved.
		</p>
	</div>
</body>
</html>
