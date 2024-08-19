# HotelTurnAwayCodes

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**TurnAwayCodes** | Pointer to [**[]HotelTurnAwayCodeType**](HotelTurnAwayCodeType.md) | Turnaway code details for hotels. | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewHotelTurnAwayCodes

`func NewHotelTurnAwayCodes() *HotelTurnAwayCodes`

NewHotelTurnAwayCodes instantiates a new HotelTurnAwayCodes object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewHotelTurnAwayCodesWithDefaults

`func NewHotelTurnAwayCodesWithDefaults() *HotelTurnAwayCodes`

NewHotelTurnAwayCodesWithDefaults instantiates a new HotelTurnAwayCodes object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetLinks

`func (o *HotelTurnAwayCodes) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *HotelTurnAwayCodes) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *HotelTurnAwayCodes) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *HotelTurnAwayCodes) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetTurnAwayCodes

`func (o *HotelTurnAwayCodes) GetTurnAwayCodes() []HotelTurnAwayCodeType`

GetTurnAwayCodes returns the TurnAwayCodes field if non-nil, zero value otherwise.

### GetTurnAwayCodesOk

`func (o *HotelTurnAwayCodes) GetTurnAwayCodesOk() (*[]HotelTurnAwayCodeType, bool)`

GetTurnAwayCodesOk returns a tuple with the TurnAwayCodes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTurnAwayCodes

`func (o *HotelTurnAwayCodes) SetTurnAwayCodes(v []HotelTurnAwayCodeType)`

SetTurnAwayCodes sets TurnAwayCodes field to given value.

### HasTurnAwayCodes

`func (o *HotelTurnAwayCodes) HasTurnAwayCodes() bool`

HasTurnAwayCodes returns a boolean if a field has been set.

### GetWarnings

`func (o *HotelTurnAwayCodes) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *HotelTurnAwayCodes) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *HotelTurnAwayCodes) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *HotelTurnAwayCodes) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


