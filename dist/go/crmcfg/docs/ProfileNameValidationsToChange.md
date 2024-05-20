# ProfileNameValidationsToChange

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ProfileNames** | Pointer to [**ProfileNameValidationEditType**](ProfileNameValidationEditType.md) |  | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewProfileNameValidationsToChange

`func NewProfileNameValidationsToChange() *ProfileNameValidationsToChange`

NewProfileNameValidationsToChange instantiates a new ProfileNameValidationsToChange object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewProfileNameValidationsToChangeWithDefaults

`func NewProfileNameValidationsToChangeWithDefaults() *ProfileNameValidationsToChange`

NewProfileNameValidationsToChangeWithDefaults instantiates a new ProfileNameValidationsToChange object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetProfileNames

`func (o *ProfileNameValidationsToChange) GetProfileNames() ProfileNameValidationEditType`

GetProfileNames returns the ProfileNames field if non-nil, zero value otherwise.

### GetProfileNamesOk

`func (o *ProfileNameValidationsToChange) GetProfileNamesOk() (*ProfileNameValidationEditType, bool)`

GetProfileNamesOk returns a tuple with the ProfileNames field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProfileNames

`func (o *ProfileNameValidationsToChange) SetProfileNames(v ProfileNameValidationEditType)`

SetProfileNames sets ProfileNames field to given value.

### HasProfileNames

`func (o *ProfileNameValidationsToChange) HasProfileNames() bool`

HasProfileNames returns a boolean if a field has been set.

### GetLinks

`func (o *ProfileNameValidationsToChange) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *ProfileNameValidationsToChange) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *ProfileNameValidationsToChange) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *ProfileNameValidationsToChange) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *ProfileNameValidationsToChange) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *ProfileNameValidationsToChange) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *ProfileNameValidationsToChange) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *ProfileNameValidationsToChange) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


