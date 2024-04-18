# Go API client for inv

APIs to cater for Inventory functionality in OPERA Cloud. This includes sell limits for date ranges, viewing and updating the property&apos;s inventory, as well as item inventory (such as rollaways, microwaves etc.).<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

## Overview
This API client was generated by the [OpenAPI Generator](https://openapi-generator.tech) project.  By using the [OpenAPI-spec](https://www.openapis.org/) from a remote server, you can easily generate an API client.

- API version: 23.2
- Package version: 1.0.0
- Build package: org.openapitools.codegen.languages.GoClientCodegen

## Installation

Install the following dependencies:

```shell
go get github.com/stretchr/testify/assert
go get golang.org/x/net/context
```

Put the package under your project folder and add the following in import:

```golang
import inv "github.com/applyinnovations/ohip-sdk/inv"
```

To use a proxy, set the environment variable `HTTP_PROXY`:

```golang
os.Setenv("HTTP_PROXY", "http://proxy_name:proxy_port")
```

## Configuration of Server URL

Default configuration comes with `Servers` field that contains server objects as defined in the OpenAPI specification.

### Select Server Configuration

For using other server than the one defined on index 0 set context value `inv.ContextServerIndex` of type `int`.

```golang
ctx := context.WithValue(context.Background(), inv.ContextServerIndex, 1)
```

### Templated Server URL

Templated server URL is formatted using default variables from configuration or from context value `inv.ContextServerVariables` of type `map[string]string`.

```golang
ctx := context.WithValue(context.Background(), inv.ContextServerVariables, map[string]string{
	"basePath": "v2",
})
```

Note, enum values are always validated and all unused variables are silently ignored.

### URLs Configuration per Operation

Each operation can use different server URL defined using `OperationServers` map in the `Configuration`.
An operation is uniquely identified by `"{classname}Service.{nickname}"` string.
Similar rules for overriding default operation server index and variables applies by using `inv.ContextOperationServerIndices` and `inv.ContextOperationServerVariables` context maps.

```golang
ctx := context.WithValue(context.Background(), inv.ContextOperationServerIndices, map[string]int{
	"{classname}Service.{nickname}": 2,
})
ctx = context.WithValue(context.Background(), inv.ContextOperationServerVariables, map[string]map[string]string{
	"{classname}Service.{nickname}": {
		"port": "8443",
	},
})
```

## Documentation for API Endpoints

All URIs are relative to */inv/v1*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*INVStatsAPI* | [**GetBlockInventoryStatistics**](docs/INVStatsAPI.md#getblockinventorystatistics) | **Get** /hotels/{hotelId}/blockInventoryStatistics | Get block inventory statistics
*INVStatsAPI* | [**GetBlockInventoryStatisticsMultipleHotelIds**](docs/INVStatsAPI.md#getblockinventorystatisticsmultiplehotelids) | **Get** /blockInventoryStatistics | Get block inventory statistics for multiple hotel Ids
*INVStatsAPI* | [**GetInventoryStatistics**](docs/INVStatsAPI.md#getinventorystatistics) | **Get** /hotels/{hotelId}/inventoryStatistics | Get hotel inventory
*InventoryAPI* | [**ChangeSellLimitByDate**](docs/InventoryAPI.md#changeselllimitbydate) | **Put** /hotels/{hotelId}/sellLimits | Set sell limits by date
*InventoryAPI* | [**ChangeSellLimitByDateRange**](docs/InventoryAPI.md#changeselllimitbydaterange) | **Put** /hotels/{hotelId}/sellLimitsByDateRange | Set sell limits by date range
*InventoryAPI* | [**GetHoldItemsInventory**](docs/InventoryAPI.md#getholditemsinventory) | **Get** /hotels/{hotelId}/itemInventoryHold | Get items inventory that are held
*InventoryAPI* | [**GetHotelInventory**](docs/InventoryAPI.md#gethotelinventory) | **Get** /hotels/{hotelId}/hotelInventory | Get hotel inventory
*InventoryAPI* | [**GetItemInventory**](docs/InventoryAPI.md#getiteminventory) | **Get** /hotels/{hotelId}/itemInventory | Get item inventory
*InventoryAPI* | [**PostHoldItemInventory**](docs/InventoryAPI.md#postholditeminventory) | **Post** /hotels/{hotelId}/itemInventoryHold | Hold item inventory
*InventoryAPI* | [**PutHoldItemsInventory**](docs/InventoryAPI.md#putholditemsinventory) | **Put** /hotels/{hotelId}/itemInventoryHold | update items inventory that are held
*InventoryAPI* | [**PutItemInventoryHold**](docs/InventoryAPI.md#putiteminventoryhold) | **Put** /releasedItemInventory | Release item inventory held


## Documentation For Models

 - [BlockClassificationType](docs/BlockClassificationType.md)
 - [BlockDetailStatisticType](docs/BlockDetailStatisticType.md)
 - [BlockInfoType](docs/BlockInfoType.md)
 - [BlockInventoryStatistic](docs/BlockInventoryStatistic.md)
 - [BlockInventoryStatisticBlockInventoryStatistics](docs/BlockInventoryStatisticBlockInventoryStatistics.md)
 - [BlockInventoryStatisticType](docs/BlockInventoryStatisticType.md)
 - [BlockNonCompeteType](docs/BlockNonCompeteType.md)
 - [BlockRateProtectionType](docs/BlockRateProtectionType.md)
 - [BlockStatusStatisticType](docs/BlockStatusStatisticType.md)
 - [BlockSummaryStatisticType](docs/BlockSummaryStatisticType.md)
 - [CodeDescriptionType](docs/CodeDescriptionType.md)
 - [DailyItemInventoryCountsType](docs/DailyItemInventoryCountsType.md)
 - [ErrorInstance](docs/ErrorInstance.md)
 - [ExceptionDetailType](docs/ExceptionDetailType.md)
 - [HeldByType](docs/HeldByType.md)
 - [HoldItemInfoType](docs/HoldItemInfoType.md)
 - [HoldItemInventory](docs/HoldItemInventory.md)
 - [HoldItemInventoryType](docs/HoldItemInventoryType.md)
 - [HoldItemsInventory](docs/HoldItemsInventory.md)
 - [HotelInventory](docs/HotelInventory.md)
 - [HotelInventoryType](docs/HotelInventoryType.md)
 - [HouseSellLimitType](docs/HouseSellLimitType.md)
 - [InstanceLink](docs/InstanceLink.md)
 - [InventoryCountsType](docs/InventoryCountsType.md)
 - [InventoryLevelCountsListType](docs/InventoryLevelCountsListType.md)
 - [ItemInventory](docs/ItemInventory.md)
 - [ItemInventoryCountsType](docs/ItemInventoryCountsType.md)
 - [NumericCategorySummaryType](docs/NumericCategorySummaryType.md)
 - [PoolItemInventoryCountsType](docs/PoolItemInventoryCountsType.md)
 - [PropertyStatisticUnitType](docs/PropertyStatisticUnitType.md)
 - [RateProtectionType](docs/RateProtectionType.md)
 - [ReleaseItemInventoryHold](docs/ReleaseItemInventoryHold.md)
 - [ReleaseItemInventoryHoldType](docs/ReleaseItemInventoryHoldType.md)
 - [ReleasedItemInventoryHeld](docs/ReleasedItemInventoryHeld.md)
 - [RevenueCategorySummaryType](docs/RevenueCategorySummaryType.md)
 - [RoomClassSellLimitType](docs/RoomClassSellLimitType.md)
 - [RoomCodeCategoryType](docs/RoomCodeCategoryType.md)
 - [RoomTypeSellLimitType](docs/RoomTypeSellLimitType.md)
 - [SellLimit](docs/SellLimit.md)
 - [SellLimitByDateRangeType](docs/SellLimitByDateRangeType.md)
 - [SellLimitByDateResponse](docs/SellLimitByDateResponse.md)
 - [SellLimitByDateType](docs/SellLimitByDateType.md)
 - [SellLimitByRange](docs/SellLimitByRange.md)
 - [SellLimitDateRangeType](docs/SellLimitDateRangeType.md)
 - [SellLimitResponse](docs/SellLimitResponse.md)
 - [SellMessageType](docs/SellMessageType.md)
 - [SellMessagesType](docs/SellMessagesType.md)
 - [StatisticCodeType](docs/StatisticCodeType.md)
 - [StatisticSetType](docs/StatisticSetType.md)
 - [StatisticType](docs/StatisticType.md)
 - [StatisticUnitType](docs/StatisticUnitType.md)
 - [Status](docs/Status.md)
 - [StatusColorType](docs/StatusColorType.md)
 - [StatusStatisticType](docs/StatusStatisticType.md)
 - [TimeSpanType](docs/TimeSpanType.md)
 - [TimeWindowType](docs/TimeWindowType.md)
 - [UniqueIDType](docs/UniqueIDType.md)
 - [UsedInModuleType](docs/UsedInModuleType.md)
 - [WarningType](docs/WarningType.md)


## Documentation For Authorization

Endpoints do not require authorization.


## Documentation for Utility Methods

Due to the fact that model structure members are all pointers, this package contains
a number of utility functions to easily obtain pointers to values of basic types.
Each of these functions takes a value of the given basic type and returns a pointer to it:

* `PtrBool`
* `PtrInt`
* `PtrInt32`
* `PtrInt64`
* `PtrFloat`
* `PtrFloat32`
* `PtrFloat64`
* `PtrString`
* `PtrTime`

## Author

hospitality-integrations_ww@oracle.com
