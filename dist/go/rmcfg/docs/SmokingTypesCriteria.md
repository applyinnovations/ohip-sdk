# SmokingTypesCriteria

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**SmokingTypes** | Pointer to [**[]SmokingTypeType**](SmokingTypeType.md) | List of Smoking Types. | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewSmokingTypesCriteria

`func NewSmokingTypesCriteria() *SmokingTypesCriteria`

NewSmokingTypesCriteria instantiates a new SmokingTypesCriteria object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSmokingTypesCriteriaWithDefaults

`func NewSmokingTypesCriteriaWithDefaults() *SmokingTypesCriteria`

NewSmokingTypesCriteriaWithDefaults instantiates a new SmokingTypesCriteria object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetLinks

`func (o *SmokingTypesCriteria) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *SmokingTypesCriteria) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *SmokingTypesCriteria) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *SmokingTypesCriteria) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetSmokingTypes

`func (o *SmokingTypesCriteria) GetSmokingTypes() []SmokingTypeType`

GetSmokingTypes returns the SmokingTypes field if non-nil, zero value otherwise.

### GetSmokingTypesOk

`func (o *SmokingTypesCriteria) GetSmokingTypesOk() (*[]SmokingTypeType, bool)`

GetSmokingTypesOk returns a tuple with the SmokingTypes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSmokingTypes

`func (o *SmokingTypesCriteria) SetSmokingTypes(v []SmokingTypeType)`

SetSmokingTypes sets SmokingTypes field to given value.

### HasSmokingTypes

`func (o *SmokingTypesCriteria) HasSmokingTypes() bool`

HasSmokingTypes returns a boolean if a field has been set.

### GetWarnings

`func (o *SmokingTypesCriteria) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *SmokingTypesCriteria) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *SmokingTypesCriteria) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *SmokingTypesCriteria) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


