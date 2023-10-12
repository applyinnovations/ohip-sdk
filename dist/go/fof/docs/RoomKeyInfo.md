# RoomKeyInfo

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**RoomKeysInfoList** | Pointer to [**[]RoomKeyInfoType**](RoomKeyInfoType.md) | Contains details of Room key. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewRoomKeyInfo

`func NewRoomKeyInfo() *RoomKeyInfo`

NewRoomKeyInfo instantiates a new RoomKeyInfo object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRoomKeyInfoWithDefaults

`func NewRoomKeyInfoWithDefaults() *RoomKeyInfo`

NewRoomKeyInfoWithDefaults instantiates a new RoomKeyInfo object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetRoomKeysInfoList

`func (o *RoomKeyInfo) GetRoomKeysInfoList() []RoomKeyInfoType`

GetRoomKeysInfoList returns the RoomKeysInfoList field if non-nil, zero value otherwise.

### GetRoomKeysInfoListOk

`func (o *RoomKeyInfo) GetRoomKeysInfoListOk() (*[]RoomKeyInfoType, bool)`

GetRoomKeysInfoListOk returns a tuple with the RoomKeysInfoList field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoomKeysInfoList

`func (o *RoomKeyInfo) SetRoomKeysInfoList(v []RoomKeyInfoType)`

SetRoomKeysInfoList sets RoomKeysInfoList field to given value.

### HasRoomKeysInfoList

`func (o *RoomKeyInfo) HasRoomKeysInfoList() bool`

HasRoomKeysInfoList returns a boolean if a field has been set.

### GetLinks

`func (o *RoomKeyInfo) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *RoomKeyInfo) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *RoomKeyInfo) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *RoomKeyInfo) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *RoomKeyInfo) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *RoomKeyInfo) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *RoomKeyInfo) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *RoomKeyInfo) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


