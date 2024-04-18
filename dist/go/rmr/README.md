# Go API client for rmr

APIs to facilitate Room Rotation functionality in OPERA Cloud. Api provides capability to handle Room Rotation in OPERA Cloud. Room Rotation provides room ownership options for automatic inventory rotation and prioritization for owner rooms assignment and occupancy.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

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
import rmr "github.com/applyinnovations/ohip-sdk/rmr"
```

To use a proxy, set the environment variable `HTTP_PROXY`:

```golang
os.Setenv("HTTP_PROXY", "http://proxy_name:proxy_port")
```

## Configuration of Server URL

Default configuration comes with `Servers` field that contains server objects as defined in the OpenAPI specification.

### Select Server Configuration

For using other server than the one defined on index 0 set context value `rmr.ContextServerIndex` of type `int`.

```golang
ctx := context.WithValue(context.Background(), rmr.ContextServerIndex, 1)
```

### Templated Server URL

Templated server URL is formatted using default variables from configuration or from context value `rmr.ContextServerVariables` of type `map[string]string`.

```golang
ctx := context.WithValue(context.Background(), rmr.ContextServerVariables, map[string]string{
	"basePath": "v2",
})
```

Note, enum values are always validated and all unused variables are silently ignored.

### URLs Configuration per Operation

Each operation can use different server URL defined using `OperationServers` map in the `Configuration`.
An operation is uniquely identified by `"{classname}Service.{nickname}"` string.
Similar rules for overriding default operation server index and variables applies by using `rmr.ContextOperationServerIndices` and `rmr.ContextOperationServerVariables` context maps.

```golang
ctx := context.WithValue(context.Background(), rmr.ContextOperationServerIndices, map[string]int{
	"{classname}Service.{nickname}": 2,
})
ctx = context.WithValue(context.Background(), rmr.ContextOperationServerVariables, map[string]map[string]string{
	"{classname}Service.{nickname}": {
		"port": "8443",
	},
})
```

## Documentation for API Endpoints

All URIs are relative to */rmr/v1*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*RoomRotationAPI* | [**GetReservationRotationPoints**](docs/RoomRotationAPI.md#getreservationrotationpoints) | **Get** /hotels/{hotelId}/departureStartDate/{departureStartDate}/departureEndDate/{departureEndDate}/reservationRotationPoints | Get list of reservations and the associated rotations points
*RoomRotationAPI* | [**GetReservationRotationPointsDetails**](docs/RoomRotationAPI.md#getreservationrotationpointsdetails) | **Get** /hotels/{hotelId}/reservations/{reservationId}/rooms/{roomId}/reservationRotationPointsDetails | Get list of rotation points details associated with a reservation with adjustment log.
*RoomRotationAPI* | [**GetRoomOwners**](docs/RoomRotationAPI.md#getroomowners) | **Get** /roomOwners | Get Room Owners Details
*RoomRotationAPI* | [**GetRoomOwnerships**](docs/RoomRotationAPI.md#getroomownerships) | **Get** /profiles/{profileId}/roomOwnerships | Get Profile Room Owners Details
*RoomRotationAPI* | [**GetRoomRotationPoints**](docs/RoomRotationAPI.md#getroomrotationpoints) | **Get** /hotels/{hotelId}/roomRotationPoints | Get Room Rotation Points
*RoomRotationAPI* | [**PutReservationRotationPointsDetails**](docs/RoomRotationAPI.md#putreservationrotationpointsdetails) | **Put** /hotels/{hotelId}/reservations/{reservationId}/rooms/{roomId}/reservationRotationPointsDetails | Update Rotation Points Details associated with a reservation.
*RoomRotationAPI* | [**PutRoomRotationPoints**](docs/RoomRotationAPI.md#putroomrotationpoints) | **Put** /hotels/{hotelId}/roomRotationPoints | Update Rotation Points by Room Numbers


## Documentation For Models

 - [AssociatedRoomOwnershipInfoType](docs/AssociatedRoomOwnershipInfoType.md)
 - [AssociatedRoomOwnershipListDetails](docs/AssociatedRoomOwnershipListDetails.md)
 - [AssociatedRoomOwnershipType](docs/AssociatedRoomOwnershipType.md)
 - [ErrorInstance](docs/ErrorInstance.md)
 - [ExceptionDetailType](docs/ExceptionDetailType.md)
 - [GetReservationRotationPoints](docs/GetReservationRotationPoints.md)
 - [GetReservationRotationPointsDetails](docs/GetReservationRotationPointsDetails.md)
 - [GetRoomRotationPoints](docs/GetRoomRotationPoints.md)
 - [InstanceLink](docs/InstanceLink.md)
 - [ProfileId](docs/ProfileId.md)
 - [PutReservationRotationPointsDetails](docs/PutReservationRotationPointsDetails.md)
 - [RESTPaginationGroup](docs/RESTPaginationGroup.md)
 - [ReservationDetailsType](docs/ReservationDetailsType.md)
 - [ReservationRotationPointsAdjustmentLogListType](docs/ReservationRotationPointsAdjustmentLogListType.md)
 - [ReservationRotationPointsAdjustmentLogType](docs/ReservationRotationPointsAdjustmentLogType.md)
 - [ReservationRotationPointsAdjustmentReasonType](docs/ReservationRotationPointsAdjustmentReasonType.md)
 - [ReservationRotationPointsDetailsListType](docs/ReservationRotationPointsDetailsListType.md)
 - [ReservationRotationPointsDetailsType](docs/ReservationRotationPointsDetailsType.md)
 - [ReservationRotationPointsType](docs/ReservationRotationPointsType.md)
 - [RoomOwnerInfoType](docs/RoomOwnerInfoType.md)
 - [RoomOwnersListDetails](docs/RoomOwnersListDetails.md)
 - [RoomRotationPointsAdjustment](docs/RoomRotationPointsAdjustment.md)
 - [RoomRotationPointsAdjustmentInfoType](docs/RoomRotationPointsAdjustmentInfoType.md)
 - [RoomRotationPointsInfoType](docs/RoomRotationPointsInfoType.md)
 - [RotationRuleCalculationRuleType](docs/RotationRuleCalculationRuleType.md)
 - [Status](docs/Status.md)
 - [UniqueIDType](docs/UniqueIDType.md)
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
