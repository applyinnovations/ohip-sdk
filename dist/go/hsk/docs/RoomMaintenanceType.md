# RoomMaintenanceType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AssignedUserInfo** | Pointer to [**AssignedUserType**](AssignedUserType.md) |  | [optional] 
**CreateDateTime** | Pointer to **string** | Time stamp of the creation. | [optional] 
**CreatorId** | Pointer to **string** | ID of creator. The creator could be a software system identifier or an identifier of an employee resposible for the creation. | [optional] 
**Images** | Pointer to [**[]ImageResultType**](ImageResultType.md) | Collection of image results. | [optional] 
**LastModifierId** | Pointer to **string** | Identifies the last software system or person to modify a record. | [optional] 
**LastModifyDateTime** | Pointer to **string** | Time stamp of last modification. | [optional] 
**MaintenanceCode** | Pointer to **string** | Maintenance Code | [optional] 
**MaintenanceId** | Pointer to [**UniqueIDType**](UniqueIDType.md) |  | [optional] 
**PurgeDate** | Pointer to **string** | Date an item will be purged from a database (e.g., from a live database to an archive). | [optional] 
**Remarks** | Pointer to **string** | Maintenance remarks | [optional] 
**ResolveInfo** | Pointer to [**ResolveRoomMaintenanceType**](ResolveRoomMaintenanceType.md) |  | [optional] 
**RoomInfo** | Pointer to [**RoomType**](RoomType.md) |  | [optional] 

## Methods

### NewRoomMaintenanceType

`func NewRoomMaintenanceType() *RoomMaintenanceType`

NewRoomMaintenanceType instantiates a new RoomMaintenanceType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRoomMaintenanceTypeWithDefaults

`func NewRoomMaintenanceTypeWithDefaults() *RoomMaintenanceType`

NewRoomMaintenanceTypeWithDefaults instantiates a new RoomMaintenanceType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAssignedUserInfo

`func (o *RoomMaintenanceType) GetAssignedUserInfo() AssignedUserType`

GetAssignedUserInfo returns the AssignedUserInfo field if non-nil, zero value otherwise.

### GetAssignedUserInfoOk

`func (o *RoomMaintenanceType) GetAssignedUserInfoOk() (*AssignedUserType, bool)`

GetAssignedUserInfoOk returns a tuple with the AssignedUserInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAssignedUserInfo

`func (o *RoomMaintenanceType) SetAssignedUserInfo(v AssignedUserType)`

SetAssignedUserInfo sets AssignedUserInfo field to given value.

### HasAssignedUserInfo

`func (o *RoomMaintenanceType) HasAssignedUserInfo() bool`

HasAssignedUserInfo returns a boolean if a field has been set.

### GetCreateDateTime

`func (o *RoomMaintenanceType) GetCreateDateTime() string`

GetCreateDateTime returns the CreateDateTime field if non-nil, zero value otherwise.

### GetCreateDateTimeOk

`func (o *RoomMaintenanceType) GetCreateDateTimeOk() (*string, bool)`

GetCreateDateTimeOk returns a tuple with the CreateDateTime field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreateDateTime

`func (o *RoomMaintenanceType) SetCreateDateTime(v string)`

SetCreateDateTime sets CreateDateTime field to given value.

### HasCreateDateTime

`func (o *RoomMaintenanceType) HasCreateDateTime() bool`

HasCreateDateTime returns a boolean if a field has been set.

### GetCreatorId

`func (o *RoomMaintenanceType) GetCreatorId() string`

GetCreatorId returns the CreatorId field if non-nil, zero value otherwise.

### GetCreatorIdOk

`func (o *RoomMaintenanceType) GetCreatorIdOk() (*string, bool)`

GetCreatorIdOk returns a tuple with the CreatorId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreatorId

`func (o *RoomMaintenanceType) SetCreatorId(v string)`

SetCreatorId sets CreatorId field to given value.

### HasCreatorId

`func (o *RoomMaintenanceType) HasCreatorId() bool`

HasCreatorId returns a boolean if a field has been set.

### GetImages

`func (o *RoomMaintenanceType) GetImages() []ImageResultType`

GetImages returns the Images field if non-nil, zero value otherwise.

### GetImagesOk

`func (o *RoomMaintenanceType) GetImagesOk() (*[]ImageResultType, bool)`

GetImagesOk returns a tuple with the Images field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetImages

`func (o *RoomMaintenanceType) SetImages(v []ImageResultType)`

SetImages sets Images field to given value.

### HasImages

`func (o *RoomMaintenanceType) HasImages() bool`

HasImages returns a boolean if a field has been set.

### GetLastModifierId

`func (o *RoomMaintenanceType) GetLastModifierId() string`

GetLastModifierId returns the LastModifierId field if non-nil, zero value otherwise.

### GetLastModifierIdOk

`func (o *RoomMaintenanceType) GetLastModifierIdOk() (*string, bool)`

GetLastModifierIdOk returns a tuple with the LastModifierId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLastModifierId

`func (o *RoomMaintenanceType) SetLastModifierId(v string)`

SetLastModifierId sets LastModifierId field to given value.

