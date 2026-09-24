---
title: Splunk Investigation Cheatsheet
sidebar_position: 1
tags: [splunk, soc]
---

# Splunk Investigation Cheatsheet

## Start broad

```spl
index=*
| stats count by host sourcetype
| sort - count
```

## Timeline

```spl
index=* host="HOSTNAME"
| table _time source sourcetype EventCode Image CommandLine
| sort _time
```

## Count values

```spl
index=* src_ip="192.168.1.100"
| stats count by dst_ip
| sort - count
```

## Useful principle

Do not search only for the final answer. Use each result to decide the **next pivot**.
