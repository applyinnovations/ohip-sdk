# RoomMaintenanceRequestType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AssignedUserInfo** | Pointer to [**AssignedUserType**](AssignedUserType.md) |  | [optional] 
**HotelId** | Pointer to **string** | Hotel code | [optional] 
**MaintenanceCode** | Pointer to **string** | Maintenance Code | [optional] 
**Remarks** | Pointer to **string** | Maintenance remarks | [optional] 
**RoomIds** | Pointer to [**RoomIds**](RoomIds.md) |  | [optional] 

## Methods

### NewRoomMaintenanceRequestType

`func NewRoomMaintenanceRequestType() *RoomMaintenanceRequestType`

NewRoomMaintenanceRequestType instantiates a new RoomMaintenanceRequestType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRoomMaintenanceRequestTypeWithDefaults

`func NewRoomMaintenanceRequestTypeWithDefaults() *RoomMaintenanceRequestType`

NewRoomMaintenanceRequestTypeWithDefaults instantiates a new RoomMaintenanceRequestType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAssignedUserInfo

`func (o *RoomMaintenanceRequestType) GetAssignedUserInfo() AssignedUserType`

GetAssignedUserInfo returns the AssignedUserInfo field if non-nil, zero value otherwise.

### GetAssignedUserInfoOk

`func (o *RoomMaintenanceRequestType) GetAssignedUserInfoOk() (*AssignedUserType, bool)`

GetAssignedUserInfoOk returns a tuple with the AssignedUserInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAssignedUserInfo

`func (o *RoomMaintenanceRequestType) SetAssignedUserInfo(v AssignedUserType)`

SetAssignedUserInfo sets AssignedUserInfo field to given value.

### HasAssignedUserInfo

`func (o *RoomMaintenanceRequestType) HasAssignedUserInfo() bool`

HasAssignedUserInfo returns a boolean if a field has been set.

### GetHotelId

`func (o *RoomMaintenanceRequestType) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *RoomMaintenanceRequestType) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *RoomMaintenanceRequestType) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *RoomMaintenanceRequestType) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetMaintenanceCode

`func (o *RoomMaintenanceRequestType) GetMaintenanceCode() string`

GetMaintenanceCode returns the MaintenanceCode field if non-nil, zero value otherwise.

### GetMaintenanceCodeOk

`func (o *RoomMaintenanceRequestType) GetMaintenanceCodeOk() (*string, bool)`

GetMaintenanceCodeOk returns a tuple with the MaintenanceCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMaintenanceCode

`func (o *RoomMaintenanceRequestType) SetMaintenanceCode(v string)`

SetMaintenanceCode sets MaintenanceCode field to given value.

### HasMaintenanceCode

`func (o *RoomMaintenanceRequestType) HasMaintenanceCode() bool`

HasMaintenanceCode returns a boolean if a field has been set.

### GetRemarks

`func (o *RoomMaintenanceRequestType) GetRemarks() string`

GetRemarks returns the Remarks field if non-nil, zero value otherwise.

### GetRemarksOk

`func (o *RoomMaintenanceRequestType) GetRemarksOk() (*string, bool)`

GetRemarksOk returns a tuple with the Remarks field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRemarks

`func (o *RoomMaintenanceRequestType) SetRemarks(v string)`

SetRemarks sets Remarks field to given value.

### HasRemarks

`func (o *RoomMaintenanceRequestType) HasRemarks() bool`

HasRemarks returns a boolean if a field has been set.

### GetRoomIds

`func (o *RoomMaintenanceRequestType) GetRoomIds() RoomIds`

GetRoomIds returns the RoomIds field if non-nil, zero value otherwise.

### GetRoomIdsOk

`func (o *RoomMaintenanceRequestType) GetRoomIdsOk() (*RoomIds, bool)`

GetRoomIdsOk returns a tuple with the RoomIds field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoomIds

`func (o *RoomMaintenanceRequestType) SetRoomIds(v RoomIds)`

SetRoomIds sets RoomIds field to given value.

### HasRoomIds

`func (o *RoomMaintenanceRequestType) HasRoomIds() bool`

HasRoomIds returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


