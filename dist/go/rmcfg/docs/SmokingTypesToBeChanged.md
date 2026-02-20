# SmokingTypesToBeChanged

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**SmokingTypes** | Pointer to [**[]SmokingTypeType**](SmokingTypeType.md) | List of Smoking Types. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewSmokingTypesToBeChanged

`func NewSmokingTypesToBeChanged() *SmokingTypesToBeChanged`

NewSmokingTypesToBeChanged instantiates a new SmokingTypesToBeChanged object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSmokingTypesToBeChangedWithDefaults

`func NewSmokingTypesToBeChangedWithDefaults() *SmokingTypesToBeChanged`

NewSmokingTypesToBeChangedWithDefaults instantiates a new SmokingTypesToBeChanged object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetSmokingTypes

`func (o *SmokingTypesToBeChanged) GetSmokingTypes() []SmokingTypeType`

GetSmokingTypes returns the SmokingTypes field if non-nil, zero value otherwise.

### GetSmokingTypesOk

`func (o *SmokingTypesToBeChanged) GetSmokingTypesOk() (*[]SmokingTypeType, bool)`

GetSmokingTypesOk returns a tuple with the SmokingTypes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSmokingTypes

`func (o *SmokingTypesToBeChanged) SetSmokingTypes(v []SmokingTypeType)`

SetSmokingTypes sets SmokingTypes field to given value.

### HasSmokingTypes

`func (o *SmokingTypesToBeChanged) HasSmokingTypes() bool`

HasSmokingTypes returns a boolean if a field has been set.

### GetLinks

`func (o *SmokingTypesToBeChanged) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *SmokingTypesToBeChanged) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *SmokingTypesToBeChanged) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *SmokingTypesToBeChanged) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *SmokingTypesToBeChanged) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *SmokingTypesToBeChanged) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *SmokingTypesToBeChanged) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *SmokingTypesToBeChanged) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


