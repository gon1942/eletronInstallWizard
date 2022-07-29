#!/bin/bash

#=== hamonize apt repository check ====
LOGFILE="/var/log/hamonize/propertiesJob/propertiesJob.log"
APT_CHK_COUNT=$(find /etc/apt/sources.list.d -name hamonize.list | wc -l)
APTURL=$(cat /etc/hamonize/propertiesJob/propertiesInfo.hm | grep APTURL | awk -F'=' '{print $2}')

if [ ${APT_CHK_COUNT} = 0 ]; then
	echo "[hamonize apt is not repository....]" >>$LOGFILE
	touch /etc/apt/sources.list.d/hamonize.list

	# Hamonize APT
	echo "deb  [arch=amd64] http://$APTURL hamonize main" | sudo tee -a /etc/apt/sources.list.d/hamonize.list

	# Hamonikr  Public APT
	echo "deb  [arch=amd64] http://pkg.hamonikr.org public main" | sudo tee -a /etc/apt/sources.list.d/hamonize.list




	# Add Hamonikr GPG KEY
	wget -qO - http://pkg.hamonikr.org/hamonikr-pkg.key | sudo apt-key add -


	curl -sL https://pkg.hamonikr.org/add-hamonikr.apt | sudo -E bash -

	
	sudo apt-get update -y >>$LOGFILE

fi
