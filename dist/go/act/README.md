# Go API client for act

APIs to cater for Sales Activity functionality in OPERA Cloud. <br /><br /> Activities provide you with an account management tool for managing daily tasks such as appointments, sales calls, contact follow-up, and so on.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

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
import act "github.com/applyinnovations/ohip-sdk/act"
```

To use a proxy, set the environment variable `HTTP_PROXY`:

```golang
os.Setenv("HTTP_PROXY", "http://proxy_name:proxy_port")
```

## Configuration of Server URL

Default configuration comes with `Servers` field that contains server objects as defined in the OpenAPI specification.

### Select Server Configuration

For using other server than the one defined on index 0 set context value `act.ContextServerIndex` of type `int`.

```golang
ctx := context.WithValue(context.Background(), act.ContextServerIndex, 1)
```

### Templated Server URL

Templated server URL is formatted using default variables from configuration or from context value `act.ContextServerVariables` of type `map[string]string`.

```golang
ctx := context.WithValue(context.Background(), act.ContextServerVariables, map[string]string{
	"basePath": "v2",
})
```

Note, enum values are always validated and all unused variables are silently ignored.

### URLs Configuration per Operation

Each operation can use different server URL defined using `OperationServers` map in the `Configuration`.
An operation is uniquely identified by `"{classname}Service.{nickname}"` string.
Similar rules for overriding default operation server index and variables applies by using `act.ContextOperationServerIndices` and `act.ContextOperationServerVariables` context maps.

```golang
ctx := context.WithValue(context.Background(), act.ContextOperationServerIndices, map[string]int{
	"{classname}Service.{nickname}": 2,
})
ctx = context.WithValue(context.Background(), act.ContextOperationServerVariables, map[string]map[string]string{
	"{classname}Service.{nickname}": {
		"port": "8443",
	},
})
```

## Documentation for API Endpoints

All URIs are relative to */act/v1*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*ActivityAPI* | [**DeleteActivities**](docs/ActivityAPI.md#deleteactivities) | **Delete** /hotels/{hotelId}/activities/{activityId} | Delete activity in a hotel by ID
*ActivityAPI* | [**DeleteActivitiesWithOutHotelId**](docs/ActivityAPI.md#deleteactivitieswithouthotelid) | **Delete** /activities/{activityId} | Delete activity  by ID
*ActivityAPI* | [**DeleteActivityAttachment**](docs/ActivityAPI.md#deleteactivityattachment) | **Delete** /hotels/{hotelId}/activities/{activityId}/attachments/{attachmentId} | Delete an attachment from an Activity
*ActivityAPI* | [**DeleteActivityAttachmentWithoutHotelId**](docs/ActivityAPI.md#deleteactivityattachmentwithouthotelid) | **Delete** /activities/{activityId}/attachments/{attachmentId} | Delete an attachment from an Activity
*ActivityAPI* | [**DeleteMultipleActivities**](docs/ActivityAPI.md#deletemultipleactivities) | **Delete** /activities | Delete activities
*ActivityAPI* | [**GetActivities**](docs/ActivityAPI.md#getactivities) | **Get** /hotels/{hotelId}/activities | Get activities by hotel
*ActivityAPI* | [**GetActivitiesByMultipleHotelIds**](docs/ActivityAPI.md#getactivitiesbymultiplehotelids) | **Get** /activities | Get activities
*ActivityAPI* | [**GetActivity**](docs/ActivityAPI.md#getactivity) | **Get** /hotels/{hotelId}/activities/{activityId} | Get activity in a hotel by ID
*ActivityAPI* | [**GetActivityAttachments**](docs/ActivityAPI.md#getactivityattachments) | **Get** /hotels/{hotelId}/activities/{activityId}/attachments | Get Activity Attachments
*ActivityAPI* | [**GetActivityLog**](docs/ActivityAPI.md#getactivitylog) | **Get** /hotels/{hotelId}/activityLog | Get Activity Log
*ActivityAPI* | [**GetActivityStatistics**](docs/ActivityAPI.md#getactivitystatistics) | **Get** /hotels/{hotelId}/activities/statistics | Get Activity statistics
*ActivityAPI* | [**GetActivityWithOutHotelId**](docs/ActivityAPI.md#getactivitywithouthotelid) | **Get** /activities/{activityId} | Get activity by ID
*ActivityAPI* | [**GetEmails**](docs/ActivityAPI.md#getemails) | **Get** /activities/emails | Get Emails
*ActivityAPI* | [**GetRecentlyAccessedActivities**](docs/ActivityAPI.md#getrecentlyaccessedactivities) | **Get** /hotels/{hotelId}/recentlyAccessedActivities | Get recently accessed activities
*ActivityAPI* | [**GetRecentlyAccessedActivitiesWithOutHotelId**](docs/ActivityAPI.md#getrecentlyaccessedactivitieswithouthotelid) | **Get** /recentlyAccessedActivities | Get recently accessed activities
*ActivityAPI* | [**PostActivities**](docs/ActivityAPI.md#postactivities) | **Post** /hotels/{hotelId}/activities | Create activities in a hotel
*ActivityAPI* | [**PostLinkedActivities**](docs/ActivityAPI.md#postlinkedactivities) | **Post** /hotels/{hotelId}/activities/{activityId}/linkedActivities | Create linked activities in a hotel by ID
*ActivityAPI* | [**PostMultipleActivitiesCompletion**](docs/ActivityAPI.md#postmultipleactivitiescompletion) | **Post** /activities/activitiesCompletion | Complete activities
*ActivityAPI* | [**PostSingleActivityCompletion**](docs/ActivityAPI.md#postsingleactivitycompletion) | **Post** /hotels/{hotelId}/activities/{activityId}/activityCompletion | Complete activity in a hotel by ID
*ActivityAPI* | [**PutActivities**](docs/ActivityAPI.md#putactivities) | **Put** /hotels/{hotelId}/activities/{activityId} | Update activity in a hotel by ID


## Documentation For Models

 - [AccountId](docs/AccountId.md)
 - [ActivitiesInfo](docs/ActivitiesInfo.md)
 - [ActivitiesInformation](docs/ActivitiesInformation.md)
 - [ActivitiesToChange](docs/ActivitiesToChange.md)
 - [Activity](docs/Activity.md)
 - [ActivityAttachments](docs/ActivityAttachments.md)
 - [ActivityBlockInfoType](docs/ActivityBlockInfoType.md)
 - [ActivityConfigClassType](docs/ActivityConfigClassType.md)
 - [ActivityDetailsType](docs/ActivityDetailsType.md)
 - [ActivityDetailsTypeLinkedAccounts](docs/ActivityDetailsTypeLinkedAccounts.md)
 - [ActivityDetailsTypeLinkedContacts](docs/ActivityDetailsTypeLinkedContacts.md)
 - [ActivityId](docs/ActivityId.md)
 - [ActivityInfoType](docs/ActivityInfoType.md)
 - [ActivityInfoTypeStatus](docs/ActivityInfoTypeStatus.md)
 - [ActivityLinkedProfilesType](docs/ActivityLinkedProfilesType.md)
 - [ActivityLog](docs/ActivityLog.md)
 - [ActivityLogListType](docs/ActivityLogListType.md)
 - [ActivityLogType](docs/ActivityLogType.md)
 - [ActivityStatCategoryCodeType](docs/ActivityStatCategoryCodeType.md)
 - [ActivityStatCategoryType](docs/ActivityStatCategoryType.md)
 - [ActivityStatCodeType](docs/ActivityStatCodeType.md)
 - [ActivityStatReportCodeType](docs/ActivityStatReportCodeType.md)
 - [ActivityStatReportType](docs/ActivityStatReportType.md)
 - [ActivityStatSetType](docs/ActivityStatSetType.md)
 - [ActivityStatType](docs/ActivityStatType.md)
 - [ActivityStatistics](docs/ActivityStatistics.md)
 - [AddressInfoType](docs/AddressInfoType.md)
 - [AddressType](docs/AddressType.md)
 - [AttachmentType](docs/AttachmentType.md)
 - [BlockId](docs/BlockId.md)
 - [CompanyType](docs/CompanyType.md)
 - [ContactId](docs/ContactId.md)
 - [CountryNameType](docs/CountryNameType.md)
 - [CurrencyAmountType](docs/CurrencyAmountType.md)
 - [CustomerType](docs/CustomerType.md)
 - [DateTimeStampGroupType](docs/DateTimeStampGroupType.md)
 - [EmailID](docs/EmailID.md)
 - [EmailInfoResponseType](docs/EmailInfoResponseType.md)
 - [EmailInfoType](docs/EmailInfoType.md)
 - [EmailType](docs/EmailType.md)
 - [EmailsDetails](docs/EmailsDetails.md)
 - [EmailsFetchedType](docs/EmailsFetchedType.md)
 - [ErrorInstance](docs/ErrorInstance.md)
 - [ExceptionDetailType](docs/ExceptionDetailType.md)
 - [GuestHousekeepingServiceRequestType](docs/GuestHousekeepingServiceRequestType.md)
 - [IndicatorType](docs/IndicatorType.md)
 - [InstanceLink](docs/InstanceLink.md)
 - [LinkedActivities](docs/LinkedActivities.md)
 - [LinkedActivitiesType](docs/LinkedActivitiesType.md)
 - [LinkedActivityDetailsType](docs/LinkedActivityDetailsType.md)
 - [LinkedProfileTypeType](docs/LinkedProfileTypeType.md)
 - [MasterAccountInfoType](docs/MasterAccountInfoType.md)
 - [PMSResStatusType](docs/PMSResStatusType.md)
 - [PersonNameType](docs/PersonNameType.md)
 - [PointsType](docs/PointsType.md)
 - [PostActivitiesRequest](docs/PostActivitiesRequest.md)
 - [PostMultipleActivitiesCompletionRequest](docs/PostMultipleActivitiesCompletionRequest.md)
 - [PostSingleActivityCompletionRequest](docs/PostSingleActivityCompletionRequest.md)
 - [ProfileDeliveryMethod](docs/ProfileDeliveryMethod.md)
 - [ProfileDeliveryModuleType](docs/ProfileDeliveryModuleType.md)
 - [ProfileStatusType](docs/ProfileStatusType.md)
 - [ProfileType](docs/ProfileType.md)
 - [ProfileTypeAddresses](docs/ProfileTypeAddresses.md)
 - [ProfileTypeEmails](docs/ProfileTypeEmails.md)
 - [ProfileTypeProfileDeliveryMethods](docs/ProfileTypeProfileDeliveryMethods.md)
 - [ProfileTypeRelationships](docs/ProfileTypeRelationships.md)
 - [ProfileTypeRelationshipsSummary](docs/ProfileTypeRelationshipsSummary.md)
 - [ProfileTypeTelephones](docs/ProfileTypeTelephones.md)
 - [ProfileTypeType](docs/ProfileTypeType.md)
 - [ProfileTypeURLs](docs/ProfileTypeURLs.md)
 - [PromotionType](docs/PromotionType.md)
 - [PutActivitiesRequest](docs/PutActivitiesRequest.md)
 - [RecentlyAccessedActivities](docs/RecentlyAccessedActivities.md)
 - [RecentlyAccessedActivityType](docs/RecentlyAccessedActivityType.md)
 - [RelationshipAddressType](docs/RelationshipAddressType.md)
 - [RelationshipInfoSummaryType](docs/RelationshipInfoSummaryType.md)
 - [RelationshipInfoType](docs/RelationshipInfoType.md)
 - [RelationshipProfileSummaryType](docs/RelationshipProfileSummaryType.md)
 - [RelationshipProfileType](docs/RelationshipProfileType.md)
 - [ResAttachedProfileType](docs/ResAttachedProfileType.md)
 - [ResExpectedTimesType](docs/ResExpectedTimesType.md)
 - [ResGuaranteeType](docs/ResGuaranteeType.md)
 - [ResProfileTypeType](docs/ResProfileTypeType.md)
 - [ReservationBlockType](docs/ReservationBlockType.md)
 - [ReservationStayHistoryFutureInfoType](docs/ReservationStayHistoryFutureInfoType.md)
 - [StatUnitCategoryType](docs/StatUnitCategoryType.md)
 - [Status](docs/Status.md)
 - [StayFutureListType](docs/StayFutureListType.md)
 - [StayHistoryListType](docs/StayHistoryListType.md)
 - [StayInfoType](docs/StayInfoType.md)
 - [StayReservationInfoType](docs/StayReservationInfoType.md)
 - [TelephoneInfoType](docs/TelephoneInfoType.md)
 - [TelephoneType](docs/TelephoneType.md)
 - [TimeSpanType](docs/TimeSpanType.md)
 - [URLInfoType](docs/URLInfoType.md)
 - [URLType](docs/URLType.md)
 - [UniqueIDType](docs/UniqueIDType.md)
 - [UniqueNameIDType](docs/UniqueNameIDType.md)
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
