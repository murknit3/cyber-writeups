---
title: Sample Splunk Investigation
sidebar_position: 1
tags: [splunk, sysmon, blue-team]
---

# Sample Splunk Investigation

:::note
This is a starter template. Replace it with a real lab write-up when ready.
:::

## Scenario

A security team identified suspicious outbound activity from a Windows endpoint. The objective is to identify the process responsible and build enough context for incident response.

## Investigation approach

I started broad to understand the available telemetry before narrowing the search.

```text
Question → telemetry → hypothesis → query → evidence → pivot → conclusion
```

### 1. Identify useful data sources

```spl
index=*
| stats count by host sourcetype
| sort - count
```

This gives me the available hosts and log sources rather than assuming where the evidence will be.

### 2. Review outbound Sysmon connections

For Sysmon, **Event ID 3** represents network connections when network logging is enabled.

```spl
index=* EventCode=3
| stats count by Image DestinationIp DestinationPort
| sort - count
```

### 3. Pivot from the suspicious destination

Once a destination or process looks unusual, I pivot into process creation and related activity instead of treating the network event in isolation.

```spl
index=* EventCode=1 Image="*suspicious.exe"
| table _time host User ParentImage Image CommandLine
```

## Findings

- Identify the suspicious process.
- Record the destination infrastructure.
- Establish the parent process and command line.
- Build a timeline around the event.

## What I learned

The most important part of the investigation is the pivot path. A useful write-up should show **why the next query was run**, not just the final query or answer.
