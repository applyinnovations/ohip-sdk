# ChangeHurdleRates

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**HurdleRates** | Pointer to [**[]HurdleRateEditType**](HurdleRateEditType.md) | Details for hurdle rate to be modified. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewChangeHurdleRates

`func NewChangeHurdleRates() *ChangeHurdleRates`

NewChangeHurdleRates instantiates a new ChangeHurdleRates object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewChangeHurdleRatesWithDefaults

`func NewChangeHurdleRatesWithDefaults() *ChangeHurdleRates`

NewChangeHurdleRatesWithDefaults instantiates a new ChangeHurdleRates object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetHurdleRates

`func (o *ChangeHurdleRates) GetHurdleRates() []HurdleRateEditType`

GetHurdleRates returns the HurdleRates field if non-nil, zero value otherwise.

### GetHurdleRatesOk

`func (o *ChangeHurdleRates) GetHurdleRatesOk() (*[]HurdleRateEditType, bool)`

GetHurdleRatesOk returns a tuple with the HurdleRates field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHurdleRates

`func (o *ChangeHurdleRates) SetHurdleRates(v []HurdleRateEditType)`

SetHurdleRates sets HurdleRates field to given value.

### HasHurdleRates

`func (o *ChangeHurdleRates) HasHurdleRates() bool`

HasHurdleRates returns a boolean if a field has been set.

### GetLinks

`func (o *ChangeHurdleRates) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *ChangeHurdleRates) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *ChangeHurdleRates) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *ChangeHurdleRates) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *ChangeHurdleRates) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *ChangeHurdleRates) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *ChangeHurdleRates) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *ChangeHurdleRates) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


