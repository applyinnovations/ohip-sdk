# RoomKeyInfo

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**IncidentalLimit** | Pointer to **float32** | Incidental limit on a reservation. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**RoomKeysInfoList** | Pointer to [**[]RoomKeyInfoType**](RoomKeyInfoType.md) | Contains details of Room key. | [optional] 
**TotalAuthorization** | Pointer to **float32** | Total Authorization on a reservation. | [optional] 
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

### GetIncidentalLimit

`func (o *RoomKeyInfo) GetIncidentalLimit() float32`

GetIncidentalLimit returns the IncidentalLimit field if non-nil, zero value otherwise.

### GetIncidentalLimitOk

`func (o *RoomKeyInfo) GetIncidentalLimitOk() (*float32, bool)`

GetIncidentalLimitOk returns a tuple with the IncidentalLimit field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIncidentalLimit

`func (o *RoomKeyInfo) SetIncidentalLimit(v float32)`

SetIncidentalLimit sets IncidentalLimit field to given value.

### HasIncidentalLimit

`func (o *RoomKeyInfo) HasIncidentalLimit() bool`

HasIncidentalLimit returns a boolean if a field has been set.

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

### GetTotalAuthorization

`func (o *RoomKeyInfo) GetTotalAuthorization() float32`

GetTotalAuthorization returns the TotalAuthorization field if non-nil, zero value otherwise.

### GetTotalAuthorizationOk

`func (o *RoomKeyInfo) GetTotalAuthorizationOk() (*float32, bool)`

GetTotalAuthorizationOk returns a tuple with the TotalAuthorization field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTotalAuthorization

`func (o *RoomKeyInfo) SetTotalAuthorization(v float32)`

SetTotalAuthorization sets TotalAuthorization field to given value.

### HasTotalAuthorization

`func (o *RoomKeyInfo) HasTotalAuthorization() bool`

HasTotalAuthorization returns a boolean if a field has been set.

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


