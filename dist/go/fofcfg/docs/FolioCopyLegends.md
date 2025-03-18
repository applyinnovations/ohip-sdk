# FolioCopyLegends

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Legends** | Pointer to [**[]FolioCopyLegendType**](FolioCopyLegendType.md) | Details about folio copy legends. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewFolioCopyLegends

`func NewFolioCopyLegends() *FolioCopyLegends`

NewFolioCopyLegends instantiates a new FolioCopyLegends object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewFolioCopyLegendsWithDefaults

`func NewFolioCopyLegendsWithDefaults() *FolioCopyLegends`

NewFolioCopyLegendsWithDefaults instantiates a new FolioCopyLegends object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetLegends

`func (o *FolioCopyLegends) GetLegends() []FolioCopyLegendType`

GetLegends returns the Legends field if non-nil, zero value otherwise.

### GetLegendsOk

`func (o *FolioCopyLegends) GetLegendsOk() (*[]FolioCopyLegendType, bool)`

GetLegendsOk returns a tuple with the Legends field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLegends

`func (o *FolioCopyLegends) SetLegends(v []FolioCopyLegendType)`

SetLegends sets Legends field to given value.

### HasLegends

`func (o *FolioCopyLegends) HasLegends() bool`

HasLegends returns a boolean if a field has been set.

### GetLinks

`func (o *FolioCopyLegends) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *FolioCopyLegends) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *FolioCopyLegends) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *FolioCopyLegends) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *FolioCopyLegends) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *FolioCopyLegends) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *FolioCopyLegends) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *FolioCopyLegends) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


