# CateringItemRates

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ItemRates** | Pointer to [**[]CateringCodeType**](CateringCodeType.md) | Catering Code details. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewCateringItemRates

`func NewCateringItemRates() *CateringItemRates`

NewCateringItemRates instantiates a new CateringItemRates object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCateringItemRatesWithDefaults

`func NewCateringItemRatesWithDefaults() *CateringItemRates`

NewCateringItemRatesWithDefaults instantiates a new CateringItemRates object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetItemRates

`func (o *CateringItemRates) GetItemRates() []CateringCodeType`

GetItemRates returns the ItemRates field if non-nil, zero value otherwise.

### GetItemRatesOk

`func (o *CateringItemRates) GetItemRatesOk() (*[]CateringCodeType, bool)`

GetItemRatesOk returns a tuple with the ItemRates field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetItemRates

`func (o *CateringItemRates) SetItemRates(v []CateringCodeType)`

SetItemRates sets ItemRates field to given value.

### HasItemRates

`func (o *CateringItemRates) HasItemRates() bool`

HasItemRates returns a boolean if a field has been set.

### GetLinks

`func (o *CateringItemRates) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *CateringItemRates) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *CateringItemRates) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *CateringItemRates) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *CateringItemRates) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *CateringItemRates) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *CateringItemRates) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *CateringItemRates) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


