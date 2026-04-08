# DistanceTypesCriteria

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**DistanceTypes** | Pointer to [**[]DistanceTypeType**](DistanceTypeType.md) | List of Distance Types. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewDistanceTypesCriteria

`func NewDistanceTypesCriteria() *DistanceTypesCriteria`

NewDistanceTypesCriteria instantiates a new DistanceTypesCriteria object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewDistanceTypesCriteriaWithDefaults

`func NewDistanceTypesCriteriaWithDefaults() *DistanceTypesCriteria`

NewDistanceTypesCriteriaWithDefaults instantiates a new DistanceTypesCriteria object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetDistanceTypes

`func (o *DistanceTypesCriteria) GetDistanceTypes() []DistanceTypeType`

GetDistanceTypes returns the DistanceTypes field if non-nil, zero value otherwise.

### GetDistanceTypesOk

`func (o *DistanceTypesCriteria) GetDistanceTypesOk() (*[]DistanceTypeType, bool)`

GetDistanceTypesOk returns a tuple with the DistanceTypes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDistanceTypes

`func (o *DistanceTypesCriteria) SetDistanceTypes(v []DistanceTypeType)`

SetDistanceTypes sets DistanceTypes field to given value.

### HasDistanceTypes

`func (o *DistanceTypesCriteria) HasDistanceTypes() bool`

HasDistanceTypes returns a boolean if a field has been set.

### GetLinks

`func (o *DistanceTypesCriteria) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *DistanceTypesCriteria) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *DistanceTypesCriteria) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *DistanceTypesCriteria) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *DistanceTypesCriteria) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *DistanceTypesCriteria) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *DistanceTypesCriteria) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *DistanceTypesCriteria) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


