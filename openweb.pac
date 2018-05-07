function FindProxyForURL(url, host) {
	//var cdnSrv = 'SOCKS5 unokey21c3.unokeyserver.com:443;SOCKS5 unokey21c2.unokeyserver.com:443;HTTPS frpxa.com:443;HTTPS brwpks.com:443;HTTPS pksfr.com:443;HTTPS brwpx.com:443;PROXY s1.telvanil.ru:10010;PROXY s2.telvanil.ru:10010;PROXY s3.telvanil.ru:10010;PROXY s4.telvanil.ru:10010';
	//var cdnSrv = 'SOCKS5 unokey21c3.unokeyserver.com:443;SOCKS5 unokey21c2.unokeyserver.com:443';
	var cdnSrv = 'PROXY s1.telvanil.ru:1448; SOCKS5 unokey21c3.unokeyserver.com:443;SOCKS5 unokey21c2.unokeyserver.com:443; PROXY s2.telvanil.ru:1448; PROXY s3.telvanil.ru:1448; PROXY s4.telvanil.ru:1448; PROXY s2.raopra.ru:1448; PROXY s2.rapsan.ru:1448';
	//var cdnSrv = 'HTTPS p4.webm.su:443;HTTPS p5.webm.su:443;HTTPS p6.webm.su:443;HTTPS p7.webm.su:443;HTTPS p8.webm.su:443;HTTPS p9.webm.su:443;';
	var imSrv  = 'PROXY hole.safe-proxy.com:1084;HTTPS uk.freevpn.pw;HTTPS uk1.freevpn.pw;HTTPS de.freevpn.pw:443;HTTPS nl.freevpn.pw:443';
	
	var mainSrv = cdnSrv;

	if(shExpMatch(host, "*facebook.com") || shExpMatch(host, "*fb.com"))
		return "DIRECT";

	if(shExpMatch(host, "*vk.com") || shExpMatch(host, "*vk-cdn.net")
		|| shExpMatch(host, "*vk-cdn.me")
		|| shExpMatch(host, "*userapi.com")
		|| shExpMatch(url, "*vk.com/audios*")
		|| shExpMatch(url, "*vk.com/al_audio*"))
		return cdnSrv;
	
	if(shExpMatch(host, "*vkontakte.ru")
		|| shExpMatch(host, "*.vk.com")
		|| shExpMatch(url, "*apivk.com*"))
		return cdnSrv;

	var domains = ["speedtest.net","2ip.ua","webvisor.org","webvisor.com","yandex.de","yaani.ru","yandex-amp.net","yandex","avto.ru","autoru.tv","yandex.com.am","yandex.kg","yandex.lt","yandex.lv","yandex.md","yandex.tj","yandex.tm","yandex.ee","yandex.co.il","yandex-launcher.com","yandexdatafactory.ru","cloud.yandex","std-cpp.ru","stdcpp.ru","yandexlauncher.com","yandex.com.ge","adfox.net","yandexlyceum.ru","yavideoad.ru","yandex.uz","ecir2013.org","clickhouse.yandex","clickhouse.tech","yastat.net","loginza.ru","mail.yandex","yandextrafik.com.tr","yandex.travel","auto.ru","yandex.jobs","iframe-toloka.com","nic.yandex","travel.yandex","www.yandex","driver.yandex","ydf-conference.com","autoi.ru","adfox.ru","yandex-school.ru","shad.yandex","yandexdatafactory.com","yandexdataschool.com","yandexdataschool.ru","rostaxi.org","metabar.ru","nota-claim.ru","notaclaim.ru","pricelabs.ru","preview-adfox.ru","z5h64q92x9.net","yandex.aero","bem.info","yadisk.cc","comparesearches.com","yate.ch","ya.cc","clck.ly","clck.ru","yandex-ad.cn","yandexadexchange.net","ruscorpora.ru","multiship.ru","yamoney.ru","mk-test.ru","mk-beta.ru","moikrug.ru","mk-stress.ru","mk-dev.ru","mk-prod.ru","yandex.com.ua","yandex.com.ru","yaprobki.ru","yandex.mobi","yandex.az","xn--d1acpjx3f.xn--p1ai","yndx.net","yandex.com.tr","yandex.kz","yandex.by","allods.com","allods.ru","allodsteam.ru","appsmail.ru","attachmail.ru","attachmy.com","beep.car","beepcar.ru","beepcarstatic.ru","bk.ru","clouder.pics","datacloudmail.ru","dclub.ru","deliveryclub.ru","distribmail.ru","dwar.ru","fie.org","giftomaster.com","giftomatic.org","gmru.net","ic2ster.com","icqapi.com","icq.com","icqmail.com","icq.net","inbox.ru","iseeku.com","iseekyou.com","jugger.ru","list.ru","mailapps.me","mail.ua","maps.me","mediator.media","my.com","oh-uh.net","o.life","owamail.ru","parapa.ru","pifagor.io","pokespy.info","polkrf.ru","russianaicup.ru","russiancodecup.ru","russiancryptocup.com","russiancryptocup.ru","russiandesigncup.ru","russiandevcup.ru","russianmlcup.ru","seosan.io","skyforge.com","skyforge.ru","smaper.com","staticmy.com","tarantool.io","tarantool.org","terrabank.ru","terrhq.ru","territory.ru","timezero.ru","warface.com","warface.tv","xn--80abviyi.xn--p1ai","youla.io","youla.ru","vkuservideo.com","vkuservideo.net","vk.com","vk-cdn.net","vk-cdn.me","userapi.com","vkontakte.ru",".vk.com","apivk.com","vk.cc","vk.me","ok.com","odnoklassniki.com.ua","odnoklassniki.ru","mycdn.me","odnoklassniki.ua","ok.ru","mradx.net","ok.me","portal.mail.ru","ad.mail.ru","imgsmail.ru","mail.ru","ya.ru","2ch.hk","kinopoisk.ru","drweb.com","kaspersky.ua",".kaspersky.","yandex.st","yastatic.net","yandex.ru","yadi.sk","yandex.fr","donationalerts.ru","yandex.net","yandex.com","livejournal.ru","rutube.ru",".yandex","narod.ru","yandex.cloud","cldmail.ru","cdnmail.ru","myadx.net","yandex.ua"];

	for(var i = 0;i<domains.length;i++) {
		if(shExpMatch(host, '*'+domains[i]+'*'))
			return mainSrv;
	}

	return "DIRECT";
}
