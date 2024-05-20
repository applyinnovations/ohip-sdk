# SetHotelEvents

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**HotelEvents** | Pointer to [**[]HotelEventCodeType**](HotelEventCodeType.md) | Collection of hotel events. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewSetHotelEvents

`func NewSetHotelEvents() *SetHotelEvents`

NewSetHotelEvents instantiates a new SetHotelEvents object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSetHotelEventsWithDefaults

`func NewSetHotelEventsWithDefaults() *SetHotelEvents`

NewSetHotelEventsWithDefaults instantiates a new SetHotelEvents object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetHotelEvents

`func (o *SetHotelEvents) GetHotelEvents() []HotelEventCodeType`

GetHotelEvents returns the HotelEvents field if non-nil, zero value otherwise.

### GetHotelEventsOk

`func (o *SetHotelEvents) GetHotelEventsOk() (*[]HotelEventCodeType, bool)`

GetHotelEventsOk returns a tuple with the HotelEvents field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelEvents

`func (o *SetHotelEvents) SetHotelEvents(v []HotelEventCodeType)`

SetHotelEvents sets HotelEvents field to given value.

### HasHotelEvents

`func (o *SetHotelEvents) HasHotelEvents() bool`

HasHotelEvents returns a boolean if a field has been set.

### GetLinks

`func (o *SetHotelEvents) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *SetHotelEvents) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *SetHotelEvents) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *SetHotelEvents) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *SetHotelEvents) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *SetHotelEvents) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *SetHotelEvents) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *SetHotelEvents) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


