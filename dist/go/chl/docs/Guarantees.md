# Guarantees

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Guarantees** | Pointer to [**[]GuaranteeMappingType**](GuaranteeMappingType.md) | Information about an external system guarantee mapping. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewGuarantees

`func NewGuarantees() *Guarantees`

NewGuarantees instantiates a new Guarantees object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewGuaranteesWithDefaults

`func NewGuaranteesWithDefaults() *Guarantees`

NewGuaranteesWithDefaults instantiates a new Guarantees object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetGuarantees

`func (o *Guarantees) GetGuarantees() []GuaranteeMappingType`

GetGuarantees returns the Guarantees field if non-nil, zero value otherwise.

### GetGuaranteesOk

`func (o *Guarantees) GetGuaranteesOk() (*[]GuaranteeMappingType, bool)`

GetGuaranteesOk returns a tuple with the Guarantees field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGuarantees

`func (o *Guarantees) SetGuarantees(v []GuaranteeMappingType)`

SetGuarantees sets Guarantees field to given value.

### HasGuarantees

`func (o *Guarantees) HasGuarantees() bool`

HasGuarantees returns a boolean if a field has been set.

### GetLinks

`func (o *Guarantees) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *Guarantees) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *Guarantees) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *Guarantees) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *Guarantees) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *Guarantees) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *Guarantees) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *Guarantees) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


