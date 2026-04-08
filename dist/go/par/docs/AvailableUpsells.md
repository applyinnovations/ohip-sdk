# AvailableUpsells

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Upsells** | Pointer to [**UpsellsType**](UpsellsType.md) |  | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewAvailableUpsells

`func NewAvailableUpsells() *AvailableUpsells`

NewAvailableUpsells instantiates a new AvailableUpsells object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAvailableUpsellsWithDefaults

`func NewAvailableUpsellsWithDefaults() *AvailableUpsells`

NewAvailableUpsellsWithDefaults instantiates a new AvailableUpsells object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetUpsells

`func (o *AvailableUpsells) GetUpsells() UpsellsType`

GetUpsells returns the Upsells field if non-nil, zero value otherwise.

### GetUpsellsOk

`func (o *AvailableUpsells) GetUpsellsOk() (*UpsellsType, bool)`

GetUpsellsOk returns a tuple with the Upsells field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUpsells

`func (o *AvailableUpsells) SetUpsells(v UpsellsType)`

SetUpsells sets Upsells field to given value.

### HasUpsells

`func (o *AvailableUpsells) HasUpsells() bool`

HasUpsells returns a boolean if a field has been set.

### GetLinks

`func (o *AvailableUpsells) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *AvailableUpsells) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *AvailableUpsells) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *AvailableUpsells) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *AvailableUpsells) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *AvailableUpsells) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *AvailableUpsells) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *AvailableUpsells) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


