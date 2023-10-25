# SwapRoomsRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**SourceRoom** | Pointer to [**StayRoominfo**](StayRoominfo.md) |  | [optional] 
**TargetRoom** | Pointer to [**StayRoominfo**](StayRoominfo.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewSwapRoomsRequest

`func NewSwapRoomsRequest() *SwapRoomsRequest`

NewSwapRoomsRequest instantiates a new SwapRoomsRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSwapRoomsRequestWithDefaults

`func NewSwapRoomsRequestWithDefaults() *SwapRoomsRequest`

NewSwapRoomsRequestWithDefaults instantiates a new SwapRoomsRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetLinks

`func (o *SwapRoomsRequest) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *SwapRoomsRequest) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *SwapRoomsRequest) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *SwapRoomsRequest) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetSourceRoom

`func (o *SwapRoomsRequest) GetSourceRoom() StayRoominfo`

GetSourceRoom returns the SourceRoom field if non-nil, zero value otherwise.

### GetSourceRoomOk

`func (o *SwapRoomsRequest) GetSourceRoomOk() (*StayRoominfo, bool)`

GetSourceRoomOk returns a tuple with the SourceRoom field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSourceRoom

`func (o *SwapRoomsRequest) SetSourceRoom(v StayRoominfo)`

SetSourceRoom sets SourceRoom field to given value.

### HasSourceRoom

`func (o *SwapRoomsRequest) HasSourceRoom() bool`

HasSourceRoom returns a boolean if a field has been set.

### GetTargetRoom

`func (o *SwapRoomsRequest) GetTargetRoom() StayRoominfo`

GetTargetRoom returns the TargetRoom field if non-nil, zero value otherwise.

### GetTargetRoomOk

`func (o *SwapRoomsRequest) GetTargetRoomOk() (*StayRoominfo, bool)`

GetTargetRoomOk returns a tuple with the TargetRoom field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTargetRoom

`func (o *SwapRoomsRequest) SetTargetRoom(v StayRoominfo)`

SetTargetRoom sets TargetRoom field to given value.

### HasTargetRoom

`func (o *SwapRoomsRequest) HasTargetRoom() bool`

HasTargetRoom returns a boolean if a field has been set.

### GetWarnings

`func (o *SwapRoomsRequest) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *SwapRoomsRequest) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *SwapRoomsRequest) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *SwapRoomsRequest) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


