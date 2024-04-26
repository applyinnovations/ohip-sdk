# ResortRoomConditionsDetails

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**RoomConditions** | Pointer to [**[]RoomCondtionType**](RoomCondtionType.md) | Collection of Resort Room Condition Configuration Type | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewResortRoomConditionsDetails

`func NewResortRoomConditionsDetails() *ResortRoomConditionsDetails`

NewResortRoomConditionsDetails instantiates a new ResortRoomConditionsDetails object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewResortRoomConditionsDetailsWithDefaults

`func NewResortRoomConditionsDetailsWithDefaults() *ResortRoomConditionsDetails`

NewResortRoomConditionsDetailsWithDefaults instantiates a new ResortRoomConditionsDetails object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetLinks

`func (o *ResortRoomConditionsDetails) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *ResortRoomConditionsDetails) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *ResortRoomConditionsDetails) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *ResortRoomConditionsDetails) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetRoomConditions

`func (o *ResortRoomConditionsDetails) GetRoomConditions() []RoomCondtionType`

GetRoomConditions returns the RoomConditions field if non-nil, zero value otherwise.

### GetRoomConditionsOk

`func (o *ResortRoomConditionsDetails) GetRoomConditionsOk() (*[]RoomCondtionType, bool)`

GetRoomConditionsOk returns a tuple with the RoomConditions field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoomConditions

`func (o *ResortRoomConditionsDetails) SetRoomConditions(v []RoomCondtionType)`

SetRoomConditions sets RoomConditions field to given value.

### HasRoomConditions

`func (o *ResortRoomConditionsDetails) HasRoomConditions() bool`

HasRoomConditions returns a boolean if a field has been set.

### GetWarnings

`func (o *ResortRoomConditionsDetails) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *ResortRoomConditionsDetails) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *ResortRoomConditionsDetails) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *ResortRoomConditionsDetails) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


