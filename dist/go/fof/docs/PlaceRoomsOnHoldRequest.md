# PlaceRoomsOnHoldRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**HoldRoomsDetails** | Pointer to [**[]RoomsHoldType**](RoomsHoldType.md) | List of rooms, reason, and comments. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**OverrideRoomHold** | Pointer to **bool** | If trying to hold a room, which is held by a different user, then this flag will allow the current request to override that hold. | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewPlaceRoomsOnHoldRequest

`func NewPlaceRoomsOnHoldRequest() *PlaceRoomsOnHoldRequest`

NewPlaceRoomsOnHoldRequest instantiates a new PlaceRoomsOnHoldRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPlaceRoomsOnHoldRequestWithDefaults

`func NewPlaceRoomsOnHoldRequestWithDefaults() *PlaceRoomsOnHoldRequest`

NewPlaceRoomsOnHoldRequestWithDefaults instantiates a new PlaceRoomsOnHoldRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetHoldRoomsDetails

`func (o *PlaceRoomsOnHoldRequest) GetHoldRoomsDetails() []RoomsHoldType`

GetHoldRoomsDetails returns the HoldRoomsDetails field if non-nil, zero value otherwise.

### GetHoldRoomsDetailsOk

`func (o *PlaceRoomsOnHoldRequest) GetHoldRoomsDetailsOk() (*[]RoomsHoldType, bool)`

GetHoldRoomsDetailsOk returns a tuple with the HoldRoomsDetails field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHoldRoomsDetails

`func (o *PlaceRoomsOnHoldRequest) SetHoldRoomsDetails(v []RoomsHoldType)`

SetHoldRoomsDetails sets HoldRoomsDetails field to given value.

### HasHoldRoomsDetails

`func (o *PlaceRoomsOnHoldRequest) HasHoldRoomsDetails() bool`

HasHoldRoomsDetails returns a boolean if a field has been set.

### GetLinks

`func (o *PlaceRoomsOnHoldRequest) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *PlaceRoomsOnHoldRequest) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *PlaceRoomsOnHoldRequest) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *PlaceRoomsOnHoldRequest) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetOverrideRoomHold

`func (o *PlaceRoomsOnHoldRequest) GetOverrideRoomHold() bool`

GetOverrideRoomHold returns the OverrideRoomHold field if non-nil, zero value otherwise.

### GetOverrideRoomHoldOk

`func (o *PlaceRoomsOnHoldRequest) GetOverrideRoomHoldOk() (*bool, bool)`

GetOverrideRoomHoldOk returns a tuple with the OverrideRoomHold field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOverrideRoomHold

`func (o *PlaceRoomsOnHoldRequest) SetOverrideRoomHold(v bool)`

SetOverrideRoomHold sets OverrideRoomHold field to given value.

### HasOverrideRoomHold

`func (o *PlaceRoomsOnHoldRequest) HasOverrideRoomHold() bool`

HasOverrideRoomHold returns a boolean if a field has been set.

### GetWarnings

`func (o *PlaceRoomsOnHoldRequest) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *PlaceRoomsOnHoldRequest) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *PlaceRoomsOnHoldRequest) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *PlaceRoomsOnHoldRequest) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


