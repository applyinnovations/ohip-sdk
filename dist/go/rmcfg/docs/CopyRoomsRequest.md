# CopyRoomsRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CopyRoom** | Pointer to [**CopyRoomType**](CopyRoomType.md) |  | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewCopyRoomsRequest

`func NewCopyRoomsRequest() *CopyRoomsRequest`

NewCopyRoomsRequest instantiates a new CopyRoomsRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCopyRoomsRequestWithDefaults

`func NewCopyRoomsRequestWithDefaults() *CopyRoomsRequest`

NewCopyRoomsRequestWithDefaults instantiates a new CopyRoomsRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCopyRoom

`func (o *CopyRoomsRequest) GetCopyRoom() CopyRoomType`

GetCopyRoom returns the CopyRoom field if non-nil, zero value otherwise.

### GetCopyRoomOk

`func (o *CopyRoomsRequest) GetCopyRoomOk() (*CopyRoomType, bool)`

GetCopyRoomOk returns a tuple with the CopyRoom field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCopyRoom

`func (o *CopyRoomsRequest) SetCopyRoom(v CopyRoomType)`

SetCopyRoom sets CopyRoom field to given value.

### HasCopyRoom

`func (o *CopyRoomsRequest) HasCopyRoom() bool`

HasCopyRoom returns a boolean if a field has been set.

### GetLinks

`func (o *CopyRoomsRequest) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *CopyRoomsRequest) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *CopyRoomsRequest) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *CopyRoomsRequest) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *CopyRoomsRequest) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *CopyRoomsRequest) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *CopyRoomsRequest) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *CopyRoomsRequest) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