### HasLastModifierId

`func (o *RoomMaintenanceType) HasLastModifierId() bool`

HasLastModifierId returns a boolean if a field has been set.

### GetLastModifyDateTime

`func (o *RoomMaintenanceType) GetLastModifyDateTime() string`

GetLastModifyDateTime returns the LastModifyDateTime field if non-nil, zero value otherwise.

### GetLastModifyDateTimeOk

`func (o *RoomMaintenanceType) GetLastModifyDateTimeOk() (*string, bool)`

GetLastModifyDateTimeOk returns a tuple with the LastModifyDateTime field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLastModifyDateTime

`func (o *RoomMaintenanceType) SetLastModifyDateTime(v string)`

SetLastModifyDateTime sets LastModifyDateTime field to given value.

### HasLastModifyDateTime

`func (o *RoomMaintenanceType) HasLastModifyDateTime() bool`

HasLastModifyDateTime returns a boolean if a field has been set.

### GetMaintenanceCode

`func (o *RoomMaintenanceType) GetMaintenanceCode() string`

GetMaintenanceCode returns the MaintenanceCode field if non-nil, zero value otherwise.

### GetMaintenanceCodeOk

`func (o *RoomMaintenanceType) GetMaintenanceCodeOk() (*string, bool)`

GetMaintenanceCodeOk returns a tuple with the MaintenanceCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMaintenanceCode

`func (o *RoomMaintenanceType) SetMaintenanceCode(v string)`

SetMaintenanceCode sets MaintenanceCode field to given value.

### HasMaintenanceCode

`func (o *RoomMaintenanceType) HasMaintenanceCode() bool`

HasMaintenanceCode returns a boolean if a field has been set.

### GetMaintenanceId

`func (o *RoomMaintenanceType) GetMaintenanceId() UniqueIDType`

GetMaintenanceId returns the MaintenanceId field if non-nil, zero value otherwise.

### GetMaintenanceIdOk

`func (o *RoomMaintenanceType) GetMaintenanceIdOk() (*UniqueIDType, bool)`

GetMaintenanceIdOk returns a tuple with the MaintenanceId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMaintenanceId

`func (o *RoomMaintenanceType) SetMaintenanceId(v UniqueIDType)`

SetMaintenanceId sets MaintenanceId field to given value.

### HasMaintenanceId

`func (o *RoomMaintenanceType) HasMaintenanceId() bool`

HasMaintenanceId returns a boolean if a field has been set.

### GetPurgeDate

`func (o *RoomMaintenanceType) GetPurgeDate() string`

GetPurgeDate returns the PurgeDate field if non-nil, zero value otherwise.

### GetPurgeDateOk

`func (o *RoomMaintenanceType) GetPurgeDateOk() (*string, bool)`

GetPurgeDateOk returns a tuple with the PurgeDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPurgeDate

`func (o *RoomMaintenanceType) SetPurgeDate(v string)`

SetPurgeDate sets PurgeDate field to given value.

### HasPurgeDate

`func (o *RoomMaintenanceType) HasPurgeDate() bool`

HasPurgeDate returns a boolean if a field has been set.

### GetRemarks

`func (o *RoomMaintenanceType) GetRemarks() string`

GetRemarks returns the Remarks field if non-nil, zero value otherwise.

### GetRemarksOk

`func (o *RoomMaintenanceType) GetRemarksOk() (*string, bool)`

GetRemarksOk returns a tuple with the Remarks field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRemarks

`func (o *RoomMaintenanceType) SetRemarks(v string)`

SetRemarks sets Remarks field to given value.

### HasRemarks

`func (o *RoomMaintenanceType) HasRemarks() bool`

HasRemarks returns a boolean if a field has been set.

### GetResolveInfo

`func (o *RoomMaintenanceType) GetResolveInfo() ResolveRoomMaintenanceType`

GetResolveInfo returns the ResolveInfo field if non-nil, zero value otherwise.

### GetResolveInfoOk

`func (o *RoomMaintenanceType) GetResolveInfoOk() (*ResolveRoomMaintenanceType, bool)`

GetResolveInfoOk returns a tuple with the ResolveInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetResolveInfo

`func (o *RoomMaintenanceType) SetResolveInfo(v ResolveRoomMaintenanceType)`

SetResolveInfo sets ResolveInfo field to given value.

### HasResolveInfo

`func (o *RoomMaintenanceType) HasResolveInfo() bool`

HasResolveInfo returns a boolean if a field has been set.

### GetRoomInfo

`func (o *RoomMaintenanceType) GetRoomInfo() RoomType`

GetRoomInfo returns the RoomInfo field if non-nil, zero value otherwise.

### GetRoomInfoOk

`func (o *RoomMaintenanceType) GetRoomInfoOk() (*RoomType, bool)`

GetRoomInfoOk returns a tuple with the RoomInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoomInfo

`func (o *RoomMaintenanceType) SetRoomInfo(v RoomType)`

SetRoomInfo sets RoomInfo field to given value.

### HasRoomInfo

`func (o *RoomMaintenanceType) HasRoomInfo() bool`

HasRoomInfo returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


